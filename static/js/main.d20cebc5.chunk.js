(this["webpackJsonpbooks-shop"]=this["webpackJsonpbooks-shop"]||[]).push([[0],{102:function(e,t,a){e.exports={container:"books_container___mo1M",addBooksBtn:"books_addBooksBtn__2VSdY"}},129:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(167),a.p,a(168),a(12)),l=a(11),j=a(29),d=a(48),b=a(131),u=a(347),O=a(34),h=a.n(O),x=a(55),m=a(13),p=a(132),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"relevance",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;return e=e||"relevance",t=""!==t?t:t=0,a=a||40,p.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=".concat(a,"&orderBy=").concat(e,"&projection=full&startIndex=").concat(t))},v="BOOKS/SET_BOOKS",g="BOOKS/IS_FETCHING",k={books:[],isFetching:!1},y=function(e){return{type:g,isFetching:e}},C=function(e,t,a){return function(){var c=Object(x.a)(h.a.mark((function c(n){var r;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n(y(!0)),c.next=3,f(e,t,a);case 3:r=c.sent,n((s=r.data.items,{type:v,books:s})),n(y(!1));case 6:case"end":return c.stop()}var s}),c)})));return function(e){return c.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{books:t.books});case g:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});default:return e}},B=a(92),S="CART/SET_CART_BOOKS",w="CART/REMOVE_CART_BOOKS",_="CART/DELETE_CART_BOOKS",T="CART/IS_FETCHING",E={cartBooks:[],isFetching:!1},I=function(e){return{type:S,books:e}},R=function(e){return{type:w,books:e}},F=function(e){return{type:_,books:e}},L=function(e){return{type:T,isFetching:e}},A=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(L(!0)),a(I(e)),a(L(!1));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=!1,c=function(){for(var c=0;c<e.cartBooks.length;c++){e.cartBooks[c].i.id;if(e.cartBooks[c].i.id===t.books.i.id){var n=Object.assign({count:e.cartBooks[c].count+1},e.cartBooks[c]);e.cartBooks[c]=n,e.cartBooks[c].count=isNaN(e.cartBooks[c].count)?2:e.cartBooks[c].count+1,a=!0}}},n=function(){for(var a=0;a<e.cartBooks.length;a++){e.cartBooks[a].i.id;if(e.cartBooks[a].i.id===t.books.i.id){var c=Object.assign({count:e.cartBooks[a].count-1},e.cartBooks[a]);e.cartBooks[a]=c,e.cartBooks[a].count=e.cartBooks[a].count<=0?0:e.cartBooks[a].count-1}}},r=function(){for(var a=0;e.cartBooks.length;a++)if(e.cartBooks[a].i.id===t.books.i.id){e.cartBooks.splice(a,1);break}};switch(e.cartBooks.length>0&&"CART/SET_CART_BOOKS"===t.type&&c(),"CART/REMOVE_CART_BOOKS"===t.type&&n(),"CART/DELETE_CART_BOOKS"===t.type&&r(),t.type){case S:return!0===a?e:Object(m.a)(Object(m.a)({},e),{},{cartBooks:[].concat(Object(B.a)(e.cartBooks),[t.books])});case w:case _:return Object(m.a)(Object(m.a)({},e),{},{cartBooks:Object(B.a)(e.cartBooks)});case T:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});default:return e}},P=Object(d.c)({form:u.a,books:N,cart:z}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,W=Object(d.e)(P,D(Object(d.a)(b.a)));window.__store__=W;var H=W,M=a(18),K=a(317),G=a(16),U=a(327),V=a(328),Y=a(37),J=a(330),X=a(329),q=a(53),$=a.n(q),Q=a(140),Z=a.n(Q),ee=a(351),te=a(25),ae=a(4),ce=a(350),ne=a(319),re=a(323),se=a(268),ie=a(321),oe=a(322),le=a(76),je=a.n(le),de=a(138),be=a.n(de),ue=a(86),Oe=a.n(ue),he=a(139),xe=a.n(he),me=Object(K.a)({list:{width:250},fullList:{width:"auto"},menu:{display:"flex",alignItems:"center",justifyContent:"center"},ln:{color:"#3f51b5",textDecoration:"none"}});function pe(){var e,t=me(),a=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(te.a)(a,2),s=n[0],i=n[1],o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(m.a)(Object(m.a)({},s),{},Object(M.a)({},e,t)))}};return Object(c.jsxs)("div",{className:t.menu,children:[Object(c.jsx)(je.a,{onClick:o("left",!0)}),Object(c.jsx)(ce.a,{anchor:"left",open:s.left,onClose:o("left",!1),children:(e="left",Object(c.jsx)("div",{className:Object(ae.a)(t.list,Object(M.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:o(e,!1),onKeyDown:o(e,!1),children:Object(c.jsxs)(ne.a,{children:[Object(c.jsx)(j.b,{className:t.ln,to:"/HarryPotter",activeClassName:"ln_active",children:Object(c.jsxs)(se.a,{button:!0,children:[Object(c.jsx)(ie.a,{children:Object(c.jsx)(be.a,{color:"primary"})}),Object(c.jsx)(oe.a,{primary:"Harry Potter"})]},"Starred")}),Object(c.jsx)(re.a,{}),Object(c.jsx)(j.b,{className:t.ln,to:"/New",activeClassName:"ln_active",children:Object(c.jsxs)(se.a,{button:!0,children:[Object(c.jsx)(ie.a,{children:Object(c.jsx)(xe.a,{color:"primary"})}),Object(c.jsx)(oe.a,{primary:" \u041d\u043e\u0432\u0438\u043d\u043a\u0438"})]},"Starred")}),Object(c.jsx)(re.a,{}),Object(c.jsx)(j.b,{className:t.ln,to:"/Top",activeClassName:"ln_active",children:Object(c.jsxs)(se.a,{button:!0,children:[Object(c.jsx)(ie.a,{children:Object(c.jsx)(Oe.a,{color:"secondary"})}),Object(c.jsx)(oe.a,{color:"secondary",primary:"\u0422\u043e\u043f \u043a\u043d\u0438\u0433"})]},"Starred")}),Object(c.jsx)(re.a,{}),Object(c.jsx)(j.b,{className:t.ln,to:"/Cart",activeClassName:"ln_active",children:Object(c.jsxs)(se.a,{button:!0,children:[Object(c.jsx)(ie.a,{children:Object(c.jsx)($.a,{color:"primary"})}),Object(c.jsx)(oe.a,{primary:"Go to cart"})]},"Starred")}),Object(c.jsx)(re.a,{})]})}))})]})}var fe=a(331),ve=a(326),ge=a(324);function ke(e){var t=e.children,a=e.window,n=Object(ve.a)({target:a?a():void 0});return Object(c.jsx)(ge.a,{appear:!1,direction:"down",in:!n,children:t})}var ye=function(e){var t=Object(K.a)((function(e){return{search:Object(M.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(G.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(G.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),root:{display:"flex",justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,maxWidth:"300px",fontSize:"14px",minWidth:"80px"},hI:{display:"flex",alignItems:"center",justifyContent:"center"},cart:{color:"#fff"}}}))(),a=Object(o.c)((function(e){return e.cart.cartBooks}));return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(ke,Object(m.a)(Object(m.a)({},e),{},{children:Object(c.jsx)(U.a,{children:Object(c.jsxs)(V.a,{className:t.root,children:[Object(c.jsxs)("div",{className:t.hI,children:[Object(c.jsx)(X.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(c.jsx)(pe,{})}),Object(c.jsx)(Y.a,{variant:"h6",className:t.title,children:"Books shop"})]}),Object(c.jsxs)("div",{className:t.hI,children:[Object(c.jsxs)("div",{className:t.search,children:[Object(c.jsx)("div",{className:t.searchIcon,children:Object(c.jsx)(Z.a,{})}),Object(c.jsx)(ee.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(c.jsx)(j.b,{className:t.ln,to:"/Cart",activeClassName:"ln_active",children:Object(c.jsx)(J.a,{className:t.cart,color:"default",children:Object(c.jsx)(fe.a,{badgeContent:a.length,color:"secondary",children:Object(c.jsx)($.a,{})})})})]})]})})}))})},Ce=a(146),Ne=a(332),Be=a(325),Se=a(101),we=a.n(Se);function _e(){var e=r.a.useState(null),t=Object(te.a)(e,2),a=t[0],s=t[1],i=Boolean(a),o=function(){s(null)},l=Object(n.useState)(!1),j=Object(te.a)(l,2),d=j[0],b=j[1],u=Object(n.useState)(""),O=Object(te.a)(u,2),h=O[0],x=O[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(we.a,{onClick:function(e){s(e.currentTarget)}}),Object(c.jsxs)(Ce.a,{id:"fade-menu",anchorEl:a,keepMounted:!0,open:i,onClose:o,TransitionComponent:Be.a,children:[Object(c.jsx)(Ne.a,{onClick:function(){b(!0),o(),x("More info")},children:"More info about the book"}),Object(c.jsx)(Ne.a,{onClick:function(){b(!0),o(),x("To cart")},children:"Add to cart"}),Object(c.jsx)(Ne.a,{onClick:function(){b(!1),o()},children:"Close"})]}),d?Object(c.jsx)("div",{className:"small_menu_sh_tx",children:h}):null]})}var Te=a(333),Ee=Object(K.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},alignItems:"center",justifyContent:"center",height:"70vh",width:"100%"},loader:{width:"100px"}}}));function Ie(){var e=Ee();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(Te.a,{className:e.loader})})}var Re=a(334),Fe=a(335),Le=a(336),Ae=a(337),ze=a(339),Pe=a(340),De=a(352),We=a(91),He=a(141),Me=a.n(He),Ke=a(338),Ge=Object(K.a)((function(e){return{root:{maxWidth:320,minWidth:320,minHeight:"670px",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"10px"},media:{height:0,paddingTop:"84.25%",minHeight:"100px",backgroundSize:"160px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:We.a[500]},auth:{marginRight:"10px"},desc:{fontSize:"12px"}}}));function Ue(e){var t=Object(o.b)(),a=Ge(),n=r.a.useState(!1),s=Object(te.a)(n,2),i=s[0],l=s[1],j=e.i.volumeInfo;return Object(c.jsxs)(Re.a,{className:a.root,children:[Object(c.jsx)(Fe.a,{avatar:Object(c.jsx)(De.a,{"aria-label":"recipe",className:a.avatar}),action:Object(c.jsx)(X.a,{"aria-label":"settings",children:Object(c.jsx)(_e,{})}),title:j.title,subheader:j.subtitle}),Object(c.jsx)(Le.a,{className:a.media,image:j.imageLinks?j.imageLinks.thumbnail:null,title:"Paella dish"}),Object(c.jsx)(Ae.a,{children:Object(c.jsxs)(Y.a,{variant:"body2",color:"textSecondary",component:"p",children:[j.authors?Object(c.jsxs)("p",{children:[Object(c.jsxs)("b",{children:[" ",j.authors.length>1?"authors":"author"," :"]}),j.authors.map((function(e){return Object(c.jsx)("span",{className:a.auth+";",children:e})}))]}):null,Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Count of pages :"})," ",j.pageCount]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Language :"})," ",j.language]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Published Date :"})," ",j.publishedDate]}),Object(c.jsx)("p",{children:Object(c.jsx)(Ke.a,{color:"secondary",href:j.infoLink,children:"see more info about"})})]})}),Object(c.jsxs)(ze.a,{disableSpacing:!0,children:[Object(c.jsx)(X.a,{"aria-label":"add to favorites",children:Object(c.jsx)(Oe.a,{})}),Object(c.jsx)(X.a,{"aria-label":"share",children:Object(c.jsx)($.a,{onClick:function(){t(A(e))}})}),Object(c.jsx)(X.a,{className:Object(ae.a)(a.expand,Object(M.a)({},a.expandOpen,i)),onClick:function(){l(!i)},"aria-expanded":i,"aria-label":"show more",children:j.description?Object(c.jsx)(Me.a,{}):null})]}),Object(c.jsx)(Pe.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)(Ae.a,{children:[Object(c.jsx)(Y.a,{paragraph:!0,children:Object(c.jsx)("b",{children:"About the book"})}),Object(c.jsx)(Y.a,{className:a.desc,paragraph:!0,children:j.description})]})})]})}var Ve=a(102),Ye=a.n(Ve),Je=(a(142),a(5)),Xe=a(353),qe=a(341),$e=a(348),Qe=Object(Je.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(ee.a),Ze=Object(K.a)((function(e){return{margin:{margin:e.spacing(1)},input:{maxWidth:130},select:{minWidth:130}}}));function et(e){var t=Object(o.b)(),a=Ze(),n=r.a.useState(""),s=Object(te.a)(n,2),i=s[0],l=s[1],j=r.a.useState(""),d=Object(te.a)(j,2),b=d[0],u=d[1],O=r.a.useState(""),h=Object(te.a)(O,2),x=h[0],m=h[1],p=r.a.useState(!1),f=Object(te.a)(p,2),v=f[0],g=f[1],k=function(e){l(e.target.dataset.value),g(!0)};return Object(c.jsxs)("div",{className:"flexCenter",children:[Object(c.jsxs)("div",{className:"flexCenter",children:[Object(c.jsxs)(qe.a,{className:a.margin,children:[Object(c.jsx)(Xe.a,{htmlFor:"demo-customized-textbox",children:"Number of book"}),Object(c.jsx)(Qe,{className:a.input,onChange:function(e){e.target.value=+e.target.value<0?0:+e.target.value,e.target.value=+e.target.value>200?200:+e.target.value;var t=e.target.value;u(t),g(!0)},type:"number",max:"5000",min:"0",id:"demo-customized-textbox"})]}),Object(c.jsxs)(qe.a,{className:a.margin,children:[Object(c.jsx)(Xe.a,{id:"demo-customized-select-label",children:"Order by"}),Object(c.jsxs)($e.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",input:Object(c.jsx)(Qe,{}),className:a.select,children:[Object(c.jsx)(Ne.a,{value:"",children:Object(c.jsx)("em",{children:"None"})}),Object(c.jsx)(Ne.a,{onClick:k,value:"newest",children:"newest"}),Object(c.jsx)(Ne.a,{onClick:k,value:"relevance",children:"relevance"})]})]}),Object(c.jsxs)(qe.a,{className:a.margin,children:[Object(c.jsx)(Xe.a,{htmlFor:"demo-customized-textbox",children:"Count of books"}),Object(c.jsx)(Qe,{className:a.input,onChange:function(e){e.target.value=+e.target.value<0?0:+e.target.value,e.target.value=+e.target.value>40?40:+e.target.value;var t=e.target.value;m(t),g(!0)},type:"number",min:"0",max:"40",id:"demo-customized-textbox"})]})]}),Object(c.jsx)("div",{className:"btn_sort_hp",children:Object(c.jsx)(J.a,{onClick:function(){t(e.addBooks(i,b,x))},variant:"outlined",color:"primary",children:v?Object(c.jsx)("div",{children:"Set filters"}):Object(c.jsx)("div",{children:"Set default filters "})})})]})}var tt,at=r.a.memo((function(e){return Object(n.useEffect)((function(){}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(et,{addBooks:e.addBooks}),Object(c.jsx)("div",{className:Ye.a.container,children:e.HarryPotter.map((function(e){return Object(c.jsx)(Ue,{i:e,price:Math.ceil((t=5,a=100,t+Math.random()*(a-t)))},e.id);var t,a}))})]})})),ct=r.a.memo((function(e){var t=Object(o.b)(),a=Object(o.c)((function(e){return e.books.books})),r=Object(o.c)((function(e){return e.books.isFetching}));return Object(n.useEffect)((function(){t(C())}),[]),Object(n.useEffect)((function(){}),[a,r]),Object(c.jsx)("div",{className:"",children:r?Object(c.jsx)(Ie,{}):Object(c.jsx)(at,{addBooks:C,HarryPotter:a})})})),nt=(a(129),a(342)),rt=a(143),st=a.n(rt),it=a(144),ot=a.n(it),lt=a(145),jt=a.n(lt),dt=Object(K.a)({root:(tt={maxWidth:320,margin:" 0 auto",minWidth:"320px",backgroundColor:"#d3d9ff"},Object(M.a)(tt,"margin","7px"),Object(M.a)(tt,"display","flex"),Object(M.a)(tt,"justifyContent","space-between"),Object(M.a)(tt,"flexDirection","column"),Object(M.a)(tt,"minHeight",400),tt),media:{height:200,backgroundSize:"120px"},bottmomButs:{justifyContent:"space-between"},PM:{display:"flex",alignItems:"center",justifyContent:"space-between",minWidth:100},bucks:{fontSize:25,fontWeight:700},Pls:{cursor:"pointer"},min:{textAlign:"center",maxWidth:40,minWidth:"auto",paddingLeft:"20px"}});function bt(e){var t=Object(o.b)(),a=dt(),r=e.i;return Object(n.useEffect)((function(){}),[e.i]),Object(c.jsx)("div",{className:"flexCenter",children:r.map((function(e){return Object(c.jsxs)(Re.a,{className:a.root,children:[Object(c.jsxs)(nt.a,{href:e.i.volumeInfo.infoLink,children:[Object(c.jsx)(Le.a,{className:a.media,image:e.i.volumeInfo.imageLinks?e.i.volumeInfo.imageLinks.thumbnail:null,title:"Contemplative Reptile"}),Object(c.jsxs)(Ae.a,{children:[Object(c.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.i.volumeInfo.title}),Object(c.jsxs)(Y.a,{variant:"body2",color:"textSecondary",component:"p",className:a.bucks,children:["$",e.price]})]})]}),Object(c.jsxs)(ze.a,{className:a.bottmomButs,children:[Object(c.jsxs)("div",{className:a.PM,children:[Object(c.jsx)(fe.a,{badgeContent:e.count,color:"secondary",className:a.Pls,children:Object(c.jsx)(st.a,{variant:"contained",size:"small",color:"primary",onClick:function(){t(A(e))}})}),Object(c.jsx)(J.a,{variant:"contained",color:"secondary",size:"small",className:a.min,startIcon:Object(c.jsx)(ot.a,{}),disabled:!e.count,onClick:function(){var a;t((a=e,function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(L(!0)),t(R(a)),t(L(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]}),Object(c.jsxs)(J.a,{onClick:function(){var a;t((a=e,function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(L(!0)),t(F(a)),t(L(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},variant:"contained",size:"small",color:"secondary",children:[Object(c.jsx)(jt.a,{})," Delete"]})]})]})}))})}var ut=function(e){var t=e.CartBooks;Object(o.b)();return Object(c.jsx)("div",{className:"",children:e.CartBooks.length>0?Object(c.jsx)("div",{className:"flexCenter",children:Object(c.jsx)(bt,{i:t})}):Object(c.jsx)("div",{className:"shopping__cart flexCenter ",children:Object(c.jsx)("div",{id:"app",children:Object(c.jsx)("div",{class:"grid flexCenter",children:Object(c.jsx)("div",{class:"col-dx",children:Object(c.jsx)("div",{class:"cart",children:Object(c.jsxs)("div",{class:"empty-contents",children:[Object(c.jsxs)("div",{class:"draw",children:[Object(c.jsxs)("div",{class:"cactus",children:[Object(c.jsx)("div",{class:"arm"})," ",Object(c.jsx)("div",{class:"arm"})]}),Object(c.jsxs)("div",{class:"cactus",children:[Object(c.jsx)("div",{class:"arm"})," ",Object(c.jsx)("div",{class:"arm"})]}),Object(c.jsxs)("div",{class:"cactus",children:[Object(c.jsx)("div",{class:"arm"})," ",Object(c.jsx)("div",{class:"arm"})]}),Object(c.jsxs)("div",{class:"sky",children:[Object(c.jsx)("div",{class:"montain"})," ",Object(c.jsx)("div",{class:"montain two"}),Object(c.jsx)("div",{class:"sun"})]})]}),Object(c.jsx)("p",{class:"no-items-text",children:"Your cart is actually empty"}),Object(c.jsx)("div",{className:"flexCenter",children:Object(c.jsx)(j.b,{className:"btn",to:"/HarryPotter",activeClassName:"ln_active",children:Object(c.jsx)(J.a,{variant:"contained",children:"Go and check some good stuff"})})})]})})})})})})})},Ot=function(){Object(o.b)();var e=Object(o.c)((function(e){return e.cart.cartBooks})),t=Object(o.c)((function(e){return e.cart.isFetching}));return Object(n.useEffect)((function(){}),[e,t]),Object(c.jsx)("div",{children:Object(c.jsx)(ut,{CartBooks:e})})},ht=a(343),xt=a(344);function mt(){return Object(c.jsxs)(Y.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(c.jsx)(Ke.a,{color:"inherit",href:"https://material-ui.com/"})," ",(new Date).getFullYear(),"."]})}var pt=Object(K.a)((function(e){return{root:{display:"flex",flexDirection:"column"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",textAlign:"center",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function ft(){var e=pt();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(ht.a,{}),Object(c.jsx)("footer",{className:e.footer,children:Object(c.jsxs)(xt.a,{maxWidth:"sm",children:[Object(c.jsx)(Y.a,{variant:"body1",children:"Books shop --- order more"}),Object(c.jsx)(mt,{})]})})]})}var vt=a(346),gt=a(345),kt=Object(gt.a)();function yt(){return Object(c.jsx)("div",{children:Object(c.jsxs)(vt.a,{theme:kt,children:[Object(c.jsx)("header",{className:"app__header",children:Object(c.jsx)(ye,{})}),Object(c.jsx)("div",{className:"app__main",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/HarryPotter",render:function(){return Object(c.jsx)(ct,{})}}),Object(c.jsx)(l.a,{path:"/Cart",render:function(){return Object(c.jsx)(Ot,{})}})]})}),Object(c.jsx)("footer",{children:Object(c.jsx)(ft,{})})]})})}var Ct=function(e){return Object(c.jsx)(j.a,{children:Object(c.jsx)(o.a,{store:H,children:Object(c.jsx)(yt,{})})})},Nt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,354)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(Ct,{}),document.getElementById("root")),Nt()}},[[266,1,2]]]);
//# sourceMappingURL=main.d20cebc5.chunk.js.map