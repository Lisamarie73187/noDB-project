require('dotenv').config()

const axios = require('axios')

let list = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {
        console.log('helloss')
        const { task } = req.body;
        list.push([task]);
        res.status(200).json(list);
      },

    readNews:( req, res )=> {
        console.log('working?')
        axios.get(`http://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.NYTIMES_KEY}`)
        .then( resp => { 
            res.status(200).send(resp.data.results)
        }).catch(console.log)
    },

    delete:(req,res) => {
        console.log('whyareyounotdeleting?')
        const { id }= req.params;
        list.forEach((e,i,a) => {
            if(i == id){
                a.splice(i,1)
            }
            res.status(200).json( list )
        })
        
    },
    updateComplete:(req,res) => {
        console.log('please work')
        const{ id } = req.params;
        list.forEach((e,i,a)=>{
            if(i == id){
                a[i]+="-complete"
            }
            res.status(200).json( list )
        })
    }
    
}
