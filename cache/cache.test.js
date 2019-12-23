import LRUCache from "./LRUCache";


test('LRUCache Test', () => {
    let cache = new LRUCache(3)

    cache.put(1, "하이")
    cache.put(2, "Hi")
    cache.put(3, "방가루")

    //캐시 체크
    expect(cache.list()[0].key).toBe(3)

    cache.put(5, "데이터")

    //길이 체크
    expect(cache.list().length).toBe(3)

    //캐시 체크
    expect(cache.list()[0].key).toBe(5)
    expect(cache.list()[2].key).toBe(2)

    console.log(cache.list())
});
