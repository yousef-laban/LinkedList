class Node {
  constructor(galaxy, nextNode = null, prevNode = null) {
    this.galaxy = galaxy;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
}

class linkedList {
  constructor(galaxy) {
    this.headNode = new Node(galaxy);
    this.tailNode = new Node(galaxy);
  }
  addBeginning = (galaxyName) => {
    const newGalaxy = new Node(galaxyName);
    this.tailNode.prevNode = newGalaxy;
    const current = this.headNode;
    current.prevNode = newGalaxy;
    newGalaxy.nextNode = current;
    this.headNode = newGalaxy;
  };
  getlinklist = () => {
    let current = this.headNode;
    while (current) {
      console.log(
        `galaxy :${current.galaxy},nextnode :${current.nextNode}, previousnode :${current.prevNode}`
      );
      current = current.nextNode;
    }
  };
  removedGalaxy = (targetGalaxy) => {
    let current = this.headNode;
    let prevGalaxy, nextGalaxy;
    while (current.galaxy !== targetGalaxy) {
      prevGalaxy = current;
      current = current.nextNode;
    }
    nextGalaxy = current.nextNode;
    // let current2 = this.tailNode;
    // while (current2 !== targetGalaxy) {
    //   console.log(current2);
    //   nextGalaxy = current2;
    //   current2 = current2.prevNode;
    // }

    prevGalaxy.nextNode = nextGalaxy;
    nextGalaxy.prevNode = prevGalaxy;

    if (prevGalaxy.prevNode === null) this.headNode = prevGalaxy;
    if (nextGalaxy.nextNode === null) this.tailNode = nextGalaxy;
  };
}

const galaxyTrip = new linkedList("Andromeda Galaxy");
galaxyTrip.addBeginning("Cigar Galaxy");
galaxyTrip.addBeginning("Butterfly Galaxy");

galaxyTrip.getlinklist();
galaxyTrip.removedGalaxy("Cigar Galaxy");
galaxyTrip.getlinklist();
