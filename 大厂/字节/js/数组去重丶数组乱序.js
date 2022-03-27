// 利用set
var arr = [2, 1, 3, 4, 1, 1];
console.log(arr, [...new Set(arr)]);
// 利用Array.from
const newArray = Array.from(new Set(arr))
// 数组乱序
// 利用 sort 进行排序
// 直接利用 sort 进行排序，有漏洞，大部分元素位置没有移动
var arr = [1, 2, 3, 4, 5];
var newArr = arr.sort((a, b) => (Math.random() > 0.5 ? -1 : 1)); console.log(newArr);

// 经典洗牌算法实现
function shuffle(arr) {
    let len = arr.length, randomIndex,
    // 随机数        tempItem; 
    // 存储临时数据    
    for (let i = len - 1; i >= 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        // 交换位置        
        tempItem = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = tempItem;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}
// 测试var arr = [1, 2, 3, 4, 5];
console.log(shuffle(arr));