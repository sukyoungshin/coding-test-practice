// ex1) Stack 구현
class Stack {
  private list: number[];
  constructor(...item) {
    this.list = item.length ? [...item] : [];
    console.log('constructor >> ', this);
  }

  push(n) {
    this.list.push(n);
    console.log('push >> ', this);
    return this;
  }
  pop() {
    this.list.pop();
    console.log('pop >> ', this);
    return this;
  }
}

const stack = new Stack();
stack.push(3).push(6).push(9).pop();

const stack2 = new Stack(1, 2);
stack2.push(10).pop().pop();

// ex2) Queue 구현
class Queue {
  private list: number[];
  constructor(...item) {
    this.list = item.length ? [...item] : [];
    console.log('constructor >> ', this);
  }

  enqueue(n) {
    this.list.push(n);
    console.log('enqueue >> ', this);
    return this;
  }
  dequeue() {
    this.list.shift();
    console.log('dequeue >> ', this);
    return this;
  }
}

const queue = new Queue();
queue.enqueue(3).enqueue(2); // 추가하기
queue.dequeue(); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

const queue2 = new Queue(1, 2);
queue2.dequeue().dequeue();
