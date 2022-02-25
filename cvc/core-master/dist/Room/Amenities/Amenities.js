"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Typography=_interopRequireDefault(require("../../Typography"));var _Amenities=_interopRequireDefault(require("../../Amenities"));var _styles=require("./styles");var Room=function Room(_ref){var classes=_ref.classes,amenities=_ref.amenities;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold",className:classes.amenitiesTitle},"Inclu\xEDdo no quarto"),/*#__PURE__*/_react["default"].createElement("div",{className:classes.amenities},/*#__PURE__*/_react["default"].createElement(_Amenities["default"],{amenities:amenities,amenitiesToShow:4}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:classes.amenitiesInfo},"+",amenities.length-4," comodidades")))};Room.propTypes={classes:_propTypes["default"].object.isRequired,amenities:_propTypes["default"].array.isRequired};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Room);exports["default"]=_default;
//# sourceMappingURL=Amenities.js.map