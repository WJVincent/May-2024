const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

/*
Create a queue and enqueue the starting node
Create a set to store visited nodes
While the queue is not empty, repeat steps 4-6
  Dequeue the first node
  DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE
  For each unvisited neighbor, add it to the visited nodes and to the back of the queue
*/

const bft = (start) => {
  const q  = [start];
  const v = new Set().add(start);

  while(q.length){
    const curr = q.shift();
    console.log(curr);

    undirected[curr].forEach(el => {
      if(!v.has(el)){
        v.add(el);
        q.push(el);
      }
    })
  }
}

const dft = (start) => {
  const s  = [start];
  const v = new Set().add(start);

  while(s.length){
    const curr = s.pop();
    console.log(curr);

    undirected[curr].forEach(el => {
      if(!v.has(el)){
        v.add(el);
        s.push(el);
      }
    })
  }
}

dft(6);
