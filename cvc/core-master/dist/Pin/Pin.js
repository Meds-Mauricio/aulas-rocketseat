"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _styles=require("./styles");var Pin=function Pin(_ref){var classes=_ref.classes,color=_ref.color,className=_ref.className,children=_ref.children;return/*#__PURE__*/_react["default"].createElement("span",{className:"".concat(classes.root," ").concat(classes[color]," ").concat(className)},children)};Pin.propTypes={classes:_propTypes["default"].object.isRequired,children:_propTypes["default"].oneOfType([_propTypes["default"].object,_propTypes["default"].string]),color:_propTypes["default"].string,className:_propTypes["default"].string};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Pin);exports["default"]=_default;
//# sourceMappingURL=Pin.js.map