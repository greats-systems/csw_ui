(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[22],{1093:function(e,t,a){"use strict";var n=a(4),i=a(15),r=a(6),o=a.n(r),c=a(222),d=a(689),s=a(690),l=a(676),p=a(683),b=a(159),h=a(692),g=a(7),m=a(704),u=a(705),j=a(229),f=a.n(j),x=a(224),O=a(718),k=a(184),v=a(51),w=a(1);t.a=function(e){var t=Object.assign({},e),a=Object(O.a)(),r=Object(g.d)();return Object(w.jsx)(m.b,{initialValues:{email:"",submit:null},validationSchema:u.d().shape({email:u.f().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var i,c,d,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setErrors,c=n.setStatus,d=n.setSubmitting,e.prev=1,s={headers:{"content-type":"application/json"}},e.next=5,f.a.post("https://yourapicall",{email:t.email},s);case 5:r(Object(k.c)({open:!0,message:"Success! Please check inbox and confirm.",variant:"alert",alert:{color:"success"},close:!1})),a.current&&(c({success:!0}),d(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a.current&&(c({success:!1}),i({submit:null===e.t0||void 0===e.t0?void 0:e.t0.message}),d(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,i=e.handleBlur,r=e.handleChange,o=e.handleSubmit,g=e.isSubmitting,m=e.touched,u=e.values;return Object(w.jsxs)("form",Object(n.a)(Object(n.a)({noValidate:!0,onSubmit:o},t),{},{children:[Object(w.jsxs)(c.a,{container:!0,alignItems:"center",spacing:v.c,children:[Object(w.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(w.jsxs)(d.a,{fullWidth:!0,error:Boolean(m.email&&a.email),children:[Object(w.jsx)(s.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),Object(w.jsx)(l.a,{id:"outlined-adornment-email-forgot",type:"email",defaultValue:u.email,name:"email",onBlur:i,onChange:r,label:"Email Address"})]})}),Object(w.jsx)(c.a,{item:!0,children:Object(w.jsx)(x.a,{children:Object(w.jsx)(p.a,{disableElevation:!0,disabled:g,type:"submit",variant:"contained",size:"large",sx:{px:2.75,py:1.5},children:"Subscribe"})})})]}),m.email&&a.email&&Object(w.jsx)(b.a,{sx:{mt:1},children:Object(w.jsx)(h.a,{error:!0,id:"standard-weight-helper-text-email-forgot",children:a.email})}),a.submit&&Object(w.jsx)(b.a,{sx:{mt:3},children:Object(w.jsx)(h.a,{error:!0,children:a.submit})})]}))}})}},1104:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.08574dce.svg"},1880:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(8),r=(a(37),a(696),a(222)),o=(a(73),a(159)),c=(a(221),a(699),a(224),a(51),a.p,a.p,a.p,a(1));Object(i.a)("img")((function(e){var t=e.theme;return Object(n.a)({maxWidth:"100%",borderRadius:"20px",transform:"scale(1.7)",transformOrigin:"rtl"===t.direction?"100% 50%":"0 50%"},t.breakpoints.down("lg"),{transform:"scale(1.2)"})})),Object(i.a)("img")({maxWidth:"100%",filter:"drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))"}),a(12),a(0),a(1365),a(1953);a(76),a(1366),a(1367),a(1368),a(27),a(601),a(683),a.p,a.p,a.p,a(4),a(764),a.p,a.p,a.p,a.p,Object(i.a)("img")({position:"absolute",top:0,left:0,width:"100%",height:"100%",animation:"5s wings ease-in-out infinite"}),a.p,Object(i.a)(o.a)((function(e){var t=e.theme;return Object(n.a)({width:"100%",position:"relative",margin:"-70px 0px"},t.breakpoints.down("lg"),{margin:"-30px 0px"})})),Object(i.a)("img")({position:"absolute",top:0,left:0,width:"100%",height:"100%",animation:"5s wings ease-in-out infinite"}),Object(i.a)(r.a)((function(e){var t,a=e.theme;return t={maxWidth:400,position:"relative","&:after":{content:'""',position:"absolute",background:"dark"===a.palette.mode?a.palette.dark.dark:"#FFFFFF",border:"6px solid".concat(a.palette.secondary.main),width:25,height:25,borderRadius:"50%",top:13,left:-20},"&:before":{content:'""',position:"absolute",background:"dark"===a.palette.mode?a.palette.dark.main:"#9E9E9E",width:1,height:390,top:13,left:-8}},Object(n.a)(t,a.breakpoints.down("md"),{"&:before":{height:290}}),Object(n.a)(t,a.breakpoints.down("lg"),{"&:after":{left:-12},"&:before":{left:0,height:290}}),t})),Object(i.a)(r.a)((function(e){var t,a=e.theme;return t={maxWidth:400,textAlign:"right",marginLeft:"auto",position:"relative",paddingRight:24,"&:after":{content:'""',position:"absolute",background:"dark"===a.palette.mode?a.palette.dark.dark:"#FFFFFF",border:"6px solid".concat(a.palette.secondary.main),width:25,height:25,borderRadius:"50%",top:13,right:-12},"&:before":{content:'""',position:"absolute",background:"dark"===a.palette.mode?a.palette.dark.main:"#9E9E9E",width:1,height:300,top:13,right:-1}},Object(n.a)(t,a.breakpoints.down("md"),{"&:before":{height:"400%"}}),Object(n.a)(t,a.breakpoints.down("lg"),{"&:after":{right:-4},"&:before":{right:7}}),Object(n.a)(t,a.breakpoints.down("md"),{"&:after":{right:"auto",left:-12},"&:before":{right:"auto",left:0,height:160}}),t})),a(677);var d=a(675),s=(a(1091),a(1384),a(1092),a(1385),a(884),a(1386),a(1387),a(1388),a(1093),a.p,Object(i.a)("div")((function(e){var t=e.theme,a="dark"===t.palette.mode?"linear-gradient(270deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(270deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),i="dark"===t.palette.mode?"linear-gradient(90deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(90deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),r="dark"===t.palette.mode?"linear-gradient(0deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(0deg, ".concat(t.palette.primary.light," 65%, #fff 65%)"),o="dark"===t.palette.mode?"linear-gradient(0deg, ".concat(t.palette.dark.main," 65%, ").concat(t.palette.dark.dark," 65%)"):"linear-gradient(0deg, ".concat(t.palette.primary.light," 65%, #fff 65%)");return Object(n.a)({padding:"100px 0",background:"rtl"===t.direction?a:i},t.breakpoints.down("lg"),{padding:"50px 0",background:"rtl"===t.direction?r:o})})),Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({background:"dark"===t.palette.mode?t.palette.dark.dark:"#FFFFFF",boxShadow:"0px 0px 50px rgba(33, 150, 243, 0.2)",borderRadius:"20px",padding:"100px 75px"},t.breakpoints.down("md"),{padding:"40px 25px"})})),Object(i.a)("img")({width:330,animation:"5s wings ease-in-out infinite",maxWidth:"100%"}),a(765),a(751),a(1494),a.p,a(1104),a(77),Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({padding:"35px 0",color:"#fff",background:t.palette.secondary.main},t.breakpoints.down("md"),{textAlign:"center"})})),Object(i.a)(d.a)({color:"#fff",display:"inline-flex",alignItems:"center",textDecoration:"none !important",opacity:"0.8","& svg":{fontsize:"1.125rem",marginRight:8},"&:hover":{opacity:"1"}}),Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({padding:"20px 0",color:"#fff",background:t.palette.secondary.dark},t.breakpoints.down("md"),{textAlign:"center"})})),a(206),a(886)),l=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({paddingTop:30,overflowX:"hidden",overflowY:"clip"},t.breakpoints.down("md"),{paddingTop:42})}));Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({paddingTop:160,paddingBottom:160},t.breakpoints.down("md"),{paddingTop:60})})),t.default=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l,{id:"home",children:Object(c.jsx)(s.a,{})})})}},699:function(e,t,a){"use strict";var n=a(4),i=a(75),r=a(37),o=a(677),c=a(1),d=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,s=e.size,l=e.sx,p=Object(i.a)(e,d),b=Object(r.a)(),h=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},g=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},m={};switch(s){case"badge":m={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":m={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":m={width:b.spacing(5),height:b.spacing(5)};break;case"lg":m={width:b.spacing(9),height:b.spacing(9)};break;case"xl":m={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":m={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:m={}}return Object(c.jsx)(o.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},h),g),m),l)},p))}},718:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},886:function(e,t,a){"use strict";var n=a(4),i=a(12),r=a(0),o=a.n(r),c=a(27),d=a(37),s=a(978),l=a(681),p=a(696),b=a(682),h=a(73),g=a(649),m=a(683),u=a(159),j=a(680),f=a(694),x=a(679),O=a(675),k=a(647),v=a(650),w=a(648),y=a(275),F=a(18),E=a(887),S=a.n(E),R=a(1);function C(e){var t=e.children,a=e.window,n=Object(d.a)(),i=Object(s.a)({disableHysteresis:!0,threshold:0,target:a}),r="dark"===n.palette.mode?n.palette.dark.dark:n.palette.grey[200];return o.a.cloneElement(t,{elevation:i?2:0,style:{backgroundColor:n.palette.background.default,borderBottom:i?"none":"1px solid",borderColor:i?"":r,color:n.palette.text.dark}})}t.a=function(e){var t=Object.assign({},e),a=o.a.useState(!1),r=Object(i.a)(a,2),d=r[0],s=r[1],E=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(e)}};return Object(R.jsx)(C,Object(n.a)(Object(n.a)({},t),{},{children:Object(R.jsx)(l.a,{children:Object(R.jsx)(p.a,{children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)(h.a,{component:"div",sx:{flexGrow:1,textAlign:"left"},children:Object(R.jsx)(y.a,{})}),Object(R.jsx)(g.a,{direction:"row",sx:{display:{xs:"none",sm:"block"}},spacing:2,children:Object(R.jsx)(m.a,{disableElevation:!0,variant:"contained",color:"secondary",component:c.b,to:"/login",children:"LOGIN / REGISTER"})}),Object(R.jsxs)(u.a,{sx:{display:{xs:"block",sm:"none"}},children:[Object(R.jsx)(j.a,{color:"inherit",onClick:E(!0),size:"large",children:Object(R.jsx)(S.a,{})}),Object(R.jsx)(f.a,{anchor:"top",open:d,onClose:E(!1),children:d&&Object(R.jsx)(u.a,{sx:{width:"auto"},role:"presentation",onClick:E(!1),onKeyDown:E(!1),children:Object(R.jsxs)(x.a,{children:[Object(R.jsx)(O.a,{style:{textDecoration:"none"},href:"#",target:"_blank",children:Object(R.jsxs)(k.a,{component:"a",children:[Object(R.jsx)(v.a,{children:Object(R.jsx)(F.O,{})}),Object(R.jsx)(w.a,{primary:"Home"})]})}),Object(R.jsx)(O.a,{style:{textDecoration:"none"},href:"/login",target:"_blank",children:Object(R.jsxs)(k.a,{component:"a",children:[Object(R.jsx)(v.a,{children:Object(R.jsx)(F.G,{})}),Object(R.jsx)(w.a,{primary:"Dashboard"})]})})]})})})]})]})})})}))}}}]);
//# sourceMappingURL=22.992130ea.chunk.js.map