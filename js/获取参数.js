// http://www.runoob.com/index.php?id=1&image=awesome.jpg

let url = "http://www.runoob.com/index.php?id=1&image=awesome.jpg"
let vars = url.split("&");
let a = []
for(let s in vars){
    a.push(vars[s].split("=")[1])
}
console.log(a)
