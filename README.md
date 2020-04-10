# Usage

```
const tasks = [
  task1, task2, task3, ...
];
```

All of them have to be `fn(resolve,reject)`, i.e. "promisable function".

# Methods

## `promises.parallel(tasks)`

Run all tasks together and returns promise, which is fullfilled in the moment the all tasks are resolved. Result is the array of all results

## `promises.serial(tasks)`

Run all tasks in the given order. Next task is invoked when previous is resolved. Returns promise, which is fullfilled in the moment the last tasks are resolved. Result is the array of all results

## `promises.allSettled(tasks)`

Wait until all tasks have settled (each may resolve or reject). Returns a promise that resolves after all of the given tasks have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

## `promises.race(tasks)`

Wait until any of the task is resolved or rejected. If the returned task resolves, it is resolved with the value of the first task in the iterable that resolved. If it rejects, it is rejected with the reason from the first task that was rejected.
