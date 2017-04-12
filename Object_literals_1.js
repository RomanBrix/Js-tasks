/*
 Use a single object literal to create an object that is indistinguishable from a Point instance, without calling
  the Point constructor.
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y);
    }
}

class FakePoint extends Point{

}

let fakePoint = new FakePoint(1,2),
    point = new Point(2,1);


console.info(point.add(fakePoint));
console.info(fakePoint.add(point));
console.log(fakePoint instanceof Point);

