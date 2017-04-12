/*
 Point

 Write a class called Point, which represents a point in two-dimensional space.
 A point has x and y properties, given as arguments to its constructor.

 It also has a single method plus, which takes another point and returns the sum of the two points, that is,
 a new point whose x is the sum of the x properties of the two original points,
 and whose y is the sum of their y properties.
 */
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(a){
        let sum1 = 0,
            sum2 = 0;

        sum1 = this.x + this.y;
        sum2 = a.x + a.y;
        return(`x: ${sum1}, y: ${sum2}`);
    }


}
console.log(new Point(1, 2).plus(new Point(2, 1)))

// → Point{x: 3, y: 3}


