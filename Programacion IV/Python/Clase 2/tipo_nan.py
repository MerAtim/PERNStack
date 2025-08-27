# Float(NaN Not a Number)

a = float('Nan') # Se puede usar mayusculas o minusculas
b = float('nan')
c = float("2.5")  # El string se puede usar para asignar un valor de tipo float
print (type(a))
print (type(b))
print (type(c))
print (f"El valor de la variable es {a}")
print (f"El valor de la variable es {b}")
print(f"El valor de la variable es {c}")

# Modulo Math

import math
print(f"Es de tipo NaN? {math.isnan(a)}")
print(f"Es de tipo NaN? {math.isnan(b)}")
print(f"Es de tipo NaN? {math.isnan(c)}")

# Modulo decimal

from decimal import Decimal
a = Decimal('NaN') # Usamos el constructor de la clase decimal para asignar un valor de tipo float
print(f"Es de tipo NaN? {math.isnan(a)}")