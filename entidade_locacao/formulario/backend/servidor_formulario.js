const express = require('express');//npm install express
const mysql = require('mysql2');//npm install mysql2
const bodyParser = require('body-parser'); //npm install body-parser

//initiate http server (express)
const app = express();
app.listen(3333);//initialize web server
//objects to handle POST message body
const jsonParser = bodyParser.json() // create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // create application/x-www-form-urlencoded parser

//initialize mysql connection
const MYSQL_IP="localhost";//127.0.0.1
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root123";

let con = mysql.createConnection({
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD,
  database: "lista_formulario"
}); 

con.connect(function(err) {
  if (err){
    console.log(err);
    throw err;
  }
  console.log("Connection with mysql established");
});

/*
app.get('/cliente', function (req, res) {
  let sql =`SELECT nome, cpf, endereco FROM cliente`;
  con.query(sql, function (err, result) {
    if (err){
      res.status(500);
      res.send(JSON.stringify(err));
      console.log(err);
    }else{
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      addCorsHttpHeaders(res);
      console.log(result);
      res.send(JSON.stringify(result));
    }
  });
 
});
*/

app.post('/locacao', urlencodedParser, function (req, res) {
  const data = req.body.data;
  const valor = req.body.valor;
  const status = req.body.status;
  const parameters = [data, valor, status];
  let sql = "INSERT INTO Locacao (data, valor, status) VALUES (?,?,?)";
  con.query(sql, parameters, function (err, result) {
    if (err){
      res.status(500);
      res.send(JSON.stringify(err));
    }else{
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,PUT,DELETE,HEAD");
      res.setHeader("Access-Control-Allow-Headers","X-PINGOTHER,Origin,X-Requested-With,Content-Type,Accept");
      res.setHeader("Access-Control-Max-Age","1728000");
      res.status(200);
      //res.send("<div id='success_message'>Nova locação inserida com sucesso!</div><br/>"+ JSON.stringify(result));
      res.redirect("http://127.0.0.1:5500/frontend/client_formulario.html");
    }
  });

});

function addCorsHttpHeaders(httpResponse){
  httpResponse.setHeader("Access-Control-Allow-Origin", "*");
  httpResponse.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,PUT,DELETE,HEAD");
  httpResponse.setHeader("Access-Control-Allow-Headers","X-PINGOTHER,Origin,X-Requested-With,Content-Type,Accept");
  httpResponse.setHeader("Access-Control-Max-Age","1728000");
}

console.log("node express is running");
