"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _react2=require("@storybook/react");var _BrandContext=require("../../BrandContext");var _ThemeProviderCustom=_interopRequireDefault(require("../../ThemeProviderCustom"));var _brandMock=_interopRequireDefault(require("../../utils/brandMock"));var _CoreHeader=_interopRequireDefault(require("../CoreHeader"));var CoreHeaderStory=function CoreHeaderStory(_ref){var brand=_ref.brand,isMobile=_ref.isMobile,showCovidAlert=_ref.showCovidAlert;return/*#__PURE__*/_react["default"].createElement(_BrandContext.BrandContext.Provider,{value:_brandMock["default"][brand]},/*#__PURE__*/_react["default"].createElement(_ThemeProviderCustom["default"],null,/*#__PURE__*/_react["default"].createElement(_core.Grid,{item:true,xs:isMobile?2:12},/*#__PURE__*/_react["default"].createElement(_CoreHeader["default"],{isMobile:isMobile,showCovidAlert:showCovidAlert}))))};var argsControls={args:{brand:"cvc",isMobile:false,showCovidAlert:true},argTypes:{brand:{type:"select",options:["cvc","cvccorp","sub"]},isMobile:{type:"boolean"},showCovidAlert:{type:"boolean"}}};(0,_react2.storiesOf)("Components/CoreHeader",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(CoreHeaderStory,args)},argsControls);
//# sourceMappingURL=CoreHeader.stories.js.map