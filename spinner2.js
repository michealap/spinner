process.stdout.write('hello from spinner2.js... \rheyyy\n');

let arr = ["\r|   ", "\r/   ","\r-   ","\r\\   ", "\r-   ", "\r|   "];
let delay = 100;

for (let element of arr) {
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 200;
}