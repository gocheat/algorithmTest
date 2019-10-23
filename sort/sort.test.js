import { selectSort, bubbleSort } from './basicSort'

test('Bubble Sort Test', () => {
    let ramdomList = [6, 2, 5,  1, 100, 10];
    let sortedList = bubbleSort(ramdomList)
    console.log(sortedList)
});


test('Select Sort Test', () => {
    let ramdomList = [6, 2, 5,  1, 100, 10];
    let sortedList = selectSort(ramdomList)
    console.log(sortedList)
});