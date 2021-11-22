module.exports = (() => {

    const professorTurmasController = require('../controllers/professor_turmas.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const turma = await professorTurmasController.store(req.body,req.params.id);
        res.json(turma)
    })

    router.delete('/:id', async(req,res) => {
        const turma = await professorTurmasController.destroy(req.body,req.params.id);
        res.json(turma)
    })

    return router
})()