const operation1 = () => new Promise(resolve => setTimeout(()=>resolve("Operation 1 resolved"),1500))
const operation2 = () => new Promise(resolve => setTimeout(()=>resolve("Operation 2 resolved"),2000))

const handleExecution = async (operation1, operation2) => {
    const data = await Promise.all([operation1(), operation2()])
    console.log(data)
}

handleExecution(operation1, operation2);

