const args = process.argv;
const alarms = args.slice(2);
let count = 0;
let failedCount = 0;

for (let alarm of alarms) {
  if (alarm > 0) {
    let sound = alarm * 1000;
    setTimeout(() => {
      process.stdout.write('.');
      count += 1;
      if (count === (alarms.length - failedCount)) {
        process.stdout.write('\n');
      }
    }, sound);
  } else {
    failedCount += 1;
  }
}