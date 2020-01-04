import MujiLive from "./mujiLive";


test('무지의 먹방 라이브', () => {
    let food_times = [3, 1, 2], k = 5
    let stop = MujiLive(food_times, k)
    expect(stop).toBe(1)
});
