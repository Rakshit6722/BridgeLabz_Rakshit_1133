const tasks = [
    () => Promise.resolve("Task 1 complete"),
    () => Promise.resolve("Task 2 complete"),
    () => Promise.resolve("Task 3 complete"),
]

const runTasks = async () => {
    for(let task of tasks){
        const data = await task();
        console.log(data)
    }
}

runTasks()