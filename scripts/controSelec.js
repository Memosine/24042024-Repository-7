function cargarSegundaLista() {
  const seccionSeleccionada = document.getElementById("seccionTarjetas").value;
  const otraSeccionSelect = document.getElementById("otraSeccion");

  // Limpiar opciones previas del segundo select
  otraSeccionSelect.innerHTML = "";

  switch (seccionSeleccionada) {
      case "resumen":
          agregarOpciones(["Perfil Corto"], otraSeccionSelect);
          break;
      case "experiencia":
          agregarOpciones(["Experiencia mayor a 1 año"], otraSeccionSelect);
          break;
      case "actividades":
          agregarOpciones(["Actividades Laborales Recurrentes"], otraSeccionSelect);
          break;
      case "tiempoLibre":
          agregarOpciones(["Deportes"], otraSeccionSelect);
          break;
      default:
          // Manejar cualquier otro caso si es necesario
          break;
  }
}

function agregarOpciones(opciones, select) {
  opciones.forEach(opcion => {
      const option = document.createElement("option");
      option.text = opcion;
      option.value = opcion;
      select.add(option);
  });
}



