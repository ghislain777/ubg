(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[42],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),l=a.n(n),i=a(354),o=a(1375);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},l.a.createElement(i.a,{item:!0}),l.a.createElement(o.a,{color:"error"===n?"secondary":"primary"})," ",l.a.createElement("span",null,a,".")))}},1397:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(625),i=a(450),o=a(1385);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{fullWidth:!0},n.a.createElement(o.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(20),n=a.n(r),l=a(39),i=a(75);function o(e){return c.apply(this,arguments)}function c(){return(c=Object(l.a)(n.a.mark((function e(t){var a,r,l,o,c,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,l=t.modele,o=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",l),m.append("champ",o),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1400:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),l=a(1425),i=a(344),o=a(1829),c=(a(60),a(358)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(o.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1402:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(1385),i=a(1777),o=a(625),c=a(628),s=a(626),u=a(1323);const m=e=>{const t=e.label,a=e.nom,r=e.table,l=e.options,m=(e.valeur,e.error),p=e.helperText;return n.a.createElement(o.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),l.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===r&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===r&&e.nom+"["+e.adresse+"]"))),n.a.createElement(u.a,null,p))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.error),o=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,error:i,helperText:i?i.message:null},e)))}},1407:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),l=a.n(n),i=a(1385),o=a(1358),c=a(1357);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return l.a.createElement(c.a,{control:l.a.createElement(i.a,{name:t,control:s,render:e=>l.a.createElement(o.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1408:function(e,t,a){"use strict";a(0),a(1385),a(1777),a(625),a(628),a(626),a(1323)},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),l=a.n(n),i=a(625),o=a(1516),c=a(2233),s=a(1404),u=a(1405),m=a(1385);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),v=Object(r.a)(g,2),f=v[0],h=v[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{fullWidth:!0},l.a.createElement(m.a,Object.assign({name:t,as:l.a.createElement(o.a,{utils:s.a,locale:u.a},l.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1410:function(e,t,a){"use strict";a(17),a(0),a(625),a(1516),a(2187),a(1404),a(1405),a(1385)},1428:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1429:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1431:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1668:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(20),n=a.n(r),l=a(39),i=a(75);class o{getTouslesVilles(e,t,a,r){return Object(l.a)(n.a.mark((function r(){var l;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/villes?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return l=r.sent,r.abrupt("return",l.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutVille(e){return Object(l.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/villes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourVille(e){return Object(l.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/villes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionVille(e){return Object(l.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2220:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),l=a(0),i=a.n(l),o=a(1668),c=a(133),s=a(1419),u=a.n(s),m=a(1400),p=a(448),d=a(2172),b=a(452),g=a(1378),v=a(357),f=a(355),h=a(356),j=a(1390),E=a(1420),O=(a(1421),a(75)),y=a(1372),w=a(1394),C=a(354),S=a(2167),x=a(624),P=a(2166),V=a(2165),M=a(1375),k=a(1397),A=(a(1402),a(1407),a(1401),a(1408),a(1409),a(1410),a(2188));function F(e){var t,a;const r=e.state,n=e.fonctions,l=e.queries,o=e.useform,c=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(C.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(C.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(y.a,{theme:Object(O.a)()},i.a.createElement(g.a,null,i.a.createElement(S.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouvelle ville":"Mise \xe0 jour",subheader:""}),i.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:o.handleSubmit(c)},i.a.createElement(C.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(C.a,{item:!0},i.a.createElement(k.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.ville)||void 0===t?void 0:t.nom,control:o.control,error:o.errors.nom})),i.a.createElement(C.a,{item:!0},i.a.createElement(k.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.ville)||void 0===a?void 0:a.description,control:o.control,error:o.errors.description}))))),i.a.createElement(V.a,null,i.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(C.a,{item:!0},i.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit",onClick:o.handleSubmit(c)},l.mutationMiseajour.isLoading||l.mutationAjout.isLoading?i.a.createElement(M.a,{color:"inherit"}):i.a.createElement(A.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(p.a,null,"Enregistrer"):i.a.createElement(p.a,null,"Mettre \xe0 jour")))),i.a.createElement(C.a,{item:!0},i.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var R=e=>{var t,a;const n=e.state,l=e.fonctions,o=e.collonnes,c=e.queries,s=e.useform,w=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(v.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>l.handleFermetureAlerte():()=>l.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(f.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(p.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(d.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(b.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>l.handleClicksurNouveau()},"Nouvelle ville"),c.queryVilles.isLoading?i.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryVilles.isError?i.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryVilles.error,type:"error"}):i.a.createElement(E.a,{tag:"div",blocking:!1},i.a.createElement(y.a,{theme:Object(O.a)()},i.a.createElement(u.a,{title:n.titre,data:c.queryVilles.data.rows.map(e=>({ville:e})),columns:o,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryVilles.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>l.handleChangePage(e),onChangeRowsPerPage:e=>l.handleChangeRowPerPage(e),onSearchChange:e=>l.handleSearchChange(e),onFilterChange:()=>l.handleFilterChange()})}))),i.a.createElement(g.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(h.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:l.fermerDialogueSuppression,onYesClick:l.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.ville)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(F,{state:n,fonctions:l,queries:c,useform:s,onSubmit:w}))},T=a(13),D=a(87),N=a(1431),q=a(1428),L=a(1429),z=a(2189),I=a(344),Q=a(1332),W=a(1777),B=a(1376);Object(I.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(I.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"ville",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"ville",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"ville",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"ville",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(D.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(Q.a,{xsDown:!0},i.a.createElement(b.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(N.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(N.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(q.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(L.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(q.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(B.a,null)))))}}]}var J=a(1385),U=(a(1398),a(1393));t.default=()=>{const e={ville:{nom:"",description:""},ville1:null,titre:"Villes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(l.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new o.a;const p=Object(c.useQueryClient)(),d={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Villes",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{ville:null,titre:"Nouvelle ville",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Villes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{f.mutate(s.ville)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",ville:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{ville:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Villes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesVilles(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutVille,{onSuccess:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(c.useMutation)(m.miseajourVille,{onSuccess:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.suppressionVille,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Villes")}}),h={queryVilles:b,mutationMiseajour:v,mutationAjout:g,mutationSuppression:f},j=H(d),E=w.b().shape({nom:w.c().required("Le champs Nom est requis")}),O=Object(J.c)({resolver:Object(U.yupResolver)(E),defaultValues:{ville:s.ville}});return i.a.createElement(R,{state:s,fonctions:d,collonnes:j,queries:h,useform:O,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.ville),e);void 0!==(null===(t=s.ville)||void 0===t?void 0:t.id)?h.mutationMiseajour.mutate(Object(r.a)({},a)):h.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);