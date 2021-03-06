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
var app = (function() {
  'use strict';

  function logResult(result) {
    console.log(result);
  }

  function logError(error) {
    console.log('Looks like there was a problem: \n', error);
  }

  // TODO 2.1a
  if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    return;
  }
  else{
    console.log("foundd");
  }

  function fetchJSON() {
    // TODO 2.1b
    fetch('examples/animals.json')
    .then(validateResponse)
    .then(readResponseAsJSON) // 3
.then(logResult)
.catch(logError);
  }

  function validateResponse(response) {
    console.log(response);
    console.log(response.ok);
    return response;
    // TODO 2.3
  }

  function readResponseAsJSON(response) {
    console.log(response);
    return response.json();
  }

  function showImage(responseAsBlob) {
    //  TODO 3a
  }

  function readResponseAsBlob(response) {
    // TODO 3b
  }

  function fetchImage() {
    fetch('examples/kitten.jpg')
    .then(validateResponse)
    .then(readResponseAsBlob)
    .then(showImage)
    .catch(logError);
  }


  function showText(responseAsText) {
    //  TODO 4a
  }

  function readResponseAsText(response) {
    // TODO 4b
  }

  function fetchText() {
    fetch('examples/words.txt')
    .then(validateResponse)
    .then(readResponseAsText)
    .then(showText)
    .catch(logError);
  }


  function headRequest() {
    // TODO 5.1
  }

  function logSize(response) {
    // TODO 5.2
  }

  /* NOTE: Never send unencrypted user credentials in production! */
  function postRequest() {
    // TODO 6.2
  }

  // Don't worry if you don't understand this, it's not part of the Fetch API.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    readResponseAsJSON: (readResponseAsJSON),
    readResponseAsBlob: (readResponseAsBlob),
    readResponseAsText: (readResponseAsText),
    validateResponse: (validateResponse),
    fetchJSON: (fetchJSON),
    fetchImage: (fetchImage),
    fetchText: (fetchText),
    headRequest: (headRequest),
    postRequest: (postRequest)
  };

})();
