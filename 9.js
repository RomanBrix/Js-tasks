/**
 * Created by RomanBrix on 3/29/17.
 */
/*
 Write a JavaScript program to calculate the area and perimeter of a circle.
 Note : Create two methods to calculate the area and perimeter.
 The radius of the circle will be supplied by the user.
 */
var Circle = function (radius) {
    this.radius = radius;
    this.getArea = function(){
        return Math.PI * Math.pow(this.radius, 2);
    };
    this.getPerim = function () {
        return 2*Math.PI*this.radius;
    };
}
var circle = new Circle(3);
console.log(circle.getArea());
console.log(circle.getPerim());