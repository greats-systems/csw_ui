(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[76],{1027:function(e,t,n){"use strict";var r=n(4),a=n(15),s=n(12),i=n(6),c=n.n(i),o=n(0),l=n.n(o),d=n(37),u=n(689),j=n(690),b=n(676),h=n(678),m=n(680),p=n(692),f=n(159),x=n(222),O=n(73),g=n(683),w=n(705),v=n(704),y=n(718),k=n(224),P=n(839),C=n(749),S=n.n(C),E=n(762),M=n.n(E),z=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(d.a)(),i=Object(y.a)(),C=l.a.useState(!1),E=Object(s.a)(C,2),I=E[0],R=E[1],B=l.a.useState(0),W=Object(s.a)(B,2),D=W[0],_=W[1],A=l.a.useState(),V=Object(s.a)(A,2),H=V[0],q=V[1],F=function(){R(!I)},G=function(e){e.preventDefault()},J=function(e){var t=Object(P.b)(e);_(t),q(Object(P.a)(t))};return Object(o.useEffect)((function(){J("123456")}),[]),Object(z.jsx)(v.b,{initialValues:{email:"info@codedthemes.com",password:"123456",confirmPassword:"123456",submit:null},validationSchema:w.d().shape({password:w.f().max(255).required("Password is required"),confirmPassword:w.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:w.f().oneOf([w.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,a=n.setStatus,s=n.setSubmitting;try{i.current&&(a({success:!0}),s(!1))}catch(t){console.error(t),i.current&&(a({success:!1}),r({submit:t.message}),s(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.handleBlur,i=e.handleChange,c=e.handleSubmit,o=e.isSubmitting,l=e.touched,d=e.values;return Object(z.jsxs)("form",Object(r.a)(Object(r.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(z.jsxs)(u.a,{fullWidth:!0,error:Boolean(l.password&&a.password),sx:Object(r.a)({},n.typography.customInput),children:[Object(z.jsx)(j.a,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),Object(z.jsx)(b.a,{id:"outlined-adornment-password-reset",type:I?"text":"password",value:d.password,name:"password",onBlur:s,onChange:function(e){i(e),J(e.target.value)},endAdornment:Object(z.jsx)(h.a,{position:"end",children:Object(z.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:F,onMouseDown:G,edge:"end",size:"large",children:I?Object(z.jsx)(S.a,{}):Object(z.jsx)(M.a,{})})}),inputProps:{}})]}),l.password&&a.password&&Object(z.jsx)(u.a,{fullWidth:!0,children:Object(z.jsx)(p.a,{error:!0,id:"standard-weight-helper-text-reset",children:a.password})}),0!==D&&Object(z.jsx)(u.a,{fullWidth:!0,children:Object(z.jsx)(f.a,{sx:{mb:2},children:Object(z.jsxs)(x.a,{container:!0,spacing:2,alignItems:"center",children:[Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(f.a,{style:{backgroundColor:null===H||void 0===H?void 0:H.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(O.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===H||void 0===H?void 0:H.label})})]})})}),Object(z.jsxs)(u.a,{fullWidth:!0,error:Boolean(l.confirmPassword&&a.confirmPassword),sx:Object(r.a)({},n.typography.customInput),children:[Object(z.jsx)(j.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(z.jsx)(b.a,{id:"outlined-adornment-confirm-password",type:"password",value:d.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:s,onChange:i,inputProps:{}})]}),l.confirmPassword&&a.confirmPassword&&Object(z.jsx)(u.a,{fullWidth:!0,children:Object(z.jsxs)(p.a,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",a.confirmPassword," "]})}),a.submit&&Object(z.jsx)(f.a,{sx:{mt:3},children:Object(z.jsx)(p.a,{error:!0,children:a.submit})}),Object(z.jsx)(f.a,{sx:{mt:1},children:Object(z.jsx)(k.a,{children:Object(z.jsx)(g.a,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})}},1928:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(27),s=n(8),i=n(37),c=n(645),o=n(222),l=n(649),d=n(73),u=n(730),j=n(709),b=n(275),h=n(1027),m=n(841),p=n(732),f=n.p+"static/media/auth-reset-error-card.c3149310.svg",x=n.p+"static/media/auth-reset-purple-card.1c70d7ae.svg",O=n(1),g=Object(s.a)("span")((function(e){var t=e.theme;return{"&:after":Object(r.a)({content:'""',position:"absolute",top:"35%",left:"35%",width:400,height:400,backgroundImage:"url(".concat(x,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},t.breakpoints.down("xl"),{left:"25%",top:"35%"}),"&:before":Object(r.a)({content:'""',position:"absolute",top:"12%",left:"25%",width:400,height:270,backgroundImage:"url(".concat(f,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"},t.breakpoints.down("xl"),{top:"10%",left:"15%"})}})),w=[{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(i.a)(),t=Object(c.a)(e.breakpoints.down("md"));return Object(O.jsx)(u.a,{children:Object(O.jsxs)(o.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(O.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsxs)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(O.jsx)(o.a,{item:!0,children:Object(O.jsxs)(l.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(O.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),Object(O.jsx)(d.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Please choose new password."})]})}),Object(O.jsx)(o.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(O.jsx)(a.b,{to:"#",children:Object(O.jsx)(b.a,{})})})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsx)(h.a,{})})]})})}),Object(O.jsx)(o.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(o.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(O.jsxs)(o.a,{item:!0,xs:12,children:[Object(O.jsx)("span",{}),Object(O.jsx)(g,{})]}),Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(O.jsx)(o.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(O.jsx)(p.a,{items:w})})})})]})})})]})})}},709:function(e,t,n){"use strict";var r=n(4),a=n(75),s=n(159),i=n(135),c=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(s.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},718:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},730:function(e,t,n){"use strict";var r=n(8),a=Object(r.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},732:function(e,t,n){"use strict";var r=n(4),a=n(222),s=n(73),i=n(764),c=n.n(i),o=n(1);t.a=function(e){var t=e.items;return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(o.jsxs)(a.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(o.jsx)(a.a,{item:!0,children:Object(o.jsx)(s.a,{variant:"h1",children:e.title})}),Object(o.jsx)(a.a,{item:!0,children:Object(o.jsx)(s.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},749:function(e,t,n){"use strict";var r=n(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(113)),s=n(1),i=(0,a.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},762:function(e,t,n){"use strict";var r=n(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(113)),s=n(1),i=(0,a.default)((0,s.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},839:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(40),a=n.n(r),s=function(e){return e<2?{label:"Poor",color:a.a.errorMain}:e<3?{label:"Weak",color:a.a.warningDark}:e<4?{label:"Normal",color:a.a.orangeMain}:e<5?{label:"Good",color:a.a.successMain}:e<6?{label:"Strong",color:a.a.successDark}:{label:"Poor",color:a.a.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},841:function(e,t,n){"use strict";var r=n(37),a=n(159),s=n.p+"static/media/auth-pattern.d80b0e94.svg",i=n.p+"static/media/auth-pattern-dark.df61463d.svg",c=n(1);t.a=function(e){var t=e.children,n=Object(r.a)();return Object(c.jsx)(a.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(s,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=76.a7447a61.chunk.js.map