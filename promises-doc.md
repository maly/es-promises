Promises serial
===============

```
const tasks = getTaskArray();
return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(chainResults =>
        currentTask.then(currentResult =>
            [ ...chainResults, currentResult ]
        )
    );
}, Promise.resolve([])).then(arrayOfResults => {
    // Do something with all results
});
```

Promises parallel
=================

Promise.all(iterable)
---------------------

Wait for all promises to be resolved, or for any to be rejected.

If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises ,in the same order as defined in the iterable of multiple promises.

If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected.

Promise.allSettled(iterable)
----------------------------

Wait until all promises have settled (each may resolve or reject).

Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

Promise.race(iterable)
----------------------

Wait until any of the promises is resolved or rejected.

If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.

If it rejects, it is rejected with the reason from the first promise that was rejected.

Promises docs
=============

[MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)