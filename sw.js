self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./src/master.css", "./images/wheel192.png"]);
		})
	);
})

