'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "779e4407538f0ef1c54b84dbb99cfe80",
"index.html": "a8652b3032b8a882ce26639720752112",
"/": "a8652b3032b8a882ce26639720752112",
"safety4me_service_worker.js": "79a07849d4bed63174afbb3ab493c482",
"main.dart.js": "4542a27d4de211073dd492883d5a1984",
"web.config": "ac92e3008cb52f53d67d045ed4c9bda0",
"favicon.png": "cb08503dd068a65b09d0db62578bf0f5",
"icons/Icon-192.png": "c4553ce1cf349e24ec2c7b03336a09a1",
"icons/Badge-192.png": "80923c2099d629dcc13e7d9a74297c79",
"icons/Icon-512.png": "7ec73b601ef160284c0784e395583c65",
"manifest.json": "cd388b4185c0071e90c205df95b3b483",
"assets/AssetManifest.json": "4df6fb8b982cf7ae773e8ddae211d355",
"assets/NOTICES": "3efcbf09ed9322c9dd3825bf9c2b9050",
"assets/FontManifest.json": "0ea8a926168b03867b5b247b2a3b26cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Antonia.png": "51e988ebf5bdde7265d9aa9ff3ad89ea",
"assets/assets/images/Happy.png": "74ea04100ada0400a5d6213a50f62bdb",
"assets/assets/images/SplashScreen.png": "93eb8ead4cffaf16abca64a59731f827",
"assets/assets/images/ImagingExamsBackground.png": "0337f466753969c7e1a2bd1bf611fe90",
"assets/assets/images/Hospital.png": "51afd0fe0dbb62e5732cbbbf90f44d1b",
"assets/assets/images/PacificBlueLevelCircle.png": "ef0bde312e2bcdbde51bd653f44b9a1f",
"assets/assets/images/IconLevel1.png": "37d74dbd9fa6b029a448bef3608a5e8a",
"assets/assets/images/Trophy.png": "50a6a1becf553fef8b3a2908df6dec5a",
"assets/assets/images/Graca.png": "5f1725ab850fa686c8464ec4f1e55e33",
"assets/assets/images/NewBackground.png": "503e2c6df0d0cc5bbca61b4b4749cb61",
"assets/assets/images/YPacificBlueLogo.png": "9bc55f2c0f87fd87819cc0544e78ff5d",
"assets/assets/images/Neutral.png": "de82b4fe70d6d2b937247ccf0187dffc",
"assets/assets/images/Sad.png": "da8279fbffedf8360e01180952f8240a",
"assets/assets/images/AllTeam.png": "64920b6a5ba8af2b670bb7bccec002b2",
"assets/assets/images/GoldenTrophy.png": "65cba4a60e276e74328455e93a8fee5b",
"assets/assets/images/GoldenTrophy.svg": "747f2a94e1d2de85382a258801659b42",
"assets/assets/images/YWhiteLogo.png": "1e57e68851df204256d53cc0aa085bb9",
"assets/assets/images/MobileBackgroundEmpty.png": "9ad9ca71e0740deb0f3f910aa243cba9",
"assets/assets/images/RafaelRounded.png": "cda64837b63e87d87df9f73ed67c1ce0",
"assets/assets/images/FlorenceRounded.png": "7015bd04440cf532d2eea51b29f30197",
"assets/assets/images/GoldenTrophyButton.png": "fc6a53452b7b35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground.jpg": "37e8b3741d5ea6c72a75a6b20f418a9f",
"assets/assets/images/LogoSafety4Me.png": "db921a78d44f427d8df8465c8b5e6a27",
"assets/assets/images/GameRafaelRounded.png": "ec4f71a59d3aec167c50c68311314a74",
"assets/assets/images/Hector.png": "ff7b15f2f3fcecada4c8dcc7ff84c033",
"assets/assets/images/Ana.png": "907ac0383ff8f183a8f5a408c7519cfc",
"assets/assets/images/OncologyBackground.png": "8925acbd7400db2762e2f97071aa01a2",
"assets/assets/images/Fernando.png": "f0538597ad37173e547341cbc345ec6e",
"assets/assets/images/PacificBlueLevelCircle.svg": "580259736d27cf0dfabeab74884091b7",
"assets/assets/images/CrossRounded.png": "c40711368433f818a2561f993415ade7",
"assets/assets/images/Heart.png": "d2e877804a8dafbdf15fc7c237f37bae",
"assets/assets/images/MobileBackground.png": "241fad318ca06b2d7474dabdacbb65cc",
"assets/assets/images/GracaRounded.png": "cda2ff1420508f64c84f6772b18665b8",
"assets/assets/images/ChatBalloon.png": "c34ec7f255a84a7214425019d66c0bdf",
"assets/assets/images/SplashScreenBackground.png": "479d94df8cf1df3f4d13f107801c624b",
"assets/assets/images/IconDeslogado.png": "062b99c33ab89f59e30a80f249504eac",
"assets/assets/images/Florence.png": "068841f6ca5803cf94f553cf49d1ecc9",
"assets/assets/images/DesktopBackgroundEmpty.png": "344e66eda2e6220d428c6c963315e432",
"assets/assets/images/AllTeamWithBackground.png": "29e103a6f77f212b2e3e9bfbf3a1d4af",
"assets/assets/images/AntoniaRounded.png": "c3582a09a5a9c80ff6dd1ce2b461ac8c",
"assets/assets/images/TVDoutorcoracao.png": "22f10e0fcc334aaced94c1b97b2fbdd4",
"assets/assets/images/RedHeartLevelCircle.png": "f3b19f94ce0962c46dc08563a572cc32",
"assets/assets/images/FernandoRounded.png": "4031f3bfa29dbd9a66c9c7581aa43b9f",
"assets/assets/images/Logo.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/DesktopBackground.png": "3aed3c034bc59fe948c077521c3a14c8",
"assets/assets/images/LogoSafety4MeWhitePacificBlue.png": "ae2a07b9516a46dddb1fdab6631db46e",
"assets/assets/images/FinalTrophy.png": "619043e4be927c802116e05c208ff8ac",
"assets/assets/images/TVDoutor.png": "e432a5611fc4657d567c900cf9c10af8",
"assets/assets/images/IconLogado.png": "f7e98b603efd6b84933c52048c2bbf0a",
"assets/assets/images/TVDoutor.svg": "582a04bf55dd77f28af633a14a93e7fb",
"assets/assets/images/LogoSafety4MeWhite.png": "25e5ef0cffd790f38ed304aaabc12a53",
"assets/assets/images/NewBackground3.png": "804e093cb66146a2d2fa1abfd346d6b3",
"assets/assets/images/LogoTvDoutor.png": "25bfcda1d5699b1da3943ced894a69b7",
"assets/assets/images/NewBackground2.jpg": "6ee8618e8db19fc702cf18ba13f7c3c4",
"assets/assets/images/Rafael.png": "ad6b9366674e72f8ba959673bf03f766",
"assets/assets/images/RedHeartLevelCircle.svg": "e270503ca7602aa8ef508e1e7ebc6eac",
"assets/assets/images/HospitalizationBackground.png": "0b912eb0b3676fe4f27ca2bf9d50f94a",
"assets/assets/images/DialysisBackground.png": "1b6b4c5613c539f5f0104fab80f89708",
"assets/assets/images/HectorRounded.png": "270411e2fdd31f56bee44bbbf1aeeb88",
"assets/assets/images/AnaRounded.png": "4fee69afdf7eac2d28f29da82d1f09fb",
"assets/assets/fonts/Quentin.otf": "328fdcdf83ac1d612edc70ebd41c861f",
"assets/assets/animations/HomeAnaAndHector.json": "1fe591d62c1239f1483f76bf9f169762",
"assets/assets/animations/GameExplain.json": "1d5ea95b73ae09856dd1c2b7e9c024be",
"assets/assets/animations/GameBackgroundMobile.json": "976b44632e2419a09e0e049e88a712bf",
"assets/assets/animations/GameBackgroundWeb.json": "e74200d6afe4313a6e2a9546c404411f",
"assets/assets/animations/HomeAnaAndGraca.json": "5542523a8ec19f6a18252dc9b27bd1cf",
"assets/assets/animations/HomeHectorAndFernando.json": "726f9b58aea48ce1299a87fba99b8fe7",
"assets/assets/animations/HomeAntoniaAndRafael.json": "de9098cc9e802d17752907160e202632",
"assets/assets/animations/HomeRafaelAndFlorence.json": "7622139131e00240207970afe12f4f0f",
"assets/assets/animations/HomeFlorenceAndFernando.json": "036de2e6aa7570b078c7c750a11fcd82",
"flutter_facebook_auth.js": "15ddb918bb42aae3e664d8accc9bb216"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
