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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tabela; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tabela.module.css */ \"./src/styles/tabela.module.css\");\n/* harmony import */ var _styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//dados virão do back-end\nfunction gerarHeaderTabela() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Teste\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Valor M\\xednimo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                children: \"Valor M\\xe1ximo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\nfunction Tabela(props) {\n    var renderizarDadosTabela = function renderizarDadosTabela() {\n        var _this = this;\n        var ref;\n        return (ref = props.dados) === null || ref === void 0 ? void 0 : ref.map(function(rows, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.tipoTeste\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMin\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: rows.valorMax\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, rows.tipoTeste, true, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().tabela),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().head),\n                children: gerarHeaderTabela()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: (_styles_tabela_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),\n                children: renderizarDadosTabela()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eduardo Pedrosa\\\\Downloads\\\\Coding Stuff\\\\random web\\\\Projeto\\\\frontend\\\\src\\\\components\\\\tabela.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n_c = Tabela;\nvar _c;\n$RefreshReg$(_c, \"Tabela\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YWJlbGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBcUQ7QUFFckQseUJBQXlCO0FBRXpCLFNBQVNDLGlCQUFpQixHQUFHO0lBQ3pCLHFCQUNJLDhEQUFDQyxJQUFFOzswQkFDQyw4REFBQ0MsSUFBRTswQkFBQyxPQUFLOzs7OztvQkFBSzswQkFDZCw4REFBQ0EsSUFBRTswQkFBQyxpQkFBWTs7Ozs7b0JBQUs7MEJBQ3JCLDhEQUFDQSxJQUFFOzBCQUFDLGlCQUFZOzs7OztvQkFBSzs7Ozs7O1lBQ3BCLENBQ1I7Q0FDSjtBQUVjLFNBQVNDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1FBRXpCQyxxQkFBcUIsR0FBOUIsU0FBU0EscUJBQXFCLEdBQUc7O1lBQ3RCRCxHQUFXO1FBQWxCLE9BQU9BLENBQUFBLEdBQVcsR0FBWEEsS0FBSyxDQUFDRSxLQUFLLGNBQVhGLEdBQVcsV0FBSyxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLEdBQVcsQ0FBRUcsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLO1lBQ2pDLHFCQUNJLDhEQUFDUixJQUFFOztrQ0FHQyw4REFBQ1MsSUFBRTtrQ0FBRUYsSUFBSSxDQUFDRyxTQUFTOzs7Ozs2QkFBTTtrQ0FDekIsOERBQUNELElBQUU7a0NBQUVGLElBQUksQ0FBQ0ksUUFBUTs7Ozs7NkJBQU07a0NBQ3hCLDhEQUFDRixJQUFFO2tDQUFFRixJQUFJLENBQUNLLFFBQVE7Ozs7OzZCQUFNOztlQUxuQkwsSUFBSSxDQUFDRyxTQUFTOzs7O3FCQU1sQixDQUNSO1NBQ0osQ0FBQztLQUNMO0lBRUQscUJBQ0ksOERBQUNHLE9BQUs7UUFBQ0MsU0FBUyxFQUFFaEIseUVBQWtCOzswQkFFaEMsOERBQUNrQixPQUFLO2dCQUFDRixTQUFTLEVBQUVoQix1RUFBZ0I7MEJBQzdCQyxpQkFBaUIsRUFBRTs7Ozs7b0JBQ2hCOzBCQUVSLDhEQUFDbUIsT0FBSztnQkFBQ0osU0FBUyxFQUFFaEIsdUVBQWdCOzBCQUM3Qk0scUJBQXFCLEVBQUU7Ozs7O29CQUNwQjs7Ozs7O1lBRUosQ0FDWDtDQUNKO0FBN0J1QkYsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YWJlbGEuanN4P2FhOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRhYmVsYVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvdGFiZWxhLm1vZHVsZS5jc3NcIlxyXG5cclxuLy9kYWRvcyB2aXLDo28gZG8gYmFjay1lbmRcclxuXHJcbmZ1bmN0aW9uIGdlcmFySGVhZGVyVGFiZWxhKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5UZXN0ZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5WYWxvciBNw61uaW1vPC90aD5cclxuICAgICAgICAgICAgPHRoPlZhbG9yIE3DoXhpbW88L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmVsYShwcm9wcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcml6YXJEYWRvc1RhYmVsYSgpIHtcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGFkb3M/Lm1hcCgocm93cywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cm93cy50aXBvVGVzdGV9XHJcbiAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17YCR7aSAlIDIgPT09IDAgPyBzdHlsZT17YmFja2dyb3VuZENvbG9yOlwicGlua1wifSA6IHN0eWxlPXtiYWNrZ3JvdW5kQ29sb3I6XCJncmVlblwifX1gfT5cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3Jvd3MudGlwb1Rlc3RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntyb3dzLnZhbG9yTWlufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntyb3dzLnZhbG9yTWF4fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmVsYVN0eWxlLnRhYmVsYX0+XHJcblxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPXt0YWJlbGFTdHlsZS5oZWFkfT5cclxuICAgICAgICAgICAgICAgIHtnZXJhckhlYWRlclRhYmVsYSgpfVxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT17dGFiZWxhU3R5bGUuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyaXphckRhZG9zVGFiZWxhKCl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidGFiZWxhU3R5bGUiLCJnZXJhckhlYWRlclRhYmVsYSIsInRyIiwidGgiLCJUYWJlbGEiLCJwcm9wcyIsInJlbmRlcml6YXJEYWRvc1RhYmVsYSIsImRhZG9zIiwibWFwIiwicm93cyIsImkiLCJ0ZCIsInRpcG9UZXN0ZSIsInZhbG9yTWluIiwidmFsb3JNYXgiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRhYmVsYSIsInRoZWFkIiwiaGVhZCIsInRib2R5IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tabela.jsx\n"));

/***/ })

});