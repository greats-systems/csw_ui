(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[132],{1743:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(0),function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Validate=t.Time=void 0;var n=a(r(5)),i=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}t.Time=n.default,t.Validate=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7));t.useInterval=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTime=t.useStopwatch=t.useTimer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){if((0,i.useEffect)((function(){console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")}),[]),e.expiryTimestamp){var t=(0,a.default)(e);return n({},t,{startTimer:t.start,stopTimer:t.pause,resetTimer:function(){}})}var r=(0,o.default)(e);return n({},r,{startTimer:r.start,stopTimer:r.pause,resetTimer:r.reset})};var i=r(0),a=s(r(4)),o=s(r(8)),c=s(r(9));function s(e){return e&&e.__esModule?e:{default:e}}t.useTimer=a.default,t.useStopwatch=o.default,t.useTime=c.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.expiryTimestamp,r=e.onExpire,l=e.autoStart,d=void 0===l||l,f=(0,a.useState)(t),m=i(f,2),v=m[0],p=m[1],b=(0,a.useState)(o.Time.getSecondsFromExpiry(v)),j=i(b,2),g=j[0],h=j[1],y=(0,a.useState)(d),O=i(y,2),x=O[0],T=O[1],S=(0,a.useState)(d),w=i(S,2),M=w[0],_=w[1],k=(0,a.useState)(u(v)),P=i(k,2),F=P[0],E=P[1];function C(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];E(u(e)),_(t),T(t),p(e),h(o.Time.getSecondsFromExpiry(e))}function I(){var e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*g),C(e)}return(0,c.useInterval)((function(){F!==s&&E(s);var e=o.Time.getSecondsFromExpiry(v);h(e),e<=0&&(o.Validate.onExpire(r)&&r(),T(!1),E(null))}),x?F:null),n({},o.Time.getTimeFromSeconds(g),{start:function(){M?(h(o.Time.getSecondsFromExpiry(v)),T(!0)):I()},pause:function(){T(!1)},resume:I,restart:C,isRunning:x})};var a=r(0),o=r(1),c=r(2),s=1e3;function u(e){if(!o.Validate.expiryTimestamp(e))return null;var t=o.Time.getSecondsFromExpiry(e),r=Math.floor(1e3*(t-Math.floor(t)));return r>0?r:s}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"getTimeFromSeconds",value:function(e){var t=Math.ceil(e),r=Math.floor(t/86400),n=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return{seconds:Math.floor(t%60),minutes:i,hours:n,days:r}}},{key:"getSecondsFromExpiry",value:function(e,t){var r=e-(new Date).getTime();if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromPrevTime",value:function(e,t){var r=(new Date).getTime()-e;if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromTimeNow",value:function(){var e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}},{key:"getFormattedTimeFromSeconds",value:function(t,r){var n=e.getTimeFromSeconds(t),i=n.seconds,a=n.minutes,o=n.hours,c="",s=o;return"12-hour"===r&&(c=o>=12?"pm":"am",s=o%12),{seconds:i,minutes:a,hours:s,ampm:c}}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"expiryTimestamp",value:function(e){var t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}},{key:"onExpire",value:function(e){var t=e&&"function"==typeof e;return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.useRef)();(0,n.useEffect)((function(){r.current=e})),(0,n.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){r.current&&r.current()}),t);return function(){return clearInterval(e)}}),[t])};var n=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.autoStart,r=e.offsetTimestamp,s=(0,a.useState)(o.Time.getSecondsFromExpiry(r,!0)||0),u=i(s,2),l=u[0],d=u[1],f=(0,a.useState)(new Date),m=i(f,2),v=m[0],p=m[1],b=(0,a.useState)(l+o.Time.getSecondsFromPrevTime(v||0,!0)),j=i(b,2),g=j[0],h=j[1],y=(0,a.useState)(t),O=i(y,2),x=O[0],T=O[1];return(0,c.useInterval)((function(){h(l+o.Time.getSecondsFromPrevTime(v,!0))}),x?1e3:null),n({},o.Time.getTimeFromSeconds(g),{start:function(){var e=new Date;p(e),T(!0),h(l+o.Time.getSecondsFromPrevTime(e,!0))},pause:function(){d(g),T(!1)},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=o.Time.getSecondsFromExpiry(e,!0)||0,n=new Date;p(n),d(r),T(t),h(r+o.Time.getSecondsFromPrevTime(n,!0))},isRunning:x})};var a=r(0),o=r(1),c=r(2)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.format,r=(0,a.useState)(o.Time.getSecondsFromTimeNow()),s=i(r,2),u=s[0],l=s[1];return(0,c.useInterval)((function(){l(o.Time.getSecondsFromTimeNow())}),1e3),n({},o.Time.getFormattedTimeFromSeconds(u,t))};var a=r(0),o=r(1),c=r(2)}]))},1744:function(e,t,r){"use strict";var n=r(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(113)),a=r(1),o=(0,i.default)([(0,a.jsx)("path",{d:"M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"},"1")],"NotificationsActiveTwoTone");t.default=o},1910:function(e,t,r){"use strict";r.r(t);var n=r(8),i=r(37),a=r(272),o=r(399),c=r(222),s=r(73),u=r(754),l=r(688),d=r(683),f=r(1743),m=r(224),v=r(51),p=r.p+"static/media/img-soon-grid.c03c8e42.svg",b=r.p+"static/media/img-soon-grid-dark.ddd4a6fb.svg",j=r.p+"static/media/img-soon-block.575db758.svg",g=r.p+"static/media/img-soon-blue-block.1e9f64d4.svg",h=r.p+"static/media/img-soon-purple-block.8b0303a8.svg",y=r(1744),O=r.n(y),x=r(1),T=Object(n.a)("div")({maxWidth:720,margin:"0 auto",position:"relative"}),S=Object(n.a)("div")({maxWidth:450,margin:"0 auto",textAlign:"center"}),w=Object(n.a)("div")({maxWidth:450,margin:"0 auto"}),M=Object(n.a)(a.a)({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),_=Object(n.a)("div")((function(e){var t=e.theme;return{background:"dark"===t.palette.mode?t.palette.dark.main:t.palette.secondary.light,color:"dark"===t.palette.mode?t.palette.dark.light:t.palette.secondary.main,borderRadius:"12px",padding:"24px 0",textAlign:"center",fontWeight:700,fontSize:"3rem"}})),k=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"8s blink ease-in-out infinite"}),P=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"15s wings ease-in-out infinite"}),F=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"12s wings ease-in-out infinite"});t.default=function(){var e=Object(i.a)(),t=new Date;t.setSeconds(t.getSeconds()+172800-55800);var r=Object(f.useTimer)({expiryTimestamp:t}),n=r.seconds,a=r.minutes,y=r.hours,E=r.days;return Object(x.jsx)(M,{children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(c.a,{container:!0,justifyContent:"center",spacing:v.c,children:[Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(S,{children:Object(x.jsxs)(c.a,{container:!0,spacing:v.c,children:[Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(s.a,{variant:"h1",children:"Coming Soon"})}),Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(s.a,{variant:"body1",children:"Something new is on it's way"})})]})})}),Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsxs)(T,{children:[Object(x.jsx)(u.a,{component:"img",image:"dark"===e.palette.mode?b:p,title:"Slider5 image"}),Object(x.jsx)(k,{src:j,title:"Slider 1 image"}),Object(x.jsx)(P,{src:g,title:"Slider 2 image"}),Object(x.jsx)(F,{src:h,title:"Slider 3 image"})]})}),Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(w,{children:Object(x.jsxs)(c.a,{container:!0,spacing:v.c,children:[Object(x.jsx)(c.a,{item:!0,xs:3,children:Object(x.jsx)(_,{children:E})}),Object(x.jsx)(c.a,{item:!0,xs:3,children:Object(x.jsx)(_,{children:y})}),Object(x.jsx)(c.a,{item:!0,xs:3,children:Object(x.jsx)(_,{children:a})}),Object(x.jsx)(c.a,{item:!0,xs:3,children:Object(x.jsx)(_,{children:n})})]})})}),Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(S,{children:Object(x.jsxs)(c.a,{container:!0,spacing:v.c,alignItems:"center",children:[Object(x.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(x.jsx)(l.a,{fullWidth:!0,label:"Email Address"})}),Object(x.jsx)(c.a,{item:!0,children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(d.a,{variant:"contained",size:"large",children:[Object(x.jsx)(O.a,{sx:{fontSize:"1.3rem",mr:.75}})," Notify Me"]})})})]})})})]})})})}},754:function(e,t,r){"use strict";var n=r(9),i=r(2),a=r(0),o=r(11),c=r(103),s=r(13),u=r(8),l=r(72),d=r(85);function f(e){return Object(l.a)("MuiCardMedia",e)}Object(d.a)("MuiCardMedia",["root","media","img"]);var m=r(1),v=["children","className","component","image","src","style"],p=Object(u.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.isMediaComponent,i=r.isImageComponent;return[t.root,n&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),b=["video","audio","picture","iframe","img"],j=["picture","img"],g=a.forwardRef((function(e,t){var r=Object(s.a)({props:e,name:"MuiCardMedia"}),a=r.children,u=r.className,l=r.component,d=void 0===l?"div":l,g=r.image,h=r.src,y=r.style,O=Object(n.a)(r,v),x=-1!==b.indexOf(d),T=!x&&g?Object(i.a)({backgroundImage:'url("'.concat(g,'")')},y):y,S=Object(i.a)({},r,{component:d,isMediaComponent:x,isImageComponent:-1!==j.indexOf(d)}),w=function(e){var t=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(c.a)(r,f,t)}(S);return Object(m.jsx)(p,Object(i.a)({className:Object(o.default)(w.root,u),as:d,role:!x&&g?"img":void 0,ref:t,style:T,ownerState:S,src:x?g||h:void 0},O,{children:a}))}));t.a=g}}]);
//# sourceMappingURL=132.fa141937.chunk.js.map