from modelos.usuario import Usuario
from datos.usuario_dao import UsuarioDao

def mostrar_menu():
    while True:
        print("\n--- Menú de Usuarios ---")
        print("1. Listar usuarios")
        print("2. Agregar usuario")
        print("3. Actualizar usuario")
        print("4. Eliminar usuario")
        print("5. Salir")

        opcion = input("Selecciona una opción: ")

        if opcion == '1':
            usuarios = UsuarioDao.seleccionar()
            for u in usuarios:
                print(u)
        elif opcion == '2':
            username = input("Username: ")
            password = input("Password: ")
            usuario = Usuario(username=username, password=password)
            UsuarioDao.insertar(usuario)
        elif opcion == '3':
            id_usuario = int(input("ID del usuario a actualizar: "))
            username = input("Nuevo username: ")
            password = input("Nuevo password: ")
            usuario = Usuario(id_usuario, username, password)
            UsuarioDao.actualizar(usuario)
        elif opcion == '4':
            id_usuario = int(input("ID del usuario a eliminar: "))
            usuario = Usuario(id_usuario=id_usuario)
            UsuarioDao.eliminar(usuario)
        elif opcion == '5':
            print("Saliendo...")
            break
        else:
            print("Opción inválida.")