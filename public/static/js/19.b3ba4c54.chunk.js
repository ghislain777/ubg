(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[19],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(3),n=a(0),o=a.n(n),s=a(353),i=a(1374);function u(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(s.a,{item:!0}),o.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1388:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(624),s=a(449),i=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,u=e.valeur,c=e.control,l=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(i.a,{name:a,as:n.a.createElement(s.a,Object.assign({},e,{id:t,type:"text",helperText:l?l.message:null,label:r,error:!!l})),control:c,defaultValue:u,rules:{required:"Required"}})))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),s=a(75);function i(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var a,r,o,i,u,c,l,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,i=t.champ,u=t.objet,c=t.obj,l=t.handleprogress,(m=new FormData).append(c.cle,u.id),m.append("modele",o),m.append("champ",i),m.append("nom",r),m.append("cle",c.cle),m.append("valeur",c.valeur),m.append("file",a),e.next=11,s.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:l});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1381),s=a(1682),i=a(624),u=a(627),c=a(625),l=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error),d=e.helperText;return n.a.createElement(i.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(c.a,{htmlFor:a},t),n.a.createElement(u.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(s.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(l.a,null,d))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,s=(e.table,e.error),i=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,error:s,helperText:s?s.message:null},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(0),n=a.n(r),o=a(1408),s=a(343),i=a(1728),u=(a(60),a(357)),c=a(353);function l(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,l=e.progress,m=Object(s.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(u.a,{value:l}),l,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(0),o=a.n(n),s=a(1381),i=a(1357),u=a(1356);function c(e){const t=e.nom,a=e.coche,c=e.control,l=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),f=p[0],b=p[1];return o.a.createElement(u.a,{control:o.a.createElement(s.a,{name:t,control:c,render:e=>o.a.createElement(i.a,Object.assign({},e,{checked:f,onChange:t=>{e.onChange(t.target.checked),b(!f),l(!f)}}))}),label:null==m?t:m})}},1397:function(e,t,a){"use strict";a(0),a(1381),a(1682),a(624),a(627),a(625),a(1322)},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),o=a.n(n),s=a(624),i=a(1458),u=a(2081),c=a(1393),l=a(1394),m=a(1381);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),f=(e.id,e.handledatechange),b=Object(n.useState)(p),g=Object(r.a)(b,2),h=g[0],v=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(i.a,{utils:c.a,locale:l.a},o.a.createElement(u.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),f(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1399:function(e,t,a){"use strict";a(17),a(0),a(624),a(1458),a(2043),a(1393),a(1394),a(1381)},1409:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1436:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(1401),n=a(132),o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,i=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e,t){Object(n.a)(1,arguments);var a=t||{},o=null==a.additionalDigits?2:Object(r.a)(a.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var s,i=l(e);if(i.date){var u=m(i.date,o);s=d(u.restDateString,u.year)}if(isNaN(s)||!s)return new Date(NaN);var c,p=s.getTime(),b=0;if(i.time&&(b=f(i.time),isNaN(b)||null===b))return new Date(NaN);if(!i.timezone){var h=new Date(p+b),v=new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds());return v.setFullYear(h.getUTCFullYear()),v}return c=g(i.timezone),isNaN(c)?new Date(NaN):new Date(p+b+c)}function l(e){var t,a={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],o.timeZoneDelimiter.test(a.date)&&(a.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=o.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?n:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(s);if(!a)return null;var r=!!a[4],n=p(a[1]),o=p(a[2])-1,i=p(a[3]),u=p(a[4]),c=p(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,u,c)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,o=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+o),r}(t,u,c):new Date(NaN);var l=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(h[t]||(v(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(v(e)?366:365)}(t,n)?(l.setUTCFullYear(t,o,Math.max(n,i)),l):new Date(NaN)}function p(e){return e?parseInt(e):1}function f(e){var t=e.match(i);if(!t)return null;var a=b(t[1]),r=b(t[2]),n=b(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function g(e){if("Z"===e)return 0;var t=e.match(u);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400===0||e%4===0&&e%100}},1459:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),s=a(75);class i{getTouslesCommunes(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/communes?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1460:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),s=a(75);class i{getTouslesFournisseurs(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/fournisseurs?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/fournisseurs",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/fournisseurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("fournisseurs/"+e.id,{statut:e.statut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleestsocieteFournisseur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,{estsociete:!e.estsociete});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2078:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),s=a.n(o),i=a(1460),u=a(133),c=a(1404),l=a.n(c),m=a(1390),d=a(447),p=a(2028),f=a(451),b=a(1377),g=a(356),h=a(354),v=a(355),j=a(1382),E=a(1405),O=(a(1406),a(75)),y=a(1371),w=a(1385),C=a(353),F=a(2023),S=a(623),x=a(2022),T=a(2021),D=a(1374),N=a(1388),P=a(1391),M=(a(1396),a(1392),a(1397),a(1398),a(1399),a(2044));function k(e){var t,a,r,n,o,i,u,c,l,m,p;const g=e.state,h=e.fonctions,v=e.queries,E=e.useform,w=e.onSubmit;return s.a.createElement("div",null,s.a.createElement(C.a,{container:!0,spacing:1,justify:"center"},s.a.createElement(C.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(y.a,{theme:Object(O.a)()},s.a.createElement(b.a,null,s.a.createElement(F.a,{action:s.a.createElement(S.a,{"aria-label":"",onClick:h.AnnulerEnregistrement},"x"),title:"ajout"===g.pagestate.action?"Nouveau fournisseur":"Mise \xe0 jour",subheader:""}),s.a.createElement(x.a,{className:" px-6 pt-6 pb-6"}," ",s.a.createElement("form",{onSubmit:E.handleSubmit(w)},s.a.createElement(C.a,{container:!0,spacing:4,direction:"column"},s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=g.fournisseur)||void 0===t?void 0:t.nom,control:E.control,error:E.errors.nom})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"prenom",nom:"prenom",label:"Prenom",valeur:null===(a=g.fournisseur)||void 0===a?void 0:a.prenom,control:E.control,error:E.errors.prenom})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(r=g.fournisseur)||void 0===r?void 0:r.telephone,control:E.control,error:E.errors.telephone})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"telephone2",nom:"telephone2",label:"T\xe9l\xe9phone 2",valeur:null===(n=g.fournisseur)||void 0===n?void 0:n.telephone2,control:E.control,error:E.errors.telephone2})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"email",nom:"email",label:"Email",valeur:null===(o=g.fournisseur)||void 0===o?void 0:o.email,control:E.control,error:E.errors.email})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"contact",nom:"contact",label:"Contact",valeur:null===(i=g.fournisseur)||void 0===i?void 0:i.contact,control:E.control,error:E.errors.contact})),s.a.createElement(C.a,{item:!0},v.queryCommunes.isLoading?s.a.createElement(j.a,{message:"chargement des Communes"}):s.a.createElement(P.a,{id:"commune",name:"commune",label:"commune",table:"commune",control:E.control,options:v.queryCommunes.data.rows,error:E.errors.commune,defaultValue:null!==(u=null===(c=g.fournisseur)||void 0===c||null===(l=c.Commune)||void 0===l?void 0:l.id)&&void 0!==u?u:"1",valeur:null!==(m=null===(p=g.fournisseur)||void 0===p?void 0:p.commune)&&void 0!==m?m:""}))))),s.a.createElement(T.a,null,s.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},s.a.createElement(C.a,{item:!0},s.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:E.handleSubmit(w)},v.mutationMiseajour.isLoading||v.mutationAjout.isLoading?s.a.createElement(D.a,{color:"inherit"}):s.a.createElement(M.a,null),s.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===g.pagestate.action?s.a.createElement(d.a,null,"Enregistrer"):s.a.createElement(d.a,null,"Mettre \xe0 jour")))),s.a.createElement(C.a,{item:!0},s.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:h.AnnulerEnregistrement},"Annuler")))))))))}var A=e=>{var t,a;const n=e.state,o=e.fonctions,i=e.collonnes,u=e.queries,c=e.useform,w=e.onSubmit;return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement(g.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(h.a,{routeSegments:[{name:n.titre}]})),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(d.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?s.a.createElement(p.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},s.a.createElement("div",null,s.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau fournisseur"),u.queryFournisseurs.isLoading?s.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):u.queryFournisseurs.isError?s.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+u.queryFournisseurs.error,type:"error"}):s.a.createElement(E.a,{tag:"div",blocking:!1},s.a.createElement(y.a,{theme:Object(O.a)()},s.a.createElement(l.a,{title:n.titre,data:u.queryFournisseurs.data.rows.map(e=>({fournisseur:e})),columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:u.queryFournisseurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),s.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},s.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.fournisseur)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):s.a.createElement(k,{state:n,fonctions:o,queries:u,useform:c,onSubmit:w}))},R=a(13),q=a(87),I=a(1409),z=a(1410),L=a(1411),U=a(2045),V=a(343),Q=a(1357),B=a(1331),W=a(1682),Y=a(1375),Z=a(2014),H=a(1436);Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function $(e){const t=Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=e=>{switch(e.statut){case"Annl\xe9e":return"bg-error";case"Nouveau":return"bg-primary";case"Fournisseur VIP":return"bg-green";default:return"bg-primary"}},r=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"fournisseur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"fournisseur",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,o,i,u,c;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{whiteSpace:"nowrap"}},s.a.createElement("strong",null,null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:""," ",null!==(n=e.prenom)&&void 0!==n?n:""," ")),s.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(o=null===e||void 0===e?void 0:e.telephone)&&void 0!==o?o:""," / ",null!==(i=null===e||void 0===e?void 0:e.telephone2)&&void 0!==i?i:""),s.a.createElement("br",null),s.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(u=null===e||void 0===e||null===(c=e.Commune)||void 0===c?void 0:c.nom)&&void 0!==u?u:""))}}},{name:"fournisseur",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>s.a.createElement(Q.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"fournisseur",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(r,n,o)=>s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(q.j,{menuButton:s.a.createElement("div",{className:t.userMenu},s.a.createElement(B.a,{xsDown:!0},s.a.createElement(f.a,{size:"small",variant:"text",color:"primary",endIcon:s.a.createElement(U.a,null)},s.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+a(r)},r.statut))))},(e=>{switch(e.statut){case"Annul\xe9e":return[];case"Fournisseur normal":return[{id:1,nom:"Fournisseur VIP",statut:"Fournisseur VIP"}];case"Fournisseur VIP":return[{id:1,nom:"Fournisseur normal",statut:"Fournisseur normal"}];default:return[]}})(r).map(t=>s.a.createElement(W.a,{onClick:()=>e.handleChangementStatut({id:r.id,statut:t.statut}),key:t.id,value:t.statut},t.nom)))))}},{name:"fournisseur",label:"Est soci\xe9t\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>s.a.createElement(Q.a,{checked:t.estsociete,onChange:()=>e.handleTogleestsociete(t)})}},{name:"fournisseur",label:"Contact",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.contact)&&void 0!==r?r:""}}},{name:"fournisseur",label:"Cr\xe9e le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.creele?" ":Object(Z.a)(Object(H.a)(e.creele),"dd/MM/yyyy")}},{name:"fournisseur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,n)=>s.a.createElement("div",null,s.a.createElement(q.j,{menuButton:s.a.createElement("div",{className:t.userMenu},s.a.createElement(B.a,{xsDown:!0},s.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:s.a.createElement(U.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:s.a.createElement(I.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:s.a.createElement(I.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:s.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>r(e,"Supprimer"),icon:s.a.createElement(L.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:s.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>s.a.createElement(s.a.Fragment,null,s.a.createElement(W.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",s.a.createElement("span",{className:"ml-5"},t.nom)),s.a.createElement(Y.a,null)))))}}]}var G=a(1381),J=(a(1389),a(1384)),K=a(1459);t.default=()=>{const e={fournisseur:{nom:"",prenom:"",photo:"",actif:"",creele:"",statut:"",telephone:"",telephone2:"",email:"",estsociete:"",contact:"",commune:1},fournisseur1:null,titre:"Gestion des fournisseurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];let m=new i.a,d=new K.a;const p=Object(u.useQueryClient)(),f=Object(u.useMutation)(m.misajourStatutFournisseur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),b={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des fournisseurs",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},c),{},{fournisseur:null,titre:"Nouveau fournisseur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des fournisseurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{y.mutate(c.fournisseur)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",fournisseur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},c),{},{fournisseur:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{E.mutate(e)},handledatecreelechange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{fournisseur:Object(r.a)(Object(r.a)({},c.fournisseur),{},{creele:e})}))},handleChangementStatut:({id:e,statut:t})=>{f.mutate({id:e,statut:t})},handleTogleestsociete:e=>{O.mutate(e)}},g=Object(u.useQuery)(["Fournisseurs",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>m.getTouslesFournisseurs(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(u.useQuery)(["Communes",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>d.getTouslesCommunes(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),v=Object(u.useMutation)(m.ajoutFournisseur,{onSuccess:()=>{p.invalidateQueries("Fournisseurs"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Fournisseurs"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(u.useMutation)(m.miseajourFournisseur,{onSuccess:()=>{p.invalidateQueries("Fournisseurs"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Fournisseurs"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(u.useMutation)(m.togleactifFournisseur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),O=Object(u.useMutation)(m.togleestsocieteFournisseur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),y=Object(u.useMutation)(m.suppressionFournisseur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),C={queryFournisseurs:g,mutationMiseajour:j,mutationAjout:v,mutationSuppression:y,queryCommunes:h},F=$(b),S=w.b().shape({nom:w.c().required("Le champs Nom est requis"),telephone:w.c().required("Le champs T\xe9l\xe9phone est requis")}),x=Object(G.c)({resolver:Object(J.yupResolver)(S),defaultValues:{fournisseur:c.fournisseur}});return s.a.createElement(A,{state:c,fonctions:b,collonnes:F,queries:C,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.fournisseur),e);void 0!==(null===(t=c.fournisseur)||void 0===t?void 0:t.id)?C.mutationMiseajour.mutate(Object(r.a)({},a)):C.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);