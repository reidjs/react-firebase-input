(this["webpackJsonpreact-firebase-input-example"]=this["webpackJsonpreact-firebase-input-example"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);a(17);var l=a(2),n=a.n(l),r=a(15),c=a.n(r),u=a(9),i=a.n(u),s=a(11),m=a(6),o=a(12),p=e=>{var t=e.dbRef,a=Object.assign({},e);return delete a.onSubmit,delete a.dbRef,n.a.createElement("form",Object.assign({},a,{onSubmit:a=>{a.preventDefault();var l={};e.children.forEach(e=>{var t=e.props.refkey;if(t){var a=e.props.value;l[t]=a}}),t.update(l)}}),e.children)},d=e=>{var t=Object(l.useState)(""),a=Object(m.a)(t,2),r=a[0],c=a[1],u=Object(l.useState)(""),i=Object(m.a)(u,2),s=i[0],o=i[1],p=e.dbRef,d=e.refKey,b=t=>{if(!p)throw Error("no database reference");if(!d)throw Error("no reference key");switch(e.type){case"checkbox":return void f();case"radio":return void h(t.target.value);default:E(t.target.value)}},E=e=>{var t={};t[d]=e,p.update(t)},f=e=>{var t={};p.once("value").then(e=>{e.exists()&&(!0===e.val()[d]?(t[d]=!1,o(!1)):(t[d]=!0,o(!0)),p.update(t))})},h=e=>{var t={};p.once("value").then(a=>{a.exists()&&(a.val()[d]===e?t[d]="":t[d]=e,p.update(t))})},v=Object.assign({},e);return delete v.dbRef,delete v.refKey,Object(l.useEffect)(()=>{p&&d&&("checkbox"===e.type?p.once("value").then(e=>{var t;e.exists()&&(e.val()&&e.val()[d]&&(t=e.val()[d]),o(1==t))}):"radio"===e.type?p.on("value",t=>{var a;t.exists()&&(t.val()&&t.val()[d]&&(a=t.val()[d]),o(a===e.value))}):p.on("value",e=>{var t;e.exists()&&(e.val()&&e.val()[d]&&(t=e.val()[d]),c(t))}))},[p,d]),"textarea"===e.type?n.a.createElement("textarea",Object.assign({onChange:b},v,{disabled:e.disabled||!p||!d})):"checkbox"===e.type||"radio"===e.type?n.a.createElement("input",Object.assign({onChange:b},v,{disabled:e.disabled||!p||!d,checked:s})):n.a.createElement("input",Object.assign({onChange:b,value:r},v,{disabled:e.disabled||!p||!d}))},b=(a(27),()=>{var e=Object(l.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(null),u=Object(m.a)(c,2),b=u[0],E=u[1],f=Object(l.useState)("/"),h=Object(m.a)(f,2),v=h[0],y=h[1],g=Object(l.useState)(localStorage.getItem("config")||""),x=Object(m.a)(g,2),O=x[0],j=x[1],R=Object(l.useState)(""),S=Object(m.a)(R,2),k=S[0],I=S[1],C=Object(l.useState)(""),w=Object(m.a)(C,2),F=w[0],K=w[1],D=Object(l.useState)(""),J=Object(m.a)(D,2),P=J[0],T=J[1],N=Object(l.useState)(""),z=Object(m.a)(N,2),B=z[0],U=z[1],A=Object(l.useState)(""),L=Object(m.a)(A,2),Y=L[0],G=L[1],W=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(""),T(""),j(t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,l,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),e.prev=1,a=JSON.parse(O),b){e.next=11;break}return e.next=6,o.a.initializeApp(a);case 6:l=o.a.database(),E(l),r(l.ref(v)),e.next=13;break;case 11:n=b.ref(v),r(n);case 13:T("Success."),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),K(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)(()=>{O&&(localStorage.setItem("config",O),q())},[O]),n.a.createElement("div",{style:{padding:"10px 30px"}},n.a.createElement("a",{href:"https://github.com/reidjs/react-firebase-input"},"Github Repo"),n.a.createElement("form",null,n.a.createElement("h1",null,"Firebase Config"),n.a.createElement("h3",null,"Paste your Firebase Realtime Database config JSON here"),n.a.createElement("small",null,"This will be saved in localStorage"),n.a.createElement("br",null),n.a.createElement("textarea",{placeholder:O||'{\n  "apiKey": "YOURAPIKEY",\n  "authDomain": "PROJECTID.firebaseapp.com",\n  "databaseURL": "https://PROJECTID.firebaseio.com",\n  "projectId": "PROJECTID",\n  "storageBucket": "PROJECTID.appspot.com",\n  "messagingSenderId": "873011175747",\n  "appId": "1:873011175747:web:a7066a6062c881d3bb4ff6"\n}',rows:"15",cols:"40",onChange:W}),n.a.createElement("h3",null,"Database Reference"),n.a.createElement("input",{onChange:e=>{y(e.target.value)},value:v}),n.a.createElement("h3",{style:{color:k?"":"red",marginBottom:"0"}},"Reference Key"),n.a.createElement("small",null,"(Not necessary for FirebaseForm)"),n.a.createElement("h3",null),n.a.createElement("input",{onChange:e=>{I(e.target.value)},style:{border:k?"":"1px solid red"},value:k}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",null,"Update Configuration"),n.a.createElement("button",{style:{background:"green",color:"white",padding:"10px"},onClick:q},"Submit"),n.a.createElement("p",{style:{color:"red"}},F),n.a.createElement("p",{style:{color:"green"}},P)),n.a.createElement("hr",null),n.a.createElement("h1",null,"Components"),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement("ul",null,n.a.createElement("h2",null,"Text Inputs"),n.a.createElement("li",null,n.a.createElement("h3",null,"FirebaseInput"),n.a.createElement(d,{dbRef:a,refKey:k,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="email"]'),n.a.createElement(d,{type:"email",dbRef:a,refKey:k,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="password"]'),n.a.createElement(d,{type:"password",dbRef:a,refKey:k,placeholder:"Edit text here!"})),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="tel"]'),n.a.createElement(d,{type:"tel",dbRef:a,refKey:k,placeholder:"Edit text here!"}))),n.a.createElement("ul",null,n.a.createElement("h2",null,"Other Inputs"),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="checkbox"]'),n.a.createElement("div",null,n.a.createElement(d,{type:"checkbox",dbRef:a,refKey:k,placeholder:"Edit text here!"}),n.a.createElement("span",null,"Sets the reference true or false"))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="radio"]'),n.a.createElement("small",null,"Sets the reference to the value of the radio button"),n.a.createElement("ul",null,n.a.createElement("div",null,n.a.createElement(d,{type:"radio",dbRef:a,refKey:k,value:"cats"}),n.a.createElement("span",null,"Cats")),n.a.createElement("div",null,n.a.createElement(d,{type:"radio",dbRef:a,refKey:k,value:"dogs"}),n.a.createElement("span",null,"Dogs")),n.a.createElement("div",null,n.a.createElement(d,{type:"radio",dbRef:a,refKey:k,value:"lizards"}),n.a.createElement("span",null,"Lizards")))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="textarea"]'),n.a.createElement("div",null,n.a.createElement(d,{type:"textarea",dbRef:a,refKey:k}))),n.a.createElement("li",null,n.a.createElement("h3",null,'FirebaseInput[type="range"]'),n.a.createElement("div",null,n.a.createElement(d,{type:"range",dbRef:a,refKey:k,min:"0",max:"100"})))),n.a.createElement("ul",null,n.a.createElement("h2",null,"Forms"),n.a.createElement("li",null,n.a.createElement("h3",null,"FirebaseForm"),n.a.createElement("div",null,n.a.createElement(p,{style:{border:"1px solid black",padding:"15px"},dbRef:a},n.a.createElement("div",null,"Example Form"),n.a.createElement("p",null),n.a.createElement("div",null,"Name"),n.a.createElement("input",{onChange:e=>U(e.target.value),value:B,refkey:"name"}),n.a.createElement("div",{style:{margin:"10px 0"}}),n.a.createElement("div",null,"Email"),n.a.createElement("input",{onChange:e=>G(e.target.value),value:Y,refkey:"email",type:"email"}),n.a.createElement("p",null),n.a.createElement("button",null,"Submit")))))),n.a.createElement("div",{style:{height:"100px"}}))});c.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7370a61b.chunk.js.map