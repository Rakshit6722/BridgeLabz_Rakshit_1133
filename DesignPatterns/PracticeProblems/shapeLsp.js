//You have a Rectangle class with getWidth and getHeight methods. A Square class extends it but breaks its behavior. Ensure the classes adhere to the LSP.

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea(){
        return this.width * this.height
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side)
    }

    getArea(){
        return this.height * this.width
    }
}

const rectangle = new Rectangle(10, 20)
const square = new Square(10)

console.log(rectangle.getArea())
console.log(square.getArea())
