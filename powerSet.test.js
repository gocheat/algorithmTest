import PowerSet from "./PowerSet";


test('PowerSet Test', () => {
     let list = [1,2,3,4]
    let set = PowerSet(list)
    set.sort(function(a, b){
        if (a.length > b.length){
            return 1
        }else{
            return -1
        }
    })
    console.log(set)
    expect(list.length << 2).toBe(set.length+1) //null 포함하여 비교
});
