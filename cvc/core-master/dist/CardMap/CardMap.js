"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _react=_interopRequireDefault(require("react"));var _clsx=_interopRequireDefault(require("clsx"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _reactSlick=_interopRequireDefault(require("react-slick"));var _Meal=_interopRequireDefault(require("@cvccorp-components/icons/dist/Meal"));var _Favorite=_interopRequireDefault(require("@cvccorp-components/icons/dist/Favorite"));var _Tag=_interopRequireDefault(require("../Tag"));var _LoadingContent=_interopRequireDefault(require("../LoadingContent"));var _Typography=_interopRequireDefault(require("../Typography"));var _Box=_interopRequireDefault(require("../Box"));var _Stars=_interopRequireDefault(require("../Stars"));var _Price=_interopRequireDefault(require("../Price"));var _Image=_interopRequireDefault(require("../Image/Image"));var _styles=require("./styles");/* eslint-disable @typescript-eslint/no-empty-function */var fallbackImgUrl="https://res.cloudinary.com/cvc-corp/image/upload/v1613574585/img-not-found/img-not-found-results.png";var CardMap=function CardMap(_ref){var classes=_ref.classes,_onClick=_ref.onClick,isLoading=_ref.isLoading,imgs=_ref.imgs,notAvaliable=_ref.notAvaliable,meal=_ref.meal,onFav=_ref.onFav,isFavorite=_ref.isFavorite,title=_ref.title,stars=_ref.stars,product=_ref.product,totalPrice=_ref.totalPrice,oldPartialPrice=_ref.oldPartialPrice,partialPrice=_ref.partialPrice,totalPeople=_ref.totalPeople,totalDays=_ref.totalDays,className=_ref.className;return/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:(0,_clsx["default"])(classes.root,className)},!isLoading&&/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement("div",{className:classes.tagContainer},imgs&&/*#__PURE__*/_react["default"].createElement("div",{className:classes.imgContainer},/*#__PURE__*/_react["default"].createElement(_reactSlick["default"],{infinite:false,speed:500,slidesToShow:1,touchThreshold:100,arrows:true,dots:true},imgs.map(function(item,i){var fallbackImgs=(0,_toConsumableArray2["default"])(imgs);fallbackImgs.splice(i,1);return/*#__PURE__*/_react["default"].createElement("span",{className:classes.imgContainer,key:i,onClick:function onClick(){return _onClick()}},/*#__PURE__*/_react["default"].createElement(_Image["default"],{className:"".concat(notAvaliable&&classes.notAvaliableImg," ").concat(classes.img),src:item,alt:item.title,width:360,height:360,fallback:[].concat((0,_toConsumableArray2["default"])(fallbackImgs),[fallbackImgUrl])}))}))),meal&&!notAvaliable&&/*#__PURE__*/_react["default"].createElement(_Tag["default"],{className:imgs?classes.topTag:"",label:meal,icon:/*#__PURE__*/_react["default"].createElement(_Meal["default"],{className:classes.mealIcon}),color:"white"}),notAvaliable&&/*#__PURE__*/_react["default"].createElement("span",null,/*#__PURE__*/_react["default"].createElement(_Tag["default"],{className:imgs?classes.topTag:"",label:"Hotel indispon\xEDvel para estas datas",color:"white"})),onFav&&/*#__PURE__*/_react["default"].createElement(_Favorite["default"],{className:classes.fav,fill:isFavorite,size:"medium",onClick:onFav})),/*#__PURE__*/_react["default"].createElement("div",{className:classes.content,onClick:_onClick},/*#__PURE__*/_react["default"].createElement("div",{className:classes.info},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.title,type:"headline6"},title),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.subtitle,type:"body2regular"},stars&&/*#__PURE__*/_react["default"].createElement(_Stars["default"],{stars:stars,size:"smaller",className:classes.stars}))),/*#__PURE__*/_react["default"].createElement(_Price["default"],{className:classes.priceContainer,product:product,totalPrice:totalPrice,oldPartialPrice:oldPartialPrice,partialPrice:partialPrice,totalPeople:totalPeople,totalDays:totalDays}))),isLoading&&/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement("div",{className:classes.imgContainer},/*#__PURE__*/_react["default"].createElement("div",{className:classes.imgContainerPromoSmall},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],{absolute:true}))))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,className:classes.content,spacing:3},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))))};CardMap.defaultProps={imgs:[],isLoading:true,onClick:function onClick(){},subtitle:"",meal:undefined,notAvaliable:false,isFavorite:false,onFav:undefined,stars:0,className:{}};CardMap.propTypes={classes:_propTypes["default"].object.isRequired,product:_propTypes["default"].string.isRequired,imgs:_propTypes["default"].array,isLoading:_propTypes["default"].bool,onClick:_propTypes["default"].func,title:_propTypes["default"].string.isRequired,meal:_propTypes["default"].string,notAvaliable:_propTypes["default"].bool,isFavorite:_propTypes["default"].bool,onFav:_propTypes["default"].func,stars:_propTypes["default"].number,totalDays:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]),oldPartialPrice:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]),partialPrice:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,totalPrice:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,totalPeople:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,className:_propTypes["default"].object};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(CardMap);exports["default"]=_default;
//# sourceMappingURL=CardMap.js.map