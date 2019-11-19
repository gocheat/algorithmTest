//1. 정렬할 리스트에 피벗 지점을 정한다. (보통 중간)
//2. 피벗의 값을 기준으로 start, end 값을 정한다.
//3. start 와 end가 피벗의 값을 교차할때까지 피벗의 값을 기준으로 start,end 값을 swap 한다.
//4. partition를 진행한 후 해당 값을 기준으로 나눈 리스트를 각각 sort 재귀함수를 호출 한다.
function quickSort(list) {
    return sort(list, 0, list.length-1)
}

function sort(list, start, end) {
    var part = partition(list, start, end);
    if( start < part-1 ){
        list = sort(list, start, part-1)
    }
    if( part < end ){
        list = sort(list, part, end)
    }
    return list
}

function partition(list, start, end) {
    var pivot = parseInt((start+end) / 2)

    while (start <= end){
        while (list[pivot] > list[start]) start++;
        while (list[pivot] < list[end]) end--;
        if(start > end){
            break;
        }
        swap(list, start, end);
        start++
        end--
    }

    return start
}

function swap(list, start, end){
    var temp = list[start];
    list[start] = list[end]
    list[end] = temp

}

export {
    quickSort
}
