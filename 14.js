//Write a JavaScript function to convert an amount to coins.


//variant 1
function coins(amount, coinsList) {
  // var coinsList = [50,25,10,5,2,1];
  coinsList.sort(srt);
  var answ = [];
  var count = 0;

  while (count != amount) {
    for (var i = 0; i < coinsList.length; i++) {
      if((coinsList[i]+count)<=amount){
        answ.push(coinsList[i]);
        count += coinsList[i];
        i = coinsList.length;
      }
    }

      }
function srt(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}
  return answ;
}


console.log(coins(46,[1,2,5,10,25]));



//variant 2
/*
function coins(amount) {
  var coinsList = [50,25,10,5,2,1];
  var answ = [];
  var count = 0;

  while (count != amount) {
    for (var i = 0; i < coinsList.length; i++) {
      if((coinsList[i]+count)<=amount){
        answ.push(coinsList[i]);
        count += coinsList[i];
        i = coinsList.length;
      }
    }

      }
  return answ;
}


console.log(coins(22)); // 10,10,2
console.log(coins(25)); // 25
console.log(coins(11)); // 10,1
console.log(coins(46)); //25,10,10,1
*/
