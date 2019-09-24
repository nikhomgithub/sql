/*
https://www.youtube.com/watch?v=EN6Dx22cPRI
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

//connect to MySql
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
     });   
});

//Insert data
app.get('/addpost1',(req,res)=>{
     let post = {title:'Post One', body:'This is post number one'};
     let sql = 'INSERT INTO posts SET ?';
     let query = db.query(sql, post, (err,result)=>{
          if(err) throw err;
          console.log(result);
          res.send('post 1 added...');
     });
});



const app = express();

app.listen('3000',()=>{
  console.log('Server start on port 3000');
})



