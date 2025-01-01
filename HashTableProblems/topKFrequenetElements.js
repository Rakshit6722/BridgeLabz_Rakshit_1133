function topKFrequent(nums, k) {
    const frequencyMap = new Map();
    
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });


    const sortedElements = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

    return sortedElements.slice(0, k);
}


const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));