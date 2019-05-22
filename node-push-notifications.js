var express=require('express');
var webpush=require('web-push');
var path=require('path');

var app=express();

app.use(express.static(path.join(__dirname,'node-push-notifications-client')));

var bodyParser=require('body-parser');

var urlencodedParser=bodyParser.urlencoded({extended: false});

const publicKey='BKgPEG-yxGjEwubcob9tfvgfOkqjJW9EPe60SDiaJNo_EudTYOMZGkjdVP9wzVUJOCcmecelw4OKbHu-tcw2p4Y';
const privateKey='TwccAFnxAS8ftEkyEqpfpuTtthaxwBOOvI4q9yxpHQo';

webpush.setVapidDetails('mailto:test@test.com',publicKey,privateKey);

app.post('/subscribe',urlencodedParser,function(req,res){

	const subscription=req.body;
	res.status(201).json({});
	const payload=JSON.stringify({title:'Push Test'});
	webpush.sendNotification(subscription,payload).catch(function(err){
       console.log(err);
	});
});

app.listen('8080');