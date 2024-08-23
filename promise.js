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


// Closure, una función que retorna otra función
function promiseWaiting(time, message){
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(message);
            }, time);
        });
    }
};



const queue = new Queue();

queue.enqueue(promiseWaiting(2000, 'Promesa 1'));
queue.enqueue(promiseWaiting(1000, 'Promesa 2'));


// Desencolar las funciones guardadas en la cola
run();
async function run(){
    while (!queue.isEmpty()) {
        const fn = queue.dequeue();
        const data = await fn(); // se cambió de await fn a await fn() para que se ejecute la función
        console.log(data);
    }
}

// ------------------------------

/*
// Esta manera de guardar las promesas no es la ideal, puesto que se ejecutan al momento de ser guardadas

queue.enqueue(
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa 1');
        }, 2000);
    })
);

queue.enqueue(
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa 2');
        }, 3000);
    })
);
*/

// ------------------------------

/*
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
*/