"use strict";var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.HeaderHideBgContext=void 0;var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _withWidth=require("@material-ui/core/withWidth");var _BrandContext=require("../BrandContext");var _WebView=require("../WebView");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var HeaderHideBgContext=/*#__PURE__*/_react["default"].createContext(false);exports.HeaderHideBgContext=HeaderHideBgContext;var useHeaderBlockStyles=(0,_core.makeStyles)({root:function root(prop){return{backgroundImage:"url(".concat(prop.img,")"),backgroundPosition:"center center",backgroundSize:"cover"}}});function HeaderBlockWithImg(_ref){var _ctx$headerImageBg,_ctx$headerImageBg2;var width=_ref.width,children=_ref.children;var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var isMobile=(0,_withWidth.isWidthDown)("sm",width);var img=isMobile?(_ctx$headerImageBg=ctx.headerImageBg)===null||_ctx$headerImageBg===void 0?void 0:_ctx$headerImageBg.mobile:(_ctx$headerImageBg2=ctx.headerImageBg)===null||_ctx$headerImageBg2===void 0?void 0:_ctx$headerImageBg2.desktop;var classes=useHeaderBlockStyles({img:img});return/*#__PURE__*/_react["default"].createElement("div",{className:classes.root},children)}function HeaderBlockDefault(_ref2){var children=_ref2.children;return/*#__PURE__*/_react["default"].createElement("div",null,children)}function HeaderBlock(_ref3){var width=_ref3.width,children=_ref3.children;var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var hideHeaderBg=ctx.headerImageBg!=null;var T=hideHeaderBg?HeaderBlockWithImg:HeaderBlockDefault;if(_WebView.isWebView)return null;return/*#__PURE__*/_react["default"].createElement(HeaderHideBgContext.Provider,{value:hideHeaderBg},/*#__PURE__*/_react["default"].createElement(T,{width:width},children))}var _default=(0,_core.withWidth)()(HeaderBlock);exports["default"]=_default;
//# sourceMappingURL=HeaderBlock.js.map