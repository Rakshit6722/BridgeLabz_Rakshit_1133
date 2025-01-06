// Create a payment processing system that currently supports credit card payments. Extend it to support PayPal and other payment methods without modifying the existing code.

class PaymentProcessor {
    static processPayment(method) {
        return method.payment()
    }
}

class PaymentMethod {
    payment() {
        throw new Error("Method not implemented")
    }
}

class CreditCardPayment extends PaymentMethod {
    constructor(cardNumber, expiryDate, cvv, amount) {
        super()
        this.cardNumber = cardNumber
        this.expiryDate = expiryDate
        this.cvv = cvv
        this.amount = amount
    }

    payment() {
        console.log("Processing payment of", this.amount, "using", this.cardNumber)
    }
}

class PayPalPayment extends PaymentMethod {
    constructor(email, amount) {
        super()
        this.email = email
        this.amount = amount
    }

    payment() {
        console.log("Processing payment of", this.amount, "using", this.email)
    }
}

const creditCard = new CreditCardPayment("1234567890", "12/24", "123", 100)
const payPal = new PayPalPayment("john@example.com", 100)

PaymentProcessor.processPayment(creditCard)
PaymentProcessor.processPayment(payPal)
