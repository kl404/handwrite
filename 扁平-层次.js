// 对象
const list = [
  { pid: null, id: 1, data: "1" },
  { pid: 1, id: 2, data: "2-1" },
  { pid: 1, id: 3, data: "2-2" },
  { pid: 2, id: 4, data: "3-1" },
  { pid: 3, id: 5, data: "3-2" },
  { pid: 4, id: 6, data: "4-1" },
];

function listToTree(list){
    function dfs(pid){
        const choices = list.filter(item =>item.pid === pid);
        if(choices.length === 0) return null;

        const nodes = [];

        for(const choice of choices){
            const node = {
                id: choice.id,
                data: choice.data,
                pid: choice.pid,
                children: dfs(choice.id) || []
            }
            nodes.push(node)
        }
        return nodes;
    }

    return dfs(null)[0];
}
function treeToList(tree) {
    const result = [];
  
    function flatten(node, pid = null) {
      if (!node) return;
  
      result.push({
        pid: pid,
        id: node.id,
        data: node.data,
      });
  
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => flatten(child, node.id));
      }
    }
  
    flatten(tree);
    return result;
}






// 数组
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






