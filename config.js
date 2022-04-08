const rp = require('request-promise-native');
require('dotenv').config();

const api = (body, method, oauth) =>{
    const CONSUMER_KEY = process.env.CONSUMER_KEY
    const CONSUMER_SECRET = process.env.CONSUMER_SECRET
    const TOKEN = process.env.TOKEN
    const TOKEN_SECRET = process.env.TOKEN_SECRET
    const url = 'https://fluig.grupotb.com.br/process-management/api/v2/processes/CadastroProduto/start'
    let options = {
        method: method,
        body: body,
        url: url,
        oauth : oauth = {
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET,
            token: TOKEN,
            token_secret: TOKEN_SECRET,
            signature_method: 'HMAC-SHA1',
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        json: true
    }
    return rp(options)
}
module.exports = api