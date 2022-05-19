"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _OrderEngine=_interopRequireDefault(require("../OrderEngine"));var _dbAir=_interopRequireDefault(require("./dbAir.json"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var orders=[{value:"Menor valor",field:"total",operation:"asc"},{value:"Maior valor",field:"total",operation:"desc"},{value:"Mais r\xE1pido",field:function field(item){var totalMinutesGo=item.segments[0].totalMinuteDuration;var totalMinutesBack=(item.segments.find(function(s){return s.segmentIndex===1})||{}).totalMinuteDuration;return[totalMinutesGo,totalMinutesBack,item.total]},operation:["asc","asc","desc"]}];var OrderEngineStory=function OrderEngineStory(_ref){var mode=_ref.mode,brand=_ref.brand;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"OrderEngine"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"OrderEngine"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_OrderEngine["default"],{orders:orders,dataSource:_dbAir["default"].priceGroups,onOrdered:function onOrdered(){return undefined}}))))};var argsControls={args:{brand:"CVC",mode:"root"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]}}};(0,_react2.storiesOf)("Components/OrderEngine",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(OrderEngineStory,args)},argsControls);
//# sourceMappingURL=OrderEngine.stories.js.map