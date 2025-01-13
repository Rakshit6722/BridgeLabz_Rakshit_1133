//sparsh: Create a simple event emitter class that allows registering event listeners and emitting events with data.
class Event {
    #event
    constructor(event) {
        this.#event = event
    }

    login() {
        return function emit(){
            console.log("Add user to database")
        }
    }

    logout() {
        return function emit(){
            console.log("remove user sesstion")
        }
    }

    eventEmitter(event){
        event.emit(event)
    }
}

const loginEvent = new Event("Login")