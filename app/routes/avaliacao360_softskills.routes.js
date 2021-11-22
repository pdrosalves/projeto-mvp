module.exports = (() => {

    const avaliacao360SoftskillsController = require('../controllers/avaliacao360_softskills.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const softskill = await avaliacao360SoftskillsController.store(req.body,req.params.id);
        res.json(softskill)
    })

    router.delete('/:id', async(req,res) => {
        const softskill = await avaliacao360SoftskillsController.destroy(req.body,req.params.id);
        res.json(softskill)
    })

    return router
})()