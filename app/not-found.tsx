"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <div>
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
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <div className="mb-8">
                  <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl md:text-9xl font-bold text-primary/20 select-none">404</div>
                    </div>

                    <div className="absolute top-4 left-4 animate-bounce">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <FileQuestion className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="absolute top-8 right-8 animate-bounce" style={{ animationDelay: "0.5s" }}>
                      <div className="p-2 bg-muted rounded-full">
                        <Search className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 animate-bounce" style={{ animationDelay: "1s" }}>
                      <div className="p-2 bg-secondary rounded-full">
                        <Home className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Упс! <span className="text-primary">Страница не найдена</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Страница, которую вы ищете, была удалена или перемещена.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Home className="h-5 w-5 mr-2" />
                      Вернуться на главную
                    </Button>
                  </Link>
                </div>
              </div>
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
