https://stackoverflow.com/questions/21426935/accessing-mdb-files-through-nodejs
 

Accessing .mdb files through nodejs



// Get the adodb module
var ADODB = require('node-adodb');
ADODB.debug = true;

// Connect to the MS Access DB
var connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\dbs\\my-access-db.accdb;Persist Security Info=False;');

// Query the DB
connection
    .query('SELECT * FROM [TestTable];')
    .on('done', function (data){
        console.log('Result:'.green.bold, data);
    })
