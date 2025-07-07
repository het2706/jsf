const url=require('url');

const myurl='https://www.darshan.ac.in:8080/path/name?firstname=jayrajsinh&lastname=jadja#marwadi';

const parsed=url.parse(myurl,true);

console.log('Full Url:',parsed.href);
console.log('Protocol:',parsed.protocol);
console.log('Hostname:',parsed.hostname);
console.log('Search:',parsed.search);
console.log('Pathname:',parsed.pathname);
console.log('Path:',parsed.path);
console.log('firname & lastname:',parsed.query);
console.log('port:',parsed.port);
console.log('Fragment:',parsed.hash);





