// https://leetcode.com/problems/running-sum-of-1d-array/

export default function main(nums: number[]): number[] {
  for (let i = 1, j = nums.length; i < j; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
}
