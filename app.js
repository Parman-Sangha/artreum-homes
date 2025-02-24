const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Home-Page': 'aartreum-homes' }); 
    res.end("Welcome");
});

server.listen(3000, () => {
    console.log("server running");
});
"test 1"