function rec_size(arrays, userinfo) {
  var i;
  var results = [];
  // check for out of bounds
  if (userinfo[1] > arrays[arrays.length - 1][1]) {
    return 'XL';
  }
  //see which size you match with for each measurement
  for (var i = 1; i < userinfo.length; i++) {
    //loop through arrays 
    for (var j = 0; j < arrays.length; j++) {
      if (arrays[j][i] == userinfo[i]) {
        results.push(arrays[j][0][1]);
      }
    }
  }
  console.log(results);
  var counter = 0;
  //find max size
  for (var a = 0; a < results.length; a++) {
    if (results[a] > counter) {
      counter = results[a];
    }
  }
  console.log("Based on your measurements, you are size: ", counter)

  //notes:
  //return size in number format
  //loop through user array 
  //go through for each category --> bust, waist and hip
  //match the size in numbers 
  //store the numbers in an array
  //take the max of the numbers stored
  //in array b/c if later we want to give different weightage
}
//sample size chart - macys
var items = [
  //[SIZE((letter),(number)), BUST(IN), WAIST(IN), HIP(IN)]
  [['XXS', 0], 32, 24, 34],
  [['XS', 2], 33, 25, 35],
  [['XS', 2], 34, 26, 36],
  [['S', 4], 35, 27, 37],
  [['S', 4], 36, 28, 38],
  [['M', 8], 37, 29, 39],
  [['M', 10], 38, 30, 40],
  [['L', 12], 39, 31, 41],
  [['L', 14], 40, 32, 42],
  [['XL', 16], 41, 33, 43]
];
//sample user entry
var user_items = [
  ['XS', 2], 33, 25, 35
]
rec_size(items, user_items);
//IN THE FUTURE MOST WEIGHT WOULD BE GIVEN TO PEOPLE WITH 
//SAME MEASUREMENTS WHO PICKED IT
// The second one
//GIVE MORE WEIGHT TO CHART
//THEN WHAT U USUALLY ARE
//take max of