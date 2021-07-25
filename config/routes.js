/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // RUTAS DE USUARIOS
  "POST /users/signup": "UsersController.signup",
  "POST /users/login": "UsersController.login",
  "POST /users/admin": "UsersController.admin",
  "POST /users_info": "UsersinfoController.create",
  "GET /user_info": "QuerysController.userInfo",
  "POST /user_info_admin": "QuerysController.userInfoAdmin",
  "GET /user_kst": "QuerysController.userKST",
  "GET /kst_results": "QuerysController.userResults",
  "GET /questionnaireList": "QuerysController.getQuestionnaire",
  "GET /verticals": "QuerysController.getVerticals",
  "POST /questionnaire": "QuestionnaireController.create"
};
