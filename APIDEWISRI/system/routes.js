'use strict';

module.exports = function (app) {
    var index = require('../controllers/controller');
    var getImage = require('./server')

    var userController = require('../controllers/user_controller');
    var plantController = require('../controllers/plant_controller');
    var journalController = require('../controllers/journal_controller');
    var plantingNeedsController = require('../controllers/planting_needs_controller');
    var bibitController = require('../controllers/bibit_controller');
    var bbmController = require('../controllers/bbm_contoller');
    var pupukController = require('../controllers/pupuk_controller');
    var pestisidaController = require('../controllers/pestisida_controller');

    //Index Controller
    app.route('/')
        .get(index.index);

    // Image Route
    app.route('/storage/image/')
        .get(getImage.getImage)

    app.route('/storage/imagePost/')
        .get(getImage.getImagePost)

    //Auth

    app.route('/auth/registerUser')
        .post(userController.registerUser);

    app.route('/auth/getAllUsers')
        .get(userController.getAllUser);

    app.route('/auth/loginUser')
        .post(userController.loginUser);

    app.route('/auth/updateUser/:userId')
        .put(userController.updateUser);


    //Plant
    app.route('/plant/addPlant')
        .post(plantController.addPlant);

    app.route('/plant/getAllPlant')
        .get(plantController.getAllPlant);

    app.route('/plant/updatePlant/:plantId')
        .put(plantController.updatePlant);

    app.route('/plant/deletePlant/:plantId')
        .delete(plantController.deletePlant);

    app.route('/plant/getPlantById/:plantId')
        .get(plantController.getPlantById);

    //Journal
    app.route('/journal/addJournal')
        .post(journalController.addJournal);

    app.route('/journal/updateJournal/:journalId')
        .put(journalController.updateJournal);

    app.route('/journal/getJournalById/:journalId')
        .get(journalController.getJournalById);

    //Planting Needs
    app.route('/plantingNeeds/addPlantingNeeds')
        .post(plantingNeedsController.addPlantingNeeds);

    //Bibit
    app.route('/bibit/addBibit')
        .post(bibitController.addBibit);

    //BBM
    app.route('/bbm/addBBM')
        .post(bbmController.addBBM);
    
    //Pupuk
    app.route('/pupuk/addPupuk')
        .post(pupukController.addPupuk);
     
    //Pestisida
    app.route('/pestisida/addPestisida')
    .post(pestisidaController.addPestisida);

};