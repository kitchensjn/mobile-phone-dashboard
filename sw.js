self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll(["./", "./src/master.css", "./images/wheel192.png"]);
		})
	);
})

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return repsonse || fetch(e.request);
		})
	);
})