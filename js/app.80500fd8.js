(function(t){function e(e){for(var r,o,l=e[0],c=e[1],s=e[2],u=0,d=[];u<l.length;u++)o=l[u],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d513cd26"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t),i=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[t]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/GraphQL-practice/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("1356"),a=n.n(r);a.a},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-content",[n("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[n("router-view")],1)],1),n("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{clipped:t.drawer.clipped,fixed:t.drawer.fixed,"mini-variant":t.drawer.mini,app:""},model:{value:t.drawer.open,callback:function(e){t.$set(t.drawer,"open",e)},expression:"drawer.open"}},[n("v-list",[n("v-list-tile",{attrs:{avatar:""},on:{click:t.toggleMiniDrawer}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"https://media.licdn.com/dms/image/C4E03AQFM3ujCogBNJw/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=uGy0p7yxSCflKlYLYahP6Yse3H2nrmmWQigxlLLxxaE"}})]),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Eldin Zaimovic")])],1)],1),n("v-list-tile",{attrs:{href:"https://github.com/EldinZaimovic",target:"_blank"}},[n("v-list-tile-action",[n("v-icon",{attrs:{large:""}},[t._v("fab fa-github")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Github")])],1)],1),n("v-list-tile",{attrs:{href:"https://www.linkedin.com/in/eldin-zaimovic",target:"_blank"}},[n("v-list-tile-action",[n("v-icon",{attrs:{large:""}},[t._v("fab fa-linkedin")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("LinkedIn")])],1)],1),n("v-list-tile",{attrs:{href:"https://www.xing.com/profile/Eldin_Zaimovic?sc_o=mxb_p",target:"_blank"}},[n("v-list-tile-action",[n("v-icon",{attrs:{large:""}},[t._v("fab fa-xing-square")])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Xing")])],1)],1)],1)],1),n("v-toolbar",{attrs:{app:"",fixed:t.toolbar.fixed,"clipped-left":t.toolbar.clippedLeft,"scroll-off-screen":"",dark:""}},[n("v-toolbar-side-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-items",[n("v-btn",{staticClass:"headline",attrs:{to:"/",flat:""}},[n("span",[t._v("Snow")]),n("span",{staticClass:"font-weight-light"},[t._v("Ball")])]),n("v-btn",{attrs:{to:"/about",flat:""}},[t._v("About")])],1),n("v-spacer")],1)],1)},c=[],s={data:function(){return{expand:!1,drawer:{open:!1,clipped:!0,fixed:!1,permanent:!0,mini:!0},toolbar:{fixed:!0,clippedLeft:!0}}},methods:{toggleMiniDrawer:function(){this.drawer.mini=!this.drawer.mini},toggleDrawer:function(){this.drawer.permanent=!1,this.drawer.permanent?(this.drawer.permanent=!this.drawer.permanent,this.drawer.clipped=!0,this.toolbar.clippedLeft=!0):this.drawer.open=!this.drawer.open}}},u=s,p=n("2877"),d=n("6544"),f=n.n(d),v=n("8336"),m=n("132d"),h=n("8860"),b=n("ba95"),g=n("40fe"),w=n("c954"),_=n("5d23"),x=n("f774"),y=n("9910"),k=n("71d9"),V=n("2a7f"),L=n("706c"),j=Object(p["a"])(u,l,c,!1,null,null,null),C=j.exports;f()(j,{VBtn:v["a"],VIcon:m["a"],VList:h["a"],VListTile:b["a"],VListTileAction:g["a"],VListTileAvatar:w["a"],VListTileContent:_["a"],VListTileTitle:_["b"],VNavigationDrawer:x["a"],VSpacer:y["a"],VToolbar:k["a"],VToolbarItems:V["a"],VToolbarSideIcon:L["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{"clipped-left":t.footer.clippedLeft,dark:""}},[n("span",{staticClass:"caption mx-3"},[t._v("© 2019, Eldin Zaimovic")]),n("v-spacer"),n("span",{staticClass:"caption mx-3"},[t._v("SnowBall Coding Challenge")])],1)},T=[],E={data:function(){return{footer:{clippedLeft:!0}}}},P=E,S=n("553a"),$=Object(p["a"])(P,O,T,!1,null,"25d57ca3",null),A=$.exports;f()($,{VFooter:S["a"],VSpacer:y["a"]});var I={name:"App",components:{Header:C,Footer:A},data:function(){return{}}},M=I,D=(n("034f"),n("7496")),F=n("549c"),q=Object(p["a"])(M,i,o,!1,null,null,null),B=q.exports;f()(q,{VApp:D["a"],VContent:F["a"]});var G=n("8c4f"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.products,function(t){return n("product",{key:t.id,attrs:{product:t}})}),1)],1)},Z=[],H=(n("ac6a"),n("96cf"),n("3b8d")),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl4:""}},[n("v-card",{attrs:{to:"product/"+t.product.name.split(" ").join("-")+t.product.id,hover:""}},[n("v-img",{attrs:{src:t.product.product.product_image,"aspect-ratio":"2.75",height:"230"}}),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.product.name))]),n("div",[t._v("\n          Price:\n          "),n("a",{staticClass:"pink--text title font-weight-medium"},[t._v(t._s(t.product.product.variations[0].price_ex_vat)+"$")])])])])],1)],1)},Y=[],z={props:["product"]},N=z,R=n("b0af"),K=n("12b2"),W=n("0e8f"),X=n("adda"),U=Object(p["a"])(N,J,Y,!1,null,"6a23e1e8",null),tt=U.exports;f()(U,{VCard:R["a"],VCardTitle:K["a"],VFlex:W["a"],VImg:X["a"]});var et=n("bc3a"),nt=n.n(et),rt={data:function(){return{products:{}}},components:{Product:tt},mounted:function(){var t=Object(H["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,nt()({method:"POST",url:"https://api.crystallize.com/graphql",data:{query:'\n                            {\n  catalogue(url: "/illustrations", tenantID: "demo") {\n    name\n    content_fields\n    children {\n      link\n      name\n      product {\n        name\n        product_image\n        variations {\n          variation_sku\n          stock_count\n          price_ex_vat\n        }\n      }\n    }\n  }\n}\n                        '}});case 3:e=t.sent,console.log(e),this.products=e.data.data.catalogue.children,this.products.forEach(function(t,e){return t.id=e+1}),console.log(this.products),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}()},at=rt,it=n("a523"),ot=n("a722"),lt=Object(p["a"])(at,Q,Z,!1,null,"4a51e2c8",null),ct=lt.exports;f()(lt,{VContainer:it["a"],VLayout:ot["a"]}),r["a"].use(G["a"]);var st=new G["a"]({mode:"history",base:"/GraphQL-practice/",routes:[{path:"/",name:"home",component:ct},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"84ba"))}},{path:"/product/:id",name:"product",component:function(){return n.e("about").then(n.bind(null,"8ec4"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:st,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.80500fd8.js.map