"use strict";(self["webpackChunkimathas_assess2"]=self["webpackChunkimathas_assess2"]||[]).push([[924],{7429:function(e,t,s){s.r(t),s.d(t,{default:function(){return fe}});var n=s(6252),i=s(9963),o=s(3577);const l={class:"home"},r={key:1,class:"subheader"},a={key:0,id:"livepoll_qsettings",style:{"flex-grow":"1"}},u={key:1,style:{"flex-grow":"1"}},h={key:2},c=["aria-label"],p={key:1,class:"questionpane"};function d(e,t,s,d,w,m){const v=(0,n.up)("assess-header"),f=(0,n.up)("livepoll-nav"),q=(0,n.up)("timer"),y=(0,n.up)("livepoll-settings"),g=(0,n.up)("question"),k=(0,n.up)("livepoll-results");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(v),m.isTeacher?((0,n.wg)(),(0,n.j4)(f,{key:0,qn:m.curqn,onSelectq:m.selectQuestion,onOpenq:m.openInput,onCloseq:m.closeInput,onNewversion:m.newVersion},null,8,["qn","onSelectq","onOpenq","onCloseq","onNewversion"])):(0,n.kq)("",!0),m.curstate>0&&m.curqn>-1&&(m.isTeacher||m.timelimit>0)?((0,n.wg)(),(0,n.iD)("div",r,[m.isTeacher?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=t=>e.showQuestion=t)},null,512),[[i.e8,e.showQuestion]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_question")),1)]),(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=t=>e.showResults=t)},null,512),[[i.e8,e.showResults]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_results")),1)]),(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.showAnswers=t),onChange:t[3]||(t[3]=(...e)=>m.updateShowAnswers&&m.updateShowAnswers(...e))},null,544),[[i.e8,e.showAnswers]]),(0,n.Uk)(" "+(0,o.zw)(m.showAnswersLabel),1)])])):((0,n.wg)(),(0,n.iD)("div",u)),m.timelimit>0&&m.starttime>0?((0,n.wg)(),(0,n.j4)(q,{key:2,end:1e3*(m.starttime+m.timelimit),total:m.timelimit},null,8,["end","total"])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),!m.isTeacher&&m.curstate>0?((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("h2",null,(0,o.zw)(e.$t("question_n",{n:m.curqn+1})),1)])):(0,n.kq)("",!0),(0,n._)("div",{class:"scrollpane","aria-label":e.$t("regions.questions")},[!m.isTeacher||0!==m.curstate&&-1!==m.curqn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(y,{key:0,class:"questionpane"})),!m.isTeacher&&m.curstate<2?((0,n.wg)(),(0,n.iD)("div",p,(0,o.zw)(e.$t("livepoll.waiting")),1)):(0,n.kq)("",!0),m.curqn>=0&&(m.isTeacher&&m.curstate>0||!m.isTeacher&&m.curstate>1)?(0,n.wy)(((0,n.wg)(),(0,n.j4)(g,{key:2,qn:m.curqn,active:!0,state:m.curstate,seed:m.curseed},null,8,["qn","state","seed"])),[[i.F8,e.showQuestion]]):(0,n.kq)("",!0),m.isTeacher?((0,n.wg)(),(0,n.j4)(k,{showresults:e.showResults,showans:4===m.curstate,qn:m.curqn,key:m.curqn+"-"+m.curseed},null,8,["showresults","showans","qn"])):(0,n.kq)("",!0)],8,c)])}var w=s(9683);const m={class:"subheader"},v=["aria-label"],f=["disabled","aria-label"],q=["disabled","aria-label"],y={style:{"flex-grow":"1"}};function g(e,t,s,i,l,r){const a=(0,n.up)("menu-button"),u=(0,n.up)("icons");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",{class:"flexrow",style:{"flex-grow":"1"},role:"navigation","aria-label":e.$t("regions.qnav")},[(0,n.Wm)(a,{id:"qnav",options:r.navOptions,selected:r.dispqn,searchby:"dispqn"},{default:(0,n.w5)((({option:e})=>[(0,n.Uk)((0,o.zw)(e.title),1)])),_:1},8,["options","selected"]),r.showNextPrev?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>r.selectQuestion(r.dispqn-1)),disabled:r.dispqn<=0,class:"secondarybtn",id:"qprev","aria-label":e.$t("previous")},[(0,n.Wm)(u,{name:"left"})],8,f)):(0,n.kq)("",!0),r.showNextPrev?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[1]||(t[1]=e=>r.selectQuestion(r.dispqn+1)),disabled:r.dispqn>=r.navOptions.length-1,class:"secondarybtn",id:"qnext","aria-label":e.$t("next")},[(0,n.Wm)(u,{name:"right"})],8,q)):(0,n.kq)("",!0)],8,v),(0,n._)("div",y,[2===r.curstate&&r.dispqn>0?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"primary",onClick:t[2]||(t[2]=(...e)=>r.closeQuestion&&r.closeQuestion(...e))},(0,o.zw)(e.$t("livepoll.close_input")),1)):r.curstate>0&&r.dispqn>0?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"primary",onClick:t[3]||(t[3]=(...e)=>r.openQuestion&&r.openQuestion(...e))},(0,o.zw)(e.$t("livepoll.open_input")),1)):(0,n.kq)("",!0),(1==r.curstate||r.curstate>2)&&r.dispqn>0?((0,n.wg)(),(0,n.iD)("button",{key:2,class:"secondary",onClick:t[4]||(t[4]=(...e)=>r.newVersion&&r.newVersion(...e))},[(0,n.Wm)(u,{name:"retake"}),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.new_version")),1)])):(0,n.kq)("",!0)]),(0,n._)("div",null,(0,o.zw)(r.studentCount),1)])}s(560);var k=s(8584),_=s(1038),I=s(9273),b={name:"LivepollNav",props:["qn"],components:{MenuButton:k.Z,Icons:_.Z},computed:{navOptions(){var e=[];e.push({onclick:()=>this.$emit("selectq",0),title:this.$t("livepoll.settings"),dispqn:0});for(const t in I.h.assessInfo.questions){const s=parseInt(t)+1;e.push({onclick:()=>this.$emit("selectq",s),title:this.$t("question_n",{n:s}),dispqn:s})}return e},showNextPrev(){return Object.keys(this.navOptions).length>1},dispqn(){return parseInt(this.qn)+1},curstate(){return I.h.assessInfo.livepoll_status.curstate},studentCount(){return this.$tc("livepoll.stucnt",I.h.livepollStuCnt)}},methods:{selectQuestion(e){this.$emit("selectq",e)},openQuestion(){this.$emit("openq")},closeQuestion(){this.$emit("closeq")},newVersion(){this.$emit("newversion")}}},x=s(3744);const P=(0,x.Z)(b,[["render",g]]);var T=P;const O=(0,n._)("br",null,null,-1),L=(0,n._)("br",null,null,-1),S=(0,n._)("br",null,null,-1),$=(0,n._)("br",null,null,-1);function R(e,t,s,l,r,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h2",null,(0,o.zw)(e.$t("livepoll.settings")),1),(0,n._)("p",null,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=e=>a.showQuestionDefault=e)},null,512),[[i.e8,a.showQuestionDefault]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_question_default")),1)]),O,(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=e=>a.showResultsLiveDefault=e)},null,512),[[i.e8,a.showResultsLiveDefault]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_results_live_default")),1)]),L,(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>a.showResultsAfter=e)},null,512),[[i.e8,a.showResultsAfter]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_results_after")),1)]),S,(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>a.showAnswersAfter=e)},null,512),[[i.e8,a.showAnswersAfter]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.show_answers_after")),1)]),$,(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>a.useTimer=e)},null,512),[[i.e8,a.useTimer]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.use_timer")),1)]),(0,n.wy)((0,n._)("span",null,[(0,n.wy)((0,n._)("input",{type:"text",size:"3","onUpdate:modelValue":t[5]||(t[5]=e=>a.questionTimelimit=e)},null,512),[[i.nr,a.questionTimelimit]]),(0,n.Uk)(" "+(0,o.zw)(e.$t("livepoll.seconds")),1)],512),[[i.F8,a.useTimer]])])])}var D={name:"LivepollSettings",computed:{showQuestionDefault:{set(e){I.h.livepollSettings["showQuestionDefault"]=e},get(){return I.h.livepollSettings.showQuestionDefault}},showResultsLiveDefault:{set(e){I.h.livepollSettings["showResultsLiveDefault"]=e},get(){return I.h.livepollSettings.showResultsLiveDefault}},showResultsAfter:{set(e){I.h.livepollSettings["showResultsAfter"]=e},get(){return I.h.livepollSettings.showResultsAfter}},showAnswersAfter:{set(e){I.h.livepollSettings["showAnswersAfter"]=e},get(){return I.h.livepollSettings.showAnswersAfter}},useTimer:{set(e){I.h.livepollSettings["useTimer"]=e},get(){return I.h.livepollSettings.useTimer}},questionTimelimit:{set(e){I.h.livepollSettings["questionTimelimit"]=e},get(){return I.h.livepollSettings.questionTimelimit}}}};const C=(0,x.Z)(D,[["render",R]]);var A=C;const V={key:0};function j(e,t,s,l,r,a){const u=(0,n.up)("livepoll-results-choices"),h=(0,n.up)("livepoll-results-general");return a.qinfo&&a.qinfo.answeights?((0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("p",null,(0,o.zw)(e.$tc("livepoll.numresults",a.numResults)),1),(0,n.wy)((0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.results,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:s.qn+"-"+t,class:"med-below"},[e.hasOwnProperty("choices")?((0,n.wg)(),(0,n.j4)(u,{key:0,results:e,showans:s.showans},null,8,["results","showans"])):((0,n.wg)(),(0,n.j4)(h,{key:1,results:e,showans:s.showans,itemid:s.qn+"-"+t},null,8,["results","showans","itemid"]))])))),128))],512),[[i.F8,s.showresults&&a.numResults>0]])])):(0,n.kq)("",!0)}const z={class:"LPres",ref:"main"},N=(0,n._)("caption",{class:"sr-only"},"Results",-1),F={style:{"min-width":"10em"}},U=["innerHTML"],Q={class:"LPresbarwrap"},W={class:"LPresval"};function Z(e,t,s,i,l,r){return(0,n.wg)(),(0,n.iD)("table",z,[N,(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,(0,o.zw)(e.$t("livepoll.answer")),1),(0,n._)("th",F,(0,o.zw)(e.$t("livepoll.frequency")),1)])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.results.choices,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t,class:(0,o.C_)([s.showans?s.results.scoredata[t]>0?"LPshowcorrect":"LPshowwrong":""])},[(0,n._)("td",{innerHTML:e},null,8,U),(0,n._)("td",null,[(0,n._)("span",Q,[(0,n._)("span",{class:"LPresbar",style:(0,o.j5)({width:Math.round(100*s.results.datatots[t]/s.results.maxfreq)+"%"})},[(0,n._)("span",W,(0,o.zw)(s.results.datatots[t]),1)],4)])])],2)))),128))])],512)}var E={name:"LivepollResultsChoices",props:["results","showans"],methods:{onUpdate(){this.$nextTick((()=>{setTimeout(window.drawPics,100),window.rendermathnode(this.$refs.main)}))}},mounted(){this.onUpdate()},watch:{results:function(e,t){this.onUpdate()}}};const H=(0,x.Z)(E,[["render",Z]]);var M=H;const Y={key:0,class:"LPdrawgrid",ref:"main"},K=["id","width","height"],J=["id"],G={key:1,class:"LPres",ref:"main"},B=(0,n._)("caption",{class:"sr-only"},"Results",-1),X={style:{"min-width":"10em"}},ee={key:0},te=["id","width","height"],se=["id"],ne={key:1},ie={class:"LPresbarwrap"},oe={class:"LPresval"};function le(e,t,s,i,l,r){return"draw"===s.results.qtype&&0===s.results.initpts[11]?((0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.sortedKeys,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:(0,o.C_)([s.showans?s.results.scoredata[e]>0?s.results.scoredata[e]<.99?"LPshowpartial":"LPshowcorrect":"LPshowwrong":""])},[(0,n._)("canvas",{class:"drawcanvas",id:"canvasLP"+s.itemid+"-"+t,width:s.results.initpts[6],height:s.results.initpts[7]},null,8,K),(0,n._)("input",{type:"hidden",id:"qnLP"+s.itemid+"-"+t},null,8,J)],2)))),128))],512)):((0,n.wg)(),(0,n.iD)("table",G,[B,(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,(0,o.zw)(e.$t("livepoll.answer")),1),(0,n._)("th",X,(0,o.zw)(e.$t("livepoll.frequency")),1)])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.sortedKeys,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:e,class:(0,o.C_)([s.showans?s.results.scoredata[e]>0?s.results.scoredata[e]<.99?"LPshowpartial":"LPshowcorrect":"LPshowwrong":""])},["draw"===s.results.qtype?((0,n.wg)(),(0,n.iD)("td",ee,[(0,n._)("canvas",{class:"drawcanvas",id:"canvasLP"+s.itemid+"-"+t,width:s.results.initpts[6],height:s.results.initpts[7]},null,8,te),(0,n._)("input",{type:"hidden",id:"qnLP"+s.itemid+"-"+t},null,8,se)])):((0,n.wg)(),(0,n.iD)("td",ne,(0,o.zw)(e),1)),(0,n._)("td",null,[(0,n._)("span",ie,[(0,n._)("span",{class:"LPresbar",style:(0,o.j5)({width:Math.round(100*s.results.datatots[e]/s.results.maxfreq)+"%"})},[(0,n._)("span",oe,(0,o.zw)(s.results.datatots[e]),1)],4)])])],2)))),128))])],512))}s(1719);var re={name:"LivepollResultsGeneral",props:["results","showans","itemid"],computed:{sortedKeys(){const e=this.results.datatots,t=Object.keys(e);return t.sort((function(t,s){return e[s]-e[t]}))}},methods:{onUpdate(){if("draw"===this.results.qtype){for(let e=0;e<this.sortedKeys.length;e++){let t=this.sortedKeys[e].replace(/\(/g,"[").replace(/\)/g,"]");t=t.split(";;"),""!==t[0]&&(t[0]="["+t[0].replace(/;/g,"],[")+"]"),t="[["+t.join("],[")+"]]";const s="LP"+this.itemid+"-"+e;window.canvases[s]=this.results.initpts.slice(),window.canvases[s].unshift(s),window.drawla[s]=JSON.parse(t)}this.$nextTick((()=>{for(let e=0;e<this.sortedKeys.length;e++)window.imathasDraw.initCanvases("LP"+this.itemid+"-"+e)}))}this.$nextTick((()=>{setTimeout(window.drawPics,100),window.rendermathnode(this.$refs.main)}))}},mounted(){this.onUpdate()},watch:{results:function(e,t){this.onUpdate()}}};const ae=(0,x.Z)(re,[["render",le]]);var ue=ae,he={name:"LivepollResults",props:["qn","showresults","showans"],components:{LivepollResultsChoices:M,LivepollResultsGeneral:ue},computed:{qinfo(){return I.h.assessInfo.questions[this.qn]},numResults(){return I.h.livepollResults.hasOwnProperty(this.qn)?Object.keys(I.h.livepollResults[this.qn]).length:0},params(){const e=[];for(let t=0;t<this.qinfo.answeights.length;t++)0===t&&this.qinfo.jsparams.hasOwnProperty(this.qn)?e[t]=this.qinfo.jsparams[this.qn]:e[t]=this.qinfo.jsparams[1e3*(this.qn+1)+t];return e},results(){const e=[];for(let t=0;t<this.qinfo.answeights.length;t++){const s={},n={};if(this.params[t].hasOwnProperty("livepoll_choices"))for(let e=0;e<this.params[t].livepoll_choices.length;e++)s[e]=0,n[e]=0;const i=this.params[t].qtype,o="choices"===i||"multans"===i;if(o){let e;e="choices"===i?this.params[t].livepoll_ans.toString().split(/\s+or\s+/):this.params[t].livepoll_ans.toString().split(/\s*,\s*/);for(let t=0;t<e.length;t++)n[e[t]]=1}const l=[];let r;for(const e in I.h.livepollResults[this.qn]){let a=I.h.livepollResults[this.qn][e].ans[t];a=o?a.toString().split("|"):i.match(/calc/)||"numfunc"===i?["`"+a+"`"]:[a],"draw"===i&&(r=this.condenseDraw(a[0]),l.hasOwnProperty(r)||(l[r]=a[0]));for(let o=0;o<a.length;o++)"draw"===i&&s.hasOwnProperty(l[r])?s[l[r]]+=1:s.hasOwnProperty(a[o])?s[a[o]]+=1:(s[a[o]]=1,n[a[o]]=I.h.livepollResults[this.qn][e].score[t])}let a=1;for(const e in s)s[e]>a&&(a=s[e]);if(e[t]={datatots:s,scoredata:n,maxfreq:a,qtype:i},o&&(e[t].choices=this.params[t].livepoll_choices),"draw"===i){const s=this.params[t].livepoll_drawinit;for(let e=1;e<Math.min(11,s.length);e++)s[e]=Number(s[e]);e[t].initpts=s}}return e}},methods:{condenseDraw(e){if(""===e)return e;var t=e.replace(/\(/g,"[").replace(/\)/g,"]");t=t.split(";;"),""!==t[0]&&(t[0]="["+t[0].replace(/;/g,"],[")+"]"),t="[["+t.join("],[")+"]]";var s,n,i,o,l=JSON.parse(t);if(l[0].length>0)for(let r=0;r<l[0].length;r++)2===l[0][r].length&&l[0][r].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]}));else if(l.length>4&&l[4].length>0)return e;if(l[1].length>0&&l[1].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]})),l[2].length>0&&l[2].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]})),l.length>3&&l[3].length>0)for(let r=0;r<l[3].length;r++)s=l[3][r],5===s[0]?(s[1]===s[3]?n=[5,"x",s[1]]:(i=(s[4]-s[2])/(s[3]-s[1]),o=s[2]-i*s[1],n=[5,i.toFixed(4),o.toFixed(2)]),l[3][r]=n):5.2===s[0]?(s[1]===s[3]?n=[5.2,"x",s[1],s[2]]:(i=(s[4]-s[2])/(s[3]-s[1]),n=[5.2,i.toFixed(4),s[1],s[2]]),l[3][r]=n):5.3===s[0]?(n=s[1]<s[3]||s[1]===s[3]&&s[2]<s[4]?[5.3,s[1],s[2],s[3],s[4]]:[5.3,s[3],s[4],s[1],s[2]],l[3][r]=n):6===s[0]?(s[1]===s[3]?n=[6,"x",s[1],s[2]]:(i=(s[4]-s[2])/((s[3]-s[1])*(s[3]-s[1])),n=[6,i.toFixed(4),s[1],s[2]]),l[3][r]=n):6.5===s[0]?(s[1]===s[3]?n=[6.5,"x",s[1],s[2]]:(o=s[3]>s[1]?1:-1,i=(s[4]-s[2])/Math.sqrt(Math.abs(s[3]-s[1])),n=[6.5,i.toFixed(4),o,s[1],s[2]]),l[3][r]=n):8===s[0]&&(s[1]===s[3]?n=[8,"x",s[1],s[2]]:(i=(s[4]-s[2])/Math.abs(s[3]-s[1]),n=[8,i.toFixed(4),s[1],s[2]]),l[3][r]=n);return JSON.stringify(l)}}};const ce=(0,x.Z)(he,[["render",j]]);var pe=ce,de=s(3196),we=s(7575),me={name:"livepoll",components:{LivepollNav:T,Question:de.Z,LivepollSettings:A,LivepollResults:pe,AssessHeader:w.Z,Timer:we.Z},data:function(){return{showQuestion:!0,showResults:!0,showAnswers:!0,onSettings:!1,livepollTimer:null,socket:null}},computed:{isTeacher(){return I.h.assessInfo.is_teacher},curqn(){return this.onSettings?-1:parseInt(I.h.assessInfo.livepoll_status.curquestion)-1},curseed(){return I.h.assessInfo.livepoll_status.seed},curstate(){return I.h.assessInfo.livepoll_status.curstate},starttime(){return I.h.assessInfo.livepoll_status.startt},timelimit(){return I.h.livepollSettings.useTimer?parseInt(I.h.livepollSettings.questionTimelimit):I.h.assessInfo.livepoll_status.timelimit?parseInt(I.h.assessInfo.livepoll_status.timelimit):0},showAnswersLabel(){return this.curstate<3?this.$t("livepoll.show_answers_after"):this.$t("livepoll.show_answers")}},methods:{updateUsercount(e){I.h.livepollStuCnt=e.cnt,0===e.teachcnt&&(I.h.assessInfo.livepoll_status.curstate=0)},addResult(e){if(e.score=JSON.parse(e.score),e.ans=JSON.parse(e.ans),I.h.livepollResults.hasOwnProperty(this.curqn))I.h.livepollResults[this.curqn][e.user]=e;else{const t={};t[this.curqn]={},t[this.curqn][e.user]=e,I.h.livepollResults=Object.assign({},I.h.livepollResults,t)}},showHandler(e){if("showq"===e.action){if(I.N.clearInitValue(e.qn),-1!==e.startt.indexOf("-")){const t=e.startt.split("-");e.startt=t[0],e.timelimit=t[1]}else e.timelimit=0;I.h.assessInfo["livepoll_status"]={curstate:2,curquestion:parseInt(e.qn)+1,seed:parseInt(e.seed),startt:parseInt(e.startt),timelimit:parseInt(e.timelimit)}}else I.h.assessInfo["livepoll_status"]=Object.assign(I.h.assessInfo.livepoll_status,{curquestion:parseInt(e.qn)+1,curstate:parseInt(e.action),timelimit:0})},selectQuestion(e){clearTimeout(this.livepollTimer);const t=parseInt(e)-1;if(-1!==t){if(this.onSettings=!1,t!==this.curqn){this.showQuestion=I.h.livepollSettings.showQuestionDefault,this.showResults=I.h.livepollSettings.showResultsLiveDefault,this.showAnswers=I.h.livepollSettings.showAnswersAfter;let s=1;I.h.livepollResults[t]&&Object.keys(I.h.livepollResults[t]).length>0&&(s=this.showAnswers?4:3),t>=0&&I.N.setLivepollStatus({newquestion:e,newstate:s})}}else this.onSettings=!0},openInput(){I.N.setLivepollStatus({newquestion:this.curqn+1,newstate:2,timelimit:this.timelimit}),this.timelimit>0&&(this.livepollTimer=window.setTimeout((()=>this.closeInput()),1e3*this.timelimit))},closeInput(){clearTimeout(this.livepollTimer);const e=this.showAnswers?4:3;I.h.livepollSettings.showResultsAfter&&(this.showResults=!0),I.N.setLivepollStatus({newquestion:this.curqn+1,newstate:e})},newVersion(){I.N.setLivepollStatus({newquestion:this.curqn+1,newstate:1,forceregen:1}),I.h.livepollResults.hasOwnProperty(this.curqn)&&delete I.h.livepollResults[this.curqn]},updateShowAnswers(){if(this.curstate>2){const e=this.showAnswers?4:3;I.N.setLivepollStatus({newquestion:this.curqn+1,newstate:e})}}},mounted(){const e=I.h.assessInfo.livepoll_server,t=I.h.assessInfo.livepoll_data;let s="room="+t.room+"&now="+t.now;t.sig&&(s+="&sig="+encodeURIComponent(t.sig)),this.socket=window.io("https://"+e+":3000",{query:s}),this.socket.off(),this.socket.on("livepoll usercount",(e=>this.updateUsercount(e))),I.h.assessInfo.is_teacher?this.socket.on("livepoll qans",(e=>this.addResult(e))):this.socket.on("livepoll show",(e=>this.showHandler(e)))},created(){0===I.h.assessInfo.livepoll_status.curquestion&&this.isTeacher&&(this.onSettings=!0)}};const ve=(0,x.Z)(me,[["render",d]]);var fe=ve},3365:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});var n=s(6252),i=s(9963),o=s(3577);const l={class:"home"},r=["aria-label"],a={id:"playerwrapper"},u=(0,n._)("div",{id:"player"},null,-1),h=[u],c=["aria-hidden"];function p(e,t,s,u,p,d){const w=(0,n.up)("assess-header"),m=(0,n.up)("videocued-result-nav"),v=(0,n.up)("videocued-nav"),f=(0,n.up)("intro-text"),q=(0,n.up)("inter-question-text-list"),y=(0,n.up)("full-question-header"),g=(0,n.up)("question");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("a",{href:"#",class:"sr-only",onClick:t[0]||(t[0]=(0,i.iM)((t=>e.$refs.scrollpane.focus()),["prevent"]))},(0,o.zw)(e.$t("jumptocontent")),1),(0,n.Wm)(w),(0,n.Wm)(v,{cue:e.cue,toshow:e.toshow,showfollowup:e.showfolloup,onJumpto:d.jumpTo},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{class:"med-left",qn:d.qn,cue:e.cue,onJumpto:d.jumpTo,onAddfollowup:d.addShowFollowup},null,8,["qn","cue","onJumpto","onAddfollowup"])])),_:1},8,["cue","toshow","showfollowup","onJumpto"]),(0,n._)("div",{class:"scrollpane",role:"region",ref:"scrollpane",tabindex:"-1","aria-label":e.$t("regions.q_and_vid")},[(0,n.Wm)(f,{active:-1==e.cue,html:d.intro,key:"-1"},null,8,["active","html"]),(0,n.wy)((0,n._)("div",a,[(0,n._)("div",{class:"video-wrapper-wrapper",style:(0,o.j5)({"max-width":e.videoWidth+"px"})},[(0,n._)("div",{class:"fluid-width-video-wrapper",style:(0,o.j5)({"padding-bottom":e.aspectRatioPercent+"%"})},h,4)],4)],512),[[i.F8,e.cue>-1&&-1===d.qn]]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.questionArray,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,"aria-hidden":e!=d.qn,class:(0,o.C_)({inactive:e!=d.qn})},[(0,n.Wm)(q,{pos:"before",qn:e,active:e==d.qn,textlist:d.textList,lastq:d.lastQ},null,8,["qn","active","textlist","lastq"]),(0,n.wy)((0,n.Wm)(y,{qn:e},null,8,["qn"]),[[i.F8,e==d.qn]]),(0,n.Wm)(g,{qn:e,active:e==d.qn,getwork:1},null,8,["qn","active"]),(0,n.Wm)(q,{pos:"after",qn:e,active:e==d.qn,textlist:d.textList,lastq:d.lastQ},null,8,["qn","active","textlist","lastq"])],10,c)))),128))],8,r)])}s(560);var d=s(9683);const w=["aria-label"];function m(e,t,s,i,o,l){const r=(0,n.up)("videocued-nav-list-item"),a=(0,n.up)("menu-button");return(0,n.wg)(),(0,n.iD)("div",{class:"subheader",role:"navigation","aria-label":e.$t("regions.qvidnav")},[(0,n.Wm)(a,{id:"qnav",options:l.navOptions,selected:l.curOption,searchby:"title"},{default:(0,n.w5)((({option:e,selected:t})=>[(0,n.Wm)(r,{option:e,selected:t},null,8,["option","selected"])])),_:1},8,["options","selected"]),(0,n.WI)(e.$slots,"default")],8,w)}var v=s(8584);const f={class:"flex-nowrap-center"},q={class:"qname-wrap"},y=["title"],g={key:0,class:"redoicon"},k={key:1,class:"redoicon"};function _(e,t,s,i,l,r){const a=(0,n.up)("icons");return(0,n.wg)(),(0,n.iD)("span",f,[(0,n._)("span",q,[(0,n.Wm)(a,{name:r.statusIcon,class:"qstatusicon"},null,8,["name"]),(0,n._)("span",{class:(0,o.C_)({greystrike:""!==r.nameHover}),title:r.nameHover},(0,o.zw)(s.option.title),11,y),(0,n.Uk)(" "+(0,o.zw)(r.scoreDisplay),1)]),s.selected?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",g,[r.canRetry?((0,n.wg)(),(0,n.j4)(a,{key:0,name:"retry"})):(0,n.kq)("",!0)])),s.selected?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",k,[r.canRegen?((0,n.wg)(),(0,n.j4)(a,{key:0,name:"retake"})):(0,n.kq)("",!0)]))])}var I=s(1038),b=s(9273),x=s(4845),P={name:"VideocuedNavListItem",props:["option","selected"],components:{Icons:I.Z},mixins:[x.w],computed:{statusIcon(){if("v"===this.option.type||"f"===this.option.type)return"video";if("q"===this.option.type){if("unattempted"===b.h.assessInfo.questions[this.option.qn].status){if(1===this.qsAttempted[this.option.qn])return"attempted";if(this.qsAttempted[this.option.qn]>0)return"partattempted"}return b.h.assessInfo.questions[this.option.qn].status}return"none"},nameHover(){return"q"===this.option.type&&0!==b.h.assessInfo.questions[this.option.qn].withdrawn?this.$t("header.withdrawn"):""},scoreDisplay(){if("q"!==this.option.type)return"";{const e=b.h.assessInfo.questions[this.option.qn];if(e.hasOwnProperty("gbscore")){let t=e.canretry?"(":"[";return t+=e.gbscore+"/"+e.points_possible,t+=e.canretry?")":"]",t}return this.$tc("header.pts",e.points_possible)}},canRetry(){if("q"===this.option.type){const e=b.h.assessInfo.questions[this.option.qn];return e.canretry}return!1},canRegen(){if("q"===this.option.type){const e=b.h.assessInfo.questions[this.option.qn];return e.regens_remaining}return!1}}},T=s(3744);const O=(0,T.Z)(P,[["render",_]]);var L=O,S={name:"VideocuedNav",props:["cue","toshow","showfollowup"],components:{MenuButton:v.Z,VideocuedNavListItem:L},computed:{hasIntro(){return""!==b.h.assessInfo.intro},navOptions(){var e=[];this.hasIntro&&e.push({onclick:()=>this.$emit("jumpto",-1,"i"),title:this.$t("intro"),type:"i"});for(let t=0;t<b.h.assessInfo.videocues.length;t++){const s=b.h.assessInfo.videocues[t];e.push({onclick:()=>this.$emit("jumpto",t,"v"),type:"v",title:s.title,cue:t}),s.hasOwnProperty("qn")&&e.push({onclick:()=>this.$emit("jumpto",t,"q"),type:"q",title:this.$t("question_n",{n:parseInt(s.qn)+1}),qn:parseInt(s.qn),cue:t,subitem:!0}),s.hasOwnProperty("followuptime")&&(s.followuplink||this.showfollowup.includes(t))&&e.push({onclick:()=>this.$emit("jumpto",t,"f"),type:"f",title:s.followuptitle,cue:t,subitem:!0})}return e},curOption(){const e=parseInt(this.cue);if(-1===e&&this.hasIntro)return 0;for(let t=this.hasIntro?1:0;t<this.navOptions.length;t++)if(this.navOptions[t].cue===e&&this.navOptions[t].type===this.toshow)return t;return-1},showNextPrev(){return Object.keys(this.navOptions).length>1},prevLink(){return this.curOption<=0?"":this.navOptions[this.curOption-1].internallink},nextLink(){return this.curOption>=this.navOptions.length-1?"":this.navOptions[this.curOption+1].internallink}}};const $=(0,T.Z)(S,[["render",m]]);var R=$,D=s(5530),C=s(5713);const A={key:0};function V(e,t,s,i,l,r){return-1===s.qn||r.showNav?((0,n.wg)(),(0,n.iD)("div",A,[-1===s.qn&&-1===s.cue?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>r.startVid&&r.startVid(...e)),class:"primary"},(0,o.zw)(e.$t("videocued.start")),1)):(0,n.kq)("",!0),s.qn>-1&&r.hasNextVid?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:t[1]||(t[1]=(...e)=>r.nextVidLink&&r.nextVidLink(...e)),class:(0,o.C_)({primary:"correct"!==r.status||!r.showSkip})},(0,o.zw)(e.$t("videocued.continue",{title:r.nextVidTitle})),3)):(0,n.kq)("",!0),s.qn>-1&&r.showSkip?((0,n.wg)(),(0,n.iD)("button",{key:2,onClick:t[2]||(t[2]=(...e)=>r.skipLink&&r.skipLink(...e)),class:"primary"},(0,o.zw)(e.$t("videocued.skipto",{title:r.skipTitle})),1)):(0,n.kq)("",!0)])):(0,n.kq)("",!0)}var j={name:"VideocuedResultNav",props:["qn","cue"],computed:{qdata(){return b.h.assessInfo.questions[this.qn]},showNav(){return b.h.inProgress&&b.h.assessInfo.hasOwnProperty("questions")&&this.qdata.hasOwnProperty("score")&&(this.qdata.try>0||this.qdata.hasOwnProperty("tries_remaining_range"))&&0===this.qdata.withdrawn},showScores(){return"during"===b.h.assessInfo.showscores},status(){if(!this.showScores||!this.qdata.hasOwnProperty("parts"))return"neutral";for(let e=0;e<this.qdata.parts.length;e++)if(0===this.qdata.parts[e].try||this.qdata.parts[e].rawscore<.98)return"neutral";return"correct"},nextVidType(){return b.h.assessInfo.videocues[this.cue].hasOwnProperty("followuptitle")?"followup":"nextseg"},hasNextVid(){return b.h.assessInfo.videocues[this.cue].hasOwnProperty("followuptitle")&&this.$emit("addfollowup",this.cue),"followup"===this.nextVidType||b.h.assessInfo.videocues.hasOwnProperty(this.cue+1)},nextVidTitle(){return"followup"===this.nextVidType?b.h.assessInfo.videocues[this.cue].followuptitle:b.h.assessInfo.videocues[this.cue+1].title},showSkip(){return"correct"===this.status&&"followup"===this.nextVidType&&b.h.assessInfo.videocues.hasOwnProperty(this.cue+1)},skipTitle(){return b.h.assessInfo.videocues[this.cue+1].title}},methods:{skipLink(){this.$emit("jumpto",this.cue+1,"v")},nextVidLink(){"followup"===this.nextVidType?this.$emit("jumpto",this.cue,"f"):this.$emit("jumpto",this.cue+1,"v")},startVid(){this.$emit("jumpto",0,"v")}}};const z=(0,T.Z)(j,[["render",V]]);var N=z,F=s(3196),U=s(1436),Q={name:"videocued",components:{FullQuestionHeader:D.Z,VideocuedNav:R,Question:F.Z,VideocuedResultNav:N,InterQuestionTextList:C.Z,AssessHeader:d.Z,IntroText:U.Z},data:function(){return{videoWidth:600,aspectRatioPercent:56.2,ytplayer:null,timer:null,cue:0,toshow:"v",showfolloup:[]}},computed:{curCue(){return this.cue>-1?b.h.assessInfo.videocues[this.cue]:{}},qn(){return"q"===this.toshow?parseInt(this.curCue.qn):-1},timeCues(){const e={};for(const t in b.h.assessInfo.videocues)b.h.assessInfo.videocues[t].hasOwnProperty("qn")&&(e[b.h.assessInfo.videocues[t].time]=parseInt(t));return e},nextVidTimes(){const e={};for(let t=0;t<b.h.assessInfo.videocues.length;t++)b.h.assessInfo.videocues[t].hasOwnProperty("followuptime")&&b.h.assessInfo.videocues.hasOwnProperty(t+1)?e[b.h.assessInfo.videocues[t].followuptime]=t:!b.h.assessInfo.videocues[t].hasOwnProperty("qn")&&b.h.assessInfo.videocues.hasOwnProperty(t+1)&&(e[b.h.assessInfo.videocues[t].time]=t);return e},intro(){return b.h.assessInfo.intro},questionArray(){const e={};for(let t=0;t<b.h.assessInfo.questions.length;t++)e[t]=t;return e},lastQ(){return b.h.assessInfo.questions.length-1},textList(){return b.h.assessInfo.hasOwnProperty("interquestion_text")?b.h.assessInfo.interquestion_text:[]}},methods:{createPlayer(){const e=!!(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen),t={autoplay:0,wmode:"transparent",fs:e?1:0,controls:2,rel:0,modestbranding:1,showinfo:0,origin:window.location.protocol+"//"+window.location.host},s=b.h.assessInfo.videoar.split(":"),n=window.innerHeight-50;this.videoWidth=s[0]/s[1]*n,this.aspectRatioPercent=Math.round(1e3*n/this.videoWidth)/10,this.ytplayer=new window.YT.Player("player",{height:n,width:this.videoWidth,videoId:b.h.assessInfo.videoid,playerVars:t,events:{onReady:()=>this.handlePlayerReady(),onStateChange:e=>this.handlePlayerStateChange(e),onError:e=>this.handlePlayerError(e)}})},exitFullscreen(){const e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;e&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())},checkTime(){const e=Math.floor(this.ytplayer.getCurrentTime());!this.timeCues.hasOwnProperty(e)||"v"===this.toshow&&this.cue===this.timeCues[e]+1||"f"===this.toshow&&this.cue===this.timeCues[e]||this.ytplayer.getPlayerState()!==window.YT.PlayerState.PLAYING?(this.nextVidTimes.hasOwnProperty(e)&&this.cue===this.nextVidTimes[e]&&(this.cue=this.cue+1,this.toshow="v"),this.timer=window.setTimeout((()=>{this.checkTime()}),200)):this.jumpTo(parseInt(this.timeCues[e]),"q")},handlePlayerReady(){window.$("iframe#player").removeAttr("height").removeAttr("width").css("height","").css("width","")},handlePlayerStateChange(e){e.data===window.YT.PlayerState.PLAYING?this.timer=window.setTimeout((()=>{this.checkTime()}),200):e.data===window.YT.PlayerState.ENDED&&"v"===this.toshow&&this.curCue.hasOwnProperty("qn")&&(window.clearTimeout(this.timer),this.jumpTo(this.cue,"q"))},handlePlayerError(e){b.h.errorMsg=e.data},jumpTo(e,t,s=0){if(-1===e||"q"===t)this.exitFullscreen(),this.ytplayer&&this.ytplayer.pauseVideo();else{if(null===this.ytplayer||"function"!==typeof this.ytplayer.seekTo)return 0===s&&(b.h.errorMsg="ytnotready"),void window.setTimeout((()=>{this.jumpTo(e,t,1)}),100);s>0&&(b.h.errorMsg=null);const n=b.h.assessInfo.videocues[e];let i=0;if("v"===t){if(e>0){const t=b.h.assessInfo.videocues[e-1];i=t.hasOwnProperty("followuptime")?t.followuptime:t.time}}else"f"===t&&(i=n.time);this.ytplayer.seekTo(i,!0),this.ytplayer.playVideo()}this.cue=e,this.toshow=t},addShowFollowup(e){this.showfolloup.push(e)}},mounted(){if(window.YT)this.createPlayer();else if(window.onYouTubePlayerAPIReady=()=>{this.createPlayer()},!document.getElementById("yt_player_api")){const e=document.createElement("script");e.id="yt_player_api",e.src="https://www.youtube.com/player_api",document.head.appendChild(e)}},created(){""!==b.h.assessInfo.intro&&(this.cue=-1,this.toshow="i")}};const W=(0,T.Z)(Q,[["render",p]]);var Z=W},5889:function(e,t,s){var n=s(3691),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw new i("Cannot delete property "+n(t)+" of "+n(e))}},1719:function(e,t,s){var n=s(9989),i=s(690),o=s(6310),l=s(5649),r=s(5889),a=s(5565),u=1!==[].unshift(0),h=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},c=u||!h();n({target:"Array",proto:!0,arity:1,forced:c},{unshift:function(e){var t=i(this),s=o(t),n=arguments.length;if(n){a(s+n);var u=s;while(u--){var h=u+n;u in t?t[h]=t[u]:r(t,h)}for(var c=0;c<n;c++)t[c]=arguments[c]}return l(t,s+n)}})}}]);
//# sourceMappingURL=special.js.map?v=3103784b11dc73b5