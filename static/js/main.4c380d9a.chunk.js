(this["webpackJsonp19-kakao-map"]=this["webpackJsonp19-kakao-map"]||[]).push([[0],{48:function(e,t,n){e.exports=n(76)},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),l=n.n(o),i=n(5),c=n(6);function u(){var e=Object(i.a)(["\nheight: 25px;\nline-height: 25px;\nwidth: 10%;\nposition: fixed;\nleft: 50%;\ntop: 3px;\nz-index: 1;\nborder-radius: 20px;\ndisplay: none;\n"]);return u=function(){return e},e}function s(){var e=Object(i.a)(["\ntext-align: center;\ncolor: #fff;\nfont-size: 18px;\nheight: 36px;\nline-height: 36px;\nwidth: 100%;\nposition: fixed;\nleft: 0;\ntop: 0;\n"]);return s=function(){return e},e}function d(){var e=Object(i.a)(["\nbackground-color: #173647;\ntext-align: center;\ncolor: #fff;\nfont-size: 18px;\nheight: 36px;\nline-height: 36px;\nwidth: 100%;\nposition: fixed;\nleft: 0;\ntop: 0;\n"]);return d=function(){return e},e}var p=c.a.h1(d()),f=c.a.span(s()),g=c.a.input(u());function m(){var e=document.getElementById("searchInput"),t=document.getElementById("titleSpan");if("block"===e.style.display)return e.style.display="none",t.style.transform="translateX(0)",void(t.style.transitionDuration="1s");t.style.transform="translateX(-5%)",t.style.transitionDuration="1s",setTimeout((function(){e.style.display="block"}),200)}var b,h=function(){return r.a.createElement(p,{onClick:m},r.a.createElement(f,{id:"titleSpan"},"Mask Map"),r.a.createElement(g,{id:"searchInput"}))},v=n(12),E=n(24),k=n(38),y=n(17),O=n(15),j=n(21),x=n.n(j),w=n(40),A=n(13),S=n(79),C=n(78),M=n(41),R=n.n(M),H=Object(S.a)("maskMap/SEARCH"),I=Object(S.a)("maskMap/SEARCH_SUCCESS"),D=Object(S.a)("maskMap/SEARCH_FAILURE"),G={result:[],loading:!1,error:!1},B=Object(C.a)((b={},Object(A.a)(b,H,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;arguments.length>1&&arguments[1];return Object(v.a)({},e,{loading:!0})})),Object(A.a)(b,I,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return Object(v.a)({},e,{result:t.payload.result,loading:!1})})),Object(A.a)(b,D,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return Object(v.a)({},e,{loading:!1,error:t.payload.error})})),b),G),P=function(e,t){return function(){var n=Object(w.a)(x.a.mark((function n(a){var r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(H()),e&&t){n.next=4;break}return I({result:[]}),n.abrupt("return");case 4:return n.prev=4,n.next=7,R.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json",{params:{lat:e,lng:t,m:5e3}});case 7:r=n.sent,a(I({result:r.data.stores})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),a(D({error:"\uac80\uc0c9\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."}));case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}()};function z(){var e=Object(i.a)(["\n  padding-top: 36px;\n  height: calc(100% - 36px);\n"]);return z=function(){return e},e}var T=c.a.div(z()),_=Object(k.geolocated)({positionOptions:{enableHighAccuracy:!0,maximumAge:0,timeout:1/0},watchPosition:!0})((function(e){var t={lat:37.485355200868526,lng:126.89935859355552},n={enableHighAccuracy:!0,maximumAge:0,timeout:1/0};e.coords?(t.lat=e.coords.latitude,t.lng=e.coords.longitude):navigator.geolocation.getCurrentPosition((function(e){var n=e.coords;t.lat=n.latitude,t.lng=n.longitude}),(function(e){console.warn("ERROR("+e.code+"): "+e.message)}),n);var a=r.a.useState(t),o=Object(E.a)(a,2),l=o[0],i=o[1],c=r.a.useState(),u=Object(E.a)(c,2),s=(u[0],u[1],Object(O.c)((function(e){return Object(v.a)({},e.maskMapModule)}))),d=s.result,p=s.loading,f=s.error,g=Object(O.b)();return r.a.useEffect((function(){g(P(l.lat,l.lng))}),[]),r.a.useEffect((function(){g(P(l.lat,l.lng))}),[l]),e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?p?r.a.createElement(T,null,r.a.createElement(y.a,{kakaoApiKey:"680ab974e5cb1353034d6d7f21f2ec44",initialPosition:{longitude:l.lng,latitude:l.lat,level:10},onDragEnd:function(e){var t=e.getCenter();i({lat:t.Ha,lng:t.Ga})},center:{longitude:l.lng,latitude:l.lat}})):f?r.a.createElement("h2",{style:{paddingTop:"36px",color:"#f00"}},f):r.a.createElement(T,null,r.a.createElement(y.a,{kakaoApiKey:"680ab974e5cb1353034d6d7f21f2ec44",initialPosition:{longitude:l.lng,latitude:l.lat,level:10},onDragEnd:function(e){var t=e.getCenter();i({lat:t.Ha,lng:t.Ga})},center:{longitude:l.lng,latitude:l.lat}},d.map((function(e,t){var n=null;switch(e.remain_stat){case"plenty":"green",n="100\uac1c \uc774\uc0c1";break;case"some":"yellow",n="30\uac1c \uc774\uc0c1 100\uac1c \ubbf8\ub9cc";break;case"few":"red",n="2\uac1c \uc774\uc0c1 30\uac1c \ubbf8\ub9cc";break;case"empty":"grey",n="1\uac1c \uc774\ud558";break;default:"black",n="\ud310\ub9e4\uc911\ub2e8"}return r.a.createElement(y.b,{key:t,longitude:e.lng,latitude:e.lat,onClick:function(){alert("".concat(e.name," / ").concat(n))}})})))):r.a.createElement(T,null," \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc704\uce58 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "):r.a.createElement(T,null," \uc704\uce58 \uc815\ubcf4 \uc0ac\uc6a9\uc774 \ud5c8\uc6a9\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. "):r.a.createElement(T,null," \ub514\ubc14\uc774\uc2a4\uac00 \uc704\uce58 \uc815\ubcf4\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ")}));function J(){var e=Object(i.a)(["\nwidth: 100%;\nheight: 100%;\n"]);return J=function(){return e},e}var K=c.a.div(J()),L=function(){return r.a.createElement(K,null,r.a.createElement(h,null),r.a.createElement(_,null))};n(74);var U=function(){return r.a.createElement(L,null)},X=n(46),F=n(4),W=n(42),q=n(43),N=n(44),Q=Object(F.combineReducers)({maskMapModule:B}),V=Object(q.createLogger)(),Y=Object(F.createStore)(Q,Object(W.composeWithDevTools)(Object(F.applyMiddleware)(V,N.a)));l.a.render(r.a.createElement(O.a,{store:Y},r.a.createElement(X.a,null,r.a.createElement(U,null))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4c380d9a.chunk.js.map