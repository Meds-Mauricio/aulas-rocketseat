"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.DefaultAmenities=void 0;var _react=_interopRequireDefault(require("react"));var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _storybookAddonJsx=require("storybook-addon-jsx");var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _react2=require("@storybook/react");var _storybookAddonMaterialUi=require("storybook-addon-material-ui");var _themes=_interopRequireDefault(require("../../Theme/themes"));var _Theme=_interopRequireDefault(require("../../Theme"));var _Amenities=_interopRequireDefault(require("../Amenities"));var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{boxShadow:theme.shadows[24],margin:"20px",padding:"20px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",margin:"20px",padding:"20px"}}});var DefaultAmenities=function DefaultAmenities(_ref){var label=_ref.label,mode=_ref.mode,brand=_ref.brand;var classes=useStyles();return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"amenities"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Amenities"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Grid,{container:true,spacing:2},/*#__PURE__*/_react["default"].createElement(_core.Grid,{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement(_Amenities["default"],{amenities:[label]})))))};exports.DefaultAmenities=DefaultAmenities;(0,_react2.storiesOf)("Components/Amenities",module).addDecorator((0,_storybookAddonMaterialUi.muiTheme)([_Theme["default"]])).addDecorator(_storybookAddonJsx.jsxDecorator).add("Default ",function(args){return/*#__PURE__*/_react["default"].createElement(DefaultAmenities,args)},{args:{label:"15",brand:"CVC",mode:"root"},argTypes:{label:{type:"string"},brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]}}});
//# sourceMappingURL=Amenities.stories.js.map