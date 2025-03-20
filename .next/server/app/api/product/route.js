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
exports.id = "app/api/product/route";
exports.ids = ["app/api/product/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_Single_Vender_Ecommerce_app_api_product_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/product/route.js */ \"(rsc)/./app/api/product/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product/route\",\n        pathname: \"/api/product\",\n        filename: \"route\",\n        bundlePath: \"app/api/product/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\Single-Vender-Ecommerce\\\\app\\\\api\\\\product\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Projects_Single_Vender_Ecommerce_app_api_product_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9kdWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZHVjdCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNTaW5nbGUtVmVuZGVyLUVjb21tZXJjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3RzJTVDU2luZ2xlLVZlbmRlci1FY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUHJvamVjdHNcXFxcU2luZ2xlLVZlbmRlci1FY29tbWVyY2VcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/product/route.js":
/*!**********************************!*\
  !*** ./app/api/product/route.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/databaseconnect */ \"(rsc)/./lib/databaseconnect.js\");\n/* harmony import */ var _models_productmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/productmodel */ \"(rsc)/./models/productmodel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    try {\n        // Connect to the database\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // Parse the incoming JSON body\n        const result = await req.json();\n        console.log(\"reqbody\", result);\n        const { name, description, price, stock, category, mediaurl } = result;\n        // Validate input\n        // if (!name || !description || !price || !stock || !category || !imageUrl) {\n        //   return NextResponse.json(\n        //     { message: 'All fields are required' },\n        //     { status: 400 }\n        //   );\n        // }\n        // Create a new product document\n        const newProduct = new _models_productmodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            name,\n            description,\n            price,\n            stock,\n            category,\n            imageUrl: mediaurl\n        });\n        // Save product to the database\n        await newProduct.save();\n        // Return success response\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Product created successfully',\n            product: newProduct\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(error);\n        // Return error response if something goes wrong\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Error creating product',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// get all products\nasync function GET(req) {\n    try {\n        // Connect to the database\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // Fetch all products from the database\n        const products = await _models_productmodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        // Return the products as a JSON response\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Products fetched successfully',\n            products\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        // Return an error response if something goes wrong\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'Error fetching products',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3Qvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFDVjtBQUNEO0FBRXBDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLDBCQUEwQjtRQUMxQixNQUFNSixnRUFBaUJBO1FBRXZCLCtCQUErQjtRQUMvQixNQUFNSyxTQUFTLE1BQU1ELElBQUlFLElBQUk7UUFFN0JDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtRQUV2QixNQUFNLEVBQUVJLElBQUksRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR1Q7UUFFaEUsaUJBQWlCO1FBQ2pCLDZFQUE2RTtRQUM3RSw4QkFBOEI7UUFDOUIsOENBQThDO1FBQzlDLHNCQUFzQjtRQUN0QixPQUFPO1FBQ1AsSUFBSTtRQUVKLGdDQUFnQztRQUNoQyxNQUFNVSxhQUFhLElBQUlkLDREQUFPQSxDQUFDO1lBQzdCUTtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBRyxVQUFVRjtRQUNaO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1DLFdBQVdFLElBQUk7UUFFckIsMEJBQTBCO1FBQzFCLE9BQU9mLHFEQUFZQSxDQUFDSSxJQUFJLENBQ3RCO1lBQUVZLFNBQVM7WUFBZ0NDLFNBQVNKO1FBQVcsR0FDL0Q7WUFBRUssUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0MsT0FBTztRQUNkZCxRQUFRYyxLQUFLLENBQUNBO1FBRWQsZ0RBQWdEO1FBQ2hELE9BQU9uQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFWSxTQUFTO1lBQTBCRyxPQUFPQSxNQUFNSCxPQUFPO1FBQUMsR0FDMUQ7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFJQSxtQkFBbUI7QUFDWixlQUFlRSxJQUFJbEIsR0FBRztJQUN6QixJQUFJO1FBQ0YsMEJBQTBCO1FBQzFCLE1BQU1KLGdFQUFpQkE7UUFFdkIsdUNBQXVDO1FBQ3ZDLE1BQU11QixXQUFXLE1BQU10Qiw0REFBT0EsQ0FBQ3VCLElBQUk7UUFFbkMseUNBQXlDO1FBQ3pDLE9BQU90QixxREFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFWSxTQUFTO1lBQWlDSztRQUFTLEdBQ3JEO1lBQUVILFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9DLE9BQU87UUFDZGQsUUFBUWMsS0FBSyxDQUFDQTtRQUVkLG1EQUFtRDtRQUNuRCxPQUFPbkIscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRVksU0FBUztZQUEyQkcsT0FBT0EsTUFBTUgsT0FBTztRQUFDLEdBQzNEO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxhcHBcXGFwaVxccHJvZHVjdFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJ0AvbGliL2RhdGFiYXNlY29ubmVjdCc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL3Byb2R1Y3Rtb2RlbCc7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgaW5jb21pbmcgSlNPTiBib2R5XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVxYm9keVwiLCByZXN1bHQpO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBzdG9jaywgY2F0ZWdvcnksIG1lZGlhdXJsIH0gPSByZXN1bHQ7XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgaW5wdXRcclxuICAgIC8vIGlmICghbmFtZSB8fCAhZGVzY3JpcHRpb24gfHwgIXByaWNlIHx8ICFzdG9jayB8fCAhY2F0ZWdvcnkgfHwgIWltYWdlVXJsKSB7XHJcbiAgICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgIC8vICAgICB7IG1lc3NhZ2U6ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcgfSxcclxuICAgIC8vICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJvZHVjdCBkb2N1bWVudFxyXG4gICAgY29uc3QgbmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGltYWdlVXJsOiBtZWRpYXVybCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNhdmUgcHJvZHVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgIGF3YWl0IG5ld1Byb2R1Y3Quc2F2ZSgpO1xyXG5cclxuICAgIC8vIFJldHVybiBzdWNjZXNzIHJlc3BvbnNlXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ1Byb2R1Y3QgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCBwcm9kdWN0OiBuZXdQcm9kdWN0IH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgLy8gUmV0dXJuIGVycm9yIHJlc3BvbnNlIGlmIHNvbWV0aGluZyBnb2VzIHdyb25nXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3QnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGdldCBhbGwgcHJvZHVjdHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgXHJcbiAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xyXG4gIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHByb2R1Y3RzIGFzIGEgSlNPTiByZXNwb25zZVxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnUHJvZHVjdHMgZmV0Y2hlZCBzdWNjZXNzZnVsbHknLCBwcm9kdWN0cyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgXHJcbiAgICAgIC8vIFJldHVybiBhbiBlcnJvciByZXNwb25zZSBpZiBzb21ldGhpbmcgZ29lcyB3cm9uZ1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHMnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJQcm9kdWN0IiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzdG9jayIsImNhdGVnb3J5IiwibWVkaWF1cmwiLCJuZXdQcm9kdWN0IiwiaW1hZ2VVcmwiLCJzYXZlIiwibWVzc2FnZSIsInByb2R1Y3QiLCJzdGF0dXMiLCJlcnJvciIsIkdFVCIsInByb2R1Y3RzIiwiZmluZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/product/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/databaseconnect.js":
/*!********************************!*\
  !*** ./lib/databaseconnect.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// lib/databaseconnect.js\n\nasync function connectToDatabase() {\n    const mongoUri = process.env.MONGO_URI; // Ensure this is defined\n    if (!mongoUri) {\n        console.error('MONGO_URI is not defined');\n        throw new Error('MONGO_URI is not defined');\n    }\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUri); // Removed deprecated options\n        console.log('Connected to MongoDB');\n        return connection;\n    } catch (error) {\n        console.error('Connection to database failed:', error.message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2Vjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBQ087QUFFaEMsZUFBZUM7SUFDWCxNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsRUFBRSx5QkFBeUI7SUFFakUsSUFBSSxDQUFDSCxVQUFVO1FBQ1hJLFFBQVFDLEtBQUssQ0FBQztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUVBLElBQUk7UUFDQSxNQUFNQyxhQUFhLE1BQU1ULDZDQUFnQixDQUFDRSxXQUFXLDZCQUE2QjtRQUNsRkksUUFBUUssR0FBRyxDQUFDO1FBQ1osT0FBT0Y7SUFDWCxFQUFFLE9BQU9GLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUssT0FBTztJQUNqRTtBQUNKO0FBRUEsaUVBQWVYLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbGliXFxkYXRhYmFzZWNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RhdGFiYXNlY29ubmVjdC5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAgIGNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJOyAvLyBFbnN1cmUgdGhpcyBpcyBkZWZpbmVkXHJcblxyXG4gICAgaWYgKCFtb25nb1VyaSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01PTkdPX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTU9OR09fVVJJIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VyaSk7IC8vIFJlbW92ZWQgZGVwcmVjYXRlZCBvcHRpb25zXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gdG8gZGF0YWJhc2UgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1vbmdvVXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJsb2ciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/databaseconnect.js\n");

/***/ }),

/***/ "(rsc)/./models/productmodel.js":
/*!********************************!*\
  !*** ./models/productmodel.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    stock: {\n        type: Number,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    imageUrl: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Product', productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvcHJvZHVjdG1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCw0Q0FBZSxDQUFDO0lBQ3hDRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDNUNFLE9BQU87UUFBRUosTUFBTUs7UUFBUUgsVUFBVTtJQUFLO0lBQ3RDSSxPQUFPO1FBQUVOLE1BQU1LO1FBQVFILFVBQVU7SUFBSztJQUN0Q0ssVUFBVTtRQUFFUCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNNLFVBQVU7UUFBRVIsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQzNDLEdBQUc7SUFBRU8sWUFBWTtBQUFLO0FBRXRCLE1BQU1DLFVBQVVkLDRDQUFlLENBQUNjLE9BQU8sSUFBR2QsMkNBQWMsQ0FBQyxXQUFXQztBQUVwRSxpRUFBZWEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbW9kZWxzXFxwcm9kdWN0bW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHN0b2NrOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgaW1hZ2VVcmw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gbW9uZ29vc2UubW9kZWxzLlByb2R1Y3R8fCBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuXHJcblxyXG5cclxuICJdLCJuYW1lcyI6WyJtb25nb29zZSIsInByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIk51bWJlciIsInN0b2NrIiwiY2F0ZWdvcnkiLCJpbWFnZVVybCIsInRpbWVzdGFtcHMiLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/productmodel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();