"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _reactSweetProgress=require("react-sweet-progress");var _Typography=_interopRequireDefault(require("../Typography"));var _Box=_interopRequireDefault(require("../Box"));var _styles=require("./styles");var _BrandContext=require("../BrandContext/BrandContext");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}// rate: número de 0 a 10
var Rate=function Rate(_ref){var classes=_ref.classes,rate=_ref.rate;// TODO rever implementação do contexto
var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var status="success";var label="";if(rate>8){label="Excelente!"}if(rate<=8){label="Muito Bom!"}if(rate<=6){status="active";label="Intermedi\xE1rio"}if(rate<=4){status="error";label="Ruim"}if(rate<=2){label="Muito Ruim"}return/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:classes.root},/*#__PURE__*/_react["default"].createElement(_reactSweetProgress.Progress,{type:"circle",percent:10*rate,status:status,width:"100%",strokeWidth:4,theme:{error:{symbol:" ",trailColor:"rgba(255, 51, 68, .4)",color:ctx.theme.error},"default":{symbol:" ",trailColor:"rgba(255, 51, 68, .4)",color:ctx.theme.error},active:{symbol:" ",trailColor:"rgba(248, 219, 28, .4)",color:ctx.theme.secondary},success:{symbol:" ",trailColor:"rgba(103, 196, 83, .4)",color:ctx.theme.success}}}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:"".concat(classes.rate," ").concat(classes[status])},rate),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular",className:classes.label},label))};Rate.propTypes={classes:_propTypes["default"].object.isRequired,rate:_propTypes["default"].number.isRequired};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Rate);exports["default"]=_default;
//# sourceMappingURL=Rate.js.map