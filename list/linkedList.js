function Node(data, next){
    this.next = next;
    this.data = data;
}

function LinkedList() {

    this.head = new Node("H");

    this.insert = function(index, data) {
        var current = this.find(index)
        var NewNode = new Node(data, current.next);
        current.next = NewNode;
    }

    this.append = function(data){
        var NewNode = new Node(data, null);
        var current = this.head;
        while (current.next != null){
            current = current.next
        }
        current.next = NewNode
    }

    this.remove = function(index) {
        var current = this.find(index)
        var removeNode = current.next;
        current.next = removeNode.next;
    }

    this.find = function(index) {
        var findIndex = 0;
        var current = this.head;
        while(findIndex < index) {
            if(current.next == null) throw "out of list index"
            current = current.next; //
            findIndex++
        }
        return current
    }

    this.getList = function() {
        if( this.head == null ){
            return [];
        }
        var list = [];
        var current = this.head
        while (current.next != null){
            current = current.next;
            list.push(current.data);
        }
        return list;
    }
}

export { LinkedList }
