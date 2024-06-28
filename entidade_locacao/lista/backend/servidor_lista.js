const express = require('express');//npm install express
const mysql = require('mysql2');//npm install mysql2
const bodyParser = require('body-parser'); // npm install body-parser

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

app.get('/locacao', function (req, res) {
  let sql =`SELECT data, valor, status FROM locacao`;
  con.query(sql, function (err, result) {
    if (err){
      res.status(500);
      res.send(JSON.stringify(err));
    }else{
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      //CORS
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,PUT,DELETE,HEAD");
      res.setHeader("Access-Control-Allow-Headers","X-PINGOTHER,Origin,X-Requested-With,Content-Type,Accept");
      res.setHeader("Access-Control-Max-Age","1728000");
      res.send(JSON.stringify(result));
    }
  });
 
});

/*
app.post('/cliente', urlencodedParser, function (req, res) {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  const parameters = [nome, cpf, endereco];
  let sql = "insert into cliente (nome, cpf, endereco) values (?,?,?)";
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
      res.send("<div id='success_message'>Novo cliente inserido com sucesso!</div><br/>"+ JSON.stringify(result));
    }
  });
 
});
*/

function addCorsHttpHeaders(httpResponse){
  httpResponse.setHeader("Access-Control-Allow-Origin", "*");
  httpResponse.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,PUT,DELETE,HEAD");
  httpResponse.setHeader("Access-Control-Allow-Headers","X-PINGOTHER,Origin,X-Requested-With,Content-Type,Accept");
  httpResponse.setHeader("Access-Control-Max-Age","1728000");
}

console.log("node express is running");