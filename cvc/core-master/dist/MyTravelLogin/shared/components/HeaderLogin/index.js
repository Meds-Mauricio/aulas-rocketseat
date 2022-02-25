"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _renderSteps=require("../../../contexts/renderSteps");var _BackButton=_interopRequireDefault(require("../BackButton"));var _CloseButton=_interopRequireDefault(require("../CloseButton"));var _styles=_interopRequireDefault(require("./styles"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var HeaderLogin=function HeaderLogin(_ref){var previousStep=_ref.previousStep,onCloseClick=_ref.onCloseClick,isModal=_ref.isModal;var classes=(0,_styles["default"])({});var _useRenderSteps=(0,_renderSteps.useRenderSteps)(),currentStep=_useRenderSteps.currentStep,renderNewStep=_useRenderSteps.renderNewStep;var closeModal=(0,_react.useCallback)(function(){if(onCloseClick){onCloseClick()}},[onCloseClick]);if(currentStep!=="MainScreen"){return/*#__PURE__*/_react["default"].createElement("div",{className:classes.headerLoginWrapper},/*#__PURE__*/_react["default"].createElement("div",{className:classes.actionButtons},!!previousStep&&currentStep!=="AlmostThere"&&/*#__PURE__*/_react["default"].createElement("button",{onClick:function onClick(){return renderNewStep(previousStep)}},/*#__PURE__*/_react["default"].createElement(_BackButton["default"],null)),/*#__PURE__*/_react["default"].createElement("button",{style:{marginLeft:"auto"},onClick:closeModal},/*#__PURE__*/_react["default"].createElement(_CloseButton["default"],null))))}return isModal?/*#__PURE__*/_react["default"].createElement("div",{className:classes.headerLoginWrapper},/*#__PURE__*/_react["default"].createElement("div",{className:classes.actionButtons},/*#__PURE__*/_react["default"].createElement("button",{style:{marginLeft:"auto"},onClick:closeModal},/*#__PURE__*/_react["default"].createElement(_CloseButton["default"],null)))):null};var _default=HeaderLogin;exports["default"]=_default;
//# sourceMappingURL=index.js.map