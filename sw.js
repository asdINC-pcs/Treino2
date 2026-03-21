const CACHE_NAME = 'treinos-pro-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.error('[SW] Erro ao cachear assets:', err))
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Estratégia de cache: Network First, fallback para Cache
self.addEventListener('fetch', (event) => {
  // Ignorar requisições que não são HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Para arquivos do Fitbod, sempre tentar da rede
  if (event.request.url.includes('fitbod.me')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return new Response('Offline - Vídeo não disponível', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        })
    );
    return;
  }

  // Para outros recursos: tentar rede primeiro, depois cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clonar a resposta para salvar no cache
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // Se a rede falhar, tentar o cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            
            // Se não estiver no cache e for uma navegação, retornar a página principal
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            // Caso contrário, retornar erro
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Mensagens do Service Worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
