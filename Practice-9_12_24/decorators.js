function log(target,key,descriptor){
    // console.log(target,key,descriptor);
    console.log('decorator called')
    // return descriptor
}

// class Example{

//     @log
//     greet(){
//         console.log('Hello');
//     }
// }

// const example = new Example()
// example.greet()


function greet(){
    console.log('Hello');
}

const decoratoreFunction = log(greet())
console.log(decoratoreFunction);