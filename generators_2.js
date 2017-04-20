/*
 Redo exercise Iterators.2 using a generator.
 */
function* integers() {
    for (let i = 0;; i++) yield i
}

function* take(n, iter) {
    for(let i = 0; i < n; i++){
        console.log(iter.next().value)
    }
}

for (let elt of take(3, integers()))
    console.log(elt)
// → 0
//   1
//   2

