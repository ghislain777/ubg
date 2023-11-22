const express = require('express')
const cors = require('cors');
const multer = require('multer');
const {Role, Media} = require('./models')
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
const parametreRoutes = require('./routes/parametre_routes.js')
const mediaRoutes = require('./routes/media_routes.js')
const villeRoutes = require('./routes/ville_routes.js')
const communeRoutes = require('./routes/commune_routes.js')
const quartierRoutes = require('./routes/quartier_routes.js')
const categoriededepenseRoutes = require('./routes/categoriededepense_routes.js')
const categorieRoutes = require('./routes/categorie_routes.js')
const magasinRoutes = require('./routes/magasin_routes.js')
const souscategorieRoutes = require('./routes/souscategorie_routes.js')
const produitRoutes = require('./routes/produit_routes.js')
const stockRoutes = require('./routes/stock_routes.js')
const mouvementdestockRoutes = require('./routes/mouvementdestock_routes.js')
const caissemagasinRoutes = require('./routes/caissemagasin_routes.js')
const mouvementdecaisseRoutes = require('./routes/mouvementdecaisse_routes.js')
const clientRoutes = require('./routes/client_routes.js')
const fournisseurRoutes = require('./routes/fournisseur_routes.js')
const adresseRoutes = require('./routes/adresse_routes.js')
const depenseRoutes = require('./routes/depense_routes.js')
const transfertstockRoutes = require('./routes/transfertstock_routes.js')
const commandeRoutes = require('./routes/commande_routes.js')
const modedepayementRoutes = require('./routes/modedepayement_routes.js')
const commandefournisseurRoutes = require('./routes/commandefournisseur_routes.js')
const factureRoutes = require('./routes/facture_routes.js')
const facturefournisseurRoutes = require('./routes/facturefournisseur_routes.js')
const payementfournisseurRoutes = require('./routes/payementfournisseur_routes.js')
const mouvementdecompteclientRoutes = require('./routes/mouvementdecompteclient_routes.js')

const mouvementdecomptefournisseurRoutes = require('./routes/mouvementdecomptefournisseur_routes.js')
const venteRoutes = require('./routes/vente_routes.js')
const ligneventeRoutes = require('./routes/lignevente_routes.js')


const payementclientRoutes = require('./routes/payementclient_routes.js')
const fonctions = require("./fonctions")

const PORT = process.env.PORT || 8000
const app = express()
const path = require('path');
const dashboardRoutes = require('./routes/dashboard_routes');

app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));


app.use('/api/dashboard', dashboardRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/privileges', privilegeRoutes);
app.use('/api/parametres', parametreRoutes);
app.use('/api/medias', mediaRoutes); 
app.use('/api/villes', villeRoutes); 
app.use('/api/communes', communeRoutes); 
app.use('/api/quartiers', quartierRoutes); 
app.use('/api/categoriededepenses', categoriededepenseRoutes); 
app.use('/api/categories', categorieRoutes); 
app.use('/api/magasins', magasinRoutes); 
app.use('/api/souscategories', souscategorieRoutes); 
app.use('/api/produits', produitRoutes); 
app.use('/api/stocks', stockRoutes); 
app.use('/api/mouvementdestocks', mouvementdestockRoutes); 
app.use('/api/caissemagasins', caissemagasinRoutes);
app.use('/api/mouvementdecaisses', mouvementdecaisseRoutes);
app.use('/api/clients', clientRoutes); 
app.use('/api/fournisseurs', fournisseurRoutes); 
app.use('/api/adresses', adresseRoutes);
app.use('/api/depenses', depenseRoutes); 
app.use('/api/transfertstocks', transfertstockRoutes); 
app.use('/api/commandes', commandeRoutes); 
app.use('/api/modedepayements', modedepayementRoutes); 
app.use('/api/commandefournisseurs', commandefournisseurRoutes);
app.use('/api/factures', factureRoutes); 
app.use('/api/payementclients', payementclientRoutes); 
app.use('/api/facturefournisseurs', facturefournisseurRoutes); 
app.use('/api/payementfournisseurs', payementfournisseurRoutes); 
app.use('/api/mouvementdecomptefournisseurs', mouvementdecomptefournisseurRoutes); 
app.use('/api/mouvementdecompteclients', mouvementdecompteclientRoutes); 
app.use('/api/ventes', venteRoutes); 
app.use('/api/ligneventes', ligneventeRoutes); 

app.get('/api/*', (req, res) => {
  res.status(404).send("Not found");
});


app.use(express.static('public')); 


app.listen(PORT, () => {
  console.log(`Express server listening on port `, PORT)
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
