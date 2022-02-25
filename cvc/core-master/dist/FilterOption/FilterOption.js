"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _Checkbox=_interopRequireDefault(require("../Checkbox"));var _Filter=_interopRequireDefault(require("../Filter"));var FilterOption=function FilterOption(_ref){var filter=_ref.filter,items=_ref.items,sufix=_ref.sufix,onChange=_ref.onChange,isMobile=_ref.isMobile,className=_ref.className,noModal=_ref.noModal,label=_ref.label,open=_ref.open,_onOpen=_ref.onOpen,_onClose=_ref.onClose,_onApply=_ref.onApply,_onReset=_ref.onReset,onActive=_ref.onActive,height=_ref.height;var getSelectedValues=function getSelectedValues(){return items.filter(function(el){return el.checked}).map(function(el){if(el.label!=null&&(0,_typeof2["default"])(el.label)==="object")return el.value.toString();return el.label.toString()})};var change=function change(option,index,isChecked){Object.assign(option,{checked:isChecked});Object.assign(items[index],{checked:isChecked});if(onChange)onChange(option,items);if(onActive)onActive(getSelectedValues().length>0)};var isActive=function isActive(){return!!getSelectedValues().length&&!noModal};var disabled=getSelectedValues().length<=0;var cleanFilterOnClose=function cleanFilterOnClose(){if(!filter.applied){var newItems=items.filter(function(el){return el.checked}).map(function(el){el.checked=false;return el});if(onChange)onChange(items,newItems);if(onActive)onActive(false)}};return/*#__PURE__*/_react["default"].createElement(_Filter["default"],{sufix:sufix,type:"list",isMobile:isMobile,className:className,noModal:noModal,label:label,height:height,items:items.map(function(option,index){return/*#__PURE__*/_react["default"].createElement(_Checkbox["default"],{key:option,disabled:option.disabled,checked:option.checked,onChange:function onChange(isChecked){return change(option,index,isChecked)},label:option.label})}),onOpen:function onOpen(){return _onOpen()},isOpen:open,onApply:function onApply(){return _onApply()},onReset:function onReset(){return _onReset()},onClose:function onClose(){cleanFilterOnClose();_onClose()},isActive:isActive()&&!open,value:getSelectedValues().length?getSelectedValues():[""],disabled:disabled})};FilterOption.defaultProps={open:false,className:undefined,isMobile:false,sufix:"",items:[],noModal:false,onOpen:function onOpen(){},onApply:function onApply(){},onReset:function onReset(){},onChange:function onChange(){}};FilterOption.propTypes={open:_propTypes["default"].bool,className:_propTypes["default"].oneOfType([_propTypes["default"].object,_propTypes["default"].string]),items:_propTypes["default"].arrayOf(_propTypes["default"].object),isMobile:_propTypes["default"].bool,sufix:_propTypes["default"].string,noModal:_propTypes["default"].bool,label:_propTypes["default"].string.isRequired,onOpen:_propTypes["default"].func,onApply:_propTypes["default"].func,onReset:_propTypes["default"].func,onChange:_propTypes["default"].func};var _default=FilterOption;exports["default"]=_default;
//# sourceMappingURL=FilterOption.js.map