self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var promise = Promise.resolve();    
  promise = promise.then(function() { clients.openWindow("https://app.safety4me.com/#/"); });
  event.waitUntil(promise);  
});