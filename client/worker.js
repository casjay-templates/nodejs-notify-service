console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: "Welcome!",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
  console.log("Push Recieved...");
});
