"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./components/ui/progress.tsx":
/*!************************************!*\
  !*** ./components/ui/progress.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Progress: function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-progress */ \"(app-pages-browser)/./node_modules/@radix-ui/react-progress/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ Progress auto */ \n\n\n\nconst Progress = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = (param, ref)=>/*#__PURE__*/ {\n    let { className, value, ...props } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__.Root, {\n        ref: ref,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"relative h-4 w-full overflow-hidden rounded-full bg-secondary\", className),\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__.Indicator, {\n            className: \"h-full w-full flex-1 bg-primary transition-all\",\n            style: {\n                transform: \"translateX(-\".concat(100 - (value || 0), \"%)\")\n            }\n        }, void 0, false, {\n            fileName: \"E:\\\\FrameWork\\\\react\\\\nextjs\\\\project-ai-sass\\\\components\\\\ui\\\\progress.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\FrameWork\\\\react\\\\nextjs\\\\project-ai-sass\\\\components\\\\ui\\\\progress.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n});\n_c1 = Progress;\nProgress.displayName = _radix_ui_react_progress__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Progress$React.forwardRef\");\n$RefreshReg$(_c1, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvcHJvZ3Jlc3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFOEI7QUFDK0I7QUFFN0I7QUFNaEMsTUFBTUcseUJBQVdILDZDQUFnQixNQUcvQixRQUFpQ0s7UUFBaEMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsT0FBTztXQUMvQiw4REFBQ1AsMERBQXNCO1FBQ3JCSSxLQUFLQTtRQUNMQyxXQUFXSiw4Q0FBRUEsQ0FDWCxpRUFDQUk7UUFFRCxHQUFHRSxLQUFLO2tCQUVULDRFQUFDUCwrREFBMkI7WUFDMUJLLFdBQVU7WUFDVkssT0FBTztnQkFBRUMsV0FBVyxlQUFrQyxPQUFuQixNQUFPTCxDQUFBQSxTQUFTLElBQUc7WUFBSTs7Ozs7Ozs7Ozs7QUFFdEM7O0FBRTFCSixTQUFTVSxXQUFXLEdBQUdaLDBEQUFzQixDQUFDWSxXQUFXO0FBRXRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvcHJvZ3Jlc3MudHN4PzhhNzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFByb2dyZXNzUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3NcIlxuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5cbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBQcm9ncmVzc1ByaW1pdGl2ZS5Sb290PiB7XG4gICAgXG59XG5cbmNvbnN0IFByb2dyZXNzID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgUHJvZ3Jlc3NQcmltaXRpdmUuUm9vdD4sXG4gIC8vIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgUHJvZ3Jlc3NQcmltaXRpdmUuUm9vdD5cbj4oKHsgY2xhc3NOYW1lLCB2YWx1ZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxQcm9ncmVzc1ByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgaC00IHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeVwiLFxuICAgICAgY2xhc3NOYW1lXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8UHJvZ3Jlc3NQcmltaXRpdmUuSW5kaWNhdG9yXG4gICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXgtMSBiZy1wcmltYXJ5IHRyYW5zaXRpb24tYWxsXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7MTAwIC0gKHZhbHVlIHx8IDApfSUpYCB9fVxuICAgIC8+XG4gIDwvUHJvZ3Jlc3NQcmltaXRpdmUuUm9vdD5cbikpXG5Qcm9ncmVzcy5kaXNwbGF5TmFtZSA9IFByb2dyZXNzUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWVcblxuZXhwb3J0IHsgUHJvZ3Jlc3MgfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZ3Jlc3NQcmltaXRpdmUiLCJjbiIsIlByb2dyZXNzIiwiZm9yd2FyZFJlZiIsInJlZiIsImNsYXNzTmFtZSIsInZhbHVlIiwicHJvcHMiLCJSb290IiwiSW5kaWNhdG9yIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/progress.tsx\n"));

/***/ })

});