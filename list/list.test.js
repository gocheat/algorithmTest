import {LinkedList} from "./linkedList";


test('LinkedList Test', () => {
    var list = new LinkedList()

    list.append(1)
    list.append(3)
    list.append(5)
    list.insert(1, 2)

    try{
        list.insert(5, 15)
    }catch (e) {
        console.log(e)
    }
    console.log(list.getList())

    list.remove(2)
    list.remove(2)
    console.log(list.getList())
});
