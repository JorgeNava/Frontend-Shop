import math 

errorFlag = True
def calculateArea(a, b, op):
    if a < 0 or a < 0:
        return -1
    if op == "T":
        return (float(a) * float(b)) / 2
    elif op == "R":
        return (float(a)) * (float(b))
    elif op == "C":
        return round(a * float(b)**2,2)
    else:
        return -1


decision = -1
if __name__ == '__main__':
    while decision != 'S':
        print("""\n=== Menu===\n
        T - Triangulo
        R - Rectagulo
        C - Circulo
        S - Salir\n""")

        decision = input("Ingrese la primera letra de la figura para calcular su area: ").upper()

        if decision == 'T':
            base = ""
            altura = ""
            while errorFlag != False: 
                base = input("Ingrese la medida de la base: ")
                altura = input("Ingrese la medida de la altura: ")
                if not base.isdigit() or not altura.isdigit():
                    errorFlag = True
                    print("Se detecto un error en los datos, por favor ingrese valores validos")
                else:
                    errorFlag = False    
            print("El area de tu triangulo es " + str(calculateArea(base, altura, decision)) + "\n")
            errorFlag = True
        elif decision == 'R':
            base = ""
            altura = ""
            while errorFlag != False:
                errorFlag = False
                base = input("Ingrese la medida de la base: ")
                altura = input("Ingrese la medida de la altura: ")
                if not base.isdigit() or not altura.isdigit():
                        errorFlag = True
                        print("Se detecto un error en los datos, por favor ingrese valores validos")
                else:
                    errorFlag = False 
            print("El area tu rectangulo es " + str(calculateArea(base, altura, decision)) + "\n")
            errorFlag = True
        elif decision == 'C':
            radio = ""
            while errorFlag != False:
                errorFlag = False
                radio = input("Ingrese el radio del circulo: ")
                if not radio.isdigit():
                            errorFlag = True
                            print("Se detecto un error en los datos, por favor ingrese valores validos")
                else:
                    errorFlag = False 
            print("El area tu circulo es " + str(calculateArea(math.pi, radio, decision)) + "\n" )
            errorFlag = True
        elif decision == 'S':
            print("Saliendo del programa")
            continue
        else:
            print("Opcion invalida, seleccione una opcion del menu")
            continue    



