"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _mockHotels=_interopRequireDefault(require("../../MapBundle/Stories/mockHotels.json"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _MapItem=_interopRequireDefault(require("../MapItem"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}/* eslint-disable no-console */var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var initDefaultData=function initDefaultData(){var middleLocation=_mockHotels["default"].hoteis[Math.floor(_mockHotels["default"].hoteis.length/2)];return{title:"2",coordinates:{latitude:middleLocation.location.coordinates.latitude,longitude:middleLocation.location.coordinates.longitude},zoom:9}};var payloadMap=_mockHotels["default"].hoteis.map(function(mapData){return{id:mapData.id,name:mapData.name,coordinates:{latitude:mapData.location.coordinates.latitude,longitude:mapData.location.coordinates.longitude},rate:{totalPrice:mapData.room.rate.pricePerDayWithTax}}})[0];var MapItemStory=function MapItemStory(_ref){var mode=_ref.mode,brand=_ref.brand;var classes=useStyles(_themes["default"][brand]);var _useState=(0,_react.useState)(initDefaultData),_useState2=(0,_slicedToArray2["default"])(_useState,1),defaultData=_useState2[0];return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"MapItem"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"MapItem"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_MapItem["default"],{gridSize:50,maxZoom:14,minimumClusterSize:1,defaultData:defaultData,data:payloadMap,openInfo:false,googleMapURL:"https://www.google.com.br/maps/api/js?key=AIzaSyB_-QHk0PCeDlXgsi3bAuklXA--pfZQsdI&v=3.exp&libraries=geometry,drawing,places",loadingElement:/*#__PURE__*/_react["default"].createElement("div",{style:{height:"100%"}}),containerElement:/*#__PURE__*/_react["default"].createElement("div",{style:{height:"400px"}}),mapElement:/*#__PURE__*/_react["default"].createElement("div",{style:{height:"100%"}}),zoom:10,active:false,handleSelect:function handleSelect(){return console.log("clicado")}})))};var argsControls={args:{brand:"CVC",mode:"root"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]}}};(0,_react2.storiesOf)("Components/Mapas/MapItem",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(MapItemStory,args)},argsControls);
//# sourceMappingURL=MapItem.stories.js.map