(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[37],{1382:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(3),n=t(0),s=t.n(n),o=t(353),i=t(1374);function c(e){const a=Object(r.a)({},e),t=a.message,n=a.type;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},s.a.createElement(o.a,{item:!0}),s.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",s.a.createElement("span",null,t,".")))}},1389:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);function i(e){return c.apply(this,arguments)}function c(){return(c=Object(s.a)(n.a.mark((function e(a){var t,r,s,i,c,u,l,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,r=a.nom,s=a.modele,i=a.champ,c=a.objet,u=a.obj,l=a.handleprogress,(m=new FormData).append(u.cle,c.id),m.append("modele",s),m.append("champ",i),m.append("nom",r),m.append("cle",u.cle),m.append("valeur",u.valeur),m.append("file",t),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:l});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1390:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1423:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);class i{getTouslesMagasins(e,a,t,r){return Object(s.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e+=1,t.next=3,o.b.get("/magasins?itemsPerPage=".concat(a,"&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))()}ajoutMagasin(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/magasins",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourMagasin(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/magasins/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionMagasin(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/magasins/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1447:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);class i{getTouslesStocks(e,a,t,r){return Object(s.a)(n.a.mark((function r(){var s,i,c,u,l,m;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/stocks?itemsPerPage=".concat(a,"&page=").concat(e,"&produit=").concat(null!==(s=null===t||void 0===t||null===(i=t.produit)||void 0===i?void 0:i.id)&&void 0!==s?s:"","&magasin=").concat(null!==(c=null===t||void 0===t||null===(u=t.magasin)||void 0===u?void 0:u.id)&&void 0!==c?c:"","&actif=").concat(null!==(l=t.actif)&&void 0!==l?l:""));case 3:return m=r.sent,r.abrupt("return",m.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutStock(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/stocks",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourStock(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/stocks/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionStock(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/stocks/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleactifStock(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/stocks/"+e.id,{actif:!e.actif});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}getStockActifDeMagasin(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.get("/stocks?itemsPerPage=1000&page=0&magasin=".concat(e.id,"&actif=1"));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1460:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);class i{getTouslesFournisseurs(e,a,t,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/fournisseurs?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/fournisseurs",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/fournisseurs/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/fournisseurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleactifFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/fournisseurs/"+e.id,{actif:!e.actif});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}misajourStatutFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("fournisseurs/"+e.id,{statut:e.statut});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleestsocieteFournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/fournisseurs/"+e.id,{estsociete:!e.estsociete});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1500:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);class i{getTouslesAdresses(e,a,t,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/adresses?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutAdresse(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/adresses",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourAdresse(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/adresses/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionAdresse(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/adresses/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleestprincipaleAdresse(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/adresses/"+e.id,{estprincipale:!e.estprincipale});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1501:function(e,a,t){"use strict";const r={supprimerUnElementDuTableau:(e,a)=>(e.splice(a,1),e)};a.a=r},1580:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(20),n=t.n(r),s=t(39),o=t(75);class i{getTouslesCommandefournisseurs(e,a,t,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/commandefournisseurs?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommandefournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/commandefournisseurs",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourCommandefournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/commandefournisseurs/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionCommandefournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/commandefournisseurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}misajourStatutCommandefournisseur(e){return Object(s.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("commandefournisseurs/statut/"+e.id,{statut:e.statut});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},2052:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(17),s=t(0),o=t.n(s),i=t(1580),c=t(133),u=t(1404),l=t.n(u),m=t(1390),d=t(447),p=t(2028),f=t(451),g=t(1377),b=t(356),v=t(354),h=t(355),j=t(1382),E=(t(1405),t(1406),t(75)),O=t(2038),y=t(2034),x=t(2035),w=t(1385),k=t(1381),C=t(1384),S=t(1727),P=t(1501),A=t(1447),q=t(353),M=t(2023),F=t(623),T=t(2022),L=t(624),N=t(1682),R=t(2021),D=t(1371),I=t(50);function Q(e){const a=e.state,t=e.fonctions,r=e.queries;return o.a.createElement("div",null,o.a.createElement(q.a,{container:!0,spacing:4,justify:"center"},o.a.createElement(q.a,{item:!0,lg:8,md:8,sm:12,xs:12},o.a.createElement(D.a,{theme:Object(E.a)()},o.a.createElement(I.ValidatorForm,{onSubmit:t.allerADetails,onError:e=>console.log(e)},o.a.createElement(g.a,null,o.a.createElement(M.a,{action:o.a.createElement(F.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"Indiquez le fournisseur et le magasin",subheader:""}),o.a.createElement(T.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},r.queryMagasins.isLoading?o.a.createElement(j.a,{message:"Chargement des magasins"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{item:!0},r.queryFournisseurs.isLoading?o.a.createElement(j.a,{message:"chargement des magasins"}):o.a.createElement(L.a,{fullWidth:!0},o.a.createElement(I.SelectValidator,{fullWidth:!0,id:"fournisseur",name:"fournisseur",value:a.commandefournisseur.fournisseur,validators:["required"],errorMessages:["Le fournisseur est requis"],onChange:t.handleChange},r.queryFournisseurs.data.rows.map(e=>o.a.createElement(N.a,{key:e.id,value:e.id},e.nom))))),o.a.createElement(q.a,{item:!0},r.queryMagasins.isLoading?o.a.createElement(j.a,{message:"chargement des magasins"}):o.a.createElement(I.SelectValidator,{fullWidth:!0,name:"magasin",value:a.commandefournisseur.magasin,validators:["required"],errorMessages:["Le magasin est requis"],onChange:t.handleChange},r.queryMagasins.data.rows.map(e=>o.a.createElement(N.a,{key:e.id,value:e.id},e.nom)))),o.a.createElement(q.a,{item:!0},o.a.createElement(I.TextValidator,{value:a.commandefournisseur.adresse,fullWidth:!0,id:"adresse",name:"adresse",label:"Adresse de livraison",validators:[],errorMessages:["Adresse de livraison obligatoire"],onChange:t.handleChange}))))),o.a.createElement(R.a,null,o.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(q.a,{item:!0},o.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:t.AnnulerEnregistrement},"Annuler")),o.a.createElement(q.a,{item:!0},o.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit"},o.a.createElement("span",{className:"pl-2 capitalize"},o.a.createElement(d.a,null," Suivant >>"))))))))))))}var B=t(1683),V=t(2041),z=t(1691),H=t(1686),W=t(1685),J=t(627),U=t(449),Y=t(1374),_=t(2044);function G(e){const a=e.state,t=e.fonctions,r=e.queries;return o.a.createElement("div",null,o.a.createElement(q.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(q.a,{item:!0,lg:12,md:12,sm:12,xs:12},o.a.createElement(D.a,{theme:Object(E.a)()},o.a.createElement(g.a,{className:" px-6 pt-6 pb-6"},o.a.createElement(M.a,{action:o.a.createElement(F.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"Fournisseur:".concat(a.commandefournisseur.Fournisseur.nom," \n                               "),subheader:"\n                                magasin: ".concat(a.commandefournisseur.Magasin.nom)}),o.a.createElement(T.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",null,o.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(q.a,{item:!0},o.a.createElement(B.a,{className:"mb-4"},o.a.createElement(V.a,null,o.a.createElement(z.a,{className:"bg-default"},o.a.createElement(H.a,{key:"numero",align:"left",className:"pl-sm-24"},"#"),o.a.createElement(H.a,{key:"produit",align:"left",className:"pl-sm-24"},"Produit"),o.a.createElement(H.a,{key:"quantite",align:"right",className:"pl-sm-24"},"Quantit\xe9"),o.a.createElement(H.a,{key:"pu",align:"right",className:"pl-sm-24"},"Prix unitaire"),o.a.createElement(H.a,{key:"pt",align:"right",className:"pl-sm-24"},"Prix total"),o.a.createElement(H.a,{key:"action",align:"right",className:" pl-sm-24"},"Action"))),o.a.createElement(W.a,null,a.commandefournisseur.Lignecommandefournisseurs.map((e,a)=>{var n,s,i;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{key:a},o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"left"},a+1),o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"left"},r.queryStocks.isLoading?o.a.createElement(j.a,{message:"chargement des produits"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(L.a,{fullWidth:!0},o.a.createElement(J.a,{value:e.stock,label:"Produit",name:"stock",key:"stock",variant:"outlined",id:"stock".concat(a),onChange:e=>{t.handleSelectionStock(e,a)}},r.queryStocks.data.rows.map(e=>o.a.createElement(N.a,{key:e.id,value:e.id},e.Produit.nom)))))),o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"right"},o.a.createElement(U.a,{id:"quantite",type:"number",fullWidth:!0,value:null!==(n=null===e||void 0===e?void 0:e.quantite)&&void 0!==n?n:1,label:"Quantite",name:"quantite",key:"quantite",variant:"outlined",onChange:e=>{t.handleChangeQuantite(e,a)}})),o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"right"},o.a.createElement(U.a,{id:"prixunitaire",type:"number",fullWidth:!0,value:null!==(s=null===e||void 0===e?void 0:e.prixunitaire)&&void 0!==s?s:0,label:"Prix unitaire",name:"prixunitaire",key:"prixunitaire",variant:"outlined"})),o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"right"},o.a.createElement(U.a,{id:"prixtotal",type:"number",fullWidth:!0,value:null!==(i=null===e||void 0===e?void 0:e.prixtotal)&&void 0!==i?i:1,label:"Prix total",name:"prixtotal",key:"prixtotal",variant:"outlined"})),o.a.createElement(H.a,{className:"pl-sm-24 capitalize",align:"right"},o.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:()=>t.handleClickSurSupprimer(a)},"Supprimer"))))}),o.a.createElement(z.a,null,o.a.createElement(H.a,{colSpan:4,align:"right"},o.a.createElement(d.a,{variant:"h6"},"Sous total")),o.a.createElement(H.a,{align:"right"},o.a.createElement(d.a,null,a.commandefournisseur.soustotal))),o.a.createElement(z.a,null,o.a.createElement(H.a,{colSpan:4,align:"right"},o.a.createElement(d.a,{variant:"h6"},"Taxe")),o.a.createElement(H.a,{align:"right"},a.commandefournisseur.taxe)),o.a.createElement(z.a,null,o.a.createElement(H.a,{colSpan:4,align:"right"},o.a.createElement(d.a,{variant:"h6"},"Total")),o.a.createElement(H.a,{align:"right"},o.a.createElement(d.a,{variant:"h6"},a.commandefournisseur.montant))))),o.a.createElement("div",{className:"flex justify-end px-4 mb-4"},o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:t.handleClickSurAjouter},"Ajouter un produit")))))),o.a.createElement(R.a,null,o.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(q.a,{item:!0},o.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:t.handleClickSurPrecedent},"<< Pr\xe9c\xe9dent")),o.a.createElement(q.a,{item:!0},o.a.createElement(f.a,{color:"primary",variant:"contained",onClick:t.handleClickSurEnregistrer},r.mutationMiseajour.isLoading||r.mutationAjout.isLoading?o.a.createElement(Y.a,{color:"inherit"}):o.a.createElement(_.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"Enregistrer"))))))))))}function K(e){const a=e.state,t=e.fonctions,i=e.queries,u=e.queryClient,l={id:1,stock:0,quantite:1,prixunitaire:0,prixtotal:0},m=Object(s.useState)(Object(r.a)(Object(r.a)({},a),{},{etape:0,etapes:[{index:0,label:"Informations sur le fournisseur"},{index:1,label:"D\xe9tails de la commandefournisseur"}],rechercheStock:{produit:{id:""},magasin:{id:""},actif:1}})),p=Object(n.a)(m,2),g=p[0],b=p[1],v=new A.a;t.allerAFournisseur=()=>{b(Object(r.a)(Object(r.a)({},g),{},{etape:0}))},t.handleChange=({target:{name:e,value:a}})=>{let t=Object(r.a)({},g.commandefournisseur);t[e]=a,b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),t)}))},console.log("*********** ".concat(JSON.stringify(g.commandefournisseur),"******************")),t.allerADetails=()=>{var e=i.queryMagasins.data.rows.find(e=>e.id===+g.commandefournisseur.magasin),a=i.queryFournisseurs.data.rows.find(e=>e.id===+g.commandefournisseur.fournisseur);b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),{},{Fournisseur:null!==a&&void 0!==a?a:0,Magasin:null!==e&&void 0!==e?e:0}),rechercheStock:Object(r.a)(Object(r.a)({},g.rechercheStock),{},{magasin:{id:g.commandefournisseur.magasin}}),etape:1}))},t.handleSelectionStock=(e,a)=>{var t=g.commandefournisseur.Lignecommandefournisseurs;t[a].stock=e.target.value;let n=i.queryStocks.data.rows.find(e=>e.id===t[a].stock).prixdachat;t[a].prixunitaire=n,t[a].prixtotal=t[a].quantite*n,console.log("*********** ".concat(JSON.stringify(t),"******************"));const s=E(t,g.commandefournisseur.taxe);b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),{},{Lignecommandefournisseurs:t,soustotal:s.sousTotal,montant:s.total})}))},t.handleClickSurSupprimer=e=>{var a=g.commandefournisseur.Lignecommandefournisseurs;a=P.a.supprimerUnElementDuTableau(a,e);const t=E(a,g.commandefournisseur.taxe);b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),{},{Lignecommandefournisseurs:a,soustotal:t.sousTotal,montant:t.total})}))},t.handleClickSurAjouter=()=>{var e=g.commandefournisseur.Lignecommandefournisseurs;e.push(l),b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),{},{Lignecommandefournisseurs:e})}))},t.handleChangeQuantite=(e,a)=>{var t=g.commandefournisseur.Lignecommandefournisseurs;t[a].quantite=e.target.value;const n=i.queryStocks.data.rows.find(e=>e.id===t[a].stock);let s=n.prixdedetail;e.target.value>=n.quantitedegros?s=n.prixdegros:e.target.value>=n.quantitededemisgros&&(s=n.prixdedemigros),t[a].prixunitaire=s,t[a].prixtotal=t[a].quantite*s;const o=E(t,g.commandefournisseur.taxe);b(Object(r.a)(Object(r.a)({},g),{},{commandefournisseur:Object(r.a)(Object(r.a)({},g.commandefournisseur),{},{Lignecommandefournisseurs:t,soustotal:o.sousTotal,montant:o.total})}))},t.handleClickSurPrecedent=()=>{b(Object(r.a)(Object(r.a)({},g),{},{etape:0}))},t.handleClickSurEnregistrer=()=>{console.log("***********enregistrement d'une nouvelle commandefournisseur******************"),console.log(g.commandefournisseur),t.enregistrerCommandefournisseur(g.commandefournisseur)};const h=w.b().shape({magasin:w.c().required("Le magasin est requis"),fournisseur:w.c().required("Le fournisseur est requis")}),j={commandefournisseur:Object(k.c)({resolver:Object(C.yupResolver)(h),defaultValues:g.commandefournisseur})};i.queryStocks=Object(c.useQuery)(["Stock",g.rechercheStock],()=>v.getTouslesStocks(0,1e3,g.rechercheStock,""),{keepPreviousData:!0});const E=(e,a)=>e.reduce((e,t)=>({sousTotal:e.sousTotal+t.prixtotal,total:e.sousTotal+t.prixtotal+(.01*a*(e.sousTotal+t.prixtotal)+a)}),{sousTotal:0,total:0});return o.a.createElement(S.a,{sx:{width:"100%"}},o.a.createElement(O.a,{nonLinear:!0,activeStep:g.etape},g.etapes.map(e=>o.a.createElement(y.a,{key:e.label,completed:g.etape>e.index},o.a.createElement(x.a,{color:"inherit"},e.label)))),o.a.createElement("div",null,g.complet?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),o.a.createElement(S.a,{sx:{display:"flex",flexDirection:"row",pt:2}},o.a.createElement(S.a,{sx:{flex:"1 1 auto"}}),o.a.createElement(f.a,{onClick:t.fermerFormulaire},"Quitter"))):o.a.createElement(o.a.Fragment,null,0===g.etape?o.a.createElement(Q,{state:g,fonctions:t,queries:i,useforms:j,queryClient:u}):1===g.etape?o.a.createElement(G,{state:g,fonctions:t,queries:i,useforms:j,queryClient:u}):o.a.createElement("span",null,"Autre"))))}var X=e=>{var a,t;const n=e.state,s=e.fonctions,i=e.collonnes,c=e.queries,u=e.useform,E=e.onSubmit,O=e.queryClient;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(b.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>s.handleFermetureAlerte():()=>s.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(v.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(d.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(p.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>s.handleClicksurNouveau()},"Nouvelle commande"),c.queryCommandefournisseurs.isLoading?o.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryCommandefournisseurs.isError?o.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryCommandefournisseurs.error,type:"error"}):o.a.createElement(l.a,{title:n.titre,data:c.queryCommandefournisseurs.data.rows.map(e=>({commandefournisseur:e})),columns:i,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryCommandefournisseurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>s.handleChangePage(e),onChangeRowsPerPage:e=>s.handleChangeRowPerPage(e),onSearchChange:e=>s.handleSearchChange(e),onFilterChange:()=>s.handleFilterChange()})}),o.a.createElement(g.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(h.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:s.fermerDialogueSuppression,onYesClick:s.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.commandefournisseur)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):o.a.createElement(K,{state:n,fonctions:s,queries:c,useform:u,onSubmit:E,queryClient:O}))},Z=t(13),$=t(87),ee=t(2046),ae=t(1410),te=t(1411),re=t(2045),ne=t(343),se=t(1331),oe=t(1375),ie=t(2014),ce=t(1436);function ue(e){const a=Object(ne.a)(e=>{e.palette,Object(Z.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=e=>{switch(e.statut){case"Annul\xe9e":return"bg-error";case"Nouveau":return"bg-primary";case"Valid\xe9e":return"bg-green";case"Livr\xe9e":return"bg-gray";case"Factur\xe9e":return"bg-dark";default:return"bg-primary"}},r=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"commandefournisseur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Dates",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>o.a.createElement(o.a.Fragment,null,o.a.createElement("small",{style:{whiteSpace:"nowrap"}},"Commande:  ",null==e.datecommande?"":Object(ie.a)(Object(ce.a)(e.datecommande),"dd/MM/yyyy HH:mm")),o.a.createElement("br",null),e.datevalidation&&o.a.createElement("small",{style:{whiteSpace:"nowrap"}},"Validation:  ",null==e.datevalidation?"":Object(ie.a)(Object(ce.a)(e.datevalidation),"dd/MM/yyyy HH:mm")),o.a.createElement("br",null),e.datefacturation&&o.a.createElement("small",{style:{whiteSpace:"nowrap"}},"Facturation:  ",null==e.datefacturation?"":Object(ie.a)(Object(ce.a)(e.datefacturation),"dd/MM/yyyy HH:mm")),o.a.createElement("br",null),e.datelivraison&&o.a.createElement("small",{style:{whiteSpace:"nowrap"}},"Livraison:  ",null==e.datelivraison?"":Object(ie.a)(Object(ce.a)(e.datelivraison),"dd/MM/yyyy HH:mm")),o.a.createElement("br",null),e.dateannulation&&o.a.createElement("small",{style:{whiteSpace:"nowrap"}},"Annulation:  ",null==e.dateannulation?"":Object(ie.a)(Object(ce.a)(e.dateannulation),"dd/MM/yyyy HH:mm")))}},{name:"commandefournisseur",label:"fournisseur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.Fournisseur)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"magasin",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.Magasin)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Montant HT",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.soustotal)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Taxe",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.taxe)&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Montant total",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.montant)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Validit\xe9",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.validite)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Adresse de livraison",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.adresse)&&void 0!==r?r:""}}},{name:"commandefournisseur",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(r,n,s)=>o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement($.j,{menuButton:o.a.createElement("div",{className:a.userMenu},o.a.createElement(se.a,{xsDown:!0},o.a.createElement(f.a,{size:"small",variant:"text",color:"primary",endIcon:o.a.createElement(re.a,null)},o.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+t({id:r.id,statut:r.statut})},r.statut))))},(e=>{switch(e.statut){case"Annul\xe9e":return[];case"Nouveau":return[{id:1,nom:"Valider",statut:"Valid\xe9e"},{id:2,nom:"Annuler",statut:"Annul\xe9e"}];case"Valid\xe9e":return[{id:1,nom:"Facturer",statut:"Factur\xe9e"},{id:2,nom:"Annuler",statut:"Annul\xe9e"}];case"Factur\xe9e":return[{id:1,nom:"Livrer",statut:"Livr\xe9e"}];default:return[]}})(r).map(a=>o.a.createElement(N.a,{onClick:()=>e.handleChangementStatut({id:r.id,statut:a.statut}),key:a.id,value:a.statut},a.nom)))))}},{name:"commandefournisseur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,n)=>o.a.createElement("div",null,o.a.createElement($.j,{menuButton:o.a.createElement("div",{className:a.userMenu},o.a.createElement(se.a,{xsDown:!0},o.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(re.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"Imprimer",action:e=>r(e,"Imprimer"),icon:o.a.createElement(ee.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"Imprimer",action:e=>r(e,"Imprimer"),icon:o.a.createElement(ee.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:o.a.createElement(ae.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>r(e,"Supprimer"),icon:o.a.createElement(te.a,{color:"error"})}];default:return[{id:1,nom:"Imprimer",action:e=>r(e,"Imprimer"),icon:o.a.createElement(ee.a,{color:"primary"})}]}})(e).map(a=>o.a.createElement(N.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",o.a.createElement("span",{className:"ml-5"},a.nom),o.a.createElement(oe.a,null)))))}}]}t(1389);var le=t(1460),me=t(1423),de=t(1500);a.default=()=>{const e={nom:"",datecommandefournisseur:"",montant:0,soustotal:0,remise:0,montantremise:0,taxe:0,validite:0,fournisseur:0,magasin:0,adresse:"",Lignecommandefournisseurs:[]},a={commandefournisseur:e,commandefournisseur1:null,titre:"Commandefournisseurs fournisseurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,rechercheStock:{produit:{id:""},magasin:{id:""}}},t=Object(s.useState)(a),u=Object(n.a)(t,2),l=u[0],m=u[1];let d=new i.a,p=new le.a,f=new me.a,g=new de.a;new A.a;const b=Object(c.useQueryClient)(),v=Object(c.useMutation)(d.misajourStatutCommandefournisseur,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{b.invalidateQueries("Commandefournisseurs")}}),h={handleFermetureAlerte:()=>{m(Object(r.a)(Object(r.a)({},l),{},{titre:"Commandes fournisseurs",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(r.a)(Object(r.a)({},l),{},{commandefournisseur:e,titre:"Nouvelle commandefournisseur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),m(Object(r.a)(Object(r.a)({},l),{},{titre:"Commandes fournisseurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{m(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{q.mutate(l.commandefournisseur)},handleCloseDialoguephoto:()=>{m(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"Imprimer":window.open("".concat(E.c,"/api/commandefournisseurs/imprimer/").concat(e.id),"_blanc");break;case"Modifier":m(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour commandefournisseur #"+e.id,commandefournisseur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(r.a)(Object(r.a)({},l),{},{commandefournisseur:e,dialogueSuppressionOuvert:!0}))}},handledatedatecommandefournisseurchange:e=>{m(Object(r.a)(Object(r.a)({},l),{},{commandefournisseur:Object(r.a)(Object(r.a)({},l.commandefournisseur),{},{datecommandefournisseur:e})}))},handleChangementStatut:({id:e,statut:a})=>{v.mutate({id:e,statut:a})},updateStock:e=>{m(Object(r.a)(Object(r.a)({},l),{},{rechercheStock:Object(r.a)(Object(r.a)({},l.rechercheStock),{},{produit:e.produit,magasin:e.magasin})}))},enregistrerCommandefournisseur:e=>{console.log("*********** ".concat(JSON.stringify(e),"******************")),e.id>0?(console.log("*********** ".concat(JSON.stringify("Mise \xe0 jour de la commandefournisseur"),"******************")),P.mutate(e)):(console.log("*********** ".concat(JSON.stringify("Enregistrement de la nouvelle commandefournisseur"),"******************")),S.mutate(e))}},j=Object(c.useQuery)(["Commandefournisseurs",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesCommandefournisseurs(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),O=Object(c.useQuery)(["Fournisseurs",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesFournisseurs(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),y=Object(c.useQuery)(["Magasins",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>f.getTouslesMagasins(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),x=Object(c.useQuery)(["Adresses",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>g.getTouslesAdresses(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),S=Object(c.useMutation)(d.ajoutCommandefournisseur,{onSuccess:()=>{b.invalidateQueries("Commandefournisseurs"),m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Commandefournisseurs"),m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),P=Object(c.useMutation)(d.miseajourCommandefournisseur,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}})),b.invalidateQueries("Commandefournisseurs")},onError:()=>{b.invalidateQueries("Commandefournisseurs"),m(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),q=Object(c.useMutation)(d.suppressionCommandefournisseur,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Commandefournisseurs")}}),M={queryCommandefournisseurs:j,mutationMiseajour:P,mutationAjout:S,mutationSuppression:q,queryFournisseurs:O,queryMagasins:y,queryAdresses:x},F=ue(h),T=w.b().shape({}),L={magasin:Object(k.c)({resolver:Object(C.yupResolver)(T),defaultValues:{commandefournisseur:l.commandefournisseur}})};return o.a.createElement(X,{state:l,fonctions:h,collonnes:F,queries:M,useform:L,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},l.commandefournisseur),e);void 0!==(null===(a=l.commandefournisseur)||void 0===a?void 0:a.id)?M.mutationMiseajour.mutate(Object(r.a)({},t)):M.mutationAjout.mutate(Object(r.a)({},t))},queryClient:b})}}}]);