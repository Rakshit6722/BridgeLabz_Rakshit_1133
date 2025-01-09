const getUser = (userId) => {
    return new Promise((res, rej) => {
        let user = {
            id: userId,
            name: "abc",
            email: "abc@gmail.com"
        }
        setTimeout(() => {
            res(user)
        }, 1000)
    })
}

const getCart = (userId) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let cart = {
                id: "cart123",
                userId: userId,
                items: [
                    {
                        id: 1,
                        name: "item1",
                        price: 1000
                    },
                    {
                        id: 2,
                        name: "item2",
                        price: 2000
                    },
                    {
                        id: 3,
                        name: "item3",
                        price: 3000
                    }
                ]
            }
            res(cart)
        }, 2000)
    })
}

const processPayment = (amount) => {
    return new Promise((res, rej) => {
        if (amount > 1000) {
            res({ transactionId: "1234", message: "Payment successful" })
        } else {
            rej("Payment failed")
        }
    })
}

const paymentProcess = (userId) => {
    getUser(userId)
        .then((user) => {
            let userData = user;
            return getCart(userData.id)
        })
        .then((cart) => {
            let cartData = cart;
            let totalAmount = cartData.items.reduce((acc, curr) => acc + curr.price, 0)
            return processPayment(totalAmount)
        })
        .then((payment) => {
            console.log(`Payment successful with transaction id ${payment.transactionId}`)
        })
        .catch((err) => {
            console.log(err)
        })
}

paymentProcess("user435")