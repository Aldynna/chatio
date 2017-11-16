var express = require('express');
var router = express.Router();
var fs = require('fs');
var alert=require('alert-node');
var createStream = fs.createWriteStream("chat.txt");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('unosnick', { title: 'Log in'});
});


router.get('/chat', function(req, res, next) {
    var nick = req.query.nick;
    var por;
    let poruke;//='iz fajla '+ Date.now();
    fs.readFile('chat.txt','utf8', function(err, buf) {
       // console.log(buf.toString());
        poruke=buf.toString();
        por=buf;
     console.log(poruke);
    // alert(' '+poruke);



    });
  res.render('index', { title: 'Chat', poruke:por,nick:nick});
});

router.get('/text', function(req, res, next) {
    var por;
    var poruke2;
    fs.readFile('chat.txt','utf8', function(err, buf) {
       // console.log(buf.toString());
        poruke2=buf.toString();
        por=buf;

       console.log('ajax' +poruke2);
res.send(poruke2);

    });



});

router.get('/ref',function(req,res,next){
    let chat='sadrzaj';
    let poruke2='';

    fs.readFile('chat.txt','utf8', function(err, buf) {
        // console.log(buf.toString());
        poruke2=buf.toString();
        por=buf;

        console.log('ajax' +poruke2);
        res.send(poruke2);

    });

    }

)

router.post('/ref',function(req,res,next){
        let chat='sadrzaj';
        let poruke2=req.param('message')+"<br>";
        fs.appendFile('chat.txt', req.cookies.nick+" : "+poruke2+"\n", function (err) {
            if (err) return console.log(err);



        });
//console.log(req.body,req.body('message'),req.body);

            res.send(poruke2);



    }

);




router.post('/poruka', function(req, res, next) {
    //console.log(req);
    //res.send(req.body.fname);
   // alert(req.cookies.nick+' : '+req.body.fpor+'\n');
    fs.appendFile('chat.txt', req.cookies.nick+" : "+req.body.fpor+"\n", function (err) {
        if (err) return console.log(err);


        console.log('pisemo u txtpor',req.cookies.nick+" : "+req.body.fpor);

    });

res.redirect('/chat?nick='+req.cookies.nick);

});


router.post('/login', function(req, res, next) {
    //console.log(req);
    //res.send(req.body.fname);
    alert(req.body.nick+' se pridruzio!\n');
    res.cookie('nick', req.body.nick,{expire : new Date() + 9999});
    let poruka=req.body.nick+" se pridruzio!\n"+"<br>";

    fs.appendFile('chat.txt',poruka, function (err) {
        if (err) return console.log(err);
        console.log('pisemo u txt',req.body.nick+ +" se pridruzio!\n");

    });

    res.redirect('/chat?nick='+req.body.nick);

});

module.exports = router;
