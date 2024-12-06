const eventEmitter = require('events');

const event = new eventEmitter();

event.on('greet', () => {
    console.log('Hello')
})

event.emit('greet')
