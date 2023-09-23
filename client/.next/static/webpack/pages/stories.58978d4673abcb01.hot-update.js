"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stories",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Sidebar.module.css */ \"./styles/Sidebar.module.css\");\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Sidebar() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeOption, setActiveOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"explore\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                const currentPath = window.location.pathname;\n                const parts = currentPath.split(\"/\");\n                const storedActiveOption = parts[1];\n                if (storedActiveOption) {\n                    setActiveOption(storedActiveOption);\n                }\n                const user = localStorage.getItem(\"username\");\n                const type = localStorage.getItem(\"type\");\n                setUser(user);\n                setType(type);\n            } catch (error) {\n                console.error(\"Error fetching user:\", error);\n            }\n        };\n        getUser();\n    }, []);\n    const updateActiveOption = (option)=>{\n        setActiveOption(option);\n    };\n    function logout() {\n        localStorage.clear();\n        setActiveOption(null);\n        window.location.href = \"/login\";\n    }\n    function login() {\n        window.location.href = \"/login\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"explore\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"/explore\",\n                    onClick: ()=>updateActiveOption(\"explore\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-compass\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Explore\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"stories\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                class: \"bi bi-hourglass-split\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Stories\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"/tweets\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                class: \"bi bi-feather\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Tweets\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                type === \"pro creator\" || type === \"partner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"notifications\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"/notifications\",\n                    onClick: ()=>updateActiveOption(\"notifications\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-bell\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Notifications\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: type ? \"/profile/\".concat(user) : \"/login\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-person\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                type ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    onClick: logout,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-box-arrow-right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Log out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().upload_button),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: login,\n                        children: \"Log in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"UNORZIjSngN7ZmzBdlYe2N/zQVY=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTDtvQkFDQ0gsV0FBV3JCLGlCQUFpQixZQUFZLEdBQW9CTixPQUFqQkEsMEVBQWFxQixFQUFDLEtBQWlCLE9BQWRyQiwwRUFBYStCLElBQUsvQiwwRUFBYXFCO29CQUMzRkcsTUFBTXBCLE9BQU8sWUFBaUIsT0FBTEYsUUFBUztvQkFDbEM4QixTQUFTLElBQU1aLG1CQUFtQjs7c0NBRWxDLDhEQUFDTTs0QkFBSUMsV0FBVzNCLHdFQUFXaUM7c0NBQ3pCLDRFQUFDQztnQ0FBRVAsV0FBVTs7Ozs7Ozs7Ozs7c0NBRWYsOERBQUNRO3NDQUFHOzs7Ozs7Ozs7Ozs7Z0JBRUwvQixxQkFDQyw4REFBQzBCO29CQUNDSCxXQUFXM0IsMEVBQWFxQjtvQkFDeEJXLFNBQVNWOztzQ0FFVCw4REFBQ0k7NEJBQUlDLFdBQVczQix3RUFBV2lDO3NDQUN6Qiw0RUFBQ0M7Z0NBQUVQLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDUTtzQ0FBRzs7Ozs7Ozs7Ozs7eUNBR04sOERBQUNUO29CQUFJQyxXQUFXM0IsaUZBQW9CcUM7OEJBQ2xDLDRFQUFDQzt3QkFBT2xDLE1BQUs7d0JBQVM0QixTQUFTUDtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsRDtHQW5IU3hCO0tBQUFBO0FBcUhULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz8zZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaWRlYmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWN0aXZlT3B0aW9uLCBzZXRBY3RpdmVPcHRpb25dID0gdXNlU3RhdGUoJ2V4cGxvcmUnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBjdXJyZW50UGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZEFjdGl2ZU9wdGlvbiA9IHBhcnRzWzFdXHJcbiAgICAgICAgaWYgKHN0b3JlZEFjdGl2ZU9wdGlvbikge1xyXG4gICAgICAgICAgc2V0QWN0aXZlT3B0aW9uKHN0b3JlZEFjdGl2ZU9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInR5cGVcIik7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICBzZXRUeXBlKHR5cGUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXI6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFjdGl2ZU9wdGlvbiA9IChvcHRpb24pID0+IHtcclxuICAgIHNldEFjdGl2ZU9wdGlvbihvcHRpb24pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgc2V0QWN0aXZlT3B0aW9uKG51bGwpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlT3B0aW9uID09PSAnZXhwbG9yZScgPyBgJHtzdHlsZXMub3B0aW9ufSAke3N0eWxlcy5hY3RpdmV9YCA6IHN0eWxlcy5vcHRpb259XHJcbiAgICAgICAgICBocmVmPVwiL2V4cGxvcmVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQWN0aXZlT3B0aW9uKCdleHBsb3JlJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktY29tcGFzc1wiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGxpPkV4cGxvcmU8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVPcHRpb24gPT09ICdwcm9maWxlJyA/IGAke3N0eWxlcy5vcHRpb259ICR7c3R5bGVzLmFjdGl2ZX1gIDogc3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgIGhyZWY9XCJzdG9yaWVzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZU9wdGlvbigncHJvZmlsZScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktaG91cmdsYXNzLXNwbGl0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGk+U3RvcmllczwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZU9wdGlvbiA9PT0gJ3Byb2ZpbGUnID8gYCR7c3R5bGVzLm9wdGlvbn0gJHtzdHlsZXMuYWN0aXZlfWAgOiBzdHlsZXMub3B0aW9ufVxyXG4gICAgICAgICAgaHJlZj1cIi90d2VldHNcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQWN0aXZlT3B0aW9uKCdwcm9maWxlJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1mZWF0aGVyXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGk+VHdlZXRzPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAge3R5cGUgPT09ICdwcm8gY3JlYXRvcicgfHwgdHlwZSA9PT0gJ3BhcnRuZXInID8gKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVPcHRpb24gPT09ICdub3RpZmljYXRpb25zJyA/IGAke3N0eWxlcy5vcHRpb259ICR7c3R5bGVzLmFjdGl2ZX1gIDogc3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgICAgaHJlZj1cIi9ub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQWN0aXZlT3B0aW9uKCdub3RpZmljYXRpb25zJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktYmVsbFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxsaT5Ob3RpZmljYXRpb25zPC9saT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVPcHRpb24gPT09ICdwcm9maWxlJyA/IGAke3N0eWxlcy5vcHRpb259ICR7c3R5bGVzLmFjdGl2ZX1gIDogc3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgIGhyZWY9e3R5cGUgPyBgL3Byb2ZpbGUvJHt1c2VyfWAgOiAnL2xvZ2luJ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZU9wdGlvbigncHJvZmlsZScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLXBlcnNvblwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGxpPlByb2ZpbGU8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7dHlwZSA/IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgICAgb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWJveC1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxsaT5Mb2cgb3V0PC9saT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRfYnV0dG9ufT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17bG9naW59PlxyXG4gICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWRlYmFyIiwidXNlciIsInNldFVzZXIiLCJ0eXBlIiwic2V0VHlwZSIsImFjdGl2ZU9wdGlvbiIsInNldEFjdGl2ZU9wdGlvbiIsImdldFVzZXIiLCJjdXJyZW50UGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYXJ0cyIsInNwbGl0Iiwic3RvcmVkQWN0aXZlT3B0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsInVwZGF0ZUFjdGl2ZU9wdGlvbiIsIm9wdGlvbiIsImxvZ291dCIsImNsZWFyIiwiaHJlZiIsImxvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsInVsIiwiYSIsImFjdGl2ZSIsIm9uQ2xpY2siLCJpY29uIiwiaSIsImxpIiwiY2xhc3MiLCJ1cGxvYWRfYnV0dG9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});