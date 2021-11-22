module.exports = (() => {

    const turmaHardskillsController = require('../controllers/turma_hardskills.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const hardskill = await turmaHardskillsController.store(req.body,req.params.id);
        res.json(hardskill)
    })

    router.delete('/:id', async(req,res) => {
        const hardskill = await turmaHardskillsController.destroy(req.body,req.params.id);
        res.json(hardskill)
    })

    return router
})()