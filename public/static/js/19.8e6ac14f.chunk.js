(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[19],{1382:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(3),n=r(0),o=r.n(n),s=r(353),i=r(1374);function u(e){const t=Object(a.a)({},e),r=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(s.a,{item:!0}),o.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,r,".")))}},1388:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(624),s=r(449),i=r(1381);t.a=e=>{const t=e.id,r=e.nom,a=e.label,u=e.valeur,c=e.control,l=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(i.a,{name:r,as:n.a.createElement(s.a,Object.assign({},e,{id:t,type:"text",helperText:l?l.message:null,label:a,error:!!l})),control:c,defaultValue:u,rules:{required:"Required"}})))}},1389:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(20),n=r.n(a),o=r(39),s=r(75);function i(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var r,a,o,i,u,c,l,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.fichier,a=t.nom,o=t.modele,i=t.champ,u=t.objet,c=t.obj,l=t.handleprogress,(m=new FormData).append(c.cle,u.id),m.append("modele",o),m.append("champ",i),m.append("nom",a),m.append("cle",c.cle),m.append("valeur",c.valeur),m.append("file",r),e.next=11,s.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:l});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const a={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1381),s=r(1682),i=r(624),u=r(627),c=r(625),l=r(1322);const m=e=>{const t=e.label,r=e.nom,a=e.table,o=e.options,m=(e.valeur,e.error),d=e.helperText;return n.a.createElement(i.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(c.a,{htmlFor:r},t),n.a.createElement(u.a,Object.assign({id:r},e),o.map(e=>n.a.createElement(s.a,{key:e.id,value:e.id},e.nom,"vehicule"===a&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===a&&" ("+e.typederequete.nom+")","utilisateur"===a&&" "+e.prenom,"tarif"===a&&"("+e.montant+")","contrat"===a&&e.client.nom+"("+e.produit.nom+")","offre"===a&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===a&&e.nom+"["+e.adresse+"]","fournisseur"===a&&e.nom+"["+e.adresse+"]"))),n.a.createElement(l.a,null,d))};t.a=function(e){const t=e.nom,r=e.label,a=e.control,s=(e.table,e.error),i=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:a,nom:t,label:r,valeur:i,error:s,helperText:s?s.message:null},e)))}},1392:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(0),n=r.n(a),o=r(1408),s=r(343),i=r(1728),u=(r(60),r(357)),c=r(353);function l(e){const t=e.onUpload,r=e.onSupprimer,a=e.titre,l=e.progress,m=Object(s.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==a&&void 0!==a?a:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,r)=>{let a="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(a+="Type de fichier non support\xe9"),e.size>r&&(a+="Fichier trop volumineux."),a},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var r;return t(null!==(r=e[0])&&void 0!==r?r:null)},onDelete:r})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(u.a,{value:l}),l,"%"))}},1396:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(17),n=r(0),o=r.n(n),s=r(1381),i=r(1357),u=r(1356);function c(e){const t=e.nom,r=e.coche,c=e.control,l=e.changement,m=e.label,d=Object(n.useState)(r),p=Object(a.a)(d,2),f=p[0],b=p[1];return o.a.createElement(u.a,{control:o.a.createElement(s.a,{name:t,control:c,render:e=>o.a.createElement(i.a,Object.assign({},e,{checked:f,onChange:t=>{e.onChange(t.target.checked),b(!f),l(!f)}}))}),label:null==m?t:m})}},1397:function(e,t,r){"use strict";r(0),r(1381),r(1682),r(624),r(627),r(625),r(1322)},1398:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(17),n=r(0),o=r.n(n),s=r(624),i=r(1458),u=r(2081),c=r(1393),l=r(1394),m=r(1381);function d(e){const t=e.nom,r=e.label,d=e.control,p=(e.error,e.valeur),f=(e.id,e.handledatechange),b=Object(n.useState)(p),g=Object(a.a)(b,2),v=g[0],h=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(i.a,{utils:c.a,locale:l.a},o.a.createElement(u.a,{id:t,label:r,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:r,inputVariant:"outlined",value:v,onChange:e=>(e=>{h(e),f(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1399:function(e,t,r){"use strict";r(17),r(0),r(624),r(1458),r(2043),r(1393),r(1394),r(1381)},1409:function(e,t,r){"use strict";var a=r(0),n=r(61);t.a=Object(n.a)(a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,r){"use strict";var a=r(0),n=r(61);t.a=Object(n.a)(a.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,r){"use strict";var a=r(0),n=r(61);t.a=Object(n.a)(a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1436:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(1401),n=r(132),o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,i=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e,t){Object(n.a)(1,arguments);var r=t||{},o=null==r.additionalDigits?2:Object(a.a)(r.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var s,i=l(e);if(i.date){var u=m(i.date,o);s=d(u.restDateString,u.year)}if(isNaN(s)||!s)return new Date(NaN);var c,p=s.getTime(),b=0;if(i.time&&(b=f(i.time),isNaN(b)||null===b))return new Date(NaN);if(!i.timezone){var v=new Date(p+b),h=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds());return h.setFullYear(v.getUTCFullYear()),h}return c=g(i.timezone),isNaN(c)?new Date(NaN):new Date(p+b+c)}function l(e){var t,r={},a=e.split(o.dateTimeDelimiter);if(a.length>2)return r;if(/:/.test(a[0])?(r.date=null,t=a[0]):(r.date=a[0],t=a[1],o.timeZoneDelimiter.test(r.date)&&(r.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(r.date.length,e.length))),t){var n=o.timezone.exec(t);n?(r.time=t.replace(n[1],""),r.timezone=n[1]):r.time=t}return r}function m(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(r);if(!a)return{year:null};var n=a[1]&&parseInt(a[1]),o=a[2]&&parseInt(a[2]);return{year:null==o?n:100*o,restDateString:e.slice((a[1]||a[2]).length)}}function d(e,t){if(null===t)return null;var r=e.match(s);if(!r)return null;var a=!!r[4],n=p(r[1]),o=p(r[2])-1,i=p(r[3]),u=p(r[4]),c=p(r[5])-1;if(a)return function(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}(0,u,c)?function(e,t,r){var a=new Date(0);a.setUTCFullYear(e,0,4);var n=a.getUTCDay()||7,o=7*(t-1)+r+1-n;return a.setUTCDate(a.getUTCDate()+o),a}(t,u,c):new Date(NaN);var l=new Date(0);return function(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(v[t]||(h(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,n)?(l.setUTCFullYear(t,o,Math.max(n,i)),l):new Date(NaN)}function p(e){return e?parseInt(e):1}function f(e){var t=e.match(i);if(!t)return null;var r=b(t[1]),a=b(t[2]),n=b(t[3]);return function(e,t,r){if(24===e)return 0===t&&0===r;return r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}(r,a,n)?36e5*r+6e4*a+1e3*n:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function g(e){if("Z"===e)return 0;var t=e.match(u);if(!t)return 0;var r="+"===t[1]?-1:1,a=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?r*(36e5*a+6e4*n):NaN}var v=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400===0||e%4===0&&e%100}},1459:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(20),n=r.n(a),o=r(39),s=r(75);class i{getTouslesCommunes(e,t,r,a){return Object(o.a)(n.a.mark((function a(){var o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,s.b.get("/communes?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(r," "));case 3:return o=a.sent,a.abrupt("return",o.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutCommune(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/communes",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/communes/"+e.id,e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}}},1461:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(20),n=r.n(a),o=r(39),s=r(75);class i{getTouslesFournisseurs(e,t,r,a){return Object(o.a)(n.a.mark((function a(){var o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,s.b.get("/fournisseurs?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(r," "));case 3:return o=a.sent,a.abrupt("return",o.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/fournisseurs",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/fournisseurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,{actif:!e.actif});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("fournisseurs/"+e.id,{statut:e.statut});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}togleestsocieteFournisseur(e){return Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/fournisseurs/"+e.id,{estsociete:!e.estsociete});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()}}},2078:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(17),o=r(0),s=r.n(o),i=r(1461),u=r(133),c=r(1404),l=r.n(c),m=r(1390),d=r(447),p=r(2028),f=r(451),b=r(1377),g=r(356),v=r(354),h=r(355),j=r(1382),E=r(1405),O=(r(1406),r(75)),y=r(1371),w=r(1385),C=r(353),F=r(2023),S=r(623),x=r(2022),T=r(2021),D=r(1374),N=r(1388),P=r(1391),M=(r(1396),r(1392),r(1397),r(1398),r(1399),r(2044));function k(e){var t,r,a,n,o,i,u,c,l,m,p,g;const v=e.state,h=e.fonctions,E=e.queries,w=e.useform,k=e.onSubmit;return s.a.createElement("div",null,s.a.createElement(C.a,{container:!0,spacing:1,justify:"center"},s.a.createElement(C.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(y.a,{theme:Object(O.a)()},s.a.createElement(b.a,null,s.a.createElement(F.a,{action:s.a.createElement(S.a,{"aria-label":"",onClick:h.AnnulerEnregistrement},"x"),title:"ajout"===v.pagestate.action?"Nouveau fournisseur":"Mise \xe0 jour",subheader:""}),s.a.createElement(x.a,{className:" px-6 pt-6 pb-6"}," ",s.a.createElement("form",{onSubmit:w.handleSubmit(k)},s.a.createElement(C.a,{container:!0,spacing:4,direction:"column"},s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=v.fournisseur)||void 0===t?void 0:t.nom,control:w.control,error:w.errors.nom})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"prenom",nom:"prenom",label:"Prenom",valeur:null===(r=v.fournisseur)||void 0===r?void 0:r.prenom,control:w.control,error:w.errors.prenom})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(a=v.fournisseur)||void 0===a?void 0:a.telephone,control:w.control,error:w.errors.telephone})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"telephone2",nom:"telephone2",label:"T\xe9l\xe9phone 2",valeur:null===(n=v.fournisseur)||void 0===n?void 0:n.telephone2,control:w.control,error:w.errors.telephone2})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"email",nom:"email",label:"Email",valeur:null===(o=v.fournisseur)||void 0===o?void 0:o.email,control:w.control,error:w.errors.email})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"contact",nom:"contact",label:"Contact",valeur:null===(i=v.fournisseur)||void 0===i?void 0:i.contact,control:w.control,error:w.errors.contact})),s.a.createElement(C.a,{item:!0},s.a.createElement(N.a,{id:"adresse",nom:"adresse",label:"Adresse",valeur:null===(u=v.fournisseur)||void 0===u?void 0:u.adresse,control:w.control,error:w.errors.adresse})),s.a.createElement(C.a,{item:!0},E.queryCommunes.isLoading?s.a.createElement(j.a,{message:"chargement des Communes"}):s.a.createElement(P.a,{id:"commune",name:"commune",label:"commune",table:"commune",control:w.control,options:E.queryCommunes.data.rows,error:w.errors.commune,defaultValue:null!==(c=null===(l=v.fournisseur)||void 0===l||null===(m=l.Commune)||void 0===m?void 0:m.id)&&void 0!==c?c:"1",valeur:null!==(p=null===(g=v.fournisseur)||void 0===g?void 0:g.commune)&&void 0!==p?p:""}))))),s.a.createElement(T.a,null,s.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},s.a.createElement(C.a,{item:!0},s.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:w.handleSubmit(k)},E.mutationMiseajour.isLoading||E.mutationAjout.isLoading?s.a.createElement(D.a,{color:"inherit"}):s.a.createElement(M.a,null),s.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===v.pagestate.action?s.a.createElement(d.a,null,"Enregistrer"):s.a.createElement(d.a,null,"Mettre \xe0 jour")))),s.a.createElement(C.a,{item:!0},s.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:h.AnnulerEnregistrement},"Annuler")))))))))}var A=e=>{var t,r;const n=e.state,o=e.fonctions,i=e.collonnes,u=e.queries,c=e.useform,w=e.onSubmit;return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement(g.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(v.a,{routeSegments:[{name:n.titre}]})),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(d.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?s.a.createElement(p.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},s.a.createElement("div",null,s.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau fournisseur"),u.queryFournisseurs.isLoading?s.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):u.queryFournisseurs.isError?s.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+u.queryFournisseurs.error,type:"error"}):s.a.createElement(E.a,{tag:"div",blocking:!1},s.a.createElement(y.a,{theme:Object(O.a)()},s.a.createElement(l.a,{title:n.titre,data:u.queryFournisseurs.data.rows.map(e=>({fournisseur:e})),columns:i,options:Object(a.a)(Object(a.a)({},m.a),{},{serverSide:!0,count:u.queryFournisseurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(a.a)(Object(a.a)({},m.a.textLabels),{},{toolbar:Object(a.a)(Object(a.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),s.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},s.a.createElement(h.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(r=n.fournisseur)||void 0===r?void 0:r.nom))&&void 0!==t?t:""})))):s.a.createElement(k,{state:n,fonctions:o,queries:u,useform:c,onSubmit:w}))},R=r(13),q=r(87),I=r(1409),z=r(1410),L=r(1411),U=r(2045),V=r(343),B=r(1357),Q=r(1331),W=r(1682),Y=r(1375),Z=r(2014),H=r(1436);Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function $(e){const t=Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),r=e=>{switch(e.statut){case"Annl\xe9e":return"bg-error";case"Nouveau":return"bg-primary";case"Fournisseur VIP":return"bg-green";default:return"bg-primary"}},a=(t,r)=>{e.handleClickSurAction(t,r)};return[{name:"fournisseur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,r)=>{var a,n;return null!==(a=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==a?a:""}}},{name:"fournisseur",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,r)=>{var a,n,o,i,u,c;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{whiteSpace:"nowrap"}},s.a.createElement("strong",null,null!==(a=null===e||void 0===e?void 0:e.nom)&&void 0!==a?a:""," ",null!==(n=e.prenom)&&void 0!==n?n:""," ")),s.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(o=null===e||void 0===e?void 0:e.telephone)&&void 0!==o?o:""," / ",null!==(i=null===e||void 0===e?void 0:e.telephone2)&&void 0!==i?i:""),s.a.createElement("br",null),s.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(u=null===e||void 0===e||null===(c=e.Commune)||void 0===c?void 0:c.nom)&&void 0!==u?u:""))}}},{name:"fournisseur",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,r,a)=>s.a.createElement(B.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"fournisseur",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,n,o)=>s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(q.j,{menuButton:s.a.createElement("div",{className:t.userMenu},s.a.createElement(Q.a,{xsDown:!0},s.a.createElement(f.a,{size:"small",variant:"text",color:"primary",endIcon:s.a.createElement(U.a,null)},s.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+r(a)},a.statut))))},(e=>{switch(e.statut){case"Annul\xe9e":return[];case"Fournisseur normal":return[{id:1,nom:"Fournisseur VIP",statut:"Fournisseur VIP"}];case"Fournisseur VIP":return[{id:1,nom:"Fournisseur normal",statut:"Fournisseur normal"}];default:return[]}})(a).map(t=>s.a.createElement(W.a,{onClick:()=>e.handleChangementStatut({id:a.id,statut:t.statut}),key:t.id,value:t.statut},t.nom)))))}},{name:"fournisseur",label:"Est soci\xe9t\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,r,a)=>s.a.createElement(B.a,{checked:t.estsociete,onChange:()=>e.handleTogleestsociete(t)})}},{name:"fournisseur",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,r)=>{var a;return null!==(a=e.adresse)&&void 0!==a?a:""}}},{name:"fournisseur",label:"Contact",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,r)=>{var a;return null!==(a=e.contact)&&void 0!==a?a:""}}},{name:"fournisseur",label:"Cr\xe9e le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,r)=>null==e.creele?" ":Object(Z.a)(Object(H.a)(e.creele),"dd/MM/yyyy")}},{name:"fournisseur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>s.a.createElement("div",null,s.a.createElement(q.j,{menuButton:s.a.createElement("div",{className:t.userMenu},s.a.createElement(Q.a,{xsDown:!0},s.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:s.a.createElement(U.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:s.a.createElement(I.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:s.a.createElement(I.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:s.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:s.a.createElement(L.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:s.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>s.a.createElement(s.a.Fragment,null,s.a.createElement(W.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",s.a.createElement("span",{className:"ml-5"},t.nom)),s.a.createElement(Y.a,null)))))}}]}var G=r(1381),J=(r(1389),r(1384)),K=r(1459);t.default=()=>{const e={fournisseur:{nom:"",prenom:"",photo:"",actif:"",creele:"",statut:"",telephone:"",telephone2:"",email:"",estsociete:"",contact:"",commune:1},fournisseur1:null,titre:"Gestion des fournisseurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),r=Object(n.a)(t,2),c=r[0],l=r[1];let m=new i.a,d=new K.a;const p=Object(u.useQueryClient)(),f=Object(u.useMutation)(m.misajourStatutFournisseur,{onSuccess:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),b={handleFermetureAlerte:()=>{l(Object(a.a)(Object(a.a)({},c),{},{titre:"Gestion des fournisseurs",alert:Object(a.a)(Object(a.a)({},c.alert),{},{open:!1}),pagestate:Object(a.a)(Object(a.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(a.a)(Object(a.a)({},c),{},{fournisseur:null,titre:"Nouveau fournisseur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:Object(a.a)(Object(a.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(a.a)(Object(a.a)({},c),{},{titre:"Gestion des fournisseurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(a.a)(Object(a.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{y.mutate(c.fournisseur)},handleCloseDialoguephoto:()=>{l(Object(a.a)(Object(a.a)({},c),{},{dialoguephoto:Object(a.a)(Object(a.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(a.a)(Object(a.a)({},c),{},{tableconfig:Object(a.a)(Object(a.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(a.a)(Object(a.a)({},c),{},{tableconfig:Object(a.a)(Object(a.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(a.a)(Object(a.a)({},c),{},{tableconfig:Object(a.a)(Object(a.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(a.a)(Object(a.a)({},c),{},{titre:"Mise \xe0 jour ",fournisseur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(a.a)(Object(a.a)({},c),{},{fournisseur:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{E.mutate(e)},handledatecreelechange:e=>{l(Object(a.a)(Object(a.a)({},c),{},{fournisseur:Object(a.a)(Object(a.a)({},c.fournisseur),{},{creele:e})}))},handleChangementStatut:({id:e,statut:t})=>{f.mutate({id:e,statut:t})},handleTogleestsociete:e=>{O.mutate(e)}},g=Object(u.useQuery)(["Fournisseurs",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>m.getTouslesFournisseurs(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),v=Object(u.useQuery)(["Communes",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>d.getTouslesCommunes(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(u.useMutation)(m.ajoutFournisseur,{onSuccess:()=>{p.invalidateQueries("Fournisseurs"),l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Fournisseurs"),l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(u.useMutation)(m.miseajourFournisseur,{onSuccess:()=>{p.invalidateQueries("Fournisseurs"),l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Fournisseurs"),l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(u.useMutation)(m.togleactifFournisseur,{onSuccess:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),O=Object(u.useMutation)(m.togleestsocieteFournisseur,{onSuccess:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l(Object(a.a)(Object(a.a)({},c),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),y=Object(u.useMutation)(m.suppressionFournisseur,{onSuccess:()=>{l(Object(a.a)(Object(a.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Fournisseurs")}}),C={queryFournisseurs:g,mutationMiseajour:j,mutationAjout:h,mutationSuppression:y,queryCommunes:v},F=$(b),S=w.b().shape({nom:w.c().required("Le champs Nom est requis"),telephone:w.c().required("Le champs T\xe9l\xe9phone est requis")}),x=Object(G.c)({resolver:Object(J.yupResolver)(S),defaultValues:{fournisseur:c.fournisseur}});return s.a.createElement(A,{state:c,fonctions:b,collonnes:F,queries:C,useform:x,onSubmit:e=>{var t;let r=Object(a.a)(Object(a.a)({},c.fournisseur),e);void 0!==(null===(t=c.fournisseur)||void 0===t?void 0:t.id)?C.mutationMiseajour.mutate(Object(a.a)({},r)):C.mutationAjout.mutate(Object(a.a)({},r))}})}}}]);