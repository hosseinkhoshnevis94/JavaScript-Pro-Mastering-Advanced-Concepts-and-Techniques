function showNotification(message, duration) {
  const notification = document.createElement("DIV");
  notification.innerText = message;
  notification.className = "notification";
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, duration);
}

showNotification("Signed you in!", 5000);
showNotification("I hate you!", 3000);
showNotification("Please come again", 1000);
