module.exports = (() => {

    const alunoTurmasController = require('../controllers/aluno_turmas.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const turma = await alunoTurmasController.store(req.body,req.params.id);
        res.json(turma)
    })

    router.delete('/:id', async(req,res) => {
        const turma = await alunoTurmasController.destroy(req.body,req.params.id);
        res.json(turma)
    })

    return router
})()