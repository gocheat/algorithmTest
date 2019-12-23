function Node(key, data){
    this.data = data;
    this.key = key;
    this.next = null;
    this.prev = null;
}

//head 에 신규 노드가 추가되는 형태의 LinkedList 포함
function LRUCache(capacity) {
    if(!capacity){
        throw Error("생성자 capacity 를 넣어주세요")
    }
    this.capacity = capacity
    this.size = 0
    this.nodes = {}
    this.head  = new Node("H",0)
    this.tail  = new Node("T", 0)
    this.head.next = this.tail
    this.tail.prev = this.head
}

LRUCache.prototype.list = function(){
    let cacheList = []
    let loop = this.head.next;
    while (loop.next != null){
        cacheList.push(loop)
        loop = loop.next
    }
    return cacheList
}

//값 추가
LRUCache.prototype.put = function(key, data){

    if(this.has(key)){
        //존재할경우 값 변경
        this.delete(this.nodes[key])
    }

    let newNode = new Node(key, data)
    this.insertHead(newNode)

    if(this.capacity < this.size ) {
        this.delete(this.tail.prev)
    }
}

LRUCache.prototype.get = function(key){
    if(this.has(key)){
        this.delete(this.nodes[key])
        this.insertHead(key, this.nodes[key])
        return this.nodes[key]
    }
    console.log(`해당 데이터가 존재하지 않습니다: ${key}`)
}

LRUCache.prototype.has = function(key){
    if(this.nodes.hasOwnProperty(key)){
        return true
    }else{
        return false
    }
}

LRUCache.prototype.delete = function(deleteNode){
    deleteNode.prev.next = deleteNode.next
    deleteNode.next.prev = deleteNode.prev
    delete(this.nodes, deleteNode.key)
    this.size--
}

LRUCache.prototype.insertHead = function(newNode){
    newNode.prev = this.head
    newNode.next = this.head.next

    this.head.next.prev = newNode
    this.head.next = newNode
    this.size++
}

export default LRUCache