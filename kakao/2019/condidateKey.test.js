import CandidateKey from "./candidateKey";


test('CandidateKey Test', () => {
    let test = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]
    let count = CandidateKey(test)
    expect(count).toBe(2)
});
