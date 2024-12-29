/**
* 把平铺的数组结构转成树形结构
*/
const arr = [
    { id: "01", name: "张⼤⼤", pid: "", job: "项⽬经理" },
    { id: "02", name: "⼩亮", pid: "01", job: "产品leader" },
    { id: "03", name: "⼩美", pid: "01", job: "UIleader" },
    { id: "04", name: "⽼⻢", pid: "01", job: "技术leader" },
    { id: "05", name: "⽼王", pid: "01", job: "测试leader" },
    { id: "06", name: "⽼李", pid: "01", job: "运维leader" },
    { id: "07", name: "⼩丽", pid: "02", job: "产品经理" },
    { id: "08", name: "⼤光", pid: "02", job: "产品经理" },
    { id: "09", name: "⼩⾼", pid: "03", job: "UI设计师" },
    { id: "10", name: "⼩刘", pid: "04", job: "前端⼯程师" },
    { id: "11", name: "⼩华", pid: "04", job: "后端⼯程师" },
    { id: "12", name: "⼩李", pid: "04", job: "后端⼯程师" },
    { id: "13", name: "⼩赵", pid: "05", job: "测试⼯程师" },
    { id: "14", name: "⼩强", pid: "05", job: "测试⼯程师" },
    { id: "15", name: "⼩涛", pid: "06", job: "运维⼯程师" },
   ];
   // * 数组转树 递归求解
   // */
   function toTree(list, parId) {
    let len = list.length;
    function loop(parId) {
    let res = [];
    for (let i = 0; i < len; i++) {
    let item = list[i];
    if (item.pid === parId) {
    item.children = loop(item.id);
    res.push(item);
    }
    }
    return res;
    }
    return loop(parId);
   }
   let result = toTree(arr, "");
   console.log(result);