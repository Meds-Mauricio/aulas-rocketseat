"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Help=_interopRequireDefault(require("@cvccorp-components/icons/dist/Help"));var _Sac=_interopRequireDefault(require("@cvccorp-components/icons/dist/Sac"));var _DropRight=_interopRequireDefault(require("@cvccorp-components/icons/dist/DropRight"));var _DropDown=_interopRequireDefault(require("@cvccorp-components/icons/dist/DropDown"));var _Typography=_interopRequireDefault(require("../Typography"));var _UserArea=_interopRequireDefault(require("../UserArea"));var _DropDown2=_interopRequireDefault(require("../DropDown"));var _SubmenuMobile=_interopRequireDefault(require("../SubmenuMobile"));var _Animate=_interopRequireDefault(require("../Animate"));var _Logo=_interopRequireDefault(require("../Logo"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var MenuMobile=function MenuMobile(_ref){var ctx=_ref.ctx,classes=_ref.classes,product=_ref.product,menu=_ref.menu,more=_ref.more,user=_ref.user,submenu=_ref.submenu,phone=_ref.phone,phoneSales=_ref.phoneSales,help=_ref.help,goBack=_ref.goBack,isOpen=_ref.isOpen;var getMenu=function getMenu(){var menus=[];menu.forEach(function(item){menus.push(/*#__PURE__*/_react["default"].createElement("a",{href:item.link,target:item.target,className:classes.dropdownLink},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},item.icon," ",item.label)))});return menus};var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),isMore=_useState2[0],setMore=_useState2[1];var _useState3=(0,_react.useState)(isOpen),_useState4=(0,_slicedToArray2["default"])(_useState3,2),isOpenAnimation=_useState4[0],setOpenAnimation=_useState4[1];var onOpen=function onOpen(){setOpenAnimation(true)};var onClose=function onClose(){setOpenAnimation(false)};return/*#__PURE__*/_react["default"].createElement(_Animate["default"],{isOpen:isOpen,onOpen:onOpen,onClose:onClose},isOpenAnimation&&/*#__PURE__*/_react["default"].createElement("span",{className:classes.overlay}),/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(isOpenAnimation&&classes.opened,"  ").concat(classes.root)},/*#__PURE__*/_react["default"].createElement("header",{className:classes.header,onClick:function onClick(){goBack(true)}},/*#__PURE__*/_react["default"].createElement(_Logo["default"],{type:"dark",className:classes.logo}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},product," ",/*#__PURE__*/_react["default"].createElement(_DropDown["default"],null))),/*#__PURE__*/_react["default"].createElement(_UserArea["default"],{lightTheme:true,className:classes.userArea,user:user}),!ctx.newLoginButton?/*#__PURE__*/_react["default"].createElement("div",{className:classes.menuHighlight},/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuHighlightItem,href:"tel:".concat(phone)},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular"},/*#__PURE__*/_react["default"].createElement(_Sac["default"],null),/*#__PURE__*/_react["default"].createElement("br",null)," Atendimento")),phoneSales&&/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuHighlightItem,href:"tel:".concat(phoneSales)},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular"},"Televendas")),/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuHighlightItem,href:help},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular"},/*#__PURE__*/_react["default"].createElement(_Help["default"],null),/*#__PURE__*/_react["default"].createElement("br",null)," Ajuda"))):/*#__PURE__*/_react["default"].createElement("div",{className:classes.menuList},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Atendimento ao cliente"),/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuListItem,href:"tel:".concat(phone)},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},"Fale com a gente")),phoneSales&&/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuListItem,href:"tel:".concat(phoneSales)},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},"Televendas")),/*#__PURE__*/_react["default"].createElement("a",{className:classes.menuListItem,href:help},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},"Central de ajuda: D\xFAvidas frequentes"))),/*#__PURE__*/_react["default"].createElement(_DropDown2["default"],{className:classes.dropdown,menu:getMenu()}),more&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement("a",{onClick:function onClick(){setMore(true)},className:classes.more,href:"#"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Mais"),/*#__PURE__*/_react["default"].createElement(_DropRight["default"],null)))),/*#__PURE__*/_react["default"].createElement(_SubmenuMobile["default"],{clickBack:function clickBack(){setMore(false)},isOpen:isMore,menu:submenu}))};MenuMobile.propTypes={product:_propTypes["default"].string,classes:_propTypes["default"].oneOfType([_propTypes["default"].object,_propTypes["default"].string]),isOpen:_propTypes["default"].bool,goBack:_propTypes["default"].func,menu:_propTypes["default"].array,more:_propTypes["default"].bool,user:_propTypes["default"].array,submenu:_propTypes["default"].array,ctx:_propTypes["default"].object};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(MenuMobile);exports["default"]=_default;
//# sourceMappingURL=index.js.map