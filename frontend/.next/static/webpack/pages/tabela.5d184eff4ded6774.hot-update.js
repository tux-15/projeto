"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tabela",{

/***/ "./src/pages/tabela.jsx":
/*!******************************!*\
  !*** ./src/pages/tabela.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.module.css */ \"./src/styles/main.module.css\");\n/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/tabela.module.css */ \"./src/styles/tabela.module.css\");\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.jsx\");\n\n\n\n\nfunction gerarDados(tipoTeste, valorMin, valorMax) {\n    return {\n        tipoTeste: tipoTeste,\n        valorMin: valorMin,\n        valorMax: valorMax\n    };\n}\nfunction Tabela(dados) {\n    var gearHeader = function gearHeader() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Teste\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Valor M\\xednimo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    children: \"Valor M\\xe1ximo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this);\n    };\n    var renderizarDados = function renderizarDados() {\n        var _this = this;\n        var dados = [\n            gerarDados(\"Teste de torque\", 1, 5.3),\n            gerarDados(\"Teste de vis\\xe3o\", 0, 1),\n            gerarDados(\"Teste de temperatura\", 50, 52),\n            gerarDados(\"Teste de corrente\", 4, 20), \n        ];\n        // console.log(dados);\n        return dados === null || dados === void 0 ? void 0 : dados.map(function(rows, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.tipoTeste\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMin\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMax\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, rows.tipoTeste, true, {\n                fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    subtitulo: \"Tabelas\",\n                    voltar: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabela),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3___default().head),\n                            children: gearHeader()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),\n                            children: renderizarDados()\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\efilho2\\\\Downloads\\\\coding stuff\\\\sys-tabelas\\\\src\\\\pages\\\\tabela.jsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n};\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFiZWxhLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ1E7QUFDWjtBQUV6QyxTQUFTRyxVQUFVLENBQUNDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDL0MsT0FBTztRQUNIRixTQUFTLEVBQVRBLFNBQVM7UUFDVEMsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFFBQVEsRUFBUkEsUUFBUTtLQUNYO0NBQ0o7QUFFYyxTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUV6QkMsVUFBVSxHQUFuQixTQUFTQSxVQUFVLEdBQUc7UUFDbEIscUJBQ0ksOERBQUNDLElBQUU7OzhCQUNDLDhEQUFDQyxJQUFFOzhCQUFDLE9BQUs7Ozs7O3dCQUFLOzhCQUNkLDhEQUFDQSxJQUFFOzhCQUFDLGlCQUFZOzs7Ozt3QkFBSzs4QkFDckIsOERBQUNBLElBQUU7OEJBQUMsaUJBQVk7Ozs7O3dCQUFLOzs7Ozs7Z0JBQ3BCLENBQ1I7S0FDSjtRQUVRQyxlQUFlLEdBQXhCLFNBQVNBLGVBQWUsR0FBRzs7UUFFdkIsSUFBTUosS0FBSyxHQUFHO1lBQ1ZMLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3JDQSxVQUFVLENBQUMsbUJBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQ0EsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUNBLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3pDO1FBRUQsc0JBQXNCO1FBQ3RCLE9BQU9LLEtBQUssYUFBTEEsS0FBSyxXQUFLLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsS0FBSyxDQUFFSyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7WUFDM0IscUJBQ0ksOERBQUNMLElBQUU7O2tDQUNDLDhEQUFDTSxJQUFFO2tDQUFFRixJQUFJLENBQUNWLFNBQVM7Ozs7OzZCQUFNO2tDQUN6Qiw4REFBQ1ksSUFBRTtrQ0FBRUYsSUFBSSxDQUFDVCxRQUFROzs7Ozs2QkFBTTtrQ0FDeEIsOERBQUNXLElBQUU7a0NBQUVGLElBQUksQ0FBQ1IsUUFBUTs7Ozs7NkJBQU07O2VBSG5CUSxJQUFJLENBQUNWLFNBQVM7Ozs7cUJBSWxCLENBQ1I7U0FDSixDQUFDO0tBQ0w7SUFFRCxxQkFDSSw4REFBQ2EsS0FBRztRQUFDQyxTQUFTLEVBQUVsQixxRUFBVTs7MEJBQ3RCLDhEQUFDaUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIsdUVBQVk7MEJBQ3hCLDRFQUFDRSwwREFBTTtvQkFBQ21CLFNBQVMsRUFBQyxTQUFTO29CQUFDQyxNQUFNLEVBQUUsSUFBSTs7Ozs7d0JBQUk7Ozs7O29CQUMxQzswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFFbEIscUVBQVU7MEJBQ3RCLDRFQUFDd0IsT0FBSztvQkFBQ04sU0FBUyxFQUFFakIseUVBQWtCOztzQ0FDaEMsOERBQUN5QixPQUFLOzRCQUFDUixTQUFTLEVBQUVqQix1RUFBZ0I7c0NBQzdCUSxVQUFVLEVBQUU7Ozs7O2dDQUNUO3NDQUNSLDhEQUFDbUIsT0FBSzs0QkFBQ1YsU0FBUyxFQUFFakIsdUVBQWdCO3NDQUM3QlcsZUFBZSxFQUFFOzs7OztnQ0FDZDs7Ozs7O3dCQUNKOzs7OztvQkFDTjs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0FBbER1QkwsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGFiZWxhLmpzeD80MWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL21haW4ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB0YWJlbGFTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3RhYmVsYS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxyXG5cclxuZnVuY3Rpb24gZ2VyYXJEYWRvcyh0aXBvVGVzdGUsIHZhbG9yTWluLCB2YWxvck1heCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXBvVGVzdGUsXHJcbiAgICAgICAgdmFsb3JNaW4sXHJcbiAgICAgICAgdmFsb3JNYXhcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmVsYShkYWRvcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlYXJIZWFkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlRlc3RlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5WYWxvciBNw61uaW1vPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5WYWxvciBNw6F4aW1vPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyaXphckRhZG9zKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhZG9zID0gW1xyXG4gICAgICAgICAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSB0b3JxdWUnLCAxLCA1LjMpLFxyXG4gICAgICAgICAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSB2aXPDo28nLCAwLCAxKSxcclxuICAgICAgICAgICAgZ2VyYXJEYWRvcygnVGVzdGUgZGUgdGVtcGVyYXR1cmEnLCA1MCwgNTIpLFxyXG4gICAgICAgICAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSBjb3JyZW50ZScsIDQsIDIwKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhZG9zKTtcclxuICAgICAgICByZXR1cm4gZGFkb3M/Lm1hcCgocm93cywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cm93cy50aXBvVGVzdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cm93cy50aXBvVGVzdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvd3MudmFsb3JNaW59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvd3MudmFsb3JNYXh9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgc3VidGl0dWxvPVwiVGFiZWxhc1wiIHZvbHRhcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmVsYVN0eWxlLnRhYmVsYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT17dGFiZWxhU3R5bGUuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZWFySGVhZGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPXt0YWJlbGFTdHlsZS5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcml6YXJEYWRvcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZSIsInRhYmVsYVN0eWxlIiwiSGVhZGVyIiwiZ2VyYXJEYWRvcyIsInRpcG9UZXN0ZSIsInZhbG9yTWluIiwidmFsb3JNYXgiLCJUYWJlbGEiLCJkYWRvcyIsImdlYXJIZWFkZXIiLCJ0ciIsInRoIiwicmVuZGVyaXphckRhZG9zIiwibWFwIiwicm93cyIsImkiLCJ0ZCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoZWFkZXIiLCJzdWJ0aXR1bG8iLCJ2b2x0YXIiLCJib2R5IiwidGFibGUiLCJ0YWJlbGEiLCJ0aGVhZCIsImhlYWQiLCJ0Ym9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tabela.jsx\n"));

/***/ })

});