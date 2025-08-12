import logging

logger = logging.getLogger("laboratorio_usuarios")  # le damos nombre al logger
logger.setLevel(logging.DEBUG)  # le damos nivel de log, debe ser mayor al nivel de log de la libreria que usamos

# Configuramos el handler para que se guarde en un archivo
file_handler = logging.FileHandler('laboratorio_usuarios.log')
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s') # el formato de salida tendra fecha, nivel y mensaje.
file_handler.setFormatter(formatter)

# Evitar duplicados
if not logger.hasHandlers():  # si no tiene handler, agrega el handler
    logger.addHandler(file_handler)