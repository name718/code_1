class Solution:
    def LSubSequence(self , n: int, nums: List[int]) -> int:
        if not nums:
            return 0
        res = 1
        dp = [1] * n
        for i in range(1,n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
                res = max(res, dp[i])
        return res