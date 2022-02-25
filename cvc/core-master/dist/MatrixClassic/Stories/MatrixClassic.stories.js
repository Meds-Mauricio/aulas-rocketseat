"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _MatrixClassic=_interopRequireDefault(require("../MatrixClassic"));/* eslint-disable no-alert */var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var MatrixClassicStory=function MatrixClassicStory(_ref){var mode=_ref.mode,brand=_ref.brand,isLoading=_ref.isLoading;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"MatrixClassic"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"MatrixClassic"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],null,/*#__PURE__*/_react["default"].createElement(_MatrixClassic["default"],{handleClick:function handleClick(){return alert("clicado")},isLoading:isLoading,cias:[{name:"Latam",ciaCode:"JJ",directFlight:{price:"1.773",isBestOfCategory:true,isBestOfGeneral:true},oneStopFlight:{price:"1.819",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"1.997",isBestOfCategory:true,isBestOfGeneral:false}},{name:"Gol",ciaCode:"G3",directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},// oneStopFlight: {
//     price: "6.896",
//     isBestOfCategory: false,
//     isBestOfGeneral: false,
// },
moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Azul",ciaCode:"AD",directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Passaredo",ciaCode:"2Z",// directFlight: {
//     price: "8.098",
//     isBestOfCategory: true,
//     isBestOfGeneral: false,
// },
oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Azul",ciaCode:"AD",directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Latam",ciaCode:"JJ",directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}},{name:"Azul",ciaCode:"AD",directFlight:{price:"8.098",isBestOfCategory:true,isBestOfGeneral:false},oneStopFlight:{price:"6.896",isBestOfCategory:false,isBestOfGeneral:false},moreStopFlight:{price:"6.836",isBestOfCategory:true,isBestOfGeneral:true}}]}))))};var argsControls={args:{brand:"CVC",mode:"root",isLoading:false},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},isLoading:{type:"boolean"}}};(0,_react2.storiesOf)("Components/MatrixClassic",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(MatrixClassicStory,args)},argsControls);
//# sourceMappingURL=MatrixClassic.stories.js.map