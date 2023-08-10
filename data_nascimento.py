
def Idade():
    while True:
        try:
            ano = int(input("Digite o ano de nascimento (entre 1922 e 2021): "))
            if 1922 <= ano <= 2021:
                return ano
            else:
                print("Ano fora do intervalo permitido. Tente novamente.")
        except ValueError:
            print("Entrada inválida. Digite um número válido.")

def Calcular():
    nome = input("Digite o seu nome completo: ")
    ano_nascimento = Idade()

    ano_atual = 2023
    idade = ano_atual - ano_nascimento

    print(f"Nome: {nome}")
    print(f"Idade: {idade} anos")

if __name__ == "__main__":
    Calcular()
