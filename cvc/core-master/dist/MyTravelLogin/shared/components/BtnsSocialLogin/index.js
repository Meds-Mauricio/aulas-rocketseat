"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _react=_interopRequireDefault(require("react"));var _awsAmplify=require("aws-amplify");var _reactIntl=require("react-intl");var _useGa2=_interopRequireDefault(require("../../../../utils/useGa"));var _AppleIcon=_interopRequireDefault(require("../icons/AppleIcon"));var _FacebookIcon=_interopRequireDefault(require("../icons/FacebookIcon"));var _Google=_interopRequireDefault(require("../icons/Google"));var _InternalButton=_interopRequireDefault(require("../InternalButton"));var _styles=_interopRequireDefault(require("./styles"));var BtnsSocialLogin=function BtnsSocialLogin(_ref){var intl=_ref.intl;var classes=(0,_styles["default"])({});var facebookButtonText=intl.formatMessage({id:"MainScreen.btnFacebook"});var googleButtonText=intl.formatMessage({id:"MainScreen.btnGoogle"});var appleButtonText=intl.formatMessage({id:"MainScreen.btnApple"});var _useGa=(0,_useGa2["default"])(),saveOnGa=_useGa.saveOnGa;var FacebookSocialLogin=function FacebookSocialLogin(){return new Promise(/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(resolve){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:saveOnGa({event:"login_event",category:"Account",action:"Form Login",label:"login :: facebook"});_awsAmplify.Auth.federatedSignIn({customProvider:"Facebook"});return _context.abrupt("return",resolve);case 3:case"end":return _context.stop();}}},_callee)}));return function(_x){return _ref2.apply(this,arguments)}}())};var GoogleSocialLogin=function GoogleSocialLogin(){return new Promise(/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve){return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:saveOnGa({event:"login_event",category:"Account",action:"Form Login",label:"login :: google"});_awsAmplify.Auth.federatedSignIn({customProvider:"Google"});return _context2.abrupt("return",resolve);case 3:case"end":return _context2.stop();}}},_callee2)}));return function(_x2){return _ref3.apply(this,arguments)}}())};var AppleSocialLogin=function AppleSocialLogin(){return new Promise(/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve){return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:saveOnGa({event:"login_event",category:"Account",action:"Form Login",label:"login :: apple"});_awsAmplify.Auth.federatedSignIn({customProvider:"SignInWithApple"});return _context3.abrupt("return",resolve);case 3:case"end":return _context3.stop();}}},_callee3)}));return function(_x3){return _ref4.apply(this,arguments)}}())};return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.socialButtonsWrapper)},/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{handlerClick:FacebookSocialLogin,isSocialNetwork:true,icon:_FacebookIcon["default"],type:"button",text:facebookButtonText}),/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{handlerClick:GoogleSocialLogin,isSocialNetwork:true,icon:_Google["default"],type:"button",text:googleButtonText}),/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{handlerClick:AppleSocialLogin,isSocialNetwork:true,icon:_AppleIcon["default"],type:"button",text:appleButtonText}))};var _default=(0,_reactIntl.injectIntl)(BtnsSocialLogin);exports["default"]=_default;
//# sourceMappingURL=index.js.map