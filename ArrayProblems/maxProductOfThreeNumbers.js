const maxProductOfThreeNumbers = (nums) => {
    if (nums.length < 3) {
        throw new Error("Array must contain at least three numbers");
    }

    nums.sort((a, b) => a - b);

    const n = nums.length;
    const maxProduct1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const maxProduct2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(maxProduct1, maxProduct2);
}

const nums = [1, 10, -5, 1, -100];
console.log(maxProductOfThreeNumbers(nums)); 