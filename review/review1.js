//map custom implementation
// Array.prototype.customMap = (callback: any) => {
//     let resArr = []
//     this.forEach(item => {
//     })
// }
Array.prototype.customArray = function customArray(func) {
    var resArr = [];
    for (var i = 0; i < this.length; i++) {
        resArr.push(func(this[i]));
    }
    return resArr;
};
var double = function (num) {
    return num * 2;
};
var arr = [1, 2, 3, 4];
console.log(arr.customArray(double));
