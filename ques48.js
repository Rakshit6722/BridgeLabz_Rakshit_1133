const longestWordInString = (str) => {
    let strArr = str.split(' ');
    return strArr.reduce((acc,curr)=>{
        if(curr.length > acc.length){
            acc = curr
        }
        return acc
    },'')
}

console.log(longestWordInString("The quick brown fox jumped over the lazy dog")) 