module.exports = (() => {

    const atividadeAvaliativaHardskillsController = require('../controllers/atividadeAvaliativa_hardskills.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const hardskill = await atividadeAvaliativaHardskillsController.store(req.body,req.params.id);
        res.json(hardskill)
    })

    router.delete('/:id', async(req,res) => {
        const hardskill = await atividadeAvaliativaHardskillsController.destroy(req.body,req.params.id);
        res.json(hardskill)
    })

    return router
})()