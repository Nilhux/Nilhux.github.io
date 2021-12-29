import random

def main():
    def busqueda_lineal(lista, objetivo):
        match = False
        iteraciones = 0
        for element in lista:
            iteraciones += 1
            if element == objetivo:
                match = True
                break
        print(f"Iteraciones busqueda lineal: {iteraciones}")
        return match


    def busqueda_binaria(lista,comienzo, final, objetivo,iteraciones=0):
        iteraciones += 1
        if comienzo > final:
            return (False,iteraciones)

        medio = (comienzo + final)//2


        if lista[medio] == objetivo:
            return (True,iteraciones)

        elif lista[medio] < objetivo:
            return busqueda_binaria(lista,medio + 1,final,objetivo,iteraciones)
        elif lista[medio] > objetivo:
            return busqueda_binaria(lista,comienzo,medio - 1,objetivo,iteraciones)
        return iteraciones


    def ordenamiento_de_burbuja(lista):
        n = len(lista)

        for i in range(n):
            for j in range(0, n - i - 1):
                if lista[j] > lista[j + 1]:
                    lista[j],lista[j + 1] = lista[j + 1],lista[j]
        return lista

    def ordenamiento_por_mezcla(lista):
        if len(lista) > 1:
            medio = len(lista) // 2
            izquierda = lista[:medio]
            derecha = lista[medio:]

            ordenamiento_por_mezcla(izquierda)
            ordenamiento_por_mezcla(derecha)

            i = 0
            j = 0
            k = 0

            while i < len(izquierda) and j < len(derecha):
                if izquierda[i] < derecha[j]:
                    lista[k] = izquierda[i]
                    i += 1
            else:
                lista[k] = derecha[j]
                j += 1
            k += 1

            while i < len(izquierda):
                lista[k] = izquierda[i]
                i += 1
                k += 1
            while j < len(derecha):
                lista[k] = derecha[j]
                j += 1
                k += 1

        return lista


    tamano_de_lista = int(input("Tamaño de la lista: "))
    objetivo = int(input("Que numero quieres encontrar?: "))

    lista = [random.randint(0,500) for i in range(tamano_de_lista)]

    print(lista)
    lista_ordenada = ordenamiento_de_burbuja(lista)
    print(lista_ordenada)

    encontrado = busqueda_lineal(lista_ordenada,objetivo)
    (encontrado2,iteraciones2) = busqueda_binaria(lista_ordenada, 0 , len(lista), objetivo)

    print(f"Iteraciones busqueda binaria: {iteraciones2} ")
    print(f'El numero {objetivo} {"esta" if encontrado else" no esta"} en la lista')


if __name__ == "__main__":
    main()