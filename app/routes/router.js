const express = require('express');
const router = express.Router();
const path = require('path')
const api = require('../configs/config')

//configuração URL enconded
const urlencodedParser = express.urlencoded({extended : false})

//configuração Router's
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/produtos', (req, res) => {
    res.render('produtos', { sucess: '' })
})

router.get('/fornecedor', (req, res) => {
    res.render('fornecedor', { sucess: '' })
})

//requisição APIFLUIG
/*
Criação do Objeto FLUIG: TargetState = Numero da atividade no fluxo;
TargetAssignee = Matrícula do USER Destino
FormFields = DataForm Fluig
*/
router.post('/', urlencodedParser, async (req, res) => {
    try {
        const data = {
            "targetState": "09",
            "targetAssignee": "945436",
            "subProcessTargetState": 0,
            "comment": "",
            "formFields": {
                "nomeSolicitante": req.body.nomeSolicitante,
                "emailSolicitante": req.body.emailSolicitante,
                "descricaoProduto": req.body.descricaoProduto,
                "especificacaoProduto": req.body.especificacaoProduto,
                "unidadeMedida": req.body.unidadeMedida,
                "vlrativo": req.body.vlrativo,
                "ncm": req.body.ncm,
                "tipo": req.body.tipo,
                "grupo": req.body.grupo,
                "subGrupo": req.body.subGrupo
            }
        }
        const login = await api(data, "POST")
        const response = login.processInstanceId
        res.render('produtos', { sucess: `Cadastro Solicitado: ${response}` })
    } catch (error) {
        console.error('error', error)
        res.json(error)
    }
});

module.exports = router