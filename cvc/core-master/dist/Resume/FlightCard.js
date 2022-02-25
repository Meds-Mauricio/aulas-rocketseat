"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _Luggage=_interopRequireDefault(require("@cvccorp-components/icons/dist/Luggage"));var _Help=_interopRequireDefault(require("@cvccorp-components/icons/dist/Help"));var _Typography=_interopRequireDefault(require("../Typography"));var _Button=_interopRequireDefault(require("../Button"));var _LoadingContent=_interopRequireDefault(require("../LoadingContent"));var _AirportTag=_interopRequireDefault(require("../AirportTag"));var _Stops=_interopRequireDefault(require("../Stops"));var _Box=_interopRequireDefault(require("../Box"));var _styles=require("./styles");/* eslint-disable react/no-array-index-key */ /* eslint-disable no-unused-expressions */ /* eslint-disable radix */ /* eslint-disable no-nested-ternary */var FlightCard=function FlightCard(_ref){var classes=_ref.classes,onClick=_ref.onClick,legs=_ref.legs,isLoading=_ref.isLoading,origin=_ref.origin,destiny=_ref.destiny,pax=_ref.pax,onChangeFlights=_ref.onChangeFlights;var renderLoadingCard=function renderLoadingCard(){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:9},/*#__PURE__*/_react["default"].createElement("ul",{className:classes.legContainer},legs.map(function(item,i){var highlightIata=legs[0].departureIata===legs[legs.length-1].arrivalIata;return/*#__PURE__*/_react["default"].createElement("li",{className:classes.leg,key:i},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)," "),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:7},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),highlightIata?/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null):/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,align:"center"},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},item.luggage?/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null):/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:10},/*#__PURE__*/_react["default"].createElement("div",{className:classes.legFooter},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))))}))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.price,item:true,xs:12,lg:3},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,alignItems:"flex-end"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:5},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement("br",null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12,align:"center"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:8},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))))};var renderCardHeader=function renderCardHeader(item,i,name){return/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement("img",{className:classes.ciaLogo,src:"https://almundo-com-res.cloudinary.com/image/upload/global/logos/digital-air-companies/".concat(item&&item.issuerCia,".svg"),alt:item.cia}),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline6"},name)," ",/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.cia,type:"body2regular"},"(",item.cia,")"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.date,type:"body2regular"},item.date," - ",item["class"])))};var renderCardTime=function renderCardTime(item,highlightIata){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,justifyContent:"center"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},item.departure),/*#__PURE__*/_react["default"].createElement(_AirportTag["default"],{label:item.departureIata,color:"white"})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,lg:9,align:"center"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},item.duration,/*#__PURE__*/_react["default"].createElement(_Stops["default"],{className:classes.stopsIcon,qtd:item.stops}),item.stops>0?"".concat(item.stops," parada").concat(item.stops>1?"s":""):"direto")),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},item.arrival),/*#__PURE__*/_react["default"].createElement(_AirportTag["default"],{label:item.arrivalIata,color:"white"})))};var renderBaggageInfo=function renderBaggageInfo(item){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,item&&item.luggage&&item.luggage.checkedBaggageQuantity>0&&item.luggage.handBaggageQuantity>0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true,checkedBag:true}),"Bagagens Inclusas"),item&&item.luggage&&item.luggage.checkedBaggageQuantity===0&&item.luggage.handBaggageQuantity>0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true}),"Bagagem de m\xE3o"),item&&item.luggage&&item.luggage.checkedBaggageQuantity>0&&item.luggage.handBaggageQuantity===0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true}),"Bagagem de m\xE3o"),item&&item.luggage&&item.luggage.checkedBaggageQuantity===0&&item.luggage.handBaggageQuantity===0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true}),"Sem Bagagem"))};return/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:classes.root,onClick:onClick},!isLoading&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement("ul",{className:classes.legContainer},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.title,item:true,xs:12},/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline6"},origin," - ",destiny)),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2",style:{color:"#999999"}},pax," viajantes"))),legs.map(function(item,i){var name=legs.length<3?i===0?"Ida":"Volta":"Trecho ".concat(i+1);var highlightIata=legs[0].departureIata===legs[legs.length-1].arrivalIata;return/*#__PURE__*/_react["default"].createElement("li",{className:classes.leg},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,className:classes.spacing},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,sm:4},renderCardHeader(item,i,name)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,sm:6},renderCardTime(item,highlightIata)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,sm:2,className:classes.centerContent},/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.detailBtn,outline:true,label:"Detalhes da ".concat(name),variant:"text",onClick:function onClick(){return item.onDetail()}})),name==="Volta"&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{xs:12,lg:12,item:true,container:true,alignItems:"center",className:classes.paddingTop24},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,item:true,lg:6,xs:12},/*#__PURE__*/_react["default"].createElement("div",{className:classes.legFooter},renderBaggageInfo(item))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,item:true,xs:12,lg:name==="Volta"?6:12,justify:"flex-end"},/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btnChangeFlight,color:"secondary",label:"Alterar voo",variant:"contained",onClick:function onClick(){return onChangeFlights()}})))))})))),isLoading&&renderLoadingCard())};FlightCard.propTypes={classes:_propTypes["default"].object.isRequired,legs:_propTypes["default"].array.isRequired,onClick:_propTypes["default"].func,isLoading:_propTypes["default"].bool,origin:_propTypes["default"].string,destiny:_propTypes["default"].string};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(FlightCard);exports["default"]=_default;
//# sourceMappingURL=FlightCard.js.map