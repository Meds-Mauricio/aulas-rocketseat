"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.getHostName=getHostName;exports.brandResolver=brandResolver;exports.BrandContextProvider=BrandContextProvider;exports.InternalApp=InternalApp;exports.UserDataProviderCustom=UserDataProviderCustom;exports.ClientBasedApp=ClientBasedApp;exports.ClientBasedAllBrands=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _react=_interopRequireWildcard(require("react"));var _awsAmplify=require("aws-amplify");var _ProfileContext=require("../ProfileContext");var _ThemeProviderCustom=_interopRequireDefault(require("../ThemeProviderCustom/ThemeProviderCustom"));var _UserContext=require("../UserContext");var _aws=_interopRequireDefault(require("./amplify/aws.config"));var _BrandContext=require("./BrandContext");var _api=_interopRequireDefault(require("./services/api"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function getHostName(req){var isServer=Boolean(req);if(!isServer&&typeof window==="undefined")throw{message:"Voc\xEA est\xE1 chamando esse m\xE9todo em um contexto de servidor sem a requisi\xE7\xE3o correspondente."};var fullUrl=isServer?"http://".concat(req.headers["X-Forwarded-Host"]||req.headers.host,"/").concat(req.url):document.location.href;var url=new URL(fullUrl);var qs=url.searchParams;return{hostname:qs.has("__contextBrandUrl")?qs.get("__contextBrandUrl"):url.hostname}}function brandResolver(brands,hostname){if(hostname==null)hostname=getHostName().hostname;var brand=brands.find(function(x){return x.hosts.includes(hostname||"")});if(brand==null)throw{message:"hostname ".concat(hostname," not found.")};return brand}function BrandContextProvider(_ref){var brand=_ref.brand,brands=_ref.brands,hostname=_ref.hostname,children=_ref.children;return/*#__PURE__*/_react["default"].createElement(_BrandContext.BrandContext.Provider,{value:brand!==null&&brand!==void 0?brand:brandResolver(brands,hostname)},children)}var ClientBasedAllBrands=/*#__PURE__*/_react["default"].createContext(null);exports.ClientBasedAllBrands=ClientBasedAllBrands;function AllBrandsProvider(_ref2){var contextPath=_ref2.contextPath,children=_ref2.children;var brands=(0,_BrandContext.useFetchAllBrands)(contextPath);return/*#__PURE__*/_react["default"].createElement(ClientBasedAllBrands.Provider,{value:brands},children)}function InternalApp(_ref3){var hostname=_ref3.hostname,children=_ref3.children;var brands=(0,_react.useContext)(ClientBasedAllBrands);if(brands==null)return/*#__PURE__*/_react["default"].createElement("div",null,"Carregando...");return/*#__PURE__*/_react["default"].createElement(BrandContextProvider,{brands:brands,hostname:hostname},/*#__PURE__*/_react["default"].createElement(_ThemeProviderCustom["default"],null,/*#__PURE__*/_react["default"].createElement(UserDataProviderCustom,null,/*#__PURE__*/_react["default"].createElement(_ProfileContext.ProfileDataProvider,null,children))))}function configureAmplify(_x){return _configureAmplify.apply(this,arguments)}function _configureAmplify(){_configureAmplify=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx){var awsAmplifyConfig,awsConfig;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _api["default"].get("/apigw/authentication/".concat(ctx.brand,"/config"));case 2:awsAmplifyConfig=_context2.sent;awsConfig=(0,_aws["default"])(awsAmplifyConfig.data,ctx.hosts);_awsAmplify.Amplify.configure(awsConfig);return _context2.abrupt("return",true);case 6:case"end":return _context2.stop();}}},_callee2)}));return _configureAmplify.apply(this,arguments)}function UserDataProviderCustom(_ref4){var children=_ref4.children;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),config=_useState2[0],setConfig=_useState2[1];var ctx=(0,_react.useContext)(_BrandContext.BrandContext);(0,_react.useEffect)(function(){function fetchConfig(){return _fetchConfig.apply(this,arguments)}function _fetchConfig(){_fetchConfig=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var conf;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return configureAmplify(ctx);case 2:conf=_context.sent;setConfig(conf);case 4:case"end":return _context.stop();}}},_callee)}));return _fetchConfig.apply(this,arguments)}fetchConfig()},[]);return/*#__PURE__*/_react["default"].createElement(_UserContext.UserDataProvider,{config:config},/*#__PURE__*/_react["default"].createElement(_ProfileContext.ProfileDataProvider,null,children))}function ClientBasedApp(_ref5){var contextPath=_ref5.contextPath,hostname=_ref5.hostname,children=_ref5.children;return/*#__PURE__*/_react["default"].createElement(AllBrandsProvider,{contextPath:contextPath},/*#__PURE__*/_react["default"].createElement(InternalApp,{hostname:hostname},children))}
//# sourceMappingURL=BrandContextProvider.js.map