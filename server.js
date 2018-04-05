let express = require('express');
let app = express();
let data = require('./script');



app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    data.callBack(function (params) {
        res.render('index', {data: params})
    });
});

app.listen(9090);