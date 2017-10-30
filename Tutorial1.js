var start = '{"favColor":"red", "favSeason":"Summer"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);


//output
[object Object] {
  favColor: "red",
  favSeason: "Summer"
}
"{\"favColor\":\"red\",\"favSeason\":\"Summer\"}"
