abstract class Shape{
    abstract calculateArea(): number;

    describe():void{
        console.log(`This is a shape`)
    }
}

class Circle extends Shape{
    constructor(private radius: number){
        super()
        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    constructor(private width: number, private height: number){
        super()
        this.width = width
        this.height = height
    }

    calculateArea(): number {
        return this.width * this.height
    }
}

const circle1 = new Circle(10)
console.log(circle1.calculateArea().toFixed(2))

const rectangle1 = new Rectangle(10,20)
console.log(rectangle1.calculateArea().toFixed(2))


