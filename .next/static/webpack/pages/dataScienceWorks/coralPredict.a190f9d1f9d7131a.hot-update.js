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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar YearSlider = function() {\n    _s();\n    var years = [\n        1980,\n        1983,\n        1987,\n        1988,\n        1990,\n        1991,\n        1992,\n        1993,\n        1994,\n        1995,\n        1996,\n        1997,\n        1998,\n        1999,\n        2000,\n        2001,\n        2002,\n        2003,\n        2004,\n        2005,\n        2006,\n        2007,\n        2008,\n        2009,\n        2010,\n        2011,\n        2012,\n        2013,\n        2014,\n        2015,\n        2016,\n        2017,\n        2018,\n        2019,\n        2020\n    ];\n    var displayedYears = [\n        1980,\n        1988,\n        1995,\n        2001,\n        2007,\n        2013,\n        2019\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(years[0]), selectedYear = ref[0], setSelectedYear = ref[1];\n    var handleSliderChange = function(value) {\n        var closestYear = years.reduce(function(prev, curr) {\n            return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;\n        });\n        setSelectedYear(closestYear);\n    };\n    var getMarkPosition = function(year) {\n        var minYear = years[0];\n        var maxYear = years[years.length - 1];\n        return (year - minYear) / (maxYear - minYear) * 100;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        width: \"100%\",\n        padding: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                mt: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    borderRadius: \"2xl\" // Increased border radius for more rounded corners\n                    ,\n                    overflow: \"hidden\",\n                    border: \"2px\",\n                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.200\", \"gray.700\"),\n                    boxShadow: \"lg\",\n                    width: \"100%\" // Adjust width as needed\n                    ,\n                    maxW: \"100%\",\n                    mb: 8,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                        ratio: 32 / 11,\n                        width: \"100%\",\n                        maxH: \"400px\",\n                        height: \"100%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            display: \"flex\",\n                            width: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                                    ratio: 16 / 11,\n                                    width: \"50%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                        as: \"img\",\n                                        src: \"/images/coralPredict/ActualCategorical/\".concat(selectedYear, \".jpg\"),\n                                        alt: \"Actual Categorical \".concat(selectedYear),\n                                        objectFit: \"cover\",\n                                        style: {\n                                            width: \"100%\",\n                                            height: \"100%\",\n                                            borderRadius: \"inherit\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {\n                                    ratio: 16 / 11,\n                                    width: \"50%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                        as: \"img\",\n                                        src: \"/images/coralPredict/PredictedCategorical/\".concat(selectedYear, \".jpg\"),\n                                        alt: \"Predicted Categorical \".concat(selectedYear),\n                                        objectFit: \"cover\",\n                                        style: {\n                                            width: \"100%\",\n                                            height: \"100%\",\n                                            borderRadius: \"inherit\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                defaultValue: years[0],\n                min: 1980,\n                max: 2020,\n                step: 1,\n                onChange: handleSliderChange,\n                value: selectedYear,\n                children: [\n                    displayedYears.map(function(year) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderMark, {\n                            value: year,\n                            mt: \"2\",\n                            ml: \"-2.5\",\n                            fontSize: \"sm\",\n                            left: \"\".concat(getMarkPosition(year), \"%\"),\n                            children: year\n                        }, year, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderTrack, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderFilledTrack, {}, void 0, false, {\n                            fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SliderThumb, {}, void 0, false, {\n                        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaimiechin/Desktop/jaimiechin-portfolio/components/YearsSlider.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this);\n};\n_s(YearSlider, \"EcQ4Y/4Jw0vQIWYoMdk934vH/2U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = YearSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YearSlider);\nvar _c;\n$RefreshReg$(_c, \"YearSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RDLEdBQUcsRUFBRSxJQUFJO2dCQUNUQyxJQUFJLEVBQUUsQ0FBQztnQkFDUEMsUUFBUSxFQUFFckMsa0JBQWtCO2dCQUM1QkMsS0FBSyxFQUFFSCxZQUFZOztvQkFFbEJELGNBQWMsQ0FBQ3lDLEdBQUcsQ0FBQyxTQUFDN0IsSUFBSTs2Q0FDckIsOERBQUNqQix3REFBVTs0QkFBWVMsS0FBSyxFQUFFUSxJQUFJOzRCQUFFUSxFQUFFLEVBQUMsR0FBRzs0QkFBQ3NCLEVBQUUsRUFBQyxNQUFNOzRCQUFDQyxRQUFRLEVBQUMsSUFBSTs0QkFBQ0MsSUFBSSxFQUFFLEVBQUMsQ0FBd0IsTUFBQyxDQUF2QmpDLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLEVBQUMsR0FBQyxDQUFDO3NDQUMvRkEsSUFBSTsyQkFEUUEsSUFBSTs7OztpQ0FFUjtxQkFDaEIsQ0FBQztrQ0FDRiw4REFBQ3BCLHlEQUFXO2tDQUNSLDRFQUFDQywrREFBaUI7Ozs7aUNBQUc7Ozs7OzZCQUNYO2tDQUNkLDhEQUFDQyx5REFBVzs7Ozs2QkFBRzs7Ozs7O3FCQUNWOzs7Ozs7YUFDUCxDQUNSO0FBQ04sQ0FBQztHQWpGS0ksVUFBVTs7UUF1QmlCRCwrREFBaUI7OztBQXZCNUNDLEtBQUFBLFVBQVU7QUFtRmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ZZWFyc1NsaWRlci5qcz83OTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBTbGlkZXIsIFNsaWRlclRyYWNrLCBTbGlkZXJGaWxsZWRUcmFjaywgU2xpZGVyVGh1bWIsIFNsaWRlck1hcmssIEFzcGVjdFJhdGlvLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCBZZWFyU2xpZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHllYXJzID0gWzE5ODAsIDE5ODMsIDE5ODcsIDE5ODgsIDE5OTAsIDE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OTgsIDE5OTksIDIwMDAsIDIwMDEsIDIwMDIsIDIwMDMsIDIwMDQsIDIwMDUsIDIwMDYsIDIwMDcsIDIwMDgsIDIwMDksIDIwMTAsIDIwMTEsIDIwMTIsIDIwMTMsIDIwMTQsIDIwMTUsIDIwMTYsIDIwMTcsIDIwMTgsIDIwMTksIDIwMjBdO1xuICAgIGNvbnN0IGRpc3BsYXllZFllYXJzID0gWzE5ODAsIDE5ODgsIDE5OTUsIDIwMDEsIDIwMDcsIDIwMTMsIDIwMTldO1xuICAgIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSh5ZWFyc1swXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2VzdFllYXIgPSB5ZWFycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IE1hdGguYWJzKGN1cnIgLSB2YWx1ZSkgPCBNYXRoLmFicyhwcmV2IC0gdmFsdWUpID8gY3VyciA6IHByZXYpO1xuICAgICAgICBzZXRTZWxlY3RlZFllYXIoY2xvc2VzdFllYXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRNYXJrUG9zaXRpb24gPSAoeWVhcikgPT4ge1xuICAgICAgICBjb25zdCBtaW5ZZWFyID0geWVhcnNbMF07XG4gICAgICAgIGNvbnN0IG1heFllYXIgPSB5ZWFyc1t5ZWFycy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuICgoeWVhciAtIG1pblllYXIpIC8gKG1heFllYXIgLSBtaW5ZZWFyKSkgKiAxMDA7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgcGFkZGluZz17NH0+XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17NH0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyeGxcIiAvLyBJbmNyZWFzZWQgYm9yZGVyIHJhZGl1cyBmb3IgbW9yZSByb3VuZGVkIGNvcm5lcnNcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIycHhcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuNzAwJyl9XG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgLy8gQWRqdXN0IHdpZHRoIGFzIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBtYXhXPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIG1iPXs4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXszMiAvIDExfSB3aWR0aD1cIjEwMCVcIiBtYXhIPVwiNDAwcHhcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxNiAvIDExfSB3aWR0aD1cIjUwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2NvcmFsUHJlZGljdC9BY3R1YWxDYXRlZ29yaWNhbC8ke3NlbGVjdGVkWWVhcn0uanBnYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YEFjdHVhbCBDYXRlZ29yaWNhbCAke3NlbGVjdGVkWWVhcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxNiAvIDExfSB3aWR0aD1cIjUwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2NvcmFsUHJlZGljdC9QcmVkaWN0ZWRDYXRlZ29yaWNhbC8ke3NlbGVjdGVkWWVhcn0uanBnYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YFByZWRpY3RlZCBDYXRlZ29yaWNhbCAke3NlbGVjdGVkWWVhcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17eWVhcnNbMF19XG4gICAgICAgICAgICAgICAgbWluPXsxOTgwfVxuICAgICAgICAgICAgICAgIG1heD17MjAyMH1cbiAgICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTbGlkZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkWWVhcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheWVkWWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJNYXJrIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9IG10PVwiMlwiIG1sPVwiLTIuNVwiIGZvbnRTaXplPVwic21cIiBsZWZ0PXtgJHtnZXRNYXJrUG9zaXRpb24oeWVhcil9JWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyTWFyaz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJGaWxsZWRUcmFjayAvPlxuICAgICAgICAgICAgICAgIDwvU2xpZGVyVHJhY2s+XG4gICAgICAgICAgICAgICAgPFNsaWRlclRodW1iIC8+XG4gICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJTbGlkZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm94IiwiU2xpZGVyIiwiU2xpZGVyVHJhY2siLCJTbGlkZXJGaWxsZWRUcmFjayIsIlNsaWRlclRodW1iIiwiU2xpZGVyTWFyayIsIkFzcGVjdFJhdGlvIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJZZWFyU2xpZGVyIiwieWVhcnMiLCJkaXNwbGF5ZWRZZWFycyIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsImhhbmRsZVNsaWRlckNoYW5nZSIsInZhbHVlIiwiY2xvc2VzdFllYXIiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsIk1hdGgiLCJhYnMiLCJnZXRNYXJrUG9zaXRpb24iLCJ5ZWFyIiwibWluWWVhciIsIm1heFllYXIiLCJsZW5ndGgiLCJ3aWR0aCIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtdCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3hTaGFkb3ciLCJtYXhXIiwibWIiLCJyYXRpbyIsIm1heEgiLCJoZWlnaHQiLCJhcyIsInNyYyIsImFsdCIsIm9iamVjdEZpdCIsInN0eWxlIiwiZGVmYXVsdFZhbHVlIiwibWluIiwibWF4Iiwic3RlcCIsIm9uQ2hhbmdlIiwibWFwIiwibWwiLCJmb250U2l6ZSIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YearsSlider.js\n"));

/***/ })

});