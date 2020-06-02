let strArray = process.argv.slice(2);
let intArray = [];

for (let str of strArray) {
  if (!isNaN(str)) {
    if (Number(str) > 0) {
      intArray.push(Number(str));
    }
  }
}

intArray.sort((a,b)=>a-b);

for (let int of intArray) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, int * 1000);
}