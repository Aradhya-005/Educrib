import{g as n,j as d,_ as p,o as u,c,b as e,d as a,v as l,w as m}from"./index-BUUeTdJ4.js";const h={data(){return{email:"",password:""}},methods:{register(){const i=n();d(i,this.email,this.password).then(()=>{alert("Successfully registered! Please login."),this.$router.push("/SignIn")}).catch(s=>{alert(s.message)})}}},_={class:"sign-up"},g=e("h1",null,"Sign Up",-1),w={class:"input-group"},f=e("label",{for:"email"},"Email:",-1),v={class:"input-group"},S=e("label",{for:"password"},"Password:",-1),U=e("button",{class:"SignUp",type:"submit"},"Sign Up",-1);function b(i,s,E,x,r,o){return u(),c("div",_,[g,e("form",{onSubmit:s[2]||(s[2]=m((...t)=>o.register&&o.register(...t),["prevent"]))},[e("div",w,[f,a(e("input",{placeholder:"Enter email",type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>r.email=t),required:""},null,512),[[l,r.email]])]),e("div",v,[S,a(e("input",{placeholder:"Enter password",type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=t=>r.password=t),required:""},null,512),[[l,r.password]])]),U],32)])}const V=p(h,[["render",b]]);export{V as default};
