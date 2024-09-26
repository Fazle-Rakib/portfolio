/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-04ff6d6c'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "about-me.html",
    "revision": "b183e4bafd694d0dd815754e761053b8"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "42aab04eee45d1cb8a08f671bbfef3a6"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "8e4d8a28273b2ec1ee3cdb1029fc0a19"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "b82e1f355f16081ac3e300019ee4f60c"
  }, {
    "url": "articles.html",
    "revision": "2ad4ba3e1dcbef70d6e201d9b3c2c06e"
  }, {
    "url": "articles/badlad-document-layout-dataset.html",
    "revision": "ebde457c608478d4d05f598c03faf652"
  }, {
    "url": "articles/ood-speech-benchmark-dataset-bengali-asr.html",
    "revision": "cb7e7c649455791e53694618f4bb42ba"
  }, {
    "url": "assets/_...all_-26ec2c0f.js",
    "revision": null
  }, {
    "url": "assets/_...all_-822d424e.css",
    "revision": null
  }, {
    "url": "assets/about-me-4fdc58db.js",
    "revision": null
  }, {
    "url": "assets/about-me-eaee56b7.css",
    "revision": null
  }, {
    "url": "assets/app-329f424b.js",
    "revision": null
  }, {
    "url": "assets/article-0f30d1e8.js",
    "revision": null
  }, {
    "url": "assets/article-8b4f8e76.css",
    "revision": null
  }, {
    "url": "assets/b64-image-352cf1c8.png",
    "revision": null
  }, {
    "url": "assets/badlad-document-layout-dataset-132a5a31.js",
    "revision": null
  }, {
    "url": "assets/binary-text-5dd00e0e.svg",
    "revision": null
  }, {
    "url": "assets/circle-fill-2eb554d4.svg",
    "revision": null
  }, {
    "url": "assets/code-61849eec.svg",
    "revision": null
  }, {
    "url": "assets/figma-8ab7cd92.svg",
    "revision": null
  }, {
    "url": "assets/git-pull-request-bc354b52.svg",
    "revision": null
  }, {
    "url": "assets/GithubRepoCard-42242a07.js",
    "revision": null
  }, {
    "url": "assets/GithubRepoCard-e3857b55.css",
    "revision": null
  }, {
    "url": "assets/gridsome-logo-e21d213b.svg",
    "revision": null
  }, {
    "url": "assets/html-699a4221.svg",
    "revision": null
  }, {
    "url": "assets/index-035b1c1c.js",
    "revision": null
  }, {
    "url": "assets/index-222d8ce3.css",
    "revision": null
  }, {
    "url": "assets/index-8e518c73.css",
    "revision": null
  }, {
    "url": "assets/js-dcea0c6b.svg",
    "revision": null
  }, {
    "url": "assets/lamp-off-f6a06f1f.svg",
    "revision": null
  }, {
    "url": "assets/lamp-on-00e4d7c6.svg",
    "revision": null
  }, {
    "url": "assets/laravel-fdabeb03.svg",
    "revision": null
  }, {
    "url": "assets/link-258f1bd7.svg",
    "revision": null
  }, {
    "url": "assets/logo-dark-150fc575.svg",
    "revision": null
  }, {
    "url": "assets/logo-white-366438ba.svg",
    "revision": null
  }, {
    "url": "assets/me-e7bcd3fc.png",
    "revision": null
  }, {
    "url": "assets/meme-281de563.png",
    "revision": null
  }, {
    "url": "assets/netlify-logo-e98d5c0e.svg",
    "revision": null
  }, {
    "url": "assets/nodejs-5dbfcfcf.svg",
    "revision": null
  }, {
    "url": "assets/now-065fe57a.js",
    "revision": null
  }, {
    "url": "assets/now-2240176c.css",
    "revision": null
  }, {
    "url": "assets/nuxt-d5905e36.svg",
    "revision": null
  }, {
    "url": "assets/octocat-2e7aa972.svg",
    "revision": null
  }, {
    "url": "assets/ood-speech-benchmark-dataset-bengali-asr-786b81c8.js",
    "revision": null
  }, {
    "url": "assets/python-b0f71783.svg",
    "revision": null
  }, {
    "url": "assets/react-fe45c48c.svg",
    "revision": null
  }, {
    "url": "assets/route-block-83d24a4e.js",
    "revision": null
  }, {
    "url": "assets/sass-80d1ea34.svg",
    "revision": null
  }, {
    "url": "assets/simple-d588e183.js",
    "revision": null
  }, {
    "url": "assets/spotlight-52e55699.svg",
    "revision": null
  }, {
    "url": "assets/star-fill-e2ab3ebc.svg",
    "revision": null
  }, {
    "url": "assets/ts-49e5c4fe.svg",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-60ded940.js",
    "revision": null
  }, {
    "url": "assets/vue-22e1e063.svg",
    "revision": null
  }, {
    "url": "assets/water_drop-28b928c6.png",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-08b2315b.js",
    "revision": null
  }, {
    "url": "assets/xd-85b03743.svg",
    "revision": null
  }, {
    "url": "favicon-16x16.png",
    "revision": "a03a48b6afa5dfe30dc26d0574fb82cc"
  }, {
    "url": "favicon-32x32.png",
    "revision": "ec43d31031d18da4836e8c3706cfdef4"
  }, {
    "url": "favicon.ico",
    "revision": "776e304e9c581de2bdc544485546b4a1"
  }, {
    "url": "favicon.png",
    "revision": "42aab04eee45d1cb8a08f671bbfef3a6"
  }, {
    "url": "index.html",
    "revision": "d9ecb98c5ea465169b860208e5c5eb38"
  }, {
    "url": "mstile-150x150.png",
    "revision": "459241a110a9ef38c6542127a6834841"
  }, {
    "url": "now.html",
    "revision": "5d1b64f53f0acf6c44ad974a72113372"
  }, {
    "url": "robots.txt",
    "revision": "d3087b14b5dc8dce0f8cb6e07d107d29"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "72277a1712b14ea095e1e0cba0d65359"
  }, {
    "url": "manifest.webmanifest",
    "revision": "0588d06272991dfbd391c41e338c25af"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
