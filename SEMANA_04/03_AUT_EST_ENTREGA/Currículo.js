const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'ponderada2.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());
//get, post, put, delete methods

//READ
app.get("/readCertificacao", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    var db = new sqlite3.Database(DBSOURCE); // Abre o banco
    var sql = 'SELECT * FROM certificacao ORDER BY ano COLLATE NOCASE';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

//CREATE
app.post('/registrarCertificacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO certificacao ( curso, instituicao, ano) VALUES ('" + req.body.curso + "', '" + req.body.instituicao + "', '" + req.body.ano + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>MEIOS DE CERTIFICACAO INSERIDOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// UPDATE
app.get('/atualizaCertificacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM certificacao WHERE cod_certificacao="+ req.query.cod_certificacao;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// UPDATE
app.post('/atualizaCertificacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE certificacao SET curso='" + req.body.curso + "', instituicao = '" + req.body.instituicao + "' , ano='" + req.body.ano + "' WHERE cod_certificacao='" + req.body.cod_certificacao +  "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>MEIOS DE CERTIFICACAO ATUALIZADOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

//DELETE
app.post("/deleteCertificacao", urlencodedParser, (req, res) => { //Deleta uma obra do banco de dados
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    sql = "DELETE FROM certificacao WHERE cod_certificacao'" + req.body.cod_certificacao + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBSOURCE); // Abre o banco
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.write('<p>MEIOS DE CERTIFICACAO DELETADOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });