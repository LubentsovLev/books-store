(this["webpackJsonpbooks-shop"]=this["webpackJsonpbooks-shop"]||[]).push([[0],{103:function(e,t,n){e.exports={container:"books_container___mo1M",addBooksBtn:"books_addBooksBtn__2VSdY"}},131:function(e,t,n){},142:function(e,t,n){e.exports={title:"header_title__by6TT"}},169:function(e,t,n){},170:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(10),i=n.n(s),o=(n(169),n.p,n(170),n(11)),l=n(13),j=n(25),u=n(50),d=n(133),b=n(352),h=n(14),O=n.n(h),x=n(31),f=n(12),m=n(105),p=m.create({baseURL:"https://www.googleapis.com/books/v1/volumes"}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e||"relevance",t=""!==t?t:t=0,n=n||20,m.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=".concat(n,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e||"relevance",t=""!==t?t:t=0,n=n||20,p.get("?q=pushkin&maxResults=".concat(n,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e||"relevance",t=""!==t?t:t=0,n=n||20,p.get("?q=Shakespeare&maxResults=".concat(n,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e||"relevance",t=""!==t?t:t=0,n=n||20,p.get("?q=game+of+thrones&maxResults=".concat(n,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;return e=e||"relevance",t=""!==t?t:t=0,n=n||20,p.get("?q=sherlock&maxResults=".concat(n,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"relevance",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20;t=t||"relevance",n=""!==n?n:n=0,a=a||20;var c=/\s+/,r=e.split(c);return r=r.join("+"),p.get("?q=".concat(r,"&maxResults=").concat(a,"&orderBy=").concat(t,"&projection=full&startIndex=").concat(n))},S="BOOKS/SET_BOOKS",B="BOOKS/IS_FETCHING",w="BOOKS/SET_MENU_TYPE",_="BOOKS/SET_SEARCH",T={books:[],isFetching:!1,menuType:"",search:""},I=function(e){return{type:S,books:e}},E=function(e){return{type:_,search:e}},R=function(e){return{type:w,menuType:e}},L=function(e){return{type:B,isFetching:e}},P=function(e,t,n){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(L(!0)),a.next=3,v(e,t,n);case 3:r=a.sent,c(I(r.data.items)),c(L(!1)),c(R("addBooks"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},F=function(e,t,n){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(L(!0)),a.next=3,g(e,t,n);case 3:r=a.sent,c(I(r.data.items)),c(L(!1)),c(R("Pushkin"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},A=function(e,t,n){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(L(!0)),a.next=3,k(e,t,n);case 3:r=a.sent,c(I(r.data.items)),c(L(!1)),c(R("Shakespeare"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},z=function(e,t,n){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(L(!0)),a.next=3,y(e,t,n);case 3:r=a.sent,c(I(r.data.items)),c(L(!1)),c(R("GameOfThrones"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},D=function(e,t,n){return function(){var a=Object(x.a)(O.a.mark((function a(c){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(L(!0)),a.next=3,C(e,t,n);case 3:r=a.sent,c(I(r.data.items)),c(L(!1)),c(R("Sherlock"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},H=function(e,t,n,a){return function(){var c=Object(x.a)(O.a.mark((function c(r){var s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return""===!e&&r(E(e)),r(L(!0)),c.next=4,N(e,t,n,a);case 4:s=c.sent,r(I(s.data.items)),r(L(!1)),r(R("Search")),r(E(e));case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(f.a)(Object(f.a)({},e),{},{books:t.books});case w:return Object(f.a)(Object(f.a)({},e),{},{menuType:t.menuType});case _:return Object(f.a)(Object(f.a)({},e),{},{search:t.search});case B:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});default:return e}},K=n(93),W="CART/SET_CART_BOOKS",G="CART/REMOVE_CART_BOOKS",q="CART/DELETE_CART_BOOKS",U="CART/IS_FETCHING",V={cartBooks:[],isFetching:!1},Y=function(e){return{type:W,books:e}},J=function(e){return{type:G,books:e}},X=function(e){return{type:q,books:e}},$=function(e){return{type:U,isFetching:e}},Q=function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n($(!0)),n(Y(e)),n($(!1));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,n=!1,a=function(){for(var a=0;a<e.cartBooks.length;a++){e.cartBooks[a].i.id;if(e.cartBooks[a].i.id===t.books.i.id){var c=Object.assign({count:e.cartBooks[a].count+1},e.cartBooks[a]);e.cartBooks[a]=c,e.cartBooks[a].count=isNaN(e.cartBooks[a].count)?1:e.cartBooks[a].count+1,n=!0}}},c=function(){for(var n=0;n<e.cartBooks.length;n++){e.cartBooks[n].i.id;if(e.cartBooks[n].i.id===t.books.i.id){var a=Object.assign({count:e.cartBooks[n].count-1},e.cartBooks[n]);e.cartBooks[n]=a,e.cartBooks[n].count=e.cartBooks[n].count<=0?0:e.cartBooks[n].count-1}}},r=function(){for(var n=0;e.cartBooks.length;n++)if(e.cartBooks[n].i.id===t.books.i.id){e.cartBooks.splice(n,1);break}};switch(e.cartBooks.length>0&&"CART/SET_CART_BOOKS"===t.type&&a(),"CART/REMOVE_CART_BOOKS"===t.type&&c(),"CART/DELETE_CART_BOOKS"===t.type&&r(),t.type){case W:return!0===n?e:Object(f.a)(Object(f.a)({},e),{},{cartBooks:[].concat(Object(K.a)(e.cartBooks),[t.books])});case G:case q:return Object(f.a)(Object(f.a)({},e),{},{cartBooks:Object(K.a)(e.cartBooks)});case U:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});default:return e}},ee=Object(u.c)({form:b.a,books:M,cart:Z}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,ne=Object(u.e)(ee,te(Object(u.a)(d.a)));window.__store__=ne;var ae=ne,ce=n(18),re=n(20),se=n(321),ie=n(17),oe=n(331),le=n(332),je=n(38),ue=n(335),de=n(333),be=n(55),he=n.n(be),Oe=n(87),xe=n.n(Oe),fe=n(4),me=n(355),pe=n(323),ve=n(327),ge=n(270),ke=n(325),ye=n(326),Ce=n(76),Ne=n.n(Ce),Se=n(139),Be=n.n(Se),we=n(86),_e=n.n(we),Te=n(140),Ie=n.n(Te),Ee=n(141),Re=n.n(Ee),Le=Object(se.a)({list:{width:250},fullList:{width:"auto"},menu:{display:"flex",alignItems:"center",justifyContent:"center"},ln:{color:"#3f51b5",textDecoration:"none"},menuMain:{display:"flex",justifyContent:"space-between",height:"100vh",flexDirection:"column"}});function Pe(){var e,t=Object(o.b)(),n=Le(),c=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),s=Object(ce.a)(c,2),i=s[0],l=s[1],u=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&l(Object(f.a)(Object(f.a)({},i),{},Object(re.a)({},e,t)))}};return Object(a.jsxs)("div",{className:n.menu,children:[Object(a.jsx)(Ne.a,{onClick:u("left",!0)}),Object(a.jsx)(me.a,{anchor:"left",open:i.left,onClose:u("left",!1),children:(e="left",Object(a.jsx)("div",{className:Object(fe.a)(n.list,Object(re.a)({},n.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:u(e,!1),onKeyDown:u(e,!1),children:Object(a.jsxs)("div",{className:n.menuMain,children:[Object(a.jsx)("div",{className:n.items,children:Object(a.jsxs)(pe.a,{children:[Object(a.jsx)(j.b,{className:n.ln,to:"/HarryPotter",activeClassName:"ln_active",onClick:function(){t(P())},children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(Be.a,{color:"primary"})}),Object(a.jsx)(ye.a,{primary:"Harry Potter"})]},"Starred")}),Object(a.jsx)(ve.a,{}),Object(a.jsx)(j.b,{className:n.ln,to:"/Pushkin",activeClassName:"ln_active",onClick:function(){t(F())},children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(Ie.a,{color:"primary"})}),Object(a.jsx)(ye.a,{primary:"Pushkin"})]},"Starred")}),Object(a.jsx)(ve.a,{}),Object(a.jsx)(j.b,{className:n.ln,to:"/Shakespeare",activeClassName:"ln_active",onClick:function(){t(A())},children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(_e.a,{color:"secondary"})}),Object(a.jsx)(ye.a,{primary:"Shakespeare"})]},"Starred")}),Object(a.jsx)(ve.a,{}),Object(a.jsx)(j.b,{className:n.ln,to:"/GameOfThrones",activeClassName:"ln_active",onClick:function(){t(z())},children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(Re.a,{color:"secondary"})}),Object(a.jsx)(ye.a,{primary:"Game of thrones"})]},"Starred")}),Object(a.jsx)(ve.a,{}),Object(a.jsx)(j.b,{className:n.ln,to:"/Sherlock",activeClassName:"ln_active",onClick:function(){t(D())},children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(xe.a,{})}),Object(a.jsx)(ye.a,{primary:"Sherlock"})]},"Starred")}),Object(a.jsx)(ve.a,{})]})}),Object(a.jsxs)("div",{className:n.cart,children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(j.b,{className:n.ln,to:"/Cart",activeClassName:"ln_active",children:Object(a.jsxs)(ge.a,{button:!0,children:[Object(a.jsx)(ke.a,{children:Object(a.jsx)(he.a,{color:"primary"})}),Object(a.jsx)(ye.a,{primary:"Go to cart"})]},"Starred")}),Object(a.jsx)(ve.a,{})]})]})}))})]})}var Fe=n(336),Ae=n(330),ze=n(328),De=n(334),He=n(142),Me=n.n(He);function Ke(e){var t=e.children,n=e.window,c=Object(Ae.a)({target:n?n():void 0});return Object(a.jsx)(ze.a,{appear:!1,direction:"down",in:!c,children:t})}var We=function(e){var t=Object(se.a)((function(e){return{search:Object(re.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ie.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ie.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",zIndex:1e3,cursor:"pointer",paddingRight:10,display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{},inputInput:Object(re.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),root:{display:"flex",justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,maxWidth:"300px",fontSize:"14px",minWidth:"80px"},hI:{display:"flex",alignItems:"center",justifyContent:"center"},cart:{color:"#fff"},searchInner:{display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}}))(),n=Object(o.c)((function(e){return e.cart.cartBooks})),c=Object(o.b)(),s=r.a.useState(!0),i=Object(ce.a)(s,2),u=i[0],d=i[1],b=r.a.useState(!1),h=Object(ce.a)(b,2),O=h[0],x=h[1],m=r.a.useState(!1),p=Object(ce.a)(m,2),v=p[0],g=p[1],k=r.a.useRef(null);r.a.useEffect((function(){document.addEventListener("keypress",(function(e){"Enter"===e.key&&O&&y()}))}),[O]);var y=function(e){k.current.firstChild.value?(k.current.firstChild.value=k.current.firstChild.value.length>20?k.current.firstChild.value.slice(0,20):k.current.firstChild.value,c(H(k.current.firstChild.value)),k.current.firstChild.value="",g(!0)):d(!1)};return Object(a.jsxs)("div",{className:t.root,children:[v?Object(a.jsx)(l.a,{from:"/Cart",to:"/Search"}):null,Object(a.jsx)(Ke,Object(f.a)(Object(f.a)({},e),{},{children:Object(a.jsx)(oe.a,{children:Object(a.jsxs)(le.a,{className:t.root,children:[Object(a.jsxs)("div",{className:t.hI,children:[Object(a.jsx)(de.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(Pe,{})}),Object(a.jsx)(je.a,{variant:"h6",children:Object(a.jsx)("span",{className:Me.a.title,children:"Books shop"})})]}),Object(a.jsxs)("div",{className:t.hI,children:[Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(j.b,{className:t.searchInner,to:"/Search",activeClassName:"ln_active",children:Object(a.jsx)(xe.a,{onClick:function(){y()}})})}),Object(a.jsx)(De.a,{placeholder:"Search\u2026",ref:k,onClick:function(){console.log(O),x(!0)},classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){""===e.target.dataset.value?d(!1):d(!0)},error:!u})]}),Object(a.jsx)(j.b,{className:t.ln,to:"/Cart",activeClassName:"ln_active",children:Object(a.jsx)(ue.a,{className:t.cart,color:"default",children:Object(a.jsx)(Fe.a,{badgeContent:n.length,color:"secondary",children:Object(a.jsx)(he.a,{})})})})]})]})})}))]})},Ge=n(148),qe=n(337),Ue=n(329),Ve=n(102),Ye=n.n(Ve),Je=n(338);function Xe(e){var t=r.a.useState(null),n=Object(ce.a)(t,2),s=n[0],i=n[1],o=Boolean(s),l=function(){i(null)},j=Object(c.useState)(!1),u=Object(ce.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(""),O=Object(ce.a)(h,2),x=O[0];O[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(Ye.a,{onClick:function(e){i(e.currentTarget)}}),Object(a.jsxs)(Ge.a,{id:"fade-menu",anchorEl:s,keepMounted:!0,open:o,onClose:l,TransitionComponent:Ue.a,children:[Object(a.jsx)(qe.a,{onClick:function(){b(!0),l()},children:Object(a.jsx)(Je.a,{href:e.inst.infoLink,children:"see more info about"})}),Object(a.jsx)(qe.a,{onClick:function(){b(!1),l()},children:"Close"})]}),d?Object(a.jsx)("div",{className:"small_menu_sh_tx",children:x}):null]})}var $e=n(339),Qe=Object(se.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},alignItems:"center",justifyContent:"center",height:"70vh",width:"100%"},loader:{width:"100px"}}}));function Ze(){var e=Qe();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)($e.a,{className:e.loader})})}var et=n(340),tt=n(341),nt=n(342),at=n(343),ct=n(344),rt=n(345),st=n(356),it=n(92),ot=n(143),lt=n.n(ot),jt=Object(se.a)((function(e){return{root:{maxWidth:320,minWidth:320,minHeight:"670px",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"10px"},media:{height:0,paddingTop:"84.25%",minHeight:"100px",backgroundSize:"160px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:it.a[500]},auth:{marginRight:"10px"},desc:{fontSize:"12px"}}}));function ut(e){var t=Object(o.b)(),n=jt(),c=r.a.useState(!1),s=Object(ce.a)(c,2),i=s[0],l=s[1],j=e.i.volumeInfo;return Object(a.jsxs)(et.a,{className:n.root,children:[Object(a.jsx)(tt.a,{avatar:Object(a.jsx)(st.a,{"aria-label":"recipe",className:n.avatar}),action:Object(a.jsx)(de.a,{"aria-label":"settings",children:Object(a.jsx)(Xe,{inst:j})}),title:j.title,subheader:j.subtitle}),Object(a.jsx)(nt.a,{className:n.media,image:j.imageLinks?j.imageLinks.thumbnail:null,title:"Paella dish"}),Object(a.jsx)(at.a,{children:Object(a.jsxs)(je.a,{variant:"body2",color:"textSecondary",component:"p",children:[j.authors?Object(a.jsxs)("p",{children:[Object(a.jsxs)("b",{children:[" ",j.authors.length>1?"authors":"author"," :"]}),j.authors.map((function(e){return Object(a.jsx)("span",{className:n.auth+";",children:e})}))]}):null,Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Count of pages :"})," ",j.pageCount]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Language :"})," ",j.language]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Published Date :"})," ",j.publishedDate]}),Object(a.jsx)("p",{children:Object(a.jsx)(Je.a,{color:"secondary",href:j.infoLink,children:"see more info about"})})]})}),Object(a.jsxs)(ct.a,{disableSpacing:!0,children:[Object(a.jsx)(de.a,{"aria-label":"add to favorites",children:Object(a.jsx)(_e.a,{})}),Object(a.jsx)(de.a,{"aria-label":"share",children:Object(a.jsx)(he.a,{onClick:function(){t(Q(e))}})}),Object(a.jsx)(de.a,{className:Object(fe.a)(n.expand,Object(re.a)({},n.expandOpen,i)),onClick:function(){l(!i)},"aria-expanded":i,"aria-label":"show more",children:j.description?Object(a.jsx)(lt.a,{}):null})]}),Object(a.jsx)(rt.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(a.jsxs)(at.a,{children:[Object(a.jsx)(je.a,{paragraph:!0,children:Object(a.jsx)("b",{children:"About the book"})}),Object(a.jsx)(je.a,{className:n.desc,paragraph:!0,children:j.description})]})})]})}var dt=n(103),bt=n.n(dt),ht=(n(144),n(5)),Ot=n(357),xt=n(346),ft=n(353),mt=n(272),pt=Object(ht.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(mt.a),vt=Object(se.a)((function(e){return{margin:{margin:e.spacing(1)},input:{maxWidth:130},select:{minWidth:130}}}));function gt(e){Object(o.b)();var t=vt(),n=r.a.useState(""),c=Object(ce.a)(n,2),s=c[0],i=c[1],l=r.a.useState(""),j=Object(ce.a)(l,2),u=j[0],d=j[1],b=r.a.useState(""),h=Object(ce.a)(b,2),O=h[0],x=h[1],f=r.a.useState(!1),m=Object(ce.a)(f,2),p=m[0],v=m[1],g=function(e){i(e.target.dataset.value),v(!0)};return Object(a.jsxs)("div",{className:"flexCenter",children:[Object(a.jsxs)("div",{className:"flexCenter",children:[Object(a.jsxs)(xt.a,{className:t.margin,children:[Object(a.jsx)(Ot.a,{htmlFor:"demo-customized-textbox",children:"Number of book"}),Object(a.jsx)(pt,{className:t.input,onChange:function(e){e.target.value=+e.target.value<0?0:+e.target.value,e.target.value=+e.target.value>160?160:+e.target.value;var t=e.target.value;d(t),v(!0)},type:"number",max:"5000",min:"0",id:"demo-customized-textbox"})]}),Object(a.jsxs)(xt.a,{className:t.margin,children:[Object(a.jsx)(Ot.a,{id:"demo-customized-select-label",children:"Order by"}),Object(a.jsxs)(ft.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",input:Object(a.jsx)(pt,{}),className:t.select,children:[Object(a.jsx)(qe.a,{value:"",children:Object(a.jsx)("em",{children:"None"})}),Object(a.jsx)(qe.a,{onClick:g,value:"newest",children:"newest"}),Object(a.jsx)(qe.a,{onClick:g,value:"relevance",children:"relevance"})]})]}),Object(a.jsxs)(xt.a,{className:t.margin,children:[Object(a.jsx)(Ot.a,{htmlFor:"demo-customized-textbox",children:"Count of books"}),Object(a.jsx)(pt,{className:t.input,onChange:function(e){e.target.value=+e.target.value<0?0:+e.target.value,e.target.value=+e.target.value>40?40:+e.target.value;var t=e.target.value;x(t),v(!0)},type:"number",min:"0",max:"40",id:"demo-customized-textbox"})]})]}),Object(a.jsx)("div",{className:"btn_sort_hp",children:Object(a.jsx)(ue.a,{onClick:function(){e.addBooks(s,u,O)},variant:"outlined",color:"primary",children:p?Object(a.jsx)("div",{children:"Set filters"}):Object(a.jsx)("div",{children:"Set default filters "})})})]})}var kt,yt=r.a.memo((function(e){return Object(c.useEffect)((function(){}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)(gt,{addBooks:e.addBooks}),Object(a.jsx)("div",{className:bt.a.container,children:e.HarryPotter.map((function(e){return Object(a.jsx)(ut,{i:e,price:Math.ceil((t=5,n=100,t+Math.random()*(n-t)))},e.id);var t,n}))})]})})),Ct=r.a.memo((function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.books.books})),r=Object(o.c)((function(e){return e.books.isFetching})),s=Object(o.c)((function(e){return e.books.menuType})),i=Object(o.c)((function(e){return e.books.search})),l=function(e,n,a){switch(s){case"addBooks":return t(P(e,n,a));case"Pushkin":return t(F(e,n,a));case"Shakespeare":return t(A(e,n,a));case"GameOfThrones":return t(z(e,n,a));case"Sherlock":return t(D(e,n,a));case"Search":return t(H(i,e,n,a));default:return t(P(e,n,a))}};return Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){console.log(i)}),[n,r,s,i]),Object(a.jsx)("div",{className:"",children:r?Object(a.jsx)(Ze,{}):Object(a.jsx)(yt,{addBooks:l,HarryPotter:n})})})),Nt=(n(131),n(347)),St=n(145),Bt=n.n(St),wt=n(146),_t=n.n(wt),Tt=n(147),It=n.n(Tt),Et=Object(se.a)({root:(kt={maxWidth:250,margin:" 0 auto",backgroundColor:"#d3d9ff"},Object(re.a)(kt,"margin","7px"),Object(re.a)(kt,"display","flex"),Object(re.a)(kt,"justifyContent","space-between"),Object(re.a)(kt,"flexDirection","column"),Object(re.a)(kt,"minHeight",400),kt),media:{height:200,backgroundSize:"120px"},bottmomButs:{justifyContent:"space-between"},PM:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:100},bucks:{fontSize:25,fontWeight:700},Pls:{cursor:"pointer"},min:{textAlign:"center",maxWidth:40,minWidth:"auto",paddingLeft:"20px"}});function Rt(e){var t=Object(o.b)(),n=Et(),r=e.i;return Object(c.useEffect)((function(){}),[e.i]),Object(a.jsx)("div",{className:"flexCenter",children:r.map((function(e){return Object(a.jsxs)(et.a,{className:n.root,children:[Object(a.jsxs)(Nt.a,{href:e.i.volumeInfo.infoLink,children:[Object(a.jsx)(nt.a,{className:n.media,image:e.i.volumeInfo.imageLinks?e.i.volumeInfo.imageLinks.thumbnail:null,title:"Contemplative Reptile"}),Object(a.jsxs)(at.a,{children:[Object(a.jsx)(je.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.i.volumeInfo.title}),Object(a.jsxs)(je.a,{variant:"body2",color:"textSecondary",component:"p",className:n.bucks,children:["$",e.price]})]})]}),Object(a.jsxs)(ct.a,{className:n.bottmomButs,children:[Object(a.jsxs)("div",{className:n.PM,children:[Object(a.jsx)(Fe.a,{badgeContent:void 0===e.count?1:e.count+1,color:"secondary",className:n.Pls,children:Object(a.jsx)(Bt.a,{variant:"contained",size:"small",color:"primary",onClick:function(){t(Q(e))}})}),Object(a.jsx)(ue.a,{variant:"contained",color:"secondary",size:"small",className:n.min,startIcon:Object(a.jsx)(_t.a,{}),disabled:!e.count,onClick:function(){var n;t((n=e,function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t($(!0)),t(J(n)),t($(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]}),Object(a.jsxs)(ue.a,{onClick:function(){var n;t((n=e,function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t($(!0)),t(X(n)),t($(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},variant:"contained",size:"small",color:"secondary",children:[Object(a.jsx)(It.a,{})," Delete"]})]})]})}))})}var Lt=function(e){var t=e.CartBooks;Object(o.b)();return Object(a.jsx)("div",{className:"",children:e.CartBooks.length>0?Object(a.jsx)("div",{className:"flexCenter",children:Object(a.jsx)(Rt,{i:t})}):Object(a.jsx)("div",{className:"shopping__cart flexCenter ",children:Object(a.jsx)("div",{id:"app",children:Object(a.jsx)("div",{class:"grid flexCenter",children:Object(a.jsx)("div",{class:"col-dx",children:Object(a.jsx)("div",{class:"cart",children:Object(a.jsxs)("div",{class:"empty-contents",children:[Object(a.jsxs)("div",{class:"draw",children:[Object(a.jsxs)("div",{class:"cactus",children:[Object(a.jsx)("div",{class:"arm"})," ",Object(a.jsx)("div",{class:"arm"})]}),Object(a.jsxs)("div",{class:"cactus",children:[Object(a.jsx)("div",{class:"arm"})," ",Object(a.jsx)("div",{class:"arm"})]}),Object(a.jsxs)("div",{class:"cactus",children:[Object(a.jsx)("div",{class:"arm"})," ",Object(a.jsx)("div",{class:"arm"})]}),Object(a.jsxs)("div",{class:"sky",children:[Object(a.jsx)("div",{class:"montain"})," ",Object(a.jsx)("div",{class:"montain two"}),Object(a.jsx)("div",{class:"sun"})]})]}),Object(a.jsx)("p",{class:"no-items-text",children:"Your cart is actually empty"}),Object(a.jsx)("div",{className:"flexCenter",children:Object(a.jsx)(j.b,{className:"btn",to:"/HarryPotter",activeClassName:"ln_active",children:Object(a.jsx)(ue.a,{variant:"contained",children:"Go and check some good stuff"})})})]})})})})})})})},Pt=function(){Object(o.b)();var e=Object(o.c)((function(e){return e.cart.cartBooks})),t=Object(o.c)((function(e){return e.cart.isFetching}));return Object(c.useEffect)((function(){}),[e,t]),Object(a.jsx)("div",{children:Object(a.jsx)(Lt,{CartBooks:e})})},Ft=n(348),At=n(349);function zt(){return Object(a.jsxs)(je.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(a.jsx)(Je.a,{color:"inherit",href:"https://material-ui.com/"})," ",(new Date).getFullYear(),"."]})}var Dt=Object(se.a)((function(e){return{root:{display:"flex",flexDirection:"column"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",textAlign:"center",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function Ht(){var e=Dt();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(Ft.a,{}),Object(a.jsx)("footer",{className:e.footer,children:Object(a.jsxs)(At.a,{maxWidth:"sm",children:[Object(a.jsx)(je.a,{variant:"body1",children:"Books shop --- order more"}),Object(a.jsx)(zt,{})]})})]})}var Mt=n(351),Kt=n(350),Wt=Object(Kt.a)();function Gt(){return Object(a.jsx)("div",{children:Object(a.jsxs)(Mt.a,{theme:Wt,children:[Object(a.jsx)("header",{className:"app__header",children:Object(a.jsx)(We,{})}),Object(a.jsx)("div",{className:"app__main",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/HarryPotter",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/Pushkin",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/Shakespeare",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/GameOfThrones",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/Sherlock",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/Search",render:function(){return Object(a.jsx)(Ct,{})}}),Object(a.jsx)(l.b,{path:"/Cart",render:function(){return Object(a.jsx)(Pt,{})}})]})}),Object(a.jsx)("footer",{children:Object(a.jsx)(Ht,{})})]})})}var qt=function(e){return Object(a.jsx)(j.a,{children:Object(a.jsx)(o.a,{store:ae,children:Object(a.jsx)(Gt,{})})})},Ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,358)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(qt,{}),document.getElementById("root")),Ut()}},[[268,1,2]]]);
//# sourceMappingURL=main.83f8454b.chunk.js.map