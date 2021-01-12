const elasticClient = require('../config/elastic')
const isEmpty = require('../utils/isEmpty')

async function saveMetric(req, res){
    const { index } = req.params
    const { body } = req   

    try { 
       const emptyBody = isEmpty(body)
       if(emptyBody) throw 'body must be informed!'        

       const normalizedIndex = index.toLowerCase().replace(' ', '-')
     
       await elasticClient().index({
            index: normalizedIndex,
            type: normalizedIndex,          
            body
        })

        return res.status(200).json({
            success: true,
            message: 'Metric was save!'
        })       
        
    } catch (error) {
        const noElastichConnection = "No Living connections"
        
        if(error.message === noElastichConnection) {
            error.message = "No ElasticSeach database connection!!"
        }
        
        return res.status(400).json({error})
    }
}

module.exports = { saveMetric }
