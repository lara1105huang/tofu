import{d as P,r as d,a as Q,c as R,o as X,b as m,e,F as E,f as B,g as s,w as c,h as f,i as h,t as _,j as g,k as V,u as x}from"./index.77e3c52f.js";import{h as $,f as w,a as Z,e as j}from"./index.4f1ad240.js";const G={class:"tofu-area"},J=e("div",{class:"title"},"\u81ED\u51B0\u5E97\u83DC\u55AE",-1),I=e("div",{class:"text-centent mt-5"},"\u5927\u91CC\u5340\u5927\u5CF0\u8DEF530-1\u865F",-1),ee=e("div",{class:"text-centent"},"\u806F\u7D61\u96FB\u8A71: 0919 271 644",-1),ue={class:"menu"},le=["onClick"],oe=e("span",null,"\u5143",-1),se=e("i",{class:"fa-solid fa-circle-plus"},null,-1),ae=e("h4",null,"\u8CFC\u7269\u8ECA",-1),ne={class:"menu_shop"},te={class:"cart-item"},de={class:"cart-title"},re={class:"price"},ie={class:"count"},ce={class:"count"},_e={class:"handler"},pe=["onClick"],ve=e("i",{class:"fa-solid fa-circle-plus"},null,-1),me=[ve],fe=["onClick"],he=e("i",{class:"fa-solid fa-circle-minus ml-2"},null,-1),Ae=[he],Fe=["onClick"],Ce=e("i",{class:"fa-solid fa-trash"},null,-1),ge=[Ce],De=["onClick"],be={class:"countAllTotal"},ke={class:"form-area"},ye=e("span",null,null,-1),Ee=e("span",null,"\u60A8\u597D\uFF1A",-1),Be=e("span",null,"\u5148\u751F/\u5C0F\u59D0",-1),Ve=e("span",null,"\u8A02\u55AE\u865F\u78BC\uFF1A",-1),xe=e("span",null,null,-1),we=e("div",null,"\u8ACB\u60A8\u5728\u7576\u65E5\u8A02\u8CFC\u6642\u9593\u5167\u5B8C\u6210\u60A8\u7684\u8A02\u55AE\u4EA4\u6613\uFF01",-1),Ue=e("span",null,"\u7E3D\u50F9\uFF1A",-1),$e={class:"dialog-footer"},Ne=P({__name:"Home",setup(Te){const U=d(),a=d([]);d();const y=$(new Date).format("YYYY-MM-DD-HHmm");d(0);const t=d({name:"",phone:"",add:""}),T=Q({name:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",trigger:"blur"}],phone:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u884C\u52D5\u96FB\u8A71",trigger:"blur"}],add:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u5730\u5740",trigger:"blur"}],type:[{type:"array",required:!0,message:"\u8ACB\u8F38\u5165",trigger:"change"}]});var Y=w.database().ref("orders/");const M=d({}),N=()=>{Y.once("value",u=>{M.value=u.val()})};d({id:"",productName:"",price:"",count:"",total:""});const D=d(!1),O=()=>{D.value=!0},A=d(),q=async(u,l)=>{if(!!l){var r=w.database().ref("user/"),n=w.database().ref("orders/");console.log(b.value," countAllTotal"),await l.validate((i,F)=>{if(i){A.value=t.value,r.push({orderUser:t.value}),n.push({orderNo:y,orderUser:t.value,time:$(new Date).format("YYYY-MM-DD HH:mm"),countTotal:b.value,list:{id:u[0],productName:u[1],price:u[2],count:u[3],total:u[2]*u[3]}}),O(y,time,A.value,b.value);let p={name:A.value.name,phone:A.value.phone,add:A.value.add};console.log(p),j.send("service_v77i5ep","template_jqd9wwu",p,"bwpyddYiOIwNAzM5yhafd").then(C=>{console.log("SUCCESS!",C.text)},C=>{console.log("FAILED...",C.text)})}else console.log("\u932F\u8AA4\u9001\u51FA\uFF01",F)})}},k=d(),H=async()=>{const r="https://sheets.googleapis.com/v4/spreadsheets/19YWnM9PrXXEUOcT9zWkQYpiZ1W3o6i-UToEGsUPcFcU/values/\u5546\u54C1\u5217\u8868?alt=json&key=AIzaSyAieT4Folrx3Tsx-iZqzu_HyNBt349BMaw";await Z.get(r).then(n=>{k.value=n.data.values,console.log(n.data);for(var i=0;i<=k.value.length;i++)for(var F=k.value[0],p=0;p<=F.length;p++)F[p]})},S=u=>{var l=[];l[0]=u[0],l[1]=u[1],l[2]=u[2];var r=1;for(var n in a.value)if(a.value[n][1]===u[1]){r=a.value[n][3]+1;var i=a.value.indexOf(a.value[n]);a.value.splice(i,1)}l[3]=r,a.value.push(l)},z=u=>{u[3]++};d([]);const W=u=>{console.log("removeOne",u),u[3]--,u[3]<=0&&a.value.splice(u,1)},L=u=>{a.value.splice(u,1)},b=R(()=>{var u=0;for(var l in a.value)u+=a.value[l][3]*a.value[l][2];return u});return X(()=>{H(),N()}),(u,l)=>{const r=f("el-input"),n=f("el-form-item"),i=f("el-checkbox"),F=f("el-checkbox-group"),p=f("el-form"),C=f("el-button"),K=f("el-dialog");return h(),m("div",G,[J,I,ee,e("ul",ue,[(h(!0),m(E,null,B(k.value,o=>(h(),m("li",{key:o},[e("a",{onClick:v=>S(o)},[(h(!0),m(E,null,B(o,v=>(h(),m("div",{key:v},[e("span",null,_(v),1)]))),128)),oe,se],8,le)]))),128))]),ae,e("div",ne,[s(p,{ref_key:"ruleFormRef",ref:U,model:t.value,rules:T,"status-icon":""},{default:c(()=>[(h(!0),m(E,null,B(a.value,o=>(h(),m("div",{class:"cart",key:o},[e("div",te,[e("div",de,_(o[1]),1),e("div",null,[e("span",re,_("$"+o[2]),1),g(" x "),e("span",ie,_(o[3]),1),e("span",ce,_("$"+o[2]*o[3]),1)]),e("div",_e,[e("a",{href:"#",class:"cart-btn plus",onClick:V(v=>z(o),["prevent"])},me,8,pe),e("a",{href:"#",class:"cart-btn minus",onClick:V(v=>W(o),["prevent"])},Ae,8,fe),e("a",{href:"#",class:"cart-btn minus",onClick:V(v=>L(o),["prevent"])},ge,8,Fe)])]),e("a",{class:"btn",onClick:v=>q(o,U.value)},"\u9001\u51FA\u8CFC\u7269\u8ECA",8,De)]))),128)),e("p",be,[g("\u7E3D\u8A08\uFF1A "),e("span",null,_("$"+x(b)),1)]),e("div",ke,[s(n,{label:"\u59D3\u540D",prop:"name"},{default:c(()=>[s(r,{modelValue:t.value.name,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value.name=o)},null,8,["modelValue"])]),_:1}),s(n,{label:"\u96FB\u8A71",prop:"phone"},{default:c(()=>[s(r,{modelValue:t.value.phone,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value.phone=o)},null,8,["modelValue"])]),_:1}),s(n,{label:"\u5730\u5740",prop:"add"},{default:c(()=>[s(r,{modelValue:t.value.add,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value.add=o)},null,8,["modelValue"])]),_:1}),s(n,{label:"\u4F7F\u7528\u65B9\u5F0F:",prop:"type"},{default:c(()=>[s(F,{modelValue:t.value.type,"onUpdate:modelValue":l[3]||(l[3]=o=>t.value.type=o)},{default:c(()=>[s(i,{label:"\u5167\u7528",name:"\u5167\u7528"}),s(i,{label:"\u5916\u5E36\u81EA\u53D6",name:"\u5916\u5E36\u81EA\u53D6"}),s(i,{label:"\u5916\u9001",name:"\u5916\u9001"})]),_:1},8,["modelValue"])]),_:1})])]),_:1},8,["model","rules"])]),s(K,{modelValue:D.value,"onUpdate:modelValue":l[6]||(l[6]=o=>D.value=o),title:"Warning",width:"30%",center:""},{footer:c(()=>[e("div",null,[e("div",null,[Ee,g(_(A.value.name),1),Be]),e("div",null,[Ve,g(_(x(y)),1),xe]),we,Ue,e("span",null,_(x(b)),1)]),e("span",$e,[s(C,{onClick:l[4]||(l[4]=o=>D.value=!1)},{default:c(()=>[g("\u95DC\u9589\u8996\u7A97")]),_:1}),s(C,{type:"primary",onClick:l[5]||(l[5]=o=>D.value=!1)},{default:c(()=>[g(" \u8A02\u55AE\u5B8C\u6210 ")]),_:1})])]),default:c(()=>[ye]),_:1},8,["modelValue"])])}}});export{Ne as default};
