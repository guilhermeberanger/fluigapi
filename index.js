const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./config');
const { response } = require('express');
require('dotenv').config();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json())
app.use('/home', express.static('public'))

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
        res.json(login)
    } catch (error) {
        console.error('error', error)
        res.json(error)
    }

});

const port = 8000
app.listen(port, () => {
    console.log(`App.Listen ->  ${port}`)
})