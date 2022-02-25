"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _Air=_interopRequireDefault(require("../Air"));var _styles2=require("../styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var useStyles=(0,_styles.makeStyles)(function(theme){return _objectSpread(_objectSpread({},_styles2.styles),{},{rootBg:{background:theme.palette.primary.main,boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}})});var PaxAirStories=function PaxAirStories(_ref){var mode=_ref.mode,brand=_ref.brand,isMobile=_ref.isMobile,error=_ref.error,errorMsg=_ref.errorMsg;var classes=useStyles(_themes["default"][brand]);var initialState={apply:"Selecione os passageiros",adults:1,children:0,babies:0,classes:"eco",directFlight:false};var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var _useState3=(0,_react.useState)(initialState),_useState4=(0,_slicedToArray2["default"])(_useState3,2),fields=_useState4[0],setFields=_useState4[1];var handleOpen=function handleOpen(){setOpen(!open)};var handleClose=function handleClose(){setOpen(false)};var handleAdd=function handleAdd(field){var values=_objectSpread({},fields);values[field]=values[field]+1;setFields(values)};var handleRemove=function handleRemove(field){var values=_objectSpread({},fields);values[field]=values[field]-1;setFields(values)};var handleClasses=function handleClasses(field){var values=_objectSpread({},fields);values.classes=field;setFields(values)};var handleApply=function handleApply(field){var values=_objectSpread({},fields);values.apply=field;setFields(values)};var handleDirectFlight=function handleDirectFlight(){var values=_objectSpread({},fields);values.directFlight=!values.directFlight;setFields(values)};var handleClear=function handleClear(){setFields(initialState)};return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],style:{background:"#237FD0"}},/*#__PURE__*/_react["default"].createElement(_core.Typography,{variant:"h3"},"Pax Air"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Grid,{container:true,direction:"row",justify:"flex-start",spacing:2},/*#__PURE__*/_react["default"].createElement(_core.Grid,{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_Air["default"],{isMobile:isMobile,initialState:initialState,open:open,fields:fields,onClick:handleOpen,handleClose:handleClose,handleAdd:handleAdd,handleRemove:handleRemove,handleClear:handleClear,handleClasses:handleClasses,handleDirectFlight:handleDirectFlight,handleApply:handleApply,error:error,errorMsg:errorMsg})))))};var argsControls={args:{brand:"Sub",mode:"rootBg",isMobile:false,error:false,errorMsg:"Error message"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["rootBg","darkBg"]},isMobile:{type:"boolean"},error:{type:"boolean"},errorMsg:{type:"string"}}};(0,_react2.storiesOf)("Components/Pax/PaxAir",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(PaxAirStories,args)},argsControls);
//# sourceMappingURL=PaxAir.stories.js.map