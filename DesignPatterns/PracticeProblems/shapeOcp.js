//You have a Shape class that calculates the area of circles and rectangles using if-else conditions. Modify it to follow the OCP to support new shapes.

class Shape{
    area(){

    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        return (Math.PI * this.radius * this.radius).toFixed(2)
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    area(){
        return (this.width * this.height).toFixed(2)
    }
}

const circle = new Circle(5)
const rectangle = new Rectangle(10, 20)
console.log(circle.area())
console.log(rectangle.area())
