const arr = [
  { pid: null, id: 1, data: "1" },
  { pid: 1, id: 2, data: "2-1" },
  { pid: 1, id: 3, data: "2-2" },
  { pid: 2, id: 4, data: "3-1" },
  { pid: 3, id: 5, data: "3-2" },
  { pid: 4, id: 6, data: "4-1" },
];

function treeify() {
  const root = arr.find((item) => {
    return item.pid === null;
  });
  function dfs(node) {
    const tmpNode = {
      ...node,
      children: [],
    };
    const list = arr.filter((item) => {
      return item.pid === node.id;
    });
    for (let i = 0; i < list.length; i++) {
      const returnChild = dfs(list[i]);
      tmpNode.children.push(returnChild);
    }
    return tmpNode;
  }
  return dfs(root);
}

console.log(JSON.stringify(treeify(), null, 2));
