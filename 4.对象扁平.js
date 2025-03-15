const obj = {
    id: 1,
    data: 'root',
    children: [
        {
            id: 2,
            data: 'A',
            children: [
                {
                    id: 3,
                    data: 'A-1',
                    children: []
                },
                {
                    id: 4,
                    data: 'A-2',
                    children: []
                }
            ]
        },
        {
            id: 5,
            data: 'B',
            children: [
                {
                    id: 6,
                    data: 'B-1',
                    children: []
                }
            ]
        }
    ]
};


function flatten(){
    
    const res = [];

    function dfs(node, pid){
        if(!node) return;
        const obj = {
            data: node.data,
            id: node.id,
            pid: pid
        }
        res.push(obj);
        for(let i = 0;i < node.children.length; i++){
             dfs(node.children[i], node.id);
        }
    }
    dfs(obj, null);
    
    return res;
}

console.log(flatten());