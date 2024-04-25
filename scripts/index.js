class Activity {
  constructor(id, titulo, contenido, urlImg, seccion, otraSeccion) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.urlImg = urlImg;
    this.seccion = seccion;
    this.otraSeccion = otraSeccion;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.contador = 1;
  }

  getAllActivities() {
    return this.activities;
  }

  addActivity(titulo, contenido, urlImg, seccion, otraSeccion) {
    const nuevaActividad = new Activity(
      this.contador,
      titulo,
      contenido,
      urlImg,
      seccion,
      otraSeccion
    );
    this.activities.push(nuevaActividad);
    this.contador++;
    return alert("La actividad fue creada con éxito.");
  }

  deleteActivityById(id) {
    const index = this.activities.findIndex((activity) => activity.id === id);
    if (index !== -1) {
      this.activities.splice(index, 1);
      return alert("Actividad eliminada exitosamente");
    } else {
      return alert("No se encontró ninguna actividad con ese ID");
    }
  }

  eliminarActividad(id) {
    const mensaje = this.deleteActivityById(id);
    if (mensaje === "Actividad eliminada exitosamente") {
      alert(mensaje);

      mostrarActividades(this.getAllActivities());
    } else {
      alert("Error al eliminar actividad: " + mensaje);
    }
  }
}
//Esta es una prueba de superviviencia//
// module.exports = {
//   Activity,
//   Repository,
// };
