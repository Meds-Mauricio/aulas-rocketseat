"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _SubmenuMobile=_interopRequireDefault(require("../SubmenuMobile"));/* eslint-disable no-alert */var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var SubmenuMobileStory=function SubmenuMobileStory(_ref){var mode=_ref.mode,brand=_ref.brand,isOpen=_ref.isOpen;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"SubmenuMobile"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"SubmenuMobile"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_SubmenuMobile["default"],{menu:[{label:"Op\xE7\xE3o 1",link:"https://cvc.com.br/",target:"_blank"},{label:"Op\xE7\xE3o 2",link:"https://cvc.com.br/",target:"_blank"},{label:"Op\xE7\xE3o 3",link:"https://cvc.com.br/",target:"_blank"}],isOpen:isOpen,clickBack:function clickBack(){return alert("clicado")}}))))};var argsControls={args:{brand:"CVC",mode:"root",isOpen:true},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},isOpen:{type:"boolean"}}};(0,_react2.storiesOf)("Components/SubmenuMobile",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(SubmenuMobileStory,args)},argsControls);
//# sourceMappingURL=SubmenuMobile.stories.js.map