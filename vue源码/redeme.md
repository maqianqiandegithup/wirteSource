## 虚拟dom（js对象） 先记着修改内容，然后定时更新，批量修改
var vnode={
    tag:"div",
    text:"xxx",
    children:[]
}
## diff算法
1.将虚拟dom的改变映射到真实数据上
2.同层级比较
3.有两对指针 旧首，旧尾，新首，新尾