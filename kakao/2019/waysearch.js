/*

전무로 승진한 라이언은 기분이 너무 좋아 프렌즈를 이끌고 특별 휴가를 가기로 했다.
내친김에 여행 계획까지 구상하던 라이언은 재미있는 게임을 생각해냈고 역시 전무로 승진할만한 인재라고 스스로에게 감탄했다.

라이언이 구상한(그리고 아마도 라이언만 즐거울만한) 게임은, 카카오 프렌즈를 두 팀으로 나누고, 각 팀이 같은 곳을 다른 순서로 방문하도록 해서 먼저 순회를 마친 팀이 승리하는 것이다.

그냥 지도를 주고 게임을 시작하면 재미가 덜해지므로, 라이언은 방문할 곳의 2차원 좌표 값을 구하고 각 장소를 이진트리의 노드가 되도록 구성한 후, 순회 방법을 힌트로 주어 각 팀이 스스로 경로를 찾도록 할 계획이다.

라이언은 아래와 같은 특별한 규칙으로 트리 노드들을 구성한다.
- 트리를 구성하는 모든 노드의 x, y 좌표 값은 정수이다.
- 모든 노드는 서로 다른 x값을 가진다.
- 같은 레벨(level)에 있는 노드는 같은 y 좌표를 가진다.
- 자식 노드의 y 값은 항상 부모 노드보다 작다.
- 임의의 노드 V의 왼쪽 서브 트리(left subtree)에 있는 모든 노드의 x값은 V의 x값보다 작다.
- 임의의 노드 V의 오른쪽 서브 트리(right subtree)에 있는 모든 노드의 x값은 V의 x값보다 크다.
- 아래 예시를 확인해보자.

라이언의 규칙에 맞게 이진트리의 노드만 좌표 평면에 그리면 다음과 같다. (이진트리의 각 노드에는 1부터 N까지 순서대로 번호가 붙어있다.)

* */

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
        if(current.data.x === data.x){
            return
        }
        //왼쪽노드에 삽입
        if(current.data.x > data.x){
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


BST.prototype.preOrder = function() {
    let result = []
    function inLoop(node){
        if(node != null){
            result.push(node.data.index)
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
            result.push(node.data.index)
        }
    }
    inLoop(this.root)
    return result
}

function waySearch(nodeinfo) {
    var answer = [];
    let tree = nodeinfo.map((v,i)=> { return {index:i+1,x:v[0],y:v[1]}}).sort((a, b) => b.y-a.y)
    let bt = new BST()
    for(let i = 0; i < tree.length; i++){
        bt.insert(tree[i])
    }
    answer.push(bt.preOrder())
    answer.push(bt.postOrder())

    return answer;
}

export default waySearch