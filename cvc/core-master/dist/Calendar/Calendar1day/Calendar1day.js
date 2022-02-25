"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _DayPickerSingleDateController=_interopRequireDefault(require("react-dates/lib/components/DayPickerSingleDateController"));var _styles=require("@material-ui/core/styles");var _isSameDay=_interopRequireDefault(require("react-dates/lib/utils/isSameDay"));var _moment=_interopRequireDefault(require("moment"));var _styles2=require("../styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var Calendar=function Calendar(_ref){var _onDateChange=_ref.onDateChange,isMobile=_ref.isMobile,selectedDate=_ref.selectedDate,classes=_ref.classes,_isOutsideRange=_ref.isOutsideRange;var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2["default"])(_useState,2),date=_useState2[0],setDate=_useState2[1];var _useState3=(0,_react.useState)("startDate"),_useState4=(0,_slicedToArray2["default"])(_useState3,2),focusedInput=_useState4[0],setFocusedInput=_useState4[1];return/*#__PURE__*/_react["default"].createElement("div",{className:classes.root},/*#__PURE__*/_react["default"].createElement(_DayPickerSingleDateController["default"],{date:date,onDateChange:function onDateChange(date){_onDateChange(date);setDate(date)},focused:!!focusedInput,onFocusChange:function onFocusChange(_ref2){var focusedInput=_ref2.focusedInput;return setFocusedInput(focusedInput)},numberOfMonths:isMobile?12:2,isDayHighlighted:function isDayHighlighted(day1){return selectedDate&&selectedDate!==undefined&&!!selectedDate.length&&selectedDate.some(function(day2){return(0,_isSameDay["default"])(day1,day2)})},orientation:isMobile?"verticalScrollable":"horizontal",isOutsideRange:function isOutsideRange(day){return day.isBefore((0,_moment["default"])("2020-06-01"))||_isOutsideRange&&_isOutsideRange(day)}}))};Calendar.propTypes={onDateChange:_propTypes["default"].func,isMobile:_propTypes["default"].bool,selectedDate:_propTypes["default"].arrayOf(_propTypes["default"].object),isOutsideRange:_propTypes["default"].func};var _default=(0,_styles.withStyles)(_styles2.styles,{withTheme:true})(Calendar);exports["default"]=_default;
//# sourceMappingURL=Calendar1day.js.map