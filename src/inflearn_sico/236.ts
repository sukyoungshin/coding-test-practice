// Stack과 Queue 클래스를 iterator로 작성하시오. (iterable한 클래스로 작성하세요)
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
  length(size?: number) {
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

  // ✅ 제너레이터를 이용해 이터레이터를 생성
  *[Symbol.iterator]() {
    for (const item of this.list) {
      yield item;
    }
  }
  iterator() {
    return this[Symbol.iterator]();
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

const stack = new Stack(100);
const queue = new Queue(1, 2);

console.log('spread syntax >> ', [...stack], [...queue]);
for (const s of stack) console.log('stack >> ', s);
for (const q of queue) console.log('queue >> ', q);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
