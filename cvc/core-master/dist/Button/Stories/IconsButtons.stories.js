"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.IconButtons=void 0;var _react=_interopRequireDefault(require("react"));var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _storybookAddonJsx=require("storybook-addon-jsx");var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _react2=require("@storybook/react");var _storybookAddonMaterialUi=require("storybook-addon-material-ui");var _icons=require("@cvccorp-components/icons");var _Theme=_interopRequireDefault(require("../../Theme"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _Button=_interopRequireDefault(require("../Button"));var _Badge=_interopRequireDefault(require("../../Badge"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{boxShadow:theme.shadows[24],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",padding:"20px"}}});var IconButtons=function IconButtons(_ref){var brand=_ref.brand,mode=_ref.mode,label=_ref.label,color=_ref.color,variant=_ref.variant,size=_ref.size,iconPosition=_ref.iconPosition;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"botoes"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Bot\xF5es de \xCDcones"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Grid,{container:true,direction:"column",justify:"center",spacing:2,alignItems:"flex-start"},/*#__PURE__*/_react["default"].createElement(_core.Grid,{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"subtitle1"},"Bot\xF5es com \xCDcone Default com Notifica\xE7\xE3o"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:color,label:label,icon:/*#__PURE__*/_react["default"].createElement(_icons.Filter,null),variant:variant,size:size,iconPosition:iconPosition}),/*#__PURE__*/_react["default"].createElement(_Badge["default"],{content:10},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:color,label:label,icon:/*#__PURE__*/_react["default"].createElement(_icons.Filter,null),variant:variant,size:size,iconPosition:iconPosition}))),/*#__PURE__*/_react["default"].createElement(_core.Grid,{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"subtitle1"},"Bot\xE3o Agrupado"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:color,label:label,icon:/*#__PURE__*/_react["default"].createElement(_icons.Filter,null),iconPosition:iconPosition,grouped:1,variant:variant,size:size}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:color,label:label,icon:/*#__PURE__*/_react["default"].createElement(_icons.Filter,null),iconPosition:iconPosition,grouped:2,variant:variant,size:size})))))};exports.IconButtons=IconButtons;var argsControls={args:{label:"Button Text",brand:"CVC",mode:"root",color:"primary",variant:"contained",iconPosition:"before",size:"medium"},argTypes:{label:{type:"string"},brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"],brand:"CVC",mode:"root"},mode:{type:"select",options:["root","darkBg"]},color:{options:["default","primary","secondary"],control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"radio"}},variant:{options:["outlined","contained"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"select"}}}};(0,_react2.storiesOf)("Components/Buttons/Button",module).addDecorator((0,_storybookAddonMaterialUi.muiTheme)([_Theme["default"]])).addDecorator(_storybookAddonJsx.jsxDecorator).add("\xCDcones",function(args){return/*#__PURE__*/_react["default"].createElement(IconButtons,args)},argsControls);
//# sourceMappingURL=IconsButtons.stories.js.map