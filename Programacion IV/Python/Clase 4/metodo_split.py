# help(str.split) # Este metodo nos devuelve una lista con los elementos separados por el caracter que le pongamos como argumento de la funcion split()

cursos = "Java JavaScript Node Python Diseño"
lista_cursos = cursos.split()
print(lista_cursos)
print(type(lista_cursos))

cursos_separados_coma = "Java,JavaScript,Node,Python,Spring"
lista_cursos =  cursos_separados_coma.split(",", 2) # los elementos separados por el caracter que le pongamos como argumento de la funcion split()
print(lista_cursos)
print(len(lista_cursos))