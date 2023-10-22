"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{76:function(t,n,e){e.d(n,{Bt:function(){return g},LC:function(){return h},VD:function(){return o},_k:function(){return p},h_:function(){return l}});var r=e(861),a=e(757),c=e.n(a),i=e(243),u="b0cf5ca83b49db6de07ffe10fb9f63bb";function o(t){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/search/movie?query=".concat(n,"&api_key=").concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function t(){var n,e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,t.next=4,i.Z.get("/trending/movie/week?api_key=".concat(u,"&page=").concat(n,"&language=en"));case 4:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])}))),f.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n,"?api_key=").concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(u));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"},634:function(t,n,e){e.d(n,{W2:function(){return s},h4:function(){return f},rU:function(){return p}});var r,a,c,i=e(168),u=e(444),o=e(87),s=u.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n  height: 100vh;\n  /* display: flex; */\n  /* justify-content: center; */\n  /* align-items: center; */\n  font-size: 40;\n  color: #010101;\n"]))),p=(0,u.ZP)(o.OL)(a||(a=(0,i.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),f=u.ZP.header(c||(c=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n"])))},431:function(t,n,e){e.d(n,{O:function(){return o}});var r=e(634),a=e(689),c=e(87),i=e(184),u=function(t){var n=t.poster_path,e=t.title,r=t.vote_average,a=t.release_date,c="https://image.tmdb.org/t/p/w500"+n;return null===n&&(c="https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h1",{children:[e," ",a.slice(0,4)]}),(0,i.jsx)("img",{src:c,alt:e}),(0,i.jsxs)("p",{children:["Rating: ",r]})]})},o=function(t){var n=t.movies,e=(0,a.TH)();return(0,i.jsx)(r.W2,{children:n&&n.map((function(t){var n=t.id,r=t.title,a=t.vote_average,o=t.poster_path,s=t.release_date;return(0,i.jsx)("div",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:e},children:(0,i.jsx)(u,{title:r,poster_path:o,vote_average:a,release_date:s})})},n)}))})}},544:function(t,n,e){e.r(n);var r=e(433),a=e(439),c=e(76),i=e(431),u=e(791),o=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,a.Z)(t,2),e=n[0],s=n[1];return(0,u.useEffect)((function(){(0,c._k)().then((function(t){s((0,r.Z)(t))}))}),[]),(0,o.jsx)("main",{children:(0,o.jsx)(i.O,{movies:e})})}}}]);
//# sourceMappingURL=544.a06a89b1.chunk.js.map