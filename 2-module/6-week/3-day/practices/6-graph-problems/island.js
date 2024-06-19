function getNeighbors(row, col, graph) {
    const res = [];

    // Check top
    if(row - 1 >= 0 && graph[row - 1][col] === 1){
        res.push([row - 1, col]);
    }

    // Check bottom
    if(row + 1 < graph.length && graph[row + 1][col] === 1){
        res.push([row + 1, col]);
    }

    // Check left
    if(col - 1 >= 0 && graph[row][col - 1] === 1){
        res.push([row, col - 1]);
    }

    // Check right
    if(col + 1 < graph[row].length && graph[row][col + 1] === 1){
        res.push([row, col + 1]);
    }

    return res;
}

function islandSize(row, col, graph) {
    const s = [[row, col]];
    const v = new Set().add([row, col].toString());
    let count = 0;

    while(s.length){
        const curr = s.pop();
        const [row, col] = curr;

        count++;

        const neighbors = getNeighbors(row, col, graph);
        neighbors.forEach(node => {
            const nodeStr = node.toString();
            if(!v.has(nodeStr)){
                v.add(nodeStr);
                s.push(node);
            }
        })
    }

    return count;
}

module.exports = [getNeighbors, islandSize];
