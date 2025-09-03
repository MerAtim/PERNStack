# help(str.capitalize)

mensaje1 = 'hola mundo'

mensaje2 = mensaje1.capitalize()

print(f'El mensaje 1 es: {mensaje1}, id: {id(mensaje1)}')
print(f'El mensaje 2 es: {mensaje2}, id: {id(mensaje2)}')

mensaje1 += ' adios'

print(f'El mensaje 1 ahora es: {mensaje1}, id: {id(mensaje1)}')