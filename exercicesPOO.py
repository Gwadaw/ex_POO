import time

class Wheel:
    def __init__(self, size):
        self.size = size
    def __str__(self):
        return f"{self.size}"

class Door:
    def __init__(self, height, weight):
        self.height = height
        self.weight = weight
    def __str__(self):
        return f"{self.height} {self.weight}"

class Windows:
    def __init__(self, weight):
        self.weight = weight
    def __str__(self):
        return f"{self.weight}"

class Engine:
    def __init__(self, weight):
        self.weight = weight
    def __str__(self):
        return f"{self.weight}"

class Color:
    def __init__(self, color):
        self.color = color
    def __str__(self):
        return f"{self.color}"

class Horsepower:
    def __init__(self, nbhorse):
        self.nbhorse = nbhorse
    def __str__(self):
        return f"{self.nbhorse}"

class Car:
    def __init__(self, wheel, door, window, engine, color, horsepower):
        self.wheel = wheel
        self.door = door
        self.window = window
        self.engine = engine
        self.color = color
        self.horsepower = horsepower
        self.run = False  
        self.speed = 0  

    def start(self):
        if not self.run:
            print("La voiture démarre.")
            self.run = True
        else:
            print("La voiture est déjà en marche.")

    def accelerate(self, kmh):
        if self.run:
            self.speed += kmh
            print(f"La voiture accélère à {self.speed} kmh.")
        else:
            print("La voiture n'est pas en marche. Démarrez d'abord la voiture.")

    def brake(self):
        if self.run and self.speed > 0:
            print("La voiture freine.")
            self.speed -= 20
            print(f"Vitesse actuelle : {self.speed} kmh.")
        elif self.run and self.speed == 0:
            print("La voiture est déjà à l'arrêt.")
        else:
            print("La voiture n'est pas en marche. Démarrez d'abord la voiture.")

    def stop(self):
        if self.run:
            print("La voiture s'arrête.")
            while self.speed > 0:
                self.speed -= 10
                print(f"La voiture continu de freiner et son allure est à : {self.speed} kmh")
            self.run = False
        else:
            print("La voiture n'est pas en marche.")

wheel = Wheel(15)
door = Door(1, 80)
window = Windows(20)
engine = Engine(200)
car_color = Color("red")
car_horsepower = Horsepower(130)

my_car = Car(wheel, door, window, engine, car_color, car_horsepower)

my_car.start()
my_car.accelerate(130)
my_car.brake()
my_car.stop()
