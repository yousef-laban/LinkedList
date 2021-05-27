const colors = ["red", "blue", "green", "yellow"];

class Node {
  constructor(color, num, nextCard = null) {
    this.color = color;
    this.num = num;
    this.nextCard = nextCard;
  }
  getData() {
    return `${this.color} , ${this.num}`;
  }
}

class cardDeck {
  constructor() {
    this.topCard = null;
  }

  push = (color, num) => {
    const newCard = new Node(color, num);
    newCard.nextCard = this.topCard;
    this.topCard = newCard;
  };

  pop = () => {
    const popped = this.topCard;
    this.topCard = popped.nextCard;
    return `${popped.color} -  ${popped.num}`;
  };

  print = () => {
    let cur = this.topCard;
    while (cur) {
      console.log(`card  : ${cur.color} , ${cur.num}`);
      cur = cur.nextCard;
    }
  };

  get peek() {
    return ` card color : ${his.topCard.color}  card number : ${this.topCard.num}`;
  }
}

const deck = new cardDeck();

let c = 0;
while (c < 20) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  let randomNum = Math.floor(Math.random() * 10);

  deck.push(randomColor, randomNum);
  c++;
}

deck.print();

const player1 = [];
const player2 = [];

let x = 0;
while (x < 5) {
  player1.push(deck.pop());
  player2.push(deck.pop());

  x++;
}

console.log(player1);
console.log(player2);
