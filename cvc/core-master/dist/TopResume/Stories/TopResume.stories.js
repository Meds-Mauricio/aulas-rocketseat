"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _TopResume=_interopRequireDefault(require("../TopResume"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var TopResumeStory=function TopResumeStory(_ref){var mode=_ref.mode,brand=_ref.brand,city=_ref.city,state=_ref.state,country=_ref.country,departure=_ref.departure,arrival=_ref.arrival,pax=_ref.pax;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"TopResume"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"TopResume"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_TopResume["default"],{destination:[{city:city,state:state,country:country,departure:departure,arrival:arrival,pax:pax}]})))};var argsControls={args:{brand:"CVC",mode:"darkBg",city:"Rio de Janeiro",state:"RJ",country:"Brasil",departure:"01/01/2022",arrival:"02/01/2022",pax:2},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},city:{label:{type:"string"}},state:{label:{type:"string"}},country:{label:{type:"string"}},departure:{label:{type:"string"}},arrival:{label:{type:"string"}},pax:{label:{type:"number"}}}};(0,_react2.storiesOf)("Components/TopResume",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(TopResumeStory,args)},argsControls);
//# sourceMappingURL=TopResume.stories.js.map