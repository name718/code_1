def getMaxSubSum(arr):
    maxSum = 0
    partialSum = 0
    for item in arr:
        partialSum += item
        maxSum = max(maxSum, partialSum)
        if (partialSum < 0):
            partialSum = 0
    return maxSum