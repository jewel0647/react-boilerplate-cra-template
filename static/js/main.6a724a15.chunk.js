(this["webpackJsonpcra-template-react-boilerplate"]=this["webpackJsonpcra-template-react-boilerplate"]||[]).push([[0],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n(115),o=n(42);function i(){var e=Object(r.a)(["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"]);return i=function(){return e},e}var c=Object(o.d)(i()),l=function(e){var t=o.c.div.withConfig({displayName:"Circle__CirclePrimitive",componentId:"sc-1rotyri-0"})(["width:100%;height:100%;position:absolute;left:0;top:0;"," &:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#999;border-radius:100%;animation:"," 1.2s infinite ease-in-out both;",";}"],e.rotate&&"\n      -webkit-transform: rotate(".concat(e.rotate,"deg);\n      -ms-transform: rotate(").concat(e.rotate,"deg);\n      transform: rotate(").concat(e.rotate,"deg);\n    "),c,e.delay&&"\n        -webkit-animation-delay: ".concat(e.delay,"s;\n        animation-delay: ").concat(e.delay,"s;\n      "));return a.createElement(t,null)},u=o.c.div.withConfig({displayName:"Wrapper",componentId:"sc-17z8u18-0"})(["margin:2em auto;width:40px;height:40px;position:relative;"]),d=function(){return a.createElement(u,null,a.createElement(l,null),a.createElement(l,{rotate:30,delay:-1.1}),a.createElement(l,{rotate:60,delay:-1}),a.createElement(l,{rotate:90,delay:-.9}),a.createElement(l,{rotate:120,delay:-.8}),a.createElement(l,{rotate:150,delay:-.7}),a.createElement(l,{rotate:180,delay:-.6}),a.createElement(l,{rotate:210,delay:-.5}),a.createElement(l,{rotate:240,delay:-.4}),a.createElement(l,{rotate:270,delay:-.3}),a.createElement(l,{rotate:300,delay:-.2}),a.createElement(l,{rotate:330,delay:-.1}))}},116:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return m}));var a=n(72),r=n(41),o={light:{primary:"rgba(215, 113, 88, 1)",text:"rgba(58, 52, 51, 1)",textSecondary:"rgba(58, 52, 51, 0.7)",background:"rgba(255, 255, 255, 1)",backgroundVariant:"rgba(251, 249, 249, 1)",border:"rgba(58, 52, 51, 0.12)",borderLight:"rgba(58, 52, 51, 0.05)"},dark:{primary:"rgba(220, 120, 95, 1)",text:"rgba(241, 233, 231, 1)",textSecondary:"rgba(241, 233, 231, 0.6)",background:"rgba(0, 0, 0, 1)",backgroundVariant:"rgba(28, 26, 26, 1)",border:"rgba(241, 233, 231, 0.15)",borderLight:"rgba(241, 233, 231, 0.05)"}},i=n(149),c={selected:Object(i.a)()||"system"},l=Object(a.b)({name:"theme",initialState:c,reducers:{changeTheme:function(e,t){e.selected=t.payload}}}),u=Object(r.a)([function(e){return e.theme||c}],(function(e){return"system"===e.selected?i.b?o.dark:o.light:o[e.selected]})),d=Object(r.a)([function(e){return e.theme||c}],(function(e){return e.selected})),s=l.actions.changeTheme,g=l.reducer,m=l.name},149:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var a=window.matchMedia("(prefers-color-scheme: dark)").matches;function r(e){window.localStorage&&localStorage.setItem("selectedTheme",e)}function o(){return window.localStorage&&localStorage.getItem("selectedTheme")||null}},155:function(e){e.exports=JSON.parse('{"routingFeature":{"title":"Industry-standard Routing","description":"It\'s natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible."},"i18nFeature":{"title":"i18n Internationalization & Pluralization","selectLanguage":"Select Language","description":"Scalable apps need to support multiple languages, easily add and support multiple languages. Change the language below to see how instantly it updates the page without refreshing."},"feedbackFeature":{"title":"Instant Feedback","description":"Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page."},"scaffoldingFeature":{"title":"Quick Scaffolding","description":"Automate the creation of components, features, routes, selectors and sagas - and their tests - right from the CLI! Avoid fighting the glue of your code and focus on your app!"}}')},157:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.NAV_BAR_HEIGHT="4rem"}(a||(a={}))},244:function(e){e.exports=JSON.parse('{"routingFeature":{"title":"Standard Routing","description":"Routing macht es m\xf6glich Seiten (z.B. \'/about\') Ihrer Anwendung hinzuzuf\xfcgen."},"i18nFeature":{"title":"i18n Internationalisierung und Pluralisierung","selectLanguage":"Sprache ausw\xe4hlen","description":"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterst\xfctzung ist entscheidend f\xfcr gro\xdfe Web-Anwendungen. Sie k\xf6nnen die Sprache unten ver\xe4ndern, ohne die Seite aktualisieren zu m\xfcssen."},"feedbackFeature":{"title":"Sofortiges Feedback","description":"Genie\xdfen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre \xc4nderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu m\xfcssen."},"scaffoldingFeature":{"title":"Schnelles Scaffolding","description":"Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas \u2013 und ihre Tests \u2013 direkt von dem Terminal!"}}')},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(245),r=n(158),o=n(243),i=n(155),c=n(244),l={en:{translation:i},de:{translation:c}},u={};a.a.use(r.a).use(o.a).init({resources:l,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){return function e(t,n,a){Object.keys(t).forEach((function(r){var o=a?"".concat(a,".").concat(r):r;"object"===typeof t[r]?(n[r]={},e(t[r],n[r],o)):n[r]=function(){return o}}))}(i,u)}))},251:function(e,t,n){e.exports=n(489)},489:function(e,t,n){"use strict";n.r(t);n(252),n(261);var a=n(0),r=n.n(a),o=n(111),i=n(35),c=n(91),l=n(235),u=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(48),s=Object(d.a)(),g=(n(452),n(109)),m=n(93),f=n(115),h=n(42),b=n(157);function p(){var e=Object(f.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    padding-top: ",";\n    background-color: ",";\n  }\n\n  body.fontLoaded {\n    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #app {\n    background-color: #fafafa;\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select, button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return p=function(){return e},e}var y=Object(h.b)(p(),b.a.NAV_BAR_HEIGHT,(function(e){return e.theme.background})),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},o=e;t&&(o=function(){return e().then((function(e){return{default:t(e)}}))});var i=Object(a.lazy)(o);return function(e){return r.a.createElement(a.Suspense,{fallback:n.fallback},r.a.createElement(i,e))}},k=n(113),E=v((function(){return n.e(3).then(n.bind(null,495))}),(function(e){return e.HomePage}),{fallback:a.createElement(k.a,null)}),S=v((function(){return n.e(4).then(n.bind(null,496))}),(function(e){return e.NotFoundPage}),{fallback:a.createElement(k.a,null)});var w=n(246),j=n(72),O=n(232),I=n(112),A=n(247),C=n(233),F=n(30);function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(F.c)(Object(C.a)({},e,{router:Object(c.b)(s)}));return t}n(249);var T=n(116),x=function(e){Object(I.b)({key:T.e,reducer:T.b});var t=Object(i.e)(T.c);return r.a.createElement(h.a,{theme:t},r.a.Children.only(e.children))};new u.a("Inter",{}).load().then((function(){document.body.classList.add("fontLoaded")}));var L,R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n={},a=Object(A.a)(n),r=a.run,o=[a,Object(O.a)(t)],i=[Object(I.a)({createReducer:z,runSaga:r})],c=Object(j.a)({reducer:z(),preloadedState:e,middleware:[].concat(Object(w.a)(Object(j.c)()),o),devTools:!1,enhancers:i});return c}({},s),H=document.getElementById("root"),N=function(e){var t=e.Component;return a.createElement(a.StrictMode,null,a.createElement(i.a,{store:R},a.createElement(x,null,a.createElement(c.a,{history:s},a.createElement(g.b,null,a.createElement(t,null))))))};L=function(){return a.createElement(a.Fragment,null,a.createElement(g.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate"},a.createElement("meta",{name:"description",content:"A React Boilerplate application"})),a.createElement(m.c,null,a.createElement(m.a,{exact:!0,path:"/",component:E}),a.createElement(m.a,{component:S})),a.createElement(y,null))},o.render(a.createElement(N,{Component:L}),H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.6a724a15.chunk.js.map