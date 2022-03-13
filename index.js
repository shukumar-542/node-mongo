

const express = require('express')
const app = express();

const users = ['rahim', 'karim','jabbar', 'jabed','abed']

app.get('/', (req, res) =>{

      const fruits ={
            name: 'banana',
            pricr: 200,
      }
      res.send(fruits)
});
 app.get('/friends/name',(req, res) =>{res.send({name:'shukumar', age:25})})
 app.get('/user/:id', (req, res) =>{
       const id = req.params.id
       const name =users[id]
       res.send({id,name})

      //  console.log(req.params.id);
 })

app.listen(3000, ()=>console.log( 'port is running'))