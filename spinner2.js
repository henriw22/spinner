// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|' ];
let timer = 100;

for (let x of spinner) {
  setTimeout(() => {process.stdout.write('\r' + x + '   ')}, timer);
  timer += 200;
}

setTimeout(() => {process.stdout.write('\n');}, 1800);