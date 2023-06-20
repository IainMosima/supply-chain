"use strict";
(() => {
var exports = {};
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 32196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.png%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/icon.png?__next_metadata
var icon_next_metadata_namespaceObject = {};
__webpack_require__.r(icon_next_metadata_namespaceObject);
__webpack_require__.d(icon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(76145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(19532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(57310);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(38529);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.png%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/icon.png?__next_metadata




const contentType = "image/png"
const resourceUrl = new URL("file:///home/space/Desktop/supply-chain-app/frontend/app/icon.png%3F__next_metadata")
const filePath = (0,external_url_.fileURLToPath)(resourceUrl).replace("?__next_metadata", '')

let buffer
function GET() {
  if (!buffer) { buffer = external_fs_default().readFileSync(filePath) }
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ficon.png%2Froute&name=app%2Ficon.png%2Froute&pagePath=private-next-app-dir%2Ficon.png&appDir=%2Fhome%2Fspace%2FDesktop%2Fsupply-chain-app%2Ffrontend%2Fapp&appPaths=%2Ficon.png&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: icon_next_metadata_namespaceObject,
    pathname: "/icon.png",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ficon.png%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/home/space/Desktop/supply-chain-app/frontend/app/icon.png?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/icon.png/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [79,109], () => (__webpack_exec__(73915)));
module.exports = __webpack_exports__;

})();