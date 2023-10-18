//Private properties and method using WEAKMAP

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);   //Private property using WeakMap.
        _move.set(this , () => {             //Private method using WeakMap.
            console.log('private method');
        });

    }

    draw(){                                 //tO ACCESS private property and method.
        console.log(_radius.get(this));

        _move.get(this)();

        console.log('draw method');
    }
}

const c = new Circle(1);
