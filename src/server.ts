import http from 'node:http';

http.createServer(() => console.log('Knocked on the door!')).listen(3000);
