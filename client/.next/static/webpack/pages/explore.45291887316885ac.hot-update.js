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

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Sidebar.module.css */ \"./styles/Sidebar.module.css\");\n/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Sidebar() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeOption, setActiveOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"explore\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                const currentPath = window.location.pathname;\n                const parts = currentPath.split(\"/\");\n                const storedActiveOption = parts[1];\n                if (storedActiveOption) {\n                    setActiveOption(storedActiveOption);\n                }\n                const user = localStorage.getItem(\"username\");\n                const type = localStorage.getItem(\"type\");\n                setUser(user);\n                setType(type);\n            } catch (error) {\n                console.error(\"Error fetching user:\", error);\n            }\n        };\n        getUser();\n    }, []);\n    const updateActiveOption = (option)=>{\n        setActiveOption(option);\n    };\n    function logout() {\n        localStorage.clear();\n        setActiveOption(null);\n        window.location.href = \"/login\";\n    }\n    function login() {\n        window.location.href = \"/login\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().sidebar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"explore\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"/explore\",\n                    onClick: ()=>updateActiveOption(\"explore\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-compass\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Explore\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: type ? \"/profile/\".concat(user) : \"/login\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                class: \"bi bi-feather\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Tweets\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: type ? \"/profile/\".concat(user) : \"/login\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                class: \"bi bi-hourglass-split\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Stories\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                type === \"pro creator\" || type === \"partner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"notifications\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: \"/notifications\",\n                    onClick: ()=>updateActiveOption(\"notifications\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-bell\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Notifications\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: activeOption === \"profile\" ? \"\".concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option), \" \").concat((_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    href: type ? \"/profile/\".concat(user) : \"/login\",\n                    onClick: ()=>updateActiveOption(\"profile\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-person\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Profile\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                type ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().option),\n                    onClick: logout,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"bi bi-box-arrow-right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Log out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_2___default().upload_button),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: login,\n                        children: \"Log in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\Sidebar.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"UNORZIjSngN7ZmzBdlYe2N/zQVY=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7c0NBRWYsOERBQUNRO3NDQUFHOzs7Ozs7Ozs7OzsyQkFFSjs4QkFDSiw4REFBQ0w7b0JBQ0NILFdBQVdyQixpQkFBaUIsWUFBWSxHQUFvQk4sT0FBakJBLDBFQUFhcUIsRUFBQyxLQUFpQixPQUFkckIsMEVBQWErQixJQUFLL0IsMEVBQWFxQjtvQkFDM0ZHLE1BQU1wQixPQUFPLFlBQWlCLE9BQUxGLFFBQVM7b0JBQ2xDOEIsU0FBUyxJQUFNWixtQkFBbUI7O3NDQUVsQyw4REFBQ007NEJBQUlDLFdBQVczQix3RUFBV2lDO3NDQUN6Qiw0RUFBQ0M7Z0NBQUVQLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDUTtzQ0FBRzs7Ozs7Ozs7Ozs7O2dCQUVML0IscUJBQ0MsOERBQUMwQjtvQkFDQ0gsV0FBVzNCLDBFQUFhcUI7b0JBQ3hCVyxTQUFTVjs7c0NBRVQsOERBQUNJOzRCQUFJQyxXQUFXM0Isd0VBQVdpQztzQ0FDekIsNEVBQUNDO2dDQUFFUCxXQUFVOzs7Ozs7Ozs7OztzQ0FFZiw4REFBQ1E7c0NBQUc7Ozs7Ozs7Ozs7O3lDQUdOLDhEQUFDVDtvQkFBSUMsV0FBVzNCLGlGQUFvQnFDOzhCQUNsQyw0RUFBQ0M7d0JBQU9sQyxNQUFLO3dCQUFTNEIsU0FBU1A7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEQ7R0FuSFN4QjtLQUFBQTtBQXFIVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2lkZWJhci5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2FjdGl2ZU9wdGlvbiwgc2V0QWN0aXZlT3B0aW9uXSA9IHVzZVN0YXRlKCdleHBsb3JlJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gY3VycmVudFBhdGguc3BsaXQoJy8nKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRBY3RpdmVPcHRpb24gPSBwYXJ0c1sxXVxyXG4gICAgICAgIGlmIChzdG9yZWRBY3RpdmVPcHRpb24pIHtcclxuICAgICAgICAgIHNldEFjdGl2ZU9wdGlvbihzdG9yZWRBY3RpdmVPcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0eXBlXCIpO1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgc2V0VHlwZSh0eXBlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVBY3RpdmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHNldEFjdGl2ZU9wdGlvbihudWxsKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dpbigpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZU9wdGlvbiA9PT0gJ2V4cGxvcmUnID8gYCR7c3R5bGVzLm9wdGlvbn0gJHtzdHlsZXMuYWN0aXZlfWAgOiBzdHlsZXMub3B0aW9ufVxyXG4gICAgICAgICAgaHJlZj1cIi9leHBsb3JlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZU9wdGlvbignZXhwbG9yZScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWNvbXBhc3NcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsaT5FeHBsb3JlPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlT3B0aW9uID09PSAncHJvZmlsZScgPyBgJHtzdHlsZXMub3B0aW9ufSAke3N0eWxlcy5hY3RpdmV9YCA6IHN0eWxlcy5vcHRpb259XHJcbiAgICAgICAgICBocmVmPXt0eXBlID8gYC9wcm9maWxlLyR7dXNlcn1gIDogJy9sb2dpbid9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVBY3RpdmVPcHRpb24oJ3Byb2ZpbGUnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWZlYXRoZXJcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsaT5Ud2VldHM8L2xpPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVPcHRpb24gPT09ICdwcm9maWxlJyA/IGAke3N0eWxlcy5vcHRpb259ICR7c3R5bGVzLmFjdGl2ZX1gIDogc3R5bGVzLm9wdGlvbn1cclxuICAgICAgICAgIGhyZWY9e3R5cGUgPyBgL3Byb2ZpbGUvJHt1c2VyfWAgOiAnL2xvZ2luJ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZU9wdGlvbigncHJvZmlsZScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktaG91cmdsYXNzLXNwbGl0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGk+U3RvcmllczwvbGk+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHt0eXBlID09PSAncHJvIGNyZWF0b3InIHx8IHR5cGUgPT09ICdwYXJ0bmVyJyA/IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlT3B0aW9uID09PSAnbm90aWZpY2F0aW9ucycgPyBgJHtzdHlsZXMub3B0aW9ufSAke3N0eWxlcy5hY3RpdmV9YCA6IHN0eWxlcy5vcHRpb259XHJcbiAgICAgICAgICAgIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZU9wdGlvbignbm90aWZpY2F0aW9ucycpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWJlbGxcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGk+Tm90aWZpY2F0aW9uczwvbGk+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlT3B0aW9uID09PSAncHJvZmlsZScgPyBgJHtzdHlsZXMub3B0aW9ufSAke3N0eWxlcy5hY3RpdmV9YCA6IHN0eWxlcy5vcHRpb259XHJcbiAgICAgICAgICBocmVmPXt0eXBlID8gYC9wcm9maWxlLyR7dXNlcn1gIDogJy9sb2dpbid9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVBY3RpdmVPcHRpb24oJ3Byb2ZpbGUnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1wZXJzb25cIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxsaT5Qcm9maWxlPC9saT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAge3R5cGUgPyAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1ib3gtYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGk+TG9nIG91dDwvbGk+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkX2J1dHRvbn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2xvZ2lufT5cclxuICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lkZWJhciIsInVzZXIiLCJzZXRVc2VyIiwidHlwZSIsInNldFR5cGUiLCJhY3RpdmVPcHRpb24iLCJzZXRBY3RpdmVPcHRpb24iLCJnZXRVc2VyIiwiY3VycmVudFBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFydHMiLCJzcGxpdCIsInN0b3JlZEFjdGl2ZU9wdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJ1cGRhdGVBY3RpdmVPcHRpb24iLCJvcHRpb24iLCJsb2dvdXQiLCJjbGVhciIsImhyZWYiLCJsb2dpbiIsImRpdiIsImNsYXNzTmFtZSIsInNpZGViYXIiLCJ1bCIsImEiLCJhY3RpdmUiLCJvbkNsaWNrIiwiaWNvbiIsImkiLCJsaSIsImNsYXNzIiwidXBsb2FkX2J1dHRvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});