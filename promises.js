//Promises module

/*
npm init --scope=@adent
npm publish --access=public
*/

const parallel = (tasks) => Promise.all(tasks.map((task) => new Promise(task)));
const race = (tasks) => Promise.race(tasks.map((task) => new Promise(task)));

const allSettled = (tasks) => {
  return tasks
    .map((task) => new Promise(task))
    .reduce((promiseChain, currentTask) => {
      return promiseChain.then((chainResults) =>
        currentTask
          .then((currentResult) => [...chainResults, currentResult])
          .catch((currentResult) => [...chainResults, currentResult])
      );
      //        .catch((q) => console.log(q));
    }, Promise.resolve([]));
};

const serial = (tasks) => {
  let task = tasks.shift();
  if (!task) {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  } else {
    return new Promise((resolve, reject) => {
      task(
        (q) => {
          oneByOne(tasks)
            .then((r) => {
              //console.log(r, q);
              resolve([q, ...r]);
            })
            .catch((r) => reject(r));
        },
        (q) => {
          reject(q);
        }
      );
    });
  }
};

module.exports = {
  parallel,
  serial,
  allSettled,
  race,
};
