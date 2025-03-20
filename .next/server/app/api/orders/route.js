/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/orders/route";
exports.ids = ["app/api/orders/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_Single_Vender_Ecommerce_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/route.js */ \"(rsc)/./app/api/orders/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/route\",\n        pathname: \"/api/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\Single-Vender-Ecommerce\\\\app\\\\api\\\\orders\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Projects_Single_Vender_Ecommerce_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9yZGVycyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNTaW5nbGUtVmVuZGVyLUVjb21tZXJjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3RzJTVDU2luZ2xlLVZlbmRlci1FY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcXFxhcHBcXFxcYXBpXFxcXG9yZGVyc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvb3JkZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvb3JkZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vcmRlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcXFxhcHBcXFxcYXBpXFxcXG9yZGVyc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/orders/route.js":
/*!*********************************!*\
  !*** ./app/api/orders/route.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/databaseconnect */ \"(rsc)/./lib/databaseconnect.js\");\n/* harmony import */ var _models_ordermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/ordermodel */ \"(rsc)/./models/ordermodel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(req) {\n    try {\n        // Connect to the database\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // Fetch all products from the database\n        const orders = await _models_ordermodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        // Return the products as a JSON response\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Products fetched successfully',\n            orders\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        // Return an error response if something goes wrong\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Error fetching products',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXNEO0FBQ2Q7QUFDRztBQUdwQyxlQUFlRyxJQUFJQyxHQUFHO0lBQ3pCLElBQUk7UUFDRiwwQkFBMEI7UUFDMUIsTUFBTUosZ0VBQWlCQTtRQUV2Qix1Q0FBdUM7UUFDdkMsTUFBTUssU0FBUyxNQUFNSiwwREFBS0EsQ0FBQ0ssSUFBSTtRQUcvQix5Q0FBeUM7UUFDekMsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUFpQ0g7UUFBTyxHQUNuRDtZQUFFSSxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFFZCxtREFBbUQ7UUFDbkQsT0FBT1IscURBQVlBLENBQUNLLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUEyQkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQzNEO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxhcHBcXGFwaVxcb3JkZXJzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tICdAL2xpYi9kYXRhYmFzZWNvbm5lY3QnO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSAnQC9tb2RlbHMvb3JkZXJtb2RlbCc7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICBcclxuICAgICAgLy8gRmV0Y2ggYWxsIHByb2R1Y3RzIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHByb2R1Y3RzIGFzIGEgSlNPTiByZXNwb25zZVxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnUHJvZHVjdHMgZmV0Y2hlZCBzdWNjZXNzZnVsbHknLCBvcmRlcnMgfSxcclxuICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIFxyXG4gICAgICAvLyBSZXR1cm4gYW4gZXJyb3IgcmVzcG9uc2UgaWYgc29tZXRoaW5nIGdvZXMgd3JvbmdcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgbWVzc2FnZTogJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSxcclxuICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiT3JkZXIiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXEiLCJvcmRlcnMiLCJmaW5kIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/databaseconnect.js":
/*!********************************!*\
  !*** ./lib/databaseconnect.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// lib/databaseconnect.js\n\nasync function connectToDatabase() {\n    const mongoUri = process.env.MONGO_URI; // Ensure this is defined\n    if (!mongoUri) {\n        console.error('MONGO_URI is not defined');\n        throw new Error('MONGO_URI is not defined');\n    }\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUri); // Removed deprecated options\n        console.log('Connected to MongoDB');\n        return connection;\n    } catch (error) {\n        console.error('Connection to database failed:', error.message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2Vjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBQ087QUFFaEMsZUFBZUM7SUFDWCxNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsRUFBRSx5QkFBeUI7SUFFakUsSUFBSSxDQUFDSCxVQUFVO1FBQ1hJLFFBQVFDLEtBQUssQ0FBQztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUVBLElBQUk7UUFDQSxNQUFNQyxhQUFhLE1BQU1ULDZDQUFnQixDQUFDRSxXQUFXLDZCQUE2QjtRQUNsRkksUUFBUUssR0FBRyxDQUFDO1FBQ1osT0FBT0Y7SUFDWCxFQUFFLE9BQU9GLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUssT0FBTztJQUNqRTtBQUNKO0FBRUEsaUVBQWVYLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbGliXFxkYXRhYmFzZWNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RhdGFiYXNlY29ubmVjdC5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAgIGNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJOyAvLyBFbnN1cmUgdGhpcyBpcyBkZWZpbmVkXHJcblxyXG4gICAgaWYgKCFtb25nb1VyaSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01PTkdPX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTU9OR09fVVJJIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VyaSk7IC8vIFJlbW92ZWQgZGVwcmVjYXRlZCBvcHRpb25zXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gdG8gZGF0YWJhc2UgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1vbmdvVXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJsb2ciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/databaseconnect.js\n");

/***/ }),

/***/ "(rsc)/./models/ordermodel.js":
/*!******************************!*\
  !*** ./models/ordermodel.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// models/Order.js\n\nconst orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    customer: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: 'Customer',\n        required: true\n    },\n    items: [\n        {\n            productId: {\n                type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n                ref: 'Product',\n                required: true\n            },\n            name: {\n                type: String,\n                required: true\n            },\n            imageUrl: {\n                type: String,\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true,\n                min: 1\n            },\n            price: {\n                type: Number,\n                required: true\n            },\n            total: {\n                type: Number,\n                required: true\n            }\n        }\n    ],\n    totalAmount: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            'Pending',\n            'Shipped',\n            'Delivered',\n            'Cancelled'\n        ],\n        default: 'Pending'\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    }\n}, {\n    timestamps: true\n});\nconst Order = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Order', orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvb3JkZXJtb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtCQUFrQjtBQUNjO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsNENBQWUsQ0FDckM7SUFDRUcsVUFBVTtRQUNSQyxNQUFNSiw0Q0FBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTDtZQUNFQyxXQUFXO2dCQUNUTixNQUFNSiw0Q0FBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7Z0JBQ3BDQyxLQUFLO2dCQUNMQyxVQUFVO1lBQ1o7WUFDQUcsTUFBTTtnQkFDSlAsTUFBTVE7Z0JBQ05KLFVBQVU7WUFDWjtZQUNDSyxVQUFTO2dCQUNSVCxNQUFNUTtnQkFDTkosVUFBVTtZQUNYO1lBQ0RNLFVBQVU7Z0JBQ1JWLE1BQU1XO2dCQUNOUCxVQUFVO2dCQUNWUSxLQUFLO1lBQ1A7WUFDQUMsT0FBTztnQkFDTGIsTUFBTVc7Z0JBQ05QLFVBQVU7WUFDWjtZQUNBVSxPQUFPO2dCQUNMZCxNQUFNVztnQkFDTlAsVUFBVTtZQUNaO1FBQ0Y7S0FDRDtJQUNEVyxhQUFhO1FBQ1hmLE1BQU1XO1FBQ05QLFVBQVU7SUFDWjtJQUNBWSxRQUFRO1FBQ05oQixNQUFNUTtRQUNOUyxNQUFNO1lBQUM7WUFBVztZQUFXO1lBQWE7U0FBWTtRQUN0REMsU0FBUztJQUNYO0lBQ0FDLFdBQVc7UUFDVG5CLE1BQU1vQjtRQUNORixTQUFTRSxLQUFLQyxHQUFHO0lBQ25CO0lBQ0FDLFdBQVc7UUFDVHRCLE1BQU1vQjtRQUNORixTQUFTRSxLQUFLQyxHQUFHO0lBQ25CO0FBQ0YsR0FDQTtJQUFFRSxZQUFZO0FBQUs7QUFHckIsTUFBTUMsUUFBUTVCLDRDQUFlLENBQUM0QixLQUFLLElBQUc1QiwyQ0FBYyxDQUFDLFNBQVNDO0FBQzlELGlFQUFlMkIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbW9kZWxzXFxvcmRlcm1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZGVscy9PcmRlci5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIGN1c3RvbWVyOiB7XHJcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgcmVmOiAnQ3VzdG9tZXInLCAvLyBhc3N1bWluZyB5b3UgaGF2ZSBhIEN1c3RvbWVyIG1vZGVsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwcm9kdWN0SWQ6IHtcclxuICAgICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgICAgIHJlZjogJ1Byb2R1Y3QnLCAvLyBhc3N1bWluZyB5b3UgaGF2ZSBhIFByb2R1Y3QgbW9kZWxcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgaW1hZ2VVcmw6e1xyXG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgcXVhbnRpdHk6IHtcclxuICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG90YWw6IHtcclxuICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0b3RhbEFtb3VudDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHN0YXR1czoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGVudW06IFsnUGVuZGluZycsICdTaGlwcGVkJywgJ0RlbGl2ZXJlZCcsICdDYW5jZWxsZWQnXSxcclxuICAgICAgZGVmYXVsdDogJ1BlbmRpbmcnLFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcclxuICAgIH0sXHJcbiAgICB1cGRhdGVkQXQ6IHtcclxuICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmNvbnN0IE9yZGVyID0gbW9uZ29vc2UubW9kZWxzLk9yZGVyIHx8bW9uZ29vc2UubW9kZWwoJ09yZGVyJywgb3JkZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJjdXN0b21lciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJpdGVtcyIsInByb2R1Y3RJZCIsIm5hbWUiLCJTdHJpbmciLCJpbWFnZVVybCIsInF1YW50aXR5IiwiTnVtYmVyIiwibWluIiwicHJpY2UiLCJ0b3RhbCIsInRvdGFsQW1vdW50Iiwic3RhdHVzIiwiZW51bSIsImRlZmF1bHQiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwidXBkYXRlZEF0IiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/ordermodel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();