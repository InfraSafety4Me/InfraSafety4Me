self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow("https://app.safety4me.com/#/");
});