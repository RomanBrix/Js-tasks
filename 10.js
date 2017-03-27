//Write a JavaScript function which returns
// the "n" rows by "n" columns identity matrix.
function matrix(n) {
  var matr = []
  for(var i = 0; i < n; i++) {
    matr.push([])
    for (var j = 0; j < n; j++) {
      i == j ? matr[i].push(1) : matr[i].push(0);
    }
  }
  matr = matr.join('\n');
  console.log(matr);

}
matrix(4);
