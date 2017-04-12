/*
  Add a get method to the ids object, which returns the next id and increments its next counter. Use the short
   method syntax.
 */
let ids = {
    next: 0,
    get(){ return this.next += 1}
};

console.log(ids.get());
// → 0
console.log(ids.get());
// → 1
console.log(ids.get());
// → 3