// https://youtu.be/VP61sxajsgo?si=BXGhty9goCiHIBfy

// Cola a trabajar
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

// Como funcionan las promesas en JS (no tiene nada que ver con arriba es solamente para saber como funcionan las promesas)
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 1');
    }, 4000);
});

// forma de ejecutar la promesa
promise.then(res => console.log(res));

// otra forma de ejecutar la promesa, función ifi (inmediatly invoked function expression) o función autoinvocada
// se ejecuta inmediatamente cuando el interprete de JS llega a ella
(async () => {
    const res = await promise;
    console.log(res);
})();

