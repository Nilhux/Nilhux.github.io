import math
import random

def main():
#     numeroRandom = random.randint(1, 100)
#     vidas = 7
#     numeroElegido = int(input(f"""
#     Bienvenido al juego
#     Tienes {vidas} vidas
#     Elige un numero del 1 al 100: """))


#     while numeroElegido != numeroRandom:
#         vidas = vidas - 1
#         if vidas == 0:
#             print("Perdiste")
#             break

#         if numeroElegido < numeroRandom:
#             print(f"""    Busca un numero mas grande

#     Tienes {vidas} vidas""")
#             numeroElegido = int(input("    Elige otro numero: "))
#         elif numeroElegido > numeroRandom:
#             print(f"""    Busca un numero mas pequeno

#     Tienes {vidas} vidas""")
#             numeroElegido = int(input("    Elige otro numero: "))
    
#     if numeroElegido == numeroRandom:
#         print("Ganaste!")

# poblacion_paises = {
#     "Argentina": 44_937_712

# }
    def factorial(n):
        """Calcula el factorial de n
        
        n int > 0
        return n!
        """
        if n == 1:
            return 1

        return n * factorial(n - 1)

    n = int(input("Escribe un numero entero: "))
    print(factorial(n))

if __name__ == "__main__":
    main()
 