// console.log("into the js file")
const userData = {
    name: "Rakshit",
    age: 21,
    gender: "Male",
}

const addDataButton = document.querySelector("button")
const injectDataButton = document.querySelector(".injectData")


addDataButton.addEventListener("click", () => {

    localStorage.setItem("userData", JSON.stringify(userData))

    // console.log(retrievedData)
})

injectDataButton.addEventListener("click", () => {
    const retrievedData = JSON.parse(localStorage.getItem("userData"))
    if(retrievedData){
        document.querySelector("input[name='name']").value = retrievedData.name
        document.querySelector("input[name='age']").value = retrievedData.age;
        document.querySelector(`input[name='gender'][value='${retrievedData.gender.toLowerCase()}']`).checked = true;
    }else{
        alert("No Data found")
    }
})







