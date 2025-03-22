const arr = [1, [2, [3, 4], 5], 6];
const str = JSON.stringify(arr);
// 串
function flatten1(){
    return arr.toString().split(',');
}
function flatten2(){
    return str.replace(/(\[|\])/g, '').split(',')
}
function flatten3(){
    const tmp = str.replace(/\[|\]/g, '');
    const tmp2 = `[${tmp}]`;
    return JSON.parse(tmp2);
}
function flatten4(){
    return arr.flat(Infinity);
}
function flatten5(){
    const res = [];
    function dfs(arr){
        for(let i = 0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                dfs(arr[i])
            }else{
                res.push(arr[i]);
            }
        }
    }
    dfs(arr);
    return res;
}
function flatten6(){
    function dfs(arr){
        return arr.reduce((acc, cur)=>{
            return acc.concat(Array.isArray(cur) ? dfs(cur) : cur)
        }, [])    
    }
    return dfs(arr);

}



