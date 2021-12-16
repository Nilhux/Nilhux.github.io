class Carro:
    def __init__(self,año,marca,color,motor):
        self.__año = año
        self.__marca = marca
        self.__color = color
        self.__motor = motor

    @property
    def marca(self):
        return self.__marca

    @marca.setter
    def marca(self,nueva_marca):
        self.__marca = nueva_marca


bmw_generic_car = Carro(año="2025",marca="BMW",color="negro",motor="BMW motor nose jajaj")
print(bmw_generic_car.marca)


class Carro_electrico(Carro):
    def __init__(self, año, marca, color, bateria,motor):
        super().__init__(año, marca, color,motor)
        self.bateria = bateria

S_model = Carro_electrico(año="2012",marca="Tesla",bateria="500v",color="rojo",motor="mcdonalds motor")

print(S_model.__marca)
