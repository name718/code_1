var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length;i ++){
        nums[i] = nums[i] + Math.max(nums[i - 1], 0);
    }
    return Math.max(...nums);
};