(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[4],{1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),i=a.n(n),o=a(354),c=a(1375);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1403:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(625),o=a(450),c=a(1388);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1404:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,l,s,u,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,i=t.modele,c=t.champ,l=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",i),m.append("champ",c),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1405:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1408:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1388),o=a(1866),c=a(625),l=a(628),s=a(626),u=a(1323);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error),d=e.helperText;return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===r&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===r&&e.nom+"["+e.adresse+"]"))),n.a.createElement(u.a,null,d))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.error),c=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:c,error:o,helperText:o?o.message:null},e)))}},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1439),o=a(344),c=a(1909),l=(a(60),a(358)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1413:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),i=a.n(n),o=a(1388),c=a(1358),l=a(1357);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),b=p[0],v=p[1];return i.a.createElement(l.a,{control:i.a.createElement(o.a,{name:t,control:s,render:e=>i.a.createElement(c.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),v(!b),u(!b)}}))}),label:null==m?t:m})}},1414:function(e,t,a){"use strict";a(0),a(1388),a(1866),a(625),a(628),a(626),a(1323)},1415:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),i=a.n(n),o=a(625),c=a(1587),l=a(2268),s=a(1410),u=a(1411),m=a(1388);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),v=Object(n.useState)(p),g=Object(r.a)(v,2),h=g[0],f=g[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(c.a,{utils:s.a,locale:u.a},i.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{f(e),b(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1416:function(e,t,a){"use strict";a(17),a(0),a(625),a(1587),a(2220),a(1410),a(1411),a(1388)},1440:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1446:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1447:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1707:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesMenus(e,t,a,r){return Object(i.a)(n.a.mark((function a(){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,o.b.get("/menus?itemsPerPage="+t+"&page="+e);case 3:return r=a.sent,a.abrupt("return",r.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutMenu(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/menus",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMenu(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/menus/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMenu(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/menus/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1708:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesActivites(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/activites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/activites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/activites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/activites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2256:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),c=a(1708),l=a(133),s=a(1429),u=a.n(s),m=a(1405),d=a(1328),p=a(2204),b=a(2202),v=a(448),g=a(2205),h=a(452),f=a(1378),j=a(357),E=a(355),O=a(356),w=a(1391),y=a(1430),C=(a(1431),a(75)),x=a(1401),A=a(354),S=a(2200),P=a(624),M=a(2199),D=a(2198),k=a(1375),R=a(1403),q=a(1408),F=(a(1413),a(1409),a(1414),a(1415),a(1416),a(1372)),T=a(2221);function L(e){var t,a,r,n,i,c,l,s,u;const m=e.state,d=e.fonctions,p=e.queries,b=e.useform,g=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(A.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(A.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(F.a,{theme:Object(C.a)()},o.a.createElement(f.a,null,o.a.createElement(S.a,{action:o.a.createElement(P.a,{"aria-label":"",onClick:d.AnnulerEnregistrement},"x"),title:"ajout"===m.pagestate.action?"Nouvelle activit\xe9":"Mise \xe0 jour ",subheader:""}),o.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:b.handleSubmit(g)},o.a.createElement(A.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(A.a,{item:!0},o.a.createElement(R.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=m.activite)||void 0===t?void 0:t.nom,control:b.control,error:b.errors.nom})),o.a.createElement(A.a,{item:!0},o.a.createElement(R.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=m.activite)||void 0===a?void 0:a.description,control:b.control,error:b.errors.description})),o.a.createElement(A.a,{item:!0},o.a.createElement(R.a,{id:"chemain",nom:"chemain",label:"Chemain",valeur:null===(r=m.activite)||void 0===r?void 0:r.chemain,control:b.control,error:b.errors.chemain})),o.a.createElement(A.a,{item:!0},o.a.createElement(R.a,{id:"position",nom:"position",label:"Position",valeur:null===(n=m.activite)||void 0===n?void 0:n.position,control:b.control,error:b.errors.position})),o.a.createElement(A.a,{item:!0},p.queryMenus.isLoading?o.a.createElement(w.a,{message:"chargement des roles"}):o.a.createElement(q.a,{id:"menu",name:"menu",label:"Menu",table:"menu",control:b.control,options:p.queryMenus.data.rows,error:b.errors.menu,defaultValue:null!==(i=null===(c=m.activite)||void 0===c||null===(l=c.menu)||void 0===l?void 0:l.id)&&void 0!==i?i:"1",valeur:null!==(s=null===(u=m.utilisateur)||void 0===u?void 0:u.menu)&&void 0!==s?s:""}))))),o.a.createElement(D.a,null,o.a.createElement(A.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(A.a,{item:!0},o.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:b.handleSubmit(g)},p.mutationMiseajour.isLoading||p.mutationAjout.isLoading?o.a.createElement(k.a,{color:"inherit"}):o.a.createElement(T.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===m.pagestate.action?o.a.createElement(v.a,null,"Enregistrer"):o.a.createElement(v.a,null,"Mettre \xe0 jour")))),o.a.createElement(A.a,{item:!0},o.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:d.AnnulerEnregistrement},"Annuler")))))))))}var N=e=>{var t,a;const n=e.state,i=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,x=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(p.a,{id:""},n.dialoguephoto.titre),o.a.createElement(b.a,null,o.a.createElement("img",{src:C.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(v.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(g.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvelle activit\xe9"),l.queryActivites.isLoading?o.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryActivites.isError?o.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryActivites.error,type:"error"}):o.a.createElement(y.a,{tag:"div",blocking:!1},o.a.createElement(u.a,{title:n.titre,data:l.queryActivites.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:l.queryActivites.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})})),o.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.activite)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(L,{state:n,fonctions:i,queries:l,useform:s,onSubmit:x}))},z=a(13),I=a(87),B=a(1446),V=a(1447),Q=a(1440),W=a(2222),G=a(344),H=a(1332),J=a(1866),U=a(1376);Object(G.a)(e=>{e.palette,Object(z.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function Y(e){const t=Object(G.a)(e=>{e.palette,Object(z.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"chemain",label:"Chemain",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"icone",label:"Icone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"position",label:"Position",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"Menu",label:"Menu",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(I.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(H.a,{xsDown:!0},o.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(W.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Q.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Q.a,{color:"error"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],chemain:r.rowData[3],icone:r.rowData[4],position:r.rowData[5],menu:r.rowData[6]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],chemain:r.rowData[3],icone:r.rowData[4],position:r.rowData[5],menu:r.rowData[6]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement(U.a,null)))))}}]}var K=a(1388),X=(a(1404),a(1400)),Z=a(1707);t.default=()=>{const e={activite:{nom:"",description:"",chemain:"",icone:"",position:0,menu:"/api/menus/1"},activite1:null,titre:"Gestion des activit\xe9s",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new c.a,d=new Z.a;const p=Object(l.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des activit\xe9s",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{activite:null,titre:"Nouvelle activit\xe9 ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des activit\xe9s",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.activite)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",activite:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{activite:e,dialogueSuppressionOuvert:!0}))}}},v=Object(l.useQuery)(["Activites",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesActivites(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(l.useQuery)(["Menus",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>d.getTouslesMenus(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),h=Object(l.useMutation)(m.ajoutActivite,{onSuccess:()=>{p.invalidateQueries("Activites"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Activites"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(l.useMutation)(m.miseajourActivite,{onSuccess:()=>{p.invalidateQueries("Activites"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Activites"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(l.useMutation)(m.suppressionActivite,{onSuccess:e=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Activites")}}),E={queryActivites:v,mutationMiseajour:f,mutationAjout:h,mutationSuppression:j,queryMenus:g},O=Y(b),w=x.b().shape({nom:x.c().required("Le champs Nom est requis"),chemain:x.c().required("Le champs Chemain est requis"),menu:x.c().required("Le champs Menu est requis")}),y=Object(K.c)({resolver:Object(X.yupResolver)(w),defaultValues:{activite:s.activite}});return o.a.createElement(N,{state:s,fonctions:b,collonnes:O,queries:E,useform:y,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.activite),e);void 0!==(null===(t=s.activite)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);