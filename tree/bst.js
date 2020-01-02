function Node(data){
    this.data = data
    this.left = null
    this.right = null
}

Node.prototype.removeChild = function(){
    if(this.left){
        this.left = null
    }else{
        this.rigth = null
    }
}


function BST(){
    this.root = null
}

BST.prototype.insert = function(data) {
    let current = this.root
    if(!current){
        this.root = new Node(data)
        return
    }
    while(current){
        if(current.data === data){
            return
        }
        //왼쪽노드에 삽입
        if(current.data > data){
            if(!current.left){
                current.left = new Node(data)
            }else{
                current = current.left
            }
            //오른쪽 노드에 삽입
        }else{
            if(!current.right){
                current.right = new Node(data)
            }else{
                current = current.right
            }
        }
    }
}

BST.prototype.delete = function(data) {
    let current = this.root
    let parent = null
    while(current){
        if(current.data === data){
            //root 삭제할 경우
            if (parent == null){
                return
            }
            //자식이 모두 있을 경우
            //left 값중 가장 크거나 right 값에서 가장 작은 값을 찾습니다.
            //case: left 값중 가장 큰 값을 찾습니다.
            if(current.left && current.right){
                let deep = current.left
                let p = current
                let newHeadNode = null
                while(deep){
                    if(!deep.left){
                        newHeadNode = {...deep}
                        p.left = null
                        break
                    }else{
                        p = deep
                        deep = deep.left
                    }
                }

                if(parent.left && parent.left.data == current.data){
                    parent.left = newHeadNode
                    newHeadNode.right = current.right
                    newHeadNode.left = current.left
                }else if(parent.right && parent.right.data == current.data){
                    parent.right = newHeadNode
                    newHeadNode.right = current.right
                    newHeadNode.left = current.left
                }
                current = null

            //자식이 하나만 있을 경우
            }else if((!current.left && current.right) || (current.left && !current.right)){
                let clid = current.left ? current.left : current.right
                if(parent.left && parent.left.data == current.data){
                    parent.left = clid
                }else if(parent.right && parent.right.data == current.data){
                    parent.right = clid
                }
            //자식이 없을 경우
            }else if(!current.left && !current.right){
                parent.removeChild()
            }
            return
        }

        if(current.data > data){
            parent = current
            current = current.left
        }else{
            parent = current
            current = current.right
        }

    }
}

//dfs(깊이 우선 탐색)
BST.prototype.find = function(data) {
    let current = this.root
    while(current) {
        if(current.data === data) {
            return current.data
        }
        if(current.data > data){
            current = current.left
        }else{
            current = current.right
        }
    }
    return -1
}

BST.prototype.BFS = function() {
    let current = this.root;
    const queue = [current];
    const finalData = []
    while(queue.length){
        let node = queue.shift()
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
        finalData.push(node.data)
    }
    return finalData
}

BST.prototype.inOrder = function() {
    let result = []
    function inLoop(node){
        if(node != null){
            inLoop(node.left)
            result.push(node.data)
            inLoop(node.right)
        }
    }
    inLoop(this.root)
    return result
}

BST.prototype.preOrder = function() {
    let result = []
    function inLoop(node){
        if(node != null){
            result.push(node.data)
            inLoop(node.left)
            inLoop(node.right)
        }
    }
    inLoop(this.root)
    return result
}

BST.prototype.postOrder = function() {
    let result = []
    function inLoop(node){
        if(node != null){
            inLoop(node.left)
            inLoop(node.right)
            result.push(node.data)
        }
    }
    inLoop(this.root)
    return result
}

export default BST
