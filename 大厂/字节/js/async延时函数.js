function sleep(delay = 2000){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
        },delay);
    })
}
async function show(){
    for(let i = 1; i < 10; i++){
        await sleep();
        console.log(i);
    }
}
show();