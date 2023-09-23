"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweets",{

/***/ "./components/MusicTweets.js":
/*!***********************************!*\
  !*** ./components/MusicTweets.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Tweets.module.css */ \"./styles/Tweets.module.css\");\n/* harmony import */ var _styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tweet */ \"./components/Tweet.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MusicTweets() {\n    _s();\n    const label = \"Music Tweets\";\n    const [allTweets, setAllTweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setTimerExpired(true);\n        }, 1000);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, []);\n    if (!timerExpired) {\n        setLoading(true);\n    } else {\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTweet();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                const user = localStorage.getItem(\"username\");\n                const type = localStorage.getItem(\"type\");\n                setUser(user);\n                setType(type);\n            } catch (error) {\n                console.error(\"Error fetching user:\", error);\n            }\n        };\n        getUser();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleEnterKey = (event)=>{\n            if (event.keyCode === 13 && !event.shiftKey && text.trim() !== \"\") {\n                event.preventDefault();\n                send();\n            }\n        };\n        document.addEventListener(\"keydown\", handleEnterKey);\n        return ()=>{\n            document.removeEventListener(\"keydown\", handleEnterKey);\n        };\n    }, [\n        text\n    ]);\n    const fetchTweet = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000\" + \"/tweet/\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"id\"))\n                }\n            });\n            const sortedTweets = response.data.tweets.reverse();\n            setAllTweets(sortedTweets);\n        } catch (error) {\n            console.error(\"Error fetching tweets:\", error);\n        }\n    };\n    function send() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:5000\" + \"/tweet\", {\n            content: text\n        }).then(async function(response) {\n            fetchTweet();\n            setText(\"\");\n        }).catch(function(error) {\n            console.error(\"Error sending tweet:\", error);\n        });\n    }\n    console.log(allTweets);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweets),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidebar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                allTweets: allTweets,\n                setAllTweets: setAllTweets\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweetsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().space)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweet),\n                        children: allTweets.map((tweet)=>{\n                            var _tweet_user, _tweet_user1;\n                            return console.log(tweet.liked), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tweet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                tweet_id: tweet._id,\n                                tweet: tweet.content,\n                                likes: tweet.likes,\n                                username: (_tweet_user = tweet.user) === null || _tweet_user === void 0 ? void 0 : _tweet_user.username,\n                                avatar: (_tweet_user1 = tweet.user) === null || _tweet_user1 === void 0 ? void 0 : _tweet_user1.image,\n                                date: tweet.createdAt,\n                                deleted: tweet.deleted,\n                                liked: tweet.liked,\n                                allTweets: allTweets,\n                                setAllTweets: setAllTweets,\n                                user: user,\n                                type: type\n                            }, tweet._id, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            type === \"creator\" || type === \"user\" || type === \"pro creator\" || type === \"pro user\" || type === \"partner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().addComment),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-emoji-smile \".concat((_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().emoji))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().comment_text),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: text,\n                            onChange: (e)=>setText(e.target.value),\n                            name: \"text\",\n                            id: \"text\",\n                            placeholder: \"Add a tweet...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                        onClick: send,\n                        disabled: !text.trim(),\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(MusicTweets, \"mxA9v1Yx0HvkgqMScGQhmDyNtFs=\");\n_c = MusicTweets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicTweets);\nvar _c;\n$RefreshReg$(_c, \"MusicTweets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FFSjJELFVBQVVILE1BQU1JO2dDQUNoQkosT0FBT0EsTUFBTVQ7Z0NBQ2JjLE9BQU9MLE1BQU1LO2dDQUNiQyxVQUFVTixDQUFBQSxjQUFBQSxNQUFNN0Msa0JBQU42Qyx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBWU07Z0NBQ3RCQyxRQUFRUCxDQUFBQSxlQUFBQSxNQUFNN0Msa0JBQU42QywwQkFBQUEsS0FBQUEsSUFBQUEsYUFBWVE7Z0NBQ3BCQyxNQUFNVCxNQUFNVTtnQ0FDWkMsU0FBU1gsTUFBTVc7Z0NBQ2ZULE9BQU9GLE1BQU1FO2dDQUNickQsV0FBV0E7Z0NBQ1hDLGNBQWNBO2dDQUNkSyxNQUFNQTtnQ0FDTkYsTUFBTUE7K0JBWkQrQyxNQUFNSTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQmxCbkQsU0FBUyxhQUFhQSxTQUFTLFVBQVVBLFNBQVMsaUJBQWlCQSxTQUFTLGNBQWNBLFNBQVMsMEJBQ2xHLDhEQUFDMEM7Z0JBQUlDLFdBQVd0RCw2RUFBaUJzRTs7a0NBQy9CLDhEQUFDQzt3QkFBRWpCLFdBQVcscUJBQWtDLE9BQWJ0RCx3RUFBWXdFOzs7Ozs7a0NBQy9DLDhEQUFDbkI7d0JBQUlDLFdBQVd0RCwrRUFBbUJ5RTtrQ0FDakMsNEVBQUNDOzRCQUNDQyxPQUFPbEU7NEJBQ1BtRSxVQUFVLENBQUNDLElBQU1uRSxRQUFRbUUsRUFBRUMsT0FBT0g7NEJBQ2xDSSxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNDO3dCQUFPNUIsV0FBV3RELHVFQUFXZ0Q7d0JBQUVtQyxTQUFTbEQ7d0JBQU1tRCxVQUFVLENBQUMzRSxLQUFLc0I7a0NBQVE7Ozs7Ozs7Ozs7O3VCQUl2RTs7Ozs7OztBQUdWO0dBNUlTMUI7S0FBQUE7QUE4SVQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NdXNpY1R3ZWV0cy5qcz9iNDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ud2VldHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgVHdlZXQgZnJvbSAnLi9Ud2VldCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBNdXNpY1R3ZWV0cygpIHtcclxuICBjb25zdCBsYWJlbCA9ICdNdXNpYyBUd2VldHMnO1xyXG5cclxuICBjb25zdCBbYWxsVHdlZXRzLCBzZXRBbGxUd2VldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVyRXhwaXJlZCh0cnVlKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH07XHJcbn0sIFtdKTtcclxuXHJcbmlmKCF0aW1lckV4cGlyZWQpIHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFR3ZWV0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidHlwZVwiKTtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgc2V0VHlwZSh0eXBlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXI6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRW50ZXJLZXkgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmICFldmVudC5zaGlmdEtleSAmJiB0ZXh0LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNlbmQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRW50ZXJLZXkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFbnRlcktleSk7XHJcbiAgICB9O1xyXG4gIH0sIFt0ZXh0XSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVHdlZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChwcm9jZXNzLmVudi5CQVNFX1VSTCArICcvdHdlZXQvJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpfWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBzb3J0ZWRUd2VldHMgPSByZXNwb25zZS5kYXRhLnR3ZWV0cy5yZXZlcnNlKCk7XHJcbiAgICAgIHNldEFsbFR3ZWV0cyhzb3J0ZWRUd2VldHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdHdlZXRzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2VuZCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkJBU0VfVVJMICsgJy90d2VldCcsIHtcclxuICAgICAgICBjb250ZW50OiB0ZXh0LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBmZXRjaFR3ZWV0KCk7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIHR3ZWV0OicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhhbGxUd2VldHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50d2VldHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SGVhZGVyIGFsbFR3ZWV0cz17YWxsVHdlZXRzfSBzZXRBbGxUd2VldHM9e3NldEFsbFR3ZWV0c30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50d2VldHNDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2V9PjwvZGl2PlxyXG4gICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntsYWJlbH08L2gxPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0fT5cclxuICAgICAgICAgIHthbGxUd2VldHMubWFwKCh0d2VldCkgPT4gKFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0d2VldC5saWtlZCksXHJcbiAgICAgICAgICAgIDxUd2VldFxyXG4gICAgICAgICAgICAgIGtleT17dHdlZXQuX2lkfVxyXG4gICAgICAgICAgICAgIHR3ZWV0X2lkPXt0d2VldC5faWR9XHJcbiAgICAgICAgICAgICAgdHdlZXQ9e3R3ZWV0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgbGlrZXM9e3R3ZWV0Lmxpa2VzfVxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lPXt0d2VldC51c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICBhdmF0YXI9e3R3ZWV0LnVzZXI/LmltYWdlfVxyXG4gICAgICAgICAgICAgIGRhdGU9e3R3ZWV0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICBkZWxldGVkPXt0d2VldC5kZWxldGVkfVxyXG4gICAgICAgICAgICAgIGxpa2VkPXt0d2VldC5saWtlZH1cclxuICAgICAgICAgICAgICBhbGxUd2VldHM9e2FsbFR3ZWV0c31cclxuICAgICAgICAgICAgICBzZXRBbGxUd2VldHM9e3NldEFsbFR3ZWV0c31cclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHt0eXBlID09PSAnY3JlYXRvcicgfHwgdHlwZSA9PT0gJ3VzZXInIHx8IHR5cGUgPT09ICdwcm8gY3JlYXRvcicgfHwgdHlwZSA9PT0gJ3BybyB1c2VyJyB8fCB0eXBlID09PSAncGFydG5lcicgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRDb21tZW50fT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGJpIGJpLWVtb2ppLXNtaWxlICR7c3R5bGVzLmVtb2ppfWB9PjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudF90ZXh0fT5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIHR3ZWV0Li4uXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0gb25DbGljaz17c2VuZH0gZGlzYWJsZWQ9eyF0ZXh0LnRyaW0oKX0+XHJcbiAgICAgICAgICAgIFBvc3RcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11c2ljVHdlZXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhlYWRlciIsIlR3ZWV0IiwiU2lkZWJhciIsImF4aW9zIiwiTXVzaWNUd2VldHMiLCJsYWJlbCIsImFsbFR3ZWV0cyIsInNldEFsbFR3ZWV0cyIsInRleHQiLCJzZXRUZXh0IiwidHlwZSIsInNldFR5cGUiLCJ1c2VyIiwic2V0VXNlciIsInRpbWVyIiwic2V0VGltZW91dCIsInNldFRpbWVyRXhwaXJlZCIsImNsZWFyVGltZW91dCIsInRpbWVyRXhwaXJlZCIsInNldExvYWRpbmciLCJmZXRjaFR3ZWV0IiwiZ2V0VXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVFbnRlcktleSIsImV2ZW50Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidHJpbSIsInByZXZlbnREZWZhdWx0Iiwic2VuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic29ydGVkVHdlZXRzIiwiZGF0YSIsInR3ZWV0cyIsInJldmVyc2UiLCJwb3N0IiwiY29udGVudCIsInRoZW4iLCJjYXRjaCIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNpZGViYXIiLCJ0d2VldHNDb250YWluZXIiLCJzcGFjZSIsInR3ZWV0IiwibWFwIiwibGlrZWQiLCJ0d2VldF9pZCIsIl9pZCIsImxpa2VzIiwidXNlcm5hbWUiLCJhdmF0YXIiLCJpbWFnZSIsImRhdGUiLCJjcmVhdGVkQXQiLCJkZWxldGVkIiwiYWRkQ29tbWVudCIsImkiLCJlbW9qaSIsImNvbW1lbnRfdGV4dCIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MusicTweets.js\n"));

/***/ })

});