"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _DropRight=_interopRequireDefault(require("@cvccorp-components/icons/dist/DropRight"));var _Typography=_interopRequireDefault(require("../Typography"));var _Box=_interopRequireDefault(require("../Box"));var _styles=require("./styles");var ContentCard=function ContentCard(_ref){var classes=_ref.classes,className=_ref.className,icon=_ref.icon,title=_ref.title,text=_ref.text,link=_ref.link,href=_ref.href,target=_ref.target,titleHeight=_ref.titleHeight,textHeight=_ref.textHeight;return/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:"".concat(classes.root," ").concat(className)},icon,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5",style:{height:titleHeight},className:classes.title},title),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular",style:{height:textHeight},className:classes.text},text),/*#__PURE__*/_react["default"].createElement("a",{href:href,target:target},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:classes.link},link," ",/*#__PURE__*/_react["default"].createElement(_DropRight["default"],null))))};ContentCard.propTypes={classes:_propTypes["default"].object.isRequired,className:_propTypes["default"].string,icon:_propTypes["default"].object.isRequired,title:_propTypes["default"].string.isRequired,text:_propTypes["default"].string.isRequired,link:_propTypes["default"].string.isRequired,href:_propTypes["default"].string.isRequired,target:_propTypes["default"].string,textHeight:_propTypes["default"].string};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(ContentCard);exports["default"]=_default;
//# sourceMappingURL=ContentCard.js.map