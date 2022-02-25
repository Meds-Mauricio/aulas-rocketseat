"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactTextMask=_interopRequireDefault(require("react-text-mask"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}/* eslint-disable indent */ // STYLES
var TextField=function TextField(_ref){var classes=_ref.classes,label=_ref.label,value=_ref.value,id=_ref.id,type=_ref.type,autoComplete=_ref.autoComplete,labelClassName=_ref.labelClassName,inputClassName=_ref.inputClassName,rootClassName=_ref.rootClassName,size=_ref.size,icon=_ref.icon,disabled=_ref.disabled,transparent=_ref.transparent,noBorder=_ref.noBorder,error=_ref.error,errorMsg=_ref.errorMsg,onClick=_ref.onClick,onChange=_ref.onChange,onFocus=_ref.onFocus,onBlur=_ref.onBlur,onKeyUp=_ref.onKeyUp,mask=_ref.mask,inputName=_ref.inputName,currencyMask=_ref.currencyMask,placeholder=_ref.placeholder,isActive=_ref.isActive,placeholderBold=_ref.placeholderBold,labelOnBottom=_ref.labelOnBottom,required=_ref.required,readonly=_ref.readonly;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),active=_useState2[0],setActive=_useState2[1];var _useState3=(0,_react.useState)(value),_useState4=(0,_slicedToArray2["default"])(_useState3,2),internalValue=_useState4[0],setValue=_useState4[1];var _useState5=(0,_react.useState)(undefined),_useState6=(0,_slicedToArray2["default"])(_useState5,2),inputClasses=_useState6[0],setInputClasses=_useState6[1];(0,_react.useEffect)(function(){var _inputClasses="\n        ".concat(inputClassName||"","\n        ").concat(size==="large"?classes.large:classes.small,"\n        ").concat(isActive&&!disabled||value&&!disabled||internalValue&&!disabled?classes.inputActive:"","\n        ").concat(disabled?classes.disabled:"","\n        ").concat(readonly?classes.readonly:"","\n        ").concat(noBorder&&!error?classes.noBorder:"","\n        ").concat(transparent?classes.transparent:"","\n        ").concat(icon?classes.inputIcon:"","\n        ").concat(error?classes.error:"","\n    ");setActive(isActive);setInputClasses(_inputClasses)},[isActive]);var rootClasses="\n    ".concat(classes.root,"\n    ").concat(rootClassName||"","\n    ").concat(errorMsg&&error?classes.hasError:"","\n  ");var lbClasses="\n        ".concat(labelClassName||"","\n        ").concat(size==="large"?classes.labelLarge:classes.label,"\n        ").concat(icon?size==="large"?classes.labelLargeIcon:classes.labelIcon:"","\n        ").concat(active&&!disabled||value&&!disabled||internalValue&&!disabled?!value&&labelOnBottom?classes.lblSemiActive:classes.lblActive:"","\n        ").concat(transparent?classes.lbtransparent:"","\n        ").concat(disabled?classes.disabledLabel:"","\n        ").concat(placeholderBold&&classes.lbBold,"\n        ");var iconClasses="\n    ".concat(classes.icon,"\n    ").concat(transparent?classes.lbtransparent:"","\n    ").concat(disabled?classes.disabledLabel:"","\n    ").concat(placeholderBold&&classes.lbBold,"\n  ");var handleChange=function handleChange(e){if(onChange)onChange(e);setValue(e.target.value)};var handleClick=function handleClick(e){if(onClick)onClick(e);if(!disabled)setActive(true)};var handleFocus=function handleFocus(e){if(onFocus)onFocus(e);if(!disabled)setActive(true)};var handleBlur=function handleBlur(e){if(onBlur)onBlur(e);setActive(false)};var handleKeyUp=function handleKeyUp(e){if(onKeyUp)onKeyUp(e)};var labelToShow=label&&/*#__PURE__*/_react["default"].createElement("label",{className:lbClasses}," ",label);var checkAutoComplete=function checkAutoComplete(){return autoComplete?{autoComplete:autoComplete}:{}};return/*#__PURE__*/_react["default"].createElement("div",{className:rootClasses,onClick:handleClick},icon&&/*#__PURE__*/_react["default"].createElement("span",{className:iconClasses},icon),disabled?value?"":labelToShow:labelToShow,mask?/*#__PURE__*/_react["default"].createElement(_reactTextMask["default"],(0,_extends2["default"])({mask:currencyMask,placeholder:placeholder,className:inputClasses,onChange:handleChange,value:value,type:type,id:id,onClick:handleClick,onFocus:handleFocus,onBlur:handleBlur,onKeyUp:handleKeyUp,disabled:disabled&&!error},checkAutoComplete())):/*#__PURE__*/_react["default"].createElement("input",(0,_extends2["default"])({id:id,placeholder:placeholder,onClick:handleClick,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,onKeyUp:handleKeyUp,disabled:disabled&&!error,value:value,name:inputName,className:inputClasses,type:type,required:required},checkAutoComplete())),error&&errorMsg&&/*#__PURE__*/_react["default"].createElement("span",{className:classes.errorText},errorMsg))};TextField.propTypes={classes:_propTypes["default"].object.isRequired,label:_propTypes["default"].string,value:_propTypes["default"].string,id:_propTypes["default"].string,type:_propTypes["default"].string,autoComplete:_propTypes["default"].string,labelClassName:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),inputClassName:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),rootClassName:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),size:_propTypes["default"].string,icon:_propTypes["default"].object,disabled:_propTypes["default"].bool,labelOnBottom:_propTypes["default"].bool,transparent:_propTypes["default"].bool,noBorder:_propTypes["default"].bool,error:_propTypes["default"].bool,errorMsg:_propTypes["default"].string,onClick:_propTypes["default"].func,onChange:_propTypes["default"].func,onFocus:_propTypes["default"].func,onBlur:_propTypes["default"].func,placeholderBold:_propTypes["default"].bool,inputName:_propTypes["default"].string,required:_propTypes["default"].bool,onKeyUp:_propTypes["default"].func};TextField.defaultProps={type:"text"};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(TextField);exports["default"]=_default;
//# sourceMappingURL=TextField.js.map