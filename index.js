const express = require('express');
const web3 = require('web3');
require('dotenv').config();


const app = express();
const port = 3000;

let InfuraUrl = process.env.INFURA_URL;

const web3Provider = new web3.providers.WebsocketProvider(InfuraUrl);
const web3Instance = new web3(web3Provider);



app.get('/address/:id', (req, res) => {
  //web3 get account balance
  const id = req.params.id;
    web3Instance.eth.getBalance(id, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result.toString());
        }
    }
    );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});