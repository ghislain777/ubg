(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[53],{1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),i=a(354),c=a(1375);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1408:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(625),i=a(450),c=a(1388);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1412:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function c(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,s,l,u,d,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,c=t.champ,s=t.objet,l=t.obj,u=t.handleprogress,(d=new FormData).append(l.cle,s.id),d.append("modele",o),d.append("champ",c),d.append("nom",r),d.append("cle",l.cle),d.append("valeur",l.valeur),d.append("file",a),e.next=11,i.b.post("/medias/upload",d,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return m=e.sent,e.abrupt("return",m.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1413:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1415:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1388),i=a(1902),c=a(625),s=a(628),l=a(626),u=a(1323);const d=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,d=(e.valeur,e.error),m=e.helperText;return n.a.createElement(c.a,{fullWidth:!0,error:d?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")","client"===r&&" "+e.prenom+"[".concat(e.adresse,"-").concat(e.telephone,"]"),"caissemagasin"===r&&e.Magasin.nom,"fournisseur"===r&&e.nom+"["+e.adresse+"]"))),n.a.createElement(u.a,null,m))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.error),c=e.valeur;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:d,control:r,nom:t,label:a,valeur:c,error:i,helperText:i?i.message:null},e)))}},1505:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1510:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},1511:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1512:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesMagasins(e,t,a,r){return Object(o.a)(n.a.mark((function a(){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,i.b.get("/magasins?itemsPerPage=".concat(t,"&page=").concat(e));case 3:return r=a.sent,a.abrupt("return",r.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutMagasin(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/magasins",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMagasin(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/magasins/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMagasin(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/magasins/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1542:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesStocks(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o,c,s,l,u,d;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/stocks?itemsPerPage=".concat(t,"&page=").concat(e,"&produit=").concat(null!==(o=null===a||void 0===a||null===(c=a.produit)||void 0===c?void 0:c.id)&&void 0!==o?o:"","&magasin=").concat(null!==(s=null===a||void 0===a||null===(l=a.magasin)||void 0===l?void 0:l.id)&&void 0!==s?s:"","&actif=").concat(null!==(u=a.actif)&&void 0!==u?u:""));case 3:return d=r.sent,r.abrupt("return",d.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/stocks",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/stocks/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/stocks/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifStock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/stocks/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}getStockActifDeMagasin(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.get("/stocks?itemsPerPage=1000&page=0&magasin=".concat(e.id,"&actif=1"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1546:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesProduits(e,t,a,r){return Object(o.a)(n.a.mark((function a(){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e+=1,a.next=3,i.b.get("/produits?itemsPerPage=".concat(t,"&page=").concat(e));case 3:return r=a.sent,a.abrupt("return",r.data);case 5:case"end":return a.stop()}}),a)})))()}ajoutProduit(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/produits",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourProduit(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/produits/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionProduit(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/produits/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/medias/delete/".concat(e.id,"/produit"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1637:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesMouvementdestocks(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/mouvementdestocks?itemsPerPage=".concat(t,"&page=").concat(e,"&magasin=").concat(a.Magasin.id," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutMouvementdestock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/mouvementdestocks",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMouvementdestock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/mouvementdestocks/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMouvementdestock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/mouvementdestocks/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourTypedemouvementMouvementdestock(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("mouvementdestocks/"+e.id,{typedemouvement:e.typedemouvement});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1670:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward")},1671:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward")},2199:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},2251:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(133),s=a(1468),l=a.n(s),u=a(1413),d=a(448),m=a(2215),p=a(1378),g=a(358),b=a(356),v=a(357),f=a(1394),h=a(1470),j=(a(1467),a(75)),E=a(1372),O=a(354),k=a(2212),y=a(624),x=a(2211),w=a(2210),S=a(452),M=a(1375),P=a(1408),q=a(1415),C=a(2230);function A(e){var t,a,r,n,o,c,s,l,u,m,g,b,v,h,A,L,R;const T=e.state,D=e.fonctions,F=e.queries,Q=e.useform,N=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(O.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(O.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(E.a,{theme:Object(j.a)()},i.a.createElement(p.a,null,i.a.createElement(k.a,{action:i.a.createElement(y.a,{"aria-label":"",onClick:D.AnnulerEnregistrement},"x"),title:"ajout"===T.pagestate.action?"Nouveau stock":"Mise \xe0 jour",subheader:""}),i.a.createElement(x.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:Q.handleSubmit(N)},i.a.createElement(O.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"quantiteenstock",readOnly:!0,nom:"quantiteenstock",label:"Quantite en stock",valeur:null===(t=T.stock)||void 0===t?void 0:t.quantiteenstock,control:Q.control,error:Q.errors.quantiteenstock})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"prixdedetail",nom:"prixdedetail",label:"prix de d\xe9tail",valeur:null===(a=T.stock)||void 0===a?void 0:a.prixdedetail,control:Q.control,error:Q.errors.prixdedetail})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"prixdedemigros",nom:"prixdedemigros",label:"Prix de demis-gros",valeur:null===(r=T.stock)||void 0===r?void 0:r.prixdedemigros,control:Q.control,error:Q.errors.prixdedemigros})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"prixdegros",nom:"prixdegros",label:"prix de gros",valeur:null===(n=T.stock)||void 0===n?void 0:n.prixdegros,control:Q.control,error:Q.errors.prixdegros})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"quantitededemisgros",nom:"quantitededemisgros",label:"Quantit\xe9 de demis-gros",valeur:null===(o=T.stock)||void 0===o?void 0:o.quantitededemisgros,control:Q.control,error:Q.errors.quantitededemisgros})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"quantitedegros",nom:"quantitedegros",label:"Quantit\xe9 de gros",valeur:null===(c=T.stock)||void 0===c?void 0:c.quantitedegros,control:Q.control,error:Q.errors.quantitedegros})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"prixdachat",nom:"prixdachat",label:"Prix d'achat",valeur:null===(s=T.stock)||void 0===s?void 0:s.prixdachat,control:Q.control,error:Q.errors.prixdachat})),i.a.createElement(O.a,{item:!0},F.queryMagasins.isLoading?i.a.createElement(f.a,{message:"chargement des Magasins"}):i.a.createElement(q.a,{id:"magasin",readOnly:!0,name:"magasin",label:"magasin",table:"magasin",control:Q.control,options:F.queryMagasins.data.rows,error:Q.errors.magasin,defaultValue:null!==(l=null===(u=T.stock)||void 0===u||null===(m=u.Magasin)||void 0===m?void 0:m.id)&&void 0!==l?l:"1",valeur:null!==(g=null===(b=T.stock)||void 0===b?void 0:b.magasin)&&void 0!==g?g:""})),i.a.createElement(O.a,{item:!0},F.queryProduits.isLoading?i.a.createElement(f.a,{message:"chargement des Produits"}):i.a.createElement(q.a,{id:"produit",readOnly:!0,name:"produit",label:"produit",table:"produit",control:Q.control,options:F.queryProduits.data.rows,error:Q.errors.produit,defaultValue:null!==(v=null===(h=T.stock)||void 0===h||null===(A=h.Produit)||void 0===A?void 0:A.id)&&void 0!==v?v:"1",valeur:null!==(L=null===(R=T.stock)||void 0===R?void 0:R.produit)&&void 0!==L?L:""}))))),i.a.createElement(w.a,null,i.a.createElement(O.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(O.a,{item:!0},i.a.createElement(S.a,{color:"primary",variant:"contained",type:"submit",onClick:Q.handleSubmit(N)},F.mutationMiseajour.isLoading||F.mutationAjout.isLoading?i.a.createElement(M.a,{color:"inherit"}):i.a.createElement(C.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===T.pagestate.action?i.a.createElement(d.a,null,"Enregistrer"):i.a.createElement(d.a,null,"Mettre \xe0 jour")))),i.a.createElement(O.a,{item:!0},i.a.createElement(S.a,{variant:"outlined",color:"secondary",onClick:D.AnnulerEnregistrement},"Annuler")))))))))}var L=a(1404),R=a(1403),T=a(1328),D=a(2137),F=a(2138),Q=a(2213),N=a(2214),I=a(1388);const V=L.b().shape({motif:L.c().required("Le champs Motif est requis"),quantite:L.a("La quantite doit \xeatre un entier").required("Le champs Motif est requis")});function z({state:e,fonctions:t,queries:a}){const s=e.dialogueMouvement,l=s.id,u=s.titre,d=s.contenu,m=s.operation,p=s.open,g=(s.utilisateur,t.handleClickSurAnnuler),b=t.handleClickSurValider,v={typedemouvement:m,quantite:0,stock:l,motif:""},h=(Object(c.useQueryClient)(),Object(o.useState)(v)),j=Object(n.a)(h,2),E=j[0],k=j[1],y=e=>{let t=Object(r.a)(Object(r.a)({},v),e);k(t),b(t)},x=Object(I.c)({resolver:Object(R.yupResolver)(V)}),w=x.control,M=x.handleSubmit,q=x.errors;x.reset;return i.a.createElement(T.a,{open:p,"aria-labelledby":"form-dialog-title",titre:u,contenu:d,operation:m},i.a.createElement("form",{onSubmit:M(y)},i.a.createElement(N.a,{id:"form-dialog-title"},u),i.a.createElement(F.a,null,i.a.createElement(Q.a,null,d),i.a.createElement(O.a,{container:!0,spacing:3,direction:"column"},i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"quantite",nom:"quantite",label:"quantite",valeur:E.quantite,control:w,error:q.quantite,variant:"outlined"})),i.a.createElement(O.a,{item:!0},i.a.createElement(P.a,{id:"motif",nom:"motif",label:"Motif",valeur:null===E||void 0===E?void 0:E.motif,control:w,error:q.motif,multiline:!0,rowsMax:4,variant:"outlined"})))),i.a.createElement(D.a,null,i.a.createElement(O.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(O.a,{item:!0},i.a.createElement(S.a,{onClick:a.mutationAjoutMouvement.isLoading?null:M(y),color:"primary",variant:"outlined"},a.mutationAjoutMouvement.isLoading?i.a.createElement(f.a,null):"entree"===m?"Ajouter":"Diminuer")),i.a.createElement(O.a,{item:!0},i.a.createElement(S.a,{variant:"outlined",color:"secondary",onClick:g},"Annuler"))))))}var B=a(625),W=a(626),H=a(628),J=a(1902),U=a(1323);var Y=({queries:e,fonctions:t})=>i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(p.a,{className:"mb-sm-30"},i.a.createElement("form",null,i.a.createElement(O.a,{container:!0,spacing:2,direction:"column"},i.a.createElement(O.a,{item:!0},i.a.createElement(O.a,{container:!0,spacing:10,direction:"row"})),i.a.createElement(O.a,{item:!0},i.a.createElement(O.a,{container:!0,spacing:5,direction:"row"},i.a.createElement(O.a,{item:!0,sm:1}),i.a.createElement(O.a,{item:!0,sm:3,p:5},e.queryProduits.isLoading?i.a.createElement(f.a,{message:"chargement des Produits"}):i.a.createElement(B.a,{fullWidth:!0},i.a.createElement(W.a,{htmlFor:"Produit"},"Choisir un produit"),i.a.createElement(H.a,{id:"Produit",variant:"outlined",onChange:t.handleChangeProduit},i.a.createElement(J.a,{key:"0",value:null},"Tous les produits"),e.queryProduits.data.rows.map(e=>i.a.createElement(J.a,{key:e.id,value:e.id},e.nom))),i.a.createElement(U.a,null))),i.a.createElement(O.a,{item:!0,sm:3}))),i.a.createElement(O.a,{item:!0},i.a.createElement(O.a,{container:!0,spacing:10,direction:"row"}))))));var G=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,s=e.queries,O=e.useform,k=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(z,{fonctions:o,state:n,queries:s}),i.a.createElement(g.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(b.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(d.a,{variant:"h4"},n.titre)),i.a.createElement(Y,{fonctions:o,queries:s}),"affichage"===n.pagestate.mode?i.a.createElement(m.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,s.queryStocks.isLoading?i.a.createElement(f.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryStocks.isError?i.a.createElement(f.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryStocks.error,type:"error"}):i.a.createElement(h.a,{tag:"div",blocking:!1},i.a.createElement(E.a,{theme:Object(j.a)()},i.a.createElement(l.a,{title:n.titre,data:s.queryStocks.data.rows.map(e=>({stock:e})),columns:c,options:Object(r.a)(Object(r.a)({},u.a),{},{serverSide:!0,count:s.queryStocks.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},u.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},u.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(p.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(v.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.stock)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(A,{state:n,fonctions:o,queries:s,useform:O,onSubmit:k}))},K=a(13),X=a(87),Z=a(1510),$=a(1511),_=a(1505),ee=a(2199),te=a(1670),ae=a(1671),re=a(2231),ne=a(344),oe=a(1358),ie=a(1332),ce=a(1376);Object(ne.a)(e=>{e.palette,Object(K.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function se(e){const t=Object(ne.a)(e=>{e.palette,Object(K.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"stock",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"produit",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,o;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{whiteSpace:"nowrap"}},i.a.createElement("strong",null,null!==(r=null===e||void 0===e?void 0:e.Produit.nom)&&void 0!==r?r:"")),i.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(n=null===e||void 0===e||null===(o=e.Magasin)||void 0===o?void 0:o.nom)&&void 0!==n?n:""))}}},{name:"stock",label:"Quantit\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return i.a.createElement("strong",null," ",null!==(r=null===(n=e.quantiteenstock)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:"")}}},{name:"stock",label:"Prix d\xe9tail",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.prixdedetail)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Prix demis-gros",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.prixdedemigros)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Prix de gros",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.prixdegros)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>i.a.createElement(oe.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"stock",label:"Quantit\xe9 demis-gros",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.quantitededemisgros)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Quantit\xe9 gros",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.quantitedegros)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Prix d'achat",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.prixdachat)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"stock",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(X.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(ie.a,{xsDown:!0},i.a.createElement(S.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(re.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(Z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"Augmenter le stock",action:e=>a(e,"ajout"),icon:i.a.createElement(Z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement($.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(_.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(ee.a,{color:"primary"})},{id:2,nom:"Augmenter le stock",action:e=>a(e,"entree"),icon:i.a.createElement(te.a,{color:"primary"})},{id:3,nom:"Diminuer le stock",action:e=>a(e,"sortie"),icon:i.a.createElement(ae.a,{color:"error"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(ce.a,null)))))}}]}a(1412);var le=a(1512),ue=a(1546),de=a(1637),me=a(1542);t.default=()=>{const e=JSON.parse(sessionStorage.getItem("session")).utilisateur,t=JSON.parse(sessionStorage.getItem("session")).utilisateur,a={stock:{quantiteenstock:0,prixdedetail:0,prixdedemigros:0,prixdegros:0,actif:"",quantitededemisgros:0,quantitedegros:0,magasin:1,produit:1},stock1:null,titre:"Stocks de produits",tableconfig:{page:0,rowsPerPage:30,recherche:{produit:{id:""},magasin:{id:e.magasin}},filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialogueMouvement:{open:!1,titre:"",contenu:"",operation:"credit",utilisateur:0,id:0}},s=Object(o.useState)(a),l=Object(n.a)(s,2),u=l[0],d=l[1];let m=new me.a,p=new de.a,g=new le.a,b=new ue.a;const v=Object(c.useQueryClient)(),f={handleFermetureAlerte:()=>{d(Object(r.a)(Object(r.a)({},u),{},{titre:"Stocks de produits",alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{d(Object(r.a)(Object(r.a)({},u),{},{stock:null,titre:"Nouveau stock",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{d(Object(r.a)(Object(r.a)({},u),{},{alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),d(Object(r.a)(Object(r.a)({},u),{},{titre:"Stocks de produits",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{d(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(u.stock)},handleCloseDialoguephoto:()=>{d(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{d(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{d(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{d(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"entree":d(Object(r.a)(Object(r.a)({},u),{},{dialogueMouvement:Object(r.a)(Object(r.a)({},u.dialogueMouvement),{},{open:!0,titre:"Augmentation du stock "+e.id,contenu:"Saisir la quantit\xe9 \xe0 diminuer",operation:"entree",id:e.id,utilisateur:t})}));break;case"sortie":d(Object(r.a)(Object(r.a)({},u),{},{dialogueMouvement:Object(r.a)(Object(r.a)({},u.dialogueMouvement),{},{open:!0,titre:"Diminution du stock "+e.id,contenu:"Saisir la quantit\xe9 \xe0 diminuer",operation:"sortie",id:e.id,utilisateur:t})}));break;case"Modifier":d(Object(r.a)(Object(r.a)({},u),{},{titre:"Mise \xe0 jour ",stock:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}))}},handleClickSurValider:e=>{k.mutate(e)},handleClickSurAnnuler:()=>{d(Object(r.a)(Object(r.a)({},u),{},{dialogueMouvement:Object(r.a)(Object(r.a)({},u.dialogueMouvement),{},{open:!1})}))},handleTogleactif:e=>{x.mutate(e)},handleChangeMagasin:e=>{d(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:Object(r.a)(Object(r.a)({},u.tableconfig.recherche),{},{magasin:{id:e.target.value}})})}))},handleChangeProduit:e=>{d(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:Object(r.a)(Object(r.a)({},u.tableconfig.recherche),{},{produit:{id:e.target.value}})})}))}},h=Object(c.useQuery)(["Stocks",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>m.getTouslesStocks(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),j=Object(c.useQuery)(["Magasins",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>g.getTouslesMagasins(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),E=Object(c.useQuery)(["Produits",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>b.getTouslesProduits(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),O=Object(c.useMutation)(m.ajoutStock,{onSuccess:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),k=Object(c.useMutation)(p.ajoutMouvementdestock,{onSuccess:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0},dialogueMouvement:Object(r.a)(Object(r.a)({},u.dialogueMouvement),{},{open:!1})}))},onError:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0},dialogueMouvement:Object(r.a)(Object(r.a)({},u.dialogueMouvement),{},{open:!1})}))}}),y=Object(c.useMutation)(m.miseajourStock,{onSuccess:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{v.invalidateQueries("Stocks"),d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),x=Object(c.useMutation)(m.togleactifStock,{onSuccess:()=>{d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{d(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{v.invalidateQueries("Stocks")}}),w=Object(c.useMutation)(m.suppressionStock,{onSuccess:()=>{d(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{d({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{v.invalidateQueries("Stocks")}}),S={queryStocks:h,mutationMiseajour:y,mutationAjout:O,mutationSuppression:w,mutationAjoutMouvement:k,queryMagasins:j,queryProduits:E},M=se(f),P=L.b().shape({}),q=Object(I.c)({resolver:Object(R.yupResolver)(P),defaultValues:{stock:u.stock}});return i.a.createElement(G,{state:u,fonctions:f,collonnes:M,queries:S,useform:q,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},u.stock),e);void 0!==(null===(t=u.stock)||void 0===t?void 0:t.id)?S.mutationMiseajour.mutate(Object(r.a)({},a)):S.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);