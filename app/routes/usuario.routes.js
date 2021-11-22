module.exports = (() => {
    const usuarioController = require('../controllers/usuario.controller');

    let router = require('express').Router();

    router.get('/', (req, res) => {
        console.log(req.params);
        const usuario = usuarioController.index();
        res.json(usuario);
    })

    router.get('/:id', async (req, res) => {
        console.log(req.params);
        const usuario = await usuarioController.show(req.params.id);
        res.json(usuario);
    })

    router.post('/', async (req, res) => {
        console.log(req.params);
        const resultado = await usuarioController.store(req.body);
        res.json(resultado);
    })

    router.put('/:id', async (req, res) => {
        console.log(req.params);
        const resultado = await usuarioController.update(req.body, req.params.id);
        res.json(resultado);
    })

    router.delete('/:id', async (req, res) => {
        const resultado = await usuarioController.destroy(req.params.id);
        res.json(resultado);
    })


    return router;
})()