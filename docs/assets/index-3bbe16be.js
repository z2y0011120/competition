import{m as P,d as w,A as ae,H as d,s as E,o as p,c as M,Y as A,b as _,w as N,h as q,a as $,L as m,M as t,t as Z,v as j,Z as G,a0 as K,a4 as re,av as le,n as D,q as ie,k as Q,bQ as ue,bR as ce,C as B,bS as F,K as de,I as pe,a1 as me,b0 as fe,f as b,N as ge,g as T,E as H,U as ve,F as ye,O as Ce,bT as be,aC as he,a2 as Te,a8 as R,bU as W,as as I,bV as U,a7 as Ne,bW as we}from"./index-789cd201.js";const V={},Se=P({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ke=["textContent"],Be=w({name:"ElBadge"}),Ee=w({...Be,props:Se,setup(s,{expose:n}){const e=s,o=ae("badge"),a=d(()=>e.isDot?"":E(e.value)&&E(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),M("div",{class:m(t(o).b())},[A(l.$slots,"default"),_(G,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:N(()=>[q($("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:Z(t(a))},null,10,ke),[[j,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=K(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const $e=re(Me),Y=["success","info","warning","error"],i=ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Q?document.body:void 0}),Ie=P({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:le,default:i.icon},id:{type:String,default:i.id},message:{type:D([String,Object,Function]),default:i.message},onClose:{type:D(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:Y,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),_e={destroy:()=>!0},c=ue([]),xe=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},ze=s=>{const{prev:n}=xe(s);return n?n.vm.exposed.bottom.value:0},Le=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,Oe=["id"],De=["innerHTML"],Fe=w({name:"ElMessage"}),He=w({...Fe,props:Ie,emits:_e,setup(s,{expose:n}){const e=s,{Close:o}=be,{ns:a,zIndex:l}=ce("message"),{currentZIndex:u,nextZIndex:f}=l,g=B(),y=B(!1),C=B(0);let S;const X=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),x=d(()=>e.icon||F[e.type]||""),se=d(()=>ze(e.id)),z=d(()=>Le(e.id,e.offset)+se.value),ne=d(()=>C.value+z.value),te=d(()=>({top:`${z.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:S}=he(()=>{h()},e.duration))}function L(){S==null||S()}function h(){y.value=!1}function oe({code:r}){r===Te.esc&&h()}return de(()=>{k(),f(),y.value=!0}),pe(()=>e.repeatNum,()=>{L(),k()}),me(document,"keydown",oe),fe(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:y,bottom:ne,close:h}),(r,O)=>(p(),b(G,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:O[0]||(O[0]=qe=>r.$emit("destroy")),persisted:""},{default:N(()=>[q($("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ge(t(te)),role:"alert",onMouseenter:L,onMouseleave:k},[r.repeatNum>1?(p(),b(t($e),{key:0,value:r.repeatNum,type:t(X),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(x)?(p(),b(t(H),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:N(()=>[(p(),b(ve(t(x))))]),_:1},8,["class"])):T("v-if",!0),A(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),M(ye,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),$("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,De)],2112)):(p(),M("p",{key:0,class:m(t(a).e("content"))},Z(r.message),3))]),r.showClose?(p(),b(t(H),{key:2,class:m(t(a).e("closeBtn")),onClick:Ce(h,["stop"])},{default:N(()=>[_(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Oe),[[j,y.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Re=K(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ue=1;const J=s=>{const n=!s||R(s)||W(s)||I(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(R(e.appendTo)){let o=document.querySelector(e.appendTo);Ne(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Pe=({appendTo:s,...n},e)=>{const o=`message_${Ue++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(C)},onDestroy:()=>{U(null,l)}},f=_(Re,u,I(u.message)||W(u.message)?{default:I(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,U(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},v=(s={},n)=>{if(!Q)return{close:()=>{}};if(E(V.max)&&c.length>=V.max)return{close:()=>{}};const e=J(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Pe(e,n);return c.push(o),o.handler};Y.forEach(s=>{v[s]=(n={},e)=>{const o=J(n);return v({...o,type:s},e)}});function Ae(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}v.closeAll=Ae;v._context=null;const je=we(v,"$message");export{je as E};
