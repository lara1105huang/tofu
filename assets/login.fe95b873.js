import{d as g,r as d,a as B,o as v,b as A,g as u,h as t,e as b,j as r,k as C,l as p,q as V}from"./index.dc664f82.js";import{a as k}from"./firebaseConfig.615b9655.js";const E={class:"login_page"},y=b("div",{class:"headline"},"\u8ACB\u5148\u767B\u5165",-1),h=g({__name:"login",setup(D){V();const n=d(),o=d({psd:"",email:""}),_=B({email:[{required:!0,message:"\u96FB\u5B50\u90F5\u4EF6\u4E0D\u80FD\u70BA\u7A7A",trigger:"blur"},{type:"email",message:"\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u96FB\u5B50\u90F5\u4EF6\u683C\u5F0F",trigger:["blur","change"]}],psd:[{required:!0,message:"\u5BC6\u78BC\u4E0D\u80FD\u70BA\u7A7A",trigger:"blur"}]}),f=l=>{!l||l.validate(e=>{if(e)k.signInWithEmailAndPassword().then(()=>{}).catch(a=>{alert(a.message)});else return console.log("error submit!"),!1})},c=l=>{!l||l.resetFields()};return v(()=>{}),(l,e)=>{const a=r("el-input"),i=r("el-form-item"),m=r("el-button"),F=r("el-form");return C(),A("div",E,[y,u(F,{class:"login_in",ref_key:"ruleFormRef",ref:n,model:o.value,"status-icon":"",rules:_},{default:t(()=>[u(i,{label:"\u5E33\u865F",prop:"email"},{default:t(()=>[u(a,{modelValue:o.value.email,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value.email=s)},null,8,["modelValue"])]),_:1}),u(i,{label:"Password",prop:"psd"},{default:t(()=>[u(a,{modelValue:o.value.psd,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value.psd=s),type:"password"},null,8,["modelValue"])]),_:1}),u(i,null,{default:t(()=>[u(m,{onClick:e[2]||(e[2]=s=>c(n.value))},{default:t(()=>[p("\u91CD\u7F6E")]),_:1}),u(m,{type:"primary",onClick:e[3]||(e[3]=s=>f(n.value))},{default:t(()=>[p("\u9001\u51FA")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});export{h as default};
