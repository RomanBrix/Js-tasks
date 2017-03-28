/**
 * Created by RomanBrix on 3/28/17.
 */
//Write a JavaScript program to get the
// volume of a Cylinder with four decimal places using object classes.
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
    this.getV = function () {
        var answ = this.cyl_height * Math.PI * Math.pow((this.cyl_diameter/2),2);
        return answ.toFixed(4);
    };
}
var cyl = new Cylinder(7,4);
console.log(cyl.getV());