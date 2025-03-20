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
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_Single_Vender_Ecommerce_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.js */ \"(rsc)/./app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\Single-Vender-Ecommerce\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Projects_Single_Vender_Ecommerce_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNTaW5nbGUtVmVuZGVyLUVjb21tZXJjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1Byb2plY3RzJTVDU2luZ2xlLVZlbmRlci1FY29tbWVyY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFByb2plY3RzXFxcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/login/route.js":
/*!********************************!*\
  !*** ./app/api/login/route.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/databaseconnect */ \"(rsc)/./lib/databaseconnect.js\");\n/* harmony import */ var _models_usermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/usermodel */ \"(rsc)/./models/usermodel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const result = await req.json(); // Parse the request body\n        // console.log(\"Received result:\", result);\n        const { email, password } = result;\n        // Connect to the database\n        await (0,_lib_databaseconnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const existingUser = await _models_usermodel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        // console.log(\"login password\", existingUser ? existingUser.password : \"No user found\");\n        if (existingUser) {\n            // return NextResponse.json({ msg: 'User not found' }, { status: 404 });\n            // Compare the plain text password with the hashed password\n            const comparePassword = bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compareSync(password, existingUser.password);\n            // console.log(comparePassword); // Logs `true` or `false`\n            if (comparePassword) {\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.sign({\n                    _id: existingUser._id,\n                    role: existingUser.role,\n                    name: existingUser.name\n                }, process.env.JWT_KEY);\n                // console.log(token);\n                const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);\n                // console.log(expires);\n                const response = next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                    msg: 'Login success',\n                    status: 200,\n                    user: existingUser\n                });\n                response.cookies.set(\"authtoken\", token, {\n                    expires: expires,\n                    httpOnly: true\n                });\n                return response;\n            } else {\n                // Password is incorrect\n                return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                    msg: 'Invalid password'\n                }, {\n                    status: 401\n                });\n            }\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                msg: 'No user registered with this email'\n            }, {\n                status: 404\n            });\n        }\n    } catch (error) {\n        // Return an error response if the connection fails\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: 'Database connection failed!',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzRDtBQUNiO0FBQ0U7QUFDYjtBQUNBO0FBR3ZCLGVBQWVLLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUVBLE1BQU1DLFNBQVMsTUFBTUQsSUFBSUUsSUFBSSxJQUFJLHlCQUF5QjtRQUMxRCwyQ0FBMkM7UUFFM0MsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUU1QiwwQkFBMEI7UUFDMUIsTUFBTVAsZ0VBQWlCQTtRQUV2QixNQUFNVyxlQUFlLE1BQU1WLHlEQUFPQSxDQUFDVyxPQUFPLENBQUM7WUFBRUg7UUFBTTtRQUNuRCx5RkFBeUY7UUFHekYsSUFBSUUsY0FBYztZQUNkLHdFQUF3RTtZQUd4RSwyREFBMkQ7WUFDM0QsTUFBTUUsa0JBQWtCVixpREFBa0IsQ0FBQ08sVUFBVUMsYUFBYUQsUUFBUTtZQUUxRSwwREFBMEQ7WUFFMUQsSUFBSUcsaUJBQWlCO2dCQUNqQixNQUFNRSxRQUFRWCw4Q0FBUSxDQUFDO29CQUNuQmEsS0FBS04sYUFBYU0sR0FBRztvQkFDckJDLE1BQU1QLGFBQWFPLElBQUk7b0JBQ3ZCQyxNQUFNUixhQUFhUSxJQUFJO2dCQUMzQixHQUFHQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87Z0JBQ3RCLHNCQUFzQjtnQkFDdEIsTUFBTUMsVUFBVSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSyxLQUFLLEtBQUs7Z0JBQ3JELHdCQUF3QjtnQkFFeEIsTUFBTUMsV0FBV3hCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7b0JBQUVtQixLQUFLO29CQUFpQkMsUUFBUTtvQkFBS0MsTUFBTWxCO2dCQUFhO2dCQUUzRmUsU0FBU0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYWhCLE9BQU87b0JBQ3JDUSxTQUFTQTtvQkFDVFMsVUFBVTtnQkFDZDtnQkFFQSxPQUFPTjtZQUNYLE9BQU87Z0JBQ0gsd0JBQXdCO2dCQUN4QixPQUFPeEIscURBQVlBLENBQUNNLElBQUksQ0FBQztvQkFBRW1CLEtBQUs7Z0JBQW1CLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7WUFDeEU7UUFDSixPQUNLO1lBQ0QsT0FBTzFCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVtQixLQUFLO1lBQXFDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRjtJQUVKLEVBQUUsT0FBT0ssT0FBTztRQUNaLG1EQUFtRDtRQUNuRCxPQUFPL0IscURBQVlBLENBQUNNLElBQUksQ0FDcEI7WUFBRTBCLFNBQVM7WUFBT0MsU0FBUztZQUErQkYsT0FBT0EsTUFBTUUsT0FBTztRQUFDLEdBQy9FO1lBQUVQLFFBQVE7UUFBSTtJQUV0QjtBQUNKIiwic291cmNlcyI6WyJEOlxcUHJvamVjdHNcXFNpbmdsZS1WZW5kZXItRWNvbW1lcmNlXFxhcHBcXGFwaVxcbG9naW5cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9EYXRhYmFzZSBmcm9tIFwiQC9saWIvZGF0YWJhc2Vjb25uZWN0XCI7XHJcbmltcG9ydCBOZXd1c2VyIGZyb20gXCJAL21vZGVscy91c2VybW9kZWxcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcS5qc29uKCk7IC8vIFBhcnNlIHRoZSByZXF1ZXN0IGJvZHlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHJlc3VsdDpcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBOZXd1c2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luIHBhc3N3b3JkXCIsIGV4aXN0aW5nVXNlciA/IGV4aXN0aW5nVXNlci5wYXNzd29yZCA6IFwiTm8gdXNlciBmb3VuZFwiKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbXNnOiAnVXNlciBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGFyZSB0aGUgcGxhaW4gdGV4dCBwYXNzd29yZCB3aXRoIHRoZSBoYXNoZWQgcGFzc3dvcmRcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZVBhc3N3b3JkID0gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCBleGlzdGluZ1VzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29tcGFyZVBhc3N3b3JkKTsgLy8gTG9ncyBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVQYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkOiBleGlzdGluZ1VzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IGV4aXN0aW5nVXNlci5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGV4aXN0aW5nVXNlci5uYW1lXHJcbiAgICAgICAgICAgICAgICB9LCBwcm9jZXNzLmVudi5KV1RfS0VZKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhleHBpcmVzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UuanNvbih7IG1zZzogJ0xvZ2luIHN1Y2Nlc3MnLCBzdGF0dXM6IDIwMCwgdXNlcjogZXhpc3RpbmdVc2VyIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KFwiYXV0aHRva2VuXCIsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogZXhwaXJlcyxcclxuICAgICAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFzc3dvcmQgaXMgaW5jb3JyZWN0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtc2c6ICdJbnZhbGlkIHBhc3N3b3JkJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtc2c6ICdObyB1c2VyIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGVtYWlsJyB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIFJldHVybiBhbiBlcnJvciByZXNwb25zZSBpZiB0aGUgY29ubmVjdGlvbiBmYWlsc1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkIScsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiTmV3dXNlciIsIk5leHRSZXNwb25zZSIsImJjcnlwdCIsImp3dCIsIlBPU1QiLCJyZXEiLCJyZXN1bHQiLCJqc29uIiwiZW1haWwiLCJwYXNzd29yZCIsImV4aXN0aW5nVXNlciIsImZpbmRPbmUiLCJjb21wYXJlUGFzc3dvcmQiLCJjb21wYXJlU3luYyIsInRva2VuIiwic2lnbiIsIl9pZCIsInJvbGUiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIkpXVF9LRVkiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInJlc3BvbnNlIiwibXNnIiwic3RhdHVzIiwidXNlciIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/databaseconnect.js":
/*!********************************!*\
  !*** ./lib/databaseconnect.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n// lib/databaseconnect.js\n\nasync function connectToDatabase() {\n    const mongoUri = process.env.MONGO_URI; // Ensure this is defined\n    if (!mongoUri) {\n        console.error('MONGO_URI is not defined');\n        throw new Error('MONGO_URI is not defined');\n    }\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUri); // Removed deprecated options\n        console.log('Connected to MongoDB');\n        return connection;\n    } catch (error) {\n        console.error('Connection to database failed:', error.message);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2Vjb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUJBQXlCO0FBQ087QUFFaEMsZUFBZUM7SUFDWCxNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsRUFBRSx5QkFBeUI7SUFFakUsSUFBSSxDQUFDSCxVQUFVO1FBQ1hJLFFBQVFDLEtBQUssQ0FBQztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUVBLElBQUk7UUFDQSxNQUFNQyxhQUFhLE1BQU1ULDZDQUFnQixDQUFDRSxXQUFXLDZCQUE2QjtRQUNsRkksUUFBUUssR0FBRyxDQUFDO1FBQ1osT0FBT0Y7SUFDWCxFQUFFLE9BQU9GLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUssT0FBTztJQUNqRTtBQUNKO0FBRUEsaUVBQWVYLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxTaW5nbGUtVmVuZGVyLUVjb21tZXJjZVxcbGliXFxkYXRhYmFzZWNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RhdGFiYXNlY29ubmVjdC5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICAgIGNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJOyAvLyBFbnN1cmUgdGhpcyBpcyBkZWZpbmVkXHJcblxyXG4gICAgaWYgKCFtb25nb1VyaSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01PTkdPX1VSSSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTU9OR09fVVJJIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VyaSk7IC8vIFJlbW92ZWQgZGVwcmVjYXRlZCBvcHRpb25zXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gdG8gZGF0YWJhc2UgZmFpbGVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm1vbmdvVXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJsb2ciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/databaseconnect.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CSingle-Vender-Ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();