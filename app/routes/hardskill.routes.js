module.exports = (() => {
    const hardskillController = require('../controllers/hardskill.controller');

    let router = require('express').Router();

    router.get('/', (req, res) => {
        console.log(req.params);
        const hardskill = hardskillController.index();
        res.json(hardskill);
    })

    router.get('/:id', async (req, res) => {
        console.log(req.params);
        const hardskill = await hardskillController.show(req.params.id);
        res.json(hardskill);
    })

    router.post('/', async (req, res) => {
        console.log(req.params);
        const resultado = await hardskillController.store(req.body);
        res.json(resultado);
    })

    router.put('/:id', async (req, res) => {
        console.log(req.params);
        const resultado = await hardskillController.update(req.body, req.params.id);
        res.json(resultado);
    })

    router.delete('/:id', async (req, res) => {
        const resultado = await hardskillController.destroy(req.params.id);
        res.json(resultado);
    })


    return router;
})()