function matchingScore(word, pages) {
    const urlPattern = "https:\\/\\/([0-9a-zA-Z.-\\/]+)"
    const urlReg = new RegExp(urlPattern, "g");

    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    let matchedIndexOfUrl = {}
    let matchInfos = [] //link,

    for(let i in pages){
        let page = pages[i]
        let outLink = page.match(urlReg)

        //문자열 스코어 계산
        let wordScore = 0
        page = page.toLowerCase() //페이지
        word = word.toLowerCase()
        let start = page.indexOf("<body>")
        if(start < 0 ) continue
        while(start >= 0){
            let findWord = page.indexOf(word, start)
            if(findWord > 0){
                if(isLetter(page.charAt(findWord-1)) || isLetter(page.charAt(findWord+word.length))){
                   break;
                }else{
                    start = findWord+word.length
                    wordScore++
                }
            }else{
                break;
            }
        }

        if (outLink && outLink.length > 1){
            matchedIndexOfUrl[i] = outLink[0]
            matchInfos[i] = {
                link: outLink.slice(1) || [],
                defaultScore: wordScore,
                addScore: wordScore / outLink.slice(1).length || 0,
                index: +i,
                outLinkScore: 0
            }
        }
    }

    for(let i in matchInfos){
        let matchInfo = matchInfos[i]
        matchInfo.link.forEach((l, i) =>{
            let matchedIndex = Object.values(matchedIndexOfUrl).findIndex(v => l === v)
            if( matchedIndex >= 0 ){
                matchInfos[matchedIndex]["outLinkScore"] += matchInfo.addScore
            }
        })
    }

    //
    matchInfos.sort((a, b)=>{
        let as = (a.defaultScore + a.outLinkScore)
        let bs = (b.defaultScore + b.outLinkScore)
        let v = bs - as
        if (v == 0){
            return a.index - b.index
        }
        return v
    })
    return matchInfos[0].index
}

export default matchingScore