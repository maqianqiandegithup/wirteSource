let data = [{
    title: 'parent 1',
    expand: true,
    children: [{
            title: 'child 1-1',
            expand: true,
            children: [{
                    title: 'leaf 1-1-1',
                    expand: true
                },
                {
                    title: 'leaf 1-1-2',
                    expand: true
                }
            ]
        },
        {
            title: 'child 1-2',
            expand: true,
            children: [{
                    title: 'leaf 1-2-1',
                    expand: true
                },
                {
                    title: 'leaf 1-2-1',
                    expand: true
                }
            ]
        }
    ]
}]
b = {
        title: 'child 1-1',
        expand: true,
        children: [{
                title: 'leaf 1-1-1',
                expand: true
            },
            {
                title: 'leaf 1-1-2',
                expand: true
            }
        ]
    },
    c = {
        title: 'leaf 1-1-1',
        expand: true
    },
    // 第一步：
    let keyCounter = 0;
let childrenKey = "children"
let flatTree = []
flattenChildren() {
        a.nodeKey = 1
        a: {
            title: 'parent 1',
            expand: true,
            children: ...,
            nodeKey: 1
        }
        flatTree[1] = { node: a, nodeKey: 1 }
        flatTree = [undefined, { node: a, nodeKey: 1 }] ===
            ===
            ===
            ===
            // 因为a有children，
            flatTree[1] = { node: a, nodeKey: 1, childrenKey: [] },
    }
    // 第二层递归
flatTree[2] = { node: b, nodeKey: 2 }
flatTree = [undefined, { node: a, nodeKey: 1, childrenKey: [] }, { node: a, nodeKey: 2 }]
    // 因为parrent是a
flatTree[2] = { node: b, nodeKey: 2， parent: 1 }
flatTree[1].childrenKey.push(2)
    //问题，有没有改变原来的数组呢
flatTree = [undefined, { node: a, nodeKey: 1, childrenKey: [2] }, { node: a, nodeKey: 2, parent: 1, childrenKey: [3] }]

// 因为也有children
keyCounter = 3
flatTree[3] = { node: c, nodeKey: 3, parent: 2 }
flatTree = [{ node: a, nodeKey: 1, childrenKey: [2] }, { node: b, nodeKey: 2, parent: 1, childrenKey: [3] }, { node: c, nodeKey: 3, parent: 2 }]
    // 整个过程中，只是对原数组增加了一个nodeKey。

let data2 = []