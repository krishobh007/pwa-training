/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function() {
  'use strict';

  // TODO - 3.1: Add install and activate event listeners
  /*self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
  });*/

  self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
  });

  // TODO - 3.3: Add a comment to change the service worker

  // TODO - 4: Add fetch listener
  /*self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
  });*/

  var CACHE_NAME = 'static-cache';
  var urlsToCache = [
    '.',
    'index.html',
    'styles/*'
  ];
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}

})();
