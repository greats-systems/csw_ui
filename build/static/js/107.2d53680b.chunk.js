(this["webpackJsonpcsw-members-portal"]=this["webpackJsonpcsw-members-portal"]||[]).push([[107],{1831:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return D}));var a=c(12),n=c(4),r=c(0),i=c(843),o=c(784),l=c(777),s=c(727),d=c(819),b=c(159),j=c(682),u=c(73),h=c(1809),p=c(680),m=c(782),O=c(783),f=c(785),x=c(1950),g=c(657),v=c(135),k=c(700),w=c(711),y=c.n(w),S=c(1);function L(e,t,c,a,n){return{name:e,calories:t,fat:c,carbs:a,protein:n}}var C=[L("Cupcake",305,3.7,67,4.3),L("Donut",452,25,51,4.9),L("Eclair",262,16,24,6),L("Frozen yoghurt",159,6,24,4),L("Gingerbread",356,16,49,3.9),L("Honeycomb",408,3.2,87,6.5),L("Ice cream sandwich",237,9,37,4.3),L("Jelly Bean",375,0,94,0),L("KitKat",518,26,65,7),L("Lollipop",392,.2,98,0),L("Marshmallow",318,0,81,2),L("Nougat",360,19,9,37),L("Oreo",437,18,63,4)];function M(e,t,c){return t[c]<e[c]?-1:t[c]>e[c]?1:0}function P(e,t){return"desc"===e?function(e,c){return M(e,c,t)}:function(e,c){return-M(e,c,t)}}function z(e,t){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,c){var a=t(e[0],c[0]);return 0!==a?a:e[1]-c[1]})),c.map((function(e){return e[0]}))}var V=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function I(e){var t=e.onSelectAllClick,c=e.order,a=e.orderBy,n=e.numSelected,r=e.rowCount,j=e.onRequestSort;return Object(S.jsx)(i.a,{children:Object(S.jsxs)(o.a,{children:[Object(S.jsx)(l.a,{padding:"checkbox",sx:{pl:3},children:Object(S.jsx)(s.a,{color:"primary",indeterminate:n>0&&n<r,checked:r>0&&n===r,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),V.map((function(e){return Object(S.jsx)(l.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id?c:void 0,children:Object(S.jsxs)(d.a,{active:a===e.id,direction:a===e.id?c:"asc",onClick:(t=e.id,function(e){j(e,t)}),children:[e.label,a===e.id?Object(S.jsx)(b.a,{component:"span",sx:g.a,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}var R=function(e){var t=e.numSelected;return Object(S.jsxs)(j.a,{sx:Object(n.a)({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?Object(S.jsxs)(u.a,{color:"inherit",variant:"subtitle1",children:[t," selected"]}):Object(S.jsx)(u.a,{variant:"h4",id:"tableTitle",children:"Nutrition"}),Object(S.jsx)(b.a,{sx:{flexGrow:1}}),t>0&&Object(S.jsx)(h.a,{title:"Delete",children:Object(S.jsx)(p.a,{size:"large",children:Object(S.jsx)(y.a,{})})})]})};function D(){var e=r.useState("asc"),t=Object(a.a)(e,2),c=t[0],n=t[1],i=r.useState("calories"),d=Object(a.a)(i,2),b=d[0],j=d[1],u=r.useState([]),h=Object(a.a)(u,2),p=h[0],g=h[1],w=r.useState(0),y=Object(a.a)(w,2),L=y[0],M=y[1],V=r.useState(!1),D=Object(a.a)(V,1)[0],B=r.useState(5),H=Object(a.a)(B,2),T=H[0],N=H[1],Z=L>0?Math.max(0,(1+L)*T-C.length):0;return Object(S.jsxs)(v.a,{content:!1,title:"Enhanced Table",secondary:Object(S.jsx)(k.a,{link:"https://next.material-ui.com/components/tables/"}),children:[Object(S.jsx)(R,{numSelected:p.length}),Object(S.jsx)(m.a,{children:Object(S.jsxs)(O.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:D?"small":"medium",children:[Object(S.jsx)(I,{numSelected:p.length,order:c,orderBy:b,onSelectAllClick:function(e){if(e.target.checked){var t=C.map((function(e){return e.name}));g(t)}else g([])},onRequestSort:function(e,t){n(b===t&&"asc"===c?"desc":"asc"),j(t)},rowCount:C.length}),Object(S.jsxs)(f.a,{children:[z(C,P(c,b)).slice(L*T,L*T+T).map((function(e,t){if("number"===typeof e)return null;var c,a=(c=e.name,-1!==p.indexOf(c)),n="enhanced-table-checkbox-".concat(t);return Object(S.jsxs)(o.a,{hover:!0,onClick:function(t){return function(e,t){var c=p.indexOf(t),a=[];-1===c?a=a.concat(p,t):0===c?a=a.concat(p.slice(1)):c===p.length-1?a=a.concat(p.slice(0,-1)):c>0&&(a=a.concat(p.slice(0,c),p.slice(c+1))),g(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(S.jsx)(l.a,{sx:{pl:3},padding:"checkbox",children:Object(S.jsx)(s.a,{color:"primary",checked:a,inputProps:{"aria-labelledby":n}})}),Object(S.jsx)(l.a,{component:"th",id:n,scope:"row",padding:"none",children:e.name}),Object(S.jsx)(l.a,{align:"right",children:e.calories}),Object(S.jsx)(l.a,{align:"right",children:e.fat}),Object(S.jsx)(l.a,{align:"right",children:e.carbs}),Object(S.jsx)(l.a,{sx:{pr:3},align:"right",children:e.protein})]},e.name)})),Z>0&&Object(S.jsx)(o.a,{style:{height:(D?33:53)*Z},children:Object(S.jsx)(l.a,{colSpan:6})})]})]})}),Object(S.jsx)(x.a,{rowsPerPageOptions:[5,10,25],component:"div",count:C.length,rowsPerPage:T,page:L,onPageChange:function(e,t){M(t)},onRowsPerPageChange:function(e){N(parseInt(null===e||void 0===e?void 0:e.target.value,10)),M(0)}})]})}},699:function(e,t,c){"use strict";var a=c(4),n=c(75),r=c(37),i=c(677),o=c(1),l=["color","outline","size","sx"];t.a=function(e){var t=e.color,c=e.outline,s=e.size,d=e.sx,b=Object(n.a)(e,l),j=Object(r.a)(),u=t&&!c&&{color:j.palette.background.paper,bgcolor:"".concat(t,".main")},h=c&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:j.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},p={};switch(s){case"badge":p={width:j.spacing(3.5),height:j.spacing(3.5)};break;case"xs":p={width:j.spacing(4.25),height:j.spacing(4.25)};break;case"sm":p={width:j.spacing(5),height:j.spacing(5)};break;case"lg":p={width:j.spacing(9),height:j.spacing(9)};break;case"xl":p={width:j.spacing(10.25),height:j.spacing(10.25)};break;case"md":p={width:j.spacing(7.5),height:j.spacing(7.5)};break;default:p={}}return Object(o.jsx)(i.a,Object(a.a)({sx:Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},u),h),p),d)},b))}},700:function(e,t,c){"use strict";var a=c(37),n=c(1809),r=c(601),i=c(675),o=c(699),l=c(1);t.a=function(e){var t=e.title,c=e.link,s=e.icon,d=Object(a.a)();return Object(l.jsx)(n.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(r.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(o.a,{component:i.a,href:c,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(o.a,{component:i.a,href:c,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},711:function(e,t,c){"use strict";var a=c(94);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(c(113)),r=c(1),i=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=i},727:function(e,t,c){"use strict";var a=c(5),n=c(9),r=c(2),i=c(0),o=c(103),l=c(86),s=c(185),d=c(39),b=c(1),j=Object(d.a)(Object(b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=c(10),m=c(13),O=c(8),f=c(72),x=c(85);function g(e){return Object(f.a)("MuiCheckbox",e)}var v=Object(x.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=Object(O.a)(s.a,{shouldForwardProp:function(e){return Object(O.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.indeterminate&&t.indeterminate,"default"!==c.color&&t["color".concat(Object(p.a)(c.color))]]}})((function(e){var t,c=e.theme,n=e.ownerState;return Object(r.a)({color:c.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:Object(l.a)("default"===n.color?c.palette.action.active:c.palette[n.color].main,c.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:c.palette[n.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:c.palette.action.disabled}),t))})),y=Object(b.jsx)(u,{}),S=Object(b.jsx)(j,{}),L=Object(b.jsx)(h,{}),C=i.forwardRef((function(e,t){var c,a,l=Object(m.a)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?y:s,j=l.color,u=void 0===j?"primary":j,h=l.icon,O=void 0===h?S:h,f=l.indeterminate,x=void 0!==f&&f,v=l.indeterminateIcon,C=void 0===v?L:v,M=l.inputProps,P=l.size,z=void 0===P?"medium":P,V=Object(n.a)(l,k),I=x?C:O,R=x?C:d,D=Object(r.a)({},l,{color:u,indeterminate:x,size:z}),B=function(e){var t=e.classes,c=e.indeterminate,a=e.color,n={root:["root",c&&"indeterminate","color".concat(Object(p.a)(a))]},i=Object(o.a)(n,g,t);return Object(r.a)({},t,i)}(D);return Object(b.jsx)(w,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":x},M),icon:i.cloneElement(I,{fontSize:null!=(c=I.props.fontSize)?c:z}),checkedIcon:i.cloneElement(R,{fontSize:null!=(a=R.props.fontSize)?a:z}),ownerState:D,ref:t},V,{classes:B}))}));t.a=C},819:function(e,t,c){"use strict";var a=c(5),n=c(9),r=c(2),i=c(103),o=c(11),l=c(0),s=c(601),d=c(39),b=c(1),j=Object(d.a)(Object(b.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),u=c(8),h=c(13),p=c(10),m=c(72),O=c(85);function f(e){return Object(m.a)("MuiTableSortLabel",e)}var x=Object(O.a)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),g=["active","children","className","direction","hideSortIcon","IconComponent"],v=Object(u.a)(s.a,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.active&&t.active]}})((function(e){var t=e.theme;return Object(a.a)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:t.palette.text.secondary},"&:hover":Object(a.a)({color:t.palette.text.secondary},"& .".concat(x.icon),{opacity:.5})},"&.".concat(x.active),Object(a.a)({color:t.palette.text.primary},"& .".concat(x.icon),{opacity:1,color:t.palette.text.secondary}))})),k=Object(u.a)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var c=e.ownerState;return[t.icon,t["iconDirection".concat(Object(p.a)(c.direction))]]}})((function(e){var t=e.theme,c=e.ownerState;return Object(r.a)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===c.direction&&{transform:"rotate(0deg)"},"asc"===c.direction&&{transform:"rotate(180deg)"})})),w=l.forwardRef((function(e,t){var c=Object(h.a)({props:e,name:"MuiTableSortLabel"}),a=c.active,l=void 0!==a&&a,s=c.children,d=c.className,u=c.direction,m=void 0===u?"asc":u,O=c.hideSortIcon,x=void 0!==O&&O,w=c.IconComponent,y=void 0===w?j:w,S=Object(n.a)(c,g),L=Object(r.a)({},c,{active:l,direction:m,hideSortIcon:x,IconComponent:y}),C=function(e){var t=e.classes,c=e.direction,a={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat(Object(p.a)(c))]};return Object(i.a)(a,f,t)}(L);return Object(b.jsxs)(v,Object(r.a)({className:Object(o.default)(C.root,d),component:"span",disableRipple:!0,ownerState:L,ref:t},S,{children:[s,x&&!l?null:Object(b.jsx)(k,{as:y,className:Object(o.default)(C.icon),ownerState:L})]}))}));t.a=w}}]);
//# sourceMappingURL=107.2d53680b.chunk.js.map