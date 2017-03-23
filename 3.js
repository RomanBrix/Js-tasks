function getInt(a, b) {
  var answ = [];
  while(a < b){
    ++a;
    answ.push(a);
  }
  answ.pop();
  
  return answ;

};


alert(getInt(10,20));
