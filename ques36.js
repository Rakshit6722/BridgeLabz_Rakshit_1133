let str = "anbacohojoaj    cjvjvklkkakk"

const charArr = (str) =>{
    return str.match(/[a-zA-Z]/g) || []
}

console.log(charArr(str))