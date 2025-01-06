// Open Close Principle
// open for extension but not for modification in pre-existing code

// class Discount{
//     calculate(price){
//         return price
//     }
// }

// class StandardDiscount extends Discount{
//     calculate(price){
//         return price * 0.1
//     }
// }

// class PremiumDiscount extends Discount{
//     calculate(price){
//         return price * 0.2
//     }
// }

// const discount = new PremiumDiscount()
// console.log(discount.calculate(100))

class Notification{
    send(message){}
}

class EmailNotification extends Notification{
    send(message){
        console.log(`Sending email notification: ${message}`)
    }
}

class SMSNotification extends Notification{
    send(message){
        console.log(`Sending SMS notification: ${message}`)
    }
}

const notification = new EmailNotification()
notification.send("Hello, world!")

const smsNotification = new SMSNotification()
smsNotification.send("Hello, world!")

