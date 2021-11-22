module.exports = (() => {
    const questaoController = require('../controllers/questao.controller');

    let router = require('express').Router();

    router.get('/', (req, res) => {
        console.log(req.params);
        const questao = questaoController.index();
        res.json(questao);
    })

    router.get('/:id', async (req, res) => {
        console.log(req.params);
        const questao = await questaoController.show(req.params.id);
        res.json(questao);
    })

    router.post('/', async (req, res) => {
        console.log(req.params);
        const resultado = await questaoController.store(req.body);
        res.json(resultado);
    })

    router.put('/:id', async (req, res) => {
        console.log(req.params);
        const resultado = await questaoController.update(req.body, req.params.id);
        res.json(resultado);
    })

    router.delete('/:id', async (req, res) => {
        const resultado = await questaoController.destroy(req.params.id);
        res.json(resultado);
    })


    return router;
})()