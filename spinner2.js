const start = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let time = 100;
for (let element of start) {
setTimeout(() => {
  process.stdout.write(element);
}, time);
time += 200;
};


