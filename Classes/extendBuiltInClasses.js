//extending built-in Array class
class CustomArray extends Array{
    getSum(){
        return this.reduce((acc,curr)=>acc+curr,0);
    }

    findEven(){
        let evenNum = this.filter((curr)=>curr%2===0)
        return evenNum
    }
}

const customArray = new CustomArray();
customArray.push(1,23,4,5,12,6);
console.log(customArray.getSum())
console.log(customArray.findEven())