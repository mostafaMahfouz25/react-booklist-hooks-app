(this["webpackJsonptraining-on-hoox-and-context"]=this["webpackJsonptraining-on-hoox-and-context"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=(a(12),a(6)),s=a(2),u=a(15),m=Object(n.createContext)();var i=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("books"))||[]),a=Object(s.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),r.a.createElement(m.Provider,{value:{books:o,addBook:function(e,t){c([].concat(Object(l.a)(o),[{title:e,author:t,id:Object(u.a)()}]))},removeBook:function(e){c(o.filter((function(t){return t.id!==e})))}}},e.children)};function b(){var e=Object(n.useContext)(m).books;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center display-3  text-white"},"List Of Books"),r.a.createElement("p",{className:"text-center display-4 border-bottom pb-4 my-2 text-white"}," Currently You Have ",e.length," Books"))}function f(e){var t=e.book,a=Object(n.useContext)(m).removeBook;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h3",null,t.title,r.a.createElement("i",{className:"fa fa-trash btn btn-danger float-right",onClick:function(){return a(t.id)}})),r.a.createElement("h5",null,t.author))}function d(){var e=Object(n.useContext)(m).books;return e.length?r.a.createElement("ul",{className:"list-group"},e.map((function(e,t){return r.a.createElement(f,{key:t,book:e})}))):r.a.createElement("div",{className:"alert alert-danger"}," There Is No Books Here ! :) ")}function E(e){e.book;var t=Object(n.useContext)(m).addBook,a=Object(n.useState)(""),o=Object(s.a)(a,2),c=o[0],l=o[1],u=Object(n.useState)(""),i=Object(s.a)(u,2),b=i[0],f=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,b),l(""),f("")},className:"border p-3 my-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-white"},"Name Of The Book"),r.a.createElement("input",{type:"text",className:"form-control",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-white"},"Name Of The Author"),r.a.createElement("input",{type:"text",className:"form-control",value:b,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btn btn-success btn-block",value:"Add New Boook"})))}var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto"},r.a.createElement(b,null),r.a.createElement(d,null),r.a.createElement(E,null))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.37bc00e2.chunk.js.map