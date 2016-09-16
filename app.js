
var updateArrayItems = function (x) {
	var newArr = x.map(function(item){
       return {key: item}
	});
	console.log(newArr);
}

var filterNumbers = function(x) {
	var newArr2 = x.filter(function(item) {
		return isNaN(item) ? false : item;
	});
	console.log(newArr2);
}