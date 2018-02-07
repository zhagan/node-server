const http = require('http');

const PORTGOOD = 8080;
const PORTBAD = 8081;

function handleRequestBad(request, response){

  response.end("You Suck" + request.url);
}

function handleRequestGood(request, response){

  response.end("You Great" + request.url);
}

const serverGood = http.createServer(handleRequestGood);
const serverBad = http.createServer(handleRequestBad);

serverGood.listen(PORTGOOD, function(){

  console.log("listening good");
});

serverBad.listen(PORTBAD, function(){

  console.log("listening bad");
});
