(this["webpackJsonptest-spa"]=this["webpackJsonptest-spa"]||[]).push([[0],{105:function(e,t,a){e.exports={header:"header_header__31cPM",logo:"header_logo__XKDPs"}},114:function(e,t,a){e.exports={Favorites__container:"Favorites_Favorites__container__2DRFj",Favorites__list:"Favorites_Favorites__list__nMe7y"}},13:function(e,t,a){e.exports={modal__title:"Form_modal__title__1gB8T",modal__btn:"Form_modal__btn__3msAY",left:"Form_left__2mZ4n",input__range:"Form_input__range__1RLGG",input__number:"Form_input__number__2oHGb"}},140:function(e,t,a){e.exports=a.p+"static/media/sibdev-logo.5cddcb69.svg"},141:function(e,t,a){e.exports={exit__btn:"Exit_exit__btn__2aBfH"}},169:function(e,t,a){e.exports=a(283)},174:function(e,t,a){},175:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),i=a.n(s),c=(a(174),a(175),a(285)),l=a(105),o=a.n(l),u=a(140),m=a.n(u),_=a(141),h=a.n(_),d=function(){return r.a.createElement("div",{className:h.a.exit__btn},"\u0412\u044b\u0439\u0442\u0438 ")},p=a(23),f=a(26),v=a(41),E=a(15),y=a(287),b=function(e){var t=Object(n.useState)(e.pathname),a=Object(E.a)(t,2),s=a[0],i=a[1];return r.a.createElement(y.a,{onClick:function(e){i(e.key)},selectedKeys:[s],mode:"horizontal"},r.a.createElement(y.a.Item,{key:"/search"},r.a.createElement(p.b,{to:"/search"},"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement(y.a.Item,{key:"/favorites"},r.a.createElement(p.b,{to:"/favorites"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")))},g=Object(f.d)(v.f)((function(e){return r.a.createElement(b,{pathname:e.location.pathname})})),O=function(){return r.a.createElement("header",{className:o.a.header},r.a.createElement(p.b,{to:"#",className:o.a.logo},r.a.createElement("img",{src:m.a,alt:""})),r.a.createElement(g,null),r.a.createElement(d,null))},R=a(289),x=a(286),N=a(42),w=a.n(N),j=a(43),V=a.n(j),C=function(e){var t=e.result,a=e.searchVal,n=t.items.map((function(e){return r.a.createElement("div",{key:e.snippet.title,className:V.a.item},r.a.createElement("div",null,r.a.createElement("iframe",{allowFullScreen:!0,width:"100%",height:"226",src:"https://www.youtube.com/embed/".concat(e.id.videoId,"?rel=0&showinfo=0&autoplay=1&fs=1"),frameborder:"0"})),r.a.createElement("div",{className:V.a.item__title},e.snippet.title),r.a.createElement("div",{className:V.a.item__chanelId},e.snippet.channelTitle),r.a.createElement("div",{className:V.a.item__viewCount},e.viewCount))}));return r.a.createElement("div",{className:V.a.descr}," \u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",r.a.createElement("span",null,"\xab".concat(a,"\xbb")),r.a.createElement("span",{className:V.a.view__count},t.pageInfo.totalResults),r.a.createElement("div",{className:V.a.item__container},n))},F=a(290),H=a(288),k=a(291),S=a(40),I=a(13),T=a.n(I),P=H.a.Option,U=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)(12),l=Object(E.a)(c,2),o=l[0],u=l[1],m={marginBottom:"46px",borderRadius:"5px",padding:"12px"};return r.a.createElement("div",null,r.a.createElement("div",{className:T.a.modal__title},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),r.a.createElement(R.a,{name:"value",style:m,size:"large",value:e.currentVal,disabled:!0}),r.a.createElement(R.a,{onChange:function(e){return i(e.target.value)},style:m,size:"large",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(H.a,{name:"Option",style:{width:"100%",marginBottom:"100px"},size:"large",defaultValue:"\u0411\u0435\u0437 \u0444\u0438\u043b\u044c\u0442\u0440\u0430"},r.a.createElement(P,{value:"Option"},"Option"),r.a.createElement(P,{value:"Option"},"Option"),r.a.createElement(P,{value:"Option"},"Option")),r.a.createElement("div",{className:T.a.input__range},r.a.createElement("input",{onChange:function(e){return u(e.target.value)},type:"range",step:"1",min:"1",max:"20",value:o}),r.a.createElement("div",{className:T.a.input__number},r.a.createElement(k.a,{min:1,max:20,value:o,onChange:function(e){return u(e)}}))),r.a.createElement(S.a,{onClick:function(){e.setIsfavorite(!1)},className:T.a.modal__btn+" "+T.a.left},"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c "),r.a.createElement(S.a,{htmlType:"submit",onClick:function(t){e.setHistory(e.currentVal,s,o),e.setIsfavorite(!1)},className:T.a.modal__btn+" "+T.a.right,type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "))},A=R.a.Search,z=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)(""),l=Object(E.a)(c,2),o=l[0],u=l[1];return r.a.createElement("div",{className:w.a.container},r.a.createElement("div",{className:e.isResult?w.a.search+" "+w.a.active:w.a.search},r.a.createElement("h1",null,"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"),r.a.createElement("div",{className:w.a.search__wrapper},r.a.createElement(A,{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",size:"large",onSearch:function(){e.setResult(o,12)},onChange:function(e){u(e.target.value)},onPressEnter:function(){e.setResult(o)},style:{width:670},suffix:e.isResult&&r.a.createElement(F.a,{onClick:function(){return i(!s)},className:!s&&w.a.input__heart,style:{color:"#1390E5"}})}),r.a.createElement("div",{className:w.a.modal},r.a.createElement(x.a,{header:null,footer:null,visible:s},r.a.createElement(U,{setIsfavorite:i,setHistory:e.setHistory,currentVal:e.currentVal}))))),e.isResult&&r.a.createElement(C,{result:e.result,searchVal:e.currentVal}))},B=a(62),L=a(113),D=a.n(L),G=a(162),M=a(54),J=a(163).create({baseURL:"https://www.googleapis.com/youtube/v3/"}),K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return J.get("search?part=snippet&q=".concat(e,"&key=AIzaSyCM2IdPlSq_H0t_7068H1EvofvSk94DKRc&maxResults=").concat(t)).then((function(e){return e.data}))},W={result:{kind:"youtube#searchListResponse",etag:"SJZWTG6xR0eGuCOh2bX6w3s4F94 / 8FxPia9SrjuLwAGm005PlymrymM",nextPageToken:"CAUQAA",regionCode:"RU",pageInfo:{totalResults:"",resultsPerPage:""},items:""},isResult:!1,currentVal:""},q=function(e,t){return{type:"SET_RESULT",currentVal:e,data:t}},X=function(e,t){return function(){var a=Object(G.a)(D.a.mark((function a(n){var r;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,K(e,t);case 2:r=a.sent,console.log(r),n(q(e,r));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESULT":return Object(M.a)({},e,{isResult:!0,currentVal:t.currentVal,result:{nextPageToken:t.data.nextPageToken,regionCode:t.data.regionCode,pageInfo:{totalResults:t.data.pageInfo.totalResults,resultsPerPage:t.data.pageInfo.resultsPerPage},items:t.data.items}});default:return e}},Q=a(85),Z={history:[{id:1,searchName:"cat",searchVal:"cats",maxResults:18}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HISTORY":return Object(M.a)({},e,{history:[].concat(Object(Q.a)(e.history),[{id:e.history.length++,searchName:t.history.searchName,searchVal:t.history.searchVal,maxResults:+t.history.maxResults}])});case"DELETE":return Object(M.a)({},e,{history:Object(Q.a)(e.history.filter((function(e){return e.id!==t.id})))});case"UPDATE":return Object(M.a)({},e,{history:Object(Q.a)(e.history.map((function(e){return e.id===t.history.id?Object(M.a)({},e,{id:t.history.id,searchName:t.history.searchName,searchVal:t.history.searchVal,maxResults:t.history.maxResults}):e})))});default:return e}},ee=Object(B.b)((function(e){return{isResult:e.searchResult.isResult,result:e.searchResult.result,searchVal:e.searchResult.searchVal,currentVal:e.searchResult.currentVal}}),{setResult:X,setHistory:function(e,t,a){return function(n){n(function(e,t,a){return{type:"SET_HISTORY",history:{searchName:e,searchVal:t,maxResults:a}}}(e,t,a))}}})((function(e){return r.a.createElement(z,{isResult:e.isResult,setResult:e.setResult,result:e.result,searchVal:e.searchVal,currentVal:e.currentVal,setHistory:e.setHistory})})),te=a(55),ae=a.n(te),ne=H.a.Option,re=function(e){var t=Object(n.useState)(e.searchVal),a=Object(E.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)(e.name),l=Object(E.a)(c,2),o=l[0],u=l[1],m=Object(n.useState)(e.maxResults),_=Object(E.a)(m,2),h=_[0],d=_[1],p={marginBottom:"46px",borderRadius:"5px",padding:"12px"};return r.a.createElement("div",null,r.a.createElement("div",{className:T.a.modal__title},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),r.a.createElement(R.a,{name:"value",onChange:function(e){return u(e.target.value)},style:p,size:"large",defaultValue:e.name}),r.a.createElement(R.a,{onChange:function(e){return i(e.target.value)},style:p,size:"large",defaultValue:e.searchVal,placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(H.a,{name:"Option",style:{width:"100%",marginBottom:"50px"},size:"large",defaultValue:"\u0411\u0435\u0437 \u0444\u0438\u043b\u044c\u0442\u0440\u0430"},r.a.createElement(ne,{value:"Option"},"Option"),r.a.createElement(ne,{value:"Option"},"Option"),r.a.createElement(ne,{value:"Option"},"Option")),r.a.createElement("div",{className:T.a.input__range},r.a.createElement("input",{onChange:function(e){!function(e){var t=Number(e.target.value);d(t)}(e)},type:"range",step:"1",min:"1",max:"20",value:h}),r.a.createElement("div",{className:T.a.input__number},r.a.createElement(k.a,{min:1,max:20,value:h,onChange:function(e){return d(e)}}))),r.a.createElement(S.a,{onClick:function(){e.setEditForm(!1)},className:T.a.modal__btn+" "+T.a.left},"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c "),r.a.createElement(S.a,{htmlType:"submit",onClick:function(t){var a;a=e.id,e.UpdateHistory(o,s,a,h),e.setEditForm(!1)},className:T.a.modal__btn+" "+T.a.right,type:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c "))},se=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)(!1),l=Object(E.a)(c,2),o=l[0],u=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onClick:function(){var t=e.name,a=e.maxResults;e.setResult(t,a),e.history.push("/search")},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},className:s?ae.a.Favorites__item+" "+ae.a.mask:ae.a.Favorites__item},e.searchVal,s?r.a.createElement("span",{className:ae.a.container}," ",r.a.createElement("span",{onClick:function(e){e.stopPropagation(),u(!0)},className:ae.a.edit},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")," ",r.a.createElement("span",{onClick:function(t){t.stopPropagation(),e.deleteHistory(e.id)},className:ae.a.delete},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):""),r.a.createElement(x.a,{header:null,footer:null,visible:o,onCancel:function(){return u(!1)}},r.a.createElement(re,{id:e.id,name:e.name,searchVal:e.searchVal,setEditForm:u,UpdateHistory:e.UpdateHistory,maxResults:e.maxResults})))},ie=a(114),ce=a.n(ie),le=function(e){return r.a.createElement("div",{className:ce.a.Favorites__container},r.a.createElement("h2",null,"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),r.a.createElement("ul",{className:ce.a.Favorites__list},e.searchHistory.map((function(t){return r.a.createElement(se,{deleteHistory:e.deleteHistory,UpdateHistory:e.UpdateHistory,key:t.id,name:t.searchName,searchVal:t.searchVal,id:t.id,maxResults:t.maxResults,setResult:e.setResult,history:e.history})}))))},oe=Object(f.d)(Object(B.b)((function(e){return{searchHistory:e.searchHistory.history}}),{deleteHistory:function(e){return function(t){t(function(e){return{type:"DELETE",id:e}}(e))}},UpdateHistory:function(e,t,a,n){return function(r){r(function(e,t,a,n){return{type:"UPDATE",history:{id:a,searchName:e,searchVal:t,maxResults:n}}}(e,t,a,n))}},setResult:X}),v.f)((function(e){return r.a.createElement(le,{searchHistory:e.searchHistory,deleteHistory:e.deleteHistory,UpdateHistory:e.UpdateHistory,setResult:e.setResult,history:e.history})}));var ue=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v.a,{to:"/search"})}}),r.a.createElement(v.b,{exact:!0,path:"/search",render:function(){return r.a.createElement(c.a,null,r.a.createElement(ee,null))}}),r.a.createElement(v.b,{exact:!0,path:"/favorites",render:function(){return r.a.createElement(c.a,null,r.a.createElement(oe,null))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(164),_e=Object(f.c)({searchResult:Y,searchHistory:$}),he=Object(f.e)(_e,Object(f.a)(me.a));window.store=he;var de=he;i.a.render(r.a.createElement(p.a,null,r.a.createElement(B.a,{store:de},r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports={container:"Content_container__2O-pz",search__wrapper:"Content_search__wrapper__E_At0",search:"Content_search__2VEV_",active:"Content_active__5OC8_",input__heart:"Content_input__heart__1yQyK"}},43:function(e,t,a){e.exports={item__container:"items_item__container__3WuJv",item__title:"items_item__title__3kdx5",item__chanelId:"items_item__chanelId__2NFzv",item__viewCount:"items_item__viewCount__16N6h",descr:"items_descr__3-gj5",view__count:"items_view__count__AcO7w",item__thumbmail:"items_item__thumbmail__ADblh"}},55:function(e,t,a){e.exports={Favorites__item:"FavoritesItem_Favorites__item__32qcG",container:"FavoritesItem_container__nBNuX",mask:"FavoritesItem_mask__1cxFB",edit:"FavoritesItem_edit__3Sapy",delete:"FavoritesItem_delete__2wp__"}}},[[169,1,2]]]);
//# sourceMappingURL=main.ff976e3f.chunk.js.map