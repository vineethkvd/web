'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "762482a26c9ffec465fbaf71a7990422",
"assets/AssetManifest.bin.json": "64c1b4b97876619fcbda362e7eab4431",
"assets/AssetManifest.json": "9c0f825221b2059555c32eb2d0d0007f",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/002-credit-card%25201.svg": "ccbda0eb157eb4727774cced88065de8",
"assets/assets/icons/003-money%25201.svg": "cb51af791d32db049b86fd66dc51dd26",
"assets/assets/icons/004-user%25201.svg": "8bc27aec9a0345b784ceae718c9a352a",
"assets/assets/icons/approval.svg": "2082eb86d471a3964a1f39a461d2c656",
"assets/assets/icons/carbon_close-filled.svg": "90d41dacca670d291a1cbcfdcf82d99f",
"assets/assets/icons/carbon_report.svg": "c7d3b1fd5f3ab8a5db6a71d3bfbe8675",
"assets/assets/icons/debi-advice.svg": "b79c64572ce0712c06a0c836154fcb9a",
"assets/assets/icons/ep_arrow-right.svg": "a86c19c7f794deaf6f93efacb8a23496",
"assets/assets/icons/excel.svg": "b9fb50d5c403175fd2dc61d999617ac5",
"assets/assets/icons/fa-solid_user-friends.svg": "a4413f4837014a02d0a1026472b530b1",
"assets/assets/icons/hugeicons_gold.svg": "dbd629a388efd1827f3437db831de247",
"assets/assets/icons/hugeicons_hot-price.svg": "42843d2b99e761fc87659bf46080e460",
"assets/assets/icons/hugeicons_payment-01.svg": "5b310d3adb77b1eac8d9a34bda07af3c",
"assets/assets/icons/hugeicons_payment-02.svg": "2c54b4d69f4186865bc7dbbe8aad5e92",
"assets/assets/icons/icon%2520_close%2520small_.svg": "ee819aaf7d3da122227715e9e1a0123d",
"assets/assets/icons/icon-park-outline_change.svg": "2cb7cd3cbbab677b1f743dbaf0015401",
"assets/assets/icons/icons8_advertising.svg": "decd07b3c69f12d7d948d734cdd2e166",
"assets/assets/icons/ic_baseline-download.svg": "f07e65deba15bf5dc20e78ad2f99c004",
"assets/assets/icons/ic_outline-email.svg": "d8f20f64edcddc674df1eb7b124fa277",
"assets/assets/icons/ix_inquiry.svg": "d4286c709d1ec69a2c722d7654c97917",
"assets/assets/icons/lsicon_report-filled.svg": "953ac26dc03d8091d1e722d490344179",
"assets/assets/icons/marketeq_rejected-file-2.svg": "126702e033dcd078fc39969480dd55d8",
"assets/assets/icons/material-symbols_verified.svg": "084987129ec36013b8626ac9c3d19357",
"assets/assets/icons/mdi_account-pending.svg": "0fdeb1af3ae1fa4aa6deb1693719fc5a",
"assets/assets/icons/mdi_bank.svg": "9b8af1f5a1a680b01847ab7712903bd3",
"assets/assets/icons/mdi_update.svg": "2e9656f98d62f9d4fc6f10b905ce5ea0",
"assets/assets/icons/mingcute_user-4-fill.svg": "7ffe3ddfb2583032f6674b2f443b66ec",
"assets/assets/icons/pdf_btn.svg": "c4a8abbb559a6121ffdfcd9c4fb6f394",
"assets/assets/icons/re-initiate.svg": "c18e781929d3db6d1fee42476459b1fd",
"assets/assets/icons/request.svg": "f4df251f0311b15aba2494c1a4faa113",
"assets/assets/icons/solar_accessibility-broken.svg": "e572f393020cdfcd7708f8ff1d31005c",
"assets/assets/icons/solar_home-bold-duotone.svg": "843253b160c9d935db8c37b37a8b149c",
"assets/assets/icons/subway_missing.svg": "d5066b0984545cfafb59628086c972c5",
"assets/assets/icons/tabler_certificate.svg": "cad5dc3cc1944a8ef75a698bd84c9de8",
"assets/assets/icons/tabler_switch-2.svg": "5f0f9143d0d73e40208438a5ff1bcc25",
"assets/assets/icons/tabler_upload.svg": "f940a44acc5971a0478fc62768c23399",
"assets/assets/icons/Vector.svg": "ed9cc70cac9759c9a64e1df3d497a164",
"assets/assets/images/app_background.jpg": "054f9c74a0480c8198a7d9fddb29637b",
"assets/assets/images/app_logo.png": "4e5a94e5c1b39b6202c935b671df30cd",
"assets/assets/images/top_app_logo.png": "8dd0b85759017621bcfa5fc04c0f65f6",
"assets/FontManifest.json": "83dc8a4e6d0eccb41673141869a1de75",
"assets/fonts/MaterialIcons-Regular.otf": "da79c2e487d302d39a9a971e740af8d8",
"assets/NOTICES": "06c2a5056cf960a0a37dffc67467a100",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8dd0b85759017621bcfa5fc04c0f65f6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "26a8efb06d129a980c687aa8ce3417fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c621ec49292fbd90c929759207652cd7",
"/": "c621ec49292fbd90c929759207652cd7",
"main.dart.js": "467e39f97950ca681cc1b50aa1c6d368",
"manifest.json": "05418b64ef421fc18ec9da68281c6561",
"version.json": "9273c1964168f46f6c4c2020cfa31bff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
