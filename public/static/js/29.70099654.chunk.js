(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[29],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),i=a(353),c=a(1374);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1388:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(624),i=a(449),c=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function c(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,s,l,u,d,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,c=t.champ,s=t.objet,l=t.obj,u=t.handleprogress,(d=new FormData).append(l.cle,s.id),d.append("modele",o),d.append("champ",c),d.append("nom",r),d.append("cle",l.cle),d.append("valeur",l.valeur),d.append("file",a),e.next=11,i.b.post("/medias/upload",d,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return m=e.sent,e.abrupt("return",m.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1381),i=a(1682),c=a(624),s=a(627),l=a(625),u=a(1322);const d=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,d=(e.valeur,e.error),m=e.helperText;return n.a.createElement(c.a,{fullWidth:!0,error:d?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.error),c=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:d,control:r,nom:t,label:a,valeur:c,error:i,helperText:i?i.message:null},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1408),i=a(343),c=a(1728),s=(a(60),a(357)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,d=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:d.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),o=a.n(n),i=a(1381),c=a(1357),s=a(1356);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,d=e.label,m=Object(n.useState)(a),p=Object(r.a)(m,2),g=p[0],b=p[1];return o.a.createElement(s.a,{control:o.a.createElement(i.a,{name:t,control:l,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),b(!g),u(!g)}}))}),label:null==d?t:d})}},1397:function(e,t,a){"use strict";a(0),a(1381),a(1682),a(624),a(627),a(625),a(1322)},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(17),n=a(0),o=a.n(n),i=a(624),c=a(1458),s=a(2081),l=a(1393),u=a(1394),d=a(1381);function m(e){const t=e.nom,a=e.label,m=e.control,p=(e.error,e.valeur),g=(e.id,e.handledatechange),b=Object(n.useState)(p),f=Object(r.a)(b,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(d.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:l.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),g(e)})(e)})),control:m,rules:{required:"Required"}},e))))}},1399:function(e,t,a){"use strict";a(17),a(0),a(624),a(1458),a(2043),a(1393),a(1394),a(1381)},1409:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1572:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesCategoriededepenses(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/categoriededepenses?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCategoriededepense(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/categoriededepenses",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCategoriededepense(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/categoriededepenses/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCategoriededepense(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/categoriededepenses/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2070:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(1572),s=a(133),l=a(1404),u=a.n(l),d=a(1390),m=a(447),p=a(2028),g=a(451),b=a(1377),f=a(356),h=a(354),v=a(355),j=a(1382),E=a(1405),O=(a(1406),a(75)),C=a(1371),y=a(1385),w=a(353),S=a(2023),x=a(623),P=a(2022),M=a(2021),k=a(1374),A=a(1388),F=(a(1391),a(1396),a(1392),a(1397),a(1398),a(1399),a(2044));function R(e){var t,a;const r=e.state,n=e.fonctions,o=e.queries,c=e.useform,s=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(w.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(w.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(O.a)()},i.a.createElement(b.a,null,i.a.createElement(S.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouvelle cat\xe9gorie":"Mise \xe0 jour",subheader:""}),i.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:c.handleSubmit(s)},i.a.createElement(w.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(w.a,{item:!0},i.a.createElement(A.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.categoriededepense)||void 0===t?void 0:t.nom,control:c.control,error:c.errors.nom})),i.a.createElement(w.a,{item:!0},i.a.createElement(A.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.categoriededepense)||void 0===a?void 0:a.description,control:c.control,error:c.errors.description}))))),i.a.createElement(M.a,null,i.a.createElement(w.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(w.a,{item:!0},i.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(s)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(k.a,{color:"inherit"}):i.a.createElement(F.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(m.a,null,"Enregistrer"):i.a.createElement(m.a,null,"Mettre \xe0 jour")))),i.a.createElement(w.a,{item:!0},i.a.createElement(g.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var T=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,s=e.queries,l=e.useform,y=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(f.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(h.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(m.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(p.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(g.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle cat\xe9gorie"),s.queryCategoriededepenses.isLoading?i.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryCategoriededepenses.isError?i.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryCategoriededepenses.error,type:"error"}):i.a.createElement(E.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(O.a)()},i.a.createElement(u.a,{title:n.titre,data:s.queryCategoriededepenses.data.rows.map(e=>({categoriededepense:e})),columns:c,options:Object(r.a)(Object(r.a)({},d.a),{},{serverSide:!0,count:s.queryCategoriededepenses.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},d.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},d.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.categoriededepense)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(R,{state:n,fonctions:o,queries:s,useform:l,onSubmit:y}))},D=a(13),N=a(87),q=a(1409),L=a(1410),z=a(1411),I=a(2045),V=a(343),Q=a(1331),W=a(1682),B=a(1375);Object(V.a)(e=>{e.palette,Object(D.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function G(e){const t=Object(V.a)(e=>{e.palette,Object(D.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"categoriededepense",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"categoriededepense",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"categoriededepense",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"categoriededepense",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(N.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(Q.a,{xsDown:!0},i.a.createElement(g.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(I.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(L.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(L.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(W.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(B.a,null)))))}}]}var H=a(1381),J=(a(1389),a(1384));t.default=()=>{const e={categoriededepense:{nom:"",description:""},categoriededepense1:null,titre:"Gestion des cat\xe9gories de d\xe9penses",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),a=Object(n.a)(t,2),l=a[0],u=a[1];let d=new c.a;const m=Object(s.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des cat\xe9gories de d\xe9penses",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{categoriededepense:null,titre:"Nouvelle cat\xe9gorie",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des cat\xe9gories de d\xe9penses",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(l.categoriededepense)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",categoriededepense:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{categoriededepense:e,dialogueSuppressionOuvert:!0}))}}},g=Object(s.useQuery)(["Categoriededepenses",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesCategoriededepenses(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),b=Object(s.useMutation)(d.ajoutCategoriededepense,{onSuccess:()=>{m.invalidateQueries("Categoriededepenses"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{m.invalidateQueries("Categoriededepenses"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(s.useMutation)(d.miseajourCategoriededepense,{onSuccess:()=>{m.invalidateQueries("Categoriededepenses"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{m.invalidateQueries("Categoriededepenses"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(d.suppressionCategoriededepense,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{m.invalidateQueries("Categoriededepenses")}}),v={queryCategoriededepenses:g,mutationMiseajour:f,mutationAjout:b,mutationSuppression:h},j=G(p),E=y.b().shape({nom:y.c().required("Le champs Nom est requis")}),O=Object(H.c)({resolver:Object(J.yupResolver)(E),defaultValues:{categoriededepense:l.categoriededepense}});return i.a.createElement(T,{state:l,fonctions:p,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.categoriededepense),e);void 0!==(null===(t=l.categoriededepense)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(r.a)({},a)):v.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);