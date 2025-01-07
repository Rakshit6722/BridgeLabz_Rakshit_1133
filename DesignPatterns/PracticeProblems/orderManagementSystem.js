class Order{
    constructor(name,price,quantity){
        this.orderDetails = {
            name,
            price,
            quantity,
        };
    }
}

class ElectronicOrder extends Order{
    constructor(name,price,quantity,type){
        super(name,price,quantity);
        this.type = type;
        this.discountRate = 0.4;
    }
}

class ClothingOrder extends Order{
    constructor(name,price,quantity,type){
        super(name,price,quantity);
        this.type = type;
        this.discountRate = 0.2;
    }
}

class OrderService{
    constructor() {
        this.order = [];
    }

    createOrder(order) {
        this.order.push(order);
        return this.order;
    }

    validateOrder(order){
        order.forEach(order => {
            if(!order.name || !order.price || !order.quantity || !order.type){
                throw new Error("Invalid order details");
            }
        });
        return "order validated"
    }

}

class CalculateTotalService{
    static calculateTotal(order){
        let total = 0;
        order.forEach(order => {
            total += order.orderDetails.price * order.orderDetails.quantity;
        });
        return total;
    }
}

class DiscountService{
    applyDiscount(order){
        return order.price - (order.price * order.discountRate);
    }
}

class ConfirmationMailService{
    static sendMail(order){
        order.forEach(order => {
            console.log(`Confirmation mail sent for order ${order.orderDetails.name}`)
        });
    }
}

const orderService = new OrderService();
const order1 = new ElectronicOrder("Laptop",70000,1,"Electronic");
const order2 = new ClothingOrder("Shirt",1000,2,"Clothing");
const order3 = new ElectronicOrder("Mobile",15000,3,"Electronic");
const order4 = new ClothingOrder("Jeans",2000,4,"Clothing");
const order5 = new ElectronicOrder("Headphones",500,5,"Electronic");
const order6 = new ClothingOrder("T-shirt",300,6,"Clothing");
console.log(orderService.createOrder(order1))
console.log(orderService.createOrder(order2))
console.log(orderService.createOrder(order3))
console.log(orderService.createOrder(order4))
console.log(orderService.createOrder(order5))
console.log(orderService.createOrder(order6))
console.log(orderService.order)
console.log(CalculateTotalService.calculateTotal(orderService.order))
ConfirmationMailService.sendMail(orderService.order)

