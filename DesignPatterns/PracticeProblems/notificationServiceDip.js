//You have a NotificationService class that directly depends on an EmailSender class. Refactor it to depend on an abstraction to allow SMS notifications as well.

class EmailService{
    send(message){
        console.log("Sending email:", message)
    }
}

class NotificationService{
    constructor(sender){
        this.sender = sender
    }

    sendNotification(message){
        this.sender.send(message)
    }
}

const emailSender = new EmailService()
const notificationService = new NotificationService(emailSender)

notificationService.sendNotification("Hello, world!")
