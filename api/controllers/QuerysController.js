/**
 * QuerysController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `QuerysController.userInfo()`
   */
  userInfo: async function (req, res) {
    try{
      const userInfo = await Users_Info.findOne({ user: req.user })
      if(!userInfo){
        return res.badRequest('Not Found')
      }
      return res.ok(userInfo)
    }catch(err){
      return res.serverError({err})
    }
  },

  /**
   * `QuerysController.userKST()`
   */
  userKST: async function (req, res) {
    try{
      const userKst = await KST.find({ user: req.user })
      if(!userKst){
        return res.badRequest("There are not kst's available")
      }
      return res.ok(userKst)
    }catch(err){
      return res.serverError({err})
    }
  },

  /**
   * `QuerysController.userResults()`
   */
  userResults: async function (req, res) {
    try{
      const { kstId } = req.query;
      const kstResults = await Result.find({ kst: kstId })
      if(!kstResults){
        return res.badRequest('The are no results asocieted to this kst')
      }
      return res.ok(kstResults)
    }catch(err){
      return res.serverError({err})
    }
  },

  getQuestionnaire: async (req, res) =>{
    try{
      const { verticalId } = res.query;
      const questionnaire = await Questionnaire.findOne({ vertical: verticalId })
      if(!questionnaire){
        return res.badRequest('There is not such a questionnaire like that')
      }
      return res.ok(questionnaire);
    } catch(err){
      return res.serverError({err})
    }
  },
  getVerticals: async(req, res) =>{
    try{
      const verticales = await Vertical.find({})
      if(!verticales){
        return res.badRequest('The are not verticals added')
      }
      return res.ok(verticales)
    }catch(err){
      return res.serverError({err})
    }
  }

};

