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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Related; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author */ \"./components/_child/author.js\");\n\n\n\n\nfunction Related() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl py-10\",\n                children: \"Related\"\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 14,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10\",\n                children: data.map(function(value, index) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Post, {\n                        data: value\n                    }, index, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 16,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n};\n_c = Related;\nfunction Post(param) {\n    var data1 = param.data;\n    var id = data1.id, title = data1.title, category = data1.category, img = data1.img, published = data1.published, author = data1.author;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image flex flex-col justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img || \"/\",\n                            className: \"rounded\",\n                            width: 300,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 32,\n                        columnNumber: 22\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-orange-600 hover:text-orange-800\",\n                                    children: category || \"No category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 26\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-gray-800 hover:text-gray-600\",\n                                    children: published || \"No date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 26\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: title || \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                                lineNumber: 40,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_author__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                        lineNumber: 42,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/megan/blog5/components/_child/related.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/megan/blog5/components/_child/related.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"Related\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19jaGlsZC9yZWxhdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ0Q7QUFDQztBQUtmLFNBQVNHLE9BQU8sR0FBRTs7SUFJN0IscUJBQ0ksOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLE9BQU87OzBCQUN2Qiw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDBCQUEwQjswQkFBQyxTQUFPOzs7OztvQkFBSzswQkFFckQsOERBQUNFLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxzQkFBc0I7MEJBRWhDRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBSztrQ0FDM0IsOERBQUNDLElBQUk7d0JBQWFKLElBQUksRUFBRUUsS0FBSzt1QkFBbEJDLEtBQUs7Ozs7NkJBQXNCO2lCQUN6QyxDQUFDOzs7OztvQkFFRzs7Ozs7O1lBQ0MsQ0FDYjtDQUNKO0FBakJ1QlIsS0FBQUEsT0FBTztBQW1CL0IsU0FBU1MsSUFBSSxDQUFDLEtBQU0sRUFBQztRQUFQLEtBQUssR0FBTCxLQUFNLENBQUxKLElBQUk7SUFDZixJQUFNSyxFQUFFLEdBQTZDTCxLQUFJLENBQW5ESyxFQUFFLEVBQUVDLEtBQUssR0FBc0NOLEtBQUksQ0FBL0NNLEtBQUssRUFBRUMsUUFBUSxHQUE0QlAsS0FBSSxDQUF4Q08sUUFBUSxFQUFFQyxHQUFHLEdBQXVCUixLQUFJLENBQTlCUSxHQUFHLEVBQUVDLFNBQVMsR0FBWVQsS0FBSSxDQUF6QlMsU0FBUyxFQUFFQyxNQUFNLEdBQUlWLEtBQUksQ0FBZFUsTUFBTTtJQUNqRCxxQkFDSSw4REFBQ1gsS0FBRztRQUFDRixTQUFTLEVBQUMsWUFBWTs7MEJBQ3ZCLDhEQUFDRSxLQUFHO2dCQUFDRixTQUFTLEVBQUMsbUNBQW1DOzBCQUMxRCw0RUFBQ0osa0RBQUk7b0JBQUNrQixJQUFJLEVBQUUsR0FBRzs4QkFBRSw0RUFBQ0MsR0FBQztrQ0FBQyw0RUFBQ3BCLGtEQUFLOzRCQUFDcUIsR0FBRyxFQUFFTCxHQUFHLElBQUcsR0FBRzs0QkFBRVgsU0FBUyxFQUFDLFNBQVM7NEJBQUNpQixLQUFLLEVBQUUsR0FBRzs0QkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O2dDQUFHOzs7Ozs0QkFBSTs7Ozs7d0JBQU87Ozs7O29CQUM5RjswQkFDTiw4REFBQ2hCLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxtQ0FBbUM7O2tDQUNqRCw4REFBQ0UsS0FBRzt3QkFBQ0YsU0FBUyxFQUFDLEtBQUs7OzBDQUNqQiw4REFBQ0osa0RBQUk7Z0NBQUNrQixJQUFJLEVBQUUsR0FBRzswQ0FBRSw0RUFBQ0MsR0FBQztvQ0FBQ2YsU0FBUyxFQUFDLHVDQUF1Qzs4Q0FBRVUsUUFBUSxJQUFHLGFBQWE7Ozs7O3dDQUFLOzs7OztvQ0FBTzswQ0FDM0csOERBQUNkLGtEQUFJO2dDQUFDa0IsSUFBSSxFQUFFLEdBQUc7MENBQUUsNEVBQUNDLEdBQUM7b0NBQUNmLFNBQVMsRUFBQyxtQ0FBbUM7OENBQUVZLFNBQVMsSUFBRyxTQUFTOzs7Ozt3Q0FBSzs7Ozs7b0NBQU87Ozs7Ozs0QkFDbEc7a0NBQ04sOERBQUNWLEtBQUc7d0JBQUNGLFNBQVMsRUFBQyxPQUFPO2tDQUNyQiw0RUFBQ0osa0RBQUk7NEJBQUNrQixJQUFJLEVBQUUsR0FBRztzQ0FBRSw0RUFBQ0MsR0FBQztnQ0FBQ2YsU0FBUyxFQUFDLGlFQUFpRTswQ0FBRVMsS0FBSyxJQUFHLEdBQUc7Ozs7O29DQUFLOzs7OztnQ0FBTzs7Ozs7NEJBQ2xIO2tDQUNKLDhEQUFDWiwrQ0FBTTs7Ozs0QkFBVTs7Ozs7O29CQUNYOzs7Ozs7WUFFQyxDQUVUO0NBQ0o7QUFyQlFVLE1BQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fY2hpbGQvcmVsYXRlZC5qcz8xMGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL2F1dGhvclwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxhdGVkKCl7XG5cbiAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTIwXCI+XG4gICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgcHktMTBcIj5SZWxhdGVkPC9oMT5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEwXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIDxQb3N0IGtleT17aW5kZXh9IGRhdGE9e3ZhbHVlfT48L1Bvc3Q+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUG9zdCh7ZGF0YX0pe1xuICAgIGNvbnN0e2lkLCB0aXRsZSwgY2F0ZWdvcnksIGltZywgcHVibGlzaGVkLCBhdXRob3J9ID0gZGF0YTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnRcIj5cbiAgICA8TGluayBocmVmPXtcIi9cIn0+PGE+PEltYWdlIHNyYz17aW1nIHx8XCIvXCJ9IGNsYXNzTmFtZT1cInJvdW5kZWRcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezI1MH0vPjwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRcIj5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxhIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS04MDBcIj57Y2F0ZWdvcnkgfHxcIk5vIGNhdGVnb3J5XCJ9PC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPntwdWJsaXNoZWQgfHxcIk5vIGRhdGVcIn08L2E+PC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxhIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPnt0aXRsZSB8fFwiL1wifTwvYT48L0xpbms+XG4gICAgIDwvZGl2PlxuICAgICAgIDxBdXRob3I+PC9BdXRob3I+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkF1dGhvciIsIlJlbGF0ZWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJkYXRhIiwibWFwIiwidmFsdWUiLCJpbmRleCIsIlBvc3QiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJpbWciLCJwdWJsaXNoZWQiLCJhdXRob3IiLCJocmVmIiwiYSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_child/related.js\n"));

/***/ })

});