const sentence = "hello there from lighthouse labs";
let counter = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter+=50) 
}