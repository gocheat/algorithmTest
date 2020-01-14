function failureRate(N, stages) {
    let failRates = []
    let totalCount = stages.length
    for(let i=1; i <= N; i++){
        let failCount = 0
        stages.forEach(v => {
            if(v == i){
                failCount++
            }
        })
        let score = {
            stage: i,
            rate: failCount / totalCount,
        }
        if(totalCount === 0){
            score.rate = 0
            failRates.push(score)
        }else{
            totalCount -= failCount
            failRates.push(score)
        }
    }
    const result = failRates.sort((a,b)=>{
        if(a.rate == b.rate){
            return a.stage - b.stage
        }
        return b.rate - a.rate
    }).map(v =>{
        return v.stage
    })
    console.log(result)
    return result
}

export default failureRate