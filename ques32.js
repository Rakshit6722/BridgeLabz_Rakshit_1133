const capitalizeFirstLetter = (str) => {
    // let arr = str.trim().split(/\s+/);
    // const res = arr.map(element => (
    // element.slice(0,1).toUpperCase() + element.slice(1)
    // ));
    // return res.join(' ');
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetter("hello         world"));