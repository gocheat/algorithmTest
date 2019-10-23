function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length-1-i; j++) {
            if(list[j] > list[j+1]) {
                let temp = list[j+1]
                list[j+1] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}

function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length-1; j++) {
            if(list[i] > list[j+1]) {
                let temp = list[j+1]
                list[j+1] = list[i];
                list[i] = temp;
            }
        }
    }
    return list;
}



export {
    bubbleSort,
    selectSort
}