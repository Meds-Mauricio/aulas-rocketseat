"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _clsx=_interopRequireDefault(require("clsx"));var _propTypes=_interopRequireDefault(require("prop-types"));var _styles=require("./styles");var ScrollLoader=function ScrollLoader(_ref){var classes=_ref.classes,className=_ref.className,_ref$color=_ref.color,color=_ref$color===void 0?"secondary":_ref$color;return/*#__PURE__*/_react["default"].createElement("div",{className:(0,_clsx["default"])(classes.root,className)},/*#__PURE__*/_react["default"].createElement("div",{className:classes.div,color:color}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.div,color:color}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.div,color:color}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.div,color:color}))};ScrollLoader.defaultProps={className:""};ScrollLoader.propTypes={classes:_propTypes["default"].object.isRequired,className:_propTypes["default"].string};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(ScrollLoader);exports["default"]=_default;
//# sourceMappingURL=ScrollLoader.js.map