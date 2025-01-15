const func1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("operation1");
            resolve();
        }, 1000);
    });
};

const func2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("operation2");
            resolve();
        }, 1500);
    });
};

const func3 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("operation3");
            resolve();
        }, 1500);
    });
};

const asyncFunc = async () => {
    await func1();
    await func2();
    await func3();
}

asyncFunc();
