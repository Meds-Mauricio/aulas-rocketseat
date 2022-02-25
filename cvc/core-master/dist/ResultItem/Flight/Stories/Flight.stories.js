"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _styles=require("@material-ui/core/styles");var _Typography=_interopRequireDefault(require("@material-ui/core/Typography"));var _react2=require("@storybook/react");var _themes=_interopRequireDefault(require("../../../Theme/themes"));var _Flight=_interopRequireDefault(require("../Flight"));/* eslint-disable @typescript-eslint/no-empty-function */var useStyles=(0,_styles.makeStyles)(function(theme){return{root:{background:theme.palette.background["default"],boxShadow:theme.shadows[8],padding:"30px"},darkBg:{background:"rgba(0, 0, 0, 0.6)",boxShadow:theme.shadows[8],padding:"30px"}}});var FlightStory=function FlightStory(_ref){var mode=_ref.mode,brand=_ref.brand,totalPrice=_ref.totalPrice,taxesIncluded=_ref.taxesIncluded,parcel=_ref.parcel,parcelPrice=_ref.parcelPrice;var classes=useStyles(_themes["default"][brand]);return/*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider,{theme:_themes["default"][brand]},/*#__PURE__*/_react["default"].createElement(_core.Paper,{className:classes[mode],id:"Flight"},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{variant:"h3"},"Flight"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_core.Divider,null),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement(_Flight["default"],{outwardFlights:[{id:"1",cia:"latam",date:"qui, 10 de out",classFlight:"Classe Executiva",departure:"22:40",departureIata:"GRU",arrival:"00:50",arrivalIata:"BCN",luggage:{handBaggageQuantity:0,checkedBaggageQuantity:0},stops:1,duration:"1h 10min",issuerCia:"JJ",flights:[{arrivalAirport:"GRU",arrivalAirportDescription:"Guarulhos, S\xE3o Paulo",arrivalDateTime:"2020-04-17T20:00:00",baggageInfo:{checkedBaggageQuantity:0,checkedBaggageWeight:0,handBaggageQuantity:1,handBaggageWeight:10},cabin:"Economica",ciaCode:"LA",ciaName:"Latam",departureAirport:"SSA",departureAirportDescription:"Deputado Luiz Eduardo Magalh\xE3es, Salvador",departureDateTime:"2020-04-17T10:50:00",fareBasis:null,flightNumber:"3495",minutesDuration:140,numberOfStops:0,stops:[]},{arrivalAirport:"GRU",arrivalAirportDescription:"Guarulhos, S\xE3o Paulo",arrivalDateTime:"2020-04-17T16:15:00",baggageInfo:{checkedBaggageQuantity:0,checkedBaggageWeight:0,handBaggageQuantity:1,handBaggageWeight:10},cabin:"Economica",ciaCode:"LA",ciaName:"Latam",departureAirport:"SSA",departureAirportDescription:"Deputado Luiz Eduardo Magalh\xE3es, Salvador",departureDateTime:"2020-04-17T13:55:00",fareBasis:null,flightNumber:"3495",minutesDuration:140,numberOfStops:0,stops:[]}]},{id:"3",cia:"latam",date:"qui, 10 de out",classFlight:"Classe Executiva",departure:"20:40",departureIata:"GRU",arrival:"12:50",arrivalIata:"BCN",luggage:{handBaggageQuantity:0,checkedBaggageQuantity:0},stops:1,duration:"1h 10min",issuerCia:"JJ",flights:[{arrivalAirport:"GRU",arrivalAirportDescription:"Guarulhos, S\xE3o Paulo",arrivalDateTime:"2020-04-17T16:15:00",baggageInfo:{checkedBaggageQuantity:0,checkedBaggageWeight:0,handBaggageQuantity:1,handBaggageWeight:10},cabin:"Economica",ciaCode:"LA",ciaName:"Latam",departureAirport:"SSA",departureAirportDescription:"Deputado Luiz Eduardo Magalh\xE3es, Salvador",departureDateTime:"2020-04-17T13:55:00",fareBasis:null,flightNumber:"3495",minutesDuration:140,numberOfStops:0,stops:[]},{arrivalAirport:"GRU",arrivalAirportDescription:"Guarulhos, S\xE3o Paulo",arrivalDateTime:"2020-04-17T16:15:00",baggageInfo:{checkedBaggageQuantity:0,checkedBaggageWeight:0,handBaggageQuantity:1,handBaggageWeight:10},cabin:"Economica",ciaCode:"LA",ciaName:"Latam",departureAirport:"SSA",departureAirportDescription:"Deputado Luiz Eduardo Magalh\xE3es, Salvador",departureDateTime:"2020-04-17T13:55:00",fareBasis:null,flightNumber:"3495",minutesDuration:140,numberOfStops:0,stops:[]}]}],backFlights:[{id:"2",cia:"latam",date:"qui, 10 de out",classFlight:"Classe Executiva",departure:"22:40",departureIata:"GRU",arrival:"00:50",arrivalIata:"BCN",luggage:{handBaggageQuantity:0,checkedBaggageQuantity:0},stops:1,duration:"1h 10min",issuerCia:"JJ",flights:[{arrivalAirport:"GRU",arrivalAirportDescription:"Guarulhos, S\xE3o Paulo",arrivalDateTime:"2020-04-17T16:15:00",baggageInfo:{checkedBaggageQuantity:0,checkedBaggageWeight:0,handBaggageQuantity:1,handBaggageWeight:10},cabin:"Economica",ciaCode:"LA",ciaName:"Latam",departureAirport:"SSA",departureAirportDescription:"Deputado Luiz Eduardo Magalh\xE3es, Salvador",departureDateTime:"2020-04-17T13:55:00",fareBasis:null,flightNumber:"3495",minutesDuration:140,numberOfStops:0,stops:[]}]}],pax:"2",totalPrice:totalPrice,onBuy:function onBuy(){},taxesIncluded:taxesIncluded,parcel:parcel,parcelPrice:parcelPrice,mathSignDiff:"+",peopleLabel:"viajante",selected:true})))};var argsControls={args:{brand:"CVC",mode:"root",totalPrice:"1.246",taxesIncluded:true,parcel:"12",parcelPrice:"200,00"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]},mode:{type:"select",options:["root","darkBg"]},totalPrice:{type:"string"},taxesIncluded:{type:"boolean"},parcel:{type:"string"},parcelPrice:{type:"string"}}};(0,_react2.storiesOf)("Components/ResultItem/Flight",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(FlightStory,args)},argsControls);
//# sourceMappingURL=Flight.stories.js.map