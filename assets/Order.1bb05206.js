import{d as m,r as n,o as F,b as d,e,s as C,h as f,x as A,F as B,f as D,t as s,y as b,j as g,k as l,l as a,q as E}from"./index.4ad4940a.js";import{f as k}from"./firebaseConfig.615b9655.js";const y={class:"tofu-area"},x={class:"single-order-list"},N={class:"name"},T={class:"no"},L=e("span",null,"\u60A8\u7684\u8A02\u55AE\u8A02\u55AE\u865F\u78BC:",-1),U={class:"row"},V={class:"time"},q=e("span",null,"\u8A02\u8CFC\u6642\u9593:",-1),w={class:"phone"},O=e("span",null,"\u884C\u52D5\u96FB\u8A71:",-1),R={class:"mail"},j=e("span",null,"\u96FB\u5B50\u4FE1\u7BB1:",-1),M={class:"order_area"},S=e("div",{class:"order_area_title"},[e("b",null,"\u8A02\u8CFC\u5167\u5BB9")],-1),z={class:"order-list"},G=e("thead",null,[e("tr",null,[e("th",null,"\u5546\u54C1\u540D\u7A31"),e("th",null,"\u55AE\u50F9"),e("th",null,"\u6578\u91CF"),e("th",null,"\u5408\u8A08")])],-1),H={class:"countTotal"},P=m({__name:"Order",setup(I){E();const c=b();var v=k.database().ref("orders/");const o=n({}),u=n({}),i=n(),h=()=>{i.value=c.params.id,v.orderByChild("orderNo").equalTo(i.value).once("value",function(_){_.forEach(r=>{o.value=r.val(),console.log("orderDetail.value",u.value),u.value=r.val().list,console.log("orderList.value",u.value)})})};return F(()=>{console.log("\u7372\u53D6\u53C3\u6578idroute.params.id",c.params.id),h()}),(_,r)=>{const p=g("dir");return l(),d("div",y,[e("div",x,[o.value.countTotal>0?(l(),C(p,{key:0,class:"detail"},{default:f(()=>[e("div",N,s(o.value.orderUser.name)+"\uFF0C\u60A8\u597D\uFF1A",1),e("div",T,[e("b",null,[L,a(s(o.value.orderNo),1)])]),e("div",U,[e("div",V,[q,a(s(o.value.time),1)]),e("div",w,[O,a(s(o.value.orderUser.phone),1)]),e("div",R,[j,a(s(o.value.orderUser.email),1)])])]),_:1})):A("",!0),e("div",M,[S,e("table",z,[G,e("tbody",null,[(l(!0),d(B,null,D(u.value,t=>(l(),d("tr",{key:t},[e("td",null,s(t[1]),1),e("td",null,s(t[2]),1),e("td",null,s(t[3]),1),e("td",null,s(t[2]*t[3]),1)]))),128))])]),e("div",H,"\u7E3D\u91D1\u984D\uFF1A"+s(o.value.countTotal),1)])])])}}});export{P as default};
