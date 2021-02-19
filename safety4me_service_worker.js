self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var promise = Promise.resolve();
  promise = promise.then(function () {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Notification',
      eventAction: 'clicked',
      eventLabel: 'test_notification'

    });
    clients.openWindow("https://app.safety4me.com/#/");
  }
  );
  event.waitUntil(promise);
});