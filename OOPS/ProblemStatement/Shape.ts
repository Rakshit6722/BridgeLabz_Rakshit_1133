class Shape1{
    constructor(private color: string){
        this.color = color
    }

    getColor(): string{
        return this.color
    }

    setColor(color: string): void{
        this.color = color
    }

    calculateArea() : number{
        return 0
    }
}

class Circle1 extends Shape1{
    constructor(private radius: number, color: string){
        super(color)
        this.radius = radius
    }

    calculateArea(): number{
        return Math.PI * this.radius * this.radius
    }
}


class Rectangle1 extends Shape1{
    constructor(private width: number, private height: number, color: string){
        super(color)
        this.width = width
        this.height = height
    }

    calculateArea(): number{
        return this.width * this.height
    }
}

const circle2 = new Circle1(10,"Red")
console.log(circle2.calculateArea().toFixed(2))
console.log(circle2.getColor())
circle2.setColor("Blue")
console.log(circle2.getColor())

const rectangle2 = new Rectangle1(10,20,"Green")
console.log(rectangle2.calculateArea().toFixed(2))
console.log(rectangle2.getColor())
rectangle2.setColor("Yellow")
console.log(rectangle2.getColor())
