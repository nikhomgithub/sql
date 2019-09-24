/*
install XAMPP 
     for Apache server, PHP MyAdmin (For my sql dashboard)

$npm init -y

$npm install --save mysql express

$npm install -g nodemon

--------
--------

app.js
*/

const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'123456',
     database:'nodemysql' //No need in case to need create a database with node
});

//connect
db.connect((err)=>{
    if(err){
          throw err;
    }
    cosole.log('MySql Connected....');
});

//Create DB just once and need to cancel //database:'nodemysql'
app.get('/createdb',(req,res)=>{
     let sql = 'CREATE DATABASE nodemysql'
     db.query(sql,(err,result)=>{
          if(err){
               throw err
          }
          console.log(result);
          res.send('Database created...');
     });
});

//Create a table 
app.get('/createposttable',(req,res)=>{
     let sql = 'CREATE TABEL posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
     db.query(sql,(err,result)=>{
          if(err){
               throw err;
          }
          console.log(result);
          res.send('posts table created...');
     })
     
     
});, 


const app = express();

app.listen('3000',()=>{
  console.log('Server start on port 3000');
})



