console.log('Service Worker Loaded..')
self.addEventListener('push',function(event){

	const data=event.data.json();
	self.registration.showNotification(data.title,{
		body:'Notification Example',
		icon:'http://image.ibb.co/frYOFd/tmlogo.png'
	});
});