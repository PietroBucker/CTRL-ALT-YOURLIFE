a = float(input("Primeiro numero:"))
b = float(input("Segundo numero:"))
operacao = input("Digite a operacao(+,-,* ou /):")
if operacao == "-":
    total = a - b
elif operacao == "+":
    total = a + b
elif operacao == "*":
    total = a * b
elif operacao == "/":
    total = a / b
else:
    print("Operacao invalida")
    total = 0
print("Resultado_final!: ", total)