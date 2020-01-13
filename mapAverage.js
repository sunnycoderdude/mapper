var tyler = [40.758700, -73.965828];
var satinder = [40.745588, -73.991381];
var rick = [40.707517, -74.013239];

var avgLat = (tyler[0] + satinder[0] + rick[0])/3;
var avgLon = (tyler[1] + satinder[1] + rick[1])/3;

var latlon = avgLat + "," + avgLon;

console.log(latlon);

var img_url = "http://www.google.com/maps/place/"+avgLat+","+avgLon;

console.log(img_url);


