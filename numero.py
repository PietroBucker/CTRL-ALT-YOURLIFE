def mostrarNumero():
    while True:
        try:
            numero = int(input("Escreva um número menor que 100 divisível por 2 e 3: "))
            if numero < 100:
                if numero > 0:
                    if numero % 2 == 0 and numero % 3 == 0:
                        print("O número que você escolheu foi:", numero)
                        break
                    else:
                        print("Número não é divisível por 2 e 3")
                else:
                    print("Número não é maior que 0")
            else:
                print("Número não é menor que 100")
        except ValueError:
            print("Precisa digitar um número inteiro")

mostrarNumero()
 