function maxPoint(arr, l){
    let left = 0;
    let right = arr.length;
    let max = 0;
    while(left < arr.length){
        while(right < arr.length && arr[right] - arr[left] <= l){
            right ++;
        }
        max = Math.max(max, right - left)
        left ++;
    }
    return max;
}
