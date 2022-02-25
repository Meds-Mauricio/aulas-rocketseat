"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _Button=_interopRequireDefault(require("../../Button"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _Snackbar=_interopRequireDefault(require("../Snackbar"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var SnackbarStory=function SnackbarStory(_ref){var mode=_ref.mode,brand=_ref.brand,hasIcon=_ref.hasIcon,hasBtn=_ref.hasBtn,type=_ref.type,labelClose=_ref.labelClose,message=_ref.message;var classes=useStyles(_themes["default"][brand]);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),handleSuccess=_useState2[0],setHandleSuccess=_useState2[1];return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"Snackbar"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Snackbar"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",label:"Show",size:"medium",variant:"contained",onClick:function onClick(){return setHandleSuccess(!handleSuccess)}})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_Snackbar["default"],{message:message,isOpen:handleSuccess,hasBtn:hasBtn,type:type,hasIcon:hasIcon,labelClose:labelClose,close:function close(){return setHandleSuccess(!handleSuccess)}}))))};var argsControls={args:{brand:"CVC",mode:"root",hasIcon:true,hasBtn:true,type:"success",labelClose:"Fechar",message:"Greyhound divisively hello"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},hasIcon:{type:"boolean"},hasBtn:{type:"boolean"},type:{control:{type:"radio"},options:["success","error"]},labelClose:{type:"string"},message:{type:"string"}}};(0,_react2.storiesOf)("Components/Snackbar",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(SnackbarStory,args)},argsControls);
//# sourceMappingURL=Snackbar.stories.js.map