import{d as ee,r as a,a as ue,c as le,o as oe,b as m,e,F as E,f as V,w as $,v as ae,g as n,h as d,i as y,j as h,k as p,t as v,l as g,n as se,u as te,m as ne}from"./index.6b40517e.js";import{h as x,f as B,a as re}from"./firebaseConfig.10f39527.js";import{e as ie}from"./index.fc8f9b37.js";const de={class:"tofu-area"},ce={class:"menu"},ve=["onClick"],me=e("span",null,"\u5143",-1),pe=e("i",{class:"fa-solid fa-circle-plus"},null,-1),_e=e("div",{class:"cart_sun"},[e("h4",null,"\u5916\u5E36\u81EA\u53D6\u8CFC\u7269\u8ECA"),e("p",null,"\u8ACB\u65BC\u8A02\u99101\u5C0F\u6642\u4E4B\u5167\u4F86\u96FB\u9818\u53D6\u8CFC\u7269\u9805\u76EE\uFF0C\u8B1D\u8B1D\u60A8\u7684\u5408\u4F5C\uFF01"),e("p",null,"\u672C\u5E97\u63A1\u73FE\u91D1\u4EA4\u6613\uFF01")],-1),fe={class:"menu_shop"},Ce=e("div",{class:"order_content_headline"},"\u8A02\u8CFC\u5167\u5BB9\uFF1A",-1),Fe={class:"form-area"},Ae={class:"cartAll"},he={class:"cart-item"},ge={class:"cart-title"},De={class:"price"},ye={class:"count"},Be={class:"count"},be={class:"handler"},ke=["onClick"],Ee=["onClick"],Ve=["onClick"],we=["onClick"],Te={class:"countAllTotal"},Ue={style:{display:"none"},name:"AllTotal"},$e={class:"order_info"},xe=e("div",{class:"headline"},"\u8A02\u8CFC\u4EBA\u8CC7\u6599\uFF1A",-1),Me={class:"el-dialog__body"},Se=e("div",null,"\u8ACB\u60A8\u5728\u9810\u5B9A\u6642\u9593\u5167\u5B8C\u6210\u8A02\u55AE\u4EA4\u6613\uFF01\u611F\u8B1D\u60A8\u7684\u5408\u4F5C\uFF01",-1),Ye={class:"dialog-footer"},ze=ee({__name:"Mail",setup(Ne){const M=a(""),S=a(""),Y=a(""),N=a(""),O=a(""),w=a(),F=a(!1),D=a(),T=a(!1),s=a([]),_=a(x(new Date).format("YYYY-MM-DD-HHmmssSSS")),r=a({name:"",email:"",phone:"",date:"",time:"",type:""}),U=a(),H=ue({name:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u59D3\u540D",trigger:"blur"}],email:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684email",trigger:"blur"}],phone:[{required:!0,message:"\u8ACB\u8F38\u5165\u60A8\u7684\u884C\u52D5\u96FB\u8A71",trigger:"blur"}]});var q=B.database().ref("orders/");const z=a({}),P=()=>{q.once("value",o=>{z.value=o.val()})};a({id:"",productName:"",price:"",count:"",total:""});const Q=a(),W=o=>{try{const u={NumberDate:_,form_name:M,form_email:S,form_phone:Y,form_time:N,form_type:O,AllTotal:w};ie.sendForm("service_v77i5ep","template_jqd9wwu",o.target,"aQibbyOFShdl2H3vj",u)}catch(u){console.log({error:u})}},j=()=>{F.value=!0},K=async(o,u)=>{if(!!u){var i=B.database().ref("user/"),t=B.database().ref("orders/");B.database().ref("orders/list/"),await u.validate((c,f)=>{c&&(i.push({orderUser:r.value}),t.push({orderNo:_.value,orderUser:r.value,time:x(new Date).format("YYYY-MM-DD HH:mm"),countTotal:b.value,list:s.value}),j(_.value,Q.value,r.value,b.value))})}},L=async()=>{const i="https://sheets.googleapis.com/v4/spreadsheets/19YWnM9PrXXEUOcT9zWkQYpiZ1W3o6i-UToEGsUPcFcU/values/\u5546\u54C1\u5217\u8868?alt=json&key=AIzaSyAieT4Folrx3Tsx-iZqzu_HyNBt349BMaw";await re.get(i).then(t=>{D.value=t.data.values;for(var c=0;c<=D.value.length;c++)for(var f=D.value[0],A=0;A<=f.length;A++)f[A]})},R=a(),X=o=>{var u=[];u[0]=o[0],console.log("\u6293\u5546\u54C1id",u[0]),R.value=u[0],u[1]=o[1],u[2]=o[2];var i=1;for(var t in s.value)if(s.value[t][1]===o[1]){i=s.value[t][3]+1;var c=s.value.indexOf(s.value[t]);s.value.splice(c,1)}u[3]=i,s.value.push(u),console.log("\u8A02\u8CFC\u55AE\u6578\u91CF",s.value.length),s.value.length>0&&(T.value=!0)},Z=o=>{o[3]++};a([]);const G=o=>{console.log("removeOne",o),o[3]--,o[3]<=0&&s.value.splice(o,1)},J=o=>{s.value.splice(o,1)},b=le(()=>{var o=0;for(var u in s.value)o+=s.value[u][3]*s.value[u][2];return o});return oe(()=>{L(),P()}),(o,u)=>{const i=h("el-input"),t=h("el-form-item"),c=h("el-form"),f=h("el-button"),A=h("el-dialog"),I=ne("modal");return p(),m("div",de,[e("ul",ce,[(p(!0),m(E,null,V(D.value,l=>(p(),m("li",{key:l},[e("a",{onClick:C=>X(l)},[(p(!0),m(E,null,V(l,C=>(p(),m("div",{key:C},[e("span",null,v(C),1)]))),128)),me,pe],8,ve)]))),128))]),$(e("div",null,[_e,e("div",fe,[n(c,{ref_key:"ruleFormRef",ref:U,onSubmit:y(W,["prevent"]),model:r.value,rules:H,"status-icon":""},{default:d(()=>[Ce,e("div",Fe,[e("div",Ae,[(p(!0),m(E,null,V(s.value,(l,C)=>(p(),m("div",{class:"cart",key:C},[e("div",he,[e("div",ge,v(l[1]),1),e("div",null,[e("span",De,v("$"+l[2]),1),g(" x "),e("span",ye,v(l[3]),1),e("span",Be,v("$"+l[2]*l[3]),1)]),e("div",be,[e("i",{onClick:y(k=>Z(l),["prevent"]),class:"fa-solid fa-circle-plus"},null,8,ke),e("i",{onClick:y(k=>G(l),["prevent"]),class:"fa-solid fa-circle-minus ml-2"},null,8,Ee),e("i",{onClick:y(k=>J(l),["prevent"]),class:"fa-solid fa-trash"},null,8,Ve)])]),e("input",{class:se("btn"+C+1),onClick:k=>K(l,U.value),type:"submit",value:"\u9001\u51FA\u8CFC\u7269\u8ECA"},null,10,we)]))),128))]),e("p",Te,[g("\u7E3D\u8A08\uFF1A "),e("span",null,[g(v("$"+te(b))+" ",1),$(e("input",Ue,null,512),[[I,w.value]])])]),e("div",$e,[xe,n(t,{style:{display:"none"}},{default:d(()=>[n(i,{name:"NumberDate",modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=l=>_.value=l),type:"text"},null,8,["modelValue"])]),_:1}),n(t,{label:"\u59D3\u540D",prop:"name"},{default:d(()=>[n(i,{name:"form_name",modelValue:r.value.name,"onUpdate:modelValue":u[1]||(u[1]=l=>r.value.name=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684email",type:"test"},null,8,["modelValue"])]),_:1}),n(t,{label:"email",prop:"email"},{default:d(()=>[n(i,{name:"form_email",modelValue:r.value.email,"onUpdate:modelValue":u[2]||(u[2]=l=>r.value.email=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684email",type:"email"},null,8,["modelValue"])]),_:1}),n(t,{label:"\u884C\u52D5\u96FB\u8A71",prop:"phone"},{default:d(()=>[n(i,{name:"form_phone",modelValue:r.value.phone,"onUpdate:modelValue":u[3]||(u[3]=l=>r.value.phone=l),placeholder:"\u8ACB\u8F38\u5165\u4F60\u7684\u884C\u52D5\u96FB\u8A71",type:"text"},null,8,["modelValue"])]),_:1})])])]),_:1},8,["onSubmit","model","rules"])])],512),[[ae,T.value]]),n(A,{class:"addmodal",modelValue:F.value,"onUpdate:modelValue":u[6]||(u[6]=l=>F.value=l),title:"\u8A02\u55AE\u8CC7\u8A0A",width:"30%",center:""},{footer:d(()=>[e("span",Ye,[n(f,{onClick:u[4]||(u[4]=l=>F.value=!1)},{default:d(()=>[g("\u95DC\u9589\u8996\u7A97")]),_:1}),n(f,{type:"primary",onClick:u[5]||(u[5]=l=>F.value=!1)},{default:d(()=>[g(" \u8A02\u55AE\u5B8C\u6210 ")]),_:1})])]),default:d(()=>[e("div",Me,[e("div",null,v(r.value.name)+" \u5148\u751F / \u5C0F\u59D0\uFF0C\u60A8\u597D\uFF1A ",1),e("div",null,"\u8A02\u55AE\u7DE8\u865F\uFF1A"+v(_.value),1),Se])]),_:1},8,["modelValue"])])}}});export{ze as default};
