//Use strict mode to avoid modifying the global objects.
'use strict';

const Cricle () {
    this.draw(){
        console.log(this);
    }
}

const c = new Circle();

//Method Call
c.draw();

const draw = c.draw;

//Function Call

draw();