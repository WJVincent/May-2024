function getNeighbors(row, col, matrix) {
    const res = [];
    // Check top
    // Check top right
    // Check top left
    if(row - 1 >= 0){
        if(col - 1 >= 0 && matrix[row - 1][col - 1] === 1){
            res.push([row - 1, col - 1]);
        }
        if(matrix[row - 1][col]){
            res.push([row - 1, col]);
        }
        if(col + 1 < matrix[row - 1].length && matrix[row-1][col + 1] === 1){
            res.push([row - 1, col + 1]);
        }
    }

    // Check right
    if(col + 1 < matrix[row].length && matrix[row][col + 1] === 1){
        res.push([row, col + 1]);
    }
    // Check left
    if(col - 1 >= 0 && matrix[row][col - 1] === 1){
        res.push([row, col - 1]);
    }

    // Check bottom right
    // Check bottom
    // Check bottom left
    if(row + 1 < matrix.length){
        if(col - 1 >= 0 && matrix[row + 1][col - 1] === 1){
            res.push([row + 1, col - 1]);
        }
        if(matrix[row + 1][col] === 1){
            res.push([row + 1, col]);
        }
        if(col + 1 < matrix[row + 1].length && matrix[row + 1][col + 1] === 1){
            res.push([row + 1, col + 1]);
        }
    }

    // Return neighbors
    return res;
}

const traverse = (matrix, v, node) => {
    const s = [node];

    while(s.length){
        const curr = s.pop();
        const [row, col] = curr;

        const neighbors = getNeighbors(row, col, matrix);
        neighbors.forEach(node => {
            const strNode = node.toString();
            if(!v.has(strNode)){
                v.add(strNode);
                s.push(node);
            }
        })
    }
}

function countIslands(matrix) {
    const visited = new Set();
    let count = 0;

    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for(let j = 0; j < row.length; j++){
            if(row[j] === 1 && !visited.has(`${i},${j}`)){
                count++;
                visited.add(`${i},${j}`);
                traverse(matrix, visited, [i,j]);
            };
        }
    }

    return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
