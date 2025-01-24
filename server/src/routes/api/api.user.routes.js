const router = require('express').Router();
const {User} = require('../../db/models')
const formatResponse = require('../../utils/formatResponse');


router.route('/')
    .post(async (req,res)=>{
            try {
              console.log(req.body);
              
                const {login, pass, score} = req.body
                console.log(login);
                
                const userNew = await User.create({login, pass ,score});
                res.status(201).json(formatResponse(200, 'Create User Done', userNew))
            } catch (error) {
                res.status(404).json(formatResponse(400, 'Error', null, error.message))
            }
    })

router.route("/:id")
    .get(async (req, res) => {
      try {
        const { id } = req.params;
        const findUser = await User.findByPk(id);
        res.json(findUser);
      } catch (error) {
        res.status(404).json(formatResponse(400, 'Error', null, error.message))
      }
    })

    .patch(async (req, res) => {
      try {
        const { id } = req.params;
        const { login, pass ,score} = req.body;
        // const user = await User.findByPk(id)
        const result = await User.update({ login, pass ,score }, { where: { id } });
        res.send(result);
      } catch (error) {
        res.status(404).json(formatResponse(400, 'Error', null, error.message))
      }
    })



module.exports = router;