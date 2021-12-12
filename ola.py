from functools import reduce

def main():
#     DATA = [
#     {
#         'name': 'Facundo',
#         'age': 72,
#         'organization': 'Platzi',
#         'position': 'Technical Coach',
#         'language': 'python',
#     },
#     {
#         'name': 'Luisana',
#         'age': 33,
#         'organization': 'Globant',
#         'position': 'UX Designer',
#         'language': 'javascript',
#     },
#     {
#         'name': 'Héctor',
#         'age': 19,
#         'organization': 'Platzi',
#         'position': 'Associate',
#         'language': 'ruby',
#     },
#     {
#         'name': 'Gabriel',
#         'age': 20,
#         'organization': 'Platzi',
#         'position': 'Associate',
#         'language': 'javascript',
#     },
#     {
#         'name': 'Isabella',
#         'age': 30,
#         'organization': 'Platzi',
#         'position': 'QA Manager',
#         'language': 'java',
#     },
#     {
#         'name': 'Karo',
#         'age': 23,
#         'organization': 'Everis',
#         'position': 'Backend Developer',
#         'language': 'python',
#     },
#     {
#         'name': 'Ariel',
#         'age': 32,
#         'organization': 'Rappi',
#         'position': 'Support',
#         'language': '',
#     },
#     {
#         'name': 'Juan',
#         'age': 17,
#         'organization': '',
#         'position': 'Student',
#         'language': 'go',
#     },
#     {
#         'name': 'Pablo',
#         'age': 32,
#         'organization': 'Master',
#         'position': 'Human Resources Manager',
#         'language': 'python',
#     },
#     {
#         'name': 'Lorena',
#         'age': 56,
#         'organization': 'Python Organization',
#         'position': 'Language Maker',
#         'language': 'python',
#     },
# ]
#     all_python_devs = list(filter(lambda worker: worker["language"] == "python",DATA))
#     all_python_devs = list(map(lambda worker: worker["name"],all_python_devs))

#     all_platzi_workers = list(filter(lambda worker: worker["organization"] == "Platzi",DATA))
#     all_platzi_workers = list(map(lambda worker: worker["name"],all_platzi_workers))

#     adults = [worker["name"] for worker in DATA if worker["age"] > 20]

#     old_people = [worker["name"] for worker in DATA if worker["age"] >= 50]
#     for name in old_people:
#         print(name)

#     limit =range(2,1000)
#     cousins = []

#     for i in limit:
#         for j in limit:
#             if i < j:
#                 break
#             elif i % j == 0 and i != j:
#                 break
#             elif i == j:
#                 cousins.append(i)
#                 break
         
#     print(cousins)


    # def divisors():
    #     num = int(input("Escoge un numero: "))
    #     divisors = []
    #     if num < 0:
    #         raise ValueError

    #     for i in range(1, num + 1):
    #         if num % i == 0:
    #             divisors.append(i)
    #     return divisors

    # try:
    #     print(divisors())
    # except ValueError:
    #     print("Debes ingresar un numero ")

    def read():
        pass

    def write():
        pass



if __name__ == "__main__":
    main()
 