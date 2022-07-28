var {google} = require('googleapis');
var MESSAGE_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
var SCOPES = [MESSAGE_SCOPE];
console.log('bhdbhsbhcbh')
var http = require('http');
function getAccessTokem() {
  return new Promise((resolve, reject) => {
    var key = require('./service.json');
    var JWTClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null,
    );

    JWTClient.authorize((err, tokens) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}



var server = http.createServer((req, res) => {
    getAccessTokem().then(access_token => {
        console.log('ACCESS TOKEN', access_token);
        res.end(access_token);
      });
 
});

server.listen(3000,()=>console.log("server started"));
