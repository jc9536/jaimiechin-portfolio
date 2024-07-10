"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dataScienceWorks/coralPredict",{

/***/ "./components/YearsSlider.js":
/*!***********************************!*\
  !*** ./components/YearsSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar YearSlider = function() {\n    _s();\n    var _s1 = $RefreshSig$();\n    var years = [\n        1980,\n        1983,\n        1987,\n        1988,\n        1990,\n        1991,\n        1992,\n        1993,\n        1994,\n        1995,\n        1996,\n        1997,\n        1998,\n        1999,\n        2000,\n        2001,\n        2002,\n        2003,\n        2004,\n        2005,\n        2006,\n        2007,\n        2008,\n        2009,\n        2010,\n        2011,\n        2012,\n        2013,\n        2014,\n        2015,\n        2016,\n        2017,\n        2018,\n        2019,\n        2020\n    ];\n    var displayedYears = [\n        1980,\n        1988,\n        1995,\n        2001,\n        2007,\n        2013,\n        2019\n    ];\n    var tickYears = years.filter(function(year) {\n        return !displayedYears.includes(year);\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(years[0]), selectedYear = ref[0], setSelectedYear = ref[1];\n    var colorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)().colorMode;\n    var sliderColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"#86C0E2\", \"#FFB9A3\");\n    var handleSliderChange = function(value) {\n        var closestYear = years.reduce(function(prev, curr) {\n            return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;\n        });\n        setSelectedYear(closestYear);\n    };\n    var getMarkPosition = function(year) {\n        var minYear = years[0];\n        var maxYear = years[years.length - 1];\n        return (year - minYear) / (maxYear - minYear) * 100;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        width: \"100%\",\n        padding: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                mt: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    borderRadius: \"2xl\" // Increased border radius for more rounded corners\n                    ,\n                    overflow: \"hidden\",\n                    border: \"2px\",\n                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.200\", \"gray.700\"),\n                    boxShadow: \"lg\",\n                    width: \"100%\" // Adjust width as needed\n                    ,\n                    maxW: \"100%\",\n                    mb: 8,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                        ratio: 32 / 11,\n                        width: \"100%\",\n                        maxH: \"400px\",\n                        height: \"100%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            display: \"flex\",\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                                    ratio: 16 / 11,\n                                    width: \"50%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                        as: \"img\",\n                                        src: \"/images/coralPredict/ActualCategorical/\".concat(selectedYear, \".jpg\"),\n                                        alt: \"Actual Categorical \".concat(selectedYear),\n                                        objectFit: \"cover\",\n                                        style: {\n                                            width: \"100%\",\n                                            height: \"100%\",\n                                            borderRadius: \"inherit\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                                    ratio: 16 / 11,\n                                    width: \"50%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                        as: \"img\",\n                                        src: \"/images/coralPredict/PredictedCategorical/\".concat(selectedYear, \".jpg\"),\n                                        alt: \"Predicted Categorical \".concat(selectedYear),\n                                        objectFit: \"cover\",\n                                        style: {\n                                            width: \"100%\",\n                                            height: \"100%\",\n                                            borderRadius: \"inherit\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                defaultValue: years[0],\n                min: 1980,\n                max: 2020,\n                step: 1,\n                onChange: handleSliderChange,\n                value: selectedYear,\n                children: [\n                    displayedYears.map(function(year) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderMark, {\n                            value: year,\n                            mt: \"2\",\n                            ml: \"-2.5\",\n                            fontSize: \"sm\",\n                            left: \"\".concat(getMarkPosition(year), \"%\"),\n                            children: year\n                        }, year, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this);\n                    }),\n                    tickYears.map(_s1(function(year) {\n                        _s1();\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            position: \"absolute\",\n                            left: \"\".concat(getMarkPosition(year), \"%\"),\n                            height: \"10px\",\n                            borderLeft: \"1px solid\",\n                            borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.700\", \"gray.200\"),\n                            top: \"20px\"\n                        }, year, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, _this);\n                    }, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n                        return [\n                            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n                        ];\n                    })),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderTrack, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderFilledTrack, {\n                            bg: sliderColor\n                        }, void 0, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                        hasArrow: true,\n                        label: selectedYear,\n                        bg: \"teal.500\",\n                        color: \"white\",\n                        placement: \"top\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderThumb, {\n                            bg: sliderColor\n                        }, void 0, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(YearSlider, \"fU70Ic1FdtrUrTLA3EImIP6Wmn8=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = YearSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YearSlider);\nvar _c;\n$RefreshReg$(_c, \"YearSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lDQU9YLENBQ0w7b0JBQUQsQ0FBQzs7NEJBSG9CUCwrREFBaUI7O3VCQUdwQztrQ0FDRiw4REFBQ04seURBQVc7a0NBQ1IsNEVBQUNDLCtEQUFpQjs0QkFBQzhELEVBQUUsRUFBRTdDLFdBQVc7Ozs7O2lDQUFJOzs7Ozs2QkFDNUI7a0NBQ2QsOERBQUNYLHFEQUFPO3dCQUFDeUQsUUFBUTt3QkFBQ0MsS0FBSyxFQUFFbEQsWUFBWTt3QkFBRWdELEVBQUUsRUFBQyxVQUFVO3dCQUFDRyxLQUFLLEVBQUMsT0FBTzt3QkFBQ0MsU0FBUyxFQUFDLEtBQUs7a0NBQzlFLDRFQUFDakUseURBQVc7NEJBQUM2RCxFQUFFLEVBQUU3QyxXQUFXOzs7OztpQ0FBSTs7Ozs7NkJBQzFCOzs7Ozs7cUJBQ0w7Ozs7OzthQUNQLENBQ1I7QUFDTixDQUFDO0dBakdLVixVQUFVOztRQUtVSCwwREFBWTtRQUNkQywrREFBaUI7UUFvQlJBLCtEQUFpQjs7O0FBMUI1Q0UsS0FBQUEsVUFBVTtBQW1HaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1llYXJzU2xpZGVyLmpzPzc5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFNsaWRlciwgU2xpZGVyVHJhY2ssIFNsaWRlckZpbGxlZFRyYWNrLCBTbGlkZXJUaHVtYiwgU2xpZGVyTWFyaywgQXNwZWN0UmF0aW8sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUsIFRvb2x0aXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuY29uc3QgWWVhclNsaWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB5ZWFycyA9IFsxOTgwLCAxOTgzLCAxOTg3LCAxOTg4LCAxOTkwLCAxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4LCAxOTk5LCAyMDAwLCAyMDAxLCAyMDAyLCAyMDAzLCAyMDA0LCAyMDA1LCAyMDA2LCAyMDA3LCAyMDA4LCAyMDA5LCAyMDEwLCAyMDExLCAyMDEyLCAyMDEzLCAyMDE0LCAyMDE1LCAyMDE2LCAyMDE3LCAyMDE4LCAyMDE5LCAyMDIwXTtcbiAgICBjb25zdCBkaXNwbGF5ZWRZZWFycyA9IFsxOTgwLCAxOTg4LCAxOTk1LCAyMDAxLCAyMDA3LCAyMDEzLCAyMDE5XTtcbiAgICBjb25zdCB0aWNrWWVhcnMgPSB5ZWFycy5maWx0ZXIoeWVhciA9PiAhZGlzcGxheWVkWWVhcnMuaW5jbHVkZXMoeWVhcikpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSh5ZWFyc1swXSk7XG4gICAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICAgIGNvbnN0IHNsaWRlckNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJyM4NkMwRTInLCAnI0ZGQjlBMycpO1xuXG4gICAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3Nlc3RZZWFyID0geWVhcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBNYXRoLmFicyhjdXJyIC0gdmFsdWUpIDwgTWF0aC5hYnMocHJldiAtIHZhbHVlKSA/IGN1cnIgOiBwcmV2KTtcbiAgICAgICAgc2V0U2VsZWN0ZWRZZWFyKGNsb3Nlc3RZZWFyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0TWFya1Bvc2l0aW9uID0gKHllYXIpID0+IHtcbiAgICAgICAgY29uc3QgbWluWWVhciA9IHllYXJzWzBdO1xuICAgICAgICBjb25zdCBtYXhZZWFyID0geWVhcnNbeWVhcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiAoKHllYXIgLSBtaW5ZZWFyKSAvIChtYXhZZWFyIC0gbWluWWVhcikpICogMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIHBhZGRpbmc9ezR9PlxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezR9PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMnhsXCIgLy8gSW5jcmVhc2VkIGJvcmRlciByYWRpdXMgZm9yIG1vcmUgcm91bmRlZCBjb3JuZXJzXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjIwMCcsICdncmF5LjcwMCcpfVxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIC8vIEFkanVzdCB3aWR0aCBhcyBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgbWF4Vz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBtYj17OH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MzIgLyAxMX0gd2lkdGg9XCIxMDAlXCIgbWF4SD1cIjQwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MTYgLyAxMX0gd2lkdGg9XCI1MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9jb3JhbFByZWRpY3QvQWN0dWFsQ2F0ZWdvcmljYWwvJHtzZWxlY3RlZFllYXJ9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BBY3R1YWwgQ2F0ZWdvcmljYWwgJHtzZWxlY3RlZFllYXJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MTYgLyAxMX0gd2lkdGg9XCI1MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9jb3JhbFByZWRpY3QvUHJlZGljdGVkQ2F0ZWdvcmljYWwvJHtzZWxlY3RlZFllYXJ9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BQcmVkaWN0ZWQgQ2F0ZWdvcmljYWwgJHtzZWxlY3RlZFllYXJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3llYXJzWzBdfVxuICAgICAgICAgICAgICAgIG1pbj17MTk4MH1cbiAgICAgICAgICAgICAgICBtYXg9ezIwMjB9XG4gICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXllZFllYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyTWFyayBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfSBtdD1cIjJcIiBtbD1cIi0yLjVcIiBmb250U2l6ZT1cInNtXCIgbGVmdD17YCR7Z2V0TWFya1Bvc2l0aW9uKHllYXIpfSVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlck1hcms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge3RpY2tZZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt5ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXtgJHtnZXRNYXJrUG9zaXRpb24oeWVhcil9JWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ9XCIxcHggc29saWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjcwMCcsICdncmF5LjIwMCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPFNsaWRlclRyYWNrPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2sgYmc9e3NsaWRlckNvbG9yfSAvPlxuICAgICAgICAgICAgICAgIDwvU2xpZGVyVHJhY2s+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9e3NlbGVjdGVkWWVhcn0gYmc9XCJ0ZWFsLjUwMFwiIGNvbG9yPVwid2hpdGVcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iIGJnPXtzbGlkZXJDb2xvcn0gLz5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJTbGlkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJTbGlkZXIiLCJTbGlkZXJUcmFjayIsIlNsaWRlckZpbGxlZFRyYWNrIiwiU2xpZGVyVGh1bWIiLCJTbGlkZXJNYXJrIiwiQXNwZWN0UmF0aW8iLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIlRvb2x0aXAiLCJZZWFyU2xpZGVyIiwieWVhcnMiLCJkaXNwbGF5ZWRZZWFycyIsInRpY2tZZWFycyIsImZpbHRlciIsInllYXIiLCJpbmNsdWRlcyIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsImNvbG9yTW9kZSIsInNsaWRlckNvbG9yIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwidmFsdWUiLCJjbG9zZXN0WWVhciIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiTWF0aCIsImFicyIsImdldE1hcmtQb3NpdGlvbiIsIm1pblllYXIiLCJtYXhZZWFyIiwibGVuZ3RoIiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibXQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm94U2hhZG93IiwibWF4VyIsIm1iIiwicmF0aW8iLCJtYXhIIiwiaGVpZ2h0IiwiYXMiLCJzcmMiLCJhbHQiLCJvYmplY3RGaXQiLCJzdHlsZSIsImRlZmF1bHRWYWx1ZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNoYW5nZSIsIm1hcCIsIm1sIiwiZm9udFNpemUiLCJsZWZ0IiwicG9zaXRpb24iLCJib3JkZXJMZWZ0IiwidG9wIiwiYmciLCJoYXNBcnJvdyIsImxhYmVsIiwiY29sb3IiLCJwbGFjZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YearsSlider.js\n"));

/***/ })

});