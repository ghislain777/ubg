(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[20],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),r=a(0),c=a.n(r),i=a(353),o=a(1374);function l(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},c.a.createElement(i.a,{item:!0}),c.a.createElement(o.a,{color:"error"===r?"secondary":"primary"})," ",c.a.createElement("span",null,a,".")))}},1386:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(624),i=a(449),o=a(1381);t.a=e=>{const t=e.id,a=e.nom,n=e.label,l=e.valeur,s=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{fullWidth:!0},r.a.createElement(o.a,{name:a,as:r.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),r=a.n(n),c=a(39),i=a(75);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function e(t){var a,n,c,o,l,s,u,m,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.nom,c=t.modele,o=t.champ,l=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",c),m.append("champ",o),m.append("nom",n),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1381),i=a(1684),o=a(624),l=a(627),s=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,n=e.table,c=e.options,m=(e.valeur,e.error),p=e.helperText;return r.a.createElement(o.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(s.a,{htmlFor:a},t),r.a.createElement(l.a,Object.assign({id:a},e),c.map(e=>r.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===n&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===n&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===n&&e.nom+"["+e.adresse+"]"))),r.a.createElement(u.a,null,p))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.table,e.error),o=e.valeur;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:o,error:i,helperText:i?i.message:null},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),c=a(1408),i=a(343),o=a(1731),l=(a(60),a(357)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(i.a)(e=>Object(o.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(l.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(17),r=a(0),c=a.n(r),i=a(1381),o=a(1357),l=a(1356);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(r.useState)(a),d=Object(n.a)(p,2),f=d[0],b=d[1];return c.a.createElement(l.a,{control:c.a.createElement(i.a,{name:t,control:s,render:e=>c.a.createElement(o.a,Object.assign({},e,{checked:f,onChange:t=>{e.onChange(t.target.checked),b(!f),u(!f)}}))}),label:null==m?t:m})}},1397:function(e,t,a){"use strict";a(0),a(1381),a(1684),a(624),a(627),a(625),a(1322)},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(17),r=a(0),c=a.n(r),i=a(624),o=a(1461),l=a(2083),s=a(1393),u=a(1394),m=a(1381);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),f=(e.id,e.handledatechange),b=Object(r.useState)(d),g=Object(n.a)(b,2),v=g[0],h=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{fullWidth:!0},c.a.createElement(m.a,Object.assign({name:t,as:c.a.createElement(o.a,{utils:s.a,locale:u.a},c.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:v,onChange:e=>(e=>{h(e),f(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1399:function(e,t,a){"use strict";a(17),a(0),a(624),a(1461),a(2044),a(1393),a(1394),a(1381)},1409:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1432:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(1400),r=a(132),c={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,o=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e,t){Object(r.a)(1,arguments);var a=t||{},c=null==a.additionalDigits?2:Object(n.a)(a.additionalDigits);if(2!==c&&1!==c&&0!==c)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=u(e);if(o.date){var l=m(o.date,c);i=p(l.restDateString,l.year)}if(isNaN(i)||!i)return new Date(NaN);var s,d=i.getTime(),b=0;if(o.time&&(b=f(o.time),isNaN(b)||null===b))return new Date(NaN);if(!o.timezone){var v=new Date(d+b),h=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds());return h.setFullYear(v.getUTCFullYear()),h}return s=g(o.timezone),isNaN(s)?new Date(NaN):new Date(d+b+s)}function u(e){var t,a={},n=e.split(c.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],c.timeZoneDelimiter.test(a.date)&&(a.date=e.split(c.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=c.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),c=n[2]&&parseInt(n[2]);return{year:null==c?r:100*c,restDateString:e.slice((n[1]||n[2]).length)}}function p(e,t){if(null===t)return null;var a=e.match(i);if(!a)return null;var n=!!a[4],r=d(a[1]),c=d(a[2])-1,o=d(a[3]),l=d(a[4]),s=d(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,l,s)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,c=7*(t-1)+a+1-r;return n.setUTCDate(n.getUTCDate()+c),n}(t,l,s):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(v[t]||(h(e)?29:28))}(t,c,o)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,r)?(u.setUTCFullYear(t,c,Math.max(r,o)),u):new Date(NaN)}function d(e){return e?parseInt(e):1}function f(e){var t=e.match(o);if(!t)return null;var a=b(t[1]),n=b(t[2]),r=b(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r)?36e5*a+6e4*n+1e3*r:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function g(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?a*(36e5*n+6e4*r):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400===0||e%4===0&&e%100}},1581:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(20),r=a.n(n),c=a(39),i=a(75);class o{getTouslesFactures(e,t,a,n){return Object(c.a)(r.a.mark((function n(){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/factures?itemsPerPage=".concat(t,"&page=").concat(e,"&client=").concat(a.Client.id,"&magasin=").concat(a.Magasin.id,"&statut=").concat(a.statut));case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutFacture(e){return Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/factures",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourFacture(e){return Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/factures/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionFacture(e){return Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/factures/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutFacture(e){return Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("factures/"+e.id,{statut:e.statut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}toglepayementcompletFacture(e){return Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/factures/"+e.id,{payementcomplet:!e.payementcomplet});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}payerFacture(e){return Object(c.a)(r.a.mark((function t(){var a,n,c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.facture,n=e.montant,c=e.description,console.log(a),t.next=4,i.b.put("/factures/payer/"+a.id,{montant:n,description:c});case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})))()}}},1726:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print")},2063:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),c=a(0),i=a.n(c),o=a(20),l=a.n(o),s=a(39),u=a(75);class m{getTouslesPayementclients(e,t,a,n){return Object(s.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,u.b.get("/payementclients?itemsPerPage=".concat(t,"&page=").concat(e,"&facture=").concat(a," "));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutPayementclient(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/payementclients",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPayementclient(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/payementclients/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPayementclient(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/payementclients/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var p=a(133),d=a(1403),f=a.n(d),b=a(1390),g=a(447),v=a(2029),h=a(1377),y=a(356),j=a(354),E=a(355),O=a(1382),w=a(1404),P=(a(1405),a(1371)),C=a(1385),x=a(353),S=a(2024),D=a(623),F=a(2023),T=a(2022),M=a(451),N=a(1374),k=a(1386),R=a(1391),A=(a(1396),a(1392),a(1397),a(1398)),z=(a(1399),a(2045));function q(e){var t,a,n,r,c,o,l;const s=e.state,m=e.fonctions,p=e.queries,d=e.useform,f=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(P.a,{theme:Object(u.a)()},i.a.createElement(h.a,null,i.a.createElement(S.a,{action:i.a.createElement(D.a,{"aria-label":"",onClick:m.AnnulerEnregistrement},"x"),title:"ajout"===s.pagestate.action?"Nouveau":"Mise \xe0 jour",subheader:""}),i.a.createElement(F.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:d.handleSubmit(f)},i.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(x.a,{item:!0},i.a.createElement(A.a,{id:"{datepayement}",nom:"{datepayement}",label:"Date de payement",valeur:s.payementclient?s.payementclient.datepayement:new Date,error:d.errors.datepayement,control:d.control,handledatechange:m.handledatedatepayementchange})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===(t=s.payementclient)||void 0===t?void 0:t.montant,control:d.control,error:d.errors.montant})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"soldeapres",nom:"soldeapres",label:"Solde apr\xe8s",valeur:null===(a=s.payementclient)||void 0===a?void 0:a.soldeapres,control:d.control,error:d.errors.soldeapres})),i.a.createElement(x.a,{item:!0},p.queryFactures.isLoading?i.a.createElement(O.a,{message:"chargement des Factures"}):i.a.createElement(R.a,{id:"facture",name:"facture",label:"facture",table:"facture",control:d.control,options:p.queryFactures.data.rows,error:d.errors.facture,defaultValue:null!==(n=null===(r=s.payementclient)||void 0===r||null===(c=r.Facture)||void 0===c?void 0:c.id)&&void 0!==n?n:"1",valeur:null!==(o=null===(l=s.payementclient)||void 0===l?void 0:l.facture)&&void 0!==o?o:""}))))),i.a.createElement(T.a,null,i.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(x.a,{item:!0},i.a.createElement(M.a,{color:"primary",variant:"contained",type:"submit",onClick:d.handleSubmit(f)},p.mutationMiseajour.isLoading||p.mutationAjout.isLoading?i.a.createElement(N.a,{color:"inherit"}):i.a.createElement(z.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===s.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(x.a,{item:!0},i.a.createElement(M.a,{variant:"outlined",color:"secondary",onClick:m.AnnulerEnregistrement},"Annuler")))))))))}var L=e=>{var t,a;const r=e.state,c=e.fonctions,o=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(y.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>c.handleFermetureAlerte():()=>c.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(j.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(v.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,l.queryPayementclients.isLoading?i.a.createElement(O.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryPayementclients.isError?i.a.createElement(O.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryPayementclients.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(P.a,{theme:Object(u.a)()},i.a.createElement(f.a,{title:r.titre,data:l.queryPayementclients.data.rows.map(e=>({payementclient:e})),columns:o,options:Object(n.a)(Object(n.a)({},b.a),{},{serverSide:!0,count:l.queryPayementclients.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},b.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},b.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>c.handleChangePage(e),onChangeRowsPerPage:e=>c.handleChangeRowPerPage(e),onSearchChange:e=>c.handleSearchChange(e),onFilterChange:()=>c.handleFilterChange()})}))),i.a.createElement(h.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(E.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:c.fermerDialogueSuppression,onYesClick:c.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.payementclient)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(q,{state:r,fonctions:c,queries:l,useform:s,onSubmit:m}))},I=a(13),U=a(87),H=a(1409),V=a(1410),Q=a(1411),W=a(1726),B=a(2046),Y=a(343),Z=a(1331),$=a(1684),J=a(1375),G=a(2015),_=a(1432);Object(Y.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const t=Object(Y.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"payementclient",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"payementclient",label:"Date de payement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.datepayement?" ":Object(G.a)(Object(_.a)(e.datepayement),"dd/MM/yyyy HH:mm")}},{name:"payementclient",label:"Montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.montant)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"payementclient",label:"Solde facture apr\xe8s",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.soldeapres)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"payementclient",label:"facture",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r,c,i,o,l;return(null!==(n=null===(r=e.Facture)||void 0===r?void 0:r.id)&&void 0!==n?n:"")+" "+(null!==(c=null===(i=e.Client)||void 0===i?void 0:i.nom)&&void 0!==c?c:" ")+" "+(null!==(o=null===(l=e.Client)||void 0===l?void 0:l.telephone)&&void 0!==o?o:" ")}}},{name:"payementclient",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(U.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(Z.a,{xsDown:!0},i.a.createElement(M.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(B.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(H.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(H.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(Q.a,{color:"error"})}];default:return[{id:2,nom:"Re\xe7u de payement",action:e=>a(e,"Recu"),icon:i.a.createElement(W.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement($.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(J.a,null)))))}}]}var X=a(1381),ee=(a(1389),a(1384)),te=a(1581);t.default=()=>{const e={payementclient:{datepayement:"",montant:0,soldeapres:0,facture:1},payementclient1:null,titre:"Payements clients",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(c.useState)(e),a=Object(r.a)(t,2),o=a[0],l=a[1];let s=new m,d=new te.a;const f=Object(p.useQueryClient)(),b={handleFermetureAlerte:()=>{l(Object(n.a)(Object(n.a)({},o),{},{titre:"Payements clients",alert:Object(n.a)(Object(n.a)({},o.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},o.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(n.a)(Object(n.a)({},o),{},{payementclient:null,titre:"Nouveau",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(n.a)(Object(n.a)({},o),{},{alert:Object(n.a)(Object(n.a)({},o.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(n.a)(Object(n.a)({},o),{},{titre:"Payements clients",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(n.a)(Object(n.a)({},o),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(o.payementclient)},handleCloseDialoguephoto:()=>{l(Object(n.a)(Object(n.a)({},o),{},{dialoguephoto:Object(n.a)(Object(n.a)({},o.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(n.a)(Object(n.a)({},o),{},{tableconfig:Object(n.a)(Object(n.a)({},o.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(n.a)(Object(n.a)({},o),{},{tableconfig:Object(n.a)(Object(n.a)({},o.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(n.a)(Object(n.a)({},o),{},{tableconfig:Object(n.a)(Object(n.a)({},o.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"Recu":console.log("action details"),window.open("".concat(u.c,"/api/payementclients/recudepayement/").concat(e.id),"_blanc");break;case"Modifier":l(Object(n.a)(Object(n.a)({},o),{},{titre:"Mise \xe0 jour ",payementclient:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(n.a)(Object(n.a)({},o),{},{payementclient:e,dialogueSuppressionOuvert:!0}))}},handledatedatepayementchange:e=>{l(Object(n.a)(Object(n.a)({},o),{},{payementclient:Object(n.a)(Object(n.a)({},o.payementclient),{},{datepayement:e})}))}},g=Object(p.useQuery)(["Payementclients",o.tableconfig.page,o.tableconfig.rowsPerPage,o.tableconfig.recherche,o.tableconfig.filtre],()=>s.getTouslesPayementclients(o.tableconfig.page,o.tableconfig.rowsPerPage,o.tableconfig.recherche,o.tableconfig.filtre),{keepPreviousData:!0}),v=Object(p.useQuery)(["Factures",o.tableconfig.page,o.tableconfig.rowsPerPage,o.tableconfig.recherche,o.tableconfig.filtre],()=>d.getTouslesFactures(0,1e3,o.tableconfig.recherche,o.tableconfig.filtre),{keepPreviousData:!0}),h=Object(p.useMutation)(s.ajoutPayementclient,{onSuccess:()=>{f.invalidateQueries("Payementclients"),l(Object(n.a)(Object(n.a)({},o),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{f.invalidateQueries("Payementclients"),l(Object(n.a)(Object(n.a)({},o),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),y=Object(p.useMutation)(s.miseajourPayementclient,{onSuccess:()=>{f.invalidateQueries("Payementclients"),l(Object(n.a)(Object(n.a)({},o),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{f.invalidateQueries("Payementclients"),l(Object(n.a)(Object(n.a)({},o),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(p.useMutation)(s.suppressionPayementclient,{onSuccess:()=>{l(Object(n.a)(Object(n.a)({},o),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{f.invalidateQueries("Payementclients")}}),E={queryPayementclients:g,mutationMiseajour:y,mutationAjout:h,mutationSuppression:j,queryFactures:v},O=K(b),w=C.b().shape({}),P=Object(X.c)({resolver:Object(ee.yupResolver)(w),defaultValues:{payementclient:o.payementclient}});return i.a.createElement(L,{state:o,fonctions:b,collonnes:O,queries:E,useform:P,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},o.payementclient),e);void 0!==(null===(t=o.payementclient)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(n.a)({},a)):E.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);