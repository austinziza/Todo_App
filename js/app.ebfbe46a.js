(function(t){function e(e){for(var n,a,i=e[0],u=e[1],d=e[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(p.length)p.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},c=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"53c583d2"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(l);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,o[1](d)}r[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"1e0c":function(t,e,o){"use strict";var n=o("3141"),r=o.n(n);r.a},3141:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},c=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList ")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},i=[],u={name:"Header"},d=u,l=(o("c129"),o("2877")),s=Object(l["a"])(d,a,i,!1,null,"756cf8b4",null),p=s.exports,f={name:"App",components:{Header:p}},m=f,v=(o("034f"),Object(l["a"])(m,r,c,!1,null,null,null)),h=v.exports,b=(o("d3b7"),o("8c4f")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.AddTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},_=[],g=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},j=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" ")]),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])},w=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,A=(o("1e0c"),Object(l["a"])(k,O,w,!1,null,"12b2ea2b",null)),P=A.exports,$={name:"Todos",components:{TodoItem:P},props:["todos"]},E=$,C=Object(l["a"])(E,T,j,!1,null,"ccee052c",null),H=C.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo......"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},M=[],I={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},L=I,J=(o("6893"),Object(l["a"])(L,S,M,!1,null,"67230b86",null)),q=J.exports,D=o("bc3a"),N=o.n(D),z={name:"Home",components:{Todos:H,AddTodo:q},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;N.a.delete("http://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){return e.todos=e.todos.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},AddTodo:function(t){var e=this,o=t.title,n=t.completed;N.a.post("http://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos=[].concat(Object(g["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;N.a.get("http://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))}},B=z,F=(o("cccb"),Object(l["a"])(B,y,_,!1,null,null,null)),G=F.exports;n["a"].use(b["a"]);var K=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Q=new b["a"]({routes:K}),R=Q;n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,o){},6893:function(t,e,o){"use strict";var n=o("e244"),r=o.n(n);r.a},"85ec":function(t,e,o){},c129:function(t,e,o){"use strict";var n=o("d402"),r=o.n(n);r.a},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},d402:function(t,e,o){},e244:function(t,e,o){}});
//# sourceMappingURL=app.ebfbe46a.js.map