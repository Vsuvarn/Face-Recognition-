
const express = require('express');

const app = express();

app.use('/',express.static(__dirname + '/models'))
app.use('/views/public/',express.static(__dirname + '/views/public/'))

app.get('/', (req, res) => { 
	res.sendFile( __dirname + '/views/index.html'); 
});

app.get('/enroll', (req, res) => {
	res.sendFile( __dirname + '/views/enroll.html');
})

app.listen(80, () => {
    console.log('app listening on port 80!');
});
