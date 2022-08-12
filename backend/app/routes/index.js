var express = require('express');
var router = express.Router();

var signin = require('../../controllers/signin');
var signup = require('../../controllers/signup');
var ownerssignin = require('../../controllers/ownerssignin');
var ownerssignup = require('../../controllers/ownerssignup');
var travelerdashboard = require('../../controllers/travelerdashboard');
var travelerinbox = require('../../controllers/travelerinbox');
var userprofile = require('../../controllers/userprofile');
var ownersdashboard = require('../../controllers/ownersdashboard');
var ownersinbox=require('../../controllers/ownersinbox');
var listproperty = require('../../controllers/listproperty');
var detailsview = require('../../controllers/detailsview');
var askquestion = require('../../controllers/askquestion');

/** routes for signin/up start*/
router
    .route('/SignUpEmail')
    .post(signup.SignUpEmail);

router
    .route('/SignIn')
    .post(signin.SignIn);

/** routes for signin/up end*/

/** routes for owners signin/up start*/
router
    .route('/OwnersSignUpEmail')
    .post(ownerssignup.OwnersSignUpEmail);

router
    .route('/OwnersSignIn')
    .post(ownerssignin.OwnersSignIn);

/** routes for signin/up end*/

/** routes for userprofile start*/
router
    .route('/UserProfile')
    .post(userprofile.UserProfile);

/** routes for userprofile end*/

/** routes for listproperty start*/
router
    .route('/ListProperty')
    .post(listproperty.ListProperty);

/** routes for listproperty end*/

/** routes for detailsview start*/
router
    .route('/DetailsMainView')
    .post(detailsview.DetailsMainView);

router
    .route('/DetailsMainView')
    .get(detailsview.getDetailsMainView);

router
    .route('/DetailsView')
    .get(detailsview.DetailsView);

router
    .route('/TravLogin')
    .post(detailsview.TravLogin);
    
/** routes for detailsview end*/

/** routes for travelerdashboard start*/
router
    .route('/TravelerDashboard')
    .post(travelerdashboard.TravelerDashboard);

router
    .route('/TravelerDashboard')
    .get(travelerdashboard.getTravelerDashboard);

/** routes for travelerdashboard end*/

/** routes for ownerdashboard start*/
router
    .route('/OwnersDashboardAll')
    .get(ownersdashboard.OwnersDashboardAll);

router
    .route('/OwnersDashboardBooked')
    .get(ownersdashboard.OwnersDashboardBooked);

/** routes for ownerdashboard end*/

/** routes for travelerinbox start*/
router
    .route('/TravelerInbox')
    .get(travelerinbox.TravelerInbox);

router
    .route('/TravelerOutbox')
    .get(travelerinbox.TravelerOutbox);

/** routes for travelerdashboard end*/

/** routes for ownerdashboard start*/
router
    .route('/OwnersInbox')
    .get(ownersinbox.OwnersInbox);

router
    .route('/OwnersOutbox')
    .get(ownersinbox.OwnersOutbox);

router
    .route('/OwnersReply')
    .post(ownersinbox.OwnersReply);

router
    .route('/OwnersReply')
    .get(ownersinbox.getOwnersReply);
/** routes for ownerdashboard end*/

/** routes for askquestion start*/
// router.post('/AskQuestion', function (req, res) {
//     res.send(askquestion.AskQuestion);
//   })
router
    .route('/AskQuestion')
    .post(askquestion.AskQuestion);

/** routes for ownerdashboard end*/

/**routes for logs end */
module.exports = router;
