(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[45],{1390:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(3),n=t(0),o=t.n(n),i=t(354),c=t(1375);function l(e){const a=Object(r.a)({},e),t=a.message,n=a.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,t,".")))}},1397:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(625),i=t(450),c=t(1385);a.a=e=>{const a=e.id,t=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:t,as:n.a.createElement(i.a,Object.assign({},e,{id:a,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1398:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(20),n=t.n(r),o=t(39),i=t(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(n.a.mark((function e(a){var t,r,o,c,l,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,r=a.nom,o=a.modele,c=a.champ,l=a.objet,s=a.obj,u=a.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",o),m.append("champ",c),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",t),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1400:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1401:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(0),n=t.n(r),o=t(1425),i=t(344),c=t(1829),l=(t(60),t(358)),s=t(354);function u(e){const a=e.onUpload,t=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,a,t)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return a.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>t&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var t;return a(null!==(t=e[0])&&void 0!==t?t:null)},onDelete:t})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1402:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(1385),i=t(1777),c=t(625),l=t(628),s=t(626),u=t(1323);const m=e=>{const a=e.label,t=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error),p=e.helperText;return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:t},a),n.a.createElement(l.a,Object.assign({id:t},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===r&&e.nom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"fournisseur"===r&&e.nom+"["+e.adresse+"]"))),n.a.createElement(u.a,null,p))};a.a=function(e){const a=e.nom,t=e.label,r=e.control,i=(e.table,e.error),c=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:a,as:m,control:r,nom:a,label:t,valeur:c,error:i,helperText:i?i.message:null},e)))}},1407:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(17),n=t(0),o=t.n(n),i=t(1385),c=t(1358),l=t(1357);function s(e){const a=e.nom,t=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(t),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(l.a,{control:o.a.createElement(i.a,{name:a,control:s,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:b,onChange:a=>{e.onChange(a.target.checked),g(!b),u(!b)}}))}),label:null==m?a:m})}},1408:function(e,a,t){"use strict";t(0),t(1385),t(1777),t(625),t(628),t(626),t(1323)},1409:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t(17),n=t(0),o=t.n(n),i=t(625),c=t(1516),l=t(2233),s=t(1404),u=t(1405),m=t(1385);function p(e){const a=e.nom,t=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),h=Object(r.a)(g,2),f=h[0],v=h[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:a,as:o.a.createElement(c.a,{utils:s.a,locale:u.a},o.a.createElement(l.a,{id:a,label:t,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:t,inputVariant:"outlined",value:f,onChange:e=>(e=>{v(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1410:function(e,a,t){"use strict";t(17),t(0),t(625),t(1516),t(2187),t(1404),t(1405),t(1385)},1428:function(e,a,t){"use strict";var r=t(0),n=t(61);a.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1429:function(e,a,t){"use strict";var r=t(0),n=t(61);a.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1431:function(e,a,t){"use strict";var r=t(0),n=t(61);a.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},2205:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(17),o=t(0),i=t.n(o),c=t(20),l=t.n(c),s=t(39),u=t(75);class m{getTouslesPays(e,a,t,r){return Object(s.a)(l.a.mark((function r(){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/pays?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPay(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.b.post("/pays",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourPay(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.b.put("/pays/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionPay(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.b.delete("/pays/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}var p=t(133),d=t(1419),b=t.n(d),g=t(1400),h=t(1328),f=t(2171),v=t(2169),j=t(448),E=t(2172),y=t(452),O=t(1378),P=t(357),w=t(355),C=t(356),S=t(1390),x=t(1420),M=(t(1421),t(1372)),k=t(1394),A=t(354),F=t(2167),D=t(624),R=t(2166),T=t(2165),q=t(1375),N=t(1397),L=(t(1402),t(1407),t(1401),t(1408),t(1409),t(1410),t(2188));function z(e){var a,t;const r=e.state,n=e.fonctions,o=e.queries,c=e.useform,l=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(A.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(A.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(M.a,{theme:Object(u.a)()},i.a.createElement(O.a,null,i.a.createElement(F.a,{action:i.a.createElement(D.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau pays":"Mise \xe0 jour",subheader:""}),i.a.createElement(R.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:c.handleSubmit(l)},i.a.createElement(A.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(A.a,{item:!0},i.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=r.pay)||void 0===a?void 0:a.nom,control:c.control,error:c.errors.nom})),i.a.createElement(A.a,{item:!0},i.a.createElement(N.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=r.pay)||void 0===t?void 0:t.description,control:c.control,error:c.errors.description}))))),i.a.createElement(T.a,null,i.a.createElement(A.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(A.a,{item:!0},i.a.createElement(y.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(l)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(L.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(j.a,null,"Enregistrer"):i.a.createElement(j.a,null,"Mettre \xe0 jour")))),i.a.createElement(A.a,{item:!0},i.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var I=e=>{var a,t;const n=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(h.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(f.a,{id:""},n.dialoguephoto.titre),i.a.createElement(v.a,null,i.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""}))),i.a.createElement(P.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(w.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(y.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau"),l.queryPays.isLoading?i.a.createElement(S.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryPays.isError?i.a.createElement(S.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryPays.error,type:"error"}):i.a.createElement(x.a,{tag:"div",blocking:!1},i.a.createElement(M.a,{theme:Object(u.a)()},i.a.createElement(b.a,{title:n.titre,data:l.queryPays.data.rows.map(e=>({pay:e})),columns:c,options:Object(r.a)(Object(r.a)({},g.a),{},{serverSide:!0,count:l.queryPays.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},g.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},g.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(O.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(C.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.pay)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(z,{state:n,fonctions:o,queries:l,useform:s,onSubmit:m}))},V=t(13),W=t(87),Q=t(1431),B=t(1428),G=t(1429),H=t(2189),J=t(344),U=t(1332),Y=t(1777),K=t(1376);Object(J.a)(e=>{e.palette,Object(V.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function X(e){const a=Object(J.a)(e=>{e.palette,Object(V.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"pay",label:"id",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"pay",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"pay",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"pay",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(W.j,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(U.a,{xsDown:!0},i.a.createElement(y.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(H.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(Q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(Q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(G.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})}]}})(e).map(a=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Y.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",i.a.createElement("span",{className:"ml-5"},a.nom)),i.a.createElement(K.a,null)))))}}]}var Z=t(1385),$=(t(1398),t(1393));a.default=()=>{const e={pay:{nom:"",description:""},pay1:null,titre:"Gestion des pays",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(e),t=Object(n.a)(a,2),c=t[0],l=t[1];let s=new m;const u=Object(p.useQueryClient)(),d={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des pays",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},c),{},{pay:null,titre:"Nouveau pays",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des pays",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{f.mutate(c.pay)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",pay:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},c),{},{pay:e,dialogueSuppressionOuvert:!0}))}}},b=Object(p.useQuery)(["Pays",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>s.getTouslesPays(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),g=Object(p.useMutation)(s.ajoutPay,{onSuccess:()=>{u.invalidateQueries("Pays"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Pays"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(p.useMutation)(s.miseajourPay,{onSuccess:()=>{u.invalidateQueries("Pays"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Pays"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(p.useMutation)(s.suppressionPay,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{u.invalidateQueries("Pays")}}),v={queryPays:b,mutationMiseajour:h,mutationAjout:g,mutationSuppression:f},j=X(d),E=k.b().shape({nom:k.c().required("Le champs Nom est requis"),description:k.c().required("Le champs Description est requis")}),y=Object(Z.c)({resolver:Object($.yupResolver)(E),defaultValues:{pay:c.pay}});return i.a.createElement(I,{state:c,fonctions:d,collonnes:j,queries:v,useform:y,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},c.pay),e);void 0!==(null===(a=c.pay)||void 0===a?void 0:a.id)?v.mutationMiseajour.mutate(Object(r.a)({},t)):v.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);