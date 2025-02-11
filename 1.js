// 普通递归
function flatten(arr){
    const res= [];
    function dfs(arr){
        if(!Array.isArray(arr)) {
            res.push(arr);
            return;
        }
        for(let i=0;i<arr.length;i++){
            if(!Array.isArray(arr[i])){
                res.push(arr[i]);
            }else{
                dfs(arr[i]);
            }
        }
    }
    dfs(arr);
    return res;
}

// JSON
function flatten2(arr){
    const arrStr = JSON.stringify(arr);
    const tmp = arrStr.replace(/\[|\]/g,'');
    // const res=tmp.split(',').map(Number);

    const res = JSON.parse(`[${tmp}]`);
   
    return res;
}

const res = flatten2([1,2,3,[4,5,6,[7,8,9]]]);
console.log(res);
