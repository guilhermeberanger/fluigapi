const express = require('express');
const app = express();
const api = require('./app/config');
const path = require('path');
require('dotenv').config();

const urlencodedParser = express.urlencoded({ extended: false });

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('produtos', { sucess: '' })
})

app.post('/', urlencodedParser, async (req, res) => {
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App.Listen ->  ${port}`)
})