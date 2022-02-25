"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _Link=_interopRequireDefault(require("@material-ui/core/Link"));var _awsAmplify=require("aws-amplify");var _reactIntl=require("react-intl");var Yup=_interopRequireWildcard(require("yup"));var _BrandContext=require("../../../BrandContext");var _aws=require("../../../BrandContext/amplify/aws.config");var _ProfileContext=require("../../../ProfileContext");var _UserContext=require("../../../UserContext");var _utils=require("../../../utils");var _useGa2=_interopRequireDefault(require("../../../utils/useGa"));var _AmplifyContext=require("../../contexts/AmplifyContext");var _LoadingContext=require("../../contexts/LoadingContext");var _renderSteps=require("../../contexts/renderSteps");var _Toast=require("../../contexts/Toast");var _Form=_interopRequireDefault(require("../../shared/components/Form"));var _HeaderLogin=_interopRequireDefault(require("../../shared/components/HeaderLogin"));var _Input=_interopRequireDefault(require("../../shared/components/Input"));var _InternalButton=_interopRequireDefault(require("../../shared/components/InternalButton"));var _Loading=_interopRequireDefault(require("../../shared/components/Loading"));var _SubTitle=_interopRequireDefault(require("../../shared/components/SubTitle"));var _Terms=_interopRequireDefault(require("../../shared/components/Terms"));var _Title=_interopRequireDefault(require("../../shared/components/Title"));var _UserContext2=require("../../shared/hooks/UserContext");var _translate=_interopRequireDefault(require("../../shared/i18n/translate"));var _getValidationErrors=_interopRequireDefault(require("../../shared/utils/getValidationErrors"));var _styles=_interopRequireDefault(require("./styles"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}/* eslint-disable @typescript-eslint/ban-ts-comment */var ValidationCode=function ValidationCode(_ref){var intl=_ref.intl,onCloseClick=_ref.onCloseClick,isModal=_ref.isModal;var classes=(0,_styles["default"])({});var _useRenderSteps=(0,_renderSteps.useRenderSteps)(),renderNewStep=_useRenderSteps.renderNewStep,setPreviousStep=_useRenderSteps.setPreviousStep;var _useAuthAmplifyContex=(0,_AmplifyContext.useAuthAmplifyContext)(),authAmplify=_useAuthAmplifyContex.authAmplify,amplifyTempPwd=_useAuthAmplifyContex.amplifyTempPwd,amplifyPwd=_useAuthAmplifyContex.amplifyPwd;var _useUserData=(0,_UserContext2.useUserData)(),user=_useUserData.user;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),hasDoneProfileReq=_useState2[0],setHasDoneProfileReq=_useState2[1];var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var formRef=(0,_react.useRef)(null);var _useLoadingContext=(0,_LoadingContext.useLoadingContext)(),setLoading=_useLoadingContext.setLoading,loading=_useLoadingContext.loading;var _useToast=(0,_Toast.useToast)(),addToast=_useToast.addToast;var _useUserDataContext=(0,_UserContext.useUserDataContext)(),setUserIdToken=_useUserDataContext.setUserIdToken;var _useProfileContext=(0,_ProfileContext.useProfileContext)(),profileData=_useProfileContext.profileData,getProfileInformations=_useProfileContext.getProfileInformations;var errorWarningExpiredCodeTitle=intl.formatMessage({id:"ValidationCode.errorWarningExpiredCodeTitle"});var errorWarningExpiredCodeDescription=intl.formatMessage({id:"ValidationCode.errorWarningExpiredCodeDescription"});var errorWarningNetworkErrorTitle=intl.formatMessage({id:"ValidationCode.errorWarningNetworkErrorTitle"});var errorWarningNetworkErrorDescription=intl.formatMessage({id:"ValidationCode.errorWarningNetworkErrorDescription"});var toastDefaultErrorMessageTitle=intl.formatMessage({id:"ValidationCode.toastDefaultErrorMessageTitle"});var toastDefaultErrorMessageDescription=intl.formatMessage({id:"ValidationCode.toastDefaultErrorMessageDescription"});var _useGa=(0,_useGa2["default"])(),saveOnGa=_useGa.saveOnGa;var name=profileData.name,birthdate=profileData.birthdate,contact=profileData.contact,cpf=profileData.cpf;var requiredProfileInformations=(0,_react.useMemo)(function(){return!!name&&!!birthdate&&!!contact&&!!cpf},[birthdate,contact,cpf,name]);(0,_react.useEffect)(function(){if(hasDoneProfileReq){setHasDoneProfileReq(false);getProfileInformations();if(!requiredProfileInformations){renderNewStep("AlmostThere")}else if(isModal){if(onCloseClick){onCloseClick()}}else{if((0,_utils.getParam)("path")){window.location.href="".concat((0,_aws.Redirect)(ctx.hosts)).concat((0,_utils.getParam)("path"));return}window.location.href="".concat((0,_aws.Redirect)(ctx.hosts),"/mytravels/reservations")}setLoading(false)}},[hasDoneProfileReq]);var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(data){var _formRef$current2,_formRef$current3;var _formRef$current,schema,code,_siginRes$pool,siginRes,storagedData,i,key,_formRef$current4;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setPreviousStep("ValidationCode");_context.prev=1;saveOnGa({event:"login_event",category:"Account",action:"Validation code",label:"validade code"});(_formRef$current=formRef.current)===null||_formRef$current===void 0?void 0:_formRef$current.setErrors({});schema=Yup.object().shape({code:Yup.string().required(intl.formatMessage({id:"ValidationCode.errorMessage"}))});_context.next=7;return schema.validate(data,{abortEarly:false});case 7:code=data.code;setLoading(true);_context.prev=9;if(!(authAmplify==="confirmSignUp")){_context.next=37;break}_context.next=13;return _awsAmplify.Auth.confirmSignUp(user.email,code);case 13:saveOnGa({event:"login_event",category:"Account",action:"Registration",label:"registeredUser ok"});if(amplifyPwd){_context.next=18;break}renderNewStep("Password");_context.next=35;break;case 18:_context.next=20;return _awsAmplify.Auth.signIn(user.email,amplifyPwd);case 20:siginRes=_context.sent;storagedData=siginRes===null||siginRes===void 0?void 0:(_siginRes$pool=siginRes.pool)===null||_siginRes$pool===void 0?void 0:_siginRes$pool.storage;for(i=0;i<storagedData.length;i+=1){key=storagedData.key(i);if(key.startsWith("CognitoIdentityServiceProvider")&&key.endsWith("idToken")){setUserIdToken(storagedData.getItem(key))}}if(!(0,_utils.featureToggles)(ctx,"PROFILE")){_context.next=27;break}setHasDoneProfileReq(true);_context.next=35;break;case 27:if(!isModal){_context.next=31;break}if(onCloseClick){onCloseClick()}_context.next=35;break;case 31:if(!(0,_utils.getParam)("path")){_context.next=34;break}window.location.href="".concat((0,_aws.Redirect)(ctx.hosts)).concat((0,_utils.getParam)("path"));return _context.abrupt("return");case 34:window.location.href="".concat((0,_aws.Redirect)(ctx.hosts),"/mytravels/reservations");case 35:_context.next=40;break;case 37:_context.next=39;return _awsAmplify.Auth.forgotPasswordSubmit(user.email,code,amplifyTempPwd);case 39:renderNewStep("ChangePassword");case 40:saveOnGa({event:"login_event",category:"Account",action:"Validation code",label:"validateCode ok"});_context.next=57;break;case 43:_context.prev=43;_context.t0=_context["catch"](9);_context.t1=_context.t0.code;_context.next=_context.t1==="InvalidParameterException"?48:_context.t1==="NetworkError"?51:_context.t1==="CodeMismatchException"?53:55;break;case 48:(_formRef$current2=formRef.current)===null||_formRef$current2===void 0?void 0:_formRef$current2.setErrors({code:errorWarningExpiredCodeTitle});addToast({type:"error",title:errorWarningExpiredCodeTitle,description:errorWarningExpiredCodeDescription});return _context.abrupt("break",57);case 51:addToast({type:"error",title:errorWarningNetworkErrorTitle,description:errorWarningNetworkErrorDescription});return _context.abrupt("break",57);case 53:(_formRef$current3=formRef.current)===null||_formRef$current3===void 0?void 0:_formRef$current3.setErrors({code:"C\xF3digo inv\xE1lido."});return _context.abrupt("break",57);case 55:addToast({type:"error",title:toastDefaultErrorMessageTitle,description:toastDefaultErrorMessageDescription});return _context.abrupt("break",57);case 57:setLoading(false);_context.next=63;break;case 60:_context.prev=60;_context.t2=_context["catch"](1);if(_context.t2 instanceof Yup.ValidationError){(_formRef$current4=formRef.current)===null||_formRef$current4===void 0?void 0:_formRef$current4.setErrors((0,_getValidationErrors["default"])(_context.t2))}case 63:case"end":return _context.stop();}}},_callee,null,[[1,60],[9,43]])}));return function handleSubmit(_x){return _ref2.apply(this,arguments)}}();var handleCodeNonReceived=function handleCodeNonReceived(){saveOnGa({event:"login_event",category:"Account",action:"Validation code",label:"action :: non receipt recovery code"});renderNewStep("CodeNonReceived")};if(loading){return/*#__PURE__*/_react["default"].createElement(_Loading["default"],null)}return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_HeaderLogin["default"],{isModal:isModal,previousStep:"MainScreen"//  onCloseClick={onCloseClick}
}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.root},/*#__PURE__*/_react["default"].createElement(_Title["default"],{className:classes.title},(0,_translate["default"])({id:"ValidationCode.title"})),/*#__PURE__*/_react["default"].createElement(_SubTitle["default"],{className:classes.subTitle},(0,_translate["default"])({id:"ValidationCode.subTitle",value:{email:/*#__PURE__*/_react["default"].createElement("strong",null,user?user.email:"")}})),/*#__PURE__*/_react["default"].createElement(_Form["default"],{ref:formRef,handleSubmit:handleSubmit},/*#__PURE__*/_react["default"].createElement(_Input["default"],{type:"text",name:"code",placeholderText:(0,_translate["default"])({id:"ValidationCode.typeCodeText"})}),/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{type:"submit",text:intl.formatMessage({id:"ValidationCode.actionButton"})})),/*#__PURE__*/_react["default"].createElement(_Link["default"],{style:{textAlign:"center"},className:classes.link,onMouseDown:handleCodeNonReceived},/*#__PURE__*/_react["default"].createElement(_SubTitle["default"],{variant:"caption"},/*#__PURE__*/_react["default"].createElement("b",null,(0,_translate["default"])({id:"ValidationCode.linkNoCodeReceived"}))))),/*#__PURE__*/_react["default"].createElement(_Terms["default"],null))};var _default=(0,_reactIntl.injectIntl)(ValidationCode);exports["default"]=_default;
//# sourceMappingURL=index.js.map