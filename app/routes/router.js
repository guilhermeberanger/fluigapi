const express = require('express');
const router = express.Router();
const consultaDetran = require('../configs/configDetran')
const api = require('../configs/config');
const { urlencoded } = require('express');
require('dotenv').config()

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

router.get('/frotas', (req, res) => {
    res.render('frotas', { sucess: ''})
})
router.get('/consulta', (req, res) => {
    res.render('consulta', { restricao: '', site: ''})
})


/**
Criação do Objeto FLUIG: TargetState = Numero da atividade no fluxo;
TargetAssignee = Matrícula do USER Destino
FormFields = DataForm Fluig
*/
//requisição APIFLUIG
router.post('/produtos', urlencodedParser, async (req, res) => {
    try {
        const data = {
            "targetState": "02",
            "targetAssignee": "12345",
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
        const processoProduto = `01`
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
            "targetState": "11",
            "targetAssignee": "12345",
            "subProcessTargetState": 0,
            "comment": "",
            "formFields": {
                "nomeSolicitante": req.body.nomeSolicitante,
                "emailSolicitante": req.body.emailSolicitante,
                "razaoSocial": req.body.razaoSocial,
                "nomeFantasia": req.body.nomeFantasia,
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
        res.render('fornecedor', { sucess: `Baixa Solicitada: ${response}` })
    } catch (error) {

    }
})

router.post('/frotas', urlencodedParser, async (req, res) => {
    try {

        const LOGIN = process.env.CPF
        const SENHA = process.env.SENHA
        const TOKEN_DETRAN = process.env.TOKEN_DETRAN
        const bodyDetran = {

            "uf": req.body.ufPlaca,
            "placa": req.body.placa,
            "renavam": req.body.renavam,
            "chassi": req.body.chassi,
            "login_cpf": LOGIN,
            "login_senha": SENHA,
            "token": TOKEN_DETRAN,
            "timeout": 300
        }
        const data = await consultaDetran(bodyDetran, "POST")
        const objRestri = data.data[0].restricoes
        const objConsulta = data.site_receipts

        const dataFrotas = {
            "targetState": "3",
            "targetAssignee": "rarisson.santos",
            "subProcessTargetState": 0,
            "comment": "",
            "formFields": {
                "nomeSolicitante": req.body.nomeSolicitante,
                "emailSolicitante": req.body.emailSolicitante,
                "centroCusto": req.body.centroCusto,
                "codFrota": req.body.codFrota,
                "motivoBaixa": req.body.motivoBaixa,
                "ufPlaca": req.body.ufPlaca,
                "placa": req.body.placa,
                "renavam": req.body.renavam,
                "chassi": req.body.chassi,
                "restricao": JSON.stringify(objRestri).replace(/[^a-z0-9]/gi, ' '),
                "site": JSON.stringify(objConsulta)
            }
        }
        const processoBaixa = `BaixarVeiculo`
        const login = await api(processoBaixa, dataFrotas, "POST")
        const datafLUIG = login.processInstanceId
        res.render('frotas', { sucess: `Cadastro Solicitado: ${datafLUIG}` })
    } catch (error) {
        console.log('Erro: ', error)
    }
})

router.post('/consulta', urlencodedParser, async (req, res) => {
    try {
        const LOGIN = process.env.CPF
        const SENHA = process.env.SENHA
        const TOKEN_DETRAN = process.env.TOKEN_DETRAN
        const bodyDetran = {
            "uf": req.body.ufPlaca,
            "placa": req.body.placa,
            "renavam": req.body.renavam,
            "chassi": req.body.chassi,
            "login_cpf": LOGIN,
            "login_senha": SENHA,
            "token": TOKEN_DETRAN,
            "timeout": 300
        }
        const data = await consultaDetran(bodyDetran, "POST")
        const response = JSON.stringify(data.data[0].restricoes).replace(/[^a-z0-9]/gi, ' ')
        const objConsulta = JSON.stringify(data.site_receipts)
        res.render('consulta', { restricao: `${response}`, site: `${objConsulta}` })

    } catch (error) {
        console.error('Error', error)
    }
})
module.exports = router