const rp = require('request-promise-native');
require('dotenv').config()

const consultaDetran = (body, method) => {

    const baseUrl = 'https://api.infosimples.com/api/v2/consultas/detran/restricoes'

    let options = {
        method: method,
        body: body,
        url: baseUrl,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        json: true
    }
    return rp(options)
}

module.exports = consultaDetran
