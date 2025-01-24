const router = require('express').Router();
const {Card} = require('../../db/models')
const formatResponse = require('../../utils/formatResponse');


router.route('/:id')
    .get(async (req,res)=>{
            try {
                const {id} = req.params
                const allCards= await Card.findAll({
                    where:{deck_id: id}
                });
                res.status(200).json(formatResponse(200, 'Get ok', allCards))
            } catch (error) {
                res.status(404).json(formatResponse(400, 'Error', null, error.message))
            }
    })

module.exports = router;