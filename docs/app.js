(function(t){function e(e){var r=e[0];var n=e[1];var s=e[2];var l,o,c=0,u=[];for(;c<r.length;c++){o=r[c];if(i[o]){u.push(i[o][0])}i[o]=0}for(l in n){if(Object.prototype.hasOwnProperty.call(n,l)){t[l]=n[l]}}if(f)f(e);while(u.length){u.shift()()}v.push.apply(v,s||[]);return a()}function a(){var t;for(var e=0;e<v.length;e++){var a=v[e];var r=true;for(var n=1;n<a.length;n++){var s=a[n];if(i[s]!==0)r=false}if(r){v.splice(e--,1);t=l(l.s=a[0])}}return t}var r={};var n={4:0};var i={4:0};function s(t){return l.p+""+({2:"echarts"}[t]||t)+".js"}var v=[];function l(e){if(r[e]){return r[e].exports}var a=r[e]={i:e,l:false,exports:{}};t[e].call(a.exports,a,a.exports,l);a.l=true;return a.exports}l.e=function t(e){var a=[];var r={0:1,1:1};if(n[e])a.push(n[e]);else if(n[e]!==0&&r[e]){a.push(n[e]=new Promise(function(t,a){var r=""+e+".style.css";var n=l.p+r;var i=document.getElementsByTagName("link");for(var s=0;s<i.length;s++){var v=i[s];var o=v.getAttribute("data-href")||v.getAttribute("href");if(v.rel==="stylesheet"&&(o===r||o===n))return t()}var c=document.getElementsByTagName("style");for(var s=0;s<c.length;s++){var v=c[s];var o=v.getAttribute("data-href");if(o===r||o===n)return t()}var u=document.createElement("link");u.rel="stylesheet";u.type="text/css";u.onload=t;u.onerror=function(t){var r=t&&t.target&&t.target.src||n;var i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r;a(i)};u.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(u)}).then(function(){n[e]=0}))}var v=i[e];if(v!==0){if(v){a.push(v[2])}else{var o=new Promise(function(t,a){v=i[e]=[t,a]});a.push(v[2]=o);var c=document.getElementsByTagName("head")[0];var u=document.createElement("script");u.charset="utf-8";u.timeout=120;if(l.nc){u.setAttribute("nonce",l.nc)}u.src=s(e);var f=setTimeout(function(){_({type:"timeout",target:u})},12e4);u.onerror=u.onload=_;function _(t){u.onerror=u.onload=null;clearTimeout(f);var a=i[e];if(a!==0){if(a){var r=t&&(t.type==="load"?"missing":t.type);var n=t&&t.target&&t.target.src;var s=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");s.type=r;s.request=n;a[1](s)}i[e]=undefined}}c.appendChild(u)}}return Promise.all(a)};l.m=t;l.c=r;l.d=function(t,e,a){if(!l.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:a})}};l.r=function(t){Object.defineProperty(t,"__esModule",{value:true})};l.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};l.d(e,"a",e);return e};l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};l.p="";l.oe=function(t){console.error(t);throw t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[];var c=o.push.bind(o);o.push=e;o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var f=c;v.push([18,3]);return a()})([,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,,,,function(t,e,a){"use strict";a.r(e);var r=a(55);var n=a(53);var i=a(17);var s=a.n(i);var v=a(1);var l=a.n(v);var o=a(2);var c=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"top"},[a("my-top")],1),t._v(" "),a("div",{staticClass:"bottom"},[a("my-footer")],1)])};var u=[];c._withStripped=true;if(false){var f}var _=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"top-container"},[a("div",{staticClass:"header-container"},t._l(t.lists,function(e){return a("div",{staticClass:"header-item"},[a("router-link",{attrs:{to:{name:e.name},tag:"span","active-class":"active"}},[t._v(t._s(e.title))])],1)})),t._v(" "),a("div",{staticClass:"content-container"},[a("keep-alive",[a("router-view")],1)],1)])};var p=[];_._withStripped=true;if(false){var d}var m={data:function t(){return{lists:[{path:"/home",name:"home",title:"文章"},{path:"/echarts",name:"echarts",title:"echarts模块"},{path:"/other",name:"other",title:"其他"}]}}};var h=m;var b=a(44);var S=a(0);var C=Object(S["a"])(h,_,p,false,null,null,null);if(false){var g}C.options.__file="src/layout/Top.vue";var x=C.exports;var w=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"footer-container"},[t._v("\n\t"+t._s(t.msg)+"\n")])};var E=[];w._withStripped=true;if(false){var y}var O={data:function t(){return{msg:"by sunshine"}}};var P=O;var k=a(42);var j=Object(S["a"])(P,w,E,false,null,"02065d92",null);if(false){var A}j.options.__file="src/layout/Footer.vue";var $=j.exports;var T={name:"app",data:function t(){return{}},components:{"my-top":x,"my-footer":$}};var B=T;var M=a(40);var N=Object(S["a"])(B,c,u,false,null,"7ba5bd90",null);if(false){var q}N.options.__file="src/App.vue";var z=N.exports;var D=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("div",{staticClass:"left"},[t._m(0),t._v(" "),a("ul",t._l(t.lists,function(e){return a("router-link",{key:e.id,attrs:{to:{name:"detail"+e.id},"active-class":"active",tag:"li"}},[t._v(t._s(e.name))])}))]),t._v(" "),a("div",{staticClass:"right"},[a("router-view",{attrs:{name:"default"}})],1)])};var I=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("h4",{domProps:{textContent:t._s(t.title)}})}];D._withStripped=true;if(false){var L}var Q={data:function t(){return{title:"文章列表：",lists:[{id:1,name:"Sublime Text 3.0安装SublimeServer"},{id:2,name:"echarts图表大小自适应"},{id:3,name:"echarts双轴拖动"},{id:4,name:"Mac下使用命令行启动Sublime"},{id:5,name:"如何使用搬瓦工实现翻墙"}]}}};var R=Q;var V=a(38);var K=Object(S["a"])(R,D,I,false,null,null,null);if(false){var H}K.options.__file="src/component/Home.vue";var F=K.exports;var G=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"other-container"},[a("p",{domProps:{textContent:t._s(t.msg)}})])};var J=[];G._withStripped=true;if(false){var X}var W={data:function t(){return{msg:"其他页面，待补充..."}}};var Z=W;var U=a(36);var Y=Object(S["a"])(Z,G,J,false,null,null,null);if(false){var tt}Y.options.__file="src/component/Other.vue";var et=Y.exports;var at=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var rt=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("h4",{staticClass:"title"},[t._v("\n\t\tSublime Text 3.0安装SublimeServer\n\t")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v("\n\t\t\t第一步：打开Sublime Text 3.0；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第二步：按下Ctrl+Shift+P,打开插件安装；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第三步：输入SublimeServer,找到该项并选中安装；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第四步：安装结束后，在菜单栏中Tools选项卡中可以找到SublimeServer；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第五步：查看SublimeServer选项下的Setting，记住端口号（改为9090）；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第六步：点击SublimeServer选项下的Start SublimeServer，启动项目；\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t第七步：在浏览器中输入 http://localhost:9090即可。\n\t\t")])])])}];at._withStripped=true;if(false){var nt}var it={data:function t(){return{}}};var st=it;var vt=a(34);var lt=Object(S["a"])(st,at,rt,false,null,null,null);if(false){var ot}lt.options.__file="src/component/detail/Detail1.vue";var ct=lt.exports;var ut=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("h4",{staticClass:"title"},[t._v("\n\t\tEcharts图标大小自适应\n\t")]),t._v(" "),a("div",{staticClass:"dc__content"},[a("div",[a("div",[t._v("html代码：")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.htmlCode,expression:"htmlCode"}],attrs:{cols:"50",rows:"3",disabled:""},domProps:{value:t.htmlCode},on:{input:function(e){if(e.target.composing){return}t.htmlCode=e.target.value}}})]),t._v(" "),a("div",[a("div",[t._v("js代码：")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsCode,expression:"jsCode"}],attrs:{cols:"75",rows:"20",disabled:""},domProps:{value:t.jsCode},on:{input:function(e){if(e.target.composing){return}t.jsCode=e.target.value}}})]),t._v(" "),t._m(0)])])};var ft=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"dcc__article"},[a("span",[t._v("思路：")]),t._v(" "),a("p",[t._v('\n\t\t\t\t1.echarts实例(id="main")的标签外层需要包括一层宽高自适应的标签；\n\t\t\t')]),t._v(" "),a("p",[t._v("\n\t\t\t\t2.echarts实例标签的宽高需要指定为100%；\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t3.监测外层标签的resize时间，调用echarts实例的resize方法;\n\t\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t\t4.如果需要进一步控制echarts图标的自适应，请使用media配置项，参考：\n\t\t\t\t"),a("a",{attrs:{href:"http://echarts.baidu.com/tutorial.html#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94",target:"__blank"}},[t._v("点击")])])])}];ut._withStripped=true;if(false){var _t}var pt={data:function t(){return{htmlCode:'<div class="ec__content" id="main-container">\n\t<div id="main"></div>\n</div>',jsCode:"const echarts=require('echarts');\nconst ElementQueries=require('css-element-queries/src/ElementQueries');\nconst ResizeSensor=require('css-element-queries/src/ResizeSensor');\nexport default {\n\tdata(){\n\t\treturn {\n\t\t};\n\t},\n\tmounted(){\n\t\tElementQueries.listen();\n\t\tElementQueries.init();\n\t\tconst mainContainer=document.getElementById('main-container');\n\t\tvar myChart = echarts.init(document.getElementById('main'));\n\t\tnew ResizeSensor(mainContainer,function(){\n\t\t\tmyChart.resize({\n\t\t\t});\n\t\t});\n\t\tmyChart.setOption({\n\t\t\ttitle: {\n\t\t\t    text: 'ECharts 自适应'\n\t\t\t},\n\t\t\ttooltip: {},\n\t\t\txAxis: {\n\t\t\t    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']\n\t\t\t},\n\t\t\tyAxis: {},\n\t\t\tseries: [{\n\t\t\t    name: '销量',\n\t\t\t    type: 'bar',\n\t\t\t    data: [5, 20, 36, 10, 10, 20]\n\t\t\t}]\n\t\t});\n\t}\n}"}}};var dt=pt;var mt=a(32);var ht=Object(S["a"])(dt,ut,ft,false,null,null,null);if(false){var bt}ht.options.__file="src/component/detail/Detail2.vue";var St=ht.exports;var Ct=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var gt=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("h4",{staticClass:"title"},[t._v("\n\t\tEcharts双轴拖动\n\t")]),t._v(" "),a("div",{staticClass:"dc__content"},[a("span",[t._v("思路：")]),t._v(" "),a("p",[t._v("\n\t\t\t1.创建多个xAxis\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t2.在每个xAxis轴中分别添加一个axisPointer\n\t\t")]),t._v(" "),a("p",[a("em",[t._v("注意：")]),t._v("\n\t\t\t需要同时指定tooltip:{triggerOn:'axis'}，否则鼠标进入图表后，不点击鼠标，双轴也会随鼠标移动。\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t参考：\n\t\t\t"),a("a",{attrs:{href:"http://echarts.baidu.com/examples/editor.html?c=line-tooltip-touch",target:"__blank"}},[t._v("点击")])])])])}];Ct._withStripped=true;if(false){var xt}var wt={data:function t(){return{}}};var Et=wt;var yt=a(30);var Ot=Object(S["a"])(Et,Ct,gt,false,null,null,null);if(false){var Pt}Ot.options.__file="src/component/detail/Detail3.vue";var kt=Ot.exports;var jt=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var At=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("h4",{staticClass:"title"},[t._v("\n\t\tMac下使用命令行启动Sublime\n\t")]),t._v(" "),a("div",{staticClass:"dc__content"},[a("span",[t._v("方法：")]),t._v(" "),a("p",[t._v("\n\t\t\t1.默认Sublime Text的安装目录为:\n\t\t\t/Applications/Sublime\\ Text.app/\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t2.在安装目录找到启动文件，位于：\n\t\t\t/Applications/Sublime\\ Text.app/Contents/SharedSupport/bin/subl\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t3.使用软连接将其放到/usr/local/bin/subl\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t4.在任何地方都可以愉快的使用subl启动Sublime Text\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\tP.S. "),a("br"),t._v("\n\t\t\tsubl 文件名 可以打开文件"),a("br"),t._v("\n\t\t\tsubl 文件夹 可以打开文件夹\n\t\t")])])])}];jt._withStripped=true;if(false){var $t}var Tt={data:function t(){return{}}};var Bt=Tt;var Mt=a(28);var Nt=Object(S["a"])(Bt,jt,At,false,null,null,null);if(false){var qt}Nt.options.__file="src/component/detail/Detail4.vue";var zt=Nt.exports;var Dt=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return t._m(0)};var It=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("h4",{staticClass:"title"},[t._v("\n\t\t如何使用搬瓦工实现翻墙（Mac版本）\n\t")]),t._v(" "),a("div",{staticClass:"dc__content"},[a("span",[t._v("方法：")]),t._v(" "),a("p",[t._v("\n\t\t\t1. 打开  "),a("a",{attrs:{href:"https://bwh1.net/",target:"__blank"}},[t._v("搬瓦工网站")])]),t._v(" "),a("p",[t._v("\n\t\t\t2. 点击右上角（Register）个账号\n\t\t\t"),a("br"),t._v("PS: 填写正确邮箱，需要使用指定邮箱激活账号\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t3. 激活之后，点击右上角（Client Area）登陆账号\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t4. 点击（Services），选择（Order New Services）\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t5. 选择最便宜的 "),a("span",{staticStyle:{color:"red"}},[t._v("SPECIAL 10G KVM PROMO V3 - LOS ANGELES - CN2 ")]),t._v("(中国专线)即可，点击 Order Now，然后按照指示付款即可\n\t\t\t"),a("br"),t._v("PS: 输入优惠码 BWH1ZBPVK 即可优惠6%\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t6. 点击（Services），选择（My Services)，点击刚下的订单中的\t"),a("button",[t._v("KiwiVM Control Panel")]),t._v("即可进入VPS管理界面\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t7. 如果当前也做左侧菜单最下方没有 Shadowsocks Server 选项，则改变当前页面网址为： https://kiwivm.64clouds.com/main-exec.php?mode=extras_shadowsocks , 点击 Install\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t8. 安装完成之后按照提示下载 Shadowsocks 并配置Chrome代理即可（建议保存该页面，我在Mac操作之后，左侧菜单栏同样没有出现Shadowsocks Server，每次只能通过url进入）\n\t\t")]),t._v(" "),a("p",[t._v("\n\t\t\t9. Mac版本下载："),a("a",{attrs:{href:"https://github.com/l4503071/ShadowsocksX/releases",target:"__blacnk"}},[t._v("https://github.com/l4503071/ShadowsocksX/releases")])]),t._v(" "),a("p",[t._v("\n\t\t\t10.Chrome代理配置（插件：Proxy SwitchyOmega），根据需求进行代理，其中：\n\t\t\t"),a("ul",[a("li",[t._v("Proxy type: SOCKS v5")]),t._v(" "),a("li",[t._v("Proxy IP (Socks Host): 127.0.0.1")]),t._v(" "),a("li",[t._v("Port: 1080")])])]),t._v(" "),a("p",[t._v("\n\t\t\t之后就可以遨游世界了...\n\t\t")])])])}];Dt._withStripped=true;if(false){var Lt}var Qt={data:function t(){return{}}};var Rt=Qt;var Vt=a(26);var Kt=Object(S["a"])(Rt,Dt,It,false,null,null,null);if(false){var Ht}Kt.options.__file="src/component/detail/Detail5.vue";var Ft=Kt.exports;var Gt=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("div",{staticClass:"left"},[t._m(0),t._v(" "),a("ul",t._l(t.lists,function(e){return a("router-link",{key:e.id,attrs:{to:{name:"echarts"+e.id},"active-class":"active",tag:"li"}},[t._v(t._s(e.name))])}))]),t._v(" "),a("div",{staticClass:"right"},[a("router-view")],1)])};var Jt=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("h4",{domProps:{textContent:t._s(t.title)}})}];Gt._withStripped=true;if(false){var Xt}var Wt={data:function t(){return{title:"子模块：",lists:[{id:1,name:"echarts自适应"},{id:2,name:"echarts双轴拖动"}]}}};var Zt=Wt;var Ut=a(24);var Yt=Object(S["a"])(Zt,Gt,Jt,false,null,null,null);if(false){var te}Yt.options.__file="src/component/Echarts.vue";var ee=Yt.exports;var ae=[{path:"/home",name:"home",component:F,children:[{path:"detail1",name:"detail1",component:ct},{path:"detail2",name:"detail2",component:St},{path:"detail3",name:"detail3",component:kt},{path:"detail4",name:"detail4",component:zt},{path:"detail5",name:"detail5",component:Ft}]},{path:"/echarts",name:"echarts",component:ee,children:[{path:"echarts1",name:"echarts1",component:function t(){return a.e(1).then(a.bind(null,546))}},{path:"echarts2",name:"echarts2",component:function t(){return a.e(0).then(a.bind(null,547))}}]},{path:"/other",name:"other",component:et},{path:"/*",redirect:"/home"}];var re=new o["default"]({mode:"hash",routes:ae});var ne=a(22);var ie=a(20);l.a.use(s.a);l.a.use(o["default"]);new l.a({el:"#app",render:function t(e){return e(z)},router:re})},,function(t,e,a){},,,,function(t,e,a){"use strict";var r=a(3);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(4);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(5);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(6);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(7);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(8);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(9);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(10);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(11);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(12);var n=a.n(r);var i=n.a},,function(t,e,a){"use strict";var r=a(13);var n=a.n(r);var i=n.a},,,,,,,,,,,,function(t,e){t.exports=jQuery}]);