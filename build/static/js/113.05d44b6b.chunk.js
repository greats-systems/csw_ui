(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[113],{1574:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(a(113)),n=a(1),r=(0,c.default)((0,n.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");t.default=r},1575:function(e,t,a){"use strict";var i=a(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(a(113)),n=a(1),r=(0,c.default)((0,n.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=r},1895:function(e,t,a){"use strict";a.r(t);var i=a(222),c=a(12),n=a(0),r=a.n(n),l=a(668),s=a(1);function j(){var e=r.a.useState(50),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(s.jsx)(l.a,{value:a,onChange:function(e,t){i(t)},"aria-labelledby":"continuous-slider"})}function o(){var e=r.a.useState(35),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(s.jsx)(l.a,{disabled:!0,value:a,onChange:function(e,t){i(t)},"aria-labelledby":"continuous-slider"})}var b=a(1574),d=a.n(b),u=a(1575),x=a.n(u);function h(){var e=r.a.useState(30),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(s.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",children:[Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(d.a,{color:"primary"})}),Object(s.jsx)(i.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:a,onChange:function(e,t){n(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(x.a,{color:"primary"})})]})}var O=a(73);function m(){var e=r.a.useState(50),t=Object(c.a)(e,2),a=t[0],n=t[1],j=r.a.useState(78),o=Object(c.a)(j,2),b=o[0],d=o[1];return Object(s.jsxs)(i.a,{container:!0,direction:"column",children:[Object(s.jsxs)(i.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"caption",children:"Progress"})}),Object(s.jsx)(i.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:a,onChange:function(e,t){n(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(i.a,{item:!0,children:Object(s.jsxs)(O.a,{variant:"h6",children:[a,"%"]})})]}),Object(s.jsxs)(i.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"caption",children:"Progress"})}),Object(s.jsx)(i.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{value:b,color:"secondary",onChange:function(e,t){d(t)},"aria-labelledby":"continuous-slider"})}),Object(s.jsx)(i.a,{item:!0,children:Object(s.jsxs)(O.a,{variant:"h6",children:[b,"%"]})})]})]})}function p(e){return"".concat(e,"\xb0C")}function g(){return Object(s.jsxs)(i.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"h6",color:"primary",children:"15K"})}),Object(s.jsx)(i.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{defaultValue:40,getAriaValueText:p,valueLabelDisplay:"on",min:15,max:60})}),Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"h6",color:"primary",children:"60K"})})]})}function f(e){return"".concat(e,"\xb0C")}function v(){return Object(s.jsxs)(i.a,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"h6",color:"primary",children:"15K"})}),Object(s.jsx)(i.a,{item:!0,xs:!0,children:Object(s.jsx)(l.a,{defaultValue:25,getAriaValueText:f,valueLabelDisplay:"on","aria-labelledby":"discrete-slider-small-steps",marks:!0,step:5,min:15,max:60})}),Object(s.jsx)(i.a,{item:!0,children:Object(s.jsx)(O.a,{variant:"h6",color:"primary",children:"60K"})})]})}var V=a(649);function y(e){return"".concat(e,"\xb0C")}var L=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function w(){return Object(s.jsxs)(V.a,{sx:{height:300},spacing:1,direction:"row",children:[Object(s.jsx)(l.a,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:y,defaultValue:30}),Object(s.jsx)(l.a,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,disabled:!0}),Object(s.jsx)(l.a,{getAriaLabel:function(){return"Temperature"},orientation:"vertical",getAriaValueText:y,defaultValue:[20,37],marks:L})]})}var k=a(76),C=a(135),M=a(700),z=a(51);t.default=function(){return Object(s.jsx)(C.a,{title:"Slider",secondary:Object(s.jsx)(M.a,{link:"https://next.material-ui.com/components/slider/"}),children:Object(s.jsxs)(i.a,{container:!0,spacing:z.c,children:[Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Basic Slider",children:Object(s.jsx)(j,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Disabled",children:Object(s.jsx)(o,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Volume",children:Object(s.jsx)(h,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"With Label",children:Object(s.jsx)(m,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"With Popup Value",children:Object(s.jsx)(g,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Steps With Popup Value",children:Object(s.jsx)(v,{})})}),Object(s.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(k.a,{title:"Vertical Slider",children:Object(s.jsx)(w,{})})})]})})}},699:function(e,t,a){"use strict";var i=a(4),c=a(75),n=a(37),r=a(677),l=a(1),s=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,j=e.size,o=e.sx,b=Object(c.a)(e,s),d=Object(n.a)(),u=t&&!a&&{color:d.palette.background.paper,bgcolor:"".concat(t,".main")},x=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:d.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(j){case"badge":h={width:d.spacing(3.5),height:d.spacing(3.5)};break;case"xs":h={width:d.spacing(4.25),height:d.spacing(4.25)};break;case"sm":h={width:d.spacing(5),height:d.spacing(5)};break;case"lg":h={width:d.spacing(9),height:d.spacing(9)};break;case"xl":h={width:d.spacing(10.25),height:d.spacing(10.25)};break;case"md":h={width:d.spacing(7.5),height:d.spacing(7.5)};break;default:h={}}return Object(l.jsx)(r.a,Object(i.a)({sx:Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},u),x),h),o)},b))}},700:function(e,t,a){"use strict";var i=a(37),c=a(1809),n=a(601),r=a(675),l=a(699),s=a(1);t.a=function(e){var t=e.title,a=e.link,j=e.icon,o=Object(i.a)();return Object(s.jsx)(c.a,{title:t||"Reference",placement:"left",children:Object(s.jsxs)(n.a,{disableRipple:!0,children:[!j&&Object(s.jsx)(l.a,{component:r.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(s.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(s.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(s.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(s.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(s.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"clip0",children:Object(s.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),j&&Object(s.jsx)(l.a,{component:r.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:j})]})})}}}]);
//# sourceMappingURL=113.05d44b6b.chunk.js.map