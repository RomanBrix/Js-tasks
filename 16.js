function leap(st_year, end_year) {
   var year_range = [];
   for (var i = st_year; i <= end_year; i++) {
     year_range.push(i);
    //  console.log(year_range);
   }
   var new_array = [];

   year_range.forEach(function(year) {
     if (test_LeapYear(year))
     new_array.push(year);
   });

   return new_array;
}


function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) ||
      ( year % 100 === 0 && year % 400 === 0)) {

          return year;

        } else {
          return false;
        }
}
alert(leap(2000,2020));
