// -- Problem:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// -- Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//
// -- Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
// -- Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// pseudocode:
// two inputs: an array and a number
// output is an array
// set a loop within a loop, where i starts at the index of 0
// and j starts at index of i+1
// and loops through all other indexes
// if index[i] and index[j] equal the target value, then
// return the two indexes in a list
// fringe case: there isn't a match in the list that adds to target
// fringe case: an index can only be used once

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
