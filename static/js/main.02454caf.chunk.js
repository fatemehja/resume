(this["webpackJsonpresume-project"]=this["webpackJsonpresume-project"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(2),s=n.n(c),a=n(12),r=n.n(a),l=(n(29),n(3)),o=n(4),j=n(6),u=n(5),h=n(7),b=(n(30),n(21)),d=function(e){return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-35px",transform:"translateY(-70px)"},onClick:e.onClick,children:Object(i.jsx)("div",{style:{maxWidth:"30px",verticalAlign:"bottom",fontSize:"4vh",margin:"0",padding:"0"},children:Object(i.jsx)(b.a,{})})})},m=n(8),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"full-page ".concat(this.props.className," || ''"),children:e}),Object(i.jsx)("div",{children:Object(i.jsx)(m.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive,children:Object(i.jsx)(d,{onClick:function(){console.log("It works")}})})}),Object(i.jsx)(m.Element,{name:"test1",className:"element"})]})}}]),n}(c.Component),O=(n(41),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(p,{className:"first",children:[Object(i.jsx)("h1",{children:h.title}),Object(i.jsx)("h2",{children:h.subtitle}),Object(i.jsx)("div",{className:"icons-wrapper",children:Object.keys(h.links).map((function(e){var t="images/icons/".concat(e,".png");return Object(i.jsx)("a",{href:h.links[e],className:"icon",children:Object(i.jsx)("img",{height:"25px",alt:e,src:t})})}))})]})}}]),n}(c.Component)),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(p,{className:"second",children:[Object(i.jsx)("h3",{children:h.aboutSection.title}),Object(i.jsx)("p",{children:h.aboutSection.items[0].content})]})}}]),n}(c.Component),f=(n(42),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.skill;return Object(i.jsxs)("div",{className:"cards-wrapper",children:[Object(i.jsx)("div",{className:"image-wrapper",children:Object(i.jsx)("img",{src:e.image})}),Object(i.jsx)("div",{className:"skill-title-wrapper",children:Object(i.jsx)("p",{children:e.title})})]})}}]),n}(c.Component)),x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(p,{className:"third",children:[Object(i.jsx)("h3",{children:h.skillsSection.title}),Object(i.jsx)("div",{className:"cards-wrapper",children:Object.values(h.skillsSection.items).map((function(e){return Object(i.jsx)(f,{skill:e.content})}))})]})}}]),n}(c.Component),g=(n(43),n(22)),k=n(23),y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={color:"black"},e}return Object(o.a)(n,[{key:"changeFontColor",value:function(){this.setState({color:"blue"!==this.state.color?"blue":"black"})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"header",style:{color:this.state.color},children:[Object(i.jsx)("div",{className:"header-icon",onClick:function(){e.changeFontColor()},children:Object(i.jsx)(g.a,{})}),Object(i.jsx)("div",{className:"header-icon",children:Object(i.jsx)(k.a,{})}),Object(i.jsx)("div",{className:"header-icon",children:Object(i.jsx)(m.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive,children:"About"})}),Object(i.jsx)("div",{className:"header-icon",children:Object(i.jsx)(m.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive,children:"Skills"})})]})}}]),n}(c.Component);n(44);var S=function(){return Object(i.jsxs)("div",{className:"full-height",children:[Object(i.jsx)(y,{}),Object(i.jsx)("div",{style:{height:"93vh"},children:Object(i.jsx)(O,{})}),Object(i.jsx)(m.Element,{name:"about",className:"element"}),Object(i.jsx)(v,{}),Object(i.jsx)(m.Element,{name:"skills",className:"element"}),Object(i.jsx)(x,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),C()},7:function(e){e.exports=JSON.parse('{"title":"Hello, I\'m Fatemeh Jabbari! :)","subtitle":"Java Senior (J2EE, Spring) Full-stack Developer","links":{"github":"https://github.com/fatemehja","linkedin":"https://www.linkedin.com/in/fatemeh-jabbari-b5318591"},"aboutSection":{"title":"About","items":[{"type":"p","content":"I\'m a semi-senior in Java (Core, EE, Spring) and a fullstack developer familiar with many programming languges. \\n I\'ve also worked as a developer/researcher in the following fields: \\n Cloud Computing, Virtualization, Operating Systems \\n Network Function Virtualization and the application of virtualization/cloud in telecom \\n Internet of Things (Platforms) \\n Element Management Systems"}]},"skillsSection":{"title":"Skills","items":[{"type":"card","content":{"image":"images/javaLogo.png","title":"Java (Core, J2EE, Spring)"}},{"type":"card","content":{"image":"images/reactLogo.png","title":"React, JavaScript, HTML, CSS"}}]},"icons":{"down":"images/icons/down.svg"}}')}},[[45,1,2]]]);
//# sourceMappingURL=main.02454caf.chunk.js.map