// rakshit: Write a function debounce that delays the processing of a function call until after a specified time has 
// passed since the last time it was invoked. Useful in scenarios like search input fields.

const debounceFunction = (func1, delay) => {
    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func1()
        }, delay)
    }
}

const greet = () => {
    console.log("Hello")
}

const debounced = debounceFunction(greet, 2000);
debounced()
debounced()
debounced()