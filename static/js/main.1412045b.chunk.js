(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),r=s.n(a),n=(s(24),s(6)),i=s(7),l=s(9),o=s(8),j=s(13),d=s(17),h=s.n(d),b=(s(27),s(18)),u=s(5),m=s.n(u),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.github,t=this.props.data.name,s=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:t})}),Object(O.jsx)(m.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{style:{opacity:"1.0",fontWeight:"600",fontSize:"20px"},children:[s,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social",children:Object(O.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"GitHub"]})})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsx)("ul",{className:"copyright",children:Object(O.jsx)("li",{children:"\xa9 Copyright 2022 Luca Weissbeck"})})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,r=this.props.data.phone,n=this.props.data.email,i="resources/"+this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(m.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[c,Object(O.jsx)("br",{}),a]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:r}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:i,className:"button",style:{marginLeft:"auto",marginRight:"auto"},children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"handleProjectReportButton",value:function(e){if(!e)return!0}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){var t="images/"+e.image,s="resources/"+e.projectReport;return Object(O.jsxs)("div",{style:{marginTop:"10%"},children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),e.projectReport&&Object(O.jsx)("div",{className:"download",children:Object(O.jsxs)("a",{href:s,className:"button",onClick:this.handleProjectReportButton(e.secured),children:[Object(O.jsx)("i",{className:"fa fa-download"})," Download Project Report"]})}),Object(O.jsx)("p",{children:e.description}),"Moovster - Sustainable Mobility Startup"===e.title&&Object(O.jsxs)("p",{children:["Click ",Object(O.jsx)("a",{href:"https://www.getmoovster.com/",target:"_blank",rel:"noreferrer",style:{color:"blue",textDecoration:"underline"},children:"here"})," to learn more about Moovster!"]}),"IBM - IoT Center Munich"===e.title&&Object(O.jsxs)("p",{children:["The exhibit is now live at the German Museum in Nuremberg. ",Object(O.jsx)("a",{href:"https://www.deutsches-museum.de/nuernberg",target:"_blank",rel:"noreferrer",style:{color:"blue",textDecoration:"underline"},children:"https://www.deutsches-museum.de/nuernberg"})]}),e.image&&Object(O.jsx)("img",{src:t,alt:e.title}),!e.last&&Object(O.jsx)("hr",{})]},e.company)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(O.jsx)("em",{children:t.name})]},t.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work Experiences"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:c})]}),Object(O.jsx)(m.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(O.jsx)(m.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("p",{children:t}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(c.Component),N=s(19),g=s.n(N),w=0,y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)(g.a,{alt:e.title,src:t}),Object(O.jsx)("div",{style:{textAlign:"center"},children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title})})]})},w++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check out some of the projects I've done."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(i.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(y,{data:this.state.resumeData.portfolio}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),s}(c.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};r.a.render(Object(O.jsx)(k,{}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.1412045b.chunk.js.map