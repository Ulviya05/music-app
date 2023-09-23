"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/explore",{

/***/ "./components/Explore.js":
/*!*******************************!*\
  !*** ./components/Explore.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Explore.module.css */ \"./styles/Explore.module.css\");\n/* harmony import */ var _styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ \"./components/Video.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ \"./components/App.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Explore() {\n    _s();\n    const [allVideos, setAllVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [videoIdsToSend, sendVideoIdsToChatbot] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recipient_id, setRecipientId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showApp, setShowApp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getType = async ()=>{\n            try {\n                const type = localStorage.getItem(\"type\");\n                setType(type);\n            } catch (error) {\n                console.error(\"Error fetching type:\", error);\n            }\n        };\n        getType();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (type === \"pro creator\" || type === \"partner\") {\n            const getNotifications = ()=>{\n                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:5000\" + \"/user/notifications\", {\n                    DISABLE_LOADING: true\n                }).then(function(response) {\n                    const notifications = response.data.notifications;\n                    setNotifications(notifications);\n                    console.log(\"hh\", notifications);\n                }).catch(function(error) {\n                    console.log(error);\n                });\n            };\n            getNotifications();\n        }\n    }, [\n        type\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const searchParams = new URLSearchParams(window.location.search);\n        const queryParamValue = searchParams.get(\"query\");\n        const fetchVideos = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:5000\" + \"/video/\");\n                const sortedVideos = response.data.videos.sort((a, b)=>{\n                    const scoreA = a.likes + a.views;\n                    const scoreB = b.likes + b.views;\n                    if (scoreA === scoreB) {\n                        return b.likes - a.likes;\n                    } else {\n                        return scoreB - scoreA;\n                    }\n                });\n                if (type === \"partner\") {\n                    const uniqueUserIds = new Set();\n                    const videosToSend = sortedVideos.filter((video)=>{\n                        if (video.user.type === \"pro creator\") {\n                            let isRecipient = true;\n                            notifications.forEach((notification)=>{\n                                if (video.user.username === notification.recipient.username) {\n                                    isRecipient = false;\n                                    return;\n                                }\n                            });\n                            if (!uniqueUserIds.has(video.user.uaername) && isRecipient) {\n                                uniqueUserIds.add(video.user.uaername);\n                                return video.views >= 0 && video.likes >= 0;\n                            }\n                            return false;\n                        }\n                    });\n                    const videoIdsToSend = videosToSend.map((video)=>video._id);\n                    const recipientIdsToSend = videosToSend.map((video)=>video.user.username);\n                    console.log(\"off\", videoIdsToSend);\n                    sendVideoIdsToChatbot(videoIdsToSend);\n                    setRecipientId(recipientIdsToSend);\n                    console.log(\"off\", videoIdsToSend);\n                }\n                setAllVideos(sortedVideos);\n            } catch (error) {\n                console.error(\"Error fetching videos:\", error);\n            }\n        };\n        // if (!queryParamValue && type && (type !== 'partner' && type !== 'pro creator')) {\n        //   fetchVideos();\n        //   console.log(\"1\")\n        // }\n        // if (!queryParamValue && type && (type === 'partner' || type === 'pro creator')) {\n        //   if (notifications) {\n        //     fetchVideos();\n        //     console.log(\"2\")\n        //   }\n        // }\n        if (!type) {\n            fetchVideos();\n        }\n    }, [\n        type,\n        notifications\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const path = router.query.tag;\n    let filteredVideos = allVideos;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (type === \"partner\" && videoIdsToSend.length > 0) {\n            console.log(videoIdsToSend);\n            const timerId = setTimeout(()=>{\n                setShowApp(true);\n            }, 1000);\n            return ()=>clearTimeout(timerId);\n        }\n    }, [\n        type,\n        videoIdsToSend\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8___default().explore),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8___default().sidebar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                allVideos: allVideos,\n                setAllVideos: setAllVideos\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8___default().explore_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Explore_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: filteredVideos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Video__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                video_id: video._id,\n                                video: video.video,\n                                deleted: video.deleted,\n                                username: video.user.username,\n                                image: video.user.image,\n                                hashtags: video.hashtags,\n                                likes: video.likes,\n                                views: video.views,\n                                date: video.createdAt,\n                                liked: video.liked,\n                                allVideos: allVideos,\n                                setAllVideos: setAllVideos\n                            }, video._id, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this),\n            showApp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                recipient_id: recipient_id[0],\n                video_id: videoIdsToSend[0]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n                lineNumber: 173,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Explore.js\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, this);\n}\n_s(Explore, \"TkVqToOuuVe2Ln8jIDDDKGlM7do=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Explore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explore);\nvar _c;\n$RefreshReg$(_c, \"Explore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtrQ0FDWk4sZUFBZVAsSUFBSSxDQUFDVixzQkFDbkIsOERBQUN0RCw4Q0FBS0E7Z0NBRUprRixVQUFVNUIsTUFBTVc7Z0NBQ2hCWCxPQUFPQSxNQUFNQTtnQ0FDYjZCLFNBQVM3QixNQUFNNkI7Z0NBQ2Z4QixVQUFVTCxNQUFNQyxLQUFLSTtnQ0FDckJ5QixPQUFPOUIsTUFBTUMsS0FBSzZCO2dDQUNsQkMsVUFBVS9CLE1BQU0rQjtnQ0FDaEJ0QyxPQUFPTyxNQUFNUDtnQ0FDYkMsT0FBT00sTUFBTU47Z0NBQ2JzQyxNQUFNaEMsTUFBTWlDO2dDQUNaQyxPQUFPbEMsTUFBTWtDO2dDQUNibEYsV0FBV0E7Z0NBQ1hDLGNBQWNBOytCQVpUK0MsTUFBTVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JwQmpELHlCQUFXLDhEQUFDZCw0Q0FBR0E7Z0JBQUNRLGNBQWNBLFlBQVksQ0FBQyxFQUFFO2dCQUFFd0UsVUFBVTFFLGNBQWMsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7QUFHakY7R0F0S1NIOztRQWtIUVAsa0RBQVNBOzs7S0FsSGpCTztBQXdLVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGxvcmUuanM/NzA0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9FeHBsb3JlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9WaWRlbyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIEV4cGxvcmUoKSB7XHJcbiAgY29uc3QgW2FsbFZpZGVvcywgc2V0QWxsVmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdmlkZW9JZHNUb1NlbmQsIHNlbmRWaWRlb0lkc1RvQ2hhdGJvdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlY2lwaWVudF9pZCwgc2V0UmVjaXBpZW50SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25vdGlmaWNhdGlvbnMsIHNldE5vdGlmaWNhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3dBcHAsIHNldFNob3dBcHBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VHlwZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0eXBlXCIpO1xyXG4gICAgICAgIHNldFR5cGUodHlwZSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0eXBlOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRUeXBlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdwcm8gY3JlYXRvcicgfHwgdHlwZSA9PT0gJ3BhcnRuZXInKSB7XHJcbiAgICAgIGNvbnN0IGdldE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LkJBU0VfVVJMICsgXCIvdXNlci9ub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICwge1xyXG4gICAgICAgICAgICBESVNBQkxFX0xPQURJTkc6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHJlc3BvbnNlLmRhdGEubm90aWZpY2F0aW9ucztcclxuICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaFwiLCBub3RpZmljYXRpb25zKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnZXROb3RpZmljYXRpb25zKCk7XHJcbiAgICB9XHJcbiAgfSwgW3R5cGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtVmFsdWUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpO1xyXG4gICAgY29uc3QgZmV0Y2hWaWRlb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQocHJvY2Vzcy5lbnYuQkFTRV9VUkwgKyBcIi92aWRlby9cIik7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkVmlkZW9zID0gcmVzcG9uc2UuZGF0YS52aWRlb3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2NvcmVBID0gYS5saWtlcyArIGEudmlld3M7XHJcbiAgICAgICAgICBjb25zdCBzY29yZUIgPSBiLmxpa2VzICsgYi52aWV3cztcclxuXHJcbiAgICAgICAgICBpZiAoc2NvcmVBID09PSBzY29yZUIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGIubGlrZXMgLSBhLmxpa2VzO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3JlQiAtIHNjb3JlQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwYXJ0bmVyJykge1xyXG4gICAgICAgICAgY29uc3QgdW5pcXVlVXNlcklkcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgIGNvbnN0IHZpZGVvc1RvU2VuZCA9IHNvcnRlZFZpZGVvcy5maWx0ZXIodmlkZW8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodmlkZW8udXNlci50eXBlID09PSBcInBybyBjcmVhdG9yXCIpIHtcclxuICAgICAgICAgICAgICBsZXQgaXNSZWNpcGllbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBub3RpZmljYXRpb25zLmZvckVhY2gobm90aWZpY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2aWRlby51c2VyLnVzZXJuYW1lID09PSBub3RpZmljYXRpb24ucmVjaXBpZW50LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlzUmVjaXBpZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCF1bmlxdWVVc2VySWRzLmhhcyh2aWRlby51c2VyLnVhZXJuYW1lKSAmJiBpc1JlY2lwaWVudCkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlVXNlcklkcy5hZGQodmlkZW8udXNlci51YWVybmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW8udmlld3MgPj0gMCAmJiB2aWRlby5saWtlcyA+PSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCB2aWRlb0lkc1RvU2VuZCA9IHZpZGVvc1RvU2VuZC5tYXAoKHZpZGVvKSA9PiB2aWRlby5faWQpO1xyXG4gICAgICAgICAgY29uc3QgcmVjaXBpZW50SWRzVG9TZW5kID0gdmlkZW9zVG9TZW5kLm1hcCgodmlkZW8pID0+IHZpZGVvLnVzZXIudXNlcm5hbWUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvZmZcIix2aWRlb0lkc1RvU2VuZClcclxuICAgICAgICAgIHNlbmRWaWRlb0lkc1RvQ2hhdGJvdCh2aWRlb0lkc1RvU2VuZCk7XHJcbiAgICAgICAgICBzZXRSZWNpcGllbnRJZChyZWNpcGllbnRJZHNUb1NlbmQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvZmZcIix2aWRlb0lkc1RvU2VuZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEFsbFZpZGVvcyhzb3J0ZWRWaWRlb3MpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZpZGVvczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgKCFxdWVyeVBhcmFtVmFsdWUgJiYgdHlwZSAmJiAodHlwZSAhPT0gJ3BhcnRuZXInICYmIHR5cGUgIT09ICdwcm8gY3JlYXRvcicpKSB7XHJcbiAgICAvLyAgIGZldGNoVmlkZW9zKCk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiMVwiKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmICghcXVlcnlQYXJhbVZhbHVlICYmIHR5cGUgJiYgKHR5cGUgPT09ICdwYXJ0bmVyJyB8fCB0eXBlID09PSAncHJvIGNyZWF0b3InKSkge1xyXG4gICAgLy8gICBpZiAobm90aWZpY2F0aW9ucykge1xyXG4gICAgLy8gICAgIGZldGNoVmlkZW9zKCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCIyXCIpXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgZmV0Y2hWaWRlb3MoKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW3R5cGUsIG5vdGlmaWNhdGlvbnNdKTtcclxuXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSByb3V0ZXIucXVlcnkudGFnO1xyXG5cclxuICBsZXQgZmlsdGVyZWRWaWRlb3MgPSBhbGxWaWRlb3M7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3BhcnRuZXInICYmIHZpZGVvSWRzVG9TZW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2codmlkZW9JZHNUb1NlbmQpXHJcbiAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTaG93QXBwKHRydWUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJJZCk7XHJcbiAgICB9XHJcbiAgfSwgW3R5cGUsIHZpZGVvSWRzVG9TZW5kXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4cGxvcmV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYWxsVmlkZW9zPXthbGxWaWRlb3N9XHJcbiAgICAgICAgc2V0QWxsVmlkZW9zPXtzZXRBbGxWaWRlb3N9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZV9jb250YWluZXJ9PlxyXG4gICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk11c2ljIFZhbGxleTwvaDE+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRWaWRlb3MubWFwKCh2aWRlbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxWaWRlb1xyXG4gICAgICAgICAgICAgICAga2V5PXt2aWRlby5faWR9XHJcbiAgICAgICAgICAgICAgICB2aWRlb19pZD17dmlkZW8uX2lkfVxyXG4gICAgICAgICAgICAgICAgdmlkZW89e3ZpZGVvLnZpZGVvfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlZD17dmlkZW8uZGVsZXRlZH1cclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt2aWRlby51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e3ZpZGVvLnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBoYXNodGFncz17dmlkZW8uaGFzaHRhZ3N9XHJcbiAgICAgICAgICAgICAgICBsaWtlcz17dmlkZW8ubGlrZXN9XHJcbiAgICAgICAgICAgICAgICB2aWV3cz17dmlkZW8udmlld3N9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXt2aWRlby5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICBsaWtlZD17dmlkZW8ubGlrZWR9XHJcbiAgICAgICAgICAgICAgICBhbGxWaWRlb3M9e2FsbFZpZGVvc31cclxuICAgICAgICAgICAgICAgIHNldEFsbFZpZGVvcz17c2V0QWxsVmlkZW9zfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0FwcCAmJiA8QXBwIHJlY2lwaWVudF9pZD17cmVjaXBpZW50X2lkWzBdfSB2aWRlb19pZD17dmlkZW9JZHNUb1NlbmRbMF19IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJWaWRlbyIsIkhlYWRlciIsIkFwcCIsIlNpZGViYXIiLCJheGlvcyIsIkV4cGxvcmUiLCJhbGxWaWRlb3MiLCJzZXRBbGxWaWRlb3MiLCJ2aWRlb0lkc1RvU2VuZCIsInNlbmRWaWRlb0lkc1RvQ2hhdGJvdCIsInJlY2lwaWVudF9pZCIsInNldFJlY2lwaWVudElkIiwidHlwZSIsInNldFR5cGUiLCJub3RpZmljYXRpb25zIiwic2V0Tm90aWZpY2F0aW9ucyIsInNob3dBcHAiLCJzZXRTaG93QXBwIiwiZ2V0VHlwZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJnZXROb3RpZmljYXRpb25zIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiRElTQUJMRV9MT0FESU5HIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImxvZyIsImNhdGNoIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJxdWVyeVBhcmFtVmFsdWUiLCJmZXRjaFZpZGVvcyIsInNvcnRlZFZpZGVvcyIsInZpZGVvcyIsInNvcnQiLCJhIiwiYiIsInNjb3JlQSIsImxpa2VzIiwidmlld3MiLCJzY29yZUIiLCJ1bmlxdWVVc2VySWRzIiwiU2V0IiwidmlkZW9zVG9TZW5kIiwiZmlsdGVyIiwidmlkZW8iLCJ1c2VyIiwiaXNSZWNpcGllbnQiLCJmb3JFYWNoIiwibm90aWZpY2F0aW9uIiwidXNlcm5hbWUiLCJyZWNpcGllbnQiLCJoYXMiLCJ1YWVybmFtZSIsImFkZCIsIm1hcCIsIl9pZCIsInJlY2lwaWVudElkc1RvU2VuZCIsInJvdXRlciIsInBhdGgiLCJxdWVyeSIsInRhZyIsImZpbHRlcmVkVmlkZW9zIiwibGVuZ3RoIiwidGltZXJJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJleHBsb3JlIiwic2lkZWJhciIsImV4cGxvcmVfY29udGFpbmVyIiwiY29udGVudCIsInZpZGVvX2lkIiwiZGVsZXRlZCIsImltYWdlIiwiaGFzaHRhZ3MiLCJkYXRlIiwiY3JlYXRlZEF0IiwibGlrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Explore.js\n"));

/***/ })

});