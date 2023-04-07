(function(){"use strict";var e={9624:function(e,o,n){var t=n(9242),l=n(3396);const s=(0,l._)("head",null,[(0,l._)("link",{rel:"stylesheet",href:"node_modules/bootstrap/dist/css/bootstrap.min.css"})],-1);function r(e,o,n,t,r,i){const a=(0,l.up)("UserSkills");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("div",null,[(0,l.Wm)(a)])],64)}var i=n(7139);const a=(0,l._)("label",{for:"username-input"},"Enter your Torre username:",-1),u={key:0},c={key:1},d={key:2},f=["onClick"],h={key:3},k={key:0};function p(e,o,n,s,r,p){const m=(0,l.up)("SkillInfoModal");return(0,l.wg)(),(0,l.iD)("div",null,[a,(0,l.wy)((0,l._)("input",{type:"text",id:"username-input","onUpdate:modelValue":o[0]||(o[0]=e=>r.username=e)},null,512),[[t.nr,r.username]]),(0,l._)("button",{onClick:o[1]||(o[1]=(...e)=>p.getSkills&&p.getSkills(...e))},"Get Skills"),r.skills.length?((0,l.wg)(),(0,l.iD)("h1",u,(0,i.zw)(r.personInfo.name),1)):(0,l.kq)("",!0),r.skills.length?((0,l.wg)(),(0,l.iD)("h2",c,"Percent complete user profile: "+(0,i.zw)(r.personInfo.completion),1)):(0,l.kq)("",!0),r.skills.length?((0,l.wg)(),(0,l.iD)("ul",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.skills,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id},[(0,l._)("b",null,(0,i.zw)(e.name)+":",1),(0,l._)("button",{onClick:o=>p.showSkillsInfo(e)},"Show Skills Info",8,f)])))),128))])):((0,l.wg)(),(0,l.iD)("div",h,[r.botonBoolean?((0,l.wg)(),(0,l.iD)("p",k,"No skills or user found")):(0,l.kq)("",!0)])),(0,l.Wm)(m,{selectedSkill:r.selectedSkill,show:r.showModal,onClose:p.closeSkillsInfo},null,8,["selectedSkill","show","onClose"])])}var m=n(4161);const w=e=>((0,l.dD)("data-v-3ba31235"),e=e(),(0,l.Cn)(),e),v={key:0},b=w((()=>(0,l._)("div",{class:"modal-overlay"},null,-1))),g={class:"modal-dialog modal-o",role:"document"},_={class:"modal-content"},y={class:"modal-header"},S={class:"modal-title"},O={class:"text-r"},I={class:"modal-body"},x=w((()=>(0,l._)("hr",null,null,-1))),D=w((()=>(0,l._)("h6",null,"The user has this information related to the skill: ",-1))),C=w((()=>(0,l._)("hr",null,null,-1))),M={class:"modal-footer"};function U(e,o,n,t,s,r){const a=(0,l.up)("h7");return n.show?((0,l.wg)(),(0,l.iD)("div",v,[b,(0,l._)("div",g,[(0,l._)("div",_,[(0,l._)("div",y,[(0,l._)("h4",S,[(0,l.Uk)("SKILL :"),(0,l._)("h4",O,(0,i.zw)(n.selectedSkill.name),1)])]),(0,l._)("div",I,[x,D,C,(0,l._)("p",null,[(0,l.Wm)(a,{class:"text-r"},{default:(0,l.w5)((()=>[(0,l.Uk)("Proficiency: ")])),_:1}),(0,l.Uk)((0,i.zw)(n.selectedSkill.proficiency),1)]),(0,l._)("p",null,[(0,l.Wm)(a,{class:"text-r"},{default:(0,l.w5)((()=>[(0,l.Uk)("Weight:")])),_:1}),(0,l.Uk)(" "+(0,i.zw)(n.selectedSkill.weight),1)]),(0,l._)("p",null,[(0,l.Wm)(a,{class:"text-r"},{default:(0,l.w5)((()=>[(0,l.Uk)("Recomendations:")])),_:1}),(0,l.Uk)(" "+(0,i.zw)(n.selectedSkill.recommendations),1)])]),(0,l._)("div",M,[(0,l._)("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal",onClick:o[0]||(o[0]=(...e)=>r.close&&r.close(...e))},"Close")])])])])):(0,l.kq)("",!0)}var j={props:{show:Boolean,selectedSkill:Object},methods:{close(){this.$emit("close")}}},z=n(89);const q=(0,z.Z)(j,[["render",U],["__scopeId","data-v-3ba31235"]]);var P=q,T=(n(806),{data(){return{username:"",skills:[],showModal:!1,selectedSkill:{},personInfo:{},botonBoolean:!1}},methods:{getSkills(){m.Z.get(`https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/${this.username}`,{headers:{"x-requested-with":"XMLHttpRequest"}}).then((e=>{this.skills=e.data.strengths,this.personInfo=e.data.person,this.botonBoolean=!0})).catch((e=>{console.error(e)}))},showSkillsInfo(e){this.selectedSkill=e,this.showModal=!0,console.log(e)},closeSkillsInfo(){this.selectedSkill={},this.showModal=!1}},components:{SkillInfoModal:P}});const W=(0,z.Z)(T,[["render",p]]);var B=W,Z={name:"App",components:{UserSkills:B}};const H=(0,z.Z)(Z,[["render",r]]);var L=H;n(7154);(0,t.ri)(L).mount("#app")}},o={};function n(t){var l=o[t];if(void 0!==l)return l.exports;var s=o[t]={exports:{}};return e[t].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(o,t,l,s){if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],l=e[c][1],s=e[c][2];for(var i=!0,a=0;a<t.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](t[a])}))?t.splice(a--,1):(i=!1,s<r&&(r=s));if(i){e.splice(c--,1);var u=l();void 0!==u&&(o=u)}}return o}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,l,s]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var l,s,r=t[0],i=t[1],a=t[2],u=0;if(r.some((function(o){return 0!==e[o]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(a)var c=a(n)}for(o&&o(t);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},t=self["webpackChunkfronttesttorre"]=self["webpackChunkfronttesttorre"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(9624)}));t=n.O(t)})();
//# sourceMappingURL=app.8c487c7b.js.map