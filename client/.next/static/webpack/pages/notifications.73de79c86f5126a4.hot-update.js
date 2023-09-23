"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/notifications",{

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SearchBar.module.css */ \"./styles/SearchBar.module.css\");\n/* harmony import */ var _styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Search(param) {\n    let { allTweets, setAllTweets, allVideos, setAllVideos, allStories, setAllStories } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showHashtag, setShowHashtag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showSubmenu, setShowSubmenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function handleKeyPress(event) {\n        if (event.key === \"Enter\") {\n            event.preventDefault();\n            search(query);\n        }\n    }\n    const handleIconClick = ()=>{\n        setShowHashtag(!showHashtag);\n        setShowSubmenu(false);\n    };\n    const handleHashtagClick = ()=>{\n        setShowSubmenu(!showSubmenu);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (containerRef.current && !containerRef.current.contains(event.target)) {\n                setShowHashtag(false);\n                setShowSubmenu(false);\n            }\n        };\n        window.addEventListener(\"click\", handleClickOutside);\n        const searchParams = new URLSearchParams(window.location.search);\n        const queryParam = searchParams.get(\"query\");\n        if (queryParam) {\n            search(queryParam);\n        }\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    function search(queryParam) {\n        const searchQuery = queryParam || query;\n        const currentPath = window.location.pathname;\n        console.log(\"hh\", searchQuery);\n        let searchEndpoint;\n        let setAllItems;\n        let itemsKey;\n        if (currentPath === \"/explore\") {\n            searchEndpoint = \"\".concat(\"http://localhost:5000\", \"/video/search\");\n            itemsKey = \"videos\";\n            setAllItems = setAllVideos;\n            console.log(\"video\");\n        } else if (currentPath === \"/tweets\") {\n            searchEndpoint = \"\".concat(\"http://localhost:5000\", \"/tweet/search\");\n            itemsKey = \"tweets\";\n            setAllItems = setAllTweets;\n            console.log(\"tweets\");\n        } else if (currentPath === \"/stories\") {\n            searchEndpoint = \"\".concat(\"http://localhost:5000\", \"/story/search\");\n            itemsKey = \"stories\";\n            setAllItems = setAllStories;\n            console.log(\"stories\");\n        } else {\n            console.log(\"no\");\n            return;\n        }\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(searchEndpoint, {\n            params: {\n                query: searchQuery\n            }\n        }).then((response)=>{\n            const items = response.data[itemsKey];\n            console.log(\"O\", items);\n            setAllItems(items);\n            console.log(\"Items found:\", items);\n            setQuery(\"\");\n            const searchParams = new URLSearchParams(window.location.search);\n            searchParams.set(\"query\", searchQuery);\n            const newURL = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n            window.history.replaceState(null, null, newURL);\n        }).catch((error)=>{\n            console.error(\"Error searching items:\", error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchForm),\n        ref: containerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"d-flex search d-flex align-items-center border-primary px-3 \".concat((_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().search)),\n                role: \"search\",\n                id: \"searchForm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-search \".concat((_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().searchIcon)),\n                        onClick: ()=>search()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"search\",\n                        type: \"search\",\n                        placeholder: \"Search\",\n                        className: \"bg-transparent border-0 ps-2 \".concat((_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().search_input)),\n                        onClick: handleIconClick,\n                        onKeyDown: handleKeyPress,\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            showHashtag && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().link_categories), \" \").concat(showSubmenu ? (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().show) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                        onClick: handleHashtagClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().categories),\n                            children: \"#\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().submenu),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().submenuItem),\n                                onClick: ()=>search(\"beat\"),\n                                children: \"#beat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().submenuItem),\n                                onClick: ()=>search(\"instrumental\"),\n                                children: \"#instrumental\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().submenuItem),\n                                onClick: ()=>search(\"music\"),\n                                children: \"#music\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().submenuItem),\n                                onClick: ()=>search(\"tutorial\"),\n                                children: \"#tutorial\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\SearchBar.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"atxmlwHctoeAcOY9Fwe6jQKcQ2o=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JtRjtnQ0FBRWhCLFNBQVMsSUFBTS9DLE9BQU87MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRjtHQTFJU2xCO0tBQUFBO0FBNElULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzPzc3YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2VhcmNoQmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKHsgYWxsVHdlZXRzLCBzZXRBbGxUd2VldHMsIGFsbFZpZGVvcywgc2V0QWxsVmlkZW9zLCBhbGxTdG9yaWVzLCBzZXRBbGxTdG9yaWVzIH0pIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3Nob3dIYXNodGFnLCBzZXRTaG93SGFzaHRhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dTdWJtZW51LCBzZXRTaG93U3VibWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZWFyY2gocXVlcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSWNvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0hhc2h0YWcoIXNob3dIYXNodGFnKTtcclxuICAgIHNldFNob3dTdWJtZW51KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVIYXNodGFnQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U3VibWVudSghc2hvd1N1Ym1lbnUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50ICYmICFjb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgc2V0U2hvd0hhc2h0YWcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTdWJtZW51KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtID0gc2VhcmNoUGFyYW1zLmdldCgncXVlcnknKTtcclxuICAgIGlmIChxdWVyeVBhcmFtKSB7XHJcbiAgICAgIHNlYXJjaChxdWVyeVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBzZWFyY2gocXVlcnlQYXJhbSkge1xyXG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBxdWVyeVBhcmFtIHx8IHF1ZXJ5O1xyXG4gICAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImhoXCIsIHNlYXJjaFF1ZXJ5KVxyXG4gICAgbGV0IHNlYXJjaEVuZHBvaW50O1xyXG4gICAgbGV0IHNldEFsbEl0ZW1zO1xyXG4gICAgbGV0IGl0ZW1zS2V5O1xyXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSAnL2V4cGxvcmUnKSB7XHJcbiAgICAgIHNlYXJjaEVuZHBvaW50ID0gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3ZpZGVvL3NlYXJjaGA7XHJcbiAgICAgIGl0ZW1zS2V5ID0gJ3ZpZGVvcyc7XHJcbiAgICAgIHNldEFsbEl0ZW1zID0gc2V0QWxsVmlkZW9zO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInZpZGVvXCIpXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYXRoID09PSAnL3R3ZWV0cycpIHtcclxuICAgICAgc2VhcmNoRW5kcG9pbnQgPSBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vdHdlZXQvc2VhcmNoYDtcclxuICAgICAgaXRlbXNLZXkgPSAndHdlZXRzJztcclxuICAgICAgc2V0QWxsSXRlbXMgPSBzZXRBbGxUd2VldHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHdlZXRzXCIpXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYXRoID09PSAnL3N0b3JpZXMnKSB7XHJcbiAgICAgIHNlYXJjaEVuZHBvaW50ID0gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0b3J5L3NlYXJjaGA7XHJcbiAgICAgIGl0ZW1zS2V5ID0gJ3N0b3JpZXMnO1xyXG4gICAgICBzZXRBbGxJdGVtcyA9IHNldEFsbFN0b3JpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic3Rvcmllc1wiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJub1wiKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXhpb3MuZ2V0KHNlYXJjaEVuZHBvaW50LCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHF1ZXJ5OiBzZWFyY2hRdWVyeSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2UuZGF0YVtpdGVtc0tleV07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPXCIsIGl0ZW1zKVxyXG4gICAgICAgIHNldEFsbEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSXRlbXMgZm91bmQ6JywgaXRlbXMpO1xyXG4gICAgICAgIHNldFF1ZXJ5KFwiXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3F1ZXJ5Jywgc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgIGNvbnN0IG5ld1VSTCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBuZXdVUkwpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIGl0ZW1zOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGb3JtfSByZWY9e2NvbnRhaW5lclJlZn0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZC1mbGV4IHNlYXJjaCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlci1wcmltYXJ5IHB4LTMgJHtzdHlsZXMuc2VhcmNofWB9XHJcbiAgICAgICAgcm9sZT1cInNlYXJjaFwiXHJcbiAgICAgICAgaWQ9XCJzZWFyY2hGb3JtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiaSBiaS1zZWFyY2ggJHtzdHlsZXMuc2VhcmNoSWNvbn1gfSBvbkNsaWNrPXsoKSA9PiBzZWFyY2goKX1cclxuICAgICAgICA+PC9pPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BiZy10cmFuc3BhcmVudCBib3JkZXItMCBwcy0yICR7c3R5bGVzLnNlYXJjaF9pbnB1dH1gfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSWNvbkNsaWNrfVxyXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9e2UgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge3Nob3dIYXNodGFnICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rX2NhdGVnb3JpZXN9ICR7c2hvd1N1Ym1lbnUgPyBzdHlsZXMuc2hvdyA6ICcnfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBvbkNsaWNrPXtoYW5kbGVIYXNodGFnQ2xpY2t9PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30gPiM8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1lbnV9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2VhcmNoKCdiZWF0Jyl9PlxyXG4gICAgICAgICAgICAgICNiZWF0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IHNlYXJjaCgnaW5zdHJ1bWVudGFsJyl9PlxyXG4gICAgICAgICAgICAgICNpbnN0cnVtZW50YWxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2VhcmNoKCdtdXNpYycpfT5cclxuICAgICAgICAgICAgICAjbXVzaWNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zdWJtZW51SXRlbX0gb25DbGljaz17KCkgPT4gc2VhcmNoKCd0dXRvcmlhbCcpfT5cclxuICAgICAgICAgICAgICAjdHV0b3JpYWxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJheGlvcyIsIlNlYXJjaCIsImFsbFR3ZWV0cyIsInNldEFsbFR3ZWV0cyIsImFsbFZpZGVvcyIsInNldEFsbFZpZGVvcyIsImFsbFN0b3JpZXMiLCJzZXRBbGxTdG9yaWVzIiwicXVlcnkiLCJzZXRRdWVyeSIsInNob3dIYXNodGFnIiwic2V0U2hvd0hhc2h0YWciLCJzaG93U3VibWVudSIsInNldFNob3dTdWJtZW51IiwiY29udGFpbmVyUmVmIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoIiwiaGFuZGxlSWNvbkNsaWNrIiwiaGFuZGxlSGFzaHRhZ0NsaWNrIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwicXVlcnlQYXJhbSIsImdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWFyY2hRdWVyeSIsImN1cnJlbnRQYXRoIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRW5kcG9pbnQiLCJzZXRBbGxJdGVtcyIsIml0ZW1zS2V5IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwicGFyYW1zIiwidGhlbiIsInJlc3BvbnNlIiwiaXRlbXMiLCJkYXRhIiwic2V0IiwibmV3VVJMIiwidG9TdHJpbmciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNlYXJjaEZvcm0iLCJyZWYiLCJmb3JtIiwicm9sZSIsImlkIiwiaSIsInNlYXJjaEljb24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hfaW5wdXQiLCJvbktleURvd24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImxpbmtfY2F0ZWdvcmllcyIsInNob3ciLCJsaW5rIiwiaDMiLCJjYXRlZ29yaWVzIiwic3VibWVudSIsImEiLCJzdWJtZW51SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBar.js\n"));

/***/ })

});