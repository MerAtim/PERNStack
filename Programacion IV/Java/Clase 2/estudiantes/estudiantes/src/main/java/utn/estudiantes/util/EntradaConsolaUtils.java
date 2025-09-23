package utn.estudiantes.util;

import java.util.Scanner;

    public class EntradaConsolaUtils {

        private static final Scanner consola = new Scanner(System.in);

        public static Integer leerNumero(String mensaje) {
            while (true) {
                System.out.print(mensaje);
                String input = consola.nextLine();
                if (input.isEmpty()) {
                    System.out.println("No ingresaste nada. Intentá de nuevo.");
                    continue;
                }
                try {
                    return Integer.parseInt(input);
                } catch (NumberFormatException e) {
                    System.out.println("Entrada inválida. Debe ser un número.");
                }
            }
        }

        public static String leerTexto(String mensaje) {
            while (true) {
                System.out.print(mensaje);
                String input = consola.nextLine();
                if (!input.isBlank()) return input;
                System.out.println("Este campo no puede estar vacío.");
            }
        }
        public static String leerEmail(String mensaje) {
            while (true) {
                System.out.print(mensaje);
                String email = consola.nextLine().trim();
                if (email.isEmpty()) {
                    System.out.println("El email no puede estar vacío.");
                    continue;
                }
                if (!email.contains("@") || !email.endsWith(".com")) {
                    System.out.println("El email debe contener '@' y terminar en '.com'. Ejemplo: usuario@dominio.com");
                    continue;
                }
                return email;
            }
        }

        public static String leerConfirmacion(String mensaje) {
            System.out.print(mensaje);
            return consola.nextLine().trim().toLowerCase();
        }

        public static String leerTelefono(String mensaje) {
            while (true) {
                System.out.print(mensaje);
                String telefono = consola.nextLine().trim();
                if (!telefono.matches("\\d{10,13}")) {
                    System.out.println(" El teléfono debe tener entre 10 y 13 dígitos numéricos.");
                    continue;
                }
                if (telefono.startsWith("00") || telefono.startsWith("0")) {
                    System.out.println("El teléfono no puede comenzar con '0'.");
                    continue;
                }
                return telefono;
            }
        }

        public static String leerNombreOApellido(String mensaje) {
            while (true) {
                System.out.print(mensaje);
                String input = consola.nextLine().trim();
                if (input.isEmpty()) {
                    System.out.println("Este campo no puede estar vacío.");
                    continue;
                }

                if (!input.matches("[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+")) {
                    System.out.println("Solo se permiten letras y espacios. No ingreses números ni símbolos.");
                    continue;
                }
                return input;
            }
        }
    }