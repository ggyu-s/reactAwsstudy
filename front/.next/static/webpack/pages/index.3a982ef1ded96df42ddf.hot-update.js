webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ggyu/Library/Mobile Documents/com~apple~CloudDocs/My/Front/reactnodestudy/front/components/CommentForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CommentForm(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\"),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      commentText = _useInput2[0],\n      onChangeCommentText = _useInput2[1];\n\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {}, [commentText]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onFinish: onSubmitComment,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n        value: commentText,\n        onChange: onChangeCommentText,\n        rows: 4\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        htmlType: \"submit\",\n        type: \"primary\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CommentForm, \"zY36UX01FvwcFQZaTMZwANtp89M=\", false, function () {\n  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwicG9zdCIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0EsV0FBVCxPQUErQjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDY0MsK0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUE7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxtQkFEUzs7QUFFN0IsTUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsQ0FBQ0gsV0FBRCxDQUFYLENBQW5DO0FBRUEsc0JBQ0UscUVBQUMseUNBQUQ7QUFBTSxZQUFRLEVBQUVFLGVBQWhCO0FBQUEsMkJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsOEJBQ0UscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0UsYUFBSyxFQUFFRixXQURUO0FBRUUsZ0JBQVEsRUFBRUMsbUJBRlo7QUFHRSxZQUFJLEVBQUU7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSxxRUFBQywyQ0FBRDtBQUFRLGdCQUFRLEVBQUMsUUFBakI7QUFBMEIsWUFBSSxFQUFDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBbEJRSixXO1VBQ29DRSx1RDs7O0tBRHBDRixXO0FBb0JUQSxXQUFXLENBQUNPLFNBQVosR0FBd0I7QUFDdEJOLE1BQUksRUFBRU8saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERCxDQUF4QjtBQUllViwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5mdW5jdGlvbiBDb21tZW50Rm9ybSh7IHBvc3QgfSkge1xuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHRdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbY29tbWVudFRleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fVxuICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cblxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})