//Privaet properties and method using Symbols.
const _radius = Symbol();
const _draw = Symbol();

class Circle {
constructor(radius) {
    //private properties using symbol and bracket notation.
    this[_radius] = radius;
}
//Private Method using Symbol
[_draw]() {

}
}

const c = new Circle(1);
