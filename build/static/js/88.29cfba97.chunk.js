(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[88],{1026:function(e,t,a){"use strict";var n=a(4),i=a(15),r=a(6),s=a.n(r),c=a(37),o=a(689),l=a(690),d=a(676),j=a(692),m=a(159),b=a(683),u=a(7),h=a(25),x=a(705),p=a(704),O=a(224),g=a(77),f=a(718),v=a(184),w=a(1);t.a=function(e){var t=Object.assign({},e),a=Object(c.a)(),r=Object(f.a)(),k=Object(u.d)(),y=Object(h.e)(),C=Object(g.a)().resetPassword;return Object(w.jsx)(p.b,{initialValues:{email:"",password:"",submit:null},validationSchema:x.d().shape({email:x.f().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,i=a.setStatus,c=a.setSubmitting,e.prev=1,e.next=4,C(t.email);case 4:r.current&&(i({success:!0}),c(!1),k(Object(v.c)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){y("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),r.current&&(i({success:!1}),n({submit:e.t0.message}),c(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,r=e.handleBlur,s=e.handleChange,c=e.handleSubmit,u=e.isSubmitting,h=e.touched,x=e.values;return Object(w.jsxs)("form",Object(n.a)(Object(n.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(w.jsxs)(o.a,{fullWidth:!0,error:Boolean(h.email&&i.email),sx:Object(n.a)({},a.typography.customInput),children:[Object(w.jsx)(l.a,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),Object(w.jsx)(d.a,{id:"outlined-adornment-email-forgot",type:"email",value:x.email,name:"email",onBlur:r,onChange:s,label:"Email Address / Username",inputProps:{}}),h.email&&i.email&&Object(w.jsx)(j.a,{error:!0,id:"standard-weight-helper-text-email-forgot",children:i.email})]}),i.submit&&Object(w.jsx)(m.a,{sx:{mt:3},children:Object(w.jsx)(j.a,{error:!0,children:i.submit})}),Object(w.jsx)(m.a,{sx:{mt:2},children:Object(w.jsx)(O.a,{children:Object(w.jsx)(b.a,{disableElevation:!0,disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})}},1945:function(e,t,a){"use strict";a.r(t);var n=a(27),i=a(37),r=a(645),s=a(222),c=a(649),o=a(159),l=a(73),d=a(269),j=a(840),m=a(709),b=a(275),u=a(1026),h=a(842),x=a(731),p=a(732),O=a.p+"static/media/img-a2-forgotpass.10ad8626.svg",g=a(1),f=[{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"},{title:"Power of React with Material UI",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(i.a)(),t=Object(r.a)(e.breakpoints.down("md")),a=Object(r.a)(e.breakpoints.down("lg"));return Object(g.jsx)(j.a,{children:Object(g.jsxs)(s.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(g.jsx)(s.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(g.jsxs)(s.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(g.jsx)(s.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(g.jsx)(n.b,{to:"#",children:Object(g.jsx)(b.a,{})})}),Object(g.jsx)(s.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(g.jsxs)(c.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(g.jsx)(o.a,{component:n.b,to:"#",sx:{display:{xs:"block",md:"none"}},children:Object(g.jsx)(b.a,{})}),Object(g.jsx)(m.a,{border:a,children:Object(g.jsxs)(s.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(g.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"}),Object(g.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})]})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(u.a,{})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(d.a,{})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(s.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(g.jsx)(l.a,{component:n.b,to:"/pages/login/login2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})]})}),Object(g.jsx)(s.a,{item:!0,xs:12,sx:{m:3},children:Object(g.jsx)(x.a,{})})]})}),Object(g.jsx)(s.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(g.jsx)(h.a,{children:Object(g.jsxs)(s.a,{item:!0,container:!0,justifyContent:"center",children:[Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)(s.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(g.jsx)(s.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(g.jsx)(p.a,{items:f})})})}),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsx)("img",{alt:"Auth method",src:O,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}},709:function(e,t,a){"use strict";var n=a(4),i=a(75),r=a(159),s=a(135),c=a(1),o=["children"];t.a=function(e){var t=e.children,a=Object(i.a)(e,o);return Object(c.jsx)(s.a,Object(n.a)(Object(n.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(c.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},718:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},731:function(e,t,a){"use strict";var n=a(649),i=a(73),r=a(675),s=a(1);t.a=function(){return Object(s.jsxs)(n.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(i.a,{variant:"subtitle2",component:r.a,href:"https://malingreatssmartsystems.co.zw/",target:"_blank",underline:"hover",children:"..."}),Object(s.jsx)(i.a,{variant:"subtitle2",component:r.a,href:"https://malingreatssmartsystems.co.zw/",target:"_blank",underline:"hover",children:"\xa9 malin greats smart systems"})]})}},732:function(e,t,a){"use strict";var n=a(4),i=a(222),r=a(73),s=a(764),c=a.n(s),o=a(1);t.a=function(e){var t=e.items;return Object(o.jsx)(c.a,Object(n.a)(Object(n.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(o.jsxs)(i.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(o.jsx)(i.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"h1",children:e.title})}),Object(o.jsx)(i.a,{item:!0,children:Object(o.jsx)(r.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},840:function(e,t,a){"use strict";var n=a(5),i=a(8),r=Object(i.a)("div")((function(e){var t=e.theme;return Object(n.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=r},842:function(e,t,a){"use strict";var n=a(37),i=a(159),r=a.p+"static/media/img-a2-grid.51f4cf81.svg",s=a.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",c=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(c.jsx)(i.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===a.palette.mode?a.palette.dark.dark:"#fff",backgroundImage:"dark"===a.palette.mode?"url(".concat(s,")"):"url(".concat(r,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===a.palette.mode?a.palette.dark.dark:a.palette.primary.light,opacity:"dark"===a.palette.mode?.85:.9}},children:t})}}}]);
//# sourceMappingURL=88.29cfba97.chunk.js.map