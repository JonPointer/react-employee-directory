(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(12),o=n.n(s),c=n(13),a=n(14),i=n(15),l=n(18),u=n(17),m=(n(23),n(0)),d=function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{alt:e.name,src:e.image})}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{children:"Country:"})," ",e.country]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{children:"Seniority:"})," ",e.seniority," Years"]})]})}),Object(m.jsx)("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove",children:Object(m.jsx)("i",{class:"far fa-trash-alt"})})]})};n(25);var j=function(e){return Object(m.jsx)("div",{className:"wrapper",children:e.children})},y=n(16),p=n.n(y),h=function(e){return console.log(e),p.a.get("https://randomuser.me/api/"+e)},b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],country:"",originalEmployees:[]},e.loadEmployees=function(t){console.log("Got here"),h(t).then((function(t){e.setState({employees:t.data.results,originalEmployees:t.data.results}),console.log(t.data.results)})).catch((function(e){return console.log(e)}))},e.removeEmployee=function(t){var n=e.state.employees.filter((function(n){return e.state.employees.indexOf(n)!==t}));e.setState({employees:n})},e.employeeSortBySeniority=function(){var t=e.state.employees.sort((function(e,t){return e.registered.age>t.registered.age?1:-1}));e.setState({employees:t})},e.handleInputChange=function(t){var n=t.target,r=n.name,s=n.value;e.setState(Object(c.a)({},r,s));var o=e.state.originalEmployees.filter((function(e){return e.location.country.trim().toLowerCase().includes(s.trim().toLowerCase())}));e.setState({employees:o})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees("?inc=name,picture,location,registered&results=15")}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"submit",onClick:this.employeeSortBySeniority,className:"btn btn-success",children:"Sort by Seniority"}),Object(m.jsx)("br",{}),Object(m.jsx)("form",{className:"search",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Filter by Country:"}),Object(m.jsx)("input",{name:"country",value:this.state.country,type:"text",className:"form-control",placeholder:"Enter Desired Country",onChange:this.handleInputChange})]})}),Object(m.jsx)(j,{children:this.state.employees.map((function(t){return Object(m.jsx)(d,{removeEmployee:e.removeEmployee,id:e.state.employees.indexOf(t),name:"".concat(t.name.title," ").concat(t.name.first," ").concat(t.name.last),country:t.location.country,seniority:t.registered.age,image:t.picture.medium},e.state.employees.indexOf(t))}))})]})}}]),n}(r.Component);n(44),n(45);o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a7d2b006.chunk.js.map