class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 10);

console.log(`Площадь: ${rectangle.area()}, Периметр: ${rectangle.perimeter()}`);
