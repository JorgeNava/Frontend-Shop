contactos = [
  {
   "nombre": "Gustavo",
   "correo": "gustavo.garcia@edu.uag.mx",
   "telefono": 5555555
   },
    {
   "nombre": "Jorge",
   "correo": "jorge.nava@edu.uag.mx",
   "telefono": 44444444
   },
    {
   "nombre": "Pepe",
   "correo": "pepe.perez@edu.uag.mx",
   "telefono": 333333
   },
   {
   "nombre": "Juan",
   "correo": "juan.lopez@edu.uag.mx",
   "telefono": 111111111
   },
    {
   "nombre": "Maria",
   "correo": "maria.alvarez@edu.uag.mx",
   "telefono": 22222222
   }
]

decision = -1

while decision != 4:

    print("""\n=== Menu de agenda===\n
    1-Agregar contactos
    2-Ver contactos
    3-Modificar un contacto
    4-Salir\n""")

    decision = int(input("Que desea hacer?(Ingrese el numero de la opcion)\n"))

    if decision == 1:
        nombre = input("Ingrese el nombre del nuevo contacto: ")
        correo = input("Ingrese el correo del nuevo contacto: ")
        telefono = int(input("Ingrese el telefono del nuevo contacto: "))
        contactos.append({"nombre":nombre,"correo":correo,"telefono":telefono})
    elif decision == 2:
        print("Lista de contactos\n")
        for contacto in contactos:
            print("Nombre: " + contacto['nombre'])
            print("Correo: " + contacto['correo'])
            print("Telefono: " + str(contacto['telefono']))
            print()
    elif decision == 3:
        correoABuscar = input("Ingrese el correo del contacto que desea modificar: ")
        index = 0
        for contacto in contactos:
            if contacto["correo"] == correoABuscar:
                contacto["nombre"] = input("Ingrese el nuevo nombre del contacto: ")
                contacto["correo"] = input("Ingrese el nuevo correo del contacto: ")
                contacto["telefono"] = int(input("Ingrese el nuevo telefono del contacto: "))
    elif decision == 4:
        continue
    else:
        print("Opcion invalida, seleccione una opcion del menu")
        continue    



