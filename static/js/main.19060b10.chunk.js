(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(15),r=n.n(c),i=(n(27),n(6)),o=n.n(i),l=n(16),d=n(17),m=n(18),j=n(22),h=n(21),u=n(19),b=(n(29),n(1)),f=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"header bg-white d-flex justify-content-center bg-white shadow text-gray-800",children:Object(b.jsxs)("header",{className:"navbar text-center ",children:[" ",Object(b.jsx)(u.a,{className:"logo"}),"Employee Directory"]})}),Object(b.jsx)("div",{className:" row h4 d-flex justify-content-left ",children:Object(b.jsx)("h4",{children:" Search Direcory by Name"})}),Object(b.jsx)("div",{className:" row h5 d-flex justify-content-left ",children:Object(b.jsx)("h5",{children:" Order Table by Name or City"})})]})},y=(n(31),function(e){var t=e.children;return Object(b.jsx)("div",{className:"wrapper",children:t})}),x=n(4),O=(n(32),function(e){var t=e.employees,n=e.sortName,s=e.toggleName,a=e.sortCity,c=e.toggleCity;return Object(b.jsx)("div",{style:{padding:"0px"},className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12 ",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"text-center md:flex bg-white shadow-lg items-center justify-between",children:[Object(b.jsx)("th",{children:"Image"}),Object(b.jsxs)("th",{className:"arrow",onClick:function(){return n()},children:["Name ",s?Object(b.jsx)(x.a,{}):Object(b.jsx)(x.b,{})]}),Object(b.jsxs)("th",{className:"arrow",onClick:function(){return a()},children:["City ",c?Object(b.jsx)(x.a,{}):Object(b.jsx)(x.b,{})," "]}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Phone"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{className:" text-center md:flex bg-white shadow rounded-md items-center justify-between ",children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{alt:"img-of-employee#".concat(e.id.value),src:e.picture.medium})}),Object(b.jsx)("td",{children:"".concat(e.name.first,"  ").concat(e.name.last)}),Object(b.jsx)("td",{children:e.location.city}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.cell})]},e.id.value)}))})]})})})})}),g=(n(33),function(e){var t=e.handleChange,n=e.value;return Object(b.jsx)("div",{className:"row search container-fluid",children:Object(b.jsx)("div",{className:"input-group col-sm-12 col-md-12",children:Object(b.jsx)("form",{className:"form-inline my-2 my-lg-0 ",children:Object(b.jsx)("input",{onChange:function(e){return t(e)},style:{width:"260px"},value:n,className:"form-control mr-sm-2 shadow",name:"search",type:"text",placeholder:"Search by First or Last Name","aria-label":"Search"})})})})}),p=(n(34),n(20)),v=n.n(p),w=function(){return v.a.get("https://randomuser.me/api/?results=100&nat=us")},C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],search:"",nameDescending:!0,cityDecending:!0},e.getEmployees=Object(l.a)(o.a.mark((function t(){var n,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:n=t.sent,s=n.data.results,a=s.sort((function(e,t){var n=e.name.first.toLowerCase(),s=t.name.first.toLowerCase();return n<s?-1:n>s?1:0})),e.setState({employees:a});case 6:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target.value;e.setState({search:n})},e.sortByName=function(){if(!0===e.state.nameDescending){var t=e.state.employees.sort((function(e,t){var n=e.name.first.toLowerCase(),s=t.name.first.toLowerCase();return n>s?-1:n<s?1:0}));e.setState({employees:t,nameDescending:!1})}else{var n=e.state.employees.sort((function(e,t){var n=e.name.first.toLowerCase(),s=t.name.first.toLowerCase();return n<s?-1:n>s?1:0}));e.setState({employees:n,nameDescending:!0})}},e.sortByCity=function(){if(!0===e.state.cityDecending){var t=e.state.employees.sort((function(e,t){var n=e.location.city.toLowerCase(),s=t.location.city.toLowerCase();return n>s?-1:n<s?1:0}));e.setState({employees:t,cityDecending:!1})}else{console.log("false click");var n=e.state.employees.sort((function(e,t){var n=e.location.city.toLowerCase(),s=t.location.city.toLowerCase();return n<s?-1:n>s?1:0}));e.setState({employees:n,cityDecending:!0})}},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return-1!==t.name.first.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.name.last.toLowerCase().indexOf(e.state.search.toLowerCase())}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(y,{children:[Object(b.jsx)(g,{value:this.state.search,handleChange:this.handleChange}),Object(b.jsx)(O,{employees:t,sortName:this.sortByName,toggleName:this.state.nameDescending,sortCity:this.sortByCity,toggleCity:this.state.cityDecending})]})]})}}]),n}(a.a.Component);n(53);r.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.19060b10.chunk.js.map