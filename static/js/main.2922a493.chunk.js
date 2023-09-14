(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),o=c(8),i=c(1),d=(c(13),c(14),c(7)),r=c.n(d),j=c(0),u=function(e){var t=e.todo,c=e.selectedTodo,s=e.onSelectTodo;return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":c===t}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t.id}),Object(j.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(j.jsx)("span",{className:"icon",children:c===t?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},t.id)},b=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(u,{todo:e,selectedTodo:c,onSelectTodo:s})}))})]})};!function(e){e.all="All",e.active="Active",e.completed="Completed"}(s||(s={}));var h=function(e){var t=e.query,c=e.onQueryChange,a=e.selectedFilter,n=e.onSelectFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(null===e||void 0===e?void 0:e.target.value)},children:Object.entries(s).map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("option",{value:c,children:s},c)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear Search",onClick:function(){c(""),n("all")}})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var O=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.todo,c=e.onSelectTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1];return Object(i.useEffect)((function(){var e;null!==t&&void 0!==t&&t.userId&&(e=null===t||void 0===t?void 0:t.userId,m("/users/".concat(e))).then(o)}),[null===t||void 0===t?void 0:t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","aria-label":"Modal Close","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(j.jsx)(O,{})]})},f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(""),n=Object(l.a)(a,2),d=n[0],r=n[1],u=Object(i.useState)("all"),f=Object(l.a)(u,2),v=f[0],N=f[1],p=Object(i.useState)(null),y=Object(l.a)(p,2),g=y[0],S=y[1];Object(i.useEffect)((function(){m("/todos").then((function(e){s(e)}))}),[]);var T=function(e,t,c){var s=Object(o.a)(e);if(t&&(s=e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c)switch(c){case"active":return s.filter((function(e){return!1===e.completed}));case"completed":return s.filter((function(e){return!0===e.completed}));default:return s}return s}(c,d,v);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{query:d,onQueryChange:r,selectedFilter:v,onSelectFilter:N})}),Object(j.jsx)("div",{className:"block",children:c.length?Object(j.jsx)(b,{todos:T,selectedTodo:g,onSelectTodo:S}):Object(j.jsx)(O,{})})]})})}),g&&Object(j.jsx)(x,{todo:g,onSelectTodo:S})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2922a493.chunk.js.map