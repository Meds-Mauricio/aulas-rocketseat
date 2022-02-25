"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.styles=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var styles=function styles(theme){return{root:{borderRadius:theme.spacing(2),boxShadow:theme.shadows[16],overflow:"hidden",padding:theme.spacing(2),position:"relative","& button":{display:"flex"},"&:hover":{border:"2px solid ".concat(theme.palette.spot?theme.palette.hotel.main:theme.palette.primary.main),"& button":{display:"block"}}},rootLoading:{boxShadow:theme.shadows[0],"&:hover":{borderColor:"transparent"}},isActive:{borderColor:theme.palette.spot?theme.palette.hotel.main:theme.palette.primary.main},loading:{cursor:"default",height:"244px",padding:theme.spacing(1)},relative:{borderRadius:theme.spacing(2),overflow:"hidden",position:"relative"},"package":{"&:hover":{borderColor:theme.palette["package"]?theme.palette["package"].main:theme.palette.primary.main}},rootList:{height:"244px",boxSizing:"content-box",padding:"2px","&:hover":{padding:"0px"}},typeList:{display:"flex",height:"100%",padding:"0"},contentColumn:{display:"flex",flexDirection:"column"},content:{display:"flex",padding:"".concat(theme.spacing(1),"px ").concat(theme.spacing(3),"px"),position:"relative",width:"65%",marginRight:"-2px","& > $contentColumn:first-child":{width:"calc(100% - 144px)"},"& > $contentColumn:nth-child(2)":{width:"144px"}},img:{display:"block",left:"50%",maxWidth:"110%",minHeight:"100%",minWidth:"100%",position:"absolute",transform:"translate(-50%, -50%)",top:"50%"},arrows:{background:"none",border:"none",color:theme.palette.white.main,cursor:"pointer",outline:"none",padding:0,position:"absolute",transform:"translateY(-50%)",top:"50%",zIndex:theme.level.content},arrowLeft:{left:theme.spacing(1)},arrowRight:{right:theme.spacing(1)},title:{display:"block",marginTop:theme.spacing(1.5),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},footer:(0,_defineProperty2["default"])({borderTop:"1px solid ".concat(theme.palette.grey[50]),bottom:0,left:0,right:0,padding:"".concat(theme.spacing(1.2),"px 0 0"),textAlign:"center",height:"44px"},theme.breakpoints.between("md","xl"),{position:"absolute"}),footerItem:{"& + &":{marginLeft:theme.spacing(1)/2,"&:before":{borderLeft:"1px solid ".concat(theme.palette.text.primary),content:"",display:"inline-block",height:"10px",marginRight:theme.spacing(1)/2,verticalAlign:"middle"}}},priceContainer:{textAlign:"right",marginTop:"16px"},imgContainerCard:{display:"block",height:"185px",marginLeft:theme.spacing(2)*-1,marginTop:theme.spacing(2)*-1,position:"sticky",width:"calc(100% + ".concat(theme.spacing(4),"px)"),borderRadius:"".concat(theme.spacing(2)," ").concat(theme.spacing(2)," 0 0"),overflow:"hidden","& .slick-list":{borderRadius:"".concat(theme.spacing(2),"px"),"-webkit-border-radius":"".concat(theme.spacing(2),"px ").concat(theme.spacing(2),"px 0 0")}},imgContainerList:{height:"228px",position:"relative",padding:theme.spacing(1),paddingRight:"0",width:"35%","& .slick-list":{borderRadius:"".concat(theme.spacing(2),"px"),"-webkit-border-radius":"".concat(theme.spacing(2),"px ").concat(theme.spacing(2),"px 0 0")}},imgWrapper:{background:theme.palette.backdrop?theme.palette.backdrop.main:theme.palette.primary.main,display:"block",height:"228px",overflow:"hidden",position:"relative"},imgWrapperList:{borderRadius:theme.spacing(2),"-webkit-border-radius":"".concat(theme.spacing(1),"px")},overlay:{background:theme.palette.gradient?theme.palette.gradient.black.bottom:"",borderRadius:theme.spacing(2),"-webkit-border-radius":"".concat(theme.spacing(2),"px"),bottom:0,content:"",left:0,position:"absolute",right:0,top:0,zIndex:theme.level.content},notAvaliableImg:{filter:"grayscale(1)"},subtitle:{display:"block",marginTop:theme.spacing(1.3),"& strong":{color:theme.palette.primary.main}},loadingContent:{marginTop:theme.spacing(2)},loadingPrice:{marginTop:theme.spacing(5)},topTag:{left:theme.spacing(2),position:"absolute",top:theme.spacing(2),zIndex:theme.level.content+1},favorite:{color:theme.palette.white?theme.palette.white.main:theme.palette.primary.main,cursor:"pointer",position:"absolute",right:theme.spacing(2),top:theme.spacing(2)},favoriteList:{color:theme.palette.text.primary},stars:{color:theme.palette.secondary.main,marginRight:theme.spacing(0.5)},tripAdvisor:{margin:"".concat(theme.spacing(2),"px 0"),width:"100%"},tripAdvisorList:{margin:"".concat(theme.spacing(2),"px 0"),minHeight:"36px",width:"50%"},discountCard:{position:"absolute",right:"16px",top:"175px"},discountList:{width:"70px"},infoDiscount:{display:"flex",justifyContent:"flex-end",marginTop:"24px"},info:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},rate:{display:"flex"},btnDetalhe:{display:"flex",marginTop:"22px"},viewMore:{color:theme.palette.primary.main,display:"block",height:"auto",padding:0,fontSize:"16px",marginLeft:"-14px",left:"0"},containerTotalAvaliationRow:{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"235px"},containerTotalAvaliation:{display:"flex",flexWrap:"wrap"},totalAvaliation:{display:"flex"},totalPeople:{textAlign:"right",position:"relative"},attributesContent:{padding:"0 20px 0 10px","& $rate":{margin:"0 0 7px"}},trip:{marginTop:"32px",display:"flex"}}};exports.styles=styles;
//# sourceMappingURL=styles.js.map