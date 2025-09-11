package utn.estudiantes.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "estudiantes2025")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Estudiante2025 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idestudiantes2025;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

    @Override
    public String toString() {
        return "Estudiante: " +
                "id: " + idestudiantes2025 +
                ", nombre: '" + nombre + '\'' +
                ", apellido: '" + apellido + '\'' +
                ", telefono: '" + telefono + '\'' +
                ", email: '" + email + '\'';
    }
}

