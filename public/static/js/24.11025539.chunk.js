(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[24],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(3),n=a(0),o=a.n(n),c=a(353),s=a(1372);function i(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(c.a,{item:!0}),o.a.createElement(s.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1388:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1389:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(622),c=a(449),s=a(1379);t.a=e=>{const t=e.id,a=e.nom,r=e.label,i=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(s.a,{name:a,as:n.a.createElement(c.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:i,rules:{required:"Required"}})))}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1379),c=a(1646),s=a(622),i=a(625),l=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(s.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(i.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(c.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,c=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:c,rules:{required:"Required"}},e)))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),o=a.n(n),c=a(1379),s=a(1355),i=a(1354);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),v=p[0],b=p[1];return o.a.createElement(i.a,{control:o.a.createElement(c.a,{name:t,control:l,render:e=>o.a.createElement(s.a,Object.assign({},e,{checked:v,onChange:t=>{e.onChange(t.target.checked),b(!v),u(!v)}}))}),label:null==m?t:m})}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1404),c=a(343),s=a(1689),i=(a(60),a(356)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(c.a)(e=>Object(s.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(i.a,{value:u}),u,"%"))}},1393:function(e,t,a){"use strict";a(0),a(1379),a(1646),a(622),a(625),a(623),a(1320)},1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),o=a.n(n),c=a(622),s=a(1436),i=a(2031),l=a(1384),u=a(1385),m=a(1379);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),v=(e.id,e.handledatechange),b=Object(n.useState)(p),g=Object(r.a)(b,2),f=g[0],h=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(s.a,{utils:l.a,locale:u.a},o.a.createElement(i.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),v(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1395:function(e,t,a){"use strict";a(17),a(0),a(622),a(1436),a(1999),a(1384),a(1385),a(1379)},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),o=a(39),c=a(75);function s(e){return i.apply(this,arguments)}function i(){return(i=Object(o.a)(n.a.mark((function e(t){var a,r,o,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,s=new FormData,console.warn(a),s.append("file",a),s.append("objet",r),e.next=7,c.b.post("/fichier/upload",s,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return i=e.sent,e.abrupt("return",i.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1437:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),o=a(39),c=a(75);class s{getTouslesStocks(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/stocks?itemsPerPage="+t+"&page="+e+"&id="+a+"&type=entreprise");case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/stocks",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/stocks/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/stocks/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2007:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),c=a.n(o),s=a(20),i=a.n(s),l=a(39),u=a(75);class m{getTouslesMouvementdestocks(e,t,a,r,n){return Object(l.a)(i.a.mark((function r(){var o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/mouvementdestocks?itemsPerPage="+t+"&page="+e+"&id="+a+"&type="+n);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutMouvementdestock(e){return Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/mouvementdestocks",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMouvementdestock(e){return Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/mouvementdestocks/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMouvementdestock(e){return Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/mouvementdestocks/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourTypedemouvementMouvementdestock(e){return Object(l.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("mouvementdestocks/"+e.id,{typedemouvement:e.typedemouvement});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1400),v=a.n(p),b=a(1388),g=a(1325),f=a(1989),h=a(1988),j=a(447),E=a(1990),y=a(1375),k=a(357),O=a(354),w=a(355),S=a(1380),x=a(1402),C=(a(1403),a(1369)),M=a(1383),q=a(353),D=a(1986),A=a(621),P=a(1985),R=a(1984),T=a(451),F=a(1372),L=a(1389),N=a(1390),I=(a(1391),a(1392),a(1393),a(1394)),Q=(a(1395),a(2e3));function z(e){var t,a,r,n,o,s,i,l,m;const d=e.state,p=e.fonctions,v=e.queries,b=e.useform,g=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(q.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(q.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(C.a,{theme:Object(u.a)()},c.a.createElement(y.a,null,c.a.createElement(D.a,{action:c.a.createElement(A.a,{"aria-label":"",onClick:p.AnnulerEnregistrement},"x"),title:"ajout"===d.pagestate.action?"Nouveau mouvement":"Mise \xe0 jour ",subheader:""}),c.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:b.handleSubmit(g)},c.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(q.a,{item:!0},v.queryStocks.isLoading?c.a.createElement(S.a,{message:"chargement des roles"}):c.a.createElement(N.a,{id:"stock",name:"stock",label:"Stock",table:"stock",control:b.control,options:v.queryStocks.data.rows,error:b.errors.stock,defaultValue:null!==(t=null===(a=d.mouvementdestock)||void 0===a||null===(r=a.stock)||void 0===r?void 0:r.id)&&void 0!==t?t:"1",valeur:null!==(n=null===(o=d.mouvementdestock)||void 0===o?void 0:o.stock)&&void 0!==n?n:""})),c.a.createElement(q.a,{item:!0},c.a.createElement(L.a,{id:"typedemouvement",nom:"typedemouvement",label:"Type de mouvement",valeur:null===(s=d.mouvementdestock)||void 0===s?void 0:s.typedemouvement,control:b.control,error:b.errors.typedemouvement})),c.a.createElement(q.a,{item:!0},c.a.createElement(L.a,{id:"quantite",nom:"quantite",label:"Quantite",valeur:null===(i=d.mouvementdestock)||void 0===i?void 0:i.quantite,control:b.control,error:b.errors.quantite})),c.a.createElement(q.a,{item:!0},c.a.createElement(L.a,{id:"quantiteapres",nom:"quantiteapres",label:"Quantite apr\xe8s",valeur:null===(l=d.mouvementdestock)||void 0===l?void 0:l.quantiteapres,control:b.control,error:b.errors.quantiteapres})),c.a.createElement(q.a,{item:!0},c.a.createElement(L.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===(m=d.mouvementdestock)||void 0===m?void 0:m.motif,control:b.control,error:b.errors.motif})),c.a.createElement(q.a,{item:!0},c.a.createElement(I.a,{id:"createdAt",nom:"createdAt",label:"Date mouvement",valeur:d.mouvementdestock?d.mouvementdestock.createdAt:new Date,error:b.errors.createdAt,control:b.control,handledatechange:p.handledatecreatedAtchange}))))),c.a.createElement(R.a,null,c.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(q.a,{item:!0},c.a.createElement(T.a,{color:"primary",variant:"contained",type:"submit",onClick:b.handleSubmit(g)},v.mutationMiseajour.isLoading||v.mutationAjout.isLoading?c.a.createElement(F.a,{color:"inherit"}):c.a.createElement(Q.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===d.pagestate.action?c.a.createElement(j.a,null,"Enregistrer"):c.a.createElement(j.a,null,"Mettre \xe0 jour")))),c.a.createElement(q.a,{item:!0},c.a.createElement(T.a,{variant:"outlined",color:"secondary",onClick:p.AnnulerEnregistrement},"Annuler")))))))))}var B=a(603),V=a(46);var W=({source:e})=>{var t,a,r;return c.a.createElement("div",null,c.a.createElement(V.a,{to:null!==(t=e.lien)&&void 0!==t?t:" "},c.a.createElement(y.a,{elevation:3,className:"p-5 flex",onClick:()=>{console.log("on a click\xe9 sur la carte")}},c.a.createElement("div",null,c.a.createElement(A.a,{size:"small",className:"p-2 bg-light-gray"},c.a.createElement(B.a,{className:"text-muted"},null!==(a=e.icone)&&void 0!==a?a:"payments"))),c.a.createElement("div",{className:"ml-4"},c.a.createElement("h3",{className:"mt-1 text-32"},e.solde.toLocaleString("fr-FR")),c.a.createElement("p",{className:"m-0 text-muted"},null!==(r=e.devise)&&void 0!==r?r:"")))))},H=a(2005);var J=e=>{var t,a;const n=e.state,o=e.fonctions,s=e.collonnes,i=e.queries,l=e.useform,m=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(g.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},c.a.createElement(f.a,{id:""},n.dialoguephoto.titre),c.a.createElement(h.a,null,c.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),c.a.createElement(k.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?c.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(H.a,{container:!0,spacing:5,direction:"row",justifyContent:"center",alignItems:"center",alignContent:"center",wrap:"wrap"},c.a.createElement(H.a,{item:!0,className:"mb-5"},i.queryMouvementdestocks.isLoading?c.a.createElement(S.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.a.createElement(W,{source:{solde:5e5,icone:"box"}}))),i.queryMouvementdestocks.isLoading?c.a.createElement(S.a,{message:"Chargement des donn\xe9es...",type:"info"}):i.queryMouvementdestocks.isError?c.a.createElement(S.a,{message:"Erreur lors du chargement des donn\xe9es::"+i.queryMouvementdestocks.error,type:"error"}):c.a.createElement(x.a,{tag:"div",blocking:!1},c.a.createElement(C.a,{theme:Object(u.a)()},c.a.createElement(v.a,{title:n.titre,data:i.queryMouvementdestocks.data.rows,columns:s,options:Object(r.a)(Object(r.a)({},b.a),{},{serverSide:!0,count:i.queryMouvementdestocks.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},b.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},b.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(y.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(w.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.mouvementdestock)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(z,{state:n,fonctions:o,queries:i,useform:l,onSubmit:m}))},U=a(13),G=a(87),Y=a(2001),K=a(2002),X=a(2003),Z=a(2004),$=a(343),_=a(1329),ee=a(1646),te=a(1373),ae=a(1973),re=a(1428);Object($.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function ne(e){const t=Object($.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=e=>{switch(e.typedemouvement){case"debit":return"bg-error";case"credit":return"bg-primary";case"Valid\xe9e":return"bg-green";default:return"bg-primary"}},r=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"createdAt",label:"Date mouvement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e?" ":Object(ae.a)(Object(re.a)(e),"dd/MM/yyyy HH:mm")}},{name:"Stock",label:"Stock",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===e||void 0===e||null===(n=e.Entreprise)||void 0===n?void 0:n.nom)&&void 0!==r?r:" "}}},{name:"typedemouvement",label:"Type de mouvement",options:{filter:!1,sort:!1,display:!0,customBodyRender:(r,n,o)=>c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(G.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(_.a,{xsDown:!0},c.a.createElement(T.a,{size:"small",variant:"text",color:"primary",endIcon:c.a.createElement(Z.a,null)},c.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+a({id:n.rowData[0],typedemouvement:r})},r))))},(e=>{switch(e.typedemouvement){case"Annul\xe9e":return[];case"Nouveau":return[{id:1,nom:"Valider",typedemouvement:"Valid\xe9e"},{id:2,nom:"Annuler",typedemouvement:"Annul\xe9e"}];case"Valid\xe9e":default:return[]}})({id:n.rowData[0],typedemouvement:r}).map(t=>c.a.createElement(ee.a,{onClick:()=>e.handleChangementTypedemouvement({id:n.rowData[0],typedemouvement:t.typedemouvement}),key:t.id,value:t.typedemouvement},t.nom)))))}},{name:"quantite",label:"Quantite",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"quantiteapres",label:"Quantite apr\xe8s",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"motif",label:"Motif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,n)=>c.a.createElement("div",null,c.a.createElement(G.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(_.a,{xsDown:!0},c.a.createElement(T.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(Z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:c.a.createElement(Y.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:c.a.createElement(Y.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:c.a.createElement(K.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>r(e,"Supprimer"),icon:c.a.createElement(X.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:c.a.createElement(K.a,{color:"primary"})}]}})({id:a.rowData[0],stock:a.rowData[1],typedemouvement:a.rowData[2],quantite:a.rowData[3],quantiteapres:a.rowData[4],motif:a.rowData[5],createdAt:a.rowData[6]}).map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(ee.a,{onClick:()=>e.action({id:a.rowData[0],stock:a.rowData[1],typedemouvement:a.rowData[2],quantite:a.rowData[3],quantiteapres:a.rowData[4],motif:a.rowData[5],createdAt:a.rowData[6]}),key:e.id,value:e.statut},e.icon,"   ",c.a.createElement("span",{className:"ml-5"},e.nom)),c.a.createElement(te.a,null)))))}}]}var oe=a(1379),ce=(a(1396),a(1382)),se=a(1437);t.default=()=>{const e={mouvementdestock:{stock:"1",typedemouvement:"",quantite:0,quantiteapres:0,motif:"",createdAt:""},mouvementdestock1:null,titre:"Mouvements de stocks ALIECARD",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),s=a[0],i=a[1];let l=new m,u=new se.a;const p=Object(d.useQueryClient)(),v=Object(d.useMutation)(l.misajourTypedemouvementMouvementdestock,{onSuccess:()=>{i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{p.invalidateQueries("Mouvementdestocks")}}),b={handleFermetureAlerte:()=>{i(Object(r.a)(Object(r.a)({},s),{},{titre:"Mouvements de stocks marchands",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{i(Object(r.a)(Object(r.a)({},s),{},{mouvementdestock:null,titre:"Nouveau mouvement ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{i(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),i(Object(r.a)(Object(r.a)({},s),{},{titre:"Mouvements de stocks marchands",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{i(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{E.mutate(s.mouvementdestock)},handleCloseDialoguephoto:()=>{i(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{i(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{i(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{i(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":i(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",mouvementdestock:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":i(Object(r.a)(Object(r.a)({},s),{},{mouvementdestock:e,dialogueSuppressionOuvert:!0}))}},handleChangementTypedemouvement:({id:e,typedemouvement:t})=>{v.mutate({id:e,typedemouvement:t})},handledatecreatedAtchange:e=>{i(Object(r.a)(Object(r.a)({},s),{},{mouvementdestock:Object(r.a)(Object(r.a)({},s.mouvementdestock),{},{createdAt:e})}))}},g=Object(d.useQuery)(["Mouvementdestocks",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>l.getTouslesMouvementdestocks(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre,"business"),{keepPreviousData:!0}),f=Object(d.useQuery)(["Stocks",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>u.getTouslesStocks(0,1e3,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),h=Object(d.useMutation)(l.ajoutMouvementdestock,{onSuccess:()=>{p.invalidateQueries("Mouvementdestocks"),i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Mouvementdestocks"),i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(d.useMutation)(l.miseajourMouvementdestock,{onSuccess:()=>{p.invalidateQueries("Mouvementdestocks"),i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Mouvementdestocks"),i(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(l.suppressionMouvementdestock,{onSuccess:()=>{i(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{i({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Mouvementdestocks")}}),y={queryMouvementdestocks:g,mutationMiseajour:j,mutationAjout:h,mutationSuppression:E,queryStocks:f},k=ne(b),O=M.b().shape({stock:M.c().required("Le champs Stock est requis"),quantite:M.a().required("quantite requis").positive("Le quantite doit \xeatre positif").integer("Le quantite doit \xeatre un nombre entier"),quantiteapres:M.a().required("quantiteapres requis").positive("Le quantiteapres doit \xeatre positif").integer("Le quantiteapres doit \xeatre un nombre entier"),motif:M.c().required("Le champs Motif est requis")}),w=Object(oe.c)({resolver:Object(ce.yupResolver)(O),defaultValues:{mouvementdestock:s.mouvementdestock}});return c.a.createElement(J,{state:s,fonctions:b,collonnes:k,queries:y,useform:w,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.mouvementdestock),e);void 0!==(null===(t=s.mouvementdestock)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);