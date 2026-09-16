class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map();

        for(var num of nums){
            if(!map.has(num)){
                map.set(num,true);
            }
            else{
                return true;
            }
        }
        return false;
    }
}

