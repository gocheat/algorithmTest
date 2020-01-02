import BST from "./bst";


test('BST Test', () => {
    let list = new BST()

    list.insert(1)
    list.insert(5)
    list.insert(3)
    list.insert(99)
    list.insert(35)

    expect(list.find(3)).toBe(3)
    expect(list.find(2)).toBe(-1)

    expect(list.inOrder()).toEqual([ 1, 3, 5, 35, 99 ])
    expect(list.preOrder()).toEqual([ 1, 5, 3, 99, 35 ])
    expect(list.postOrder()).toEqual([ 3, 35, 99, 5, 1 ])

    expect(list.BFS()).toEqual([ 1, 5, 3, 99, 35 ])

    list.delete(5)
    list.delete(3)
    expect(list.BFS()).toEqual([ 1, 99, 35 ])
});
