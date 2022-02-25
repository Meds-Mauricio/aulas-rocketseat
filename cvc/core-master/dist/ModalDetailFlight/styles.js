"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.styles=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var styles=function styles(theme){return{root:{borderRadius:"16px",position:"fixed",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",cursor:"pointer"},container:{width:"626px"},card:{display:"flex",width:"626px",border:"1px solid #dddddd",padding:"10px",borderRadius:"16px",marginBottom:"20px"},detailBtn:(0,_defineProperty2["default"])({color:theme.palette.primary.main,display:"block",height:"auto",padding:0},theme.breakpoints.between("md","xl"),{marginBottom:theme.spacing(2)}),cardHeader:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},header:{display:"flex",marginBottom:theme.spacing(2),alignItems:"center"},cia:{textTransform:"capitalize"},ciaLogo:{marginRight:theme.spacing(2),maxHeight:"32px",maxWidth:"32px"},timeline:{position:"relative",marginLeft:"16px",paddingLeft:"16px",textAlign:"left","&:before":{position:"absolute",left:"0",display:"block",width:"24px",content:"\"\"",borderLeft:"1px dashed ".concat(theme.palette.grey[50]),height:"100%"}},icon:{position:"absolute",top:"calc(50% - 16px)",left:"-8px",display:"block",width:"16px",height:"16px",content:"\"\"",border:"1px solid ".concat(theme.palette.grey[50]),borderRadius:"50%",backgroundColor:"#fff"},departure:{"&:before":{top:"50%"}},arrival:{"&:before":{bottom:"50%"}},contentTimeline:{marginBottom:"10px","&:before":{top:"0"}},"await":{backgroundColor:"#efefef",borderRadius:"90px",textAlign:"left",padding:"12px",marginLeft:"5px",marginRight:"5px",marginBottom:"10px","&:last-child":{display:"none"}},baggageCard:{margin:"5px",height:"174px",border:"1px solid #ddd",borderRadius:"8px",color:"#999",textAlign:"left",padding:"16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},active:{border:"1px solid #237fd0",color:"#333333"},footer:{marginTop:"30px"},footerText:{marginBottom:"60px"},baggageInfo:{textAlign:"left"},row:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"20px"},link:{fontWeight:"bold",color:"#237fd0",cursor:"pointer",textDecoration:"none"}}};exports.styles=styles;
//# sourceMappingURL=styles.js.map