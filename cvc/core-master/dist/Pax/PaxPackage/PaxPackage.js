"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _styles=require("@material-ui/core/styles");var _clsx=_interopRequireDefault(require("clsx"));var _icons=require("@cvccorp-components/icons");var _Select=_interopRequireDefault(require("../../Select"));var _TextField=_interopRequireDefault(require("../../TextField"));var _Typography=_interopRequireDefault(require("../../Typography"));var _Button=_interopRequireDefault(require("../../Button"));var _Box=_interopRequireDefault(require("../../Box"));var _FilterChip=_interopRequireDefault(require("../../FilterChip"));var _Checkbox=_interopRequireDefault(require("../../Checkbox"));var _Overlay=_interopRequireDefault(require("../../Overlay"));var _styles2=require("../styles");var _options=require("./options");//  COMPONENTS
//  STYLES
//  OPTIONS
var PaxPackage=function PaxPackage(_ref){var classes=_ref.classes,error=_ref.error,errorMsg=_ref.errorMsg,open=_ref.open,fields=_ref.fields,onClick=_ref.onClick,handleChange=_ref.handleChange,handleAdd=_ref.handleAdd,handleRemove=_ref.handleRemove,handleAdults=_ref.handleAdults,handleRemoveRoom=_ref.handleRemoveRoom,handleChildAge=_ref.handleChildAge,handleRemoveChildren=_ref.handleRemoveChildren,handleAddChildren=_ref.handleAddChildren,handleDirectFlight=_ref.handleDirectFlight,handleClasses=_ref.handleClasses,handleClear=_ref.handleClear,initialState=_ref.initialState,isMobile=_ref.isMobile,disabledEco=_ref.disabledEco,disabledExe=_ref.disabledExe,height=_ref.height;var guests=fields.input.map(function(field){return field.adults+field.children}).reduce(function(accumulator,item){return accumulator+item},0);var countRoom=fields.input.length>1?"".concat(fields.input.length," Quartos"):"".concat(fields.input.length," Quarto");var countGuests=guests>1?"".concat(guests," Viajantes"):"".concat(guests," Viajante");var guestsTextValue="".concat(countRoom,"  -  ").concat(countGuests);return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_TextField["default"],{label:guestsTextValue,icon:/*#__PURE__*/_react["default"].createElement(_icons.User,null),size:"large",transparent:true,disabled:true,error:error,errorMsg:errorMsg,onClick:onClick,className:classes.customTextPax,inputClassName:classes.input,labelClassName:classes.input,noBorder:true}),open&&/*#__PURE__*/_react["default"].createElement(_Overlay["default"],{onClick:onClick}),/*#__PURE__*/_react["default"].createElement(_Box["default"],{className:"".concat(classes.root," ").concat(!open&&classes.closed)},/*#__PURE__*/_react["default"].createElement("div",{className:classes.container},isMobile?/*#__PURE__*/_react["default"].createElement("h1",{className:classes.title,onClick:onClick},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},/*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft,{className:classes.icon,size:"medium"}),"Selecione os viajantes")):/*#__PURE__*/_react["default"].createElement("h1",{className:classes.title},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body1regular"},/*#__PURE__*/_react["default"].createElement(_icons.User,{className:classes.icon,size:"medium"}),guestsTextValue)),/*#__PURE__*/_react["default"].createElement("div",{className:classes.spaceButton},/*#__PURE__*/_react["default"].createElement("ul",{className:(0,_clsx["default"])(classes.list,classes.section),style:{maxHeight:height}},/*#__PURE__*/_react["default"].createElement("li",{className:classes.listItem},/*#__PURE__*/_react["default"].createElement("span",{className:classes.content},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Quartos"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2",className:classes.subtitle},"adicione os quartos")),/*#__PURE__*/_react["default"].createElement("div",{className:classes.btns},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Minus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",disabled:fields.input.length<=1,onClick:function onClick(){return handleRemoveRoom()}}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"subtitle",className:classes.btnLabel},fields.input.length),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Plus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",onClick:function onClick(){return handleAdd()}}))),fields.input.map(function(field,fieldIdx){return/*#__PURE__*/_react["default"].createElement("li",{key:"".concat(field,"-").concat(fieldIdx),className:classes.listItem},/*#__PURE__*/_react["default"].createElement("ul",{className:classes.list},/*#__PURE__*/_react["default"].createElement("h2",{className:(0,_clsx["default"])(classes.listTitle,"PaxPackage-room-index-".concat(fieldIdx))},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold"// className={classes.subtitle}
},"Quarto ",fieldIdx+1),fieldIdx>0&&/*#__PURE__*/_react["default"].createElement("button",{className:classes.removeRoom,onClick:function onClick(){return handleRemove(fieldIdx)}},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold",className:classes.removeRoomText},/*#__PURE__*/_react["default"].createElement(_icons.Delete,null)," Remover"))),/*#__PURE__*/_react["default"].createElement("li",{className:classes.listItem},/*#__PURE__*/_react["default"].createElement("span",{className:classes.content},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Adultos"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2",className:classes.subtitle},"acima de 18 anos")),/*#__PURE__*/_react["default"].createElement("div",{className:classes.btns},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Minus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",disabled:field.adults<=1,onClick:function onClick(){return handleAdults(fieldIdx,field.adults-1)}}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body",className:classes.btnLabel},field.adults),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Plus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",onClick:function onClick(){return handleAdults(fieldIdx,field.adults+1)}}))),/*#__PURE__*/_react["default"].createElement("li",{className:classes.listItem},/*#__PURE__*/_react["default"].createElement("span",{className:classes.content},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Crian\xE7as"),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2",className:classes.subtitle},"de 0 at\xE9 17 anos")),/*#__PURE__*/_react["default"].createElement("div",{className:classes.btns},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Minus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",disabled:field.children<=0,onClick:function onClick(){return handleRemoveChildren(fieldIdx,field.children-1)}}),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"subtitle",className:classes.btnLabel},field.children),/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"primary",icon:/*#__PURE__*/_react["default"].createElement(_icons.Plus,null),size:"small",addRemove:true,variant:"outlined",iconPosition:"center",onClick:function onClick(){return handleAddChildren(fieldIdx,field.children+1)}}))),field.children>0&&/*#__PURE__*/_react["default"].createElement("li",{className:classes.liContainer},field.ages.map(function(age,ageIdx){return/*#__PURE__*/_react["default"].createElement("div",{key:"".concat(age,"-").concat(ageIdx),className:classes.body},/*#__PURE__*/_react["default"].createElement("span",{className:classes.content},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"headline5"},"Idade da crian\xE7a ".concat(ageIdx+1)),/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"body2regular"},"ao voltar da viagem")),/*#__PURE__*/_react["default"].createElement("span",{className:classes.ageContainer},/*#__PURE__*/_react["default"].createElement(_Select["default"],{className:classes.ageSelect,size:"small",label:"Idade",placeholder:"Idade",select:_options.childAgeOptions,onChange:function onChange(e){return handleChildAge(fieldIdx,ageIdx,e)},value:String(age.value)})))}))))}),/*#__PURE__*/_react["default"].createElement("div",{className:classes.optionsFlight},/*#__PURE__*/_react["default"].createElement("h2",{className:classes.listTitle},/*#__PURE__*/_react["default"].createElement(_Typography["default"],{type:"captionsemibold"},"Classe")),/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{className:classes.flightClass,label:"Classe econ\xF4mica",onClick:function onClick(){return handleClasses("eco")},isActive:fields.classes==="eco",disabled:disabledEco,size:"small"}),/*#__PURE__*/_react["default"].createElement(_FilterChip["default"],{className:classes.flightClass,label:"Classe executiva",onClick:function onClick(){return handleClasses("exe")},isActive:fields.classes==="exe",disabled:disabledExe}),/*#__PURE__*/_react["default"].createElement(_Checkbox["default"],{label:"Somente voo direto",value:fields.directFlight,onChange:handleDirectFlight,checked:fields.directFlight}))),isMobile?/*#__PURE__*/_react["default"].createElement("div",{className:open?classes.footer:(0,_clsx["default"])(classes.footer,classes.footerClose)},/*#__PURE__*/_react["default"].createElement(_Button["default"],{color:"secondary",label:"Aplicar ".concat(guestsTextValue),variant:"contained",onClick:function onClick(){return handleChange(guestsTextValue)},fullWidth:true})):/*#__PURE__*/_react["default"].createElement("div",{className:classes.footer},/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btn,color:"primary",label:"Limpar",variant:"text",disabled:JSON.stringify(initialState)===JSON.stringify(fields),onClick:handleClear}),/*#__PURE__*/_react["default"].createElement(_Button["default"],{className:classes.btnApply,color:"primary",label:"Aplicar",variant:"text",onClick:function onClick(){return handleChange(guestsTextValue)}}))))))};PaxPackage.defaultProps={height:"auto"};PaxPackage.propTypes={classes:_propTypes["default"].object.isRequired,rooms:_propTypes["default"].array,height:_propTypes["default"].string};var _default=(0,_styles.withStyles)(_styles2.styles,{withTheme:true})(PaxPackage);exports["default"]=_default;
//# sourceMappingURL=PaxPackage.js.map