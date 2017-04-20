function integers() {
    let i = 0
    return {next() { return {value: i++} },
        [Symbol.iterator]() { return this }}
}

function take(n, iter) {
    return {
        next() {
            for (let i = 0; i < n; i++){
                console.log(iter.next().value) //сложнооооо
            }
        },
        [Symbol.iterator]() { return this }
    }
}

for (let elt of take(3, integers()))
    elt
// → 0
//   1
//   2

