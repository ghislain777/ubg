(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[19],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),r=a(0),o=a.n(r),i=a(354),c=a(1375);function l(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===r?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1397:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(625),i=a(450),c=a(1385);t.a=e=>{const t=e.id,a=e.nom,n=e.label,l=e.valeur,s=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fullWidth:!0},r.a.createElement(c.a,{name:a,as:r.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t){var a,n,o,c,l,s,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.nom,o=t.modele,c=t.champ,l=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",o),m.append("champ",c),m.append("nom",n),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1400:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1425),i=a(344),c=a(1829),l=(a(60),a(358)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(l.a,{value:u}),u,"%"))}},1402:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1385),i=a(1777),c=a(625),l=a(628),s=a(626),u=a(1323);const m=e=>{const t=e.label,a=e.nom,n=e.table,o=e.options,m=(e.valeur,e.error),d=e.helperText;return r.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(s.a,{htmlFor:a},t),r.a.createElement(l.a,Object.assign({id:a},e),o.map(e=>r.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===n&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===n&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===n&&e.nom+"["+e.adresse+"]"))),r.a.createElement(u.a,null,d))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.table,e.error),c=e.valeur;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:c,error:i,helperText:i?i.message:null},e)))}},1407:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(17),r=a(0),o=a.n(r),i=a(1385),c=a(1358),l=a(1357);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(r.useState)(a),p=Object(n.a)(d,2),b=p[0],g=p[1];return o.a.createElement(l.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1408:function(e,t,a){"use strict";a(0),a(1385),a(1777),a(625),a(628),a(626),a(1323)},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(17),r=a(0),o=a.n(r),i=a(625),c=a(1516),l=a(2233),s=a(1404),u=a(1405),m=a(1385);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(r.useState)(p),f=Object(n.a)(g,2),v=f[0],h=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:s.a,locale:u.a},o.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:v,onChange:e=>(e=>{h(e),b(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1410:function(e,t,a){"use strict";a(17),a(0),a(625),a(1516),a(2187),a(1404),a(1405),a(1385)},1428:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1429:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1431:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1434:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);class c{getTouslesMagasins(e,t,a,n){return Object(o.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,i.b.get("/magasins?itemsPerPage=".concat(t,"&page=").concat(e));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutMagasin(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/magasins",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMagasin(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/magasins/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMagasin(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/magasins/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1441:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(1418),r=a(132),o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e,t){Object(r.a)(1,arguments);var a=t||{},o=null==a.additionalDigits?2:Object(n.a)(a.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,c=u(e);if(c.date){var l=m(c.date,o);i=d(l.restDateString,l.year)}if(isNaN(i)||!i)return new Date(NaN);var s,p=i.getTime(),g=0;if(c.time&&(g=b(c.time),isNaN(g)||null===g))return new Date(NaN);if(!c.timezone){var v=new Date(p+g),h=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds());return h.setFullYear(v.getUTCFullYear()),h}return s=f(c.timezone),isNaN(s)?new Date(NaN):new Date(p+g+s)}function u(e){var t,a={},n=e.split(o.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?(a.date=null,t=n[0]):(a.date=n[0],t=n[1],o.timeZoneDelimiter.test(a.date)&&(a.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var r=o.timezone.exec(t);r?(a.time=t.replace(r[1],""),a.timezone=r[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:null};var r=n[1]&&parseInt(n[1]),o=n[2]&&parseInt(n[2]);return{year:null==o?r:100*o,restDateString:e.slice((n[1]||n[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(i);if(!a)return null;var n=!!a[4],r=p(a[1]),o=p(a[2])-1,c=p(a[3]),l=p(a[4]),s=p(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,l,s)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var r=n.getUTCDay()||7,o=7*(t-1)+a+1-r;return n.setUTCDate(n.getUTCDate()+o),n}(t,l,s):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(v[t]||(h(e)?29:28))}(t,o,c)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,r)?(u.setUTCFullYear(t,o,Math.max(r,c)),u):new Date(NaN)}function p(e){return e?parseInt(e):1}function b(e){var t=e.match(c);if(!t)return null;var a=g(t[1]),n=g(t[2]),r=g(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,n,r)?36e5*a+6e4*n+1e3*r:NaN}function g(e){return e&&parseFloat(e.replace(",","."))||0}function f(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var a="+"===t[1]?-1:1,n=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?a*(36e5*n+6e4*r):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400===0||e%4===0&&e%100}},1461:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);class c{getTouslesClients(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o,c,l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/clients?itemsPerPage=".concat(t,"&page=").concat(e,"&magasin=").concat(null!==(o=null===(c=a.magasin)||void 0===c?void 0:c.id)&&void 0!==o?o:""));case 3:return l=n.sent,n.abrupt("return",l.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/clients",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/clients/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/clients/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/clients/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("clients/"+e.id,{statut:e.statut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleestsocieteClient(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/clients/"+e.id,{estsociete:!e.estsociete});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}ajoutMouvementdecompte(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("clients/mouvement/"+e.client,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1498:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);class c{getTouslesCommunes(e,t,a,n){return Object(o.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,i.b.get("/communes?itemsPerPage=".concat(t,"&page=").concat(e));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutCommune(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1620:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward")},1621:function(e,t,a){"use strict";var n=a(0),r=a(61);t.a=Object(r.a)(n.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward")},2200:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),o=a(0),i=a.n(o),c=a(133),l=a(1419),s=a.n(l),u=a(1400),m=a(448),d=a(2172),p=a(452),b=a(1378),g=a(357),f=a(355),v=a(356),h=a(1390),j=a(1420),E=(a(1421),a(75)),O=a(1372),C=a(1394),y=a(354),w=a(2167),S=a(624),M=a(2166),x=a(2165),D=a(1375),T=a(1397),k=a(1402),P=(a(1407),a(1401),a(1408),a(1409),a(1410),a(2188));function N(e){var t,a,n,r,o,c,l,s,u,d,g,f,v,j,C,N;JSON.parse(sessionStorage.getItem("session")).utilisateur;const A=e.state,R=e.fonctions,F=e.queries,q=e.useform,L=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(y.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(y.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(O.a,{theme:Object(E.a)()},i.a.createElement(b.a,null,i.a.createElement(w.a,{action:i.a.createElement(S.a,{"aria-label":"",onClick:R.AnnulerEnregistrement},"x"),title:"ajout"===A.pagestate.action?"Nouveau":"Mise \xe0 jour",subheader:""}),i.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:q.handleSubmit(L)},i.a.createElement(y.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=A.client)||void 0===t?void 0:t.nom,control:q.control,error:q.errors.nom})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"prenom",nom:"prenom",label:"Prenom",valeur:null===(a=A.client)||void 0===a?void 0:a.prenom,control:q.control,error:q.errors.prenom})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(n=A.client)||void 0===n?void 0:n.telephone,control:q.control,error:q.errors.telephone})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"telephone2",nom:"telephone2",label:"T\xe9l\xe9phone 2",valeur:null===(r=A.client)||void 0===r?void 0:r.telephone2,control:q.control,error:q.errors.telephone2})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"email",nom:"email",label:"Email",valeur:null===(o=A.client)||void 0===o?void 0:o.email,control:q.control,error:q.errors.email})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"contact",nom:"contact",label:"Contact",valeur:null===(c=A.client)||void 0===c?void 0:c.contact,control:q.control,error:q.errors.contact})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"adresse",nom:"adresse",label:"Adresse",valeur:null===(l=A.client)||void 0===l?void 0:l.adresse,control:q.control,error:q.errors.adresse})),i.a.createElement(y.a,{item:!0},F.queryCommunes.isLoading?i.a.createElement(h.a,{message:"chargement des Communes"}):i.a.createElement(k.a,{id:"commune",name:"commune",label:"commune",table:"commune",control:q.control,options:F.queryCommunes.data.rows,error:q.errors.commune,defaultValue:null!==(s=null===(u=A.client)||void 0===u||null===(d=u.Commune)||void 0===d?void 0:d.id)&&void 0!==s?s:"1",valeur:null!==(g=null===(f=A.client)||void 0===f?void 0:f.commune)&&void 0!==g?g:""})),i.a.createElement(y.a,{item:!0},F.queryMagasins.isLoading?i.a.createElement(h.a,{message:"chargement des Magasins"}):i.a.createElement(k.a,{disabled:!0,id:"magasin",name:"magasin",label:"magasin",table:"magasin",control:q.control,options:F.queryMagasins.data.rows,error:q.errors.magasin,defaultValue:null!==(v=null===(j=A.client)||void 0===j?void 0:j.magasin)&&void 0!==v?v:"1",valeur:null!==(C=null===(N=A.client)||void 0===N?void 0:N.magasin)&&void 0!==C?C:""}))))),i.a.createElement(x.a,null,i.a.createElement(y.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(y.a,{item:!0},i.a.createElement(p.a,{color:"primary",variant:"contained",type:"submit",onClick:q.handleSubmit(L)},F.mutationMiseajour.isLoading||F.mutationAjout.isLoading?i.a.createElement(D.a,{color:"inherit"}):i.a.createElement(P.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===A.pagestate.action?i.a.createElement(m.a,null,"Enregistrer"):i.a.createElement(m.a,null,"Mettre \xe0 jour")))),i.a.createElement(y.a,{item:!0},i.a.createElement(p.a,{variant:"outlined",color:"secondary",onClick:R.AnnulerEnregistrement},"Annuler")))))))))}var A=a(1393),R=a(1328),F=a(2168),q=a(2169),L=a(2170),I=a(2171),z=a(1385);const V=C.b().shape({motif:C.c().required("Le champs Motif est requis"),montant:C.a("Le montant doit \xeatre un entier positif").required("Le champs Motif est obligatoire")});function U({state:e,fonctions:t}){const a=e.dialogueMouvement,l=a.id,s=a.titre,u=a.contenu,m=a.operation,d=a.open,b=(a.utilisateur,t.handleClickSurAnnuler),g=t.handleClickSurValider,f={typedemouvement:m,montant:0,client:l,motif:""},v=(Object(c.useQueryClient)(),Object(o.useState)(f)),h=Object(r.a)(v,2),j=h[0],E=h[1],O=e=>{let t=Object(n.a)(Object(n.a)({},f),e);E(t),g(t)},C=Object(z.c)({resolver:Object(A.yupResolver)(V)}),w=C.control,S=C.handleSubmit,M=C.errors;C.reset;return i.a.createElement(R.a,{open:d,"aria-labelledby":"form-dialog-title",titre:s,contenu:u,operation:m},i.a.createElement("form",{onSubmit:S(O)},i.a.createElement(I.a,{id:"form-dialog-title"},s),i.a.createElement(q.a,null,i.a.createElement(L.a,null,u),i.a.createElement(y.a,{container:!0,spacing:3,direction:"column"},i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"montant",nom:"montant",label:"Montant",valeur:j.montant,control:w,error:M.montant,variant:"outlined"})),i.a.createElement(y.a,{item:!0},i.a.createElement(T.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===j||void 0===j?void 0:j.motif,control:w,error:M.motif,multiline:!0,rowsMax:4,variant:"outlined"})))),i.a.createElement(F.a,null,i.a.createElement(y.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(y.a,{item:!0},i.a.createElement(p.a,{onClick:S(O),color:"primary",variant:"outlined"},"credit"===m?"Cr\xe9diter":"D\xe9biter")),i.a.createElement(y.a,{item:!0},i.a.createElement(p.a,{variant:"outlined",color:"secondary",onClick:b},"Annuler"))))))}a(625),a(626),a(628);var Q=a(1777);a(1323);var B=e=>{var t,a;const r=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,C=e.useform,y=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(U,{state:r,fonctions:o}),i.a.createElement(g.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(f.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(m.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(d.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(p.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau"),l.queryClients.isLoading?i.a.createElement(h.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryClients.isError?i.a.createElement(h.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryClients.error,type:"error"}):i.a.createElement(j.a,{tag:"div",blocking:!1},i.a.createElement(O.a,{theme:Object(E.a)()},i.a.createElement(s.a,{title:r.titre,data:l.queryClients.data.rows.map(e=>({client:e})),columns:c,options:Object(n.a)(Object(n.a)({},u.a),{},{serverSide:!0,count:l.queryClients.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},u.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},u.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.client)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(N,{state:r,fonctions:o,queries:l,useform:C,onSubmit:y}))},W=a(13),H=a(87),Y=a(1431),Z=a(1428),$=a(1429),J=a(1620),G=a(1621),K=a(2189),X=a(344),_=a(1358),ee=a(1332),te=a(1376),ae=a(2161),ne=a(1441);Object(X.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function re(e){const t=Object(X.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=e=>{switch(e.statut){case"Annl\xe9e":return"bg-error";case"Nouveau":return"bg-primary";case"Client VIP":return"bg-green";default:return"bg-primary"}},n=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"client",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"client",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r,o,c,l,s;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{whiteSpace:"nowrap"}},i.a.createElement("strong",null,null!==(n=null===e||void 0===e?void 0:e.nom)&&void 0!==n?n:""," ",null!==(r=e.prenom)&&void 0!==r?r:""," ")),i.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(o=null===e||void 0===e?void 0:e.telephone)&&void 0!==o?o:""," / ",null!==(c=null===e||void 0===e?void 0:e.telephone2)&&void 0!==c?c:""),i.a.createElement("br",null),i.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(l=null===e||void 0===e||null===(s=e.Commune)||void 0===s?void 0:s.nom)&&void 0!==l?l:""))}}},{name:"client",label:"Solde",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e.compte.toLocaleString("fr-FR")}},{name:"client",label:"Magasin",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.Magasin)||void 0===r?void 0:r.nom)&&void 0!==n?n:""}}},{name:"client",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,n)=>i.a.createElement(_.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"client",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(n,r,o)=>i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(H.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(ee.a,{xsDown:!0},i.a.createElement(p.a,{size:"small",variant:"text",color:"primary",endIcon:i.a.createElement(K.a,null)},i.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+a(n)},n.statut))))},(e=>{switch(e.statut){case"Annul\xe9e":return[];case"Client normal":return[{id:1,nom:"Client VIP",statut:"Client VIP"}];case"Client VIP":return[{id:1,nom:"Client normal",statut:"Client normal"}];default:return[]}})(n).map(t=>i.a.createElement(Q.a,{onClick:()=>e.handleChangementStatut({id:n.id,statut:t.statut}),key:t.id,value:t.statut},t.nom)))))}},{name:"client",label:"Est soci\xe9t\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,n)=>i.a.createElement(_.a,{checked:t.estsociete,onChange:()=>e.handleTogleestsociete(t)})}},{name:"client",label:"Contact",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=e.contact)&&void 0!==n?n:""}}},{name:"client",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.adresse)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"client",label:"Cree le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.creele?" ":Object(ae.a)(Object(ne.a)(e.creele),"dd/MM/yyyy HH:mm")}},{name:"client",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,r)=>i.a.createElement("div",null,i.a.createElement(H.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(ee.a,{xsDown:!0},i.a.createElement(p.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(K.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>n(e,"D\xe9tails"),icon:i.a.createElement(Y.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>n(e,"D\xe9tails"),icon:i.a.createElement(Y.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>n(e,"Modifier"),icon:i.a.createElement(Z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>n(e,"Supprimer"),icon:i.a.createElement($.a,{color:"error"})}];default:return[{id:1,nom:"Cr\xe9diter le compte",action:e=>n(e,"Crediter"),icon:i.a.createElement(J.a,{color:"success"})},{id:2,nom:"D\xe9biter  le compte",action:e=>n(e,"Debiter"),icon:i.a.createElement(G.a,{color:"error"})},{id:3,nom:"Modifier",action:e=>n(e,"Modifier"),icon:i.a.createElement(Z.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Q.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(te.a,null)))))}}]}a(1398);var oe=a(1498),ie=a(1434),ce=a(1461);t.default=()=>{const e=JSON.parse(sessionStorage.getItem("session")).utilisateur,t={nom:"",prenom:"",photo:"",actif:!0,telephone:"",telephone2:"",email:"",estsociete:!1,contact:"",commune:1,magasin:e.magasin},a={client:t,client1:null,titre:"Mes clients",tableconfig:{page:0,rowsPerPage:30,recherche:{magasin:{id:e.magasin}},filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialogueMouvement:{open:!1,titre:"",contenu:"",operation:"credit",client:0,id:0}},l=Object(o.useState)(a),s=Object(r.a)(l,2),u=s[0],m=s[1];let d=new ce.a,p=new oe.a,b=new ie.a;const g=Object(c.useQueryClient)(),f=Object(c.useMutation)(d.misajourStatutClient,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{g.invalidateQueries("Clients")}}),v={handleFermetureAlerte:()=>{m(Object(n.a)(Object(n.a)({},u),{},{titre:"Mes clients",alert:Object(n.a)(Object(n.a)({},u.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(n.a)(Object(n.a)({},u),{},{client:t,titre:"Nouveau",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:Object(n.a)(Object(n.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),m(Object(n.a)(Object(n.a)({},u),{},{titre:"Mes clients",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{M.mutate(u.client)},handleCloseDialoguephoto:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialoguephoto:Object(n.a)(Object(n.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"Crediter":console.log("cr\xe9dit du compte client"),m(Object(n.a)(Object(n.a)({},u),{},{dialogueMouvement:Object(n.a)(Object(n.a)({},u.dialogueMouvement),{},{open:!0,titre:"Cr\xe9dit du compte client ID: ".concat(e.id," (").concat(e.nom," - ").concat(e.telephone,")"),contenu:"Saisir le montant \xe0 cr\xe9diter,  solde actuel: ".concat(e.compte," "),operation:"credit",id:e.id,client:e})}));break;case"Debiter":console.log("d\xe9bit du compte client"),m(Object(n.a)(Object(n.a)({},u),{},{dialogueMouvement:Object(n.a)(Object(n.a)({},u.dialogueMouvement),{},{open:!0,titre:"D\xe9bit du compte client ID: ".concat(e.id," (").concat(e.nom," - ").concat(e.telephone,")"),contenu:"Saisir le montant \xe0 d\xe9biter,  solde actuel: ".concat(e.compte," "),operation:"debit",id:e.id,client:e})}));break;case"Modifier":m(Object(n.a)(Object(n.a)({},u),{},{titre:"Mise \xe0 jour ",client:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(n.a)(Object(n.a)({},u),{},{client:e,dialogueSuppressionOuvert:!0}))}},handleClickSurValider:e=>{console.log(e),x.mutate(e)},handleClickSurAnnuler:e=>{m(Object(n.a)(Object(n.a)({},u),{},{dialogueMouvement:Object(n.a)(Object(n.a)({},u.dialogueMouvement),{},{open:!1})}))},handleChangemagasin:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{recherche:Object(n.a)(Object(n.a)({},u.tableconfig.recherche),{},{magasin:{id:e.target.value}})})}))},handleTogleactif:e=>{w.mutate(e)},handledatecreelechange:e=>{m(Object(n.a)(Object(n.a)({},u),{},{client:Object(n.a)(Object(n.a)({},u.client),{},{creele:e})}))},handleChangementStatut:e=>{f.mutate({id:e.id,statut:e.statut})},handleTogleestsociete:e=>{S.mutate(e)}},h=Object(c.useQuery)(["Clients",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>d.getTouslesClients(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),j=Object(c.useQuery)(["Communes",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesCommunes(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),E=Object(c.useQuery)(["Magasins",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>b.getTouslesMagasins(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),O=Object(c.useMutation)(d.ajoutClient,{onSuccess:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),y=Object(c.useMutation)(d.miseajourClient,{onSuccess:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),w=Object(c.useMutation)(d.togleactifClient,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{g.invalidateQueries("Clients")}}),S=Object(c.useMutation)(d.togleestsocieteClient,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{g.invalidateQueries("Clients")}}),M=Object(c.useMutation)(d.suppressionClient,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Clients")}}),x=Object(c.useMutation)(d.ajoutMouvementdecompte,{onSuccess:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{dialogueMouvement:Object(n.a)(Object(n.a)({},u.fialogueMouvement),{},{open:!1}),alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Clients"),m(Object(n.a)(Object(n.a)({},u),{},{dialogueMouvement:Object(n.a)(Object(n.a)({},u.fialogueMouvement),{},{open:!1}),alert:{message:"Echec lors de l'enregistrement du mouvement",open:!0,severity:"error",automaticClose:!0}}))}}),D={queryClients:h,queryMagasins:E,mutationMiseajour:y,mutationAjout:O,mutationSuppression:M,queryCommunes:j},T=re(v),k=C.b().shape({nom:C.c().required("Le champs Nom est requis"),telephone:C.c().required("Le champs T\xe9l\xe9phone est requis")}),P=Object(z.c)({resolver:Object(A.yupResolver)(k),defaultValues:{client:u.client}});return i.a.createElement(B,{state:u,fonctions:v,collonnes:T,queries:D,useform:P,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},u.client),e);void 0!==(null===(t=u.client)||void 0===t?void 0:t.id)?D.mutationMiseajour.mutate(Object(n.a)({},a)):D.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);