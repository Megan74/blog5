"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[postId]",{

/***/ "./components/_child/related.js":
/*!**************************************!*\
  !*** ./components/_child/related.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Related; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author */ \"./components/_child/author.js\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/fetcher */ \"./lib/fetcher.js\");\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ \"./components/_child/spinner.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error */ \"./components/_child/error.js\");\n\n\n\n\n\n\n\n\nfunction Related() {\n    var _this = this;\n    var ref = (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"api/posts\"), data = ref.data, isLoading = ref.isLoading, isError = ref.isError;\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 15,\n        columnNumber: 26\n    }, this);\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 16,\n        columnNumber: 24\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                classNa: true,\n                me: \"font-bold text-3xl py-10\",\n                children: \"Related\"\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10\",\n                children: data.map(function(value, index) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Post, {\n                        data: value\n                    }, index, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 23,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n};\n_c = Related;\nfunction Post(param) {\n    var data = param.data;\n    var id = data.id, title = data.title, category = data.category, img = data.img, published = data.published, author = data.author;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image flex flex-col justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/posts/\".concat(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img || \"\",\n                            className: \"rounded\",\n                            width: 300,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                            lineNumber: 41,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 41,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/posts/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-orange-600 hover:text-orange-800\",\n                                    children: category || \"No category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/posts/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-gray-800 hover:text-gray-600\",\n                                    children: published || \"No date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 44,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/posts/\".concat(id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: title || \"no title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 49,\n                                columnNumber: 34\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                            lineNumber: 49,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    author ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_author__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, author), void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"Related\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0RUFBQ1Ysa0RBQUk7NEJBQUN5QixJQUFJLEVBQUUsU0FBUSxDQUFLLE9BQUhOLEVBQUUsQ0FBRTtzQ0FBRSw0RUFBQ08sR0FBQztnQ0FBQ2hCLFNBQVMsRUFBQyxxREFBcUQ7MENBQUVVLEtBQUssSUFBRyxVQUFVOzs7OztvQ0FBSzs7Ozs7Z0NBQU87Ozs7OzRCQUN4SDtvQkFDSkksTUFBTSxpQkFBRyw4REFBQ3ZCLCtDQUFNLHFGQUFLdUIsTUFBTTs7Ozs0QkFBVyxpQkFBRyw2SUFBSzs7Ozs7O29CQUN4Qzs7Ozs7O1lBRUMsQ0FFVDtDQUNKO0FBdkJRTixNQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvX2NoaWxkL3JlbGF0ZWQuanM/MTBlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9hdXRob3JcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi8uLi9saWIvZmV0Y2hlclwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vc3Bpbm5lclwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL2Vycm9yXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxhdGVkKCl7XG5cbiAgICBjb25zdCB7ZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yfSA9IGZldGNoZXIoJ2FwaS9wb3N0cycpXG5cbiAgIFxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxTcGlubmVyPjwvU3Bpbm5lcj47XG4gICAgaWYoaXNFcnJvcikgcmV0dXJuIDxFcnJvcj48L0Vycm9yPlxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC0yMFwiPlxuICAgICAgICAgICA8aDEgY2xhc3NOYVxuICAgICAgICAgICBtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCBweS0xMFwiPlJlbGF0ZWQ8L2gxPlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTBcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgPFBvc3Qga2V5PXtpbmRleH0gZGF0YT17dmFsdWV9PjwvUG9zdD5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBQb3N0KHtkYXRhfSl7XG5cbiAgICBjb25zdHtpZCwgdGl0bGUsIGNhdGVnb3J5LCBpbWcsIHB1Ymxpc2hlZCwgYXV0aG9yfSA9IGRhdGE7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnRcIj5cbiAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGE+PEltYWdlIHNyYz17aW1nIHx8XCJcIn0gY2xhc3NOYW1lPVwicm91bmRlZFwiIHdpZHRoPXszMDB9IGhlaWdodD17MjUwfS8+PC9hPjwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdFwiPlxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTgwMFwiPntjYXRlZ29yeSB8fFwiTm8gY2F0ZWdvcnlcIn08L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+e3B1Ymxpc2hlZCB8fFwiTm8gZGF0ZVwifTwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+e3RpdGxlIHx8XCJubyB0aXRsZVwifTwvYT48L0xpbms+XG4gICAgIDwvZGl2PlxuICAgICB7IGF1dGhvciA/IDxBdXRob3Igey4uLmF1dGhvcn0+PC9BdXRob3I+IDogPD48Lz59XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkF1dGhvciIsImZldGNoZXIiLCJTcGlubmVyIiwiRXJyb3IiLCJSZWxhdGVkIiwiZGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJjbGFzc05hIiwibWUiLCJkaXYiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiUG9zdCIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsImltZyIsInB1Ymxpc2hlZCIsImF1dGhvciIsImhyZWYiLCJhIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_child/related.js\n"));

/***/ })

});