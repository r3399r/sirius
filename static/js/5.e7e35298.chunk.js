(this.webpackJsonpsirius=this.webpackJsonpsirius||[]).push([[5],{110:function(e,t,n){"use strict";n.r(t);var r=n(50),i=n(0),c=n(21),a=n(53),l=n(56),o=n(101),d=n(44),u=n.n(d),s=n(57),b=n.n(s),f=n(83),j=n.n(f),m=n(6),h=function(e){var t,n=e.onClick,d=Object(c.c)((function(e){return e})),s=Object(i.useState)(0),f=Object(r.a)(s,2),h=f[0],O=f[1],v=Object(i.useState)([]),_=Object(r.a)(v,2),N=_[0],x=_[1],y=Object(i.useState)(-1),C=Object(r.a)(y,2),g=C[0],k=C[1],p=Object(i.useState)([]),w=Object(r.a)(p,2),S=w[0],F=w[1],M=Object(i.useState)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),D=Object(r.a)(M,2),U=D[0],B=D[1];Object(i.useEffect)((function(){x((d.record.type,[{roleName:"\u5973\u5deb",roleCode:"witch",howMany:1},{roleName:"\u9810\u8a00\u5bb6",roleCode:"seer",howMany:1},{roleName:"\u5b88\u885b",roleCode:"guard",howMany:1},{roleName:"\u7375\u4eba",roleCode:"hunter",howMany:1},{roleName:"\u72fc\u738b",roleCode:"wolf-king",howMany:1},{roleName:"\u72fc",roleCode:"wolf",howMany:3},{roleName:"\u5e73\u6c11",roleCode:"villager",howMany:4}]))}),[d]);var E=function(e){var t;return!1===(null===(t=b()(d.record.player).find((function(t){return t.id===String(e)})))||void 0===t?void 0:t.alive)||(0===h?0===g||(!!U.includes(e)||g>0&&g!==e):-1!==U[e-1])};return 0===N.length?Object(m.jsx)("div",{children:"loading..."}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:j.a.title,children:["\u7b2c ",d.record.night.length," \u5929\u767d\u5929\u653e\u9010\u72c0\u614b"]}),Object(m.jsxs)("div",{className:j.a.mainFrame,children:[Object(m.jsx)("div",{className:j.a.header,children:0===h?"\u9078\u64c7\u88ab\u6295\u7968\u8005":0===g?"\u68c4\u7968\u8005":"\u6295\u7d66"+String(g)+"\u865f\u8005"}),Object(m.jsxs)("div",{className:j.a.numFrame,children:[null===(t=d.record.player)||void 0===t?void 0:t.map((function(e){var t,n;return Object(m.jsxs)(o.a,{className:u()(j.a.num,Object(a.a)({},j.a.clicked,S.includes(Number(e.id)))),type:"text",onClick:(n=Number(e.id),function(){0===h?k(n):F(S.concat(n))}),disabled:E(Number(e.id)),children:[e.id," ",null===(t=N.find((function(t){return t.roleCode===e.role})))||void 0===t?void 0:t.roleName,Object(m.jsx)("br",{}),e.name.slice(0,5)]},e.id)})),0===h&&Object(m.jsx)(o.a,{className:u()(j.a.null,Object(a.a)({},j.a.nullClick,0===g)),type:"text",onClick:function(){k(0)},disabled:g>0,children:"\u7121\u5176\u4ed6\u88ab\u6295\u7968\u8005"})]})]}),Object(m.jsxs)("div",{className:j.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:j.a.backbtn,onClick:function(){0===h?k(-1):F([])},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:j.a.btn,disabled:0===h?-1===g:S===[],onClick:function(){if(0===h)O(1);else{0===g&&n();var e,t=b.a.cloneDeep(U),r=Object(l.a)(S);try{for(r.s();!(e=r.n()).done;){t[e.value-1]=g}}catch(i){r.e(i)}finally{r.f()}B(t),k(-1),F([]),O(0)}},children:"Submit"})]})]})},O=n(22),v=n(23),_=n(84),N=n.n(_),x=function(e){var t=e.onClick,n=Object(c.c)((function(e){return e})),a=Object(i.useState)(""),l=Object(r.a)(a,2),d=l[0],u=l[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:N.a.title,children:["\u7b2c ",n.record.night.length," \u5929\u767d\u5929\u6b7b\u4ea1\u72c0\u614b"]}),Object(m.jsxs)("div",{className:N.a.mainFrame,children:[Object(m.jsx)(o.a,{type:"text",className:N.a.deathBtn,onClick:function(){u("giveUpEarlier")},disabled:"giveUpLater"===d||"exile"===d,children:"\u8b66\u4e0a\u81ea\u7206"}),Object(m.jsx)(o.a,{type:"text",className:N.a.deathBtn,onClick:function(){u("giveUpLater")},disabled:"giveUpEarlier"===d||"exile"===d,children:"\u8b66\u4e0b\u81ea\u7206"}),Object(m.jsx)(o.a,{type:"text",className:N.a.deathBtn,onClick:function(){u("exile")},disabled:"giveUpEarlier"===d||"giveUpLater"===d,children:"\u6295\u7968\u653e\u9010"})]}),Object(m.jsxs)("div",{className:N.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:N.a.backbtn,onClick:function(){u("")},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:N.a.btn,disabled:""===d,onClick:function(){var e={id:String(n.record.daytimeDeath.length+1),status:d};Object(v.b)(Object(O.b)(e)),t(d)},children:"Submit"})]})]})},y=n(85),C=n.n(y),g=function(e){var t,n=e.onClick,l=Object(c.c)((function(e){return e})),d=Object(i.useState)(-1),s=Object(r.a)(d,2),f=s[0],j=s[1],h=Object(i.useState)([]),O=Object(r.a)(h,2),v=O[0],_=O[1];Object(i.useEffect)((function(){_((l.record.type,[{roleName:"\u5973\u5deb",roleCode:"witch",howMany:1},{roleName:"\u9810\u8a00\u5bb6",roleCode:"seer",howMany:1},{roleName:"\u5b88\u885b",roleCode:"guard",howMany:1},{roleName:"\u7375\u4eba",roleCode:"hunter",howMany:1},{roleName:"\u72fc\u738b",roleCode:"wolf-king",howMany:1},{roleName:"\u72fc",roleCode:"wolf",howMany:3},{roleName:"\u5e73\u6c11",roleCode:"villager",howMany:4}]))}),[l]);var N=function(e){var t,n;return"wolf"!==(null===(t=b()(l.record.player).find((function(t){return t.id===e})))||void 0===t?void 0:t.role)&&"wolf-king"!==(null===(n=b()(l.record.player).find((function(t){return t.id===e})))||void 0===n?void 0:n.role)||-1!==f&&f!==Number(e)};return 0===v.length?Object(m.jsx)("div",{children:"loading..."}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:C.a.title,children:["\u7b2c ",l.record.night.length," \u5929\u767d\u5929\u81ea\u7206\u73a9\u5bb6"]}),Object(m.jsx)("div",{className:C.a.numFrame,children:null===(t=l.record.player)||void 0===t?void 0:t.map((function(e){var t,n;return Object(m.jsxs)(o.a,{className:u()(C.a.num,Object(a.a)({},C.a.clicked,f===Number(e.id))),type:"text",onClick:(n=Number(e.id),function(){j(n)}),disabled:N(e.id),children:[e.id," ",null===(t=v.find((function(t){return t.roleCode===e.role})))||void 0===t?void 0:t.roleName,Object(m.jsx)("br",{}),e.name.slice(0,7)]},e.id)}))}),Object(m.jsxs)("div",{className:C.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:C.a.backbtn,onClick:function(){j(-1)},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:C.a.btn,disabled:-1===f,onClick:function(){n()},children:"Submit"})]})]})},k=n(86),p=n.n(k),w=function(e){var t,n,d=e.onClick,s=Object(c.c)((function(e){return e})),f=Object(i.useState)(0),j=Object(r.a)(f,2),h=j[0],_=j[1],N=Object(i.useState)([]),x=Object(r.a)(N,2),y=x[0],C=x[1],g=Object(i.useState)(-1),k=Object(r.a)(g,2),w=k[0],S=k[1],F=Object(i.useState)(!1),M=Object(r.a)(F,2),D=M[0],U=M[1],B=Object(i.useState)(-1),E=Object(r.a)(B,2),I=E[0],R=E[1],G=Object(i.useState)(-1),L=Object(r.a)(G,2),P=L[0],A=L[1],K=Object(i.useState)(-1),T=Object(r.a)(K,2),H=T[0],V=T[1],W=Object(i.useState)(-1),Y=Object(r.a)(W,2),Z=Y[0],q=Y[1],Q=Object(i.useState)(-1),z=Object(r.a)(Q,2),J=z[0],X=z[1],$=Object(i.useState)(-1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],re=Object(i.useState)([]),ie=Object(r.a)(re,2),ce=ie[0],ae=ie[1];Object(i.useEffect)((function(){C((s.record.type,[{roleName:"\u72fc",roleCode:"wolf",nightAction:"\u72fc\u5200",nightNull:"\u7a7a\u5200"},{roleName:"\u5973\u5deb",roleCode:"witch",nightAction:"\u5973\u5deb",nightNull:"\u7121\u884c\u52d5"},{roleName:"\u9810\u8a00\u5bb6",roleCode:"seer",nightAction:"\u9810\u8a00\u5bb6\u67e5\u9a57",nightNull:"\u7121\u67e5\u9a57"},{roleName:"\u5b88\u885b",roleCode:"guard",nightAction:"\u5b88\u885b\u5b88\u8b77",nightNull:"\u7a7a\u5b88"},{roleName:"\u7375\u4eba",roleCode:"hunter",nightAction:"\u7375\u4eba\u958b\u69cd",nightNull:"\u58d3\u69cd"},{roleName:"\u72fc\u738b",roleCode:"wolf-king",nightAction:"\u72fc\u738b\u958b\u69cd",nightNull:"\u58d3\u69cd"},{roleName:"\u5e73\u6c11",roleCode:"villager",nightAction:null,nightNull:null}]))}),[s]);var le=function(e){return function(){ne(Number(e)),"wolf"===y[h].roleCode&&S(Number(e)),"witch"===y[h].roleCode&&R(13===I?Number(e):0),"seer"===y[h].roleCode&&A(Number(e)),"guard"===y[h].roleCode&&V(Number(e)),"hunter"===y[h].roleCode&&q(Number(e)),"wolf-king"===y[h].roleCode&&X(Number(e))}},oe=function(e){var t,n=b.a.cloneDeep(s.record.player),r=Object(l.a)(e);try{var i=function(){var e=t.value,r=n.findIndex((function(t){return t.id===String(e)}));n[r].alive=!1};for(r.s();!(t=r.n()).done;)i()}catch(c){r.e(c)}finally{r.f()}return Object(v.b)(Object(O.d)(n)),n},de=function(e){var t,n,r=-1;r=!0===(null===(t=e.find((function(e){return"hunter"===e.role})))||void 0===t?void 0:t.alive)?13:Z;var i=-1;i=!0===(null===(n=e.find((function(e){return"wolf-king"===e.role})))||void 0===n?void 0:n.alive)?13:J;var c={id:String(s.record.night.length+1),kill:w,rescue:D,poison:I,check:P,guard:H,hunterShoot:r,wolfKingShoot:i};Object(v.b)(Object(O.c)(c))},ue=function(e){var t;if(ce.includes(Number(e)))return!0;if(Number(e)>0&&!0!==(null===(t=b()(s.record.player).find((function(t){return t.id===e})))||void 0===t?void 0:t.alive))return!0;if("wolf"===y[h].roleCode)return function(e,t){return t>=0&&Number(e)!==t}(e,w);if("witch"===y[h].roleCode)return function(e,t,n,r,i){var c;return"witch"===(null===(c=i.find((function(t){return t.id===e})))||void 0===c?void 0:c.role)||(0===Number(e)?!(!1===t&&n<=0):!0===t?Number(e)!==r:13!==n&&(!(n>0)||Number(e)!==n))}(e,D,I,w,s.record.player);if("seer"===y[h].roleCode)return function(e,t,n){var r;return"seer"===(null===(r=n.find((function(t){return t.id===e})))||void 0===r?void 0:r.role)||t>=0&&Number(e)!==t}(e,P,s.record.player);if("guard"===y[h].roleCode)return function(e,t){return t>=0&&Number(e)!==t}(e,H);if("hunter"===y[h].roleCode)return function(e,t,n){var r;return"hunter"===(null===(r=n.find((function(t){return t.id===e})))||void 0===r?void 0:r.role)||t>=0&&Number(e)!==t}(e,Z,s.record.player);if("wolf-king"===y[h].roleCode)return function(e,t,n){var r;return"wolf-king"===(null===(r=n.find((function(t){return t.id===e})))||void 0===r?void 0:r.role)||t>=0&&Number(e)!==t}(e,J,s.record.player);throw new Error("OverStep")},se=w===Number(null===(t=b()(s.record.player).find((function(e){return"witch"===e.role})))||void 0===t?void 0:t.id)||I>=0||w<=0,be=!0===D||0===I,fe=!(te>=0&&te<=12);return 0===y.length?Object(m.jsx)("div",{children:"loading..."}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:p.a.title,children:["\u7b2c ",s.record.night.length+1," \u591c"]}),Object(m.jsxs)("div",{className:p.a.mainFrame,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:p.a.header,children:y[h].nightAction}),"witch"===y[h].roleCode&&Object(m.jsxs)("div",{className:p.a.functionFrame,children:[Object(m.jsx)(o.a,{className:u()(p.a.function,Object(a.a)({},p.a.functionClick,!0===D)),type:"text",onClick:function(){U(!0),ne(13)},disabled:se,children:"\u89e3\u6551"}),Object(m.jsx)(o.a,{className:u()(p.a.function,Object(a.a)({},p.a.functionClick,I>0)),type:"text",onClick:function(){R(13),ne(13)},disabled:be,children:"\u6492\u6bd2"})]})]}),Object(m.jsxs)("div",{className:p.a.numFrame,children:[null===(n=s.record.player)||void 0===n?void 0:n.map((function(e){var t;return Object(m.jsxs)(o.a,{className:u()(p.a.num,Object(a.a)({},p.a.numClick,te===Number(e.id))),type:"text",onClick:le(e.id),disabled:ue(e.id),children:[e.id," ",null===(t=y.find((function(t){return t.roleCode===e.role})))||void 0===t?void 0:t.roleName,Object(m.jsx)("br",{}),e.name.slice(0,7)]},e.id)})),Object(m.jsx)(o.a,{className:u()(p.a.null,Object(a.a)({},p.a.nullClick,0===te)),type:"text",onClick:le("0"),disabled:ue("0"),children:y[h].nightNull})]})]}),Object(m.jsxs)("div",{className:p.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:p.a.backbtn,onClick:function(){var e,t;-1===te?("wolf"!==y[h].roleCode&&"hunter"!==y[h].roleCode&&"wolf-king"!==y[h].roleCode&&_(h-1),"wolf"===y[h-1].roleCode&&S(-1),"witch"===y[h-1].roleCode&&(U(!1),R(-1)),"seer"===y[h-1].roleCode&&A(-1),"hunter"===y[h].roleCode&&(ce.includes(Number(null===(e=b()(s.record.player).find((function(e){return"wolf-king"===e.role})))||void 0===e?void 0:e.id))?(X(-1),ae(ce.slice(0,-1)),_(y.findIndex((function(e){return"wolf-king"===e.roleCode})))):(V(-1),ae([]),_(y.findIndex((function(e){return"guard"===e.roleCode}))))),"wolf-king"===y[h].roleCode&&(ce.includes(Number(null===(t=b()(s.record.player).find((function(e){return"hunter"===e.role})))||void 0===t?void 0:t.id))?(q(-1),ae(ce.slice(0,-1)),_(y.findIndex((function(e){return"hunter"===e.roleCode})))):(V(-1),ae([]),_(y.findIndex((function(e){return"guard"===e.roleCode})))))):"wolf"===y[h].roleCode&&S(-1);"witch"===y[h].roleCode&&(U(!1),R(-1)),"seer"===y[h].roleCode&&A(-1),"guard"===y[h].roleCode&&V(-1),"hunter"===y[h].roleCode&&q(-1),"wolf-king"===y[h].roleCode&&X(-1),ne(-1)},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:p.a.btn,onClick:function(){var e,t,n,r;ne(-1);var i=-1;if("guard"===y[h].roleCode){var c,a,l=[];if(I>0&&(l=l.concat(I)),w>0&&w!==I&&(!0===D&&w===H&&(i=w,l=l.concat(w)),!1===D&&w!==H&&(i=w,l=l.concat(w))),ae(l),Number(null===(c=b()(s.record.player).find((function(e){return"hunter"===e.role})))||void 0===c?void 0:c.id)===i)return _(y.findIndex((function(e){return"hunter"===e.roleCode})));if(Number(null===(a=b()(s.record.player).find((function(e){return"wolf-king"===e.role})))||void 0===a?void 0:a.id)===i)return _(y.findIndex((function(e){return"wolf-king"===e.roleCode})));var o=oe(l);de(o),d()}else if("hunter"===y[h].roleCode){if(Number(null===(e=b()(s.record.player).find((function(e){return"wolf-king"===e.role})))||void 0===e?void 0:e.id)!==i&&Number(null===(t=b()(s.record.player).find((function(e){return"wolf-king"===e.role})))||void 0===t?void 0:t.id)===Z)return ae(ce.concat(Z)),_(y.findIndex((function(e){return"wolf-king"===e.roleCode})));var u=oe(ce.concat(Z));de(u),ae(ce.concat(Z)),d()}else{if("wolf-king"!==y[h].roleCode)return _(h+1);if(Number(null===(n=b()(s.record.player).find((function(e){return"hunter"===e.role})))||void 0===n?void 0:n.id)!==i&&Number(null===(r=b()(s.record.player).find((function(e){return"hunter"===e.role})))||void 0===r?void 0:r.id)===J)return ae(ce.concat(J)),_(y.findIndex((function(e){return"hunter"===e.roleCode})));var f=oe(ce.concat(J));de(f),ae(ce.concat(J)),d()}},disabled:fe,children:"Submit"})]})]})},S=n(87),F=n(108),M=n(102),D=n(90),U=n.n(D),B=["\u73a9\u5bb6 1","\u73a9\u5bb6 2","\u73a9\u5bb6 3","\u73a9\u5bb6 4","\u73a9\u5bb6 5","\u73a9\u5bb6 6","\u73a9\u5bb6 7","\u73a9\u5bb6 8","\u73a9\u5bb6 9","\u73a9\u5bb6 10","\u73a9\u5bb6 11","\u73a9\u5bb6 12"],E=function(e){var t=e.onClick,n=Object(M.a)(),r=n.register,i=n.handleSubmit,a=Object(c.b)();return Object(m.jsxs)("form",{onSubmit:i((function(e){var n=Object.keys(e).map((function(t){return{id:t,name:e[t]}}));a(Object(O.d)(n)),t()})),children:[Object(m.jsx)("div",{className:U.a.title,children:"\u73a9\u5bb6\u540d\u7a31"}),Object(m.jsx)("div",{className:U.a.parent,children:B.map((function(e,t){return Object(m.jsxs)("div",{className:U.a.child,children:[Object(m.jsx)("div",{className:U.a.text,children:e}),Object(m.jsx)(F.a,Object(S.a)(Object(S.a)({},r("".concat(t+1),{required:!0})),{},{autoComplete:"off"}))]},t)}))}),Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{type:"text",htmlType:"submit",className:U.a.btn,children:"Submit"})})]})},I=n(96),R=n.n(I),G=function(e){var t,n=e.onClick,d=Object(c.c)((function(e){return e})),s=Object(i.useState)([]),f=Object(r.a)(s,2),j=f[0],h=f[1],_=Object(i.useState)(0),N=Object(r.a)(_,2),x=N[0],y=N[1],C=Object(i.useState)([]),g=Object(r.a)(C,2),k=g[0],p=g[1],w=Object(i.useState)([]),S=Object(r.a)(w,2),F=S[0],M=S[1];Object(i.useEffect)((function(){p((d.record.type,[{roleName:"\u5973\u5deb",roleCode:"witch",howMany:1},{roleName:"\u9810\u8a00\u5bb6",roleCode:"seer",howMany:1},{roleName:"\u5b88\u885b",roleCode:"guard",howMany:1},{roleName:"\u7375\u4eba",roleCode:"hunter",howMany:1},{roleName:"\u72fc\u738b",roleCode:"wolf-king",howMany:1},{roleName:"\u72fc",roleCode:"wolf",howMany:3},{roleName:"\u5e73\u6c11",roleCode:"villager",howMany:4}]))}),[d]);var D=function(e){if(!j.includes(e))return"";for(var t=j.indexOf(e)+1,n=0;t>0;){if((t-=k[n].howMany)<=0)return k[n].roleName;n+=1}};return 0===k.length?Object(m.jsx)("div",{children:"loading..."}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:R.a.title,children:"\u8eab\u4efd\u767c\u653e"}),Object(m.jsxs)("div",{className:R.a.mainFrame,children:[Object(m.jsx)("div",{className:R.a.header,children:k[x].roleName}),Object(m.jsx)("div",{className:R.a.numFrame,children:null===(t=d.record.player)||void 0===t?void 0:t.map((function(e){return Object(m.jsxs)(o.a,{className:u()(R.a.num,Object(a.a)({},R.a.clicked,j.includes(Number(e.id))||F.includes(Number(e.id)))),type:"text",onClick:(n=e.id,function(){j.includes(Number(n))?alert("\u73a9\u5bb6\u89d2\u8272\u91cd\u8907"):F.includes(Number(n))||M(F.concat(Number(n)))}),disabled:(t=Number(e.id),!F.includes(t)&&k[x].howMany===F.length),children:[e.id," ",D(Number(e.id)),Object(m.jsx)("br",{}),e.name.slice(0,5)]},e.id);var t,n}))})]}),Object(m.jsxs)("div",{className:R.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:R.a.backbtn,onClick:function(){0===F.length&&0!==x&&(h(j.slice(0,j.length-k[x-1].howMany)),y(x-1)),M([])},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:R.a.btn,disabled:k[x].howMany!==F.length,onClick:function(){var e=j.concat(F);if(h(e),6===x){var t,r=[],i=0,c=0,a=Object(l.a)(e);try{var o=function(){var e=t.value,n=String(e),a=b()(d.record.player).find((function(e){return e.id===n})).name,l=k[i].roleCode,o={id:n,name:a,role:l,alive:!0};r=r.concat(o),(c+=1)===k[i].howMany&&(i+=1,c=0)};for(a.s();!(t=a.n()).done;)o()}catch(u){a.e(u)}finally{a.f()}Object(v.b)(Object(O.d)(r)),n()}else y(x+1);M([])},children:"Submit"})]})]})},L=n(97),P=n.n(L),A=["\u4e0a\u8b66\u73a9\u5bb6","\u9000\u6c34\u73a9\u5bb6","\u6295\u7968\u7d66","\u6295\u7968\u7d66"],K=function(e){var t,n=e.onClick,d=Object(c.c)((function(e){return e})),s=Object(i.useState)(0),f=Object(r.a)(s,2),j=f[0],h=f[1],_=Object(i.useState)([]),N=Object(r.a)(_,2),x=N[0],y=N[1],C=Object(i.useState)([]),g=Object(r.a)(C,2),k=g[0],p=g[1],w=Object(i.useState)([]),S=Object(r.a)(w,2),F=S[0],M=S[1],D=Object(i.useState)([]),U=Object(r.a)(D,2),B=U[0],E=U[1],I=Object(i.useState)([]),R=Object(r.a)(I,2),G=R[0],L=R[1],K=Object(i.useState)([]),T=Object(r.a)(K,2),H=T[0],V=T[1],W=Object(i.useState)(0),Y=Object(r.a)(W,2),Z=Y[0],q=Y[1],Q=Object(i.useState)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),z=Object(r.a)(Q,2),J=z[0],X=z[1],$=Object(i.useState)([]),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],re=Object(i.useState)([]),ie=Object(r.a)(re,2),ce=ie[0],ae=ie[1],le=Object(i.useState)(0),oe=Object(r.a)(le,2),de=oe[0],ue=oe[1],se=Object(i.useState)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),be=Object(r.a)(se,2),fe=be[0],je=be[1],me=Object(i.useState)([]),he=Object(r.a)(me,2),Oe=he[0],ve=he[1];Object(i.useEffect)((function(){y((d.record.type,[{roleName:"\u5973\u5deb",roleCode:"witch",howMany:1},{roleName:"\u9810\u8a00\u5bb6",roleCode:"seer",howMany:1},{roleName:"\u5b88\u885b",roleCode:"guard",howMany:1},{roleName:"\u7375\u4eba",roleCode:"hunter",howMany:1},{roleName:"\u72fc\u738b",roleCode:"wolf-king",howMany:1},{roleName:"\u72fc",roleCode:"wolf",howMany:3},{roleName:"\u5e73\u6c11",roleCode:"villager",howMany:4}]))}),[d]);var _e=function(e){return F===[0]||0!==j&&(1===j?!B.includes(e):2===j?!!B.includes(e)||-1!==J[e-1]:3===j?!!ce.includes(e)||-1!==fe[e-1]:void 0)},Ne=function(e,t){if(1===j){var n={runFor:B,withdraw:G,firstVote:{1:-1,2:-1,3:-1,4:-1,5:-1,6:-1,7:-1,8:-1,9:-1,10:-1,11:-1,12:-1},secondVote:{1:-1,2:-1,3:-1,4:-1,5:-1,6:-1,7:-1,8:-1,9:-1,10:-1,11:-1,12:-1},sheriff:t};Object(v.b)(Object(O.e)(n))}if(2===j){var r={runFor:B,withdraw:G,firstVote:{1:-1===e[0]?13:e[0],2:-1===e[1]?13:e[1],3:-1===e[2]?13:e[2],4:-1===e[3]?13:e[3],5:-1===e[4]?13:e[4],6:-1===e[5]?13:e[5],7:-1===e[6]?13:e[6],8:-1===e[7]?13:e[7],9:-1===e[8]?13:e[8],10:-1===e[9]?13:e[9],11:-1===e[10]?13:e[10],12:-1===e[11]?13:e[11]},secondVote:{1:-1,2:-1,3:-1,4:-1,5:-1,6:-1,7:-1,8:-1,9:-1,10:-1,11:-1,12:-1},sheriff:t};Object(v.b)(Object(O.e)(r))}if(3===j){var i={runFor:B,withdraw:G,firstVote:{1:-1===J[0]?13:J[0],2:-1===J[1]?13:J[1],3:-1===J[2]?13:J[2],4:-1===J[3]?13:J[3],5:-1===J[4]?13:J[4],6:-1===J[5]?13:J[5],7:-1===J[6]?13:J[6],8:-1===J[7]?13:J[7],9:-1===J[8]?13:J[8],10:-1===J[9]?13:J[9],11:-1===J[10]?13:J[10],12:-1===J[11]?13:J[11]},secondVote:{1:-1===e[0]?13:e[0],2:-1===e[1]?13:e[1],3:-1===e[2]?13:e[2],4:-1===e[3]?13:e[3],5:-1===e[4]?13:e[4],6:-1===e[5]?13:e[5],7:-1===e[6]?13:e[6],8:-1===e[7]?13:e[7],9:-1===e[8]?13:e[8],10:-1===e[9]?13:e[9],11:-1===e[10]?13:e[10],12:-1===e[11]?13:e[11]},sheriff:t};Object(v.b)(Object(O.e)(i))}};return 0===x.length?Object(m.jsx)("div",{children:"loading..."}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:P.a.title,children:"\u7af6\u9078\u8b66\u9577"}),Object(m.jsxs)("div",{className:P.a.mainFrame,children:[Object(m.jsx)("div",{className:P.a.header,children:2===j&&Z===H.length-1||3===j&&de===ce.length-1?"\u68c4\u7968\u8005":2===j?String(A[j])+String(H[Z])+"\u865f\u8005":3===j?String(A[j])+String(ce[de])+"\u865f\u8005":String(A[j])}),Object(m.jsxs)("div",{className:P.a.numFrame,children:[null===(t=d.record.player)||void 0===t?void 0:t.map((function(e){var t,n;return Object(m.jsxs)(o.a,{className:u()(P.a.num,Object(a.a)({},P.a.clicked,k.includes(Number(e.id)))),type:"text",onClick:(n=Number(e.id),function(){k.includes(n)||p(k.concat(n))}),disabled:_e(Number(e.id)),children:[e.id," ",null===(t=x.find((function(t){return t.roleCode===e.role})))||void 0===t?void 0:t.roleName,Object(m.jsx)("br",{}),e.name.slice(0,5)]},e.id)})),0!==j&&Object(m.jsx)(o.a,{className:u()(P.a.null,Object(a.a)({},P.a.nullClick,F.length>0)),type:"text",onClick:function(){M([0])},disabled:0!==k.length,children:"\u7121"})]})]}),Object(m.jsxs)("div",{className:P.a.btnFrame,children:[Object(m.jsx)(o.a,{type:"text",className:P.a.backbtn,onClick:function(){M([]),p([])},children:"Back"}),Object(m.jsx)(o.a,{type:"text",className:P.a.btn,disabled:0===j?!(k.length>=1):1!==j&&(2===j?Z===H.length-1&&12-te.reduce((function(e,t){return e+t}),0)-k.length!==B.length:3===j?de===ce.length-1&&12-Oe.reduce((function(e,t){return e+t}),0)-k.length!==ce.length-1:void 0),onClick:function(){if(0===j&&(E(k),p([]),M([]),h(1)),1===j)if(L(k),B.length-k.length===0)Ne(J,0),n();else if(B.length-k.length===1){var e,t=Object(l.a)(B);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(!k.includes(r)){Ne(J,r);break}}}catch(y){t.e(y)}finally{t.f()}n()}else{var i,c=[],a=Object(l.a)(B);try{for(a.s();!(i=a.n()).done;){var o=i.value;k.includes(o)||(c=c.concat(o))}}catch(y){a.e(y)}finally{a.f()}c=(c=c.sort()).concat(0),V(c),p([]),M([]),h(2)}if(2===j){ne(te.concat(k.length));var d,u=b.a.cloneDeep(J),s=Object(l.a)(k);try{for(s.s();!(d=s.n()).done;){u[d.value-1]=H[Z]}}catch(y){s.e(y)}finally{s.f()}if(X(u),p([]),M([]),Z===H.length-1){var f=Math.max.apply(null,te.slice(0,te.length-1));if(1===te.filter((function(e){return e===f})).length)Ne(u,H[te.indexOf(f)]),n();else{for(var m=[],O=0;O<12;O++)te[O]===f&&(m=m.concat(H[O]));m=(m=m.sort()).concat(0),ae(m),alert("\u5e73\u7968\u9032\u884cPK"),h(3)}}else q(Z+1)}if(3===j){ve(Oe.concat(k.length));var v,_=b.a.cloneDeep(fe),N=Object(l.a)(k);try{for(N.s();!(v=N.n()).done;){_[v.value-1]=ce[de]}}catch(y){N.e(y)}finally{N.f()}if(je(_),p([]),M([]),de===ce.length-1){var x=Math.max.apply(null,Oe.slice(0,Oe.length-1));1===Oe.filter((function(e){return e===x})).length?(Ne(_,ce[Oe.indexOf(x)]),n()):(alert("\u518d\u6b21\u5e73\u7968\uff0c\u672c\u5c40\u904a\u6232\u7121\u8b66\u9577"),Ne(_,0),n())}else ue(de+1)}},children:"Submit"})]})]})},T=n(98),H=n.n(T),V=["\u72fc\u738b\u5b88\u885b","\u5b88\u5893\u4eba\u77f3\u50cf\u9b3c","\u72fc\u7f8e\u4eba\u9a0e\u58eb","\u6a5f\u68b0\u72fc","\u72fc\u738b\u9b54\u8853\u5e2b","\u9810\u5973\u7375\u767d","\u5669\u5922\u4e4b\u5f71"],W=function(e){var t=e.onClick,n=Object(c.b)(),l=Object(i.useState)(-1),d=Object(r.a)(l,2),s=d[0],b=d[1],f=function(e){return function(){b(e)}};return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:H.a.title,children:"\u9078\u64c7\u7248\u578b"}),Object(m.jsx)("div",{className:H.a.panel,children:V.map((function(e,t){return Object(m.jsx)("div",{className:u()(H.a.type,Object(a.a)({},H.a.clicked,t===s)),role:"button",onClick:f(t),children:e},t)}))}),Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{type:"text",className:H.a.btn,onClick:function(){n(Object(O.f)(V[s])),t()},disabled:s<0,children:"Submit"})})]})},Y=n(99),Z=n.n(Y),q=["type","player","role","night","daytimeDeath","giveUp","sheriff","daytimeDetail","exile","blank"];t.default=function(){var e=Object(c.c)((function(e){return e})),t=Object(i.useState)(q[0]),n=Object(r.a)(t,2),a=n[0],l=n[1],o=function(e){return function(){l(q[e])}};return Object(m.jsxs)("div",{className:Z.a.self,children:[a===q[0]&&Object(m.jsx)(W,{onClick:o(1)}),a===q[1]&&Object(m.jsx)(E,{onClick:o(2)}),a===q[2]&&Object(m.jsx)(G,{onClick:o(3)}),a===q[3]&&Object(m.jsx)(w,{onClick:o(4)}),a===q[4]&&Object(m.jsx)(x,{onClick:function(e){l("exile"===e?q[6]:q[5])}}),a===q[5]&&Object(m.jsx)(g,{onClick:o(function(){var t;return"giveUpEarlier"===(null===(t=e.record.daytimeDeath.find((function(e){return"1"===e.id})))||void 0===t?void 0:t.status)?3:6}())}),a===q[6]&&Object(m.jsx)(K,{onClick:o(function(){var t;return"giveUpLater"===(null===(t=e.record.daytimeDeath.find((function(e){return"1"===e.id})))||void 0===t?void 0:t.status)?3:7}())}),a===q[7]&&Object(m.jsx)(h,{onClick:o(3)})]})}},83:function(e,t,n){e.exports={title:"Daytime_title__1KPlZ",mainFrame:"Daytime_mainFrame__ymrgk",header:"Daytime_header__3GUxV",numFrame:"Daytime_numFrame__2OJRa",num:"Daytime_num__21KCs",clicked:"Daytime_clicked__3dELE",null:"Daytime_null__pBqYz",nullClick:"Daytime_nullClick__26xWG",btnFrame:"Daytime_btnFrame__2YTEX",backbtn:"Daytime_backbtn__3m40n",btn:"Daytime_btn__3Lut6"}},84:function(e,t,n){e.exports={title:"DaytimeDeath_title__1Wl4p",mainFrame:"DaytimeDeath_mainFrame__3KwgC",deathBtn:"DaytimeDeath_deathBtn__2G87j",btnFrame:"DaytimeDeath_btnFrame__3ueE2",backbtn:"DaytimeDeath_backbtn__1AmDf",btn:"DaytimeDeath_btn__1oSLF"}},85:function(e,t,n){e.exports={title:"GiveUp_title__3UvG1",numFrame:"GiveUp_numFrame__1E3zB",num:"GiveUp_num__zdCWv",clicked:"GiveUp_clicked__3AYec",btnFrame:"GiveUp_btnFrame__3njPv",backbtn:"GiveUp_backbtn__1rQ3y",btn:"GiveUp_btn__2CMT6"}},86:function(e,t,n){e.exports={title:"Night_title__2-g2s",mainFrame:"Night_mainFrame__2Z5QO",header:"Night_header__2Od1Y",functionFrame:"Night_functionFrame__3W_CY",function:"Night_function__1L-qH",functionClick:"Night_functionClick__16OZf",numFrame:"Night_numFrame__2bB1_",num:"Night_num__1l0LC",numClick:"Night_numClick__idV-o",null:"Night_null__3yRFc",nullClick:"Night_nullClick__1GMmw",btnFrame:"Night_btnFrame__1qLLv",backbtn:"Night_backbtn__RPMEt",btn:"Night_btn__yaZ5D"}},90:function(e,t,n){e.exports={title:"Player_title__2MdOx",parent:"Player_parent__18SxZ",child:"Player_child__BQHt2",text:"Player_text__2co06",btn:"Player_btn__22yQB"}},96:function(e,t,n){e.exports={title:"Role_title__3kq12",mainFrame:"Role_mainFrame__1W3-5",header:"Role_header__H7BxU",numFrame:"Role_numFrame__2K_7Z",num:"Role_num__3OILH",clicked:"Role_clicked__Fk8iS",btnFrame:"Role_btnFrame__Imd_m",backbtn:"Role_backbtn__2qrp7",btn:"Role_btn__2YKpm"}},97:function(e,t,n){e.exports={title:"Sheriff_title__21OsW",mainFrame:"Sheriff_mainFrame__2utkP",header:"Sheriff_header__3YOaH",numFrame:"Sheriff_numFrame__2ZKKX",num:"Sheriff_num__3KD2D",clicked:"Sheriff_clicked__3T6jW",null:"Sheriff_null__1YPqk",nullClick:"Sheriff_nullClick__1_RsM",btnFrame:"Sheriff_btnFrame__1DDeZ",backbtn:"Sheriff_backbtn__2S4jk",btn:"Sheriff_btn__3n6HN"}},98:function(e,t,n){e.exports={title:"Type_title__2OvUO",panel:"Type_panel__1pr1I",type:"Type_type__M8h1W",clicked:"Type_clicked__3QrI1",btn:"Type_btn__I6sdH"}},99:function(e,t,n){e.exports={self:"NewRecord_self__3zH-8"}}}]);
//# sourceMappingURL=5.e7e35298.chunk.js.map