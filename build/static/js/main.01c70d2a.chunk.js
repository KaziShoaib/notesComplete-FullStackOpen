(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(16),i=e.n(r),a=e(6),u=e(4),s=(e(7),function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:o})]})}),l=e(3),j=e.n(l),f="/api/notes",b=function(){return j.a.get(f).then((function(t){return t.data}))},d=function(t){return j.a.post(f,t).then((function(t){return t.data}))},h=function(t,n){return j.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},O=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},m=function(){return Object(c.jsx)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:Object(c.jsx)("em",{children:"Created by Kazi Shoaib Muhammad"})})},p=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],i=Object(o.useState)("a new note ...."),l=Object(u.a)(i,2),j=l[0],f=l[1],p=Object(o.useState)(!0),x=Object(u.a)(p,2),v=x[0],g=x[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),w=k[0],y=k[1];Object(o.useEffect)((function(){b().then((function(t){return r(t)}))}),[]),console.log("render ",e.length,"notes");var I=v?e:e.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"NOTES"}),Object(c.jsx)(O,{message:w}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!v)},children:["Show ",v?"Important":"All"]})}),Object(c.jsx)("ul",{children:I.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){!function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});h(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){y("the note '".concat(n.content,"' has been deleted")),setTimeout((function(){y(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()<.5};d(n).then((function(t){r(e.concat(t)),f("")})).catch((function(t){y(t.response.data.error),setTimeout((function(){y(null)}),5e3)}))},children:[Object(c.jsx)("input",{value:j,onChange:function(t){f(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Save"})]}),Object(c.jsx)(m,{})]})};i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))},7:function(t,n,e){}},[[39,1,2]]]);
//# sourceMappingURL=main.01c70d2a.chunk.js.map