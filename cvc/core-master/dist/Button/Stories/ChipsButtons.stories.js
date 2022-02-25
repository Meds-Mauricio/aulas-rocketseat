"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _storybookAddonJsx=require("storybook-addon-jsx");var _core=require("@material-ui/core");var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _styles=require("@material-ui/core/styles");var _react2=require("@storybook/react");var _storybookAddonMaterialUi=require("storybook-addon-material-ui");var _icons=require("@cvccorp-components/icons");var _Theme=_interopRequireDefault(require("../../Theme"));var _themes=_interopRequireDefault(require("../../Theme/themes"));var _CustomChip=_interopRequireDefault(require("../../CustomChip"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{boxShadow:theme.shadows[24],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",padding:"20px"}}});var ChipsButtons=function ChipsButtons(_ref){var brand=_ref.brand,mode=_ref.mode,label=_ref.label,color=_ref.color,variant=_ref.variant,disabled=_ref.disabled;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"botoes"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Custom Chips"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,direction:"column",justify:"center",spacing:2},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_CustomChip["default"],{label:label,variant:variant,disabled:disabled,color:color})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"subtitle1"},"Chips com \xCDcone"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_CustomChip["default"],{label:label,disabled:disabled,icon:/*#__PURE__*/_react["default"].createElement(_icons.Filter,null)})))))};var argsControls={args:{label:"Button Text",brand:"CVC",mode:"root",color:"default",variant:"contained",disabled:false},argTypes:{label:{type:"string"},brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},color:{options:["default","primary","secondary"],control:{type:"select"}},variant:{options:["outlined","contained"],control:{type:"radio"}},disabled:{type:"boolean"}}};(0,_react2.storiesOf)("Components/Buttons/CustomChip",module).addDecorator((0,_storybookAddonMaterialUi.muiTheme)([_Theme["default"]])).addDecorator(_storybookAddonJsx.jsxDecorator).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(ChipsButtons,args)},argsControls);
//# sourceMappingURL=ChipsButtons.stories.js.map