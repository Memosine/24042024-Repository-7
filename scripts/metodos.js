//const { Activity, Repository } = require("./index");

const contenedorTarjetas = document.querySelector(".contenedorTarjetas");
const actividadesDiv = document.getElementById("actividades");
const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", agregarActividad);
const repo = new Repository();

function agregarActividad(event) {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();

  // Estoy obteniendo los valores del formulario
  const seccion = formulario.seccion.value;
  const otraSeccion = formulario.otraSeccion.value;
  const titulo = formulario.titulo.value;
  const contenido = formulario.contenido.value;
  const urlImg = formulario.urlImg.value;

  // Validar que los campos no estén vacíos
  if (
    seccion === "escoger" ||
    !titulo.trim() ||
    !contenido.trim() ||
    !urlImg.trim()
  ) {
    alert("Por favor diligenciar todos los campos.");
    return;
  }
  // Estoy Agregando la actividad al repositorio

  const mensaje = repo.addActivity(
    titulo,
    contenido,
    urlImg,
    seccion,
    otraSeccion
  );

  formulario.reset();

  mostrarActividades(repo);
  console.log(mensaje);
}

function mostrarActividades(repo) {
  // Limpiar el contenedor de tarjetas antes de mostrar las actividades
  contenedorTarjetas.innerHTML = "";

  const actividades = repo.getAllActivities();

  actividades.forEach((actividad) => {
    // Crear el contenedor principal de la actividad
    const actividadDiv = document.createElement("div");
    actividadDiv.classList.add("tarjeta");

    // Crear los elementos de la actividad
    const tituloElement = document.createElement("h2");
    tituloElement.textContent = actividad.titulo;

    const contenidoElement = document.createElement("p");
    contenidoElement.textContent = actividad.contenido;

    const imgElement = document.createElement("img");
    imgElement.src = actividad.urlImg;

    const seccionElement = document.createElement("p");
    seccionElement.textContent = `Sección: ${actividad.seccion}`;

    const otraSeccionElement = document.createElement("p");
    otraSeccionElement.textContent = `Otra sección: ${actividad.otraSeccion}`;

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("eliminar");
    botonEliminar.textContent = "Eliminar Actividad";

    // Agregar event listener al botón de eliminar
    botonEliminar.addEventListener("click", function () {
      // Llamar a la función eliminarActividad con el ID de la actividad
      eliminarActividad(repo, actividad.id);
    });

    // Agregar los elementos al contenedor de la actividad
    actividadDiv.appendChild(tituloElement);
    actividadDiv.appendChild(contenidoElement);
    actividadDiv.appendChild(imgElement);
    actividadDiv.appendChild(seccionElement);
    actividadDiv.appendChild(otraSeccionElement);
    actividadDiv.appendChild(botonEliminar);

    // Agregar el contenedor de la actividad al contenedor de tarjetas
    contenedorTarjetas.appendChild(actividadDiv);
  });
}

// Función para eliminar una actividad
function eliminarActividad(repo, id) {
  repo.deleteActivityById(id);
  mostrarActividades(repo.getAllActivities());
}
