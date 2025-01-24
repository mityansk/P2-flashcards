const router = require('express').Router();
const {Deck} = require('../../db/models')
const formatResponse = require('../../utils/formatResponse');


router.route('/')
    .get(async (req,res)=>{
            try {
                const allDecks = await Deck.findAll();
                res.status(200).json(formatResponse(200, 'Get ok', allDecks))
            } catch (error) {
                res.status(404).json(formatResponse(400, 'Error', null, error.message))
            }
    })

module.exports = router;