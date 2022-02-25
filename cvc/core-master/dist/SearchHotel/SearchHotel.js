"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withStyles=_interopRequireDefault(require("@material-ui/core/styles/withStyles"));var _Grid=_interopRequireDefault(require("@material-ui/core/Grid"));var _icons=require("@cvccorp-components/icons");var _Typography=_interopRequireDefault(require("../Typography"));var _TextField=_interopRequireDefault(require("../TextField"));var _Button=_interopRequireDefault(require("../Button"));var _bgMotor=_interopRequireDefault(require("../assets/img/bg-motor.svg"));var _Hotel=_interopRequireDefault(require("../Pesqinc/Hotel"));var _FullCalendar=_interopRequireDefault(require("../Calendar/FullCalendar"));var _TopResume=_interopRequireDefault(require("../TopResume"));var _Container=_interopRequireDefault(require("../Container"));var _Hotel2=_interopRequireDefault(require("../Pax/Hotel"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap;var cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj}}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj)}return newObj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var styles=function styles(theme){var _researchContentWrapp;return{search:(0,_defineProperty2["default"])({background:theme.palette.primary.main,padding:"".concat(theme.spacing(3),"px ").concat(theme.spacing(3),"px")},theme.breakpoints.between("md","xl"),{background:"url(".concat(_bgMotor["default"],") no-repeat ").concat(theme.palette.primary.main," bottom"),padding:"".concat(theme.spacing(5),"px ").concat(theme.spacing(4),"px ").concat(theme.spacing(15),"px")}),research:(0,_defineProperty2["default"])({background:theme.palette.primary.main,color:theme.palette.white.main,padding:"".concat(theme.spacing(3),"px ").concat(theme.spacing(3),"px")},theme.breakpoints.between("md","xl"),{padding:"".concat(theme.spacing(2),"px ").concat(theme.spacing(3),"px")}),title:{color:theme.palette.white.main},btn:{margin:"".concat(theme.spacing(1),"px 0"),width:"100%"},container:{marginLeft:theme.spacing(-1),marginTop:theme.spacing(3),width:"calc(100% + ".concat(theme.spacing(2),"px)")},researchContainer:{marginLeft:theme.spacing(-1),width:"calc(100% + ".concat(theme.spacing(2),"px)")},grid:(0,_defineProperty2["default"])({},theme.breakpoints.between("md","xl"),{padding:"0 ".concat(theme.spacing(1),"px")}),researchCity:{color:theme.palette.white.main},researchAddress:{color:theme.palette.white.main},researchDate:(0,_defineProperty2["default"])({borderRight:"1px solid ".concat(theme.palette.white.alpha),color:theme.palette.white.main,paddingRight:theme.spacing(1)},theme.breakpoints.between("md","xl"),{borderLeft:"1px solid ".concat(theme.palette.white.alpha),margin:"0 ".concat(theme.spacing(1),"px 0 ").concat(theme.spacing(4),"px"),paddingLeft:theme.spacing(3)}),researchPax:(0,_defineProperty2["default"])({color:theme.palette.white.main,margin:"0 ".concat(theme.spacing(1),"px 0 0")},theme.breakpoints.between("md","xl"),{margin:"0 ".concat(theme.spacing(5),"px 0 ").concat(theme.spacing(1),"px")}),researchContent:{display:"inline-block"},researchContentWrapper:(_researchContentWrapp={},(0,_defineProperty2["default"])(_researchContentWrapp,theme.breakpoints.between("xs","md"),{}),(0,_defineProperty2["default"])(_researchContentWrapp,theme.breakpoints.between("md","xl"),{alignItems:"center",display:"flex"}),_researchContentWrapp),researchContentAddress:(0,_defineProperty2["default"])({display:"flex",flexDirection:"column"},theme.breakpoints.between("md","xl"),{margin:"0 ".concat(theme.spacing(1),"px")}),researchContentAddressContainer:(0,_defineProperty2["default"])({},theme.breakpoints.between("md","xl"),{display:"inline-block"}),researchContentAddressFull:(0,_defineProperty2["default"])({display:"flex"},theme.breakpoints.between("xs","md"),{marginBottom:theme.spacing(3)}),researchIcon:{marginLeft:theme.spacing(-0.5)},researchBtn:(0,_defineProperty2["default"])({},theme.breakpoints.between("xs","md"),{border:"none",paddingRight:0}),customTextPax:{"& > label":{transform:"translate(58px, 20px) scale(1)!important"}}}};var mockHistory=[{name:"Arraial do Cabo",arrival:"06 de jun",departure:"09 de jun"},{name:"Florian\xF3polis",arrival:"26 de mar",departure:" 28 de mar"},{name:"Hotel Majorelle Hostel",arrival:"26 de mar",departure:"28 de mar"}];var mockMostSearched=[{name:"Lisboa",price:"178"},{name:"Arraial do Cabo",price:"93"},{name:"Buenos Aires",price:"109"},{name:"Santiago",price:"143"},{name:"Porto de Galinhas",price:"143"}];var timerPesqinc=null;var sortFunc=function sortFunc(a,b){if(a.type!==b.type&&a.type==="location")return-1;if(a.type!==b.type&&b.type==="hotel")return 1;return 0};var SearchHotel=function SearchHotel(props){var classes=props.classes;var _useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2["default"])(_useState,2),search=_useState2[0],setSearch=_useState2[1];var _useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2["default"])(_useState3,2),historySearch=_useState4[0],setHistorySearch=_useState4[1];var _useState5=(0,_react.useState)([]),_useState6=(0,_slicedToArray2["default"])(_useState5,2),mostSearched=_useState6[0],setMostSearched=_useState6[1];var _useState7=(0,_react.useState)(""),_useState8=(0,_slicedToArray2["default"])(_useState7,2),value=_useState8[0],setValue=_useState8[1];var initialState=[{value:null,adults:1,children:0,ages:[]}];var _useState9=(0,_react.useState)(false),_useState10=(0,_slicedToArray2["default"])(_useState9,2),open=_useState10[0],setOpen=_useState10[1];var _useState11=(0,_react.useState)(initialState),_useState12=(0,_slicedToArray2["default"])(_useState11,2),fields=_useState12[0],setFields=_useState12[1];var _useState13=(0,_react.useState)({value:""}),_useState14=(0,_slicedToArray2["default"])(_useState13,2),valueTextField=_useState14[0],setTextField=_useState14[1];var getMostSearched=function getMostSearched(){return mockMostSearched};var getHistory=function getHistory(){return mockHistory};var getLocations=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(text){var searchText,payload,result;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(text){_context.next=2;break}return _context.abrupt("return",[]);case 2:searchText=text.replace(/ /g,"+");_context.next=5;return fetch("https://euhghjmvi6.execute-api.us-east-1.amazonaws.com/b2c_ti/locations?productType=HOT&q=".concat(searchText));case 5:payload=_context.sent;_context.next=8;return payload.json();case 8:result=_context.sent;return _context.abrupt("return",result.locations.map(function(item){var pos=item.description.indexOf(" -");var name=pos>-1?item.description.split(" -")[0]:item.description;return _objectSpread(_objectSpread({},item),{},{name:item.type==="HOTEL"?name:item.city,address:"".concat(item.state,", ").concat(item.country),type:item.type==="CITY"?"location":"hotel"})}));case 10:case"end":return _context.stop();}}},_callee)}));return function getLocations(_x){return _ref.apply(this,arguments)}}();(0,_react.useEffect)(function(){setHistorySearch(getHistory);setMostSearched(getMostSearched)},[]);var changeText=function changeText(text){if(timerPesqinc)clearTimeout(timerPesqinc);timerPesqinc=setTimeout(/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(){var result;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return getLocations(text);case 2:result=_context2.sent;setSearch(result.length>0?result.sort(sortFunc):[]);case 4:case"end":return _context2.stop();}}},_callee2)})),500)};var handlePesqinc=function handlePesqinc(e){setValue(e.target.value);changeText(e.target.value)};var handleSelect=function handleSelect(item,selectedIndex){setValue(item.name)};var handleOpen=function handleOpen(){if(typeof window!=="undefined"){if(props.isMobile){document.body.classList.add("stop-scroll")}}};var handleClose=function handleClose(){if(typeof window!=="undefined"){if(props.isMobile){document.body.classList.remove("stop-scroll")}}};var handleOpenPax=function handleOpenPax(){// console.log("handleOpenPax");
setOpen(!open)};var handleClosePax=function handleClosePax(){setOpen(false)};var handleChange=function handleChange(value){setTextField({value:value});setOpen(false)};var handleAdd=function handleAdd(){var values=(0,_toConsumableArray2["default"])(fields);values.push(initialState[0]);setFields(values)};var handleRemove=function handleRemove(i){var values=(0,_toConsumableArray2["default"])(fields);values.splice(i,1);setFields(values)};var handleRemoveRoom=function handleRemoveRoom(){var values=(0,_toConsumableArray2["default"])(fields);values.pop();setFields(values)};var handleAdults=function handleAdults(idx,adult){var adults=(0,_toConsumableArray2["default"])(fields);adults[idx].adults=adult;setFields(adults)};var handleAddChildren=function handleAddChildren(fieldIdx,child){var children=(0,_toConsumableArray2["default"])(fields);children[fieldIdx].children=child;children[fieldIdx].ages.push({value:0});setFields(children)};var handleRemoveChildren=function handleRemoveChildren(fieldIdx,child){var children=(0,_toConsumableArray2["default"])(fields);children[fieldIdx].children=child;children[fieldIdx].ages.pop();setFields(children)};var handleChildAge=function handleChildAge(fieldIdx,ageIdx,e){var childAge=(0,_toConsumableArray2["default"])(fields);childAge[fieldIdx].ages[ageIdx].value=e.target.value;setFields(childAge)};var handleClear=function handleClear(){setFields(initialState);setTextField({value:""})};var handleReset=function handleReset(){setValue("");changeText("")};return/*#__PURE__*/_react["default"].createElement("div",{className:props.research?classes.research:classes.search},/*#__PURE__*/_react["default"].createElement(_Container["default"],null,!props.research&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,lg:5,sm:12},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:props.isMobile?"headline2":"headline5",className:classes.title},"Ol\xE1, confira os melhores hot\xE9is para seu conforto"))),(props.researchActive||!props.research)&&/*#__PURE__*/_react["default"].createElement(_Grid["default"],{container:true,className:props.research?classes.researchContainer:classes.container},/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,lg:4,xs:12,className:classes.grid},/*#__PURE__*/_react["default"].createElement(_Hotel["default"],{search:search,onChange:handlePesqinc,onSelect:handleSelect,isMobile:props.isMobile,history:historySearch,mostSearched:mostSearched,value:value,transparent:true,resetValue:handleReset})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,lg:3,xs:12,className:classes.grid},/*#__PURE__*/_react["default"].createElement(_FullCalendar["default"],{onDatesChange:function onDatesChange(dates){},isMobile:props.isMobile,error:false,errorMsg:null,onOpen:handleOpen,onClose:handleClose})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,lg:3,xs:12,className:classes.grid},/*#__PURE__*/_react["default"].createElement(_Hotel2["default"],{className:classes,isMobile:false,initialState:initialState,open:open,fields:fields,onClick:handleOpenPax,handleClose:handleClosePax,handleAdd:handleAdd,handleRemove:handleRemove,handleRemoveRoom:handleRemoveRoom,handleAdults:handleAdults,handleAddChildren:handleAddChildren,handleRemoveChildren:handleRemoveChildren,handleChildAge:handleChildAge,handleChange:handleChange,valueTextField:valueTextField.value,handleClear:handleClear,error:false,errorMsg:""})),/*#__PURE__*/_react["default"].createElement(_Grid["default"],{item:true,lg:2,xs:12,className:classes.grid},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"secondary",label:"Buscar hot\xE9is",variant:"contained",size:"large",className:classes.btn,name:"Nome"}))),!props.researchActive&&props.research&&/*#__PURE__*/_react["default"].createElement(_TopResume["default"],{destination:props.destination,withModal:props.withModal})))};SearchHotel.defaultProps={isMobile:false};SearchHotel.propTypes={classes:_propTypes["default"].object.isRequired,research:_propTypes["default"].bool,researchActive:_propTypes["default"].bool,withModal:_propTypes["default"].bool,destination:_propTypes["default"].array,isMobile:_propTypes["default"].bool};var _default=(0,_withStyles["default"])(styles,{withTheme:true})(SearchHotel);exports["default"]=_default;
//# sourceMappingURL=SearchHotel.js.map