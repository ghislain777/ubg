(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[24],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),c=a(353),i=a(1374);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(c.a,{item:!0}),o.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1386:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(624),c=a(449),i=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(i.a,{name:a,as:n.a.createElement(c.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),c=a(75);function i(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,i,s,l,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,i=t.champ,s=t.objet,l=t.obj,u=t.handleprogress,(m=new FormData).append(l.cle,s.id),m.append("modele",o),m.append("champ",i),m.append("nom",r),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",a),e.next=11,c.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1381),c=a(1684),i=a(624),s=a(627),l=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error),p=e.helperText;return n.a.createElement(i.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(c.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===r&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===r&&e.nom+"["+e.adresse+"]"))),n.a.createElement(u.a,null,p))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,c=(e.table,e.error),i=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,error:c,helperText:c?c.message:null},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1408),c=a(343),i=a(1731),s=(a(60),a(357)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(c.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),o=a.n(n),c=a(1381),i=a(1357),s=a(1356);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),g=d[0],b=d[1];return o.a.createElement(s.a,{control:o.a.createElement(c.a,{name:t,control:l,render:e=>o.a.createElement(i.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),b(!g),u(!g)}}))}),label:null==m?t:m})}},1397:function(e,t,a){"use strict";a(0),a(1381),a(1684),a(624),a(627),a(625),a(1322)},1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),o=a.n(n),c=a(624),i=a(1461),s=a(2083),l=a(1393),u=a(1394),m=a(1381);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),g=(e.id,e.handledatechange),b=Object(n.useState)(d),f=Object(r.a)(b,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(i.a,{utils:l.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),g(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1399:function(e,t,a){"use strict";a(17),a(0),a(624),a(1461),a(2044),a(1393),a(1394),a(1381)},1409:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1410:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1411:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1573:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),c=a(75);class i{getTouslesCategories(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/categories?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/categories",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/categories/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/categories/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1574:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),o=a(39),c=a(75);class i{getTouslesSouscategories(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/souscategories?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutSouscategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/souscategories",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourSouscategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/souscategories/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionSouscategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/souscategories/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2079:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),c=a.n(o),i=a(1574),s=a(133),l=a(1403),u=a.n(l),m=a(1390),p=a(447),d=a(2029),g=a(451),b=a(1377),f=a(356),h=a(354),v=a(355),j=a(1382),E=a(1404),O=(a(1405),a(75)),y=a(1371),w=a(1385),S=a(353),C=a(2024),x=a(623),P=a(2023),k=a(2022),M=a(1374),A=a(1386),T=a(1391),F=(a(1396),a(1392),a(1397),a(1398),a(1399),a(2045));function D(e){var t,a,r,n,o,i,s;const l=e.state,u=e.fonctions,m=e.queries,d=e.useform,f=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(S.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(S.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(y.a,{theme:Object(O.a)()},c.a.createElement(b.a,null,c.a.createElement(C.a,{action:c.a.createElement(x.a,{"aria-label":"",onClick:u.AnnulerEnregistrement},"x"),title:"ajout"===l.pagestate.action?"Nouvelle sous-cat\xe9gorie":"Mise \xe0 jour",subheader:""}),c.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:d.handleSubmit(f)},c.a.createElement(S.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(S.a,{item:!0},c.a.createElement(A.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=l.souscategorie)||void 0===t?void 0:t.nom,control:d.control,error:d.errors.nom})),c.a.createElement(S.a,{item:!0},c.a.createElement(A.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=l.souscategorie)||void 0===a?void 0:a.description,control:d.control,error:d.errors.description})),c.a.createElement(S.a,{item:!0},m.queryCategories.isLoading?c.a.createElement(j.a,{message:"chargement des Categories"}):c.a.createElement(T.a,{id:"categorie",name:"categorie",label:"categorie",table:"categorie",control:d.control,options:m.queryCategories.data.rows,error:d.errors.categorie,defaultValue:null!==(r=null===(n=l.souscategorie)||void 0===n||null===(o=n.Categorie)||void 0===o?void 0:o.id)&&void 0!==r?r:"1",valeur:null!==(i=null===(s=l.souscategorie)||void 0===s?void 0:s.categorie)&&void 0!==i?i:""}))))),c.a.createElement(k.a,null,c.a.createElement(S.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(S.a,{item:!0},c.a.createElement(g.a,{color:"primary",variant:"contained",type:"submit",onClick:d.handleSubmit(f)},m.mutationMiseajour.isLoading||m.mutationAjout.isLoading?c.a.createElement(M.a,{color:"inherit"}):c.a.createElement(F.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===l.pagestate.action?c.a.createElement(p.a,null,"Enregistrer"):c.a.createElement(p.a,null,"Mettre \xe0 jour")))),c.a.createElement(S.a,{item:!0},c.a.createElement(g.a,{variant:"outlined",color:"secondary",onClick:u.AnnulerEnregistrement},"Annuler")))))))))}var R=e=>{var t,a;const n=e.state,o=e.fonctions,i=e.collonnes,s=e.queries,l=e.useform,w=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(f.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(h.a,{routeSegments:[{name:n.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(p.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?c.a.createElement(d.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(g.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle sous-cat\xe9gorie"),s.querySouscategories.isLoading?c.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.querySouscategories.isError?c.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.querySouscategories.error,type:"error"}):c.a.createElement(E.a,{tag:"div",blocking:!1},c.a.createElement(y.a,{theme:Object(O.a)()},c.a.createElement(u.a,{title:n.titre,data:s.querySouscategories.data.rows.map(e=>({souscategorie:e})),columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.querySouscategories.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.souscategorie)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(D,{state:n,fonctions:o,queries:s,useform:l,onSubmit:w}))},q=a(13),N=a(87),L=a(1409),z=a(1410),I=a(1411),V=a(2046),Q=a(343),W=a(1331),B=a(1684),G=a(1375);Object(Q.a)(e=>{e.palette,Object(q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(Q.a)(e=>{e.palette,Object(q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"souscategorie",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"souscategorie",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"souscategorie",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"souscategorie",label:"categorie",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Categorie)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"souscategorie",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>c.a.createElement("div",null,c.a.createElement(N.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(W.a,{xsDown:!0},c.a.createElement(g.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(V.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(L.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(L.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:c.a.createElement(I.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",c.a.createElement("span",{className:"ml-5"},t.nom)),c.a.createElement(G.a,null)))))}}]}var J=a(1381),U=(a(1389),a(1384)),Y=a(1573);t.default=()=>{const e={souscategorie:{nom:"",description:"",categorie:1},souscategorie1:null,titre:"Gestion des sous-categories",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),a=Object(n.a)(t,2),l=a[0],u=a[1];let m=new i.a,p=new Y.a;const d=Object(s.useQueryClient)(),g={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des sous-categories",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},l),{},{souscategorie:null,titre:"Nouvelle sous-cat\xe9gorie",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des sous-categories",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(l.souscategorie)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",souscategorie:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},l),{},{souscategorie:e,dialogueSuppressionOuvert:!0}))}}},b=Object(s.useQuery)(["Souscategories",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesSouscategories(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(s.useQuery)(["Categories",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesCategories(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(s.useMutation)(m.ajoutSouscategorie,{onSuccess:()=>{d.invalidateQueries("Souscategories"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Souscategories"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(s.useMutation)(m.miseajourSouscategorie,{onSuccess:()=>{d.invalidateQueries("Souscategories"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Souscategories"),u(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(s.useMutation)(m.suppressionSouscategorie,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Souscategories")}}),E={querySouscategories:b,mutationMiseajour:v,mutationAjout:h,mutationSuppression:j,queryCategories:f},O=H(g),y=w.b().shape({nom:w.c().required("Le champs Nom est requis")}),S=Object(J.c)({resolver:Object(U.yupResolver)(y),defaultValues:{souscategorie:l.souscategorie}});return c.a.createElement(R,{state:l,fonctions:g,collonnes:O,queries:E,useform:S,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.souscategorie),e);void 0!==(null===(t=l.souscategorie)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);