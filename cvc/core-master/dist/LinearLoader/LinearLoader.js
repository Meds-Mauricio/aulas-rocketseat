"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var styles=function styles(theme){return{root:{}}};var LinearLoader=function LinearLoader(_ref){var className=_ref.className;var _React$useState=_react["default"].useState(0),_React$useState2=(0,_slicedToArray2["default"])(_React$useState,2),completed=_React$useState2[0],setCompleted=_React$useState2[1];_react["default"].useEffect(function(){function progress(){setCompleted(function(oldCompleted){if(oldCompleted===100){return 0}var diff=Math.random()*10;return Math.min(oldCompleted+diff,100)})}var timer=setInterval(progress,500);return function(){clearInterval(timer)}},[]);return/*#__PURE__*/_react["default"].createElement(_core.LinearProgress,{color:"secondary",variant:"determinate",value:completed,className:className})};var _default=(0,_styles.withStyles)(styles,{withTheme:true})(LinearLoader);exports["default"]=_default;
//# sourceMappingURL=LinearLoader.js.map