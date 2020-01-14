import FailureRate from "./failureRate";


test('실패율 Test', () => {
    let result = FailureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])
    expect(result).toEqual([3, 4, 2, 1, 5])

    let result2 = FailureRate(4, [4,4,4,4,4])
    expect(result2).toEqual([4,1,2,3])

});
