class Wheel {
    constructor(size) {
        this.size = size;
    }
}

class Door {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

class Windows {
    constructor(weight) {
        this.weight = weight;
    }
}

class Engine {
    constructor(weight) {
        this.weight = weight;
    }
}

class Color {
    constructor(color) {
        this.color = color;
    }
    toString() {
        return `${this.color}`;
    }
}

class Horsepower {
    constructor(nbhorse) {
        this.nbhorse = nbhorse;
    }
}

class Car {
    constructor(wheels, doors, windows, engine, color, horsepower) {
        this.wheels = wheels;
        this.doors = doors;
        this.windows = windows;
        this.engine = engine;
        this.color = color;
        this.horsepower = horsepower;
        this.run = false;
        this.speed = 0;
    }

    start() {
        if (!this.run) {
            console.log("La voiture démarre.");
            this.run = true;
        } else {
            console.log("La voiture est déjà en marche.");
        }
    }

    accelerate(kmh) {
        if (this.run) {
            this.speed += kmh;
            console.log(`La voiture accélère à ${this.speed} kmh.`);
        } else {
            console.log("La voiture n'est pas en marche. Démarrez d'abord la voiture.");
        }
    }

    brake() {
        if (this.run && this.speed > 0) {
            console.log("La voiture freine.");
            this.speed -= 10; 
            console.log(`Vitesse actuelle : ${this.speed} kmh.`);
        } else if (this.run && this.speed === 0) {
            console.log("La voiture est déjà à l'arrêt.");
        } else {
            console.log("La voiture n'est pas en marche. Démarrez d'abord la voiture.");
        }
    }

    stop() {
        if (this.run) {
            this.speed -= 30;
            console.log(`La voiture continu de freiner et son allure est à : ${this.speed} kmh`);
            this.speed -= 20;
            console.log(`La voiture continu de freiner et son allure est à : ${this.speed} kmh`);
            this.speed -= 20;
            console.log(`La voiture continu de freiner et son allure est à : ${this.speed} kmh`);
            this.speed -= 20;
            console.log(`La voiture continu de freiner et son allure est à : ${this.speed} kmh`);
            this.speed -= 20;
            console.log(`La voiture continu de freiner et son allure est à : ${this.speed} kmh`);
            this.speed -= 10;
            console.log(`La voiture est à l'arret et son allure est à : ${this.speed} kmh`);
            console.log("La voiture s'arrête.");
            this.speed = 0;
            this.run = false;
        } else {
            console.log("La voiture n'est pas en marche.");
        }
    }
}

const wheel = new Wheel(15);
const door = new Door(1, 80);
const window = new Windows(20);
const engine = new Engine(200);
const carColor = new Color("red");
const carHorsepower = new Horsepower(130);

const myCar = new Car(wheel, door, window, engine, carColor, carHorsepower);

myCar.start();
myCar.accelerate(130);
myCar.brake();
myCar.stop();
