import{d as ee,r as a,a as ue,c as le,o as oe,b as m,e,F as k,f as E,w as U,v as ae,g as r,h as c,i as g,j as F,k as _,t as v,l as A,n as se,u as te,m as ne}from"./index.f5afa35a.js";import{h as $,f as D,a as re}from"./firebaseConfig.10f39527.js";import{e as ie}from"./index.fc8f9b37.js";const de={class:"tofu-area"},ce={class:"menu"},ve=["onClick"],me=e("span",null,"\u5143",-1),_e=e("i",{class:"fa-solid fa-circle-plus"},null,-1),pe=e("div",{class:"cart_sun"},[e("h4",null,"\u5916\u5E36\u81EA\u53D6\u8CFC\u7269\u8ECA"),e("p",null,"\u8ACB\u65BC\u8A02\u99101\u5C0F\u6642\u4E4B\u5167\u4F86\u96FB\u9818\u53D6\u8CFC\u7269\u9805\u76EE\uFF0C\u8B1D\u8B1D\u60A8\u7684\u5408\u4F5C\uFF01"),e("p",null,"\u672C\u5E97\u63A1\u73FE\u91D1\u4EA4\u6613\uFF01")],-1),fe={class:"menu_shop"},Ce=e("div",{class:"order_content_headline"},"\u8A02\u8CFC\u5167\u5BB9\uFF1A",-1),Fe={class:"form-area"},Ae={class:"cartAll"},he={class:"cart-item"},ge={class:"cart-title"},De={class:"price"},Be={class:"count"},ye={class:"count"},be={class:"handler"},ke=["onClick"],Ee=["onClick"],Ve=["onClick"],we=["onClick"],Te={class:"countAllTotal"},Ue={style:{display:"none"},name:"AllTotal"},$e={class:"order_info"},xe=e("div",{class:"headline"},"\u8A02\u8CFC\u4EBA\u8CC7\u6599\uFF1A",-1),Se={class:"el-dialog__body"},Ye=e("div",{class:"m5"},"\u8A02\u55AE\u7DE8\u865F\uFF1A",-1),Me={class:"m5"},Ne=e("div",null,"\u8ACB\u60A8\u5728\u9810\u5B9A\u6642\u9593\u5167\u5B8C\u6210\u8A02\u55AE\u4EA4\u6613\uFF01\u611F\u8B1D\u60A8\u7684\u5408\u4F5C\uFF01",-1),Oe={class:"dialog-footer"},Qe=ee({__name:"Home",setup(He){const x=a(""),S=a(""),Y=a(""),M=a(""),N=a(""),V=a(),C=a(!1),h=a(),w=a(!1),s=a([]),p=a($(new Date).format("YYYY-MM-DD-HHmmssSSS")),i=a({name:"",email:"",phone:"",date:"",time:"",type:""}),T=a(),O=ue({name:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",trigger:"blur"}],email:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684email",trigger:"blur"}],phone:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u884C\u52D5\u96FB\u8A71",trigger:"blur"}]});var H=D.database().ref("orders/");const q=a({}),z=()=>{H.once("value",o=>{q.value=o.val()})};a({id:"",productName:"",price:"",count:"",total:""});const P=a(),Q=o=>{try{const u={NumberDate:p,form_name:x,form_email:S,form_phone:Y,form_time:M,form_type:N,AllTotal:V};ie.sendForm("service_v77i5ep","template_jqd9wwu",o.target,"aQibbyOFShdl2H3vj",u)}catch(u){console.log({error:u})}},W=()=>{C.value=!0},j=async(o,u)=>{if(!!u){var n=D.database().ref("user/"),t=D.database().ref("orders/");D.database().ref("orders/list/"),await u.validate((d,y)=>{d&&(n.push({orderUser:i.value}),t.push({orderNo:p.value,orderUser:i.value,time:$(new Date).format("YYYY-MM-DD HH:mm"),countTotal:B.value,list:s.value}),W(p.value,P.value,i.value,B.value))})}},L=async()=>{const o="https://sheets.googleapis.com/v4/spreadsheets/19YWnM9PrXXEUOcT9zWkQYpiZ1W3o6i-UToEGsUPcFcU/values/\u5546\u54C1\u5217\u8868?alt=json&key=AIzaSyAieT4Folrx3Tsx-iZqzu_HyNBt349BMaw";await re.get(o).then(u=>{h.value=u.data.values;for(var n=0;n<=h.value.length;n++)for(var t=h.value[0],d=0;d<=t.length;d++)t[d]})},R=a(),X=o=>{var u=[];u[0]=o[0],console.log("\u6293\u5546\u54C1id",u[0]),R.value=u[0],u[1]=o[1],u[2]=o[2];var n=1;for(var t in s.value)if(s.value[t][1]===o[1]){n=s.value[t][3]+1;var d=s.value.indexOf(s.value[t]);s.value.splice(d,1)}u[3]=n,s.value.push(u),console.log("\u8A02\u8CFC\u55AE\u6578\u91CF",s.value.length),s.value.length>0&&(w.value=!0)},Z=o=>{o[3]++};a([]);const G=o=>{console.log("removeOne",o),o[3]--,o[3]<=0&&s.value.splice(o,1)},J=o=>{s.value.splice(o,1)},B=le(()=>{var o=0;for(var u in s.value)o+=s.value[u][3]*s.value[u][2];return o});return oe(()=>{L(),z()}),(o,u)=>{const n=F("el-input"),t=F("el-form-item"),d=F("el-form"),y=F("el-button"),K=F("el-dialog"),I=ne("modal");return _(),m("div",de,[e("ul",ce,[(_(!0),m(k,null,E(h.value,l=>(_(),m("li",{key:l},[e("a",{onClick:f=>X(l)},[(_(!0),m(k,null,E(l,f=>(_(),m("div",{key:f},[e("span",null,v(f),1)]))),128)),me,_e],8,ve)]))),128))]),U(e("div",null,[pe,e("div",fe,[r(d,{ref_key:"ruleFormRef",ref:T,onSubmit:g(Q,["prevent"]),model:i.value,rules:O,"status-icon":""},{default:c(()=>[Ce,e("div",Fe,[e("div",Ae,[(_(!0),m(k,null,E(s.value,(l,f)=>(_(),m("div",{class:"cart",key:f},[e("div",he,[e("div",ge,v(l[1]),1),e("div",null,[e("span",De,v("$"+l[2]),1),A(" x "),e("span",Be,v(l[3]),1),e("span",ye,v("$"+l[2]*l[3]),1)]),e("div",be,[e("i",{onClick:g(b=>Z(l),["prevent"]),class:"fa-solid fa-circle-plus"},null,8,ke),e("i",{onClick:g(b=>G(l),["prevent"]),class:"fa-solid fa-circle-minus ml-2"},null,8,Ee),e("i",{onClick:g(b=>J(l),["prevent"]),class:"fa-solid fa-trash"},null,8,Ve)])]),e("input",{class:se("btn"+f+1),onClick:b=>j(l,T.value),type:"submit",value:"\u9001\u51FA\u8CFC\u7269\u8ECA"},null,10,we)]))),128))]),e("p",Te,[A("\u7E3D\u8A08\uFF1A "),e("span",null,[A(v("$"+te(B))+" ",1),U(e("input",Ue,null,512),[[I,V.value]])])]),e("div",$e,[xe,r(t,{style:{display:"none"}},{default:c(()=>[r(n,{name:"NumberDate",modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=l=>p.value=l),type:"text"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u59D3\u540D",prop:"name"},{default:c(()=>[r(n,{name:"form_name",modelValue:i.value.name,"onUpdate:modelValue":u[1]||(u[1]=l=>i.value.name=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684email",type:"test"},null,8,["modelValue"])]),_:1}),r(t,{label:"email",prop:"email"},{default:c(()=>[r(n,{name:"form_email",modelValue:i.value.email,"onUpdate:modelValue":u[2]||(u[2]=l=>i.value.email=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684email",type:"email"},null,8,["modelValue"])]),_:1}),r(t,{label:"\u884C\u52D5\u96FB\u8A71",prop:"phone"},{default:c(()=>[r(n,{name:"form_phone",modelValue:i.value.phone,"onUpdate:modelValue":u[3]||(u[3]=l=>i.value.phone=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684\u884C\u52D5\u96FB\u8A71",type:"text"},null,8,["modelValue"])]),_:1})])])]),_:1},8,["onSubmit","model","rules"])])],512),[[ae,w.value]]),r(K,{class:"addmodal",modelValue:C.value,"onUpdate:modelValue":u[6]||(u[6]=l=>C.value=l),title:"\u8A02\u55AE\u8CC7\u8A0A",center:""},{footer:c(()=>[e("span",Oe,[r(y,{onClick:u[4]||(u[4]=l=>C.value=!1)},{default:c(()=>[A("\u95DC\u9589\u8996\u7A97")]),_:1}),r(y,{type:"primary",onClick:u[5]||(u[5]=l=>C.value=!1)},{default:c(()=>[A(" \u8A02\u55AE\u5B8C\u6210 ")]),_:1})])]),default:c(()=>[e("div",Se,[e("div",null,[e("b",null,v(i.value.name)+" \u5148\u751F / \u5C0F\u59D0\uFF0C\u60A8\u597D\uFF1A",1)]),Ye,e("div",Me,[e("b",null,v(p.value),1)]),Ne])]),_:1},8,["modelValue"])])}}});export{Qe as default};
