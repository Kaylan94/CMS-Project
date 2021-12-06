(this["webpackJsonppalmsoft-cms"]=this["webpackJsonppalmsoft-cms"]||[]).push([[0],{321:function(e,t,a){"use strict";a.r(t);a(92);var n=a(7),s=a(0),i=a(80),r=a.n(i),o=a(371),l=a(5),c=a(373),d=a(375),h=a(376),u=a(380),m=a(377),j=a(379),b=a(378),p=a(89),g=a(88),x=a(149),O=a.n(x),f=a(150),y=a.n(f),v=a(83),C=a(1);const N=Object(o.a)((e=>({root:{maxWidth:"100%",margin:10,display:"flex",flexDirection:"column"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]},media:{backgroundSize:"contain",backgroundPosition:"center",flexGrow:1},title:{overflow:"hidden",textOverflow:"hidden"}}))),w={Small:200,Medium:260,Large:400},S=e=>{const{brandedName:t,priceLabel:a,description:n,image:i}=e,r=N(),[o,g]=Object(s.useState)(!1);return Object(C.jsx)(v.b,{to:"/products/".concat(e.id),children:Object(C.jsxs)(c.a,{className:r.root,style:{width:w[e.sizeName]},children:[Object(C.jsx)(d.a,{title:Object(C.jsx)(p.a,{style:{fontSize:w[e.sizeName]/15},className:r.title,children:t}),subheader:a}),Object(C.jsx)(h.a,{style:{height:1.2*w[e.sizeName]},className:r.media,image:i.sizes.Best.url,title:t}),Object(C.jsxs)(m.a,{disableSpacing:!0,children:[Object(C.jsx)(b.a,{"aria-label":"add to favorites",children:Object(C.jsx)(O.a,{})}),Object(C.jsx)(b.a,{className:Object(l.a)(r.expand,{[r.expandOpen]:o}),onClick:()=>{g(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(C.jsx)(y.a,{})})]}),Object(C.jsx)(j.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(C.jsx)(u.a,{children:Object(C.jsx)(p.a,{paragraph:!0,children:n})})})]})})},k=Object(o.a)((e=>({root:{flexGrow:1},container:{display:"flex",justifyContent:"center",flexWrap:"wrap"}}))),F={abbreviatedCategoryHistogram:!0,limit:20,cat:"womens-fashion",view:"web",useElasticsearch:!0,sorts:"Popular",pid:"shopstyle"},T=e=>{const{amount:t,category:a,size:n}=e,i="https://api.shopstyle.com/api/v2/products",[o,l]=Object(s.useState)({products:[]}),c=k();return Object(s.useEffect)((()=>{!async function(){const e=r.a.stringify({...F,limit:t||F.limit,cat:a||F.cat}),n=await fetch("".concat(i,"?").concat(e)).then((e=>e.json()));l(n)}()}),[t,a,i]),Object(C.jsx)("div",{className:c.root,children:Object(C.jsx)("div",{className:c.container,children:o.products.map((e=>Object(C.jsx)(S,{sizeName:n||"Medium",...e},e.id)))})})};n.a.registerComponent(T,{name:"Products List",inputs:[{name:"category",type:"string",defaultValue:"mens",enum:[{label:"Women",value:"womens-fashion"},{label:"Mens",value:"mens-clothes"},{label:"Kids",value:"kids-and-baby"},{label:"home",value:"living"}]},{name:"amount",type:"number",defaultValue:20},{name:"size",type:"string",defaultValue:"Medium",enum:["Small","Medium","Large"]}]});var A=a(56),R=a(389),L=a(388),V=a(390),H=a(383);const B=()=>{const[e,t]=s.useState(!1),[a,n]=s.useState([]),i=e&&0===a.length;return s.useEffect((()=>{let e=!0;if(i)return(async()=>{await function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((t=>{setTimeout(t,e)}))}(1e3),e&&n([...E])})(),()=>{e=!1}}),[i]),s.useEffect((()=>{e||n([])}),[e]),Object(C.jsx)(V.a,{id:"asynchronous-search",style:{width:300,marginRight:"auto",marginLeft:"auto",fontWeight:600},open:e,onOpen:()=>{t(!0)},onClose:()=>{t(!1)},isOptionEqualToValue:(e,t)=>e.title===t.title,getOptionLabel:e=>e.title,options:a,loading:i,renderInput:e=>Object(C.jsx)(L.a,{...e,label:"Search",InputProps:{...e.InputProps,endAdornment:Object(C.jsxs)(s.Fragment,{children:[i?Object(C.jsx)(H.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})},E=[{title:"Commerce",category:"Course",year:2021},{title:"Accounting",category:"Course",year:2021},{title:"Humanities",category:"Course",year:2021},{title:"Nursing",category:"Course",year:2021},{title:"Engineering",category:"Course",year:2021},{title:"Human Resources",category:"Course",year:2021},{title:"Chemistry",category:"Course",year:2021},{title:"Covid-19 Personal Protection",category:"Life Hacks",year:2021},{title:"Marketing",category:"Research",year:2021},{title:"Interview Preparation",category:"Life Hacks",year:2021},{title:"The Age of Automation",category:"Research",year:2021},{title:"Ultimate Focus",category:"Lifehacks",year:2021}],M=e=>{const{image:t,title:a,parallaxStrength:n,height:s,darkMode:i}=e;return Object(C.jsxs)(A.Parallax,{style:{height:s},blur:{min:-20,max:20},bgImageAlt:a,strength:n,children:[Object(C.jsx)(R.a,{style:{color:i?"gray":"white"},textAlign:"center",paddingTop:"calc(".concat(s,"px/3)"),children:Object(C.jsx)(p.a,{variant:"h2",children:a})}),Object(C.jsx)(A.Background,{className:"custom-bg",children:Object(C.jsx)("img",{src:t})})]})};const P={name:"Hero",image:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0",inputs:[{name:"title",type:"string",defaultValue:"Your Title Here"},{name:"image",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:a.p+"static/media/Library.fd705c13.jpg"},{name:"height",type:"number",defaultValue:400},{name:"darkMode",type:"boolean",defaultValue:!1},{name:"parallaxStrength",type:"number",advanced:!0,defaultValue:400}]};n.a.registerComponent(M,P);var z=a(384);const W=Object(o.a)({card:{boxShadow:"none"},root:{padding:"30px"},col:{minWidth:300},media:{height:300},imageContainer:{position:"relative"}}),I=e=>{const{image1:t,image2:a,image3:s,text1:i,text2:r,text3:o}=e,l=W();return Object(C.jsx)(R.a,{className:l.root,children:Object(C.jsx)(z.a,{container:!0,justify:"center",spacing:2,children:[{img:t,text:i},{img:a,text:r},{img:s,text:o}].map(((e,t)=>Object(C.jsx)(z.a,{className:l.col,item:!0,md:4,children:Object(C.jsxs)(c.a,{className:l.card,children:[Object(C.jsx)("div",{className:l.imageContainer,children:Object(C.jsx)(n.h,{lazy:!0,aspectRatio:1,className:l.media,image:e.img})}),Object(C.jsx)(u.a,{children:Object(C.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:e.text})})]})},t)))})})};n.a.registerComponent(I,{name:"Triple Columns",image:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F99756b9cb8c343dc8bed72186c545eeb",inputs:[{name:"text1",type:"string",defaultValue:"Your Title Here"},{name:"image1",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"},{name:"text2",type:"string",defaultValue:"Your Title Here"},{name:"image2",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"},{name:"text3",type:"string",defaultValue:"Your Title Here"},{name:"image3",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"}]});var G=a(385);const Y=Object(o.a)({card:{boxShadow:"none"},root:{padding:"30px"},col:{minWidth:500},media:{height:600},sectionTitle:{textAlign:"center",padding:30},imageContainer:{position:"relative"}}),D=e=>{const{sectionTitle:t,image1:a,image2:s,text1:i,text2:r}=e,o=Y();return Object(C.jsxs)(R.a,{className:o.root,children:[Object(C.jsx)(p.a,{className:o.sectionTitle,variant:"h3",component:"p",children:t}),Object(C.jsx)(z.a,{container:!0,justify:"center",spacing:3,children:[{img:a,text:i},{img:s,text:r}].map(((e,t)=>Object(C.jsx)(z.a,{className:o.col,item:!0,md:4,children:Object(C.jsxs)(c.a,{className:o.card,children:[Object(C.jsx)("div",{className:o.imageContainer,children:Object(C.jsx)(n.h,{lazy:!0,aspectRatio:1,className:o.media,image:e.img})}),Object(C.jsxs)(u.a,{children:[Object(C.jsx)(p.a,{variant:"h5",color:"textSecondary",component:"p",children:e.text}),Object(C.jsx)(G.a,{size:"small",color:"textSecondary",children:"Learn More >"})]})]})},t)))})]})};n.a.registerComponent(D,{name:"Double Columns",image:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd3fad4746b794e59a7bc6ba502ec4f44",inputs:[{name:"sectionTitle",type:"string",defaultValue:"Your Title Here"},{name:"text1",type:"string",defaultValue:"Your Title Here"},{name:"image1",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"},{name:"text2",type:"string",defaultValue:"Your Title Here"},{name:"image2",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"}]});var q=a(395),J=a(394);const U=Object(o.a)((e=>({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:345,width:"100%","& > *":{margin:e.spacing(1)}},avatar:{width:e.spacing(12),height:e.spacing(12)}})));n.a.registerComponent((e=>{const{backgroundColor:t,reviewAuthor:a,reviewText:n,image:s}=e,i=U();return Object(C.jsxs)("div",{className:i.root,style:{backgroundColor:t},children:[Object(C.jsx)("div",{children:Object(C.jsx)(J.a,{value:5,readOnly:!0})}),Object(C.jsx)(p.a,{variant:"h3",component:"p",children:n}),Object(C.jsxs)(p.a,{variant:"body2",children:[" - ",a]}),Object(C.jsx)(q.a,{src:s,className:i.avatar,children:a})]})}),{name:"Review",inputs:[{name:"backgroundColor",type:"color",defaultValue:"#fafafafa"},{name:"reviewText",type:"string",defaultValue:'"You guys are the best"'},{name:"reviewAuthor",type:"string",defaultValue:"Jane Smith"},{name:"image",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"}]});n.a.registerComponent((e=>{const{text:t,link:a,type:n}=e;return Object(C.jsx)(G.a,{variant:n||"outlined",href:a,children:t})}),{name:"Button",inputs:[{name:"text",type:"string",required:!0,defaultValue:"Click me"},{name:"link",type:"url",required:!0,defaultValue:"/foobar"},{name:"type",type:"string",required:!0,enum:["outlined","text","contained"],defaultValue:"outlined"}]});n.a.registerComponent((e=>{const{text:t,type:a}=e;return Object(C.jsx)(p.a,{variant:a||"h2",children:t})}),{name:"Heading",inputs:[{type:"string",name:"text",required:!0,defaultValue:"Hello there!"},{type:"string",name:"type",required:!0,enum:[{lable:"Heading 1",value:"h1"},{lable:"Heading 2",value:"h2"},{lable:"Heading 3",value:"h3"},{lable:"Heading 4",value:"h4"}],defaultValue:"h1"}]});const X=Object(o.a)((()=>({container:{padding:50,display:"flex",flexDirection:"column",alignItems:"stretch"},wrapper:{margin:"auto 0"}}))),_=Object(n.l)((e=>{const{image:t,parallaxStrength:a,height:n}=e,s=X();return Object(C.jsxs)(A.Parallax,{blur:{min:-20,max:20},strength:a,children:[Object(C.jsx)("div",{style:{minHeight:n},className:s.container,children:Object(C.jsx)("div",{className:s.wrapper,children:e.children})}),Object(C.jsx)(A.Background,{className:"custom-bg",children:Object(C.jsx)("img",{src:t})})]})}));n.a.registerComponent(_,{name:"Hero With Children",inputs:[{name:"image",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e"},{name:"height",type:"number",defaultValue:400,required:!0},{name:"parallaxStrength",type:"number",defaultValue:400}],childRequirements:{message:"You can only put Buttons, Text, or Headings in a Hero",query:{"component.name":{$in:["Button","Text","Heading"]}}},defaultChildren:[{"@type":"@builder.io/sdk:Element",component:{name:"Heading",options:{text:"You can edit the contents of this example!",type:"h4"}}},{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"You can edit this too. Or duplicate it. Or delete it!"}},responsiveStyles:{large:{marginTop:"20px"}}},{"@type":"@builder.io/sdk:Element",component:{name:"Button",options:{text:"Hello",type:"outlined"}},responsiveStyles:{large:{marginTop:"20px"}}}]});const K=Object(o.a)({card:{boxShadow:"none"},root:{padding:"30px"},col:{minWidth:300},media:{height:300},imageContainer:{position:"relative"}});n.a.registerComponent((e=>{const{columns:t}=e,a=K();return Object(C.jsx)(R.a,{className:a.root,children:Object(C.jsx)(z.a,{container:!0,justify:"center",spacing:2,children:t.slice(0,4).map(((e,s)=>Object(C.jsx)(z.a,{className:a.col,item:!0,md:12/t.length,children:Object(C.jsxs)(c.a,{className:a.card,children:[Object(C.jsx)("div",{className:a.imageContainer,children:Object(C.jsx)(n.h,{lazy:!0,aspectRatio:1,className:a.media,image:e.image})}),Object(C.jsx)(u.a,{children:Object(C.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:e.text})})]})},s)))})})}),{name:"Dynamic Columns",image:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd8ed37ba1bc143c0bb76008caff4b0da",inputs:[{name:"columns",type:"array",defaultValue:[{image:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",text:"Hello"},{image:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",text:"Hello"}],subFields:[{name:"image",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"},{name:"text",type:"string",defaultValue:"Your Title Here"}]}]});const $=Object(o.a)((e=>({root:{flexGrow:1},container:{display:"flex",justifyContent:"center",flexWrap:"wrap"}}))),Q={limit:20,cat:"womens-clothes",view:"web",pid:"shopstyle"};n.a.registerComponent((e=>{var t;const{url:a,amount:n,category:i,size:o,products:l}=e,c=a||"https://api.shopstyle.com/api/v2/products",[d,h]=Object(s.useState)({products:[]}),u=$();return Object(s.useEffect)((()=>{var e;(null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.products)||async function(){const e=r.a.stringify({...Q,limit:n,cat:i}),t=await fetch("".concat(c,"?").concat(e)).then((e=>e.json()));h(t)}()}),[n,i,c,l]),Object(C.jsx)("div",{className:u.root,children:Object(C.jsx)("div",{className:u.container,children:((null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.products)||d.products).map((e=>Object(C.jsx)(S,{sizeName:o,...e},e.id)))})})}),{name:"Products List SSR",inputs:[{name:"products",type:"request",hidden:!0,defaultValue:{"@type":"@builder.io/core:Request",request:{url:"https://api.shopstyle.com/api/v2/products",query:{limit:"20",cat:"womens-clothes",view:"web",pid:"shopstyle"},headers:{"content-type":"application/json"}},bindings:{"query.limit":"amount","query.cat":'category || "womens-fashion"'}}},{name:"category",type:"string",defaultValue:"mens",enum:[{label:"Women",value:"womens-fashion"},{label:"Mens",value:"mens-clothes"},{label:"Kids",value:"kids-and-baby"},{label:"home",value:"living"}]},{name:"amount",type:"number",defaultValue:20},{name:"size",type:"string",defaultValue:"Medium",enum:["Small","Medium","Large"]}]});const Z=Object(o.a)({card:{boxShadow:"none"},root:{padding:"30px"},col:{minWidth:300},media:{height:300},imageContainer:{position:"relative"}});n.a.registerComponent((e=>{const{columns:t}=e,a=Z();return Object(C.jsx)(R.a,{className:a.root,children:Object(C.jsx)(z.a,{container:!0,justify:"center",spacing:2,children:t.slice(0,4).map(((s,i)=>Object(C.jsx)(z.a,{className:a.col,item:!0,md:12/t.length,children:Object(C.jsxs)(c.a,{className:a.card,children:[Object(C.jsx)("div",{className:a.imageContainer,children:Object(C.jsx)(n.h,{lazy:!0,aspectRatio:1,className:a.media,image:s.image})}),Object(C.jsx)(u.a,{children:Object(C.jsx)(n.d,{child:!0,parentElementId:e.builderBlock&&e.builderBlock.id,blocks:s.blocks,dataPath:"component.options.columns.".concat(i,".blocks")},i)})]})},i)))})})}),{name:"Custom Columns",description:"Example of a custom column with editing regions",inputs:[{name:"columns",type:"array",defaultValue:[{image:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",blocks:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Enter some text..."}},responsiveStyles:{large:{display:"flex",flexDirection:"column",position:"relative",flexShrink:"0",boxSizing:"border-box",marginTop:"20px",lineHeight:"normal",height:"auto",textAlign:"center"}}}]},{image:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",blocks:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Enter some text..."}},responsiveStyles:{large:{display:"flex",flexDirection:"column",position:"relative",flexShrink:"0",boxSizing:"border-box",marginTop:"20px",lineHeight:"normal",height:"auto",textAlign:"center"}}}]}],subFields:[{name:"image",type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d"},{name:"blocks",type:"blocks",defaultValue:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Enter some text..."}},responsiveStyles:{large:{display:"flex",flexDirection:"column",position:"relative",flexShrink:"0",boxSizing:"border-box",marginTop:"20px",lineHeight:"normal",height:"auto",textAlign:"center"}}}]}]}]});var ee=a(157);a(190);n.a.registerComponent((()=>Object(C.jsx)(ee.a,{defaultValue:new Date,views:["month","year","decade"]})),{name:"Calendar Widget"});var te=a(14),ae=a(153),ne=a(87);const se=Object(o.a)((e=>({formGroup:{padding:10,fontWeight:600,fontSize:"medium",color:"whitesmoke"},formControl:{width:400,height:30,padding:5,borderRadius:4,fontSize:"medium"},formSelect:{width:415,height:40,padding:5,borderRadius:4,fontSize:"medium"}}))),ie=e=>{const t=se(),[a,n]=Object(s.useState)(""),[i,r]=Object(s.useState)(""),[o,l]=Object(s.useState)(""),[c,d]=Object(s.useState)(!0),h=e=>{let t=e.target.value;d(t)};return Object(C.jsx)("div",{style:{display:"flex",padding:30,backgroundColor:"Black"},children:Object(C.jsxs)("div",{className:"setForm",style:{margin:"0 auto"},children:[Object(C.jsx)("h2",{style:{textAlign:"center",paddingTop:30,paddingBottom:30,color:"whitesmoke"},children:"Content Form"}),Object(C.jsxs)(te.a,{children:[Object(C.jsxs)("fieldset",{style:{borderRadius:4,padding:10},children:[Object(C.jsxs)(te.a.Group,{className:t.formGroup,controlId:"formContentInfo",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Owner"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:"Name of content owner (username)",className:t.formControl,value:a,onChange:e=>{let t=e.target.value;n(t)}})]}),Object(C.jsxs)(te.a.Group,{className:t.formGroup,controlId:"formContentTitle",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Title"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:"Title",className:t.formControl,value:i,onChange:e=>{let t=e.target.value;r(t)}})]}),Object(C.jsxs)(te.a.Group,{className:t.formGroup,controlId:"formContentCategory",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Category"}),Object(C.jsx)("br",{}),Object(C.jsxs)(te.a.Select,{className:t.formSelect,value:o,onChange:e=>{let t=e.target.value;l(t)},children:[Object(C.jsx)("option",{children:"select a category"}),Object(C.jsx)("option",{value:"Course",children:"course"}),Object(C.jsx)("option",{value:"Research",children:"research"}),Object(C.jsx)("option",{value:"Lifestyle",children:"lifestyle"})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)(te.a.Group,{as:ae.a,className:t.formGroup,children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Content Exposure"}),Object(C.jsx)("br",{}),Object(C.jsxs)(ne.a,{sm:10,children:[Object(C.jsx)(te.a.Check,{type:"radio",label:"  Public",name:"Public",id:"formRadio1",value:c,onChange:h}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Check,{type:"radio",label:"  Private",name:"Private",id:"formRadio2",value:c,onChange:h})]})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",padding:20},children:[Object(C.jsx)("button",{type:"button",className:"build-btn",style:{marginRight:40,marginLeft:30},onClick:t=>{t.preventDefault();let n={owner:a,title:i,category:o,exposure:c},s="Bearer ".concat(e.token);fetch("/api/curation/add",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:s}}).then((e=>e.json())).then((e=>{alert(e.message)})).catch((e=>{console.log(e)}))},children:"SUBMIT"}),Object(C.jsx)("button",{type:"button",className:"build-btn",children:Object(C.jsx)("a",{target:"_blank",href:"https://builder.io/content",children:" START "})})]})]})]})})};n.a.registerComponent(ie,{name:"Content Form"});var re=a(386),oe=a(387),le=a(154),ce=a.n(le),de=a(393),he=a(158),ue=a(392);const me=Object(o.a)((e=>({cart:{padding:20,width:300},noItemsMessage:{padding:20,color:"#888",textAlign:"center"}})));function je(){const e=me();return Object(C.jsxs)("div",{className:e.cart,children:[Object(C.jsx)("div",{className:e.noItemsMessage,children:"We'd love to hear from you!"}),Object(C.jsx)(n.e,{model:"cart-content"})]})}var be=a(27);class pe extends s.Component{constructor(e){super(e),this.handleUserCred=e=>{this.props.handleCredentials(e)},this.handleAuthSuccess=e=>{this.props.handleAccess(e)},this.handleMenu=e=>{this.setState({anchorEl:e.currentTarget})},this.handleClose=()=>{this.setState({anchorEl:null})},this.gotoProfile=()=>{window.location.href="/user/profile"},this.gotoAccount=()=>{this.props.history.push("/account"),this.handleClose()},this.gotoSignup=()=>{this.props.history.push("/user/signup"),this.handleClose()},this.handleLogout=()=>{this.setState({auth:!1}),this.setState({token:""}),window.location.href="/"},this.handleUserChange=e=>{let t=e.target.value;this.setState({userName:t})},this.handlePassChange=e=>{let t=e.target.value;this.setState({password:t})},this.handleLogin=e=>{e.preventDefault();let t={username:this.state.userName,password:this.state.password};this.setState({subLoad:!0}),fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{"Authorized"===e.status?(this.handleAuthSuccess(e.token),this.handleUserCred(e.user),this.setState({token:e.token}),this.setState({auth:!0}),alert(e.message)):(alert("\n                Oops! Something went wrong\n\n                Login unsuccessful.\n\n                Please check creditials and try again."),alert(e.message))}))},this.state={auth:!1,anchorEl:null,userName:"",password:"",token:"",showCart:"cart-content"===n.j.editingModel,subLoad:!1},this.handleAuthSuccess=this.handleAuthSuccess.bind(this),this.handleUserCred=this.handleUserCred.bind(this)}render(){const{auth:e,anchorEl:t,userName:a,password:n,subLoad:s,showCart:i}=this.state;let{history:r}=this.props;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(R.a,{sx:{flexGrow:1},"background-color":"#373b52",children:[Object(C.jsx)("div",{style:{paddingTop:30}}),Object(C.jsx)(re.a,{position:"static","background-color":"#373b52",color:"secondary",height:80,children:Object(C.jsxs)(oe.a,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(b.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:this.handleMenu,color:"inherit",children:Object(C.jsx)(ce.a,{})}),Object(C.jsxs)(he.a,{id:"menu-appbar",auth:e,anchorEl:t,keepMounted:!0,transformOrigin:{vertical:4,horizontal:"center"},open:Boolean(t),onClose:this.handleClose,children:[Object(C.jsx)(de.a,{onClick:this.gotoAccount,children:"-"}),Object(C.jsx)(de.a,{onClick:this.gotoSignup,children:"Sign up"}),Object(C.jsx)(de.a,{onClick:this.gotoAccount,children:"Account"}),Object(C.jsx)(de.a,{onClick:this.handleLogout,children:"Logout"})]})]}),Object(C.jsx)("div",{children:e?Object(C.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Welcome back!"}):Object(C.jsxs)(te.a,{children:[Object(C.jsx)("input",{type:"text",value:a,onChange:this.handleUserChange,className:"todo-input",placeholder:"username",style:{marginRight:5,marginLeft:5}}),Object(C.jsx)("input",{type:"password",value:n,onChange:this.handlePassChange,className:"todo-input",placeholder:"password",style:{marginRight:10}}),Object(C.jsx)("button",{onClick:this.handleLogin,type:"submit",className:"todo-button",children:s?Object(C.jsx)(C.Fragment,{children:"Sending.."}):Object(C.jsx)(C.Fragment,{children:"Login"})})]})})]})})]}),Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"Header",style:{display:"flex",padding:35},children:[Object(C.jsx)(C.Fragment,{children:e?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{marginRight:10},children:Object(C.jsx)("button",{type:"button",className:"nav-btn",onClick:()=>{r.push("/")},children:"Home"})}),Object(C.jsx)("div",{style:{marginRight:10},children:Object(C.jsx)("button",{type:"button",className:"nav-btn",onClick:()=>{r.push("/about")},children:"About"})}),Object(C.jsx)("div",{style:{marginRight:10},children:Object(C.jsx)("button",{type:"button",className:"nav-btn",onClick:()=>{r.push("/library")},children:"Library"})}),Object(C.jsx)("div",{style:{marginRight:5},children:Object(C.jsx)("button",{type:"button",className:"nav-btn",onClick:()=>{r.push("/curation")},children:"Curation"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{marginRight:15},children:Object(C.jsx)("a",{href:"/",children:"Home"})},"history"),Object(C.jsx)("div",{style:{marginRight:15},children:Object(C.jsx)("a",{href:"/about",children:"About"})}),Object(C.jsx)("div",{style:{marginRight:15},children:Object(C.jsx)("a",{href:"/user/signup",children:"Library"})}),Object(C.jsx)("div",{style:{marginRight:15},children:Object(C.jsx)("a",{href:"/user/signup",children:"Curation"})})]})}),Object(C.jsx)("a",{href:"/about",id:"Heading",className:"Logo",style:{letterSpacing:2,fontWeight:600,fontSize:"larger",marginRight:"auto",marginLeft:"auto"},children:"PALMSOFT LIBRARY"}),Object(C.jsx)("a",{className:"cartLink",style:{marginRight:"10px",...e?{paddingLeft:190}:{paddingLeft:200}},onClick:()=>{this.setState({showCart:!i})},children:"Contact"}),Object(C.jsx)(ue.a,{anchor:"right",open:i,onClose:()=>{this.setState({showCart:!1})},children:Object(C.jsx)(je,{})}),Object(C.jsx)("br",{})]})})]})}}var ge=Object(be.e)(pe);n.a.registerComponent(ge,{name:"Head Bar"});var xe=a.p+"static/media/logo.6ce24c58.svg";const Oe=e=>Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)("img",{src:xe,className:"App-logo",alt:"logo"}),Object(C.jsx)("h3",{children:"Hi there! Please login or register to continue."})]})});n.a.registerComponent(Oe,{name:"Landing Block"});class fe extends s.Component{constructor(e){super(e),this.handleDelete=e=>{let t=e.target.value,a="Bearer ".concat(this.props.token);window.confirm("Are you sure you want to delete this item?")?fetch("/api/content/delete",{method:"DELETE",body:JSON.stringify({id:t}),headers:{"Content-Type":"application/json",Authorization:a}}).then((e=>e.json())).then((e=>{alert(e.message)})).then(handleTableUpdate(this.state.updateTable)):alert("Request cancelled")},this.state={libData:[],updateTable:!0}}handleTableUpdate(e){e&&this.props.history.push("/library")}componentDidMount(){let e="Bearer ".concat(this.props.token);e.length>0&&fetch("/api/library",{headers:{"Content-Type":"application/json",Authorization:e}}).then((e=>e.json())).then((e=>{this.setState({libData:e}),console.log(e)}))}render(){const e=this.state.libData,t=this.props.user;return Object(C.jsxs)("div",{className:"table-container",style:{padding:40,paddingTop:0},children:[Object(C.jsx)("br",{}),Object(C.jsxs)("table",{className:"contentTable",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{class:"active-row",children:[Object(C.jsx)("td",{children:"Owner"}),Object(C.jsx)("td",{children:"Category"}),Object(C.jsx)("td",{children:"Title"}),Object(C.jsx)("td",{children:"Link"}),Object(C.jsx)("td",{children:"Options"})]})}),Object(C.jsx)("tbody",{children:e.map(((e,a)=>Object(C.jsxs)("tr",{id:a,children:[Object(C.jsxs)("td",{children:[" ",e.owner," "]},a),Object(C.jsxs)("td",{children:[" ",e.category," "]},a),Object(C.jsxs)("td",{children:[" ",e.title," "]},a),Object(C.jsx)("td",{children:Object(C.jsx)("button",{className:"todo-button",onClick:()=>{this.props.history.push("".concat(e.url))},children:"View"})},a),"Admin"===t?Object(C.jsxs)("td",{children:[Object(C.jsx)("button",{className:"todo-button",value:e._id,style:{borderColor:"#4d1f1f",backgroundColor:"#4d1f1f",marginRight:50},onClick:this.handleDelete,children:"Delete"}),Object(C.jsx)("button",{className:"todo-button",style:{borderColor:"#c2dac7",backgroundColor:"#c2dac7"},children:Object(C.jsx)("a",{target:"_blank",href:"https://builder.io/content",children:" Edit "})})]}):Object(C.jsx)("td",{children:Object(C.jsx)("button",{className:"todo-button",style:{borderColor:"#c2dac7",backgroundColor:"#c2dac7",color:"#4d0328"},children:" Like"})})]},a)))})]})]})}}var ye=Object(be.e)(fe);n.a.registerComponent(ye,{name:"Content Table"});class ve extends s.Component{constructor(e){super(e),this.handleDelete=e=>{e.target.value;let t="Bearer ".concat(this.props.token);window.confirm("Are you sure you want to delete your account?")?fetch("/api/user/delete",{method:"DELETE",body:JSON.stringify({user:this.props.user}),headers:{"Content-Type":"application/json",Authorization:t}}).then((e=>e.json())).then((e=>{alert(e.message)})).then(window.location.href("/")):alert("Request cancelled")},this.handleUserChange=e=>{let t=e.target.value;this.setState({username:t})},this.handlePassChange=e=>{let t=e.target.value;this.setState({password:t,passChange:!0})},this.handleEmailChange=e=>{let t=e.target.value;this.setState({email:t})},this.handleVeriChange=e=>{let t=e.target.value;this.setState({veriPass:t}),t===password&&this.setState({passMatch:!0})},this.handleFirstVal=e=>{let t=e.target.value;this.setState({firstName:t})},this.handleLastVal=e=>{let t=e.target.value;this.setState({lastName:t})},this.state={userData:[],updateTable:!0,firstName:"",lastName:"",username:"",password:"",veriPass:"",passMatch:!1,email:""},this.handleAccUpdate=this.handleAccUpdate.bind(this)}handleAccUpdate(){let{username:e,password:t,email:a,firstName:n,lastName:s}=this.state,i={firstName:n,lastName:s,username:e,password:t,email:a};passMatch?fetch("/api/user/update",{method:"PUT",body:JSON.stringify(i),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.props.token)}}).then((e=>e.json())).then((e=>{alert(e.message)})):alert("Can't submit! Please check form entries.")}componentDidMount(){let e="Bearer ".concat(this.props.token);e.length>0&&fetch("/api/user/account",{headers:{"Content-Type":"application/json",Authorization:e}}).then((e=>e.json())).then((e=>{this.setState({userData:e}),console.log(e)}))}render(){const{username:e,password:t,veriPass:a,email:n,firstName:s,lastName:i,passMatch:r,userData:o}=this.state;this.props.user;return Object(C.jsx)("div",{style:{display:"flex",padding:30,backgroundColor:"Black"},children:Object(C.jsxs)("div",{className:"setForm",style:{margin:"0 auto"},children:[Object(C.jsx)("h2",{style:{textAlign:"center",paddingTop:30,paddingBottom:30,color:"whitesmoke"},children:"   User Account"}),Object(C.jsxs)(te.a,{children:[Object(C.jsxs)("fieldset",{style:{borderRadius:4,padding:10},children:[Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Username"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:o.username,className:"formControl",value:e,defaultValue:o.username,onChange:this.handleUserChange,readOnly:!0})]}),Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"First Name"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:o.first_name,className:"formControl",defaultValue:o.first_name,value:s,onChange:this.handleFirstVal,readOnly:!0})]}),Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Last Name"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:o.last_name,className:"formControl",value:i,defaultValue:o.last_name,onChange:this.handleLastVal,readOnly:!0})]}),Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Email"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"text",placeholder:o.email,className:"formControl",value:n,defaultValue:o.email,onChange:this.handleEmailChange})]}),Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Password"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"password",placeholder:"old password",className:"formControl",value:t,onChange:this.handlePassChange,style:r?{backgroundColor:"#0fec34be"}:{backgroundColor:"#ec0f0fa8"}})]}),Object(C.jsxs)(te.a.Group,{className:"formGroup",children:[Object(C.jsx)(te.a.Label,{as:"legend",children:"Verify Password"}),Object(C.jsx)("br",{}),Object(C.jsx)(te.a.Control,{type:"password",placeholder:"new password",className:"formControl",value:a,onChange:this.handleVeriChange,style:r?{backgroundColor:"#0fec34be"}:{backgroundColor:"#ec0f0fa8"}})]})]}),Object(C.jsx)("br",{}),Object(C.jsx)("div",{style:{display:"flex",padding:20},children:Object(C.jsx)("button",{type:"button",className:"build-btn",style:{marginRight:"auto",marginLeft:"auto"},onClick:this.handleAccUpdate,children:"UPDATE"})})]})]})})}}var Ce=Object(be.e)(ve);n.a.registerComponent(Ce,{name:"Account Table"});n.i.init("cb0ca5f113c44bcf8c74c16bf0e7a4f9");n.a.register("insertMenu",{name:"Simple components",items:[{name:"Hero"},{name:"Double Columns"},{name:"Triple Columns"},{name:"Dynamic Columns"},{name:"Landing Block"}]}),n.a.register("insertMenu",{name:"Dynamic components",items:[{name:"Hero With Children"},{name:"Products List"},{name:"Products List SSR"},{name:"Calendar Widget"},{name:"Content Form"},{name:"Head Bar"},{name:"Content Table"},{name:"Account Table"},{name:"Hero With Children Alt",item:{component:{name:"Hero With Children",options:{image:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e",height:400}},children:[{"@type":"@builder.io/sdk:Element",component:{name:"Heading",options:{text:"You can edit the contents of this example!",type:"h4"}}}]}}]}),n.a.register("insertMenu",{name:"Blocks",items:[{name:"Button"},{item:"Heading",name:"Heading 1"},{name:"Heading 2",item:{"@type":"@builder.io/sdk:Element",component:{name:"Heading",options:{text:"I am an h2",type:"h2"}}}},{name:"Heading 3",item:{"@type":"@builder.io/sdk:Element",component:{name:"Heading",options:{text:"I am am h3",type:"h3"}}}}]});const Ne=Object(o.a)((e=>({notFound:{padding:"100px 20px",textAlign:"center"},notFoundTitle:{fontWeight:400},notFoundSubTitle:{fontWeight:100}}))),we=()=>{const e=Ne();return Object(C.jsxs)("div",{className:e.notFound,children:[Object(C.jsx)("h3",{className:e.notFoundTitle,children:"No page found for this URL, did you publish it?"}),!1]})};a(119);const Se=Object(o.a)((e=>({link:{color:"#555",margin:"0 10px"},footer:{borderTop:"1px solid #eee",display:"flex",justifyContent:"center",marginTop:50,fontSize:12,padding:20}}))),ke=()=>{const e=Se();return Object(C.jsxs)("div",{className:e.footer,children:[Object(C.jsx)("div",{className:e.link,children:"Home"}),Object(C.jsx)("div",{className:e.link,children:"About"}),Object(C.jsx)("div",{className:e.link,children:"Library"}),Object(C.jsx)("div",{className:e.link,children:"Curation"}),Object(C.jsx)("div",{className:e.link,children:"Account"}),Object(C.jsx)("div",{className:e.link,children:"Contact"})]})},Fe=e=>{const[t,a]=Object(s.useState)(!1);return Object(C.jsx)(C.Fragment,{children:t?Object(C.jsx)(we,{}):Object(C.jsx)(n.e,{model:"page",contentLoaded:e=>{e||n.a.isEditing||a(!0)},children:Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:100},children:Object(C.jsx)(H.a,{color:"inherit",disableShrink:!0})})})})};var Te=a(3);class Ae extends s.Component{constructor(e){super(e),this.state={isLoggedIn:!1,token:"",userCred:""},this.handleAccess=this.handleAccess.bind(this),this.handleCredentials=this.handleCredentials.bind(this)}handleAccess(e){this.setState({isLoggedIn:!0,token:e})}handleCredentials(e){this.setState({userCred:e})}render(){const{isLoggedIn:e,token:t,user:a}=this.state;return Object(C.jsxs)(v.a,{children:[Object(C.jsxs)("div",{className:"Container",style:{minHeight:"calc(100vh - 150px)"},children:[Object(C.jsx)(C.Fragment,{children:Te.b.isPreviewing||Te.b.isEditing?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(C.Fragment,{children:" "})}):Object(C.jsx)(be.a,{render:a=>Object(C.jsx)(ge,{...a,loggedInStatus:e,handleAccess:this.handleAccess,handleCredentials:this.handleCredentials,token:t})})}),Object(C.jsx)(be.a,{exact:!0,path:"/",render:t=>Object(C.jsx)(C.Fragment,{children:e?Object(C.jsxs)(C.Fragment,{children:[" ",Object(C.jsx)(B,{})," ",Object(C.jsx)(Fe,{...t})," "]}):Object(C.jsx)(Oe,{})})}),Object(C.jsx)(be.a,{path:"/user/signup",render:e=>Object(C.jsx)(Fe,{...e})}),Object(C.jsx)(be.a,{path:"/curation",render:a=>Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Fe,{...a}),Object(C.jsx)(ie,{...a,loggedInStatus:e,token:t})]})}),Object(C.jsx)(be.a,{path:"/about",render:e=>Object(C.jsx)(Fe,{...e})}),Object(C.jsx)(be.a,{path:"/library",render:n=>Object(C.jsxs)(C.Fragment,{children:["  ",Object(C.jsx)(B,{}),Object(C.jsx)(Fe,{...n}),Object(C.jsx)(ye,{...n,loggedInStatus:e,token:t,user:a})]})}),Object(C.jsx)(be.a,{path:"/account",render:n=>Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Fe,{...n}),Object(C.jsx)(Ce,{...n,loggedInStatus:e,token:t,user:a})]})}),Object(C.jsx)(be.a,{path:"/content/",render:e=>Object(C.jsxs)(C.Fragment,{children:["  ",Object(C.jsx)(B,{}),Object(C.jsx)(Fe,{...e})]})})]}),Object(C.jsx)(ke,{})]})}}var Re=a(15),Le=a.n(Re);const Ve=document.getElementById("root");Le.a.render(Object(C.jsx)(Ae,{}),Ve)},92:function(e,t,a){}},[[321,1,2]]]);
//# sourceMappingURL=main.939a109b.chunk.js.map