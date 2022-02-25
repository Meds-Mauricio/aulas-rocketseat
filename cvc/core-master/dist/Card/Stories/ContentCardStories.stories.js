"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _icons=require("@cvccorp-components/icons");var _ContentCard=_interopRequireDefault(require("../../ContentCard"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var CardStory=function CardStory(_ref){var brand=_ref.brand,icon=_ref.icon,title=_ref.title,titleHeight=_ref.titleHeight,text=_ref.text,link=_ref.link,href=_ref.href,mode=_ref.mode;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"checkbox"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Controles de sele\xE7\xE3o"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,spacing:5},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_ContentCard["default"],{icon:icon&&/*#__PURE__*/_react["default"].createElement(_icons.Offers,{size:"large"}),title:title,titleHeight:titleHeight,text:text,link:link,href:href})))))};(0,_react2.storiesOf)("Components/Cards/ContentCard",module).add("Controls",function(args){return/*#__PURE__*/_react["default"].createElement(CardStory,args)},{args:{brand:"CVC",icon:true,title:"Title",titleHeight:"32px",text:"Body 1 \u2014 The same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose",link:"Link",href:"#",mode:"root"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},icon:{type:"boolean"},title:{type:"string"},titleHeight:{type:"string"},text:{type:"string"},link:{type:"string"},href:{type:"string"},mode:{type:"select",options:["root","darkBg"]}}});
//# sourceMappingURL=ContentCardStories.stories.js.map