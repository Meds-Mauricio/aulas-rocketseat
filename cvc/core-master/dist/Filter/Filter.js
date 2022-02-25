"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _Delete=_interopRequireDefault(require("@cvccorp-components/icons/dist/Delete"));var _DropDown=_interopRequireDefault(require("@cvccorp-components/icons/dist/DropDown"));var _Filter=_interopRequireDefault(require("@cvccorp-components/icons/dist/Filter"));var _Typography=_interopRequireDefault(require("../Typography"));var _Button=_interopRequireDefault(require("../Button"));var _FilterTitle=_interopRequireDefault(require("../FilterTitle"));var _Overlay=_interopRequireDefault(require("../Overlay"));var _Animate=_interopRequireDefault(require("../Animate"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var Filter=function Filter(_ref){var label=_ref.label,isOpen=_ref.isOpen,isActive=_ref.isActive,sufix=_ref.sufix,prefix=_ref.prefix,onOpen=_ref.onOpen,onApply=_ref.onApply,onReset=_ref.onReset,onClose=_ref.onClose,type=_ref.type,items=_ref.items,classes=_ref.classes,className=_ref.className,value=_ref.value,disabled=_ref.disabled,noModal=_ref.noModal,more=_ref.more,isMobile=_ref.isMobile,header=_ref.header,height=_ref.height,qtdFilters=_ref.qtdFilters;var handleOpen=function handleOpen(e){e.preventDefault();e.stopPropagation();if(onOpen)onOpen()};var handleClose=function handleClose(e){e.preventDefault();e.stopPropagation();if(onClose)onClose()};var handleApply=function handleApply(e){e.preventDefault();e.stopPropagation();if(onApply)onApply()};var handleReset=function handleReset(e){e.preventDefault();e.stopPropagation();if(onReset)onReset()};var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),isOpenAnimation=_useState2[0],setOpenAnimation=_useState2[1];var onOpenAnimate=function onOpenAnimate(){setOpenAnimation(true)};var onCloseAnimate=function onCloseAnimate(){setOpenAnimation(false)};return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.root," ").concat(className||""," ").concat(isActive?classes.active:""," ").concat(noModal?classes.noModal:""," ").concat(noModal&&more&&isMobile?classes.noModalMore:""," ").concat(isOpen&&!isMobile&&!noModal?classes.opened:""),onClick:function onClick(e){if(!noModal)handleOpen(e)}},noModal&&isMobile&&more&&/*#__PURE__*/_react["default"].createElement("div",{className:classes.header},header),isActive&&!noModal&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"subtitle",className:classes.title},value.length>1?"".concat(value.length," ").concat(label):" ".concat(prefix," ").concat(value[0]," ").concat(sufix)),/*#__PURE__*/_react["default"].createElement("button",{className:classes.buttonDelete,onClick:handleReset},/*#__PURE__*/_react["default"].createElement(_Delete["default"],{className:classes["delete"],size:"small"}))),!isActive&&!noModal&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"subtitle",className:classes.title},label),/*#__PURE__*/_react["default"].createElement(_DropDown["default"],{size:"small",className:isOpen?classes.iconOpened:classes.iconClosed})),noModal&&more&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular",className:classes.title},/*#__PURE__*/_react["default"].createElement(_Filter["default"],null)," ",label,/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btnReset,color:"primary",label:"Limpar filtros",variant:"text",disabled:disabled,onClick:function onClick(e){return handleReset(e)}})),noModal&&!more&&/*#__PURE__*/_react["default"].createElement(_FilterTitle["default"],{label:label}),noModal?/*#__PURE__*/_react["default"].createElement(Content,{classes:classes,isOpenAnimation:isOpenAnimation,isMobile:isMobile,noModal:noModal,height:height,items:items,qtdFilters:qtdFilters,handleReset:handleReset,handleApply:handleApply,disabled:disabled,more:more,type:type,isOpen:isOpen}):/*#__PURE__*/_react["default"].createElement(_Animate["default"],{isOpen:isOpen,onOpen:onOpenAnimate,onClose:onCloseAnimate},!isMobile&&/*#__PURE__*/_react["default"].createElement(_Overlay["default"],{onClick:function onClick(e){return handleClose(e)}}),/*#__PURE__*/_react["default"].createElement(Content,{classes:classes,isOpenAnimation:isOpenAnimation,isMobile:isMobile,noModal:noModal,height:height,items:items,qtdFilters:qtdFilters,handleReset:handleReset,handleApply:handleApply,disabled:disabled,more:more,type:type,isOpen:isOpen})))};Filter.propTypes={classes:_propTypes["default"].object.isRequired,className:_propTypes["default"].object,label:_propTypes["default"].string.isRequired,items:_propTypes["default"].array.isRequired,isOpen:_propTypes["default"].bool,isActive:_propTypes["default"].bool,type:_propTypes["default"].string,onOpen:_propTypes["default"].func,onApply:_propTypes["default"].func,onReset:_propTypes["default"].func,onClose:_propTypes["default"].func,value:_propTypes["default"].array,noModal:_propTypes["default"].bool,prefix:_propTypes["default"].string,sufix:_propTypes["default"].string};Filter.defaultProps={type:"list",isOpen:false,prefix:"",sufix:"",height:"auto"};var Content=function Content(_ref2){var classes=_ref2.classes,isOpenAnimation=_ref2.isOpenAnimation,isMobile=_ref2.isMobile,noModal=_ref2.noModal,height=_ref2.height,items=_ref2.items,qtdFilters=_ref2.qtdFilters,handleReset=_ref2.handleReset,handleApply=_ref2.handleApply,disabled=_ref2.disabled,more=_ref2.more,type=_ref2.type,isOpen=_ref2.isOpen;return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.container," ").concat(isOpenAnimation&&!isMobile&&!noModal?classes.open:"","\n      ").concat(!noModal&&classes[type],"\n      ").concat(noModal?classes.noModalContainer:""," ").concat(noModal&&more&&isMobile?classes.noModalContainerMobile:"")},type=="list"&&/*#__PURE__*/_react["default"].createElement("ul",{id:"listMore",className:more?classes.contentMore:classes.content,style:{maxHeight:height}},items&&items.map(function(item,i){return/*#__PURE__*/_react["default"].createElement("li",{key:i,className:classes.contentItem},/*#__PURE__*/_react["default"].createElement("span",{className:classes.item},item))})),type=="grid"&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,spacing:1,className:classes.content,style:{maxHeight:height}},items&&items.map(function(item,i){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:items.length===2||noModal?6:4,key:i},item)})),!noModal&&/*#__PURE__*/_react["default"].createElement("footer",{className:classes.footer},/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btn,color:"primary",label:"Limpar",variant:"text",disabled:disabled,onClick:function onClick(e){return handleReset(e)}}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btnApply,color:"primary",label:"Aplicar",variant:"text",disabled:disabled,onClick:function onClick(e){return handleApply(e)}})),noModal&&more&&isMobile&&/*#__PURE__*/_react["default"].createElement("footer",{className:"".concat(classes.footer," ").concat(classes.footerMobile," ").concat(isOpen&&classes.showFooterMobile)},/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btnApply,color:"secondary",label:qtdFilters>0?qtdFilters>1?"Aplicar ".concat(qtdFilters," Filtros"):"Aplicar ".concat(qtdFilters," Filtro"):"Aplicar",variant:"contained",disabled:disabled,onClick:function onClick(e){return handleApply(e)},fullWidth:true})))};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(Filter);exports["default"]=_default;
//# sourceMappingURL=Filter.js.map