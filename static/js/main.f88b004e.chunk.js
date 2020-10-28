(this["webpackJsonpreact-firebase-input-example"]=this["webpackJsonpreact-firebase-input-example"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);a(17);var n=a(2),l=a.n(n),r=a(15),c=a.n(r),u=a(9),s=a.n(u),i=a(11),p=a(6),o=a(12),m=e=>{var t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),s=Object(p.a)(u,2),i=s[0],o=s[1],m=e.dbRef,d=e.refKey,b=t=>{if(!m)throw Error("no database reference");if(!d)throw Error("no reference key");switch(e.type){case"checkbox":case"radio":f();default:E(t.target.value)}},E=e=>{var t={};t[d]=e,m.update(t)},f=e=>{var t={};m.once("value").then(e=>{e.exists()&&(e.val()[d]?t[d]=!1:t[d]=!0,m.update(t))})},h=Object.assign({},e);return delete h.dbRef,delete h.refKey,Object(n.useEffect)(()=>{m&&d&&m.on("value",t=>{var a;t.exists()&&(t.val()&&t.val()[d]&&(a=t.val()[d]),"checkbox"===e.type?o(1==a):"radio"===e.type?o(a===e.value):c(a))})},[m,d]),"textarea"===e.type?l.a.createElement("textarea",Object.assign({onChange:b,placeholder:"test"},h,{disabled:e.disabled||!m||!d})):"checkbox"===e.type||"radio"===e.type?l.a.createElement("input",Object.assign({onChange:b},h,{disabled:e.disabled||!m||!d,checked:i})):l.a.createElement("input",Object.assign({onChange:b,value:r},h,{disabled:e.disabled||!m||!d}))},d=(a(27),()=>{var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(p.a)(c,2),d=u[0],b=u[1],E=Object(n.useState)("/"),f=Object(p.a)(E,2),h=f[0],y=f[1],v=Object(n.useState)({}),x=Object(p.a)(v,2),O=x[0],g=x[1],j=Object(n.useState)(""),R=Object(p.a)(j,2),I=R[0],k=R[1],S=Object(n.useState)(""),C=Object(p.a)(S,2),K=C[0],w=C[1],T=Object(n.useState)(""),D=Object(p.a)(T,2),F=D[0],J=D[1],P=Object(n.useState)(""),z=Object(p.a)(P,2),U=(z[0],z[1],function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(""),J(""),g(t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,a=JSON.parse(O),d){e.next=11;break}return e.next=6,o.a.initializeApp(a);case 6:n=o.a.database(),b(n),r(n.ref(h)),e.next=13;break;case 11:l=d.ref(h),r(l);case 13:J("Success."),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),w(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{style:{padding:"10px 30px"}},l.a.createElement("form",null,l.a.createElement("h1",null,"Firebase Config"),l.a.createElement("h3",null,"Paste your Firebase Realtime Database config JSON here"),l.a.createElement("textarea",{placeholder:'{\n  "apiKey": "YOURAPIKEY",\n  "authDomain": "PROJECTID.firebaseapp.com",\n  "databaseURL": "https://PROJECTID.firebaseio.com",\n  "projectId": "PROJECTID",\n  "storageBucket": "PROJECTID.appspot.com",\n  "messagingSenderId": "873011175747",\n  "appId": "1:873011175747:web:a7066a6062c881d3bb4ff6"\n}',rows:"15",cols:"40",onChange:U}),l.a.createElement("h3",null,"Database Reference"),l.a.createElement("input",{onChange:e=>{y(e.target.value)},value:h}),l.a.createElement("h3",null,"Reference Key"),l.a.createElement("input",{onChange:e=>{k(e.target.value)},value:I}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Update Configuration"),l.a.createElement("button",{style:{background:"green",color:"white",padding:"10px"},onClick:A},"Submit"),l.a.createElement("p",{style:{color:"red"}},K),l.a.createElement("p",{style:{color:"green"}},F)),l.a.createElement("hr",null),l.a.createElement("h1",null,"Components"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("ul",null,l.a.createElement("h2",null,"Text Inputs"),l.a.createElement("li",null,l.a.createElement("h3",null,"FirebaseTextInput"),l.a.createElement(m,{dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="email"]'),l.a.createElement(m,{type:"email",dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="password"]'),l.a.createElement(m,{type:"password",dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="tel"]'),l.a.createElement(m,{type:"tel",dbRef:a,refKey:I,placeholder:"Edit text here!"}))),l.a.createElement("ul",null,l.a.createElement("h2",null,"Other Inputs"),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="checkbox"]'),l.a.createElement("div",null,l.a.createElement(m,{type:"checkbox",dbRef:a,refKey:I,placeholder:"Edit text here!"}),l.a.createElement("span",null,"Sets the reference true or false"))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="radio"] (TODO)'),l.a.createElement("small",null,"Sets the reference to the value of the radio button"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement(m,{type:"radio",dbRef:a,refKey:I,value:"cats"}),l.a.createElement("span",null,"Cats")),l.a.createElement("div",null,l.a.createElement(m,{type:"radio",dbRef:a,refKey:I,value:"dogs"}),l.a.createElement("span",null,"Dogs")),l.a.createElement("div",null,l.a.createElement(m,{type:"radio",dbRef:a,refKey:I,value:"lizards"}),l.a.createElement("span",null,"Lizards")))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="textarea"]'),l.a.createElement("div",null,l.a.createElement(m,{type:"textarea",dbRef:a,refKey:I}))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="range"]'),l.a.createElement("div",null,l.a.createElement(m,{type:"range",dbRef:a,refKey:I,min:"0",max:"100"}))))),l.a.createElement("div",{style:{height:"900px"}}))});c.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f88b004e.chunk.js.map