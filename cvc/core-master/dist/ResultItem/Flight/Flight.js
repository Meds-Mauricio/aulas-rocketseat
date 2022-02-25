"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _icons=require("@cvccorp-components/icons");var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _Luggage=_interopRequireDefault(require("@cvccorp-components/icons/dist/Luggage"));var _Help=_interopRequireDefault(require("@cvccorp-components/icons/dist/Help"));var _core=require("@material-ui/core");var _Typography=_interopRequireDefault(require("../../Typography"));var _Tooltip=_interopRequireDefault(require("../../Tooltip"));var _Button=_interopRequireDefault(require("../../Button"));var _LoadingContent=_interopRequireDefault(require("../../LoadingContent"));var _AirportTag=_interopRequireDefault(require("../../AirportTag"));var _Stops=_interopRequireDefault(require("../../Stops"));var _Box=_interopRequireDefault(require("../../Box"));var _styles=require("./styles");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}/* eslint-disable react/no-array-index-key */ /* eslint-disable no-unused-expressions */ /* eslint-disable radix */ /* eslint-disable no-nested-ternary */var AirportTagCustom=function AirportTagCustom(props){var classes=props.classes,iata=props.iata,isHighlight=props.isHighlight,isMobile=props.isMobile,showDiffAirport=props.showDiffAirport;if(isHighlight)return isMobile?/*#__PURE__*/_react["default"].createElement("span",{onClick:showDiffAirport},/*#__PURE__*/_react["default"].createElement(_AirportTag["default"],{label:iata,icon:/*#__PURE__*/_react["default"].createElement(_Help["default"],null),color:"spot"})):/*#__PURE__*/_react["default"].createElement(_Tooltip["default"],{className:classes.tooltip,label:"Aeroporto de ida diferente do aeroporto de volta"},/*#__PURE__*/_react["default"].createElement(_AirportTag["default"],{label:iata,icon:/*#__PURE__*/_react["default"].createElement(_Help["default"],null),color:"spot"}));return/*#__PURE__*/_react["default"].createElement(_AirportTag["default"],{label:iata,color:"white"})};var FlightItem=function FlightItem(_ref){var classes=_ref.classes,id=_ref.id,onClick=_ref.onClick,outwardFlights=_ref.outwardFlights,backFlights=_ref.backFlights,pax=_ref.pax,pricePerAdult=_ref.pricePerAdult,mathSignDiff=_ref.mathSignDiff,taxesIncluded=_ref.taxesIncluded,parcel=_ref.parcel,parcelPrice=_ref.parcelPrice,peopleLabel=_ref.peopleLabel,isLoading=_ref.isLoading,isMobile=_ref.isMobile,onSelectedSegment=_ref.onSelectedSegment,onDetails=_ref.onDetails,onBuy=_ref.onBuy,selected=_ref.selected,totalPrice=_ref.totalPrice,showDiffAirport=_ref.showDiffAirport;var _useState=(0,_react.useState)(outwardFlights&&outwardFlights[0]),_useState2=(0,_slicedToArray2["default"])(_useState,2),outwardSegmet=_useState2[0],setOutwardSegmet=_useState2[1];var _useState3=(0,_react.useState)(backFlights&&backFlights[0]),_useState4=(0,_slicedToArray2["default"])(_useState3,2),backSegmet=_useState4[0],setBackSegmet=_useState4[1];var _useState5=(0,_react.useState)(false),_useState6=(0,_slicedToArray2["default"])(_useState5,2),changeFlight=_useState6[0],setChangeFlight=_useState6[1];var _useState7=(0,_react.useState)(null),_useState8=(0,_slicedToArray2["default"])(_useState7,2),idx=_useState8[0],setIdx=_useState8[1];var _useState9=(0,_react.useState)(false),_useState10=(0,_slicedToArray2["default"])(_useState9,2),showModal=_useState10[0],setShowModal=_useState10[1];var renderLoadingCard=function renderLoadingCard(){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:9},/*#__PURE__*/_react["default"].createElement("ul",{className:classes.legContainer},/*#__PURE__*/_react["default"].createElement("li",{className:classes.leg},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)," "),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:7},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,align:"center"},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:10},/*#__PURE__*/_react["default"].createElement("div",{className:classes.legFooter},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))))),/*#__PURE__*/_react["default"].createElement("li",{className:classes.leg},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)," "),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:7},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:6},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:10},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,align:"center"},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null),/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:10},/*#__PURE__*/_react["default"].createElement("div",{className:classes.legFooter},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)))))))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.price,item:true,xs:12,lg:3},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,alignItems:"flex-end"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:5},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:3},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:4},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement("br",null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12,align:"center"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:8},/*#__PURE__*/_react["default"].createElement(_LoadingContent["default"],null))))))};var renderBaggageInfo=function renderBaggageInfo(_ref2){var luggage=_ref2.luggage;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,luggage&&luggage.checkedBaggageQuantity>0&&luggage.handBaggageQuantity>0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true,checkedBag:true}),"Bagagens Inclusas"),luggage&&luggage.checkedBaggageQuantity===0&&luggage.handBaggageQuantity>0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true}),"Bagagem",/*#__PURE__*/_react["default"].createElement("br",null),"de m\xE3o"),luggage&&luggage.checkedBaggageQuantity>0&&luggage.handBaggageQuantity===0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true,handBag:true}),"Bagagem",/*#__PURE__*/_react["default"].createElement("br",null),"de m\xE3o"),luggage&&luggage.checkedBaggageQuantity===0&&luggage.handBaggageQuantity===0&&/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},/*#__PURE__*/_react["default"].createElement(_Luggage["default"],{className:classes.luggage,size:"medium",carryOn:true}),/*#__PURE__*/_react["default"].createElement("br",null),"Sem",/*#__PURE__*/_react["default"].createElement("br",null),"Bagagem"))};var renderCardHeader=function renderCardHeader(_ref3,selectedIndex){var cia=_ref3.cia,issuerCia=_ref3.issuerCia,date=_ref3.date,classFlight=_ref3.classFlight;var newName=selectedIndex===0?"Ida":"Volta";return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:changeFlight&&idx===selectedIndex?4:5},/*#__PURE__*/_react["default"].createElement("header",{className:classes.header},/*#__PURE__*/_react["default"].createElement("img",{className:classes.ciaLogo,src:"https://almundo-com-res.cloudinary.com/image/upload/global/logos/digital-air-companies/".concat(issuerCia,".svg"),alt:cia}),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline6"},newName)," ",/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.cia,type:"body2regular"},"(",cia,")"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.date,type:"body2regular"},date," - ",classFlight))))};var renderCardPrice=function renderCardPrice(dataCallback){return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,alignItems:"flex-end"},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold"},mathSignDiff," R$"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline3"},pricePerAdult),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2"}," / Adulto"),/*#__PURE__*/_react["default"].createElement("span",{style:{display:"flex",alignItems:"baseline"}},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.priceLabel,type:"captionregular"},"".concat(pax," ").concat(peopleLabel).concat(pax>1?"s":"")),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold",className:classes.priceTotalPackage},totalPrice)),/*#__PURE__*/_react["default"].createElement("br",null)),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:6,lg:12,align:"center"},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",label:selected?"Escolhido":"Escolher",variant:selected?"outlined":"contained",fullWidth:true,onClick:function onClick(){return onBuy?onBuy(dataCallback):null}}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},taxesIncluded?"Taxas inclusas |":"Taxas n\xE3o inclusas |")," ",/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold"},"Em at\xE9 ",parcel,"x",parcelPrice&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"de ",/*#__PURE__*/_react["default"].createElement("span",{className:classes.orangeColor},"R$ ",parcelPrice)))))};var renderCardTime=function renderCardTime(_ref4,highlightIata,selectedIndex){var departure=_ref4.departure,departureIata=_ref4.departureIata,duration=_ref4.duration,stops=_ref4.stops,arrival=_ref4.arrival,arrivalIata=_ref4.arrivalIata;return/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},departure),/*#__PURE__*/_react["default"].createElement(AirportTagCustom,{classes:classes,iata:departureIata,isHighlight:highlightIata&&selectedIndex===0,isMobile:isMobile,showDiffAirport:showDiffAirport})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,lg:8,align:"center"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},duration,/*#__PURE__*/_react["default"].createElement(_Stops["default"],{className:classes.stopsIcon,qtd:stops}),stops>0?"".concat(stops," parada").concat(stops>1?"s":""):"direto")),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},arrival),/*#__PURE__*/_react["default"].createElement(AirportTagCustom,{classes:classes,iata:arrivalIata,isHighlight:highlightIata&&selectedIndex===1,isMobile:isMobile,showDiffAirport:showDiffAirport})))};var renderModalMobile=function renderModalMobile(item){return/*#__PURE__*/_react["default"].createElement("div",{className:classes.modal},/*#__PURE__*/_react["default"].createElement("div",{className:classes.scroll},/*#__PURE__*/_react["default"].createElement("div",{className:classes.close,onClick:function onClick(){return setShowModal(false)}},/*#__PURE__*/_react["default"].createElement(_icons.Close,null),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2semibold",style:{paddingLeft:"10px"}},"Outros hor\xE1rios do voo")),item))};var moreFlights=function moreFlights(segment,highlightIata,checked,selectedIndex){return segment&&segment.flights&&!!segment.flights.length&&segment.flights.slice(0,1).map(function(flight,index){return flight&&flight.departureDateTime&&flight.arrivalDateTime&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,className:classes.noWrap,key:index},/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_core.FormControlLabel,{style:{margin:0},value:flight,control:/*#__PURE__*/_react["default"].createElement(_core.Radio,{classes:{root:classes.radio,checked:classes.checked},checked:checked,onClick:function onClick(){if(onSelectedSegment)onSelectedSegment(segment,selectedIndex);selectedIndex===0?setOutwardSegmet(segment):setBackSegmet(segment);setIdx(selectedIndex);setTimeout(function(){setChangeFlight(false);setShowModal(false)},400)}})}),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},flight.departureDateTime.split("T")[1].split(":")[0],":",flight.departureDateTime.split(":")[1]),/*#__PURE__*/_react["default"].createElement(AirportTagCustom,{classes:classes,iata:segment.departureIata,isHighlight:highlightIata&&selectedIndex===0,isMobile:isMobile,showDiffAirport:showDiffAirport})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.stops,item:true,xs:5,lg:8,align:"center"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionregular"},segment.duration,/*#__PURE__*/_react["default"].createElement(_Stops["default"],{className:classes.stopsIcon,qtd:segment.stops}),segment.stops>0?"".concat(segment.stops," parada").concat(segment.stops>1?"s":""):"direto")),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{className:classes.airport,type:"headline4"},flight.arrivalDateTime.split("T")[1].split(":")[0],":",flight.arrivalDateTime.split(":")[1]),/*#__PURE__*/_react["default"].createElement(AirportTagCustom,{classes:classes,iata:segment.arrivalIata,isHighlight:highlightIata&&selectedIndex===1,isMobile:isMobile,showDiffAirport:showDiffAirport}))))})};var renderSegment=function renderSegment(segment,segmentList,selectedIndex,highlightIata){return/*#__PURE__*/_react["default"].createElement("li",{className:classes.leg,key:selectedIndex},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},renderCardHeader(segment,selectedIndex),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:changeFlight&&idx===selectedIndex?8:7},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:9},!changeFlight&&idx!==selectedIndex||changeFlight&&idx!==selectedIndex||!changeFlight&&idx===selectedIndex?renderCardTime(segment,highlightIata,selectedIndex):changeFlight&&idx===selectedIndex&&segmentList&&!!segmentList.length&&!isMobile&&segmentList.map(function(data){return moreFlights(data,false,segment.id===data.id,selectedIndex)}),idx===selectedIndex&&segmentList&&!!segmentList.length&&isMobile&&showModal&&renderModalMobile(segmentList.map(function(data){return moreFlights(data,false,segment.id===data.id,selectedIndex)}))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:1}),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:2,className:classes.centerContent},renderBaggageInfo(segment)))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:12},/*#__PURE__*/_react["default"].createElement("div",{className:classes.legFooter},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:0,md:0,lg:5}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.changeTime,color:"primary",label:changeFlight&&idx===selectedIndex?"Manter hor\xE1rio selecionado":"Escolher outro hor\xE1rio",variant:"outlined",size:"small",fullWidth:true// eslint-disable-next-line no-unused-expressions
,onClick:function onClick(){setShowModal(true);setIdx(selectedIndex);setChangeFlight(!changeFlight)},disabled:false}),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:0,md:0,lg:7}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.detailBtn,outline:true,label:selectedIndex===0?"Detalhes da ida":"Detalhes da volta",variant:"text",onClick:function onClick(){return onDetails?onDetails(segment,selectedIndex):null}}),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:0,md:0,lg:1})))))};var highlightSelectedIata=outwardSegmet&&backSegmet&&outwardSegmet.departureIata!==backSegmet.arrivalIata;return/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:classes.root,onClick:onClick,key:id},!isLoading&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,xs:12,lg:9},/*#__PURE__*/_react["default"].createElement("ul",{className:classes.legContainer},!isLoading&&renderSegment(outwardSegmet,outwardFlights,0,highlightSelectedIata),!isLoading&&renderSegment(backSegmet,backFlights,1,highlightSelectedIata))),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{className:classes.price,item:true,xs:12,lg:3},renderCardPrice({outwardSegmet:outwardSegmet,backSegmet:backSegmet}))),isLoading&&renderLoadingCard())};FlightItem.propTypes={classes:_propTypes["default"].object.isRequired,pax:_propTypes["default"].string,taxesIncluded:_propTypes["default"].bool,parcel:_propTypes["default"].string,onClick:_propTypes["default"].func,onBuy:_propTypes["default"].func,onDetails:_propTypes["default"].func,isLoading:_propTypes["default"].bool};var _default=(0,_withStyles["default"])(_styles.styles,{withTheme:true})(FlightItem);exports["default"]=_default;
//# sourceMappingURL=Flight.js.map