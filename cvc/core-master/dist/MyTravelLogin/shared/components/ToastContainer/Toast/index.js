"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _react=_interopRequireWildcard(require("react"));var _Toast=require("../../../../contexts/Toast");var _styles=_interopRequireDefault(require("./styles"));var _CloseButtonIcon=_interopRequireDefault(require("../../icons/CloseButtonIcon"));var _Snackbar=_interopRequireDefault(require("@material-ui/core/Snackbar"));var _Slide=_interopRequireDefault(require("@material-ui/core/Slide"));var _withWidth=_interopRequireWildcard(require("@material-ui/core/withWidth"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var TransitionLeft=function TransitionLeft(props){return/*#__PURE__*/_react["default"].createElement(_Slide["default"],(0,_extends2["default"])({},props,{direction:"left"}))};var Toast=function Toast(_ref){var message=_ref.message,key=_ref.key,width=_ref.width;var _useToast=(0,_Toast.useToast)(),removeToast=_useToast.removeToast;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var isMobile=(0,_withWidth.isWidthDown)("sm",width);var _useState3=(0,_react.useState)(undefined),_useState4=(0,_slicedToArray2["default"])(_useState3,2),transition=_useState4[0],setTransition=_useState4[1];(0,_react.useEffect)(function(){if(message){setTransition(function(){return TransitionLeft});setOpen(true);var timer=setTimeout(function(){removeToast(message.id);setOpen(false)},6000);return function(){clearTimeout(timer)}}},[removeToast,message.id]);var classes=(0,_styles["default"])({type:message.type||"success",isMobile:isMobile});return/*#__PURE__*/_react["default"].createElement(_Snackbar["default"],{key:key,open:open,TransitionComponent:transition,autoHideDuration:6000},/*#__PURE__*/_react["default"].createElement("div",{className:classes.container},/*#__PURE__*/_react["default"].createElement("div",{className:classes.toastWrapper},/*#__PURE__*/_react["default"].createElement("strong",null,message.title),message.description&&/*#__PURE__*/_react["default"].createElement("p",{className:classes.description}," ",message.description)),/*#__PURE__*/_react["default"].createElement("button",{className:classes.closeButton,onClick:function onClick(){return removeToast(message.id)},type:"button"},/*#__PURE__*/_react["default"].createElement(_CloseButtonIcon["default"],null))))};var _default=(0,_withWidth["default"])()(/*#__PURE__*/(0,_react.memo)(Toast));exports["default"]=_default;
//# sourceMappingURL=index.js.map