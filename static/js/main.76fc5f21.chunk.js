(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(15),r=c.n(o),l=c(11),a=c(8),i=c(22),s=c(9),u=c(24),d="todo/ADD",j="todo/REMOVE",f="todo/EDIT_TITLE",b="todo/EDIT_STATUS",m="todo/EDIT_ALL_STATUSES",p="todo/CLEAR_COMPLETED",O=function(e){return{type:d,todo:e}},h=function(e){return{type:j,todo:e}},x=function(e,t){return{type:f,todo:e,value:t}},g=function(e){return{type:b,todo:e}},v=function(e){return{type:m,value:e}},N=function(){return{type:p}},y=localStorage.getItem("todos"),E=null===y?[]:JSON.parse(y||""),C=Object(i.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(Object(u.a)(e),[t.todo]);case j:return e.filter((function(e){return e.id!==t.todo.id}));case f:return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{title:e.id===t.todo.id?t.value:e.title})}));case b:return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{completed:e.id===t.todo.id?!t.todo.completed:e.completed})}));case m:return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{completed:t.value})}));case p:return e.filter((function(e){return!e.completed}));default:return e}})),S=function(e){return e},k=C,_=c(14),T=c(3),D=c(23),w=c.n(D),A=(c(34),c(1)),I=function(e){var t=e.todo,c=Object(a.b)(),o=Object(n.useState)(0),r=Object(_.a)(o,2),l=r[0],i=r[1],s=Object(n.useState)(t.title),u=Object(_.a)(s,2),d=u[0],j=u[1],f=function(){c(h(t))},b=function(e){switch((!d.trim()&&"Enter"===e||!d.trim()&&"Blur"===e)&&f(),e){case"Escape":return i(0);case"Enter":case"Blur":return c(x(t,d)),j(d.trim()),i(0);default:return t}};return Object(A.jsxs)("li",{className:w()("todo",{completed:t.completed,editing:t.id===l}),onDoubleClick:function(){i(t.id)},children:[Object(A.jsxs)("div",{className:"view",children:[Object(A.jsx)("input",{onChange:function(){c(g(t))},type:"checkbox",checked:t.completed,className:"toggle"}),Object(A.jsx)("label",{className:"todo_title",children:t.title}),Object(A.jsx)("button",{type:"button",className:"destroy",onClick:f})]}),Object(A.jsx)("input",{type:"text",className:"edit",value:d,onChange:function(e){var t=e.target;j(t.value)},onKeyDown:function(e){var t=e.key;b(t)},onBlur:function(){b("Blur")}})]})},L=(c(36),function(){var e=Object(a.c)(S),t=Object(a.b)(),c=e.every((function(e){return e.completed})),n=Object(T.d)().pathname;return Object(A.jsxs)("section",{className:"main",children:[Object(A.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:c,onChange:function(){t(v(!c))}}),Object(A.jsx)("label",{className:"toggle_icon",htmlFor:"toggle-all"}),Object(A.jsx)("ul",{className:"todo_list",children:function(){switch(n){case"/active":return e.filter((function(e){return!e.completed}));case"/completed":return e.filter((function(e){return e.completed}));default:return e}}().map((function(e){return Object(A.jsx)(I,{todo:e},e.id)}))})]})}),B=(c(41),["All","Active","Completed"]),J=function(){return Object(A.jsx)("ul",{className:"filters",children:B.map((function(e){return Object(A.jsx)("li",{className:"filter",children:Object(A.jsx)(l.b,{className:"filter_link",to:"All"===e?"/":"/".concat(e.toLowerCase()),exact:!0,activeClassName:"filter_link--selected",children:e})},e)}))})},R=(c(42),function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),c=t[0],o=t[1],r=Object(a.c)(S),l=Object(a.b)();return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(A.jsxs)("section",{className:"todoapp",children:[Object(A.jsx)("h1",{className:"todoapp_title",children:"React Todo List"}),Object(A.jsxs)("header",{className:"header",children:[Object(A.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),c.trim()){var t={id:+new Date,title:c.trim(),completed:!1};l(O(t)),o("")}else o("")},children:Object(A.jsx)("input",{className:"header_input",value:c,onChange:function(e){var t=e.target.value;o(t)},name:"todoItem",type:"text",placeholder:"What needs to do?"})}),r.length>0&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L,{}),Object(A.jsxs)("footer",{className:"footer",children:[Object(A.jsx)("span",{className:"todo-count",children:1===r.filter((function(e){return!e.completed})).length?"".concat(r.filter((function(e){return!e.completed})).length," item left"):"".concat(r.filter((function(e){return!e.completed})).length," items left")}),Object(A.jsx)(J,{}),Object(A.jsx)("button",{type:"button",className:"clear-completed",hidden:!r.some((function(e){return e.completed})),onClick:function(){l(N())},children:"Clear completed"})]})]})]})]})});c(43);var F=function(){return Object(A.jsx)(R,{})};r.a.render(Object(A.jsx)(l.a,{children:Object(A.jsx)(a.a,{store:k,children:Object(A.jsx)(F,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.76fc5f21.chunk.js.map