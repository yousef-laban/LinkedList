let maxNum = 12;

class Node {
  constructor(groupNum, nextNode = null) {
    this.groupNum = groupNum;
    this.nextNode = nextNode;
  }
}

class Queue {
  constructor(limit = null) {
    this.frontNode = null;
    this.backNode = null;
    this.limit = limit;
    this.size = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit;

  peek = () => {
    if (this.isEmpty()) console.log("Empty queue!");
    else return this.frontNode;
  };

  enqueue = (groupNum) => {
    if (groupNum <= maxNum) {
      if (this.isFull()) console.log("There's no place for you here");
      else {
        const newNode = new Node(groupNum);
        if (this.isEmpty()) {
          // the new node is both the front and back node
          this.frontNode = newNode;
          this.backNode = newNode;
        } else {
          // link the backnode to the new node then make the newnode the backnode
          this.backNode.nextNode = newNode;
          this.backNode = newNode;
        }
        this.size++;
      }
    } else {
      let numOfNode = Math.ceil(groupNum / maxNum);

      while (numOfNode > 0) {
        let x = 0;
        if (groupNum >= 12) {
          x = 12;
          groupNum -= 12;
        } else x = groupNum;

        this.enqueue(x);

        numOfNode--;
      }
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("OOps! Nothing to remove.");
    } else {
      const removedNode = this.frontNode;
      if (this.size === 1) {
        this.frontNode = null;
        this.backNode = null;
      } else {
        this.frontNode = removedNode.nextNode;
      }
      this.size--;
      return removedNode.data;
    }
  };

  calculateTime = () => {
    let cur = this.frontNode;
    let sum = 0;
    while (cur) {
      sum += cur.groupNum * 0.5;
      cur = cur.nextNode;
    }

    return sum;
  };

  print = () => {
    if (this.isEmpty()) console.log("empty");
    else {
      let cur = this.frontNode;

      while (cur) {
        console.log(`group of :  ${cur.groupNum}`);

        cur = cur.nextNode;
      }
    }
  };
}

const amusement = new Queue();

console.log("waiting time : ", amusement.calculateTime(), "min");
amusement.enqueue(6);
amusement.enqueue(12);
amusement.enqueue(1);
amusement.enqueue(15);
amusement.print();
console.log("waiting time : ", amusement.calculateTime(), "min");

amusement.dequeue();
amusement.print();
console.log("waiting time : ", amusement.calculateTime(), "min");
