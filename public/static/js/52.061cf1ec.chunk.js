(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[52],{1393:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(3),r=t(0),l=t.n(r),c=t(354),o=t(1375);function s(e){const a=Object(n.a)({},e),t=a.message,r=a.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},l.a.createElement(c.a,{item:!0}),l.a.createElement(o.a,{color:"error"===r?"secondary":"primary"})," ",l.a.createElement("span",null,t,".")))}},1739:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1378),c=t(624),o=t(448),s=t(46),i=t(2193),m=t(1393);const d=e=>{switch(e){case"payments":return r.a.createElement(i.a,{color:"primary",fontSize:"large"});default:return r.a.createElement(i.a,{className:"text-muted",color:"primary"})}};a.a=({solde:e,devise:a,icone:t,lien:n,chargement:i,label:u})=>r.a.createElement(s.a,{to:null!==n&&void 0!==n?n:" "},r.a.createElement(l.a,{elevation:3,className:"p-5 flex",onClick:()=>{console.log("on a click\xe9 sur la carte")}},r.a.createElement("div",null,r.a.createElement(c.a,{size:"medium"},d(t))),i?r.a.createElement(m.a,null):r.a.createElement("div",{className:"ml-4"},r.a.createElement("div",{style:{whiteSpace:"nowrap"}},r.a.createElement(o.a,{className:"mt-1 text-24"},e.toLocaleString("fr-FR"),r.a.createElement("span",{className:"m-1 text-muted"},null!==a&&void 0!==a?a:""))),r.a.createElement("p",{className:"m-0 text-muted"},null!==u&&void 0!==u?u:""))))},2232:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(17),l=t(0),c=t.n(l),o=t(20),s=t.n(o),i=t(39),m=t(75),d=t(2200);class u{constructor(){this.getDashboards=function(){var e=Object(i.a)(s.a.mark((function e(a,t){var n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.a)(a,"yyyy-MM-dd"),r=Object(d.a)(t,"yyyy-MM-dd"),e.next=4,m.b.get("/dashboard?debut=".concat(n,"&fin=").concat(r));case 4:return l=e.sent,e.abrupt("return",l.data);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()}}var p=t(133),b=t(448),h=t(1378),E=t(356),y=(t(1466),t(354)),g=t(452),f=t(1415),v=t(2224),x=t(1422),D=t(1423);function O({nom:e,label:a,valeur:t,handledatechange:n}){const o=Object(l.useState)(t),s=Object(r.a)(o,2),i=s[0],m=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{utils:x.a,locale:D.a},c.a.createElement(v.a,{fullWidth:!0,id:e,label:a,format:"dd/MM/yyyy",maxDate:new Date,ampm:!1,value:i,onChange:e=>(e=>{console.log("*********** ".concat(JSON.stringify(e),"******************")),m(e),n(e)})(e)})))}var j=({state:e,fonctions:a})=>c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(h.a,{className:"mb-sm-30"},c.a.createElement("form",null,c.a.createElement(y.a,{container:!0,spacing:2,direction:"column"},c.a.createElement(y.a,{item:!0},c.a.createElement(y.a,{container:!0,spacing:10,direction:"row"})),c.a.createElement(y.a,{item:!0},c.a.createElement(y.a,{container:!0,spacing:5,direction:"row"},c.a.createElement(y.a,{item:!0,sm:1}),c.a.createElement(y.a,{item:!0,sm:3,p:5},c.a.createElement(O,{nom:"datedebut",label:"Date de debut",valeur:e.rapport.dateDebut,handledatechange:a.handleChangedateDebut})),c.a.createElement(y.a,{item:!0,sm:3},c.a.createElement(O,{nom:"datefin",label:"Date de fin",valeur:e.rapport.dateFin,handledatechange:a.handleChangedateFin})),c.a.createElement(y.a,{item:!0,sm:3},c.a.createElement(g.a,{variant:"contained",color:"primary",onClick:a.handleClickSurGenererRapport},"G\xe9nerer le rapport")))))))),w=t(1739),S=t(2273),N=t(1393),F=t(539),k=t.n(F),C=t(51);var L=({height:e=400,lasource:a={label:[],data:[]}})=>{a.data.unshift(a.label);const t=a.data;console.log(a.data);const n=Object(C.a)().palette,r={grid:{left:"6%",bottom:"10%",right:"1%"},legend:{itemGap:20,icon:"circle",textStyle:{color:n.text.secondary,fontSize:13,fontFamily:"roboto"}},color:[n.primary.dark,n.primary.light,n.secondary.light,n.error.light],barMaxWidth:"10px",tooltip:{},title:{textAlign:"center",left:"5%"},dataset:{source:t},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:n.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:n.text.secondary,opacity:.15}},axisLabel:{color:n.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar",itemStyle:{barBorderRadius:[10,10,0,0]}}]};return c.a.createElement(k.a,{style:{height:e},option:r})};var q=e=>{const a=e.state,t=e.fonctions,n=e.queries;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(E.a,{routeSegments:[{name:a.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(b.a,{variant:"h4"},a.titre)),c.a.createElement(b.a,{color:"initial"},"Stats globaux"),c.a.createElement("hr",null),c.a.createElement("div",{className:"mb-sm-30"},n.queryDashboard.isLoading?c.a.createElement(N.a,null):c.a.createElement(S.a,{container:!0,spacing:5,direction:"row"},n.queryDashboard.data.statGlobal.map(e=>{var a;return c.a.createElement(S.a,{item:!0,sm:3},c.a.createElement(w.a,{chargement:n.queryDashboard.isLoading,icone:"home",devise:e.devise,solde:null!==(a=e.data)&&void 0!==a?a:0,label:e.label})," ")}))),c.a.createElement(b.a,null,"Stats par p\xe9riode"),c.a.createElement("hr",null),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(j,{state:a,fonctions:t})),n.queryDashboard.isLoading?c.a.createElement(N.a,null):c.a.createElement(c.a.Fragment,null,n.queryDashboard.data.statPeriode.map(e=>c.a.createElement(h.a,{className:"mb-sm-30"},c.a.createElement("div",{className:" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray"},c.a.createElement("span",{className:"font-medium text-muted"},e.titre)),c.a.createElement(L,{lasource:{label:["Date",e.label],data:e.data.map(e=>[e.ladate,e.somme])}})))))};a.default=()=>{const e={rapport:{dateDebut:new Date,dateFin:new Date},titre:"Tableau de bord",alert:{severity:"severity",message:"",open:!1,automaticClose:!1}},a=Object(l.useState)(e),t=Object(r.a)(a,2),o=t[0],s=t[1];let i=new u;const m=Object(p.useQueryClient)(),d={handleClickSurGenererRapport:()=>{},handleChangedateDebut:e=>{console.log("changement de la date de debut"),console.log("*********** ".concat(JSON.stringify(e),"******************")),s(Object(n.a)(Object(n.a)({},o),{},{rapport:Object(n.a)(Object(n.a)({},o.rapport),{},{dateDebut:e})})),m.invalidateQueries(b)},handleChangedateFin:e=>{s(Object(n.a)(Object(n.a)({},o),{},{rapport:Object(n.a)(Object(n.a)({},o.rapport),{},{dateFin:e})}))}};d.handleClickSurGenererRapport=()=>{console.log("*********** ".concat(JSON.stringify(o),"******************"))};const b=Object(p.useQuery)(["Dashboards",o.rapport.dateDebut,o.rapport.dateFin],()=>i.getDashboards(o.rapport.dateDebut,o.rapport.dateFin),{keepPreviousData:!0}),h={queryDashboard:b};return c.a.createElement(q,{state:o,fonctions:d,queries:h})}}}]);