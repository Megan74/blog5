"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section1.js":
/*!********************************!*\
  !*** ./components/section1.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ section1; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _child_author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_child/author */ \"./components/_child/author.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/fetcher */ \"./lib/fetcher.js\");\n/* harmony import */ var _child_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_child/spinner */ \"./components/_child/spinner.js\");\n/* harmony import */ var _child_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_child/error */ \"./components/_child/error.js\");\n\n\n\n\n\n// Import Swiper React components\n\n\n// Import Swiper styles\n\n\n\n\nfunction section1() {\n    var _this = this;\n    var ref = (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"api/trending\"), data = ref.data, isLoading = ref.isLoading, isError = ref.isError;\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_child_spinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/megan/blog5/components/section1.js\",\n        lineNumber: 18,\n        columnNumber: 26\n    }, this);\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_child_error__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/megan/blog5/components/section1.js\",\n        lineNumber: 19,\n        columnNumber: 24\n    }, this);\n    swiper__WEBPACK_IMPORTED_MODULE_5__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay\n    ]);\n    var bg = {\n        background: \"url('/images/banner.png') no-repeat\",\n        backgroundPosition: \"right\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16\",\n        style: bg,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto md:px-20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-4xl pb-12 text-center\",\n                    children: \"Trending\"\n                }, void 0, false, {\n                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n                    slidesPerView: 1,\n                    children: [\n                        data.map(function(value, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {\n                                    data: value\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 50\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/Users/megan/blog5/components/section1.js\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, _this);\n                        }),\n                        \"...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/megan/blog5/components/section1.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/megan/blog5/components/section1.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\nfunction Slide(param) {\n    var data = param.data;\n    var id = data.id, title = data.title, category = data.category, img = data.img, published = data.published, description = data.description, author = data.author;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid md:grid-cols-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/posts/\".concat(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img || \"/\",\n                            width: 600,\n                            height: 600\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/section1.js\",\n                            lineNumber: 61,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/section1.js\",\n                        lineNumber: 61,\n                        columnNumber: 45\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/megan/blog5/components/section1.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"info flex justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cat\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/posts/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-orange-600 hover:text-orange-800\",\n                                    children: category || \"Unknown\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 49\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/section1.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/posts/\".concat(id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-gray-800 hover:text-gray-600\",\n                                    children: [\n                                        \"- \",\n                                        published || \"Unknown\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/megan/blog5/components/section1.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 49\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/section1.js\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/megan/blog5/components/section1.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/posts/\".concat(id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600\",\n                                children: title || \"Unknown\"\n                            }, void 0, false, {\n                                fileName: \"/Users/megan/blog5/components/section1.js\",\n                                lineNumber: 69,\n                                columnNumber: 49\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/megan/blog5/components/section1.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/section1.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 py-3\",\n                        children: description || \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/section1.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    author ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_child_author__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, author), void 0, false, {\n                        fileName: \"/Users/megan/blog5/components/section1.js\",\n                        lineNumber: 74,\n                        columnNumber: 28\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/megan/blog5/components/section1.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/megan/blog5/components/section1.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_c = Slide;\nvar _c;\n$RefreshReg$(_c, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsdUNBQXVDOzhDQUFFVyxRQUFRLElBQUksU0FBUzs7Ozs7d0NBQUs7Ozs7O29DQUFPOzBDQUNuSCw4REFBQzdCLGtEQUFJO2dDQUFDa0MsSUFBSSxFQUFFLFNBQVEsQ0FBSyxPQUFIUCxFQUFFLENBQUU7MENBQUUsNEVBQUNRLEdBQUM7b0NBQUNqQixTQUFTLEVBQUMsbUNBQW1DOzt3Q0FBQyxJQUFFO3dDQUFDYSxTQUFTLElBQUksU0FBUzs7Ozs7O3dDQUFLOzs7OztvQ0FBTzs7Ozs7OzRCQUNoSDtrQ0FDTiw4REFBQ1gsS0FBRzt3QkFBQ0YsU0FBUyxFQUFDLE9BQU87a0NBQ2xCLDRFQUFDbEIsa0RBQUk7NEJBQUNrQyxJQUFJLEVBQUUsU0FBUSxDQUFLLE9BQUhQLEVBQUUsQ0FBRTtzQ0FBRSw0RUFBQ1EsR0FBQztnQ0FBQ2pCLFNBQVMsRUFBQyxrRUFBa0U7MENBQUVVLEtBQUssSUFBSSxTQUFTOzs7OztvQ0FBSzs7Ozs7Z0NBQU87Ozs7OzRCQUN6STtrQ0FDTiw4REFBQ1csR0FBQzt3QkFBQ3JCLFNBQVMsRUFBQyxvQkFBb0I7a0NBQzVCYyxXQUFXLElBQUksYUFBYTs7Ozs7NEJBQzdCO29CQUNGQyxNQUFNLGlCQUFHLDhEQUFDaEMscURBQU0sc0ZBQUtnQyxNQUFNOzs7OzRCQUFXLGlCQUFHLDZJQUFLOzs7Ozs7b0JBQzlDOzs7Ozs7WUFDSixDQUNUO0NBQ0o7QUF4QlFQLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uMS5qcz83ZDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vX2NoaWxkL2F1dGhvclwiXG4vLyBJbXBvcnQgU3dpcGVyIFJlYWN0IGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcidcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL19jaGlsZC9zcGlubmVyXCJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9fY2hpbGQvZXJyb3JcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlY3Rpb24xKCkge1xuXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IGZldGNoZXIoJ2FwaS90cmVuZGluZycpXG4gICAgXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPFNwaW5uZXI+PC9TcGlubmVyPjtcbiAgICBpZihpc0Vycm9yKSByZXR1cm4gPEVycm9yPjwvRXJyb3I+XG5cbiAgICBTd2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKVxuXG4gICAgY29uc3QgYmcgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwidXJsKCcvaW1hZ2VzL2Jhbm5lci5wbmcnKSBuby1yZXBlYXRcIixcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcInJpZ2h0XCJcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiIHN0eWxlPXtiZ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWQ6cHgtMjBcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgcGItMTIgdGV4dC1jZW50ZXJcIj5UcmVuZGluZzwvaDE+XG5cbiAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICAgICAgICAgIC8vIGxvb3A9e3RydWV9XG4gICAgICAgICAgICAgICAgLy8gYXV0b3BsYXk9IHt7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRlbGF5OiAyMDAwXG4gICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+PFNsaWRlIGRhdGE9e3ZhbHVlfT48L1NsaWRlPjwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICA8L1N3aXBlcj5cblxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBTbGlkZSh7IGRhdGEgfSl7XG5cbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgY2F0ZWdvcnksIGltZywgcHVibGlzaGVkLCBkZXNjcmlwdGlvbiAsYXV0aG9yIH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke2lkfWB9PjxhPjxJbWFnZSBzcmM9e2ltZyB8fCBcIi9cIn0gd2lkdGg9ezYwMH0gaGVpZ2h0PXs2MDB9IC8+PC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTgwMFwiPntjYXRlZ29yeSB8fCBcIlVua25vd25cIn08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+LSB7cHVibGlzaGVkIHx8IFwiVW5rbm93blwifTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+PGEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPnt0aXRsZSB8fCBcIlVua25vd25cIn08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gfHwgXCJkZXNjcmlwdGlvblwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7IGF1dGhvciA/IDxBdXRob3Igey4uLmF1dGhvcn0+PC9BdXRob3I+IDogPD48Lz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJBdXRob3IiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlN3aXBlckNvcmUiLCJBdXRvcGxheSIsImZldGNoZXIiLCJTcGlubmVyIiwiRXJyb3IiLCJzZWN0aW9uMSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwidXNlIiwiYmciLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGl2IiwiaDEiLCJzbGlkZXNQZXJWaWV3IiwibWFwIiwidmFsdWUiLCJpbmRleCIsIlNsaWRlIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiaW1nIiwicHVibGlzaGVkIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJocmVmIiwiYSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section1.js\n"));

/***/ })

});