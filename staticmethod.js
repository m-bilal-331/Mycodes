class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //Instance Method
    draw() {

    }

    //Static Method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

//STATIC METHOD CALLED USING CLASS NAME AND DOT NOTATION
const circle = Circle.parse('{"radius" : 1}')
console.log(circle);