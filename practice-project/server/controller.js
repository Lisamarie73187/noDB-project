require('dotenv').config()

const axios = require('axios')

let list = [];

module.exports = {
    create: ( req, res ) => {
        const {input} = req.body
        list.push(input);
        res.status(200).json(list)
    },

    readNews:( req, res )=> {
        console.log('working?')
        axios.get(`http://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.NYTIMES_KEY}`)
        .then( resp => { 
            res.status(200).send(resp.data.results)
        }).catch(console.log)
    }

}