"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _propTypes=_interopRequireDefault(require("prop-types"));var _universalCookie=_interopRequireDefault(require("universal-cookie"));var _BrandContext=require("../BrandContext");var _Button=_interopRequireDefault(require("../Button"));var _ModalLogin=_interopRequireDefault(require("../MyTravelLogin/shared/components/ModalLogin"));var _ProfileContext=require("../ProfileContext");var _Typography=_interopRequireDefault(require("../Typography"));var _UserContext=require("../UserContext");var _utils=require("../utils");var _useGa2=_interopRequireDefault(require("../utils/useGa"));var _CognitoIdTokenUpdate=_interopRequireDefault(require("./CognitoIdTokenUpdate"));var _components=require("./components");var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}/* eslint-disable react-hooks/exhaustive-deps */var Header=function Header(_ref){var user=_ref.user,lightTheme=_ref.lightTheme,className=_ref.className;var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var desktopSize=(0,_core.useMediaQuery)("(min-width:768px)");var classes=(0,_styles.useStyles)({});var _useGa=(0,_useGa2["default"])(),saveOnGa=_useGa.saveOnGa;var _useUserDataContext=(0,_UserContext.useUserDataContext)(),isUserAuth=_useUserDataContext.isUserAuth,setIsUserAuth=_useUserDataContext.setIsUserAuth,isConfig=_useUserDataContext.isConfig,logout=_useUserDataContext.logout;var _useProfileContext=(0,_ProfileContext.useProfileContext)(),profileData=_useProfileContext.profileData,getProfileInformations=_useProfileContext.getProfileInformations;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),isLogged=_useState2[0],setIsLogged=_useState2[1];var _useCognitoIdTokenUpd=(0,_CognitoIdTokenUpdate["default"])(),cognitoIdToken=_useCognitoIdTokenUpd.cognitoIdToken;var cookies=new _universalCookie["default"];var corpAgentId=cookies.get("corpAgentId");(0,_react.useEffect)(function(){if(isConfig){var isAuth=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setIsUserAuth(isUserAuth);case 1:case"end":return _context.stop();}}},_callee)}));return function isAuth(){return _ref2.apply(this,arguments)}}();isAuth()}},[isConfig,isUserAuth]);var handleClickMyTrip=function handleClickMyTrip(){saveOnGa({event:"header_event",category:"Account",action:"Click on header options",label:"click on header item :: mytrips"});window.location.href="/mytravels/reservations/"};(0,_react.useEffect)(function(){setIsLogged(cognitoIdToken)},[cognitoIdToken]);var name=profileData.name,birthdate=profileData.birthdate,contact=profileData.contact,cpf=profileData.cpf;var getProfile=(0,_react.useCallback)(/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){var profileResp,hasProfileInfo;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return getProfileInformations();case 2:profileResp=_context2.sent;hasProfileInfo=!!(profileResp!==null&&profileResp!==void 0&&profileResp.name)&&!!(profileResp!==null&&profileResp!==void 0&&profileResp.birthdate)&&!!(profileResp!==null&&profileResp!==void 0&&profileResp.contact)&&!!(profileResp!==null&&profileResp!==void 0&&profileResp.cpf);if(!hasProfileInfo){logout({noReload:true})}case 5:case"end":return _context2.stop();}}},_callee2)})),[]);(0,_react.useEffect)(function(){if((0,_utils.featureToggles)(ctx,"PROFILE")&&isUserAuth){getProfile()}},[isUserAuth]);var requiredProfileInformations=(0,_react.useMemo)(function(){return!!name&&!!birthdate&&!!contact&&!!cpf},[birthdate,contact,cpf,name]);var profileInfo=(0,_react.useMemo)(function(){if((0,_utils.featureToggles)(ctx,"PROFILE")){return requiredProfileInformations}return true},[ctx,requiredProfileInformations]);if((0,_utils.verifyIsBrand)(ctx,"Sub")||(0,_utils.featureToggles)(ctx,"NEW_LOGIN")){if((!!(0,_utils.findCognitoIdToken)()||!!cognitoIdToken||!!isLogged||!!corpAgentId)&&profileInfo){return/*#__PURE__*/_react["default"].createElement(_components.UserAreaButtons,{lightTheme:lightTheme,className:className,onClickLogout:function onClickLogout(){return logout({willBeSavedInGA:true})},onClickMyTravels:handleClickMyTrip,newLogin:(0,_utils.featureToggles)(ctx,"NEW_LOGIN"),employer:corpAgentId,isCVC:(0,_utils.verifyIsBrand)(ctx,"CVC"),isMobile:!desktopSize,isLogged:true})}return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.loginNoRegister," ").concat(className," login-info-container")},/*#__PURE__*/_react["default"].createElement(_ModalLogin["default"],{textBtnLogin:(0,_utils.featureToggles)(ctx,"NEW_LOGIN")?/*#__PURE__*/_react["default"].createElement(_components.UserAreaIcon,{isEmployer:true,text:(0,_utils.featureToggles)(ctx,"NEW_LOGIN")?"Entre ou cadastre-se":null,isMobile:!desktopSize}):"Entrar",isMobile:!desktopSize,newLogin:(0,_utils.featureToggles)(ctx,"NEW_LOGIN")?classes.loginBtn:null}))}if(user){return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(lightTheme?classes.loggedLight:classes.logged," ").concat(className," login-info-container")},/*#__PURE__*/_react["default"].createElement(_core.Avatar,{className:lightTheme?classes.avatarLight:classes.avatar,src:user.avatar},user.name.slice(0,2)),/*#__PURE__*/_react["default"].createElement(_components.UserAreaInfo,{userName:user.name,className:lightTheme?classes.userLight:classes.user,hiddenMyTravels:!lightTheme,newLogin:(0,_utils.featureToggles)(ctx,"NEW_LOGIN")}),lightTheme&&/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",label:"Sair",size:"small",variant:"outlined",className:classes.logout}))}if(lightTheme){return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.loginNoRegister," ").concat(className," login-info-container")},/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_components.UserAreaInfo,{userName:"Viajante",className:classes.hello})),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",label:"Entrar",size:"small",variant:"outlined",href:ctx.menu.login})))}return/*#__PURE__*/_react["default"].createElement("div",{className:"".concat(classes.login,"  ").concat(className," login-info-container")},/*#__PURE__*/_react["default"].createElement("a",{className:classes.loginBtn,href:ctx.menu.login},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",className:classes.loginBtnTxt},"Entrar")))};Header.propTypes={user:_propTypes["default"].object,lightTheme:_propTypes["default"].bool,className:_propTypes["default"].string};var _default=Header;exports["default"]=_default;
//# sourceMappingURL=index.js.map