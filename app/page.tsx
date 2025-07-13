"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { siTelegram } from "simple-icons"
import TypingText from "@/components/typing-text"



export default function NiksDevWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const sectionLabels = {
    home: "Главная",
    // about: "О себе",
    projects: "Проекты",
    skills: "Навыки"
  }
  const sections: (keyof typeof sectionLabels)[] = ["home", "projects", "skills"]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const bottomThreshold = 50

      if (scrollY + viewportHeight >= documentHeight - bottomThreshold) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "MySQL", "SQLite", "TypeScript - initial level"] },
    { category: "Frontend", items: ["JavaScript", "Next.js - initial level"] },
    { category: "Tools", items: ["Git", "Docker"] }
  ]
  type Project = {
    title: string
    description: string
    tech: string[]
    github?: string
    live: string
    image: string
    imageWidth?: number
    imageHeight?: number
  }
  const projects: Project[] = [
    {
      title: "Telegram ChatGPT Bot",
      description:
        "Бот Telegram, в котором пользователи могут взаимодействовать с моделями ИИ (OpenAI, Google, Kandinsky, Flux).",
      tech: [],
      live: "https://t.me/gpt_neural_bot",
      image: "/bot_logo.jpg",
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: "YouTube Watch",
      description:
        "Удобный Telegram-сервис для скачивания видео и аудио с YouTube в нужном качестве.",
      tech: [],
      live: "https://t.me/youtube_watchbot",
      image: "/yt_bot.jpg",
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      title: "AutoLolz Script",
      description:
        "Автоматическая раздача ключей/аккаунтов на форуме lolz.live (Lolzteam).",
      tech: [],
      live: "https://t.me/autololzupdates",
      image: "/autololz.jpg",
      imageWidth: 300,
      imageHeight: 300,
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="relative">
              <div className="text-4xl font-bold text-primary mb-8 animate-pulse">niks.dev</div>
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-muted rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                </div>
              </div>
              <p className="text-muted-foreground animate-pulse">Loading...</p>
            </div>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto md:h-10 hover:opacity-80 hover:scale-105 transition-all duration-200"
                  priority
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`transition-colors hover:text-primary ${
                      activeSection === section ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {sectionLabels[section as keyof typeof sectionLabels]}
                  </button>
                ))}
              </div>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t">
                <div className="flex flex-col space-y-4 pt-4">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-left transition-colors hover:text-primary"
                    >
                      {sectionLabels[section as keyof typeof sectionLabels]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <TypingText
                  parts={[
                    { text: "Hi, I'm " },
                    { text: "NikS", className: "text-primary" },
                  ]}
                  speed={100}
                  active={!isLoading}
                />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Developer & Pentester
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  Мои проекты
                </Button>
              </div>
              <div className="flex justify-center space-x-6">
                <Link 
                  href="https://github.com/niksdev09" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-10 w-10" />
                </Link>
                <Link
                  href="https://t.me/niks_dev"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siTelegram.path} />
                  </svg>
                </Link>
                <Link
                  href="https://lolz.live/members/3870999/"
                  className="group transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-10 w-10" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <mask id="cutout">
                          <rect width="128" height="128" rx="14" fill="white"></rect>
                          <path d="M24.9834 98.775C36.4512 108.144 49.7072 113.49 63.8291 113.49C84.8448 113.49 103.922 101.641 118.077 82.3521C112.1 74.2065 105.244 67.3879 97.7384 62.2305L85.6777 68.2867C88.2705 72.343 89.7717 77.1711 89.7717 82.3521C89.7717 96.7469 78.158 108.417 63.8291 108.417C52.6953 108.417 43.1992 101.373 39.5193 91.4718L24.9834 98.775V98.775ZM54.9023 83.745C55.1894 85.6367 56.074 87.3966 57.434 88.7707C59.1328 90.4742 61.4291 91.4294 63.8291 91.42C68.8218 91.42 72.8593 87.359 72.8593 82.3427C72.8593 79.8816 71.8852 77.6464 70.2947 76.0088L54.8976 83.745H54.9023Z" fill="black"></path>
                          <path d="M38.4838 76.598L104.237 44.9898L89.7854 14.9297L82.3222 41.4934L73.3531 22.8306L65.8851 49.3943L56.916 30.7315L49.4481 57.2952L40.479 38.6324L33.011 65.1961L24.0419 46.5333L12 89.3317L28.4371 81.4308L38.4838 76.6028V76.598Z" fill="black"></path>
                        </mask>
                      </defs>
                      <rect width="128" height="128" rx="14" className="fill-muted-foreground group-hover:fill-primary transition-colors" mask="url(#cutout)"></rect>
                    </svg>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-8 inset-x-0 mx-auto w-fit animate-bounce">
              <ChevronDown className="h-10 w-10 text-muted-foreground" />
            </div>
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Проекты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={project.imageWidth || 300}
                      height={project.imageHeight || 200}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{
                        // height: `${project.imageHeight || 200}px`,
                        aspectRatio: `${project.imageWidth || 300}/${project.imageHeight || 200}`,
                      }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        {project.github && (
                          <Link href={project.github} className="text-muted-foreground hover:text-primary">
                            <Github className="h-4 w-4" />
                          </Link>
                        )}
                        <Link href={project.live} className="text-muted-foreground hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Стек технологий</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {skillGroup.category === "Frontend" && <Globe className="h-6 w-6 text-primary" />}
                      {skillGroup.category === "Backend" && <Database className="h-6 w-6 text-primary" />}
                      {skillGroup.category === "Tools" && <Code className="h-6 w-6 text-primary" />}
                    </div>
                    <CardTitle>{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <footer className="py-8 border-t bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} niks.dev. Made with ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
