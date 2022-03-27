// 双指针
function trap(height = []) {
    if (height == 0) return 0;
  
    const n = height.length;
    let res = 0;
    
    let left = 0;
    let right = n - 1;

    let r_max = height[n - 1];
    let l_max = height[0];

    while(left < right){
        l_max = Math.max(l_max,height[left]);
        r_max = Math.max(r_max,height[right]);
    
        if(l_max < r_max) {
            res += l_max - height[left];
            left ++;
        } else {
            res += r_max - height[right];
            right --;
        }
    }
    return res;
  }