self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (event.action === 'abrir') {  
    clients.openWindow("https://app.safety4me.com/#/");
  } 
});