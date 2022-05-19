"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _Stars=_interopRequireDefault(require("../../Stars"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _FilterOptionWithTotal=_interopRequireDefault(require("../FilterOptionWithTotal"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var FilterOptionWithTotalStory=function FilterOptionWithTotalStory(_ref){var mode=_ref.mode,brand=_ref.brand,open=_ref.open,label=_ref.label;var classes=useStyles(_themes["default"][brand]);var items=[{value:1,checked:false,label:/*#__PURE__*/_react["default"].createElement(_Stars["default"],{stars:1})},{value:"teste",checked:false,label:"text",total:10}];return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"FilterOptionWithTotal"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"FilterOptionWithTotal"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_FilterOptionWithTotal["default"],{isMobile:false,noModal:false,sufix:"Estrela",open:open,onChange:undefined,items:items,onApply:undefined,onReset:undefined,label:label,filter:undefined,height:undefined,onClose:undefined,onActive:undefined}))))};var argsControls={args:{brand:"CVC",mode:"root",label:"Label Text",open:false},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},open:{type:"boolean"},label:{type:"string"}}};(0,_react2.storiesOf)("Components/Filtros/FilterOptionWithTotal",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(FilterOptionWithTotalStory,args)},argsControls);
//# sourceMappingURL=FilterOptionWithTotal.stories.js.map