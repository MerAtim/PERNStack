package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Scanner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import utn.estudiantes.modelo.Estudiante2025;
import utn.estudiantes.servicio.EstudianteServicio;
import utn.estudiantes.util.EntradaConsolaUtils;

import java.util.List;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);
	private static final Scanner consola = new Scanner(System.in);
	String nl = System.lineSeparator();

	public static void main(String[] args) {
				logger.info("Iniciando la aplicación...");
				// Levantar fabrica de Spring
				SpringApplication.run(EstudiantesApplication.class, args);
				logger.info("Aplicación finalizada.");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl + "Ejecutando metodo run de Spring" + nl);
		var salir = false;
		while (!salir) {
			mostrarMenu();
			System.out.print("Elija una opción: ");
			String input = consola.nextLine();
			if (input.isEmpty()) {
				System.out.println("No ingresaste ninguna opción. Por favor, escribí un número.");
				continue;
			}
			try {
				int opcion = Integer.parseInt(input);
				salir = ejecutarOpciones(opcion);
			} catch (NumberFormatException e) {
				System.out.println("Entrada inválida. Por favor, ingresá un número válido.");
			}
			logger.info(nl);
		}
	}

	private void mostrarMenu(){
		logger.info(nl);
		logger.info("""
				***********  Sistema de Estudiantes ***********
				1. Listar Estudiantes
				2. Buscar Estudiante
				3. Agregar Estudiante
				4. Modificar Estudiante
				5. Eliminar Estudiante
				6. Salir
				 """);
	}
	private boolean ejecutarOpciones(int opcion) {
		var salir = false;
		switch (opcion) {
			case 1 -> {
				logger.info("Listando estudiantes: "+nl);
				List<Estudiante2025> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach(estudiante -> logger.info(estudiante.toString() + nl));
			}
			case 2 -> {
				logger.info("Buscando estudiante por ID: "+nl);
				Integer id = EntradaConsolaUtils.leerNumero("Ingrese el ID del estudiante: ");
				try {
					Estudiante2025 estudiante = estudianteServicio.buscarEstudiantePorId(id);
					if (estudiante != null) {
						logger.info("Estudiante encontrado: ");
						logger.info(estudiante + nl);
					} else {
						System.out.println("No se encontró ningún estudiante con el ID " + id);
					}
				} catch (Exception e) {
					System.out.println("Error al buscar estudiante: " + e.getMessage());
				}
			}
			case 3 -> {
				logger.info("Agregar estudiante: "+nl);
				String nombre = EntradaConsolaUtils.leerNombreOApellido("Ingrese el nombre del estudiante: ");
				String apellido = EntradaConsolaUtils.leerNombreOApellido("Ingrese el apellido del estudiante: ");
				String telefono = EntradaConsolaUtils.leerTelefono("Ingrese el teléfono del estudiante: ");
				String email = EntradaConsolaUtils.leerEmail("Ingrese el email del estudiante: ");
				var estudiante = new Estudiante2025();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				try {
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante guardado con éxito: " + estudiante+ nl);
				} catch (Exception e) {
					System.out.println("Error al guardar estudiante: " + e.getMessage());
				}
			}
			case 4 -> {
				logger.info("Modificar estudiante: " + nl);
				Integer id = EntradaConsolaUtils.leerNumero("Ingrese el ID del estudiante a modificar: ");

				try {
					Estudiante2025 estudiante = estudianteServicio.buscarEstudiantePorId(id);
					if (estudiante == null) {
						System.out.println("No se encontró ningún estudiante con el ID " + id);
						break;
					}

					System.out.println("Estudiante actual: " + estudiante.toString());

					boolean modificar = true;
					while (modificar) {
						System.out.println("""
                ¿Qué campo desea modificar?
                1. Nombre
                2. Apellido
                3. Teléfono
                4. Email
                5. Todos
                6. Cancelar
            """);

						int opcionCampo = EntradaConsolaUtils.leerNumero("Seleccione una opción: ");

						switch (opcionCampo) {
							case 1 -> {
								String nuevoNombre = EntradaConsolaUtils.leerNombreOApellido("Ingrese el nuevo nombre: ");
								estudiante.setNombre(nuevoNombre);
								modificar = false;
							}
							case 2 -> {
								String nuevoApellido = EntradaConsolaUtils.leerNombreOApellido("Ingrese el nuevo apellido: ");
								estudiante.setApellido(nuevoApellido);
								modificar = false;
							}
							case 3 -> {
								String nuevoTelefono = EntradaConsolaUtils.leerTelefono("Ingrese el nuevo teléfono: ");
								estudiante.setTelefono(nuevoTelefono);
								modificar = false;
							}
							case 4 -> {
								String nuevoEmail = EntradaConsolaUtils.leerEmail("Ingrese el nuevo email: ");
								estudiante.setEmail(nuevoEmail);
								modificar = false;
							}
							case 5 -> {
								estudiante.setNombre(EntradaConsolaUtils.leerNombreOApellido("Nuevo nombre: "));
								estudiante.setApellido(EntradaConsolaUtils.leerNombreOApellido("Nuevo apellido: "));
								estudiante.setTelefono(EntradaConsolaUtils.leerTelefono("Nuevo teléfono: "));
								estudiante.setEmail(EntradaConsolaUtils.leerEmail("Nuevo email: "));
								modificar = false;
							}
							case 6 -> {
								System.out.println("Modificación cancelada.");
								modificar = false;
							}
							default -> System.out.println("Opción inválida. Intentá de nuevo.");
						}
					}

					if (estudiante != null && estudiante.getNombre() != null) {
						estudianteServicio.guardarEstudiante(estudiante);
						logger.info("Estudiante modificado con éxito: " + estudiante + nl);
					}

				} catch (Exception e) {
					System.out.println("Error al modificar estudiante: " + e.getMessage());
				}
			}
			case 5 -> {
				logger.info("Eliminar estudiante: "+nl);
				Integer id = EntradaConsolaUtils.leerNumero("Ingrese el ID del estudiante a eliminar: ");
				try {
					Estudiante2025 estudiante = estudianteServicio.buscarEstudiantePorId(id);
					if (estudiante == null) {
						System.out.println("No se encontró ningún estudiante con el ID " + id);
						break;
					}
					System.out.println("Estudiante a eliminar: " + estudiante.toString());
					String confirmacion = EntradaConsolaUtils.leerConfirmacion("¿Confirmás la eliminación? (s/n): ");
					if (confirmacion.equals("s")) {
						estudianteServicio.eliminarEstudiante(estudiante);
						logger.info("Estudiante eliminado con éxito." + nl);
					} else {
						System.out.println("Eliminación cancelada.");
					}
				} catch (Exception e) {
					System.out.println("Error al eliminar estudiante: " + e.getMessage());
				}
			}
			case 6 -> {
				logger.info("Saliendo del sistema...");
				salir = true;
			}
			default -> logger.info(" Opción inválida. Intentá de nuevo.");
		}
		return salir;
	}
}