(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[18],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(3),r=a(0),s=a.n(r),i=a(353),o=a(1374);function c(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},s.a.createElement(i.a,{item:!0}),s.a.createElement(o.a,{color:"error"===r?"secondary":"primary"})," ",s.a.createElement("span",null,a,".")))}},1386:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(624),i=a(449),o=a(1381);t.a=e=>{const t=e.id,a=e.nom,n=e.label,c=e.valeur,l=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{fullWidth:!0},r.a.createElement(o.a,{name:a,as:r.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:l,defaultValue:c,rules:{required:"Required"}})))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),r=a.n(n),s=a(39),i=a(75);function o(e){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(r.a.mark((function e(t){var a,n,s,o,c,l,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.nom,s=t.modele,o=t.champ,c=t.objet,l=t.obj,u=t.handleprogress,(m=new FormData).append(l.cle,c.id),m.append("modele",s),m.append("champ",o),m.append("nom",n),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(1381),i=a(1684),o=a(624),c=a(627),l=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,n=e.table,s=e.options,m=(e.valeur,e.error),d=e.helperText;return r.a.createElement(o.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(l.a,{htmlFor:a},t),r.a.createElement(c.a,Object.assign({id:a},e),s.map(e=>r.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===n&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===n&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===n&&e.nom+"["+e.adresse+"]"))),r.a.createElement(u.a,null,d))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.table,e.error),o=e.valeur;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:o,error:i,helperText:i?i.message:null},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),s=a(1408),i=a(343),o=a(1731),c=(a(60),a(357)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(i.a)(e=>Object(o.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(l.a,{className:"mt-3"},r.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(17),r=a(0),s=a.n(r),i=a(1381),o=a(1357),c=a(1356);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(r.useState)(a),p=Object(n.a)(d,2),v=p[0],g=p[1];return s.a.createElement(c.a,{control:s.a.createElement(i.a,{name:t,control:l,render:e=>s.a.createElement(o.a,Object.assign({},e,{checked:v,onChange:t=>{e.onChange(t.target.checked),g(!v),u(!v)}}))}),label:null==m?t:m})}},1397:function(e,t,a){"use strict";a(0),a(1381),a(1684),a(624),a(627),a(625),a(1322)},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(17),r=a(0),s=a.n(r),i=a(624),o=a(1461),c=a(2083),l=a(1393),u=a(1394),m=a(1381);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),v=(e.id,e.handledatechange),g=Object(r.useState)(p),b=Object(n.a)(g,2),f=b[0],h=b[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{fullWidth:!0},s.a.createElement(m.a,Object.assign({name:t,as:s.a.createElement(o.a,{utils:l.a,locale:u.a},s.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),v(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1399:function(e,t,a){"use strict";a(17),a(0),a(624),a(1461),a(2044),a(1393),a(1394),a(1381)},1409:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1432:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1400),r=a(132),s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,o=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(e,t){Object(r.a)(1,arguments);var a=t||{},s=null==a.additionalDigits?2:Object(n.a)(a.additionalDigits);if(2!==s&&1!==s&&0!==s)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=u(e);if(o.date){var c=m(o.date,s);i=d(c.restDateString,c.year)}if(isNaN(i)||!i)return new Date(NaN);var l,p=i.getTime(),g=0;if(o.time&&(g=v(o.time),isNaN(g)||null===g))return new Date(NaN);if(!o.timezone){var f=new Date(p+g),h=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds());return h.setFullYear(f.getUTCFullYear()),h}return l=b(o.timezone),isNaN(l)?new Date(NaN):new Date(p+g+l)}function u(e){var t,a={},n=e.split(s.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],s.timeZoneDelimiter.test(a.date)&&(a.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=s.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),s=n[2]&&parseInt(n[2]);return{year:null==s?r:100*s,restDateString:e.slice((n[1]||n[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(i);if(!a)return null;var n=!!a[4],r=p(a[1]),s=p(a[2])-1,o=p(a[3]),c=p(a[4]),l=p(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,c,l)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,s=7*(t-1)+a+1-r;return n.setUTCDate(n.getUTCDate()+s),n}(t,c,l):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(f[t]||(h(e)?29:28))}(t,s,o)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,r)?(u.setUTCFullYear(t,s,Math.max(r,o)),u):new Date(NaN)}function p(e){return e?parseInt(e):1}function v(e){var t=e.match(o);if(!t)return null;var a=g(t[1]),n=g(t[2]),r=g(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r)?36e5*a+6e4*n+1e3*r:NaN}function g(e){return e&&parseFloat(e.replace(",","."))||0}function b(e){if("Z"===e)return 0;var t=e.match(c);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?a*(36e5*n+6e4*r):NaN}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400===0||e%4===0&&e%100}},1578:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),r=a.n(n),s=a(39),i=a(75);class o{getTouslesCaissemagasins(e,t,a,n){return Object(s.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,i.b.get("/caissemagasins?itemsPerPage=".concat(t,"&page=").concat(e));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutCaissemagasin(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/caissemagasins",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCaissemagasin(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/caissemagasins/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCaissemagasin(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/caissemagasins/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1579:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),r=a.n(n),s=a(39),i=a(75);class o{getTouslesMouvementdecaisses(e,t,a,n){return Object(s.a)(r.a.mark((function n(){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/mouvementdecaisses?itemsPerPage=".concat(t,"&page=").concat(e,"&caissemagasin=").concat(a.Caissemagasin.id," "));case 3:return s=n.sent,n.abrupt("return",s.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutMouvementdecaisse(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/mouvementdecaisses",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMouvementdecaisse(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/mouvementdecaisses/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMouvementdecaisse(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/mouvementdecaisses/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourTypedemouvementMouvementdecaisse(e){return Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("mouvementdecaisses/"+e.id,{typedemouvement:e.typedemouvement});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2061:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),s=a(0),i=a.n(s),o=a(1579),c=a(133),l=a(1403),u=a.n(l),m=a(1390),d=a(447),p=a(2029),v=a(1377),g=a(356),b=a(354),f=a(355),h=a(1382),E=a(1404),j=(a(1405),a(75)),O=a(1371),y=a(1385),w=a(353),C=a(2024),M=a(623),x=a(2023),S=a(2022),D=a(451),T=a(1374),N=a(1386),P=a(1391),F=(a(1396),a(1392),a(1397),a(1398)),k=(a(1399),a(2045));function R(e){var t,a,n,r,s,o,c,l,u,m;const p=e.state,g=e.fonctions,b=e.queries,f=e.useform,E=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(w.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(w.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(O.a,{theme:Object(j.a)()},i.a.createElement(v.a,null,i.a.createElement(C.a,{action:i.a.createElement(M.a,{"aria-label":"",onClick:g.AnnulerEnregistrement},"x"),title:"ajout"===p.pagestate.action?"Nouveau":"Mise \xe0 jour",subheader:""}),i.a.createElement(x.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:f.handleSubmit(E)},i.a.createElement(w.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(w.a,{item:!0},i.a.createElement(F.a,{id:"{datemouvement}",nom:"{datemouvement}",label:"Datemouvement",valeur:p.mouvementdecaisse?p.mouvementdecaisse.datemouvement:new Date,error:f.errors.datemouvement,control:f.control,handledatechange:g.handledatedatemouvementchange})),i.a.createElement(w.a,{item:!0},i.a.createElement(N.a,{id:"typedemouvement",nom:"typedemouvement",label:"Typedemouvement",valeur:null===(t=p.mouvementdecaisse)||void 0===t?void 0:t.typedemouvement,control:f.control,error:f.errors.typedemouvement})),i.a.createElement(w.a,{item:!0},i.a.createElement(N.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===(a=p.mouvementdecaisse)||void 0===a?void 0:a.montant,control:f.control,error:f.errors.montant})),i.a.createElement(w.a,{item:!0},i.a.createElement(N.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===(n=p.mouvementdecaisse)||void 0===n?void 0:n.motif,control:f.control,error:f.errors.motif})),i.a.createElement(w.a,{item:!0},i.a.createElement(N.a,{id:"commentaire",nom:"commentaire",label:"Commentaire",valeur:null===(r=p.mouvementdecaisse)||void 0===r?void 0:r.commentaire,control:f.control,error:f.errors.commentaire})),i.a.createElement(w.a,{item:!0},i.a.createElement(N.a,{id:"soldeapres",nom:"soldeapres",label:"Soldeapres",valeur:null===(s=p.mouvementdecaisse)||void 0===s?void 0:s.soldeapres,control:f.control,error:f.errors.soldeapres})),i.a.createElement(w.a,{item:!0},b.queryCaissemagasins.isLoading?i.a.createElement(h.a,{message:"chargement des Caissemagasins"}):i.a.createElement(P.a,{id:"caissemagasin",name:"caissemagasin",label:"caissemagasin",table:"caissemagasin",control:f.control,options:b.queryCaissemagasins.data.rows,error:f.errors.caissemagasin,defaultValue:null!==(o=null===(c=p.mouvementdecaisse)||void 0===c||null===(l=c.Caissemagasin)||void 0===l?void 0:l.id)&&void 0!==o?o:"1",valeur:null!==(u=null===(m=p.mouvementdecaisse)||void 0===m?void 0:m.caissemagasin)&&void 0!==u?u:""}))))),i.a.createElement(S.a,null,i.a.createElement(w.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(w.a,{item:!0},i.a.createElement(D.a,{color:"primary",variant:"contained",type:"submit",onClick:f.handleSubmit(E)},b.mutationMiseajour.isLoading||b.mutationAjout.isLoading?i.a.createElement(T.a,{color:"inherit"}):i.a.createElement(k.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===p.pagestate.action?i.a.createElement(d.a,null,"Enregistrer"):i.a.createElement(d.a,null,"Mettre \xe0 jour")))),i.a.createElement(w.a,{item:!0},i.a.createElement(D.a,{variant:"outlined",color:"secondary",onClick:g.AnnulerEnregistrement},"Annuler")))))))))}var A=a(624),q=a(625),L=a(627),z=a(1684),I=a(1322);var U=({queries:e,fonctions:t})=>i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(v.a,{className:"mb-sm-30"},i.a.createElement("form",null,i.a.createElement(w.a,{container:!0,spacing:2,direction:"column"},i.a.createElement(w.a,{item:!0},i.a.createElement(w.a,{container:!0,spacing:10,direction:"row"})),i.a.createElement(w.a,{item:!0},i.a.createElement(w.a,{container:!0,spacing:5,direction:"row"},i.a.createElement(w.a,{item:!0,sm:1}),i.a.createElement(w.a,{item:!0,sm:3,p:5},e.queryCaissemagasins.isLoading?i.a.createElement(h.a,{message:"chargement des Magasins"}):i.a.createElement(A.a,{fullWidth:!0},i.a.createElement(q.a,{htmlFor:"Magasin"},"Choisir un magasin"),i.a.createElement(L.a,{id:"Magasin",variant:"outlined",onChange:t.handleChangeMagasin},i.a.createElement(z.a,{key:"0",value:null},"Tous les magasins"),e.queryCaissemagasins.data.rows.map(e=>i.a.createElement(z.a,{key:e.id,value:e.id},e.Magasin.nom))),i.a.createElement(I.a,null))),i.a.createElement(w.a,{item:!0,sm:3}))),i.a.createElement(w.a,{item:!0},i.a.createElement(w.a,{container:!0,spacing:10,direction:"row"}))))));var V=e=>{var t,a;const r=e.state,s=e.fonctions,o=e.collonnes,c=e.queries,l=e.useform,y=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>s.handleFermetureAlerte():()=>s.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(b.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(d.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(p.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(U,{fonctions:s,queries:c}),c.queryMouvementdecaisses.isLoading?i.a.createElement(h.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryMouvementdecaisses.isError?i.a.createElement(h.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryMouvementdecaisses.error,type:"error"}):i.a.createElement(E.a,{tag:"div",blocking:!1},i.a.createElement(O.a,{theme:Object(j.a)()},i.a.createElement(u.a,{title:r.titre,data:c.queryMouvementdecaisses.data.rows.map(e=>({mouvementdecaisse:e})),columns:o,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:c.queryMouvementdecaisses.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>s.handleChangePage(e),onChangeRowsPerPage:e=>s.handleChangeRowPerPage(e),onSearchChange:e=>s.handleSearchChange(e),onFilterChange:()=>s.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(f.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:s.fermerDialogueSuppression,onYesClick:s.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.mouvementdecaisse)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(R,{state:r,fonctions:s,queries:c,useform:l,onSubmit:y}))},B=a(13),Q=a(87),W=a(1409),H=a(1410),Y=a(1411),Z=a(2046),$=a(343),J=a(1331),G=a(1375),K=a(2015),X=a(1432);Object($.a)(e=>{e.palette,Object(B.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function _(e){const t=Object($.a)(e=>{e.palette,Object(B.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=e=>{switch(e.typedemouvement){case"debit":return"bg-error";case"Nouveau":return"bg-primary";case"credit":return"bg-green";default:return"bg-primary"}},n=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"mouvementdecaisse",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"mouvementdecaisse",label:"Date",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.datemouvement?" ":Object(K.a)(Object(X.a)(e.datemouvement),"dd/MM/yyyy HH:mm")}},{name:"mouvementdecaisse",label:"Caisse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r,s;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{whiteSpace:"nowrap"}},i.a.createElement("strong",null,null!==(n=null===e||void 0===e||null===(r=e.Caissemagasin)||void 0===r||null===(s=r.Magasin)||void 0===s?void 0:s.nom)&&void 0!==n?n:"")))}}},{name:"mouvementdecaisse",label:"Montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.montant)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"mouvementdecaisse",label:"Type de mouvement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(n,r,s)=>i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(Q.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(D.a,{size:"small",variant:"text",color:"primary",endIcon:i.a.createElement(Z.a,null)},i.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+a({id:n.id,typedemouvement:n.typedemouvement})},n.typedemouvement))))},(e=>{switch(e.typedemouvement){case"Annul\xe9e":return[];case"Nouveau":return[{id:1,nom:"Valider",typedemouvement:"Valid\xe9e"},{id:2,nom:"Annuler",typedemouvement:"Annul\xe9e"}];case"Valid\xe9e":default:return[]}})(n.typedemouvement).map(t=>i.a.createElement(z.a,{onClick:()=>e.handleChangementTypedemouvement(n.typedemouvement),key:t.id,value:t.typedemouvement},t.nom)))))}},{name:"mouvementdecaisse",label:"Motif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=e.motif)&&void 0!==n?n:""}}},{name:"mouvementdecaisse",label:"Solde apr\xe8s",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.soldeapres)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"mouvementdecaisse",label:"Actions",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,a,r)=>i.a.createElement("div",null,i.a.createElement(Q.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(D.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>n(e,"D\xe9tails"),icon:i.a.createElement(W.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>n(e,"D\xe9tails"),icon:i.a.createElement(W.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>n(e,"Modifier"),icon:i.a.createElement(H.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>n(e,"Supprimer"),icon:i.a.createElement(Y.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>n(e,"Modifier"),icon:i.a.createElement(H.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(z.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(G.a,null)))))}}]}var ee=a(1381),te=(a(1389),a(1384)),ae=a(1578);t.default=()=>{const e={mouvementdecaisse:{datemouvement:"",typedemouvement:"",montant:0,motif:"",commentaire:"",soldeapres:0,caissemagasin:1},mouvementdecaisse1:null,titre:"Mouvements de caisses",tableconfig:{page:0,rowsPerPage:30,recherche:{Caissemagasin:{id:""}},filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(s.useState)(e),a=Object(r.a)(t,2),l=a[0],u=a[1];let m=new o.a,d=new ae.a;const p=Object(c.useQueryClient)(),v=Object(c.useMutation)(m.misajourTypedemouvementMouvementdecaisse,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{p.invalidateQueries("Mouvementdecaisses")}}),g={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mouvements de caisses",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},l),{},{mouvementdecaisse:null,titre:"Nouveau",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mouvements de caisses",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(l.mouvementdecaisse)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",mouvementdecaisse:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},l),{},{mouvementdecaisse:e,dialogueSuppressionOuvert:!0}))}},handleChangeMagasin:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:Object(n.a)(Object(n.a)({},l.tableconfig.recherche),{},{Caissemagasin:{id:e.target.value}})})}))},handledatedatemouvementchange:e=>{u(Object(n.a)(Object(n.a)({},l),{},{mouvementdecaisse:Object(n.a)(Object(n.a)({},l.mouvementdecaisse),{},{datemouvement:e})}))},handleChangementTypedemouvement:({id:e,typedemouvement:t})=>{v.mutate({id:e,typedemouvement:t})}},b=Object(c.useQuery)(["Mouvementdecaisses",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesMouvementdecaisses(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(c.useQuery)(["Caissemagasins",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesCaissemagasins(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(c.useMutation)(m.ajoutMouvementdecaisse,{onSuccess:()=>{p.invalidateQueries("Mouvementdecaisses"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Mouvementdecaisses"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(c.useMutation)(m.miseajourMouvementdecaisse,{onSuccess:()=>{p.invalidateQueries("Mouvementdecaisses"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Mouvementdecaisses"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(m.suppressionMouvementdecaisse,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Mouvementdecaisses")}}),O={queryMouvementdecaisses:b,mutationMiseajour:E,mutationAjout:h,mutationSuppression:j,queryCaissemagasins:f},w=_(g),C=y.b().shape({motif:y.c().required("Le champs Motif est requis"),commentaire:y.c().required("Le champs Commentaire est requis")}),M=Object(ee.c)({resolver:Object(te.yupResolver)(C),defaultValues:{mouvementdecaisse:l.mouvementdecaisse}});return i.a.createElement(V,{state:l,fonctions:g,collonnes:w,queries:O,useform:M,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},l.mouvementdecaisse),e);void 0!==(null===(t=l.mouvementdecaisse)||void 0===t?void 0:t.id)?O.mutationMiseajour.mutate(Object(n.a)({},a)):O.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);