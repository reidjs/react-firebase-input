(this["webpackJsonpreact-firebase-input-example"]=this["webpackJsonpreact-firebase-input-example"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);a(17);var n=a(2),l=a.n(n),r=a(15),c=a.n(r),u=a(9),i=a.n(u),s=a(11),o=a(8),p=a(12);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],c=Object(n.useState)(""),u=c[0],i=c[1],s=e.dbRef,o=e.refKey,p=function(t){if(!s)throw Error("no database reference");if(!o)throw Error("no reference key");switch(e.type){case"checkbox":return void f();case"radio":return void b(t.target.value);default:d(t.target.value)}},d=function(e){var t={};t[o]=e,s.update(t)},f=function(e){var t={};s.once("value").then((function(e){e.exists()&&(!0===e.val()[o]?(t[o]=!1,i(!1)):(t[o]=!0,i(!0)),s.update(t))}))},b=function(e){var t={};s.once("value").then((function(a){a.exists()&&(a.val()[o]===e?t[o]="":t[o]=e,s.update(t))}))},E=Object.assign({},e);return delete E.dbRef,delete E.refKey,Object(n.useEffect)((function(){s&&o&&("checkbox"===e.type?s.once("value").then((function(e){var t;e.exists()&&(e.val()&&e.val()[o]&&(t=e.val()[o]),i(1==t))})):"radio"===e.type?s.on("value",(function(t){var a;t.exists()&&(t.val()&&t.val()[o]&&(a=t.val()[o]),i(a===e.value))})):s.on("value",(function(e){var t;e.exists()&&(e.val()&&e.val()[o]&&(t=e.val()[o]),r(t))})))}),[s,o]),"textarea"===e.type?l.a.createElement("textarea",m({onChange:p},E,{disabled:e.disabled||!s||!o})):"checkbox"===e.type||"radio"===e.type?l.a.createElement("input",m({onChange:p},E,{disabled:e.disabled||!s||!o,checked:u})):l.a.createElement("input",m({onChange:p,value:a},E,{disabled:e.disabled||!s||!o}))},f=(a(27),()=>{var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),m=u[0],f=u[1],b=Object(n.useState)("/"),E=Object(o.a)(b,2),h=E[0],v=E[1],y=Object(n.useState)(localStorage.getItem("config")||""),x=Object(o.a)(y,2),g=x[0],O=x[1],j=Object(n.useState)(""),R=Object(o.a)(j,2),I=R[0],S=R[1],k=Object(n.useState)(""),w=Object(o.a)(k,2),C=w[0],K=w[1],T=Object(n.useState)(""),F=Object(o.a)(T,2),D=F[0],J=F[1],P=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(""),J(""),O(t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),e.prev=1,a=JSON.parse(g),m){e.next=11;break}return e.next=6,p.a.initializeApp(a);case 6:n=p.a.database(),f(n),r(n.ref(h)),e.next=13;break;case 11:l=m.ref(h),r(l);case 13:J("Success."),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),K(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(()=>{g&&(localStorage.setItem("config",g),z())},[g]),l.a.createElement("div",{style:{padding:"10px 30px"}},l.a.createElement("a",{href:"https://github.com/reidjs/react-firebase-input"},"Github Repo"),l.a.createElement("form",null,l.a.createElement("h1",null,"Firebase Config"),l.a.createElement("h3",null,"Paste your Firebase Realtime Database config JSON here"),l.a.createElement("small",null,"This will be saved in localStorage"),l.a.createElement("br",null),l.a.createElement("textarea",{placeholder:g||'{\n  "apiKey": "YOURAPIKEY",\n  "authDomain": "PROJECTID.firebaseapp.com",\n  "databaseURL": "https://PROJECTID.firebaseio.com",\n  "projectId": "PROJECTID",\n  "storageBucket": "PROJECTID.appspot.com",\n  "messagingSenderId": "873011175747",\n  "appId": "1:873011175747:web:a7066a6062c881d3bb4ff6"\n}',rows:"15",cols:"40",onChange:P}),l.a.createElement("h3",null,"Database Reference"),l.a.createElement("input",{onChange:e=>{v(e.target.value)},value:h}),l.a.createElement("h3",null,"Reference Key (must not be blank)"),l.a.createElement("input",{onChange:e=>{S(e.target.value)},value:I}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Update Configuration"),l.a.createElement("button",{style:{background:"green",color:"white",padding:"10px"},onClick:z},"Submit"),l.a.createElement("p",{style:{color:"red"}},C),l.a.createElement("p",{style:{color:"green"}},D)),l.a.createElement("hr",null),l.a.createElement("h1",null,"Components"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("ul",null,l.a.createElement("h2",null,"Text Inputs"),l.a.createElement("li",null,l.a.createElement("h3",null,"FirebaseTextInput"),l.a.createElement(d,{dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="email"]'),l.a.createElement(d,{type:"email",dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="password"]'),l.a.createElement(d,{type:"password",dbRef:a,refKey:I,placeholder:"Edit text here!"})),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="tel"]'),l.a.createElement(d,{type:"tel",dbRef:a,refKey:I,placeholder:"Edit text here!"}))),l.a.createElement("ul",null,l.a.createElement("h2",null,"Other Inputs"),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="checkbox"]'),l.a.createElement("div",null,l.a.createElement(d,{type:"checkbox",dbRef:a,refKey:I,placeholder:"Edit text here!"}),l.a.createElement("span",null,"Sets the reference true or false"))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="radio"]'),l.a.createElement("small",null,"Sets the reference to the value of the radio button"),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement(d,{type:"radio",dbRef:a,refKey:I,value:"cats"}),l.a.createElement("span",null,"Cats")),l.a.createElement("div",null,l.a.createElement(d,{type:"radio",dbRef:a,refKey:I,value:"dogs"}),l.a.createElement("span",null,"Dogs")),l.a.createElement("div",null,l.a.createElement(d,{type:"radio",dbRef:a,refKey:I,value:"lizards"}),l.a.createElement("span",null,"Lizards")))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="textarea"]'),l.a.createElement("div",null,l.a.createElement(d,{type:"textarea",dbRef:a,refKey:I}))),l.a.createElement("li",null,l.a.createElement("h3",null,'FirebaseTextInput[type="range"]'),l.a.createElement("div",null,l.a.createElement(d,{type:"range",dbRef:a,refKey:I,min:"0",max:"100"}))))),l.a.createElement("div",{style:{height:"900px"}}))});c.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8d004335.chunk.js.map