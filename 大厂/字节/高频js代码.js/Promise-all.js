function PromiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new Error("传入的参数必须是数组"));
    }
    const promiseNums = promiseArray.length;
    const res = [];
    let counter = 0;
    for (let i = 0; i < promiseNums; i++) {
      Promise.resolve(promiseArray[i])
        .then((value) => {
          counter ++;
          res[i] = value;
          if (counter === promiseNums) {
            resolve(res);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
}
