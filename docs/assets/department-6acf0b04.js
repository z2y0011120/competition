import{i as d,_ as B,d as E,o as _,c as C,b as a,w as o,a as f,e as c}from"./index-789cd201.js";import{E as F}from"./el-dialog-19ea18e4.js";import"./el-overlay-55eb4b45.js";import{E as S,a as T}from"./el-form-item-0fc3dfa5.js";import{E as q}from"./el-input-26b7f203.js";import{E as z}from"./el-pagination-d72db8aa.js";import"./el-tag-4ea04386.js";import"./el-select-bd4a6b65.js";import{E as v,a as k}from"./el-table-column-e16de002.js";import{E as N}from"./el-button-cc310b46.js";import{d as b}from"./dayjs.min-4904ffcd.js";/* empty css                   */import{E as $}from"./index-c9eff66b.js";import{E as i}from"./index-3bbe16be.js";import"./use-form-item-f09bf200.js";import"./_Uint8Array-76672878.js";import"./_initCloneObject-f66fa92e.js";import"./debounce-c87c8148.js";import"./validator-87c37b4d.js";const Y=e=>d.request({url:"api/department/page",method:"post",data:e}),M=e=>d.request({url:"api/department/one",method:"get",params:e}),U=e=>d.request({url:"api/department/delete",method:"get",params:e}),L=()=>d.request({url:"api/department/all",method:"get"}),W=e=>d.request({url:"api/department/edit",method:"post",data:e}),H=e=>d.request({url:"api/department/add",method:"post",data:e}),P=e=>d.request({url:"api/department/getdepartmentsForSelectBySchoolId",method:"get",params:e}),j=e=>d.request({url:"api/department/getdepartmentsForSelectByDepart",method:"get",params:e}),A=e=>d.request({url:"api/department/getdepartmentForSelectByDepartId",method:"get",params:e}),O=e=>d.request({url:"api/department/colums",method:"get",params:e}),n={getdepartmentByPage:Y,deleteById:U,updateById:W,queryById:M,addOne:H,getall:L,getcolums:O,getdepartmentsForSelectByDepart:j,getdepartmentsForSelectBySchoolId:P,getdepartmentForSelectByDepartld:A};const G=E({data(){return{tableData:[],page:1,serch:{departId:"",departName:"",schoolId:""},total:0,limit:10,department:{},dialogFormVisible:!1}},methods:{fetchData(e){console.log(e),this.page=e;const t={current:e,size:this.limit};n.getdepartmentByPage(t).then(s=>{console.log(s);const g=s.data.page;this.tableData=g.records,this.tableData.forEach(p=>{p.createTime=b(p.createTime).format("YYYY-MM-DD HH:mm:ss"),p.updateTime=b(p.createTime).format("YYYY-MM-DD HH:mm:ss"),console.log(p.createTime)}),this.total=g.total})},handleDelete(e){const t={id:e};$.confirm("你确定删除该行数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{n.deleteById(t).then(s=>{console.log(s),s.success?(i({type:"success",message:"删除成功"}),this.fetchData(1)):i({type:"error",message:"删除失败"})})}).catch(()=>{i({type:"warning",message:"取消删除"})})},handleEdit(e){this.dialogFormVisible=!0;const t={id:e};n.queryById(t).then(s=>{this.department=s.data.department})},toAdd(){this.department={},this.dialogFormVisible=!0},excute(){this.department.id!=null?(n.updateById(this.department).then(e=>{e.success?(i({type:"success",message:"编辑成功"}),this.fetchData(1)):i({type:"error",message:"编辑失败"})}),this.dialogFormVisible=!1):n.addOne(this.department).then(e=>{e.success?(i({type:"success",message:"添加成功"}),this.fetchData(1)):i({type:"error",message:"添加失败"}),this.dialogFormVisible=!1})},changeSize(e){this.limit=e,this.fetchData(this.page)},selectById(){if(this.serch.departId){const e={departId:this.serch.departId};n.getdepartmentForSelectByDepartld(e).then(t=>{this.tableData=t.data.departments})}else if(this.serch.departName){const e={depart:this.serch.departName};n.getdepartmentsForSelectByDepart(e).then(t=>{this.tableData=t.data.departments})}else if(this.serch.schoolId){const e={schoolId:this.serch.schoolId};n.getdepartmentsForSelectBySchoolId(e).then(t=>{console.log(t),this.tableData=t.data.departments})}},reset(){this.serch={},this.fetchData(1)}},mounted(){this.fetchData(1)}}),J={class:""},K={class:"table"},Q={class:"dialog-footer"};function R(e,t,s,g,p,X){const m=N,r=k,y=v,D=z,u=q,h=S,V=T,I=F;return _(),C("div",J,[a(m,{type:"success",size:"small",onClick:e.toAdd},{default:o(()=>[c("添加")]),_:1},8,["onClick"]),f("div",K,[a(y,{data:e.tableData,style:{width:"100%"}},{default:o(()=>[a(r,{fixed:"",prop:"id",label:"编号",width:"150",align:"center"}),a(r,{prop:"departName",label:"部门名称",width:"210",align:"center"}),a(r,{prop:"departCode",label:"部门英文名称",width:"120",align:"center"}),a(r,{prop:"departDesc",label:"部门描述",width:"120",align:"center"}),a(r,{prop:"schoolId",label:"学校ID",width:"120",align:"center"}),a(r,{prop:"createTime",label:"创建时间",width:"250",align:"center"}),a(r,{prop:"updateTime",label:"更新时间",width:"250",align:"center"}),a(r,{prop:"departType",label:"学院类型",width:"250",align:"center"}),a(r,{prop:"deleted",label:"删除",width:"250",align:"center"}),a(r,{fixed:"right",label:"操作",width:"180",align:"center"},{default:o(l=>[a(m,{size:"small",onClick:w=>e.handleEdit(l.row.id)},{default:o(()=>[c("编辑")]),_:2},1032,["onClick"]),a(m,{size:"small",type:"danger",onClick:w=>e.handleDelete(l.row.id)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a(D,{"current-page":e.page,total:e.total,"page-size":e.limit,"page-sizes":[5,10,20,30,40,50,100],style:{padding:"30px 0","text-align":"center"},layout:"sizes, prev, pager, next, jumper, ->, total, slot",onCurrentChange:e.fetchData,onSizeChange:e.changeSize},null,8,["current-page","total","page-size","onCurrentChange","onSizeChange"]),a(I,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[7]||(t[7]=l=>e.dialogFormVisible=l),title:"添加/编辑"},{footer:o(()=>[f("span",Q,[a(m,{onClick:t[5]||(t[5]=l=>e.dialogFormVisible=!1)},{default:o(()=>[c("取消")]),_:1}),a(m,{type:"primary",onClick:t[6]||(t[6]=l=>e.excute())},{default:o(()=>[c(" 确定 ")]),_:1})])]),default:o(()=>[a(V,{model:e.department},{default:o(()=>[a(h,{label:"部门名称","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.department.departName,"onUpdate:modelValue":t[0]||(t[0]=l=>e.department.departName=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"部门英文名称","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.department.departCode,"onUpdate:modelValue":t[1]||(t[1]=l=>e.department.departCode=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"部门描述","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.department.departDesc,"onUpdate:modelValue":t[2]||(t[2]=l=>e.department.departDesc=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"学校ID","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.department.schoolId,"onUpdate:modelValue":t[3]||(t[3]=l=>e.department.schoolId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(h,{label:"学院类型","label-width":e.formLabelWidth},{default:o(()=>[a(u,{modelValue:e.department.departType,"onUpdate:modelValue":t[4]||(t[4]=l=>e.department.departType=l),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const be=B(G,[["render",R],["__scopeId","data-v-5f76e05f"]]);export{be as default};
