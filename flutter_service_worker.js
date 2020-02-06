'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "aefff53b6a8daf4c3d83c89ca98462a3",
"/main.dart.js": "13cd073a14c2be3216b38bfbf9f56ecc",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "e90454aafaaf8279a5ce827b8e486611",
"/assets/LICENSE": "b06715fe03c67cb3db8aa766d66a3f78",
"/assets/AssetManifest.json": "3ff317a615ef6e954271e1b3937c6b05",
"/assets/FontManifest.json": "d1d98195c74ea8578011539c85a1ba98",
"/assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"/assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"/assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "5037e86e017c472bb7f66d991a97d57a",
"/assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"/assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"/assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"/assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"/assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
