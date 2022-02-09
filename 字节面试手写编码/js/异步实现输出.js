
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ok');
        }, time);
    })
}
for (let i = 0; i <= 5; i++) {
    sleep(i).then((data) => {
        console.log(i);
    })
}
