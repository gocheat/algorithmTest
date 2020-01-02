function Node(key, data){
    this.data = data;
    this.key = key;
    this.next = null;
    this.prev = null;
}

//head 에 신규 노드가 추가되는 형태의 LinkedList 포함
function LFUCache(capacity) {
    if(!capacity){
        throw Error("생성자 capacity 를 넣어주세요")
    }
    this.capacity = capacity
    this.size = 0
    this.nodes = {}
    this.nodesCount = {}
    this.head  = new Node("H",0)
    this.tail  = new Node("T", 0)
    this.head.next = this.tail
    this.tail.prev = this.head
}

LFUCache.prototype.list = function(){
    let cacheList = []
    let loop = this.head.next;
    while (loop.next != null){
        cacheList.push(loop)
        loop = loop.next
    }
    return cacheList
}

//값 추가
LFUCache.prototype.put = function(key, data){

    if(this.has(key)){
        //존재할경우 값 변경
        this.delete(this.nodes[key])
    }
    let newNode = new Node(key, data)
    this.insertHead(newNode)

    if(this.capacity < this.size ) {
        this.deleteOld()
    }
}

LFUCache.prototype.get = function(key){
    if(this.has(key)){
        this.nodesCount[key]++
        return this.nodes[key]
    }
    return -1
}

LFUCache.prototype.has = function(key){
    if(this.nodes.hasOwnProperty(key)){
        return true
    }else{
        return false
    }
}

LFUCache.prototype.deleteOld = function(){
    let temp = 9999999
    let returnKey = this.capacity+1
    for (let i in this.nodesCount){
        if(this.nodesCount[i] < temp){
            temp = this.nodesCount[i]
            returnKey = i
        }
    }
    let deleteNode = this.nodes[returnKey]
    deleteNode.prev.next = deleteNode.next
    deleteNode.next.prev = deleteNode.prev
    delete this.nodes[deleteNode.key]
    delete this.nodesCount[deleteNode.key]
    this.size--

}

LFUCache.prototype.insertHead = function(newNode){
    newNode.prev = this.head
    newNode.next = this.head.next

    this.head.next.prev = newNode
    this.head.next = newNode
    this.nodes[newNode.key] = newNode
    this.nodesCount[newNode.key] = 0
    this.size++
}

export default LFUCache