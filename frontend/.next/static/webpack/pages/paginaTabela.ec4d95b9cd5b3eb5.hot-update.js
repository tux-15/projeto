"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/paginaTabela",{

/***/ "./src/components/tabela.jsx":
/*!***********************************!*\
  !*** ./src/components/tabela.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tabela.module.css */ \"./src/styles/tabela.module.css\");\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction gerarDados(tipoTeste, valorMin, valorMax) {\n    return {\n        tipoTeste: tipoTeste,\n        valorMin: valorMin,\n        valorMax: valorMax\n    };\n}\n;\n//dados virão do back-end, chamar gerarDados() pra cada elemento\nvar dados = [\n    gerarDados(\"Teste de torque\", 1, 5.3),\n    gerarDados(\"Teste de vis\\xe3o\", 0, 1),\n    gerarDados(\"Teste de temperatura\", 50, 52),\n    gerarDados(\"Teste de corrente\", 4, 20), \n];\nfunction gerarHeaderTabela() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Teste\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Valor M\\xednimo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Valor M\\xe1ximo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\nfunction Tabela(props) {\n    var renderizarDadosTabela = function renderizarDadosTabela() {\n        var _this = this;\n        var ref;\n        return (ref = props.dados) === null || ref === void 0 ? void 0 : ref.map(function(rows, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.tipoTeste\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMin\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMax\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, rows.tipoTeste, true, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().tabela),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().head),\n                children: gerarHeaderTabela()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n                children: renderizarDadosTabela()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n};\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YWJlbGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFFckQsU0FBU0MsVUFBVSxDQUFDQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQy9DLE9BQU87UUFDSEYsU0FBUyxFQUFUQSxTQUFTO1FBQ1RDLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxRQUFRLEVBQVJBLFFBQVE7S0FDWDtDQUNKOztBQUVELGdFQUFnRTtBQUVoRSxJQUFNQyxLQUFLLEdBQUc7SUFDVkosVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDckNBLFVBQVUsQ0FBQyxtQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDQSxVQUFVLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUMxQ0EsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Q0FDekM7QUFFRCxTQUFTSyxpQkFBaUIsR0FBRztJQUN6QixxQkFDSSw4REFBQ0MsSUFBRTs7MEJBQ0MsOERBQUNDLElBQUU7MEJBQUMsT0FBSzs7Ozs7b0JBQUs7MEJBQ2QsOERBQUNBLElBQUU7MEJBQUMsaUJBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0EsSUFBRTswQkFBQyxpQkFBWTs7Ozs7b0JBQUs7Ozs7OztZQUNwQixDQUNSO0NBQ0o7QUFFYyxTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUV6QkMscUJBQXFCLEdBQTlCLFNBQVNBLHFCQUFxQixHQUFHOztZQUN0QkQsR0FBVztRQUFsQixPQUFPQSxDQUFBQSxHQUFXLEdBQVhBLEtBQUssQ0FBQ0wsS0FBSyxjQUFYSyxHQUFXLFdBQUssR0FBaEJBLEtBQUFBLENBQWdCLEdBQWhCQSxHQUFXLENBQUVFLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSztZQUNqQyxxQkFDSSw4REFBQ1AsSUFBRTs7a0NBQ0MsOERBQUNRLElBQUU7a0NBQUVGLElBQUksQ0FBQ1gsU0FBUzs7Ozs7NkJBQU07a0NBQ3pCLDhEQUFDYSxJQUFFO2tDQUFFRixJQUFJLENBQUNWLFFBQVE7Ozs7OzZCQUFNO2tDQUN4Qiw4REFBQ1ksSUFBRTtrQ0FBRUYsSUFBSSxDQUFDVCxRQUFROzs7Ozs2QkFBTTs7ZUFIbkJTLElBQUksQ0FBQ1gsU0FBUzs7OztxQkFJbEIsQ0FDUjtTQUNKLENBQUM7S0FDTDtJQUVELHFCQUNJLDhEQUFDYyxPQUFLO1FBQUNDLFNBQVMsRUFBRWpCLHlFQUFrQjs7MEJBRWhDLDhEQUFDbUIsT0FBSztnQkFBQ0YsU0FBUyxFQUFFakIsdUVBQWdCOzBCQUM3Qk0saUJBQWlCLEVBQUU7Ozs7O29CQUNoQjswQkFFUiw4REFBQ2UsT0FBSztnQkFBQ0osU0FBUyxFQUFFakIsdUVBQWdCOzBCQUM3QlcscUJBQXFCLEVBQUU7Ozs7O29CQUNwQjs7Ozs7O1lBRUosQ0FDWDtDQUNKO0FBM0J1QkYsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YWJlbGEuanN4P2FhOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRhYmVsYVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvdGFiZWxhLm1vZHVsZS5jc3NcIlxyXG5cclxuZnVuY3Rpb24gZ2VyYXJEYWRvcyh0aXBvVGVzdGUsIHZhbG9yTWluLCB2YWxvck1heCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXBvVGVzdGUsXHJcbiAgICAgICAgdmFsb3JNaW4sXHJcbiAgICAgICAgdmFsb3JNYXgsXHJcbiAgICB9XHJcbn07XHJcblxyXG4vL2RhZG9zIHZpcsOjbyBkbyBiYWNrLWVuZCwgY2hhbWFyIGdlcmFyRGFkb3MoKSBwcmEgY2FkYSBlbGVtZW50b1xyXG5cclxuY29uc3QgZGFkb3MgPSBbXHJcbiAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSB0b3JxdWUnLCAxLCA1LjMpLFxyXG4gICAgZ2VyYXJEYWRvcygnVGVzdGUgZGUgdmlzw6NvJywgMCwgMSksXHJcbiAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSB0ZW1wZXJhdHVyYScsIDUwLCA1MiksXHJcbiAgICBnZXJhckRhZG9zKCdUZXN0ZSBkZSBjb3JyZW50ZScsIDQsIDIwKSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdlcmFySGVhZGVyVGFiZWxhKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5UZXN0ZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5WYWxvciBNw61uaW1vPC90aD5cclxuICAgICAgICAgICAgPHRoPlZhbG9yIE3DoXhpbW88L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmVsYShwcm9wcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcml6YXJEYWRvc1RhYmVsYSgpIHtcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGFkb3M/Lm1hcCgocm93cywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cm93cy50aXBvVGVzdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cm93cy50aXBvVGVzdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvd3MudmFsb3JNaW59PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvd3MudmFsb3JNYXh9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGFiZWxhU3R5bGUudGFiZWxhfT5cclxuXHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9e3RhYmVsYVN0eWxlLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAge2dlcmFySGVhZGVyVGFiZWxhKCl9XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPXt0YWJlbGFTdHlsZS5ib2R5fT5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJpemFyRGFkb3NUYWJlbGEoKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ0YWJlbGFTdHlsZSIsImdlcmFyRGFkb3MiLCJ0aXBvVGVzdGUiLCJ2YWxvck1pbiIsInZhbG9yTWF4IiwiZGFkb3MiLCJnZXJhckhlYWRlclRhYmVsYSIsInRyIiwidGgiLCJUYWJlbGEiLCJwcm9wcyIsInJlbmRlcml6YXJEYWRvc1RhYmVsYSIsIm1hcCIsInJvd3MiLCJpIiwidGQiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRhYmVsYSIsInRoZWFkIiwiaGVhZCIsInRib2R5IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tabela.jsx\n"));

/***/ })

});