(this["webpackJsonpapi-consume"]=this["webpackJsonpapi-consume"]||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=(t(16),t(17),t(5)),i=t.n(o),s=t(9),u=t(6),m=t(24),d=t(21),p=t(22),f=t(25),g=t(23),v=new URL("https://api.giphy.com/v1");var h="\xa9 2020 Idan Izicovich",E="Get Images",b="Get More Images",O="Clear All",k=function(){var e=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],m=l[1],d=new URL("v1/gifs/random",v);d.searchParams.append("api_key","hBVO7d2gvoriQK1BOJQ11sVOdzW0FMbl");var p=function(){var e=Object(s.a)(i.a.mark((function e(){var a,n,c,l,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,fetch(d);case 4:if((c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:throw l=e.sent,l.meta,new Error("fetch failed ".concat(c.status," ").concat(c.statusText));case 11:return e.next=13,c.json();case 13:o=e.sent,s=o.data,r(t.concat(null===s||void 0===s?void 0:null===(a=s.images)||void 0===a?void 0:null===(n=a.downsized_large)||void 0===n?void 0:n.url)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:return e.prev=21,m(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),{images:t,getOneMoreImage:function(){return p()},loading:o,clearAll:function(){return r([])}}}(),a=e.images,t=e.getOneMoreImage,c=e.loading,l=e.clearAll;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Header,null,E),r.a.createElement(m.a.Body,null,a.map((function(e){return r.a.createElement(m.a.Img,{style:{margin:"1em 0"},src:e})})),r.a.createElement(d.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"primary",onClick:t},c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," "),b),r.a.createElement(f.a,{variant:"danger",style:{marginLeft:"1em"},onClick:l},O)))),r.a.createElement(m.a.Footer,null,h)))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7e3f7153.chunk.js.map