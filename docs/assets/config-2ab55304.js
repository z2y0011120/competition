import{i as f,_ as E,d as C,o as y,c as k,a as g,b as l,w as a,F as v,e as m}from"./index-789cd201.js";import{E as F}from"./el-dialog-19ea18e4.js";import"./el-overlay-55eb4b45.js";import{E as L,a as U}from"./el-form-item-0fc3dfa5.js";import{E as W}from"./el-input-26b7f203.js";import{E as P}from"./el-pagination-d72db8aa.js";import"./el-tag-4ea04386.js";import"./el-select-bd4a6b65.js";import{E as z,a as D}from"./el-table-column-e16de002.js";import{E as $}from"./el-button-cc310b46.js";import{c as A}from"./cloneDeep-03746fa9.js";import{E as s}from"./index-3bbe16be.js";import"./use-form-item-f09bf200.js";import"./_Uint8Array-76672878.js";import"./_initCloneObject-f66fa92e.js";import"./debounce-c87c8148.js";import"./validator-87c37b4d.js";const q=e=>f.request({url:"api/config/edit",method:"post",data:e}),B=e=>f.request({url:"api/config/add",method:"post",data:e}),N=e=>f.request({url:"api/config/delete",params:e}),T=e=>f.request({url:"api/config/page",method:"post",data:e}),I=C({data(){return{config:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,config:{allowDel:!0,content:"",extend:"",group:"",id:0,name:"",rule:"",tip:"",title:"",type:"",value:"",weigh:0},formLabelWidth:80}},mounted(){this.getconfigPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.config=A(e)},getconfigPage(e){T({current:e,size:2}).then(r=>{console.log(r);const p=r.data.page;this.config=p.records,this.page=p}).catch(r=>{console.log(r)})},currentchange(e){this.getconfigPage(e),this.page.current=e},del(e){console.log(e),N({id:e}).then(r=>{if(r.success)this.getconfigPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(r.msg),!1}).catch(r=>{})},toAdd(){this.dialogFormVisible=!0,this.config={allowDel:!0,content:"",extend:"",group:"",id:0,name:"",rule:"",tip:"",title:"",type:"",value:"",weigh:0}},save(){const e=this.config;e.id==0?B(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getconfigPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")}):q(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getconfigPage(this.page.current),s(o.msg);else return s(o.msg),!1}).catch(o=>{s("网络错误联系管理员")})}}}),M={class:"config"},j={class:"config-tools"},G={class:"dialog-footer"};function H(e,o,r,p,J,K){const u=$,i=D,b=z,h=P,n=W,d=L,c=U,V=F;return y(),k(v,null,[g("div",M,[g("div",j,[l(u,{type:"warning",onClick:e.toAdd},{default:a(()=>[m("添加")]),_:1},8,["onClick"])]),l(b,{data:e.config,style:{width:"100%"}},{default:a(()=>[l(i,{fixed:"",prop:"id",label:"#",width:"50"}),l(i,{prop:"name",label:"变量名"}),l(i,{prop:"group",label:"分组"}),l(i,{prop:"title",label:"变量标题"}),l(i,{prop:"tip",label:"变量描述"}),l(i,{prop:"type",label:"类型"}),l(i,{prop:"value",label:"变量值"}),l(i,{prop:"content",label:"字典数据"}),l(i,{prop:"rule",label:"验证规则"}),l(i,{prop:"extend",label:"扩展属性"}),l(i,{prop:"allow_del",label:"允许删除:0=否,1=是"}),l(i,{prop:"weigh",label:"权重"}),l(i,{fixed:"right",label:"操作",width:"120"},{default:a(t=>[l(u,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(t.row)},{default:a(()=>[m("更新")]),_:2},1032,["onClick"]),l(u,{link:"",type:"primary",size:"small",onClick:w=>e.del(t.row.id)},{default:a(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[12]||(o[12]=t=>e.dialogFormVisible=t),title:"类型编辑"},{footer:a(()=>[g("span",G,[l(u,{onClick:o[11]||(o[11]=t=>e.dialogFormVisible=!1)},{default:a(()=>[m("Cancel")]),_:1}),l(u,{type:"primary",onClick:e.save},{default:a(()=>[m(" 保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(c,{model:e.config},{default:a(()=>[l(d,{label:"变量名","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.config.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"分组","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.group,"onUpdate:modelValue":o[1]||(o[1]=t=>e.config.group=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"变量标题","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.title,"onUpdate:modelValue":o[2]||(o[2]=t=>e.config.title=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"变量描述","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.deleted,"onUpdate:modelValue":o[3]||(o[3]=t=>e.config.deleted=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"类型","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.type,"onUpdate:modelValue":o[4]||(o[4]=t=>e.config.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"变量值","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.value,"onUpdate:modelValue":o[5]||(o[5]=t=>e.config.value=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"字典数据","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.content,"onUpdate:modelValue":o[6]||(o[6]=t=>e.config.content=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"验证规则","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.rule,"onUpdate:modelValue":o[7]||(o[7]=t=>e.config.rule=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"扩展属性","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.extend,"onUpdate:modelValue":o[8]||(o[8]=t=>e.config.extend=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"允许删除","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.allowDel,"onUpdate:modelValue":o[9]||(o[9]=t=>e.config.allowDel=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"权重","label-width":e.formLabelWidth},{default:a(()=>[l(n,{modelValue:e.config.weigh,"onUpdate:modelValue":o[10]||(o[10]=t=>e.config.weigh=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const re=E(I,[["render",H]]);export{re as default};
