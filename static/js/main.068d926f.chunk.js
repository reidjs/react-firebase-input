(this["webpackJsonpreact-firebase-input-example"]=this["webpackJsonpreact-firebase-input-example"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);a(17);var l=a(2),n=a.n(l),r=a(15),c=a.n(r),u=a(9),s=a.n(u),i=a(11),o=a(6),p=a(12),m=e=>{var t=Object(l.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(l.useState)(""),s=Object(o.a)(u,2),i=s[0],p=s[1],m=e.dbRef,d=e.refKey,b=t=>{if(!m)throw Error("no database reference");if(!d)throw Error("no reference key");switch(e.type){case"checkbox":return void f();case"radio":return void h(t.target.value);default:E(t.target.value)}},E=e=>{var t={};t[d]=e,m.update(t)},f=e=>{var t={};m.once("value").then(e=>{e.exists()&&(!0===e.val()[d]?(t[d]=!1,p(!1)):(t[d]=!0,p(!0)),m.update(t))})},h=e=>{var t={};m.once("value").then(a=>{a.exists()&&(a.val()[d]===e?t[d]="":t[d]=e,m.update(t))})},v=Object.assign({},e);return delete v.dbRef,delete v.refKey,Object(l.useEffect)(()=>{m&&d&&("checkbox"===e.type?m.once("value").then(e=>{var t;e.exists()&&(e.val()&&e.val()[d]&&(t=e.val()[d]),p(1==t))}):"radio"===e.type?m.on("value",t=>{var a;t.exists()&&(t.val()&&t.val()[d]&&(a=t.val()[d]),p(a===e.value))}):m.on("value",e=>{var t;e.exists()&&(e.val()&&e.val()[d]&&(t=e.val()[d]),c(t))}))},[m,d]),"textarea"===e.type?n.a.createElement("textarea",Object.assign({onChange:b},v,{disabled:e.disabled||!m||!d})):"checkbox"===e.type||"radio"===e.type?n.a.createElement("input",Object.assign({onChange:b},v,{disabled:e.disabled||!m||!d,checked:i})):n.a.createElement("input",Object.assign({onChange:b,value:r},v,{disabled:e.disabled||!m||!d}))},d=(a(27),()=>{var e=Object(l.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],E=Object(l.useState)("/"),f=Object(o.a)(E,2),h=f[0],v=f[1],y=Object(l.useState)(localStorage.getItem("config")||""),x=Object(o.a)(y,2),g=x[0],O=x[1],j=Object(l.useState)(""),I=Object(o.a)(j,2),R=I[0],S=I[1],k=Object(l.useState)(""),w=Object(o.a)(k,2),C=w[0],K=w[1],T=Object(l.useState)(""),F=Object(o.a)(T,2),D=F[0],J=F[1],P=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(""),J(""),O(t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,l,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),e.prev=1,a=JSON.parse(g),d){e.next=11;break}return e.next=6,p.a.initializeApp(a);case 6:l=p.a.database(),b(l),r(l.ref(h)),e.next=13;break;case 11:n=d.ref(h),r(n);case 13:J("Success."),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),K(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)(()=>{g&&(localStorage.setItem("config",g),z())},[g]),n.a.createElement("div",{style:{padding:"10px 30px"}},n.a.createElement("form",null,n.a.createElement("h1",null,"Firebase Config"),n.a.createElement("h3",null,"Paste your Firebase Realtime Database config JSON here"),n.a.createElement("small",null,"This will be saved in localStorage"),n.a.createElement("br",null),n.a.createElement("textarea",{placeholder:g||'{\n  "apiKey": "YOURAPIKEY",\n  "authDomain": "PROJECTID.firebaseapp.com",\n  "databaseURL": "https://PROJECTID.firebaseio.com",\n  "projectId": "PROJECTID",\n  "storageBucket": "PROJECTID.appspot.com",\n  "messagingSenderId": "873011175747",\n  "appId": "1:873011175747:web:a7066a6062c881d3bb4ff6"\n}',rows:"15",cols:"40",onChange:P}),n.a.createElement("h3",null,"Database Reference"),n.a.createElement("input",{onChange:e=>{v(e.target.value)},value:h}),n.a.createElement("h3",null,"Reference Key (must not be blank)"),n.a.createElement("input",{onChange:e=>{S(e.target.value)},value:R}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Update Configuration"),n.a.createElement("button",{style:{background:"green",color:"white",padding:"10px"},onClick:z},"Submit"),n.a.createElement("p",{style:{color:"red"}},C),n.a.createElement("p",{style:{color:"green"}},D)),n.a.createElement("hr",null),n.a.createElement("h1",null,"Components"),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("ul",null,n.a.createElement("h2",null,"Text Inputs"),n.a.createElement("li",null,n.a.createElement("h3",null,"FirebaseTextInput"),n.a.createElement(m,{dbRef:a,refKey:R,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="email"]'),n.a.createElement(m,{type:"email",dbRef:a,refKey:R,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="password"]'),n.a.createElement(m,{type:"password",dbRef:a,refKey:R,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="tel"]'),n.a.createElement(m,{type:"tel",dbRef:a,refKey:R,placeholder:"Edit text here!"}))),n.a.createElement("ul",null,n.a.createElement("h2",null,"Other Inputs"),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="checkbox"]'),n.a.createElement("div",null,n.a.createElement(m,{type:"checkbox",dbRef:a,refKey:R,placeholder:"Edit text here!"}),n.a.createElement("span",null,"Sets the reference true or false"))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="radio"]'),n.a.createElement("small",null,"Sets the reference to the value of the radio button"),n.a.createElement("form",null,n.a.createElement("div",null,n.a.createElement(m,{type:"radio",dbRef:a,refKey:R,value:"cats"}),n.a.createElement("span",null,"Cats")),n.a.createElement("div",null,n.a.createElement(m,{type:"radio",dbRef:a,refKey:R,value:"dogs"}),n.a.createElement("span",null,"Dogs")),n.a.createElement("div",null,n.a.createElement(m,{type:"radio",dbRef:a,refKey:R,value:"lizards"}),n.a.createElement("span",null,"Lizards")))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="textarea"]'),n.a.createElement("div",null,n.a.createElement(m,{type:"textarea",dbRef:a,refKey:R}))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseTextInput[type="range"]'),n.a.createElement("div",null,n.a.createElement(m,{type:"range",dbRef:a,refKey:R,min:"0",max:"100"}))))),n.a.createElement("div",{style:{height:"900px"}}))});c.a.render(n.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.068d926f.chunk.js.map