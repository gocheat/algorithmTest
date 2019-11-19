import { selectSort, bubbleSort } from './basicSort'
import { quickSort } from './quickSort'

test('Bubble Sort Test', () => {
    let randomList = [666, 6, 2, 5,  1, 100, 10, 111, 12, 50, ];
    let sortedList = bubbleSort(randomList)
    console.log(sortedList)
});

test('Select Sort Test', () => {
    let randomList = [666, 6, 2, 5,  1, 100, 10, 111, 12, 50, ];
    let sortedList = selectSort(randomList)
    console.log(sortedList)
});

test('Quick Sort Test', () => {
    let randomList = [666, 6, 2, 5,  1, 100, 10, 111, 12, 50, ];
    let sortedList = quickSort(randomList)
    console.log(sortedList)
});
