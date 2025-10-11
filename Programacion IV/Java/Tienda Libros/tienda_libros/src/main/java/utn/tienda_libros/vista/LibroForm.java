package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.modelo.Libro;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.JTableHeader;
import java.awt.*;

@Component
public class LibroForm extends JFrame {
LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton eliminarButton;
    private JButton modificarButton;
    private JButton agregarButton;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroForm(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());
    }

    private void iniciarForma(){
    setContentPane(panel);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
    setSize(900, 700);
    personalizarTabla();

    // Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getHeight()/2);
        setLocation(x, y);
    }

    private void agregarLibro(){
        //Leer los valores del formulario
        if(libroTexto.getText().isEmpty()){
            mostrarMensaje("Ingrese el nombre del libro, por favor.");
            libroTexto.requestFocusInWindow();
            return;
        }
        var nombreLibro = libroTexto.getText();
        var autor = autorTexto.getText();
        if(precioTexto.getText().isEmpty()){
            mostrarMensaje("Ingrese el precio del libro, por favor.");
            precioTexto.requestFocusInWindow();
            return;
        }
        var precio = Double.parseDouble(precioTexto.getText());
        if(existenciasTexto.getText().isEmpty()){
            mostrarMensaje("Ingrese la cantidad de existencias, por favor.");
            existenciasTexto.requestFocusInWindow();
            return;
        }
        var existencias = Integer.parseInt(existenciasTexto.getText());
        //Crear el libro
        var libro = new Libro(null, nombreLibro, autor, precio, existencias);
        //libro.setNombreLibro(nombreLibro);
        //libro.setAutor(autor);
        //libro.setPrecio(precio);
        //libro.setExistencias(existencias);
        //Guardar el libro en la base de datos
        this.libroServicio.guardarLibro(libro);
        if(libro != null){
            mostrarMensaje("El libro se ha creado con exito.");
            limpiarFormulario();
            listarLibros();

        } else {
            mostrarMensaje("Ha ocurrido un error al crear el libro.");
        }
    }

    private void limpiarFormulario(){
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
        libroTexto.requestFocusInWindow();
    }

    private void mostrarMensaje(String mensaje){
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {
        this.tablaModeloLibros = new DefaultTableModel(0,5);
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);

        //Instanciar el objeto de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);
        listarLibros();
    }

    private void personalizarTabla() {
        // Altura de filas
        tablaLibros.setRowHeight(28);

        // Fuente general
        tablaLibros.setFont(new Font("Poppins", Font.PLAIN, 13));

        // Encabezado estilizado
        JTableHeader header = tablaLibros.getTableHeader();
        header.setFont(new Font("Poppins", Font.BOLD, 14));
        header.setBackground(new Color(245, 241, 227)); // Crema suave
        header.setForeground(new Color(60, 60, 60));    // Texto oscuro

        // Alineación centrada para columnas numéricas
        DefaultTableCellRenderer centerRenderer = new DefaultTableCellRenderer();
        centerRenderer.setHorizontalAlignment(SwingConstants.CENTER);
        tablaLibros.getColumnModel().getColumn(0).setCellRenderer(centerRenderer); // Id
        tablaLibros.getColumnModel().getColumn(1).setCellRenderer(centerRenderer); // Libro
        tablaLibros.getColumnModel().getColumn(2).setCellRenderer(centerRenderer); // Autor
        tablaLibros.getColumnModel().getColumn(3).setCellRenderer(centerRenderer); // Precio
        tablaLibros.getColumnModel().getColumn(4).setCellRenderer(centerRenderer); // Existencias

        // Ancho sugerido para columnas
        tablaLibros.getColumnModel().getColumn(1).setPreferredWidth(180); // Libro
        tablaLibros.getColumnModel().getColumn(2).setPreferredWidth(140); // Autor
    }

    private void listarLibros(){
        // limpiar la tabla.
        tablaModeloLibros.setRowCount(0);
        //Obtener los libros desde la base de datos
        var libros = libroServicio.listarLibros();
        //Recorrer la lista de libros y agregarlos a la tabla
        libros.forEach(libro -> {
            //Creamos un registro para la tabla
            Object[] renglonLibro = {
                    libro.getIdLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias(),
            };
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
