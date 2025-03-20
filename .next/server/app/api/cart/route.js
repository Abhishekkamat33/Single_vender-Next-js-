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
exports.id = "app/api/cart/route";
exports.ids = ["app/api/cart/route"];
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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Froute&page=%2Fapi%2Fcart%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Froute&page=%2Fapi%2Fcart%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_Single_Vender_Ecommerce_app_api_cart_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cart/route.js */ \"(rsc)/./app/api/cart/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cart/route\",\n        pathname: \"/api/cart\",\n        filename: \"route\",\n        bundlePath: \"app/api/cart/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\Single-Vender-Ecommerce\\\\app\\\\api\\\\cart\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Projects_Single_Vender_Ecommerce_app_api_cart_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjYXJ0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXJ0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2FydCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNTaW5nbGUtVmVuZGVyLUVjb21tZXJjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3RzJTVDU2luZ2xlLVZlbmRlci1FY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxcXGFwcFxcXFxhcGlcXFxcY2FydFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2FydC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NhcnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NhcnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcXFxhcHBcXFxcYXBpXFxcXGNhcnRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Froute&page=%2Fapi%2Fcart%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/cart/route.js":
/*!*******************************!*\
  !*** ./app/api/cart/route.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/databaseconnect */ \"(rsc)/./lib/databaseconnect.js\");\n/* harmony import */ var _models_usermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/usermodel */ \"(rsc)/./models/usermodel.js\");\n/* harmony import */ var _models_cartmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/cartmodel */ \"(rsc)/./models/cartmodel.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        // Parse the request body\n        const { cartItems, userId } = await req.json();\n        console.log('Received cartItems:', cartItems);\n        // Establish a connection to the database\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // Check if the user exists\n        const existingUser = await _models_usermodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(userId);\n        if (!existingUser) {\n            console.error('User  not found');\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                success: false,\n                message: 'User  not found'\n            }, {\n                status: 404\n            });\n        }\n        // Check if an order already exists for the user\n        const existingOrder = await _models_cartmodel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            customer: userId\n        });\n        // console.log('Existing order:', existingOrder);\n        if (existingOrder) {\n            // If an order already exists, update the existing order\n            const existingItemsMap = new Map(existingOrder.items.map((item)=>[\n                    item.productId,\n                    item\n                ]));\n            // Update the existing order with new items\n            cartItems.forEach((newItem)=>{\n                const existingItem = existingItemsMap.get(newItem.productId);\n                console.log('Existing item:', existingItem);\n                if (existingItem) {\n                    // If the item exists in the order, only update the quantity\n                    existingItem.quantity += 1; // Increment the existing quantity\n                // console.log('Updated existing item quantity:', existingItem);\n                } else {\n                    // If the item doesn't exist in the order, add it as a new item\n                    existingOrder.items.push(newItem);\n                    console.log('Added new item:', newItem);\n                }\n            });\n            // Save the updated order to the database\n            await existingOrder.save();\n            console.log('Order saved successfully');\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                msg: \"Cart updated successfully\"\n            }, {\n                status: 200\n            });\n        } else {\n            // If no existing order, create a new one\n            const newOrder = new _models_cartmodel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                customer: userId,\n                items: cartItems\n            });\n            // Save the new order to the database\n            await newOrder.save();\n            console.log('New order created and saved');\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                msg: \"New cart created successfully\"\n            }, {\n                status: 200\n            });\n        }\n    } catch (error) {\n        console.error('Error processing the cart:', error.message);\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            success: false,\n            message: 'Database connection failed or Order operation failed',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(request) {\n    try {\n        const token = request.cookies.get('authtoken')?.value;\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        // Check if token is missing\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n                error: 'Authentication token is missing'\n            }, {\n                status: 401\n            });\n        }\n        // Verify the token\n        const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.verify(token, process.env.JWT_KEY);\n        // console.log(\"Decoded token data:\", data); // Log the decoded token data\n        const dataId = data._id;\n        const cartdetails = await _models_cartmodel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            customer: dataId\n        });\n        // console.log(cartdetails);\n        // Return the user information\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            cartdetails\n        });\n    } catch (error) {\n        console.error(\"Error:\", error);\n        // If the token is invalid or expired\n        return next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse.json({\n            error: 'Invalid or expired token'\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU13QixPQUFPdEMsZ0RBQVUsQ0FBQ21DLE9BQU9LLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztRQUNsRCwwRUFBMEU7UUFFOUUsTUFBTUMsU0FBUUwsS0FBS00sR0FBRztRQUd0QixNQUFNQyxjQUFjLE1BQU05Qyx5REFBU0EsQ0FBQ2lCLE9BQU8sQ0FBQztZQUFDQyxVQUFTMEI7UUFBTTtRQUM1RCw0QkFBNEI7UUFHeEIsOEJBQThCO1FBQzlCLE9BQU8xQyxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUN1QztRQUFXO0lBRXZDLEVBQUUsT0FBT2xDLE9BQU87UUFDZEosUUFBUUksS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLHFDQUFxQztRQUNyQyxPQUFPVixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVLLE9BQU87UUFBMkIsR0FBRztZQUFFRyxRQUFRO1FBQUk7SUFDaEY7QUFDRiIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcYXBwXFxhcGlcXGNhcnRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tIFwiQC9saWIvZGF0YWJhc2Vjb25uZWN0XCI7XHJcbmltcG9ydCBOZXd1c2VyIGZyb20gXCJAL21vZGVscy91c2VybW9kZWxcIjtcclxuaW1wb3J0IENhcnRtb2RlbCBmcm9tIFwiQC9tb2RlbHMvY2FydG1vZGVsXCI7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQYXJzZSB0aGUgcmVxdWVzdCBib2R5XHJcbiAgICBjb25zdCB7IGNhcnRJdGVtcywgdXNlcklkIH0gPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGNhcnRJdGVtczonLCBjYXJ0SXRlbXMpO1xyXG5cclxuICAgIC8vIEVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyICA9IGF3YWl0IE5ld3VzZXIuZmluZEJ5SWQodXNlcklkKTtcclxuICAgIGlmICghZXhpc3RpbmdVc2VyICkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdVc2VyICBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VyICBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW4gb3JkZXIgYWxyZWFkeSBleGlzdHMgZm9yIHRoZSB1c2VyXHJcbiAgICBjb25zdCBleGlzdGluZ09yZGVyID0gYXdhaXQgQ2FydG1vZGVsLmZpbmRPbmUoeyBjdXN0b21lcjogdXNlcklkIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0V4aXN0aW5nIG9yZGVyOicsIGV4aXN0aW5nT3JkZXIpO1xyXG5cclxuICAgIGlmIChleGlzdGluZ09yZGVyKSB7XHJcbiAgICAgIC8vIElmIGFuIG9yZGVyIGFscmVhZHkgZXhpc3RzLCB1cGRhdGUgdGhlIGV4aXN0aW5nIG9yZGVyXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbXNNYXAgPSBuZXcgTWFwKGV4aXN0aW5nT3JkZXIuaXRlbXMubWFwKGl0ZW0gPT4gW2l0ZW0ucHJvZHVjdElkLCBpdGVtXSkpO1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIGV4aXN0aW5nIG9yZGVyIHdpdGggbmV3IGl0ZW1zXHJcbiAgICAgIGNhcnRJdGVtcy5mb3JFYWNoKG5ld0l0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGV4aXN0aW5nSXRlbXNNYXAuZ2V0KG5ld0l0ZW0ucHJvZHVjdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXhpc3RpbmcgaXRlbTonLCBleGlzdGluZ0l0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBpdGVtIGV4aXN0cyBpbiB0aGUgb3JkZXIsIG9ubHkgdXBkYXRlIHRoZSBxdWFudGl0eVxyXG4gICAgICAgICAgZXhpc3RpbmdJdGVtLnF1YW50aXR5ICs9IDE7IC8vIEluY3JlbWVudCB0aGUgZXhpc3RpbmcgcXVhbnRpdHlcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVcGRhdGVkIGV4aXN0aW5nIGl0ZW0gcXVhbnRpdHk6JywgZXhpc3RpbmdJdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGl0ZW0gZG9lc24ndCBleGlzdCBpbiB0aGUgb3JkZXIsIGFkZCBpdCBhcyBhIG5ldyBpdGVtXHJcbiAgICAgICAgICBleGlzdGluZ09yZGVyLml0ZW1zLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQWRkZWQgbmV3IGl0ZW06JywgbmV3SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgb3JkZXIgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICAgIGF3YWl0IGV4aXN0aW5nT3JkZXIuc2F2ZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnT3JkZXIgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1zZzogXCJDYXJ0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIG9yZGVyLCBjcmVhdGUgYSBuZXcgb25lXHJcbiAgICAgIGNvbnN0IG5ld09yZGVyID0gbmV3IENhcnRtb2RlbCh7XHJcbiAgICAgICAgY3VzdG9tZXI6IHVzZXJJZCxcclxuICAgICAgICBpdGVtczogY2FydEl0ZW1zLCAvLyBBc3N1bWluZyBjYXJ0SXRlbXMgaXMgYWxyZWFkeSBpbiB0aGUgcmlnaHQgZm9ybWF0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2F2ZSB0aGUgbmV3IG9yZGVyIHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICBhd2FpdCBuZXdPcmRlci5zYXZlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgb3JkZXIgY3JlYXRlZCBhbmQgc2F2ZWQnKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbXNnOiBcIk5ldyBjYXJ0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyB0aGUgY2FydDonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkIG9yIE9yZGVyIG9wZXJhdGlvbiBmYWlsZWQnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdhdXRodG9rZW4nKT8udmFsdWU7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIC8vIENoZWNrIGlmIHRva2VuIGlzIG1pc3NpbmdcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdBdXRoZW50aWNhdGlvbiB0b2tlbiBpcyBtaXNzaW5nJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmeSB0aGUgdG9rZW5cclxuICAgIGNvbnN0IGRhdGEgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfS0VZKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRGVjb2RlZCB0b2tlbiBkYXRhOlwiLCBkYXRhKTsgLy8gTG9nIHRoZSBkZWNvZGVkIHRva2VuIGRhdGFcclxuXHJcbmNvbnN0IGRhdGFJZD0gZGF0YS5faWQ7XHJcbiAgXHJcbiAgXHJcbmNvbnN0IGNhcnRkZXRhaWxzID0gYXdhaXQgQ2FydG1vZGVsLmZpbmRPbmUoe2N1c3RvbWVyOmRhdGFJZH0pXHJcbi8vIGNvbnNvbGUubG9nKGNhcnRkZXRhaWxzKTtcclxuXHJcbiAgICBcclxuICAgIC8vIFJldHVybiB0aGUgdXNlciBpbmZvcm1hdGlvblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtjYXJ0ZGV0YWlsc30gKTtcclxuICAgIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIC8vIElmIHRoZSB0b2tlbiBpcyBpbnZhbGlkIG9yIGV4cGlyZWRcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCBvciBleHBpcmVkIHRva2VuJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvRGF0YWJhc2UiLCJOZXd1c2VyIiwiQ2FydG1vZGVsIiwiand0IiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImNhcnRJdGVtcyIsInVzZXJJZCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXhpc3RpbmdVc2VyIiwiZmluZEJ5SWQiLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXhpc3RpbmdPcmRlciIsImZpbmRPbmUiLCJjdXN0b21lciIsImV4aXN0aW5nSXRlbXNNYXAiLCJNYXAiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJmb3JFYWNoIiwibmV3SXRlbSIsImV4aXN0aW5nSXRlbSIsImdldCIsInF1YW50aXR5IiwicHVzaCIsInNhdmUiLCJtc2ciLCJuZXdPcmRlciIsIkdFVCIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJ2YWx1ZSIsImRhdGEiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsImRhdGFJZCIsIl9pZCIsImNhcnRkZXRhaWxzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cart/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/databaseconnect.js":
/*!********************************!*\
  !*** ./lib/databaseconnect.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// lib/databaseconnect.js\n\nasync function connectToDatabase() {\n    const mongoUri = process.env.MONGO_URI; // Ensure this is defined\n    if (!mongoUri) {\n        console.error('MONGO_URI is not defined');\n        throw new Error('MONGO_URI is not defined');\n    }\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUri); // Removed deprecated options\n        console.log('Connected to MongoDB');\n        return connection;\n    } catch (error) {\n        console.error('Connection to database failed:', error.message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2Vjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBQ087QUFFaEMsZUFBZUM7SUFDWCxNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsRUFBRSx5QkFBeUI7SUFFakUsSUFBSSxDQUFDSCxVQUFVO1FBQ1hJLFFBQVFDLEtBQUssQ0FBQztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUVBLElBQUk7UUFDQSxNQUFNQyxhQUFhLE1BQU1ULDZDQUFnQixDQUFDRSxXQUFXLDZCQUE2QjtRQUNsRkksUUFBUUssR0FBRyxDQUFDO1FBQ1osT0FBT0Y7SUFDWCxFQUFFLE9BQU9GLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUssT0FBTztJQUNqRTtBQUNKO0FBRUEsaUVBQWVYLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbGliXFxkYXRhYmFzZWNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RhdGFiYXNlY29ubmVjdC5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAgIGNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJOyAvLyBFbnN1cmUgdGhpcyBpcyBkZWZpbmVkXHJcblxyXG4gICAgaWYgKCFtb25nb1VyaSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01PTkdPX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTU9OR09fVVJJIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VyaSk7IC8vIFJlbW92ZWQgZGVwcmVjYXRlZCBvcHRpb25zXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gdG8gZGF0YWJhc2UgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1vbmdvVXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJsb2ciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/databaseconnect.js\n");

/***/ }),

/***/ "(rsc)/./models/cartmodel.js":
/*!*****************************!*\
  !*** ./models/cartmodel.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// models/Order.js\n\n// Define the schema for the order\nconst CartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    customer: {\n        type: String,\n        required: true\n    },\n    items: [\n        {\n            productId: {\n                type: String,\n                required: true\n            },\n            image: {\n                type: String,\n                required: true\n            },\n            name: {\n                type: String,\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true\n            },\n            price: {\n                type: Number,\n                required: true\n            }\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Create a model based on the schema\nconst Cartmodel = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Cartmodel || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Cartmodel', CartSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cartmodel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvY2FydG1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0JBQWtCO0FBQ2M7QUFFaEMsa0NBQWtDO0FBQ2xDLE1BQU1DLGFBQWEsSUFBSUQsNENBQWUsQ0FBQztJQUNyQ0csVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMO1lBQ0VDLFdBQVc7Z0JBQ1RKLE1BQU1DO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQUcsT0FBTztnQkFDTEwsTUFBTUM7Z0JBQ05DLFVBQVU7WUFDWjtZQUNBSSxNQUFNO2dCQUNKTixNQUFNQztnQkFDTkMsVUFBVTtZQUNaO1lBQ0FLLFVBQVU7Z0JBQ1JQLE1BQU1RO2dCQUNOTixVQUFVO1lBQ1o7WUFDQU8sT0FBTztnQkFDTFQsTUFBTVE7Z0JBQ05OLFVBQVU7WUFDWjtRQUNGO0tBQ0Q7SUFDRFEsV0FBVztRQUNUVixNQUFNVztRQUNOQyxTQUFTRCxLQUFLRSxHQUFHO0lBQ25CO0FBQ0Y7QUFFQSxxQ0FBcUM7QUFDckMsTUFBTUMsWUFBWWxCLDRDQUFlLENBQUNrQixTQUFTLElBQUlsQiwyQ0FBYyxDQUFDLGFBQWFDO0FBRTNFLGlFQUFlaUIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbW9kZWxzXFxjYXJ0bW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kZWxzL09yZGVyLmpzXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHNjaGVtYSBmb3IgdGhlIG9yZGVyXHJcbmNvbnN0IENhcnRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBjdXN0b21lcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG4gIGl0ZW1zOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb2R1Y3RJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZywgIC8vIEZpeGVkIGhlcmVcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdLFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIENyZWF0ZSBhIG1vZGVsIGJhc2VkIG9uIHRoZSBzY2hlbWFcclxuY29uc3QgQ2FydG1vZGVsID0gbW9uZ29vc2UubW9kZWxzLkNhcnRtb2RlbCB8fCBtb25nb29zZS5tb2RlbCgnQ2FydG1vZGVsJywgQ2FydFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0bW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNhcnRTY2hlbWEiLCJTY2hlbWEiLCJjdXN0b21lciIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIml0ZW1zIiwicHJvZHVjdElkIiwiaW1hZ2UiLCJuYW1lIiwicXVhbnRpdHkiLCJOdW1iZXIiLCJwcmljZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiQ2FydG1vZGVsIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/cartmodel.js\n");

/***/ }),

/***/ "(rsc)/./models/usermodel.js":
/*!*****************************!*\
  !*** ./models/usermodel.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n// Define the user schema with added validations\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: true,\n        match: [\n            /\\S+@\\S+\\.\\S+/,\n            'Please enter a valid email address'\n        ] // Email regex validation\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: [\n            6,\n            'Password must be at least 6 characters long'\n        ] // Minimum length for password\n    },\n    role: {\n        type: String,\n        default: 'user'\n    }\n}, {\n    timestamps: true\n});\n// Ensure that the model is not redefined\nconst Newuser = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Newuser || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Newuser', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newuser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlcm1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLGdEQUFnRDtBQUNoRCxNQUFNQyxhQUFhLElBQUlELDRDQUFlLENBQUM7SUFDbkNHLE1BQU07UUFDRkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNkO0lBQ0FDLE9BQU87UUFDSEgsTUFBTUM7UUFDTkcsUUFBUTtRQUNSRixVQUFVO1FBQ1ZHLE9BQU87WUFBQztZQUFnQjtTQUFxQyxDQUFFLHlCQUF5QjtJQUM1RjtJQUNBQyxVQUFVO1FBQ05OLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkssV0FBVztZQUFDO1lBQUc7U0FBOEMsQ0FBQyw4QkFBOEI7SUFDaEc7SUFDQUMsTUFBTTtRQUNGUixNQUFNQztRQUNOUSxTQUFTO0lBQ2I7QUFDSixHQUFHO0lBQUVDLFlBQVk7QUFBSztBQUV0Qix5Q0FBeUM7QUFDekMsTUFBTUMsVUFBVWYsNENBQWUsQ0FBQ2UsT0FBTyxJQUFJZiwyQ0FBYyxDQUFDLFdBQVdDO0FBRXJFLGlFQUFlYyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxtb2RlbHNcXHVzZXJtb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHVzZXIgc2NoZW1hIHdpdGggYWRkZWQgdmFsaWRhdGlvbnNcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZTogeyBcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlIFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7IFxyXG4gICAgICAgIHR5cGU6IFN0cmluZywgXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLCBcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSwgXHJcbiAgICAgICAgbWF0Y2g6IFsvXFxTK0BcXFMrXFwuXFxTKy8sICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ10gIC8vIEVtYWlsIHJlZ2V4IHZhbGlkYXRpb25cclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDogeyBcclxuICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLCBcclxuICAgICAgICBtaW5sZW5ndGg6IFs2LCAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZyddIC8vIE1pbmltdW0gbGVuZ3RoIGZvciBwYXNzd29yZFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHsgXHJcbiAgICAgICAgdHlwZTogU3RyaW5nLCBcclxuICAgICAgICBkZWZhdWx0OiAndXNlcicgXHJcbiAgICB9XHJcbn0sIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcbi8vIEVuc3VyZSB0aGF0IHRoZSBtb2RlbCBpcyBub3QgcmVkZWZpbmVkXHJcbmNvbnN0IE5ld3VzZXIgPSBtb25nb29zZS5tb2RlbHMuTmV3dXNlciB8fCBtb25nb29zZS5tb2RlbCgnTmV3dXNlcicsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3dXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsIm1hdGNoIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJyb2xlIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJOZXd1c2VyIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/usermodel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Froute&page=%2Fapi%2Fcart%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();