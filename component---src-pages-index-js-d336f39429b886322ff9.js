(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(148),n=a(153),o=a(168),l=a(169),d=a.n(l),c=function(){return i.a.createElement(s.b,{query:"2011440971",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(155);t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)),i.a.createElement(s.a,{to:"/page-2/"},"Go to page 2"),i.a.createElement("br",null),i.a.createElement(s.a,{to:"/archive/"},"Archive"))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(149);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},149:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Wordpress"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},152:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"4e25ec2a-ca2b-575f-a6eb-eca1183dd638",name:"Header",items:[{title:"Sample Page",url:"http://gatsby.digitaldisguise.xyz/",object_slug:"sample-page"},{title:"Privacy Policy",url:"http://gatsby.digitaldisguise.xyz/privacy-policy/",object_slug:"privacy-policy"}]}},{node:{id:"8d1b3837-e377-53ea-aa25-75422f85606f",name:"Primary menu",items:[{title:"Sample Page",url:"http://gatsby.digitaldisguise.xyz/",object_slug:"sample-page"}]}}]}}}},153:function(e,t,a){"use strict";var r=a(7),i=a.n(r),s=a(150),n=a(0),o=a.n(n),l=a(4),d=a.n(l),c=a(148),u=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:d.a.string},u.defaultProps={siteTitle:""};var p=u,f=a(152),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(c.b,{query:"3565818772",render:function(e){return o.a.createElement("div",null,o.a.createElement("ul",null,e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(c.a,{to:"/"+e.object_slug},e.title))})))},data:f})},t}(n.Component);a(154);a.d(t,"a",function(){return h});var h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(c.b,{query:"562863938",render:function(t){return o.a.createElement("div",{className:e.props.location+" container"},o.a.createElement(p,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement(g,null),e.props.children))},data:s})},t}(n.Component);h.propTypes={location:d.a.string,children:d.a.node.isRequired},h.defaultLocation={location:"page"}},155:function(e,t,a){"use strict";var r=a(156),i=a(0),s=a.n(i),n=a(4),o=a.n(n),l=a(157),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Wordpress",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},168:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/69ecd/gatsby-astronaut.png",srcSet:"/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/705dd/gatsby-astronaut.png 75w,\n/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/2bd34/gatsby-astronaut.png 150w,\n/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/69ecd/gatsby-astronaut.png 300w,\n/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/419be/gatsby-astronaut.png 450w,\n/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/3cf9a/gatsby-astronaut.png 600w,\n/gatsby-wordpress/static/6d91c86c0fde632ba4cd01062fd9ccfa/ae92a/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},169:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),n=r(a(34)),o=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},g=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),g.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,p=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,w=e.Tag,v=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,p),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),A={title:t,alt:this.state.isVisible?"":a,style:S,className:f};if(g){var I=g;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},A)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},A)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(h){var z=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete L.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),z.base64&&d.default.createElement(y,(0,l.default)({src:z.base64},A)),z.tracedSVG&&d.default.createElement(y,(0,l.default)({src:z.tracedSVG},A)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-d336f39429b886322ff9.js.map