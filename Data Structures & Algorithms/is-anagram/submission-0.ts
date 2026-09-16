class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
       if(s.length !== t.length) return false;

        const count = new Map<string,number>();

        for(const l of s){
            count.set(l,(count.get(l) ?? 0)+1);
        }

        for(const l of t){
            const val = count.get(l);
            if(!val) return false;
            count.set(l,val-1);
        }

        return true;
    }
}
