import{aE as A,H as m,ae as M,ay as U,C as K,aD as O,bO as H,m as L,ac as R,av as I,bM as Y,n as q,A as z,bP as J,d as h,o as b,f as k,w as C,c as N,F as Q,Y as B,M as t,E,L as V,U as $,g as T,a6 as W,a0 as x,ai as X,aj as Z,b9 as P,a4 as ee,am as oe}from"./index-789cd201.js";import{b as te,u as ae,a as G}from"./use-form-item-f09bf200.js";const D=Symbol("buttonGroupContextKey"),ne=(o,r)=>{A({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},m(()=>o.type==="text"));const a=M(D,void 0),s=U("button"),{form:l}=te(),e=ae(m(()=>a==null?void 0:a.size)),i=G(),p=K(),c=O(),f=m(()=>o.type||(a==null?void 0:a.type)||""),S=m(()=>{var u,g,v;return(v=(g=o.autoInsertSpace)!=null?g:(u=s.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),y=m(()=>o.tag==="button"?{ariaDisabled:i.value||o.loading,disabled:i.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),_=m(()=>{var u;const g=(u=c.default)==null?void 0:u.call(c);if(S.value&&(g==null?void 0:g.length)===1){const v=g[0];if((v==null?void 0:v.type)===H){const j=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(j.trim())}}return!1});return{_disabled:i,_size:e,_type:f,_ref:p,_props:y,shouldAddSpace:_,handleClick:u=>{o.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},se=["default","primary","success","warning","info","danger","text",""],le=["button","submit","reset"],w=L({size:R,disabled:Boolean,type:{type:String,values:se,default:""},icon:{type:I},nativeType:{type:String,values:le,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>Y},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:q([String,Object]),default:"button"}}),re={click:o=>o instanceof MouseEvent};function d(o,r=20){return o.mix("#141414",r).toString()}function ie(o){const r=G(),a=z("button");return m(()=>{let s={};const l=o.color;if(l){const e=new J(l),i=o.dark?e.tint(20).toString():d(e,20);if(o.plain)s=a.cssVarBlock({"bg-color":o.dark?d(e,90):e.tint(90).toString(),"text-color":l,"border-color":o.dark?d(e,50):e.tint(50).toString(),"hover-text-color":`var(${a.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${a.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(s[a.cssVarBlockName("disabled-bg-color")]=o.dark?d(e,90):e.tint(90).toString(),s[a.cssVarBlockName("disabled-text-color")]=o.dark?d(e,50):e.tint(50).toString(),s[a.cssVarBlockName("disabled-border-color")]=o.dark?d(e,80):e.tint(80).toString());else{const p=o.dark?d(e,30):e.tint(30).toString(),c=e.isDark()?`var(${a.cssVarName("color-white")})`:`var(${a.cssVarName("color-black")})`;if(s=a.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":p,"hover-text-color":c,"hover-border-color":p,"active-bg-color":i,"active-border-color":i}),r.value){const f=o.dark?d(e,50):e.tint(50).toString();s[a.cssVarBlockName("disabled-bg-color")]=f,s[a.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${a.cssVarName("color-white")})`,s[a.cssVarBlockName("disabled-border-color")]=f}}}return s})}const ce=h({name:"ElButton"}),ue=h({...ce,props:w,emits:re,setup(o,{expose:r,emit:a}){const s=o,l=ie(s),e=z("button"),{_ref:i,_size:p,_type:c,_disabled:f,_props:S,shouldAddSpace:y,handleClick:_}=ne(s,a);return r({ref:i,size:p,type:c,disabled:f,shouldAddSpace:y}),(n,u)=>(b(),k($(n.tag),W({ref_key:"_ref",ref:i},t(S),{class:[t(e).b(),t(e).m(t(c)),t(e).m(t(p)),t(e).is("disabled",t(f)),t(e).is("loading",n.loading),t(e).is("plain",n.plain),t(e).is("round",n.round),t(e).is("circle",n.circle),t(e).is("text",n.text),t(e).is("link",n.link),t(e).is("has-bg",n.bg)],style:t(l),onClick:t(_)}),{default:C(()=>[n.loading?(b(),N(Q,{key:0},[n.$slots.loading?B(n.$slots,"loading",{key:0}):(b(),k(t(E),{key:1,class:V(t(e).is("loading"))},{default:C(()=>[(b(),k($(n.loadingIcon)))]),_:1},8,["class"]))],64)):n.icon||n.$slots.icon?(b(),k(t(E),{key:1},{default:C(()=>[n.icon?(b(),k($(n.icon),{key:0})):B(n.$slots,"icon",{key:1})]),_:3})):T("v-if",!0),n.$slots.default?(b(),N("span",{key:2,class:V({[t(e).em("text","expand")]:t(y)})},[B(n.$slots,"default")],2)):T("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var de=x(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const be={size:w.size,type:w.type},pe=h({name:"ElButtonGroup"}),fe=h({...pe,props:be,setup(o){const r=o;X(D,Z({size:P(r,"size"),type:P(r,"type")}));const a=z("button");return(s,l)=>(b(),N("div",{class:V(`${t(a).b("group")}`)},[B(s.$slots,"default")],2))}});var F=x(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const ve=ee(de,{ButtonGroup:F});oe(F);export{ve as E};
