//Inheritance

class Shape {
    constructor(color){
        this.color = color;
    }

    move() {
        console.log('move method');
    }
}

class Circle extends Shape {
    constructor (color, radius){
        super(color)
        this. radius = radius;
    }

    draw(){
        console.log('draw method');
    }
}

const c = new Circle('red',1);