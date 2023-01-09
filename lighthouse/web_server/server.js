const http = require('http');
const port = 8081; // > 1024
const server = http.createServer((request, response) => {
  
  console.log(`Request received`);
  console.log('request.url: ', request.url);
  console.log('request.method: ', request.method);

  if (request.method === 'GET' && request.url === '/moremonkeyfuzz') {
    response.write('You have found the moneky fuzz!');
    response.end();
  } else {
    response.write('404!');
    response.end();
  }
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}!`);
});
