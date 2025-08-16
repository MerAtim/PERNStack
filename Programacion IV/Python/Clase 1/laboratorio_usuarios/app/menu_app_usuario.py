from modelos.usuario import Usuario
from datos.usuario_dao import UsuarioDao
from utilidades.logger_base import logger
from rich.console import Console
from rich.panel import Panel
from rich.text import Text
from rich import box



def mostrar_menu():
    console = Console()

    while True:
        titulo = Text("🧠 Menú Principal", style="bold magenta", justify="center")
        opciones_texto = """\
        [bold cyan]1.[/] 📋 Listar usuarios
        [bold cyan]2.[/] ➕ Agregar usuario
        [bold cyan]3.[/] 🔄 Actualizar usuario
        [bold cyan]4.[/] ❌ Eliminar usuario
        [bold cyan]5.[/] 🚪 Salir
        """
        panel = Panel(opciones_texto, title=titulo, subtitle="Selecciona una opción", box=box.DOUBLE, border_style="bright_blue")
        console.print(panel)

        opcion = input("👉 Ingrese una opción (1-5): ").strip()

        if opcion == '1':
            try:
                usuarios = UsuarioDao.seleccionar()
                print("\n--- Usuarios ---")
                for usuario in usuarios:
                    print(f"\n {usuario}")
                logger.info("Usuarios listados correctamente\n")
            except Exception as e:
                print("Error al listar usuarios:", e)

        elif opcion == '2':
            try:
                username = input("\nIngrese el username: ")
                password = input("\nAhora ingrese el password: ")
                usuario = Usuario(username=username, password=password)
                UsuarioDao.insertar(usuario)
                logger.info("Usuario agregado correctamente")
                print("\nUsuario agregado correctamente\n")
            except Exception as e:
                print("Error al agregar usuario:", e)

        elif opcion == '3':
            try:
                id_usuario_var = int(input("Ingrese el ID del usuario a actualizar: "))
                usuarios = UsuarioDao.seleccionar()
                usuario_actual = next((u for u in usuarios if u.id_usuario == id_usuario_var), None)

                if not usuario_actual:
                    print("No se encontró el usuario con ese ID.")
                    continue

                print("\n¿Qué desea modificar?")
                print("1. Username")
                print("2. Password")
                print("3. Ambos")
                opcion_modificacion = input("Seleccione una opción (1/2/3): ")

                username_var = None
                password_var = None

                if opcion_modificacion == '1':
                    username_var = input("Ingrese el nuevo nombre de usuario: ")
                elif opcion_modificacion == '2':
                    password_var = input("Ingrese la nueva contraseña: ")
                elif opcion_modificacion == '3':
                    username_var = input("Ingrese el nuevo nombre de usuario: ")
                    password_var = input("Ingrese la nueva contraseña: ")
                else:
                    print("Opción inválida. No se realizó ninguna modificación.")
                    continue

                nuevo_username = username_var if username_var is not None else usuario_actual.username
                nuevo_password = password_var if password_var is not None else usuario_actual.password

                usuario = Usuario(id_usuario=id_usuario_var, username=nuevo_username, password=nuevo_password)
                usuario_actualizado = UsuarioDao.actualizar(usuario)

                logger.info(f"Usuario actualizado correctamente: {usuario_actualizado}")
                print("\n✅ Usuario actualizado correctamente\n")

            except Exception as e:
                print("❌ Error al actualizar usuario:", e)
                logger.error(f"Error al actualizar usuario: {e}")

        elif opcion == '4':
            try:
                id_usuario_var = int(input("Ingrese el ID del usuario a eliminar: "))
                usuario = Usuario(id_usuario=id_usuario_var)
                usuario_eliminado = UsuarioDao.eliminar(usuario)
                logger.info(f"Usuario eliminado correctamente {usuario_eliminado}")
                print("Usuario eliminado\n")
            except Exception as e:
                print("Error al eliminar usuario:", e)

        elif opcion == '5':
            logger.info("Saliendo...")
            print("👋 Saliendo de la aplicación. Hasta pronto!")
            break

        else:
            print("❌ Opción inválida. Intenta de nuevo.")