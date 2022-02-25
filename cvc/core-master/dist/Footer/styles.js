"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var styles=function styles(theme){var _logoContainer;return{root:(0,_defineProperty2["default"])({padding:"".concat(theme.spacing(4),"px 0")},theme.breakpoints.between("md","xl"),{padding:"".concat(theme.spacing(8.875),"px ").concat(theme.spacing(6),"px")}),main:(0,_defineProperty2["default"])({},theme.breakpoints.between("md","xl"),{marginBottom:theme.spacing(6)}),mainItems:(0,_defineProperty2["default"])({},theme.breakpoints.between("xs","md"),{paddingTop:"0 !important"}),logoContainer:(_logoContainer={textAlign:"right"},(0,_defineProperty2["default"])(_logoContainer,theme.breakpoints.between("xs","md"),{marginTop:"-14px"}),(0,_defineProperty2["default"])(_logoContainer,"& img",(0,_defineProperty2["default"])({maxWidth:"70px",marginTop:"-16px"},theme.breakpoints.between("xs","md"),{maxWidth:"40px"})),_logoContainer),links:{color:theme.palette.text.primary,display:"block",textDecoration:"none","& + &":{marginTop:theme.spacing(1.5)}},title:{margin:"0 0 24px"},iconContainer:{display:"flex"},icon:{alignItems:"center",background:theme.palette.text.disabled,borderRadius:"100%",color:theme.palette.text.primary,display:"flex",justifyContent:"center",height:"40px",width:"40px","& + &":{marginLeft:theme.spacing(2)}},paymentGrid:(0,_defineProperty2["default"])({borderTop:"1px solid ".concat(theme.palette.text.disabled),marginTop:theme.spacing(5),paddingTop:theme.spacing(5)},theme.breakpoints.between("xs","md"),{display:"none"}),footer:{"&:before":{borderTop:"2px solid ".concat(theme.palette.secondary.main),content:"\"\"",display:"block",margin:"".concat(theme.spacing(5),"px 0 ").concat(theme.spacing(3),"px"),width:"40px"}},footerText:{color:theme.palette.text.secondary,// display: 'block',
"& + &":{marginLeft:"3px","&:before":{content:"-",marginRight:"3px"}}},breakMobile:(0,_defineProperty2["default"])({},theme.breakpoints.between("xs","md"),{display:"block"}),list:{padding:0},listItem:{display:"inline-block",listStyle:"none","& + &":{marginLeft:theme.spacing(2)}}}};var _default=styles;exports["default"]=_default;
//# sourceMappingURL=styles.js.map