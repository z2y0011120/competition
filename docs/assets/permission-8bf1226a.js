import{i as f,_ as w,d as E,o as C,c as _,b as t,w as a,a as h,e as m}from"./index-789cd201.js";import{E as B}from"./el-dialog-19ea18e4.js";import"./el-overlay-55eb4b45.js";import{E as D,a as z}from"./el-form-item-0fc3dfa5.js";import{E as v}from"./el-input-26b7f203.js";import{E as k}from"./el-pagination-d72db8aa.js";import"./el-tag-4ea04386.js";import"./el-select-bd4a6b65.js";import{E as F,a as I}from"./el-table-column-e16de002.js";import{E as $}from"./el-button-cc310b46.js";/* empty css                   */import{E as q}from"./index-c9eff66b.js";import{E as n}from"./index-3bbe16be.js";import"./use-form-item-f09bf200.js";import"./_Uint8Array-76672878.js";import"./_initCloneObject-f66fa92e.js";import"./debounce-c87c8148.js";import"./validator-87c37b4d.js";const T=e=>f.request({url:"api/permission/page",method:"post",data:e}),U=e=>f.request({url:"api/permission/delete",method:"get",params:e}),L=e=>f.request({url:"api/permission/edit",method:"post",data:e}),W=e=>f.request({url:"api/permission/one",method:"get",params:e}),S=e=>f.request({url:"api/permission/add",method:"post",data:e}),u={getpermissionByPage:T,deleteById:U,updateById:L,queryById:W,addOne:S};const N=E({data(){return{tableData:[],page:1,total:0,limit:10,permission:{},dialogFormVisible:!1}},methods:{fetchData(){const e={current:this.page,size:this.limit};u.getpermissionByPage(e).then(l=>{const s=l.data.page;this.tableData=s.records,this.total=s.total})},handleDelete(e){const l={id:0};q.confirm("你确定删除该行数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{u.deleteById(l).then(s=>{s.success?(n({type:"success",message:"删除成功"}),this.fetchData()):n({type:"error",message:"删除失败"})})}).catch(()=>{n({type:"warning",message:"取消删除"})})},handleEdit(e){this.dialogFormVisible=!0;const l={id:e};u.queryById(l).then(s=>{this.permission=s.data.permission})},toAdd(){this.dialogFormVisible=!0},excute(){this.permission.id!=null?(u.updateById(this.permission).then(e=>{e.success?(n({type:"success",message:"编辑成功"}),this.fetchData()):n({type:"error",message:"编辑失败"})}),this.dialogFormVisible=!1):u.addOne(this.permission).then(e=>{e.success?(n({type:"success",message:"编辑成功"}),this.fetchData()):n({type:"error",message:"添加失败"}),this.dialogFormVisible=!1})},changeSize(e){this.limit=e,this.fetchData()}},created(){this.fetchData(1)}}),P={class:""},A={class:"table"},M={class:"dialog-footer"};function O(e,l,s,j,G,H){const p=$,i=I,g=F,b=k,r=v,d=D,c=z,V=B;return C(),_("div",P,[t(p,{type:"success",size:"small",onClick:e.toAdd},{default:a(()=>[m("添加")]),_:1},8,["onClick"]),h("div",A,[t(g,{data:e.tableData,style:{width:"100%"}},{default:a(()=>[t(i,{fixed:"",prop:"id",label:"序号",width:"150",align:"center"}),t(i,{prop:"mcode",label:"权限码",width:"120",align:"center"}),t(i,{prop:"description",label:"权限说明",width:"120",align:"center"}),t(i,{prop:"hasChildren",label:"是否有子权限",width:"120",align:"center"}),t(i,{prop:"pid",label:"父编号",width:"120",align:"center"}),t(i,{prop:"type",label:"权限类型",width:"120",align:"center"}),t(i,{prop:"url",label:"访问地址",width:"120",align:"center"}),t(i,{prop:"createTime",label:"创建时间",width:"120",align:"center"}),t(i,{prop:"updateTime",label:"更新时间",width:"120",align:"center"}),t(i,{fixed:"right",label:"操作",width:"180",align:"center"},{default:a(o=>[t(p,{size:"small",onClick:y=>e.handleEdit(o.row.id)},{default:a(()=>[m("编辑")]),_:2},1032,["onClick"]),t(p,{size:"small",type:"danger",onClick:y=>e.handleDelete(o.row.id)},{default:a(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),t(b,{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],style:{padding:"30px 0","text-align":"center"},layout:"sizes, prev, pager, next, jumper, ->, total, slot",onCurrentChange:e.fetchData,onSizeChange:e.changeSize},null,8,["current-page","total","page-size","onCurrentChange","onSizeChange"]),t(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[8]||(l[8]=o=>e.dialogFormVisible=o),title:"添加/编辑"},{footer:a(()=>[h("span",M,[t(p,{onClick:l[6]||(l[6]=o=>e.dialogFormVisible=!1)},{default:a(()=>[m("取消")]),_:1}),t(p,{type:"primary",onClick:l[7]||(l[7]=o=>e.excute())},{default:a(()=>[m(" 确定 ")]),_:1})])]),default:a(()=>[t(c,{model:e.permission},{default:a(()=>[t(d,{label:"权限码","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.mcode,"onUpdate:modelValue":l[0]||(l[0]=o=>e.permission.mcode=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"权限说明","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.escription,"onUpdate:modelValue":l[1]||(l[1]=o=>e.permission.escription=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"是否有子权","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.hasChildren,"onUpdate:modelValue":l[2]||(l[2]=o=>e.permission.hasChildren=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"父编号","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.pid,"onUpdate:modelValue":l[3]||(l[3]=o=>e.permission.pid=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"权限类型","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.type,"onUpdate:modelValue":l[4]||(l[4]=o=>e.permission.type=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(d,{label:"访问地址","label-width":e.formLabelWidth},{default:a(()=>[t(r,{modelValue:e.permission.rl,"onUpdate:modelValue":l[5]||(l[5]=o=>e.permission.rl=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const pe=w(N,[["render",O],["__scopeId","data-v-b3e11a86"]]);export{pe as default};
