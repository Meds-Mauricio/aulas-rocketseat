"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _BrandContext=require("../BrandContext");var _ThemeProviderCustom=_interopRequireDefault(require("../ThemeProviderCustom"));var _react=_interopRequireWildcard(require("react"));var _Select=_interopRequireDefault(require("../Select"));var _brand=_interopRequireDefault(require("./brand"));var _BrandsUtils=require("./BrandsUtils");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}// import { useFetchAllBrands } from "../BrandContext/BrandContext";
var fetchbrand=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new Promise(function(resolve){setTimeout(function(){resolve(_brand["default"])},300)}));case 1:case"end":return _context.stop();}}},_callee)}));return function fetchbrand(){return _ref.apply(this,arguments)}}();function useFetchAllBrands(endpoint){var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2["default"])(_useState,2),brands=_useState2[0],setBrands=_useState2[1];(0,_react.useEffect)(function(){(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:fetchbrand().then(function(d){return setBrands(d)});case 1:case"end":return _context2.stop();}}},_callee2)}))()},[]);return brands}var BrandContainer=function BrandContainer(_ref3){var children=_ref3.children;// to change brand, change default usestate value to "sub", "cvccorp" or "cvc"
var _useState3=(0,_react.useState)("sub"),_useState4=(0,_slicedToArray2["default"])(_useState3,2),companyName=_useState4[0],setCompanyName=_useState4[1];var brands=(0,_react.useContext)(AllBrands);var brandOptions=function brandOptions(){return brands.map(function(brand,index){return/*#__PURE__*/_react["default"].createElement("option",{key:index,value:brand.theme.themeName},brand.name)})};if(brands==null){return/*#__PURE__*/_react["default"].createElement("div",null,"Carregando...")}// if (onBrandLoad) {
//   setTimeout(() => onBrandLoad(), 2000);
// }
return/*#__PURE__*/_react["default"].createElement(_BrandsUtils.AllBrandsProvider,null,/*#__PURE__*/_react["default"].createElement(_BrandContext.BrandContextProvider,{brands:brands,hostname:companyName},/*#__PURE__*/_react["default"].createElement(_ThemeProviderCustom["default"],null,/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Select["default"],{label:"Current Brand",select:[{value:"cvc",label:"cvc"},{value:"sub",label:"sub"}],value:companyName,onChange:function onChange(ev){return setCompanyName(ev.target.value)}})),/*#__PURE__*/_react["default"].createElement("br",null),children)))};var BrandContainers=function BrandContainers(_ref4){var children=_ref4.children;return/*#__PURE__*/_react["default"].createElement(_BrandsUtils.AllBrandsProvider,null,/*#__PURE__*/_react["default"].createElement(BrandContainer,null,children))};var _default=BrandContainers;exports["default"]=_default;
//# sourceMappingURL=BrandsContainer.js.map