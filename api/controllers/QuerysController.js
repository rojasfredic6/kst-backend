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
      const { userId } = req.query;
      const userInfo = await Users_Info.findOne({ user: userId })
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
      const {userId} = req.query;
      const userKst = await KST.find({ user: userId })
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
  }

};

