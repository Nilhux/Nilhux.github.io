import random
import os

def choose_word():
    words = []
    with open("./names.txt","r", encoding="utf-8")as n:
        for word in n:
            words.append(word)
    enumeration  = list(enumerate(words))
    selection = random.randrange(enumeration[0][0],enumeration[-1][0])
    word = None
    for i in enumeration:
        if i[0] == selection:
            word = i[1]
    return word

def main():
    os.system("clear")
    word = list(choose_word())
    word.pop(-1)
    user_word = list("_"*len(word))
    lifes = 10
    difficulty_text = "NORMAL"
    difficulty = input("""Adivina la palabra!

    1 - facil
    2 - normal
    3 - dificil
    
Escoge un nivel de dificultad: """)
    if difficulty == "1":
        lifes = 15
        difficulty_text = "FACIL"
    elif difficulty == "2":
        lifes = 10
    elif difficulty == "3":
        difficulty_text = "DIFICIL"
        lifes = 5

    def print_text():
        os.system("clear")
        hidden_word = " ".join(user_word)
        print(f"""Adivina la palabra! ({difficulty_text})
        
        {hidden_word}""")
        if lifes == 1:
            print(f"Tienes {lifes} intento")
        else:    
            print(f"Tienes {lifes} intentos")

    while user_word != word:
        if lifes == 0:
            break
        print_text()
        letter = input("Escribe una letra: ")

        if letter in word:
            for i in range(len(word)):
                if word[i] == letter:
                    user_word[i] = letter
        else:
            lifes = lifes - 1 
    if lifes == 0:
        print_text()
        print("""
Perdiste""")
    else:
        print_text()
        print("""
Ganaste!""")
if __name__ == "__main__":
    main()