(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(154),s=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(t,"a",function(){return c.a});a(150);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Wordpress"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"4e25ec2a-ca2b-575f-a6eb-eca1183dd638",name:"Header",items:[{title:"Sample Page",url:"http://gatsby.digitaldisguise.xyz/",object_slug:"sample-page"},{title:"Privacy Policy",url:"http://gatsby.digitaldisguise.xyz/privacy-policy/",object_slug:"privacy-policy"}]}},{node:{id:"8d1b3837-e377-53ea-aa25-75422f85606f",name:"Primary menu",items:[{title:"Sample Page",url:"http://gatsby.digitaldisguise.xyz/",object_slug:"sample-page"}]}}]}}}},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(151),o=a(0),s=a.n(o),c=a(4),l=a.n(c),u=a(149),d=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var p=d,m=a(153),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(u.b,{query:"3565818772",render:function(e){return s.a.createElement("div",null,s.a.createElement("ul",null,e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(u.a,{to:"/"+e.object_slug},e.title))})))},data:m})},t}(o.Component);a(155);a.d(t,"a",function(){return y});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement(u.b,{query:"562863938",render:function(t){return s.a.createElement("div",{className:e.props.location+" container"},s.a.createElement(p,{siteTitle:t.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement(g,null),e.props.children))},data:i})},t}(o.Component);y.propTypes={location:l.a.string,children:l.a.node.isRequired},y.defaultLocation={location:"page"}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(158),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Wordpress",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-8281566f1c2f65aa5774.js.map