import TextZip from "./textZip";


test('문자열 압축', () => {
    //2a2ba3c
    let result = TextZip("aabbaccc")
    expect(result).toEqual(7)

    result = TextZip("ababcdcdababcdcd")
    expect(result).toEqual(9)

    result = TextZip("abcabcabcabcdededededede")
    expect(result).toEqual(14)

    result = TextZip("xababcdcdababcdcd")
    expect(result).toEqual(17)
});
