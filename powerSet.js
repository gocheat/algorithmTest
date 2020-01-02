function PowerSet(data){
    let result = []
    let include = {}
    function powerSet(k){
        if(k == data.length){
            let subset = []
            for(let i = 0; i < data.length; i++){
                if(include[i]){
                    subset.push(data[i])
                }
            }
            if(subset.length > 0){
                result.push(subset)
            }
            return
        }
        include[k] = false
        powerSet(k+1)
        include[k] = true
        powerSet(k+1)
    }
    powerSet(0)
    return result
}

export default PowerSet