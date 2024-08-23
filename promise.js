// https://youtu.be/VP61sxajsgo?si=BXGhty9goCiHIBfy

class Queue {
    #items = [];

    enqueue(item) {
        this.#items.push(item);
    }

    dequeue() {
        return this.#items.shift();
    }

    isEmpty() {
        return this.#items.length === 0;
    }
}
