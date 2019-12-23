import LRUCache from "./lruCache";
import LFUCache from "./lfuCache";


test('LRUCache Test', () => {
    let cache = new LRUCache(3)

    cache.put(1, "하이")
    cache.put(2, "Hi")
    cache.put(3, "방가루")

    cache.get(2)
    cache.get(1)
    //캐시 체크
    cache.put(5, "데이터")
    expect(cache.get(3)).toBe(-1)

    cache.get(2)
    cache.put(6, "좀더")
    expect(cache.get(1)).toBe(-1)



});

test('LFUCache Test', () => {
    let cache = new LFUCache(3)

    cache.put(1, "하이")
    cache.put(2, "Hi")
    cache.put(3, "방가루")

    cache.get(3)
    cache.get(2)

    cache.put(5, "데이터")
    expect(cache.get(1)).toBe(-1)

    cache.put(6, "좀더")
    expect(cache.get(5)).toBe(-1)

});
