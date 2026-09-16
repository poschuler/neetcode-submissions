class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //groupAnagrams(strs: string[]): string[][] {
    //    const res={};
        
    //    for(let str of strs){
    //        const count = new Array(26).fill(0);

    //        for (let c of str){
    //            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    //        }

    //        console.log(count);

    //        const key = count.join(',');
    //        if(!res[key]){
    //            res[key] = [];
    //        }

    //        res[key].push(str);
    //    }
    //    return Object.values(res);

    //}

    groupAnagrams(strs: string[]): string[][] {
        const res = new Map<string,string[]>;
        
        for(let str of strs){
            const key = this.canonicalKey(str);

            if(!res[key]){
                res[key] = [];
            }

            res[key].push(str);
        }
        //console.log(res);
        return Object.values(res);

    }

    canonicalKey(str: string): string {
        const count = new Map<string, number>();
        
        for (const c of str){ 
            count.set(c, (count.get(c) ?? 0) + 1);
        
        }
        const entries = [...count].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
        return JSON.stringify(entries);
        }
}
