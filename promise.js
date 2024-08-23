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

queue.enqueue([promiseWaiting(2000, 'Promesa 1'), (data) => console.log(data)]);
queue.enqueue([promiseWaiting(2000, 'Promesa 2'), (data) => console.log(data)]);
queue.enqueue([promiseWaiting(2000, 'Promesa 3'), (data) => console.log(data)]);


// Desencolar las funciones guardadas en la cola
run();
async function run(){
    while (!queue.isEmpty()) {
        const res = queue.dequeue();
        const data = await res[0](); // ahora res[0] es quien recibe la función y la ejecuta
        res[1](data); // ejecuta la 2da función con el resultado que de la 1ra
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