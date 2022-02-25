"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _react=_interopRequireWildcard(require("react"));var _core=require("@material-ui/core");var _reactIntl=require("react-intl");var Yup=_interopRequireWildcard(require("yup"));var _BrandContext=require("../../../BrandContext");var _ProfileContext=require("../../../ProfileContext");var _CognitoIdTokenUpdate=_interopRequireDefault(require("../../../UserArea/CognitoIdTokenUpdate"));var _useGa2=_interopRequireDefault(require("../../../utils/useGa"));var _AmplifyContext=require("../../contexts/AmplifyContext");var _LoadingContext=require("../../contexts/LoadingContext");var _renderSteps=require("../../contexts/renderSteps");var _Toast=require("../../contexts/Toast");var _BtnsSocialLogin=_interopRequireDefault(require("../../shared/components/BtnsSocialLogin"));var _Form=_interopRequireDefault(require("../../shared/components/Form"));var _HeaderLogin=_interopRequireDefault(require("../../shared/components/HeaderLogin"));var _Input=_interopRequireDefault(require("../../shared/components/Input"));var _InternalButton=_interopRequireDefault(require("../../shared/components/InternalButton"));var _Loading=_interopRequireDefault(require("../../shared/components/Loading"));var _SubTitle=_interopRequireDefault(require("../../shared/components/SubTitle"));var _Terms=_interopRequireDefault(require("../../shared/components/Terms"));var _Title=_interopRequireDefault(require("../../shared/components/Title"));var _UserContext=require("../../shared/hooks/UserContext");var _translate=_interopRequireDefault(require("../../shared/i18n/translate"));var _api=_interopRequireDefault(require("../../shared/services/api"));var _getValidationErrors=_interopRequireDefault(require("../../shared/utils/getValidationErrors"));var _styles=_interopRequireDefault(require("./styles"));var _utils=require("./utils");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}var MainScreen=function MainScreen(_ref){var intl=_ref.intl,onCloseClick=_ref.onCloseClick,isModal=_ref.isModal;var placeHolderEmail=(0,_translate["default"])({id:"MainScreen.placeholderEmail"});var placeHolderErrorEmail=intl.formatMessage({id:"MainScreen.placeHolderErrorEmail"});var placeHolderEmailRequired=intl.formatMessage({id:"MainScreen.placeHolderEmailRequired"});var errorWarningTitle=intl.formatMessage({id:"MainScreen.errorWarningTitle"});var errorWarningDescription=intl.formatMessage({id:"MainScreen.errorWarningDescription"});var formRef=(0,_react.useRef)(null);var _useGa=(0,_useGa2["default"])(),saveOnGa=_useGa.saveOnGa;var _useRenderSteps=(0,_renderSteps.useRenderSteps)(),renderNewStep=_useRenderSteps.renderNewStep,setPreviousStep=_useRenderSteps.setPreviousStep;var _useAuthAmplifyContex=(0,_AmplifyContext.useAuthAmplifyContext)(),setAuthAmplify=_useAuthAmplifyContex.setAuthAmplify;var _useUserData=(0,_UserContext.useUserData)(),setUser=_useUserData.setUser;var _useLoadingContext=(0,_LoadingContext.useLoadingContext)(),setLoading=_useLoadingContext.setLoading,loading=_useLoadingContext.loading;var ctx=(0,_react.useContext)(_BrandContext.BrandContext);var _useToast=(0,_Toast.useToast)(),addToast=_useToast.addToast;var classes=(0,_styles["default"])({});var _useCognitoIdTokenUpd=(0,_CognitoIdTokenUpdate["default"])(),deleteCognitoServiceProvider=_useCognitoIdTokenUpd.deleteCognitoServiceProvider;var _useProfileContext=(0,_ProfileContext.useProfileContext)(),setProfileData=_useProfileContext.setProfileData;(0,_react.useEffect)(function(){deleteCognitoServiceProvider();setProfileData({})},[]);var submitForm=(0,_react.useCallback)(/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(formData){var _formRef$current,schema,response,email,user,_formRef$current2;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;(_formRef$current=formRef.current)===null||_formRef$current===void 0?void 0:_formRef$current.setErrors({});schema=Yup.object().shape({email:Yup.string().email(placeHolderErrorEmail).required(placeHolderEmailRequired)});_context.next=5;return schema.validate(formData,{abortEarly:false});case 5:saveOnGa({event:"login_event",category:"Account",action:"Form Login",label:"login :: email"});setUser(formData);setLoading(true);_context.prev=8;email=encodeURIComponent(formData.email);_context.next=12;return _api["default"].get("/apigw/authentication/".concat(ctx.brand,"/user-exists?email=").concat(email));case 12:response=_context.sent;user=(0,_utils.usersInProvider)(response.data.found);setPreviousStep("MainScreen");if(user!==null&&user!==void 0&&user.nextStep){if(!user.emailConfirmed){setAuthAmplify("confirmSignUp")}renderNewStep(user.nextStep)}else{renderNewStep("ConfirmMainScreen")}_context.next=22;break;case 18:_context.prev=18;_context.t0=_context["catch"](8);saveOnGa({event:"fluxo_de_cadastro",category:"Account",action:"Registration",label:"alert :: email validation"});addToast({type:"error",title:errorWarningTitle,description:errorWarningDescription});case 22:setLoading(false);_context.next=28;break;case 25:_context.prev=25;_context.t1=_context["catch"](0);if(_context.t1 instanceof Yup.ValidationError){(_formRef$current2=formRef.current)===null||_formRef$current2===void 0?void 0:_formRef$current2.setErrors((0,_getValidationErrors["default"])(_context.t1))}case 28:case"end":return _context.stop();}}},_callee,null,[[0,25],[8,18]])}));return function(_x){return _ref2.apply(this,arguments)}}(),[addToast,ctx.brand,errorWarningDescription,errorWarningTitle,placeHolderEmailRequired,placeHolderErrorEmail,renderNewStep,setAuthAmplify,setLoading,setUser]);return loading?/*#__PURE__*/_react["default"].createElement(_Loading["default"],null):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_HeaderLogin["default"],{isModal:isModal,previousStep:"MainScreen",onCloseClick:onCloseClick}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.root},/*#__PURE__*/_react["default"].createElement(_Form["default"],{ref:formRef,handleSubmit:submitForm},/*#__PURE__*/_react["default"].createElement(_Title["default"],null,(0,_translate["default"])({id:"MainScreen.title"})),/*#__PURE__*/_react["default"].createElement(_SubTitle["default"],null,(0,_translate["default"])({id:"MainScreen.subtitle"})),/*#__PURE__*/_react["default"].createElement("div",{className:classes.inputWrapper},/*#__PURE__*/_react["default"].createElement(_Input["default"],{name:"email",placeholderText:placeHolderEmail})),/*#__PURE__*/_react["default"].createElement(_InternalButton["default"],{type:"submit",text:(0,_translate["default"])({id:"MainScreen.btnLogin"})}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.orSeparateWrapper},/*#__PURE__*/_react["default"].createElement(_core.Typography,{variant:"caption",className:classes.orSeparate},"ou")),/*#__PURE__*/_react["default"].createElement(_BtnsSocialLogin["default"],null))),/*#__PURE__*/_react["default"].createElement(_Terms["default"],null))};var _default=(0,_reactIntl.injectIntl)(MainScreen);exports["default"]=_default;
//# sourceMappingURL=index.js.map