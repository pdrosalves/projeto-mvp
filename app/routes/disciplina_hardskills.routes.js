module.exports = (() => {

    const disciplinaHardskillsController = require('../controllers/disciplina_hardskills.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const hardskill = await disciplinaHardskillsController.store(req.body,req.params.id);
        res.json(hardskill)
    })

    router.delete('/:id', async(req,res) => {
        const hardskill = await disciplinaHardskillsController.destroy(req.body,req.params.id);
        res.json(hardskill)
    })

    return router
})()