//Getter AND Setter

const _radius = new WeakMap();

class Circle {
    constructor (radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <=0) throw new Error('iNVALID VALUE');
        _radius.set(this, value);
    }
}