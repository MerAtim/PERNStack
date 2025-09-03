#help(str.join)

tupla_str = ("Hola", "alumnos", "Tecnicatura", "Universitaria")
mensaje = " ".join(tupla_str)
print(mensaje)

lista_cursos = ["Python", "Java", "Angular", "Spring"]
mensaje = ", ".join(lista_cursos)
print(mensaje)

cadena = "Hola mundo"
mensaje = ".".join(cadena)
print(mensaje)

diccionario = {"nombre": "Juan", "apellido": "Perez", "edad": "25"}
llaves = "-".join(diccionario.keys())
valores =  "|".join(diccionario.values())
print(f"Llave: {llaves} Valor: {valores}. Tipo de llaves: {type(llaves)} y tipo de valores: {type(valores)}")