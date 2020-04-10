const promises = require("./promises.js");

const promiseFactory = (msg) =>
  new Promise((resolve, reject) => {
    let timeout = Math.floor(Math.random() * 1000 + 1000);
    console.log("Start resolving " + msg + ", will takes " + timeout + "ms");
    setTimeout(function () {
      console.log("Done resolving " + msg + ", " + timeout + "ms taken");
      resolve("Success " + msg); // Yay! Everything went well!
    }, timeout);
  });

const funFactory = (msg, failed) => (resolve, reject) => {
  let timeout = Math.floor(Math.random() * 500 + 500);
  console.info("-- Start resolving " + msg + ", will takes " + timeout + "ms");
  setTimeout(function () {
    console.warn("-- Done resolving " + msg + ", " + timeout + "ms taken");
    if (failed) {
      return reject("REJECT - " + msg);
    }
    resolve("Success " + msg); // Yay! Everything went well!
  }, timeout);
};

const myThen = (msg) => console.log("MyThen", msg);
const myCatch = (msg) => console.log("MyCatch", msg);

/* Just one promise */
/*
let pro1 = funFactory("PROX1");
let pro2 = funFactory("PROX2");
new Promise(pro1).then(myThen);
*/
/*
pro1.then((msg) => {
  pro2.then((msg2) => console.log(msg + msg2));
});
*/
/* 5 promises serial... */

let tasks = [
  funFactory("PRO1"),
  funFactory("PRO2"),
  funFactory("PRO3"),
  funFactory("PRO4", true),
  funFactory("PRO5"),
];

promises.race(tasks).then(myThen).catch(myCatch);

//promises.allSettled(tasks).then(myThen).catch(myCatch);

//promises.parallel(tasks).then(myThen).catch(myCatch);

//promises.serial(tasks).then(myThen).catch(myCatch);
