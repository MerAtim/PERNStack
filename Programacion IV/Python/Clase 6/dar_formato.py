# Dar formato a un string

nombre = "Mercedes"
edad = 37
mensaje_con_formato = "Mi nombre es %s y tengo %d años" %(nombre, edad) # Parametro posicional %s apunta a un tipo de dato string.format(nombre) y %d a un entero.

# Creamos una tupla
persona = ('Carla', 'Gomez', 5000.00)
mensaje_con_formato = 'Hola %s %s, tu sueldo es $%.2f' % (persona[0], persona[1], persona[2])
print("1",mensaje_con_formato)
mensaje_con_formato = 'Hola %s %s, tu sueldo es $%.2f' #% (persona[0], persona[1], persona[2])
print("\n2",mensaje_con_formato %persona)
mensaje_con_formato = 'Hola %s %s, tu sueldo es $%.2f' % persona
print("\n3",mensaje_con_formato)

nombre= 'Juan'
edad = 19
sueldo = 3000
mensaje_con_formato = 'Nombre {} Edad {} Sueldo $ {:.2f}'.format(nombre, edad, sueldo)
print("\n1)\n", mensaje_con_formato)

mensaje = 'Nombre {0}, Edad {1}, Sueldo $ {2: .2f}'
print("2)\n",mensaje.format(nombre, edad, sueldo))

mensaje = 'Nombre {n}, Edad {e}, Sueldo $ {s:.2f}'.format(n = nombre, e = edad, s = sueldo)
print("3)\n", mensaje)

diccionario = {'nombre':'Ivan', 'edad': 35, 'sueldo': 8000 }
mensaje = 'Nombre {persona[nombre]}, edad {persona[edad]} y sueldo es $ {persona[sueldo]:.2f}'.format(persona = diccionario)
print("\n", mensaje)