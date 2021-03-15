const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const endpoint = req.url;
   if (endpoint === '/start') {
      fs.readFile('./index.html', (err, data) => {
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(data);
         res.end();
      });
   }
   if (endpoint === '/api') {
      // ここに処理を記述してください。  
      //HTMLのフロントの方からボタンを押すと'/api'のendpointをアクセスし、ここにあるコードが発動

      //FizzBuzzのアルゴリズムの基本はできた
      function fizzBuzz(pattern, callback) {
         const js = JSON.parse(pattern);
         const result = { data: [] };

         for (obj of js.obj) {
            if (obj.num % 3 === 0 && obj.num % 5 === 0) {
               result.data.push("FizzBuzz");
            } else if (obj.num % 3 === 0) {
               result.data.push("Fizz");
            } else if (obj.num % 5 === 0) {
               result.data.push("Buzz");
            } else {
               result.data.push(obj.num);
            }
         }
         callback(result);
      }


      //TODO：PromiseやCallbackなどを使ってpatternのデータをアクセス
      //patternが最初に送られる時点でXMLrequestのまま

      fizzBuzz(req.body, (result) => {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.write();
         res.close();
      })


   }
});
server.listen(8080);