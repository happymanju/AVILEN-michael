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

      function fizzBuzz(pattern) {
         const result = { data: [] };

         for (obj of pattern["obj"]) {
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
         return result;
      }

      req.on("data", (data) => {
         const js = JSON.parse(data);
         const result = JSON.stringify(fizzBuzz(js));
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.write(result);
         res.end();

      });








   }
});
server.listen(8080);