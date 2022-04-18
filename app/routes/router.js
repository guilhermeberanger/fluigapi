const express = require('express');
const router = express.Router();
const path = require('path')
const api = require('../configs/config');
const { urlencoded } = require('express');

//configuração URL enconded
const urlencodedParser = express.urlencoded({ extended: false })

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


/*
Criação do Objeto FLUIG: TargetState = Numero da atividade no fluxo;
TargetAssignee = Matrícula do USER Destino
FormFields = DataForm Fluig
*/
//requisição APIFLUIG
router.post('/produdos', urlencodedParser, async (req, res) => {
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
        const processoProduto = `CadastroProduto`
        const login = await api(processoProduto, data, "POST")
        const response = login.processInstanceId
        res.render('produtos', { sucess: `Cadastro Solicitado: ${response}` })
    } catch (error) {
        console.error('error', error)
        res.json(error)
    }
});


router.post('/fornecedor', urlencodedParser, async (req, res) => {
    try {
        const dataForn = {
            "targetState": "09",
            "targetAssignee": "945436",
            "subProcessTargetState": 0,
            "comment": "",
            "formFields": {
                "nomeSolicitante": req.body.nomeSolicitante,
                "emailSolicitante": req.body.emailSolicitante,
                "tipoCadastro": req.body.tipoCadastro,
                "reembolso": req.body.reembolso,
                "documento": req.body.documento,
                "enderecoCompleto": req.body.enderecoCompleto,
                "bairro": req.body.bairro,
                "estado": req.body.estado,
                "cidade": req.body.cidade,
                "cep": req.body.cep,
                "ddd": req.body.ddd,
                "telefone": req.body.telefone,
                "inscricaoMunicipal": req.body.inscricaoMunicipal,
                "inscricaoEstadual": req.body.inscricaoEstadual,
                "emailFornecedor": req.body.emailFornecedor,
                "contato": req.body.contato,
                "departamento": req.body.departamento,
                "cotacao": req.body.cotacao,
                "formPagamento": req.body.formPagamento,
                "banco": req.body.banco,
                "OutroBanco": req.body.OutroBanco,
                "codAgencia": req.body.codAgencia,
                "codConta": req.body.codConta,
                "codDigito": req.body.codDigito,
                "categoria": req.body.categoria,
                "segmento": req.body.segmento,
            }
        }
        const processoFornecedor = `SolicitarCadastro`
        const login = await api(processoFornecedor, dataForn, "POST")
        const response = login.processInstanceId
        res.render('fornecedor', { sucess: `Cadastro Solicitado: ${response}` })
    } catch (error) {

    }
})
module.exports = router