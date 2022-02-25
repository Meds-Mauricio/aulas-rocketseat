"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _core=require("@cvccorp-components/core");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var _FilterOption=function _FilterOption(prop){var filters=prop.filters,filter=prop.filter,index=prop.index,onApply=prop.onApply,className=prop.className,height=prop.height;var _useState=(0,_react.useState)(filter),_useState2=(0,_slicedToArray2["default"])(_useState,2),item=_useState2[0],setItem=_useState2[1];var _onOpen=function _onOpen(open){var _item=_objectSpread({},item);_item.open=open;setItem(_item)};var _onClose=function _onClose(){var _item=_objectSpread({},item);Object.assign(_item,{open:false});setItem(_item);filters[index]=_item;onApply(filters)};var _onChange=function _onChange(options){var _item=_objectSpread({},item);_item.options=(0,_toConsumableArray2["default"])(options);setItem(_item)};var _onReset=function _onReset(){var _item=_objectSpread({},filter);Object.assign(_item,{open:item.open});_item.options.map(function(opt){return Object.assign(opt,{checked:false})});setItem(_item);filters[index]=_item;onApply(filters)};var _onApply=function _onApply(){var _item=_objectSpread({},item);Object.assign(_item,{open:false});setItem(_item);filters[index]=_item;onApply(filters)};return/*#__PURE__*/_react["default"].createElement(_core.FilterOption,{isMobile:false,noModal:false,sufix:item.sufix,open:item.open,items:item.options,label:item.label,onReset:function onReset(){return _onReset()},onApply:function onApply(){return _onApply()},onOpen:function onOpen(){return _onOpen(true)},onClose:function onClose(){return _onClose()},onChange:function onChange(itemChange,options){return _onChange(options)},className:className,height:height})};var _default=_FilterOption;exports["default"]=_default;
//# sourceMappingURL=_FilterOption.js.map