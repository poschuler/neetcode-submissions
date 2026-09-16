class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap = new Map<number,number>();

        for(let i = 0; i<=nums.length;i++){
            const diffVal = target - nums[i];

            if(prevMap.has(diffVal)){
                return [prevMap.get(diffVal),i]
            }

            prevMap.set(nums[i],i);

        }

        return [];
    }
}
