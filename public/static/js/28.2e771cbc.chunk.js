(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[28],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),i=a.n(n),l=a(353),o=a(1372);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(l.a,{item:!0}),i.a.createElement(o.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1388:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1389:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(622),l=a(449),o=a(1379);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(o.a,{name:a,as:n.a.createElement(l.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1379),l=a(1656),o=a(622),c=a(625),s=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(o.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(l.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,l=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:l,rules:{required:"Required"}},e)))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),i=a.n(n),l=a(1379),o=a(1355),c=a(1354);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return i.a.createElement(c.a,{control:i.a.createElement(l.a,{name:t,control:s,render:e=>i.a.createElement(o.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1404),l=a(343),o=a(1704),c=(a(60),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(l.a)(e=>Object(o.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1393:function(e,t,a){"use strict";a(0),a(1379),a(1656),a(622),a(625),a(623),a(1320)},1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),i=a.n(n),l=a(622),o=a(1438),c=a(2058),s=a(1384),u=a(1385),m=a(1379);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),h=Object(r.a)(g,2),f=h[0],v=h[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(o.a,{utils:s.a,locale:u.a},i.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{v(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1395:function(e,t,a){"use strict";a(17),a(0),a(622),a(1438),a(2018),a(1384),a(1385),a(1379)},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(20),n=a.n(r),i=a(39),l=a(75);function o(e){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(n.a.mark((function e(t){var a,r,i,o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,i=t.handleprogress,o=new FormData,console.warn(a),o.append("objet",r),o.append("file",a),e.next=7,l.b.post("/fichier/upload",o,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:i});case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1555:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(20),n=a.n(r),i=a(39),l=a(75);class o{getTouslesVilles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,l.b.get("/villes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutVille(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.post("/villes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourVille(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.put("/villes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionVille(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2054:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),l=a.n(i),o=a(1555),c=a(133),s=a(1401),u=a.n(s),m=a(1388),p=a(1325),d=a(2008),b=a(2007),g=a(447),h=a(2009),f=a(451),v=a(1375),j=a(357),E=a(354),O=a(355),y=a(1380),w=a(1402),C=(a(1403),a(75)),S=a(1369),x=a(1383),D=a(353),P=a(2005),k=a(621),A=a(2004),F=a(2003),q=a(1372),M=a(1389),R=(a(1390),a(1391),a(1392),a(1393),a(1394),a(1395),a(2019));function V(e){var t,a;const r=e.state,n=e.fonctions,i=e.queries,o=e.useform,c=e.onSubmit;return l.a.createElement("div",null,l.a.createElement(D.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(D.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(S.a,{theme:Object(C.a)()},l.a.createElement(v.a,null,l.a.createElement(P.a,{action:l.a.createElement(k.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouvelle ville":"Mise \xe0 jour ",subheader:""}),l.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",l.a.createElement("form",{onSubmit:o.handleSubmit(c)},l.a.createElement(D.a,{container:!0,spacing:4,direction:"column"},l.a.createElement(D.a,{item:!0},l.a.createElement(M.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.ville)||void 0===t?void 0:t.nom,control:o.control,error:o.errors.nom})),l.a.createElement(D.a,{item:!0},l.a.createElement(M.a,{id:"Description",nom:"Description",label:"Description",valeur:null===(a=r.ville)||void 0===a?void 0:a.Description,control:o.control,error:o.errors.Description}))))),l.a.createElement(F.a,null,l.a.createElement(D.a,{container:!0,alignItems:"center",justify:"space-between"},l.a.createElement(D.a,{item:!0},l.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:o.handleSubmit(c)},i.mutationMiseajour.isLoading||i.mutationAjout.isLoading?l.a.createElement(q.a,{color:"inherit"}):l.a.createElement(R.a,null),l.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?l.a.createElement(g.a,null,"Enregistrer"):l.a.createElement(g.a,null,"Mettre \xe0 jour")))),l.a.createElement(D.a,{item:!0},l.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var N=e=>{var t,a;const n=e.state,i=e.fonctions,o=e.collonnes,c=e.queries,s=e.useform,x=e.onSubmit;return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},l.a.createElement(d.a,{id:""},n.dialoguephoto.titre),l.a.createElement(b.a,null,l.a.createElement("img",{src:C.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),l.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?l.a.createElement(h.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},l.a.createElement("div",null,l.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvelle ville"),c.queryVilles.isLoading?l.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryVilles.isError?l.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryVilles.error,type:"error"}):l.a.createElement(w.a,{tag:"div",blocking:!1},l.a.createElement(S.a,{theme:Object(C.a)()},l.a.createElement(u.a,{title:n.titre,data:c.queryVilles.data.rows,columns:o,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryVilles.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),l.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},l.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.ville)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):l.a.createElement(V,{state:n,fonctions:i,queries:c,useform:s,onSubmit:x}))},T=a(13),L=a(87),I=a(2020),z=a(2021),W=a(2022),Q=a(2023),B=a(343),G=a(1329),J=a(1656),U=a(1373);Object(B.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(B.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"Description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>l.a.createElement("div",null,l.a.createElement(L.j,{menuButton:l.a.createElement("div",{className:t.userMenu},l.a.createElement(G.a,{xsDown:!0},l.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:l.a.createElement(Q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:l.a.createElement(I.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:l.a.createElement(I.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:l.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:l.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:l.a.createElement(z.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],Description:r.rowData[2]}).map(e=>l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],Description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",l.a.createElement("span",{className:"ml-5"},e.nom)),l.a.createElement(U.a,null)))))}}]}var Y=a(1379),K=(a(1396),a(1382));t.default=()=>{const e={ville:{nom:"",Description:""},ville1:null,titre:"Gestion des villes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new o.a;const p=Object(c.useQueryClient)(),d={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des villes",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{ville:null,titre:"Nouvelle ville ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des villes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{f.mutate(s.ville)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",ville:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{ville:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Villes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesVilles(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutVille,{onSuccess:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.miseajourVille,{onSuccess:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Villes"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.suppressionVille,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Villes")}}),v={queryVilles:b,mutationMiseajour:h,mutationAjout:g,mutationSuppression:f},j=H(d),E=x.b().shape({nom:x.c().required("Le champs Nom est requis"),Description:x.c().required("Le champs Description est requis")}),O=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{ville:s.ville}});return l.a.createElement(N,{state:s,fonctions:d,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.ville),e);void 0!==(null===(t=s.ville)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(r.a)({},a)):v.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);