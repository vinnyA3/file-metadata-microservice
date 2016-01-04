var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    path = require('path'),
    multer = require('multer'),
    fs = require('fs'),
    upload = multer(),
    app = express();


//body parser to grab the data from the post requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configuration to handle CORS requests
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type, /Authorization');
    next();
});

//set the static files location
app.use(express.static(__dirname + '/public'));

//root route
//catch all route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})
app.post('/', upload.single('file'), function(req,res){
    console.log(req.file);
    var stats = fs.statSync(req.file);
    var fileSizeInBytes = stats["size"];
    res.json({file_size:fileSizeInBytes});
});

//listen on port
app.listen(config.port, function(){
   console.log('Listening on port: ' + config.port); 
});


    