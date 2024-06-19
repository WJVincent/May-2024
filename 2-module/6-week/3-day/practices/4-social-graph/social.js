// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    const nextID = this.currentID;

    this.users[nextID] = {id: nextID, name};
    this.follows[nextID] = new Set();

    return nextID;
  }

  getUser(userID) {
    return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    if(!this.users[userID1] || !this.users[userID2]) return false;
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    if(!this.users[userID]) return null;
    return this.follows[userID];
  }

  getFollowers(userID) {
    const res = new Set();

    for(let id in this.follows){
      const val = this.follows[id];
      if(val.has(userID)){
        res.add(+id);
      }
    }

    return res;
  }

  getRecommendedFollows(userID, degrees) {
    const q = [[userID]];
    const v = new Set().add(userID);
    const recs = [];
    
    while(q.length){
      const currPath = q.shift();
      const currNode = currPath[currPath.length - 1];

      if(currPath.length > degrees + 2) break;
      if(currPath.length > 2) recs.push(currNode);

      for(let follow of this.follows[currNode]){
        if(!v.has(follow)){
          v.add(follow);
          q.push([...currPath, follow]);
        }
      }
    }

    return recs;
  }
}

module.exports = SocialNetwork;
