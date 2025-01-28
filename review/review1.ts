//map custom implementation

// Array.prototype.customMap = (callback: any) => {
//     let resArr = []
//     this.forEach(item => {

//     })



// }

Array.prototype.customArray = function customArray(func:(item: number)=> number){
    let resArr: number[] = []
    for(let i=0;i<this.length;i++){
        resArr.push(func(this[i]))
    }
    return resArr
}

const double = (num: number): number => {
    return num*2
}

let arr: number[] = [1,2,3,4]
console.log(arr.customArray(double))
