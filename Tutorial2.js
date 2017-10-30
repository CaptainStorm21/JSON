<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div id = "message"></div>
</body>
</html>


javascript.js
var start = '{"favColor":"red", "favSeason":"Summer", "favTree":"Pine"}';

var myObject = JSON.parse(start);
console.log(myObject);

document.getElementById('message').innerHTML = "My favorite season is " + myObject.favSeason;


output 
My favorite season is Summer
