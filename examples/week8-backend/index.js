const cors = require('cors');
const express = require('express');
let app = express();

app.use(cors());
app.options('*', cors());
app.set('port', (process.env.PORT || 8888));

app.get('/', cors(), function(req,res,next){
	res.json({message:"This is a brand new message", author:"Susan Smith", date: Date()});
});

app.listen(app.get('port'), function(){
	console.log("Cors Enable web server running on port " + app.get('port'));
});