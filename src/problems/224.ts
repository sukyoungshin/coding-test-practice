// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
// 공통: clear(), print(), remove(), isEmpty, peek, poll, length(size)
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(나올 요소 삭제하여 처리 skip)
class Collection {
  protected list: number[];

  constructor(...item) {
    this.list = item.length ? [...item] : [];
    console.log('constructor >> ', this);
  }

  clear() {
    this.list = [];
    return this;
  }
  print() {
    console.log(this.list);
    return this;
  }
  isEmpty() {
    return this.list.length === 0;
  }
  length(size?: undefined) {
    if (!size) return this.list.length;

    this.list.length = size;
    return this;
  }
  remove() {
    return this; // 서브클래스가 override
  }
  peek(): number | undefined {
    return undefined; // 서브클래스가 override
  }
  poll(): number | undefined {
    return undefined; // 서브클래스가 override
  }
  toArray() {
    return [...this.list];
  }
}

class Stack extends Collection {
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
  remove() {
    this.list.pop();
    console.log('remove >> ', this);
    return this;
  }
  peek() {
    return this.list[this.list.length - 1];
  }
  poll() {
    return this.list.pop();
  }
}

const stack = new Stack();
stack.push(100).push(200).remove();

class Queue extends Collection {
  enqueue(n) {
    this.list.push(n);
    return this;
  }
  dequeue() {
    this.list.shift();
    return this;
  }
  remove() {
    this.list.shift();
    return this;
  }
  peek() {
    return this.list[0];
  }
  poll() {
    return this.list.shift();
  }
}

const queue = new Queue(1, 2);

console.log(stack.peek(), queue.peek());
queue.print();
if (!stack.isEmpty()) stack.clear();
console.log('stack >> ', stack);
if (queue.length()) queue.clear();
console.log('queue >> ', queue);

const queue2 = new Queue(100, 200);
const arr = queue2.toArray().map((a) => console.log('toArray > ', a));
console.log('arr >> ', arr);
