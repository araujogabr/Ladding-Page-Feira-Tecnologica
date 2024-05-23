
    function limparCacheNavegador() {
        if ('caches' in window) {
            caches.keys().then(function (cacheNames) {
                cacheNames.forEach(function (cacheName) {
                    caches.delete(cacheName);
                });
            });
        }
    }

    window.addEventListener('beforeunload', limparCacheNavegador);
