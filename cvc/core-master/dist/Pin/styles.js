"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.styles=void 0;var styles=function styles(theme){return{root:{borderRadius:"16px",boxShadow:theme.shadows[16],fontFamily:theme.font.semibold,padding:"".concat(theme.spacing(1),"px ").concat(theme.spacing(1.5),"px"),position:"relative","&:before":{border:"inset 10px",borderTopStyle:"solid",bottom:"-19px",content:"\"\"",display:"block",height:0,left:"50%",position:"absolute",transform:"translateX(-50%)",width:0}},light:{background:theme.palette.white.main,color:theme.palette.hotel.main,"&:before":{borderColor:"".concat(theme.palette.white.main," transparent transparent transparent")}},dark:{background:theme.palette.hotel.main,color:theme.palette.white.main,"&:before":{borderColor:"".concat(theme.palette.hotel.main," transparent transparent transparent")}}}};exports.styles=styles;
//# sourceMappingURL=styles.js.map