package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiante2025;

public interface EstudianteRepositorio extends JpaRepository<Estudiante2025, Integer> {
}
