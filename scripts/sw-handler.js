

// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open('janus-url-cache-v1').then(function(cache) {
			return fetch(event.request).then(function(response) {
				cache.put(event.request, response.clone());
				return response;
			});
		})
	);
});
