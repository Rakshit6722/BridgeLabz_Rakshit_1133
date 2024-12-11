let str = "rakshit"

const reverse = (str) => {
    let arr = str.split("")
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join("")
}

console.log(reverse(str))