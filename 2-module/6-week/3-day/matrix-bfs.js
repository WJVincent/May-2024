const matrix = [
    [1, 28, 32, 44],
    [12, 5, 10, 13],
    [51, 62, 73, 14],
    [2, 88, 19, 200]
];

const findNeighbors = (matrix, [row, col]) => {
    const res = [];
    
    //up
    if(row - 1 >= 0){
        res.push([row - 1, col]);
    }

    //down
    if(row + 1 < matrix.length){
        res.push([row + 1, col]);
    }

    //left
    if(col - 1 >= 0){
        res.push([row, col - 1]);
    }

    //right
    if(col + 1 < matrix[row].length){
        res.push([row, col + 1]);
    }

    return res;
};

//starting from matrix[0][0] can I find my target?
const bfs = (matrix, start, target) => {
    const q = [start]; // start [0,0]
    const v = new Set().add(start.toString());

    while(q.length){
        const currNode = q.shift();
        const [row, col] = currNode;

        if(matrix[row][col] === target) return true;
        
        const neighbors = findNeighbors(matrix, currNode);
        neighbors.forEach(node => {
            const strNode = node.toString();

            if(!v.has(strNode)){
                v.add(strNode);
                q.push(node);
            }
        })
    }

    return false;
};


console.log(bfs(matrix, [0,0], 3000));
