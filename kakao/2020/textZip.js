/*
* [2020카카오공채] 문자열 압축
* https://programmers.co.kr/learn/courses/30/lessons/60057
* */

function textZip(s) {

    const maxLen = Math.floor(s.length / 2);
    let answer = s.length;

    //중복할 개수
    for(let i = 1; i <= maxLen; i++){
        let pos = 0;
        let length = s.length;
        for(let j = 0; j <= s.length; j++) {
            //타겟 지정
            let target = s.slice(pos, pos + i)
            pos += i
            let cnt = 0;
            for (; pos + i <= s.length;) {
                if (target == s.slice(pos, pos + i)) {
                    pos += i
                    cnt++
                } else {
                    break;
                }
            }
            if(cnt > 0){
                length -= i*cnt
                if(cnt < 9){
                    length += 1
                }else if(cnt < 99){
                    length += 2
                }else if(cnt < 999){
                    length += 3
                }else{
                    length += 4
                }
            }
        }
        answer = Math.min(answer, length)
    }
    return answer;
}

export default textZip