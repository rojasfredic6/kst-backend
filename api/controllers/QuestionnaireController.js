/**
 * QuestionnaireController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) =>{
    try{
      let params = req.allParams()
      const questionnaire = await Questionnaire.create({
        vertical: params.verticalId,
      }).fetch()
      return res.ok(questionnaire)
    }catch(err){
      return res.serverError({err})
    }
  }

};

