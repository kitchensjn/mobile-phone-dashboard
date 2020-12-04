self.addEventListener("install", e => {
	console.log("installed!");
	/*
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./src/master.css", "./src/index.js", "./images/wheel192.png"]);
		})
	);
	*/
})

/*
self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		})
	);
})
*/