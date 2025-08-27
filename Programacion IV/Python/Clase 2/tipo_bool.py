# Bool tiene los valores True y False
# Los tipos numéricos: 0 es False y cualquier otro valor es True

valor = 0.0
resultado = bool(valor)
print(f"\nValor: {valor}, Resultado: {resultado}")  # se muestra False ya que el valor es 0

valor = -1.0
resultado = bool(valor)
print(f"\nValor: {valor}, Resultado: {resultado}\n") # Muestra true ya que el valor es distinto de 0


# String tiene los valores True y False
# El tipo String:  "" es False, cualquier otro valor es True

valor = ""
resultado = bool(valor)
print(f"\nValor: {valor}, Resultado: {resultado}")  # Se muestra False ya que el valor es ""

valor = "Hola"
resultado = bool(valor)
print(f"\nValor: {valor}, Resultado: {resultado}\n") # Muestra true ya que el valor es distinto de ""


# Tipo colecciones: True si tiene al menos un elemento dentro, False si no tiene ningun elemento

# Lista
valor = []
resultado = bool(valor)
print(f"\nValor de una lista vacia: {valor}, Resultado: {resultado}")  # Se muestra False ya que la lista esta vacia

valor = [2, 3, 4]
resultado = bool(valor)
print(f"\nValor de una lista con elementos: {valor}, Resultado: {resultado}\n") # Muestra true ya que la lista tiene elementos

# Tuplas
valor = ()
resultado = bool(valor)
print(f"\nValor de una tupla vacia: {valor}, Resultado: {resultado}")  # Se muestra False ya que la lista esta vacia

valor = (5,)
resultado = bool(valor)
print(f"\nValor de una tupla con elementos: {valor}, Resultado: {resultado}\n") # Muestra true ya que la lista tiene elementos

# Diccionarios
valor = {}
resultado = bool(valor)
print(f"\nValor de un diccionario vacio: {valor}, Resultado: {resultado}")  # Se muestra False ya que el diccionario esta vacio

valor = {"Nombre": "Juan", "Apellido": "Perez"}
resultado = bool(valor)
print(f"\nValor de un diccionario con elementos: {valor}, Resultado: {resultado}\n") # Muestra true ya que el diccionario tiene elementos

# Sentencias de Control con Bool

if bool(""):
    print("\nIf: Regresa verdadero")
else:
    print("\nIf: Regresa falso")
    
if bool("Hola"):
    print("\nIf: Regresa verdadero\n")
else:
    print("\nIf: Regresa falso\n")


# Ciclos

variable = 17
while variable:
    print("\nCiclos: Regresa verdadero")
    break
else:
    print("\nCiclos: Regresa falso\n")