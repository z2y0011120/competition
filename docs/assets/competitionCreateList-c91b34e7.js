import{_ as Y,d as E,o as y,c as D,a as g,b as t,w as s,F as L,e as f}from"./index-789cd201.js";import{E as M}from"./el-dialog-19ea18e4.js";import"./el-overlay-55eb4b45.js";import{E as H,a as I}from"./el-form-item-0fc3dfa5.js";import{E as v}from"./el-input-26b7f203.js";import{E as F}from"./el-pagination-d72db8aa.js";import"./el-tag-4ea04386.js";import"./el-select-bd4a6b65.js";import{E as U,a as W}from"./el-table-column-e16de002.js";import{E as z}from"./el-button-cc310b46.js";import{g as $,a as B,d as N,b as j,e as C}from"./competitionCreateList-9f012516.js";import{d as c}from"./dayjs.min-4904ffcd.js";import{c as b}from"./cloneDeep-03746fa9.js";import{E as p}from"./index-3bbe16be.js";import"./use-form-item-f09bf200.js";import"./_Uint8Array-76672878.js";import"./_initCloneObject-f66fa92e.js";import"./debounce-c87c8148.js";import"./validator-87c37b4d.js";const A=E({data(){return{competitionCreates:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,competitionCreate:{},formLabelWidth:80}},mounted(){this.getall(1)},methods:{zz(e){console.log(e),$({userId:e}).then(a=>{if(a.success)console.log(a.data.competitionCreates),this.competitionCreates=a.data.competitionCreates,console.log(this.competitionCreates),this.competitionCreates.forEach(n=>{n.startTime=c(n.startTime).format("YYYY年MM月DD日 HH:mm:ss"),n.endTime=c(n.endTime).format("YYYY年MM月DD日 HH:mm:ss"),n.aimCompetition==0&&(n.aimCompetition="无目标赛事"),n.checked==0?n.checked="未审核":n.checked="已审核",n.signup==0?n.signup="未开始":n.signup="已开始",n.state==0?n.state="未启用":n.state==1?n.state="启用":n.state="结束"});else return console.log(a.msg),!1}).catch(a=>{})},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.competitionCreate=b(e)},toEdit1(e){console.log(e),this.competitionCreate=b(e),this.save1()},getall(e){B({colums:[],current:e,size:100,userId:2}).then(a=>{console.log(a.data.page.records);const n=a.data.page.records;this.competitions=n,this.page=n,this.competitions.forEach(l=>{l.startTime=c(l.startTime).format("YYYY年MM月DD日 HH:mm:ss"),l.endTime=c(l.endTime).format("YYYY年MM月DD日 HH:mm:ss"),l.updateTime=c(l.updateTime).format("YYYY年MM月DD日 HH:mm:ss"),l.createTime=c(l.createTime).format("YYYY年MM月DD日 HH:mm:ss"),l.aimCompetition==0&&(l.aimCompetition="无目标赛事"),l.checked==0?l.checked="未审核":l.checked="已审核",l.signup==0?l.signup="未开始":l.signup="已开始",l.state==0?l.state="未启用":l.state==1?l.state="启用":l.state="结束",l.aimCompetition==1275&&(l.aimCompetition="中国软件杯”大学生软件设计大赛")})}).catch(a=>{console.log(a)})},currentchange(e){this.getall(e),this.page.current=e},del(e){console.log(e),N(e).then(a=>{if(a.success)this.getall(1);else return console.log(a.msg),!1}).catch(a=>{})},toAdd(){this.dialogFormVisible=!0,this.competitionCreate={aimCompetition:0,checked:0,content:"",createTime:"",deleted:0,endTime:"",id:0,schoolId:0,signup:0,startTime:"",state:0,target:"",title:"",type:"",updateTime:"",userId:0}},save(){console.log(this.competitionCreate);const e=this.competitionCreate;if(e.id==0)j(e).then(o=>{if(o.success)this.dialogFormVisible=!1,console.log(o);else return p(o.msg),!1}).catch(o=>{p("网络错误联系管理员")});else{e.checked=="未审核"?e.checked=0:e.checked=1,e.signup=="未开始"?e.signup=0:e.signup=1,e.state=="未启用"?e.state=0:e.state=="启用"?e.state=1:e.state=2,e.aimCompetition=="中国软件杯”大学生软件设计大赛"&&(e.aimCompetition=1275),e.aimCompetition=="无目标赛事"&&(e.aimCompetition=0),console.log(e.createTime.slice(0,4)+"-"+e.createTime.slice(5,7)+"-"+e.createTime.slice(8,10)+"T"+e.createTime.slice(12,20)+".000+08:00");let o={aimCompetition:e.aimCompetition,checked:e.checked,content:e.content,createTime:e.createTime.slice(0,4)+"-"+e.createTime.slice(5,7)+"-"+e.createTime.slice(8,10)+"T"+e.createTime.slice(12,20)+".000+08:00",deleted:e.deleted,endTime:e.endTime.slice(0,4)+"-"+e.endTime.slice(5,7)+"-"+e.endTime.slice(8,10)+"T"+e.endTime.slice(12,20)+".000+08:00",id:e.id,schoolId:e.schoolId,signup:e.signup,startTime:e.startTime.slice(0,4)+"-"+e.startTime.slice(5,7)+"-"+e.startTime.slice(8,10)+"T"+e.startTime.slice(12,20)+".000+08:00",state:e.state,target:e.target,title:e.title,type:e.type,updateTime:new Date,userId:e.userId};console.log(new Date),C(o).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getall(1),p({message:"编辑成功",type:"success"});else return p(a),!1}).catch(a=>{p("网络错误联系管理员")})}},save1(){console.log(this.competitionCreate);const e=this.competitionCreate;e.checked=="未审核"&&(e.checked=1),e.signup=="未开始"?e.signup=0:e.signup=1,e.state=="未启用"?e.state=0:e.state=="启用"?e.state=1:e.state=2,e.aimCompetition=="中国软件杯”大学生软件设计大赛"&&(e.aimCompetition=1275),e.aimCompetition=="无目标赛事"&&(e.aimCompetition=0),console.log(e.createTime.slice(0,4)+"-"+e.createTime.slice(5,7)+"-"+e.createTime.slice(8,10)+"T"+e.createTime.slice(12,20)+".000+08:00");let o={aimCompetition:e.aimCompetition,checked:e.checked,content:e.content,createTime:e.createTime.slice(0,4)+"-"+e.createTime.slice(5,7)+"-"+e.createTime.slice(8,10)+"T"+e.createTime.slice(12,20)+".000+08:00",deleted:e.deleted,endTime:e.endTime.slice(0,4)+"-"+e.endTime.slice(5,7)+"-"+e.endTime.slice(8,10)+"T"+e.endTime.slice(12,20)+".000+08:00",id:e.id,schoolId:e.schoolId,signup:e.signup,startTime:e.startTime.slice(0,4)+"-"+e.startTime.slice(5,7)+"-"+e.startTime.slice(8,10)+"T"+e.startTime.slice(12,20)+".000+08:00",state:e.state,target:e.target,title:e.title,type:e.type,updateTime:new Date,userId:e.userId};console.log(new Date),C(o).then(a=>{if(a.success)this.getall(1),p({message:"编辑成功",type:"success"});else return p(a),!1}).catch(a=>{p("网络错误联系管理员")})}}}),O={class:"competitionCreates",style:{width:"1150px"}},P=g("div",{style:{"margin-left":"30px","margin-top":"30px","font-size":"20px","margin-bottom":"10px"}},"竞赛管理",-1),q=g("div",{class:"competitionCreates-tools",style:{"margin-left":"89%","margin-bottom":"10px"}},null,-1),G=["innerHTML"],J={class:"dialog-footer"};function K(e,o,a,n,l,Q){const m=W,u=z,T=U,V=F,d=v,r=H,w=I,k=M;return y(),D(L,null,[g("div",O,[P,q,t(T,{data:e.competitions,border:"",style:{width:"100%","margin-left":"20px"}},{default:s(()=>[t(m,{fixed:"",prop:"id",label:"id",width:"60",align:"center"}),t(m,{prop:"title",label:"竞赛标题",width:"100",align:"center"}),t(m,{prop:"signup",label:"开始报名",width:"70",align:"center"}),t(m,{prop:"target",label:"赛事对象",width:"90",align:"center"}),t(m,{prop:"type",label:"赛事类型",width:"90",align:"center"}),t(m,{prop:"aimCompetition",label:"目标赛事",width:"160",align:"center"}),t(m,{prop:"content",label:"竞赛方案",width:"210",align:"center"},{default:s(i=>[g("div",{innerHTML:i.row.content},null,8,G)]),_:1}),t(m,{prop:"checked",label:"审核",width:"70",align:"center"}),t(m,{prop:"state",label:"状态",width:"70",align:"center"}),t(m,{prop:"startTime",label:"竞赛开始时间",width:"135",align:"center"}),t(m,{prop:"endTime",label:"结束时间",width:"135",align:"center"}),t(m,{prop:"createTime",label:"创建时间",width:"135",align:"center"}),t(m,{prop:"updateTime",label:"更新时间",width:"135",align:"center"}),t(m,{fixed:"right",label:"操作",width:"300",align:"center"},{default:s(i=>[t(u,{type:"primary",onClick:h=>e.toEdit(i.row)},{default:s(()=>[f("编辑")]),_:2},1032,["onClick"]),t(u,{type:"danger",onClick:h=>e.del(i.row.id)},{default:s(()=>[f("删除")]),_:2},1032,["onClick"]),t(u,{type:"success",onClick:h=>e.toEdit1(i.row)},{default:s(()=>[f("审核同意")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(V,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(k,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[12]||(o[12]=i=>e.dialogFormVisible=i),title:"竞赛"},{footer:s(()=>[g("span",J,[t(u,{onClick:o[11]||(o[11]=i=>e.dialogFormVisible=!1)},{default:s(()=>[f("Cancel")]),_:1}),t(u,{type:"primary",onClick:e.save},{default:s(()=>[f(" 保存 ")]),_:1},8,["onClick"])])]),default:s(()=>[t(w,{model:e.competitionCreate},{default:s(()=>[t(r,{label:"id","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.id,"onUpdate:modelValue":o[0]||(o[0]=i=>e.competitionCreate.id=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"竞赛标题","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.title,"onUpdate:modelValue":o[1]||(o[1]=i=>e.competitionCreate.title=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"开始报名","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.signup,"onUpdate:modelValue":o[2]||(o[2]=i=>e.competitionCreate.signup=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"赛事对象","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.target,"onUpdate:modelValue":o[3]||(o[3]=i=>e.competitionCreate.target=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"赛事类型","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.type,"onUpdate:modelValue":o[4]||(o[4]=i=>e.competitionCreate.type=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"目标赛事","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.aimCompetition,"onUpdate:modelValue":o[5]||(o[5]=i=>e.competitionCreate.aimCompetition=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"竞赛方案","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.content,"onUpdate:modelValue":o[6]||(o[6]=i=>e.competitionCreate.content=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"状态","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.state,"onUpdate:modelValue":o[7]||(o[7]=i=>e.competitionCreate.state=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"审核","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.checked,"onUpdate:modelValue":o[8]||(o[8]=i=>e.competitionCreate.checked=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"竞赛开始时间","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.startTime,"onUpdate:modelValue":o[9]||(o[9]=i=>e.competitionCreate.startTime=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(r,{label:"结束时间","label-width":e.formLabelWidth},{default:s(()=>[t(d,{modelValue:e.competitionCreate.endTime,"onUpdate:modelValue":o[10]||(o[10]=i=>e.competitionCreate.endTime=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ue=Y(A,[["render",K]]);export{ue as default};