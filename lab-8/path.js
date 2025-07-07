const path =require("path");
const n=path.join('/foo', 'bar', 'baz/asdf', 'quux');
console.log('Join :'+n);

const n1=path.normalize('/foo/bar/baz/asdf/quux/..');
console.log('Normalize :'+n1);

const n2=path.resolve('/foo/bar', './baz');
console.log('Resolve :'+n2);

const n3=path.dirname('darshan_uni/col_data/Bca_data');
console.log('Dirname :'+n3);

const n4=path.basename('darshan_uni/col_data/Bca_data');
console.log('Basename :'+n4);

const n5=path.extname('darshan_uni.txt');
console.log('Extname :'+n5);