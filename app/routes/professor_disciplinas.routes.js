module.exports = (() => {

    const professorDisciplinasController = require('../controllers/professor_disciplinas.controller')

    let router = require('express').Router();

    router.post('/:id', async(req,res) => {
        const disciplina = await professorDisciplinasController.store(req.body,req.params.id);
        res.json(disciplina)
    })

    router.delete('/:id', async(req,res) => {
        const disciplina = await professorDisciplinasController.destroy(req.body,req.params.id);
        res.json(disciplina)
    })

    return router
})()