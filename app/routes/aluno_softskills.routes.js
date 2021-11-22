module.exports = (() => {

    const alunoSoftskillsController = require('../controllers/aluno_softskills.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const softskill = await alunoSoftskillsController.store(req.body,req.params.id);
        res.json(softskill)
    })

    router.delete('/:id', async(req,res) => {
        const softskill = await alunoSoftskillsController.destroy(req.body,req.params.id);
        res.json(softskill)
    })

    return router
})()