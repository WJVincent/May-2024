const matrix = [
    [1, 28, 32, 44],
    [12, 5, 10, 13],
    [51, 62, 73, 14],
    [2, 88, 19, 200]
];

const findNeighbors = (matrix, node) => {
	const [row, col] = node;
	const res = [];

	//up
	if(row - 1 >= 0){
		res.push([row - 1, col]);
	}

	//down
	if(row + 1 < matrix.length){
		res.push([row + 1, col]);
	};

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
	const q = [start];
	const v = new Set().add(`${start[0]},${start[1]}`);

	while(q.length){
		const currNode = q.shift();

		//do something
		if(matrix[currNode[0]][currNode[1]] === target) return true;
		
		const neighbors = findNeighbors(matrix, currNode);

		neighbors.forEach(el => {
			const strEl = `${el[0]},${el[1]}`;

			if(!v.has(strEl)){
				v.add(strEl);
				q.push(el);
			};
		})
			
	};

	return false;
};

console.log(bfs(matrix, [0,0], 19));
