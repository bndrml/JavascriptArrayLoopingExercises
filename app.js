
var updateArrayItems = function (x) {
	var newArr = x.map(function(item){
       return {key: item}
	});
	console.log(newArr);
}

var filterNumbers = function(x) {
	var newArr2 = x.filter(function(item) {
		//return isNaN(item) ? false : item;
		return !isNaN(item);
	});
	console.log(newArr2);
}
var createStringItems = function (arr,str) {
	var newArr3=[];
	arr.forEach(function(item){
		var innerArr=[];
		for(i=0;i<item;i++) {
			innerArr.push(str);
		}
		newArr3.push(innerArr);
	});
	console.log(newArr3);
}

var checkingFurkan = function (arr) {
	var answer = arr.some(function (item) {
		return item === "furkan";
	});
	console.log(answer);

}