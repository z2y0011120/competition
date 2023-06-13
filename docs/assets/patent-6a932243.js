import{i as f,_ as E,d as y,o as C,c as z,b as t,w as o,a as h,e as m}from"./index-789cd201.js";import{E as k}from"./el-pagination-d72db8aa.js";import{E as D}from"./el-input-26b7f203.js";import"./el-tag-4ea04386.js";import"./el-select-bd4a6b65.js";import{E as F,a as v}from"./el-table-column-e16de002.js";import{E as $}from"./el-dialog-19ea18e4.js";import"./el-overlay-55eb4b45.js";import{E as T,a as U}from"./el-form-item-0fc3dfa5.js";import{E as B}from"./el-button-cc310b46.js";/* empty css                   */import{E as L}from"./index-c9eff66b.js";import{E as r}from"./index-3bbe16be.js";import"./use-form-item-f09bf200.js";import"./_Uint8Array-76672878.js";import"./debounce-c87c8148.js";import"./validator-87c37b4d.js";import"./_initCloneObject-f66fa92e.js";const W=e=>f.request({url:"api/patent/page",method:"post",data:e}),N=e=>f.request({url:"api/patent/add",method:"post",data:e}),q=e=>f.request({url:"api/patent/delete",method:"get",params:e}),I=e=>f.request({url:"api/patent/edit",method:"post",data:e}),S=e=>f.request({url:"api/patent/one",method:"get",params:e}),u={add:N,remove:q,update:I,select:S,getPage:W},P=y({data(){return{list:[],patent:{},current:1,size:10,total:0,dialogFormVisible:!1}},mounted(){this.fetchData(1)},methods:{fetchData(e){this.current=e;const a={current:this.current,size:this.size};u.getPage(a).then(i=>{console.log(i),this.list=i.data.page.records,this.total=i.data.page.total})},handleDelete(e){const a={id:e};L.confirm("您是否需要删除该宿舍?","提示",{confirmButtonText:"ok",cancelButtonText:"no",type:"warning"}).then(()=>{u.remove(a).then(i=>{i.success?(r({type:"success",message:"删除成功"}),this.fetchData(1)):r({type:"error",message:"网络出问题，联系管理员"})})}).catch(()=>{r({type:"warning",message:"取消删除"})})},handleEdit(e){this.dialogFormVisible=!0;const a={id:e};u.select(a).then(i=>{this.patent=i.data.patent})},toAdd(){this.patent={},this.dialogFormVisible=!0},confirm(){this.patent.id==null?u.add(this.patent).then(e=>{e.success?(r({type:"success",message:"添加成功"}),this.fetchData(1)):r({type:"error",message:"网络出问题，联系管理员"}),this.dialogFormVisible=!1}):(u.update(this.patent).then(e=>{e.success?(r({type:"success",message:"编辑成功"}),this.fetchData(1)):r({type:"error",message:"网络出问题，联系管理员"})}),this.dialogFormVisible=!1)},changeSize(e){this.size=e,this.fetchData(1)}}}),A={class:"root"},M={class:"dialog-footer"},_={class:"table"};function j(e,a,i,G,H,J){const p=B,s=D,d=T,g=U,b=$,n=v,c=F,V=k;return C(),z("div",A,[t(p,{type:"success",plain:"",onClick:e.toAdd},{default:o(()=>[m("新增")]),_:1},8,["onClick"]),t(b,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[9]||(a[9]=l=>e.dialogFormVisible=l),title:"专利表单"},{footer:o(()=>[h("span",M,[t(p,{onClick:a[7]||(a[7]=l=>e.dialogFormVisible=!1)},{default:o(()=>[m("取消")]),_:1}),t(p,{type:"primary",onClick:a[8]||(a[8]=l=>e.confirm())},{default:o(()=>[m(" 确定 ")]),_:1})])]),default:o(()=>[t(g,{model:e.patent},{default:o(()=>[t(d,{label:"专利名称","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.patent.name=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"发明人","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.userId,"onUpdate:modelValue":a[1]||(a[1]=l=>e.patent.userId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"专利类型","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.type,"onUpdate:modelValue":a[2]||(a[2]=l=>e.patent.type=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"授权时间","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.empowerTime,"onUpdate:modelValue":a[3]||(a[3]=l=>e.patent.empowerTime=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"佐证材料","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.attachment,"onUpdate:modelValue":a[4]||(a[4]=l=>e.patent.attachment=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"申请地址","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.address,"onUpdate:modelValue":a[5]||(a[5]=l=>e.patent.address=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"专利号","label-width":e.formLabelWidth},{default:o(()=>[t(s,{modelValue:e.patent.patentNo,"onUpdate:modelValue":a[6]||(a[6]=l=>e.patent.patentNo=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),h("div",_,[t(c,{data:e.list,style:{width:"100%"}},{default:o(()=>[t(n,{fixed:"",prop:"id",label:"序号",width:"80",align:"center"}),t(n,{prop:"name",label:"专利名称",width:"80",align:"center"}),t(n,{prop:"userId",label:"发明人",width:"100",align:"center"}),t(n,{prop:"type",label:"专利类型",width:"100",align:"center"}),t(n,{prop:"empowerTime",label:"授权时间",width:"250",align:"center"}),t(n,{prop:"attachment",label:"佐证材料",width:"100",align:"center"}),t(n,{prop:"address",label:"申请地址",width:"100",align:"center"}),t(n,{prop:"patentNo",label:"专利号",width:"80",align:"center"}),t(n,{fixed:"right",label:"权限",width:"150",align:"center"},{default:o(l=>[t(p,{type:"info",plain:"",size:"small",onClick:w=>e.handleEdit(l.row.id)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"]),t(p,{type:"danger",plain:"",size:"small",onClick:w=>e.handleDelete(l.row.id)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),t(V,{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],style:{padding:"30px 0","text-align":"center"},layout:"sizes, prev, pager, next, jumper, ->, total, slot",onCurrentChange:e.fetchData,onSizeChange:e.changeSize},null,8,["current-page","total","page-size","onCurrentChange","onSizeChange"])])}const pe=E(P,[["render",j]]);export{pe as default};
