
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let arr = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                //每个对象都成功
                //存入
                // arr.push(v);
                arr[i] = v;
                count++;
                if (count == promises.length) {
                    //修改状态
                    resolve(arr);
                }
            }, r => {
                reject(r);
            });
        }
    })
}
