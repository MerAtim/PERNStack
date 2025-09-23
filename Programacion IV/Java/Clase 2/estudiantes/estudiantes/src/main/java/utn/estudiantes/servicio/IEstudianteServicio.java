package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiante2025;
import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiante2025> listarEstudiantes();
    public Estudiante2025 buscarEstudiantePorId(Integer idestudiantes2025);
    public void guardarEstudiante(Estudiante2025 estudiante);
    public void eliminarEstudiante(Estudiante2025 estudiante);
}
