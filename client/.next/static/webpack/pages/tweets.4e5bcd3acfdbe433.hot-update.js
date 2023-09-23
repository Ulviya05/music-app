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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Tweets.module.css */ \"./styles/Tweets.module.css\");\n/* harmony import */ var _styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Tweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tweet */ \"./components/Tweet.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MusicTweets(setLoa) {\n    _s();\n    const label = \"Music Tweets\";\n    const [allTweets, setAllTweets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [timerExpired, setTimerExpired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setTimerExpired(true);\n        }, 1000);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, []);\n    if (!timerExpired) {\n        setLoading(true);\n    } else {\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTweet();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                const user = localStorage.getItem(\"username\");\n                const type = localStorage.getItem(\"type\");\n                setUser(user);\n                setType(type);\n            } catch (error) {\n                console.error(\"Error fetching user:\", error);\n            }\n        };\n        getUser();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleEnterKey = (event)=>{\n            if (event.keyCode === 13 && !event.shiftKey && text.trim() !== \"\") {\n                event.preventDefault();\n                send();\n            }\n        };\n        document.addEventListener(\"keydown\", handleEnterKey);\n        return ()=>{\n            document.removeEventListener(\"keydown\", handleEnterKey);\n        };\n    }, [\n        text\n    ]);\n    const fetchTweet = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000\" + \"/tweet/\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"id\"))\n                }\n            });\n            const sortedTweets = response.data.tweets.reverse();\n            setAllTweets(sortedTweets);\n        } catch (error) {\n            console.error(\"Error fetching tweets:\", error);\n        }\n    };\n    function send() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:5000\" + \"/tweet\", {\n            content: text\n        }).then(async function(response) {\n            fetchTweet();\n            setText(\"\");\n        }).catch(function(error) {\n            console.error(\"Error sending tweet:\", error);\n        });\n    }\n    console.log(allTweets);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweets),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidebar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                allTweets: allTweets,\n                setAllTweets: setAllTweets\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweetsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().space)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().tweet),\n                        children: allTweets.map((tweet)=>{\n                            var _tweet_user, _tweet_user1;\n                            return console.log(tweet.liked), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tweet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                tweet_id: tweet._id,\n                                tweet: tweet.content,\n                                likes: tweet.likes,\n                                username: (_tweet_user = tweet.user) === null || _tweet_user === void 0 ? void 0 : _tweet_user.username,\n                                avatar: (_tweet_user1 = tweet.user) === null || _tweet_user1 === void 0 ? void 0 : _tweet_user1.image,\n                                date: tweet.createdAt,\n                                deleted: tweet.deleted,\n                                liked: tweet.liked,\n                                allTweets: allTweets,\n                                setAllTweets: setAllTweets,\n                                user: user,\n                                type: type\n                            }, tweet._id, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            type === \"creator\" || type === \"user\" || type === \"pro creator\" || type === \"pro user\" || type === \"partner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().addComment),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"bi bi-emoji-smile \".concat((_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().emoji))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().comment_text),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: text,\n                            onChange: (e)=>setText(e.target.value),\n                            name: \"text\",\n                            id: \"text\",\n                            placeholder: \"Add a tweet...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Tweets_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                        onClick: send,\n                        disabled: !text.trim(),\n                        children: \"Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                        lineNumber: 142,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Meliordism\\\\client\\\\components\\\\MusicTweets.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s(MusicTweets, \"NThv83BBA7M6atJf8wON3nPyvV8=\");\n_c = MusicTweets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicTweets);\nvar _c;\n$RefreshReg$(_c, \"MusicTweets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y1R3ZWV0cy5qcz9iNDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ud2VldHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgVHdlZXQgZnJvbSAnLi9Ud2VldCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBNdXNpY1R3ZWV0cyhzZXRMb2EpIHtcclxuICBjb25zdCBsYWJlbCA9ICdNdXNpYyBUd2VldHMnO1xyXG5cclxuICBjb25zdCBbYWxsVHdlZXRzLCBzZXRBbGxUd2VldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RpbWVyRXhwaXJlZCwgc2V0VGltZXJFeHBpcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZXJFeHBpcmVkKHRydWUpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfTtcclxufSwgW10pO1xyXG5cclxuaWYoIXRpbWVyRXhwaXJlZCkge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVHdlZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0eXBlXCIpO1xyXG4gICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICBzZXRUeXBlKHR5cGUpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0VXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2ZW50LnNoaWZ0S2V5ICYmIHRleHQudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFbnRlcktleSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUVudGVyS2V5KTtcclxuICAgIH07XHJcbiAgfSwgW3RleHRdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUd2VldCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHByb2Nlc3MuZW52LkJBU0VfVVJMICsgJy90d2VldC8nLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHNvcnRlZFR3ZWV0cyA9IHJlc3BvbnNlLmRhdGEudHdlZXRzLnJldmVyc2UoKTtcclxuICAgICAgc2V0QWxsVHdlZXRzKHNvcnRlZFR3ZWV0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0d2VldHM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBzZW5kKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuQkFTRV9VUkwgKyAnL3R3ZWV0Jywge1xyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIGZldGNoVHdlZXQoKTtcclxuICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgdHdlZXQ6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGFsbFR3ZWV0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0c30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIZWFkZXIgYWxsVHdlZXRzPXthbGxUd2VldHN9IHNldEFsbFR3ZWV0cz17c2V0QWxsVHdlZXRzfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZX0+PC9kaXY+XHJcbiAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvaDE+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHdlZXR9PlxyXG4gICAgICAgICAge2FsbFR3ZWV0cy5tYXAoKHR3ZWV0KSA9PiAoXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR3ZWV0Lmxpa2VkKSxcclxuICAgICAgICAgICAgPFR3ZWV0XHJcbiAgICAgICAgICAgICAga2V5PXt0d2VldC5faWR9XHJcbiAgICAgICAgICAgICAgdHdlZXRfaWQ9e3R3ZWV0Ll9pZH1cclxuICAgICAgICAgICAgICB0d2VldD17dHdlZXQuY29udGVudH1cclxuICAgICAgICAgICAgICBsaWtlcz17dHdlZXQubGlrZXN9XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWU9e3R3ZWV0LnVzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17dHdlZXQudXNlcj8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgZGF0ZT17dHdlZXQuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgIGRlbGV0ZWQ9e3R3ZWV0LmRlbGV0ZWR9XHJcbiAgICAgICAgICAgICAgbGlrZWQ9e3R3ZWV0Lmxpa2VkfVxyXG4gICAgICAgICAgICAgIGFsbFR3ZWV0cz17YWxsVHdlZXRzfVxyXG4gICAgICAgICAgICAgIHNldEFsbFR3ZWV0cz17c2V0QWxsVHdlZXRzfVxyXG4gICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3R5cGUgPT09ICdjcmVhdG9yJyB8fCB0eXBlID09PSAndXNlcicgfHwgdHlwZSA9PT0gJ3BybyBjcmVhdG9yJyB8fCB0eXBlID09PSAncHJvIHVzZXInIHx8IHR5cGUgPT09ICdwYXJ0bmVyJyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZENvbW1lbnR9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgYmkgYmktZW1vamktc21pbGUgJHtzdHlsZXMuZW1vaml9YH0+PC9pPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50X3RleHR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgdHdlZXQuLi5cIlxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBvbkNsaWNrPXtzZW5kfSBkaXNhYmxlZD17IXRleHQudHJpbSgpfT5cclxuICAgICAgICAgICAgUG9zdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzaWNUd2VldHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSGVhZGVyIiwiVHdlZXQiLCJTaWRlYmFyIiwiYXhpb3MiLCJNdXNpY1R3ZWV0cyIsInNldExvYSIsImxhYmVsIiwiYWxsVHdlZXRzIiwic2V0QWxsVHdlZXRzIiwidGV4dCIsInNldFRleHQiLCJ0eXBlIiwic2V0VHlwZSIsInVzZXIiLCJzZXRVc2VyIiwidGltZXJFeHBpcmVkIiwic2V0VGltZXJFeHBpcmVkIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0TG9hZGluZyIsImZldGNoVHdlZXQiLCJnZXRVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUVudGVyS2V5IiwiZXZlbnQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJ0cmltIiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3BvbnNlIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJzb3J0ZWRUd2VldHMiLCJkYXRhIiwidHdlZXRzIiwicmV2ZXJzZSIsInBvc3QiLCJjb250ZW50IiwidGhlbiIsImNhdGNoIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2lkZWJhciIsInR3ZWV0c0NvbnRhaW5lciIsInNwYWNlIiwidHdlZXQiLCJtYXAiLCJsaWtlZCIsInR3ZWV0X2lkIiwiX2lkIiwibGlrZXMiLCJ1c2VybmFtZSIsImF2YXRhciIsImltYWdlIiwiZGF0ZSIsImNyZWF0ZWRBdCIsImRlbGV0ZWQiLCJhZGRDb21tZW50IiwiaSIsImVtb2ppIiwiY29tbWVudF90ZXh0IiwidGV4dGFyZWEiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MusicTweets.js\n"));

/***/ })

});