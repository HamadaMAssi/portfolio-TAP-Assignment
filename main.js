// find indices of two numbers in an array that add up to the target
function getIndexTwoSum(nums, target) {
    // Create a Map to store elements and their indices
    const elements = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        // Check if the Map contains a number that if we add to the current number equals target 
        // If found, return the indices
        // Otherwise, add the current number and its index to the Map
        if (elements.has(target - nums[i])) {
            return [elements.get(target - nums[i]), i];
        }
        elements.set(nums[i], i);
    }
    return [];
}

console.log("%c Q2: Javascript Question\n\n", "font-size: 1.5rem");
// Example 1
console.log(
    "%c Example :\n Input: nums = [2,7,11,15]\n target = 9\n Output :  %c[" +
    getIndexTwoSum([2, 7, 11, 15], 9) + "]", "font-size: 1rem", "font-size: 1rem; color: green"
);
// The overall time complexity is O(n)
