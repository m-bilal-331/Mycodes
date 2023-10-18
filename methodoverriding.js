//Method Overriding

class Shape {
    move() {
        console.log('move');
    }

}

class Circle extends Shape {

    move() {                          //Method overide
        super.move();               //Reuse method of shape parent class with supoer keyword
        console.log('circle move method');         // class Circle Move method
    }
}

const c = new Circle();
