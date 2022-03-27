class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """

        visit = [True for _ in range(len(nums))]
        tmp = nums[:]

        def dfs(position):
            if position == len(nums):
                res.append(tmp[:])
                return

            for index in range(0, len(nums)):
                if visit[index]:
                    tmp[position] = nums[index]
                    visit[index] = False
                    dfs(position + 1)
                    visit[index] = True

        res = []
        dfs(0)
        return res