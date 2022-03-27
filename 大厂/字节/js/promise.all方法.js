

class MyPromise2 {
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.successCB = []
        this.failCB = []
        let reslove = (value) => {
            if(this.state == 'pending'){
                this.state = "fulfilled"
                this.value = value
                this.successCB.forEach(f => f())
            }
        }
        let reject = (reason) => {
            if(this.state == 'pending'){
                this.state = "rejected"
                this.reason = reason
                this.failCB.forEach(f => f())
            }
        }
        try{
            executor(reslove, reject)
        }catch{
            reject(error)
        }
        let then = (onFufilled, onRejected) => {
            if(this.state === 'fufilled'){
                onFufilled(this.value)
            }
            if (this.state === 'reject') {
                onRejected(this.reason)
            }
            if (this.state === 'pending') {
                this.failCB.push(() => {onRejected(this.reason)})
                this.successCB.push(() => {onFufilled(this.value)})
            }
        }
    }
}
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
