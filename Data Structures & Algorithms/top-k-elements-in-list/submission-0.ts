class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const resMap = new Map<number,number>();

        for(let n of nums){
            resMap.set(n,( resMap.get(n) ?? 0 ) + 1);
        }

        const buckets: number[][] = Array.from({ length: nums.length + 1}, () => []);

        //console.log(resMap);
        //console.log(buckets);

        for(let [i,v] of resMap){
            buckets[v].push(i);
        }

        //console.log(buckets);

        const res: number[] = [];
        for(let i = buckets.length - 1; i > 0 && res.length < k; i--){
            for(let j of buckets[i]){
                res.push(j);
                if (res.length === k) return res;
            }
        }        

        return res;
    }
}
