// ============================================
// TITAN ARCHIVES - NAVEGACIÓN PRINCIPAL
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS DEL HTML
    const tarjetas = document.querySelectorAll(".tarjeta-opcion");

    const inicio = document.getElementById("inicio");
    const explorar = document.getElementById("explorar");
    const acerca = document.getElementById("acerca");

    const contenidoInterno = document.getElementById("contenidoInterno");
    const contenidoSeccion = document.getElementById("contenidoSeccion");
    let contenidoOriginalMundo = "";
// ============================================
// HISTORIAL DE NAVEGACIÓN
// ============================================

const historialNavegacion = [];

function navegarA(pantalla) {

    historialNavegacion.push(pantalla);

}

function volverPantalla() {

    if (historialNavegacion.length > 0) {
        historialNavegacion.pop();
    }

    const pantallaAnterior = historialNavegacion[
        historialNavegacion.length - 1
    ];

    if (pantallaAnterior) {
        pantallaAnterior();
    } else {
        document.getElementById("btnVolver").click();
    }

}
    const btnVolver = document.getElementById("btnVolver");

    // CONTENIDO DE CADA SECCIÓN
    const secciones = {

personajes: `
    <h2 class="titulo-interno">PERSONAJES</h2>
    <p>Conoce a los protagonistas y descubre sus historias.</p>

    <div class="row g-4">

        <!-- EXPLORAR PERSONAJES -->
        <div class="col-md-6">
            <div class="tarjeta-interna" data-opcion-personajes="explorar">
                <h3>Explorar personajes</h3>
                <p>Descubre a los personajes más importantes.</p>
            </div>
        </div>

        <!-- RECONOCIMIENTO -->
        <div class="col-md-6">
            <div class="tarjeta-interna" data-opcion-personajes="reconocimiento">
                <h3>Reconocimiento</h3>
                <p>Pon a prueba cuánto sabes sobre ellos.</p>
            </div>
        </div>

    </div>
`,

titanes: `
    <div class="portada-titanes">

        <span class="etiqueta-titanes">ARCHIVO CLASIFICADO</span>

        <h2>LOS NUEVE TITANES</h2>

        <p>
            Descubre el origen, los poderes y los portadores
            de los titanes que marcaron la historia.
        </p>

        <button class="btn-archivo-titanes" id="abrirArchivoTitanes">
            EXPLORAR ARCHIVOS
            <i class="bi bi-arrow-right"></i>
        </button>

    </div>
`,
mundo: `
    <div class="portada-mundo">

        <span class="etiqueta-mundo">ARCHIVO GEOGRÁFICO</span>

        <h2>EL MUNDO DE ATTACK ON TITAN</h2>

        <p>
            Explora los territorios, las civilizaciones y los acontecimientos
            que dieron forma a la historia de este mundo.
        </p>

    </div>

    <div class="contenedor-mundo">

        <div class="row g-4">

            <!-- ISLA PARADIS -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/paradis.jpeg" alt="Isla Paradis">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 01</span>
                        <h3>ISLA PARADIS</h3>
                        <p>Descubre la isla donde se encuentran las tres grandes murallas.</p>
                        <button data-lugar="paradis">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

            <!-- LAS MURALLAS -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/murallas.jpeg" alt="Las tres murallas">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 02</span>
                        <h3>LAS TRES MURALLAS</h3>
                        <p>Conoce las murallas María, Rose y Sina y su importancia.</p>
                        <button data-lugar="murallas">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

            <!-- MARLEY -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/marley.jpeg" alt="Nación de Marley">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 03</span>
                        <h3>MARLEY</h3>
                        <p>Explora una de las principales potencias del mundo exterior.</p>
                        <button data-lugar="marley">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

            <!-- NACIONES -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/naciones.jpeg" alt="Naciones del mundo">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 04</span>
                        <h3>NACIONES DEL MUNDO</h3>
                        <p>Conoce otros territorios, culturas y civilizaciones.</p>
                        <button data-lugar="naciones">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

            <!-- ELDIANOS -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/eldianos.jpeg" alt="Pueblo eldiano">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 05</span>
                        <h3>EL PUEBLO ELDIANO</h3>
                        <p>Descubre su origen, su pasado y su relación con los titanes.</p>
                        <button data-lugar="eldianos">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

            <!-- HISTORIA -->
            <div class="col-md-6 col-lg-4">
                <div class="tarjeta-mundo">
                    <img src="img/mundo/historia.jpeg" alt="Historia del mundo">
                    <div class="informacion-mundo">
                        <span>ARCHIVO 06</span>
                        <h3>EL GRAN CONFLICTO</h3>
                        <p>Conoce los acontecimientos que transformaron el mundo.</p>
                        <button data-lugar="conflicto">EXPLORAR TERRITORIO →</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
`,

        interactivo: `
    <section class="portada-biblioteca">

        <div class="encabezado-biblioteca">
            <span class="subtitulo-biblioteca">TITAN ARCHIVES PRESENTA</span>

            <h2>ARCHIVOS DEL MUNDO</h2>

            <div class="linea-biblioteca"></div>

            <p>
                Cuatro tomos que conservan la historia de la humanidad,
                los titanes y los secretos que permanecieron ocultos
                detrás de las murallas.
            </p>
        </div>

        <div class="coleccion-libros">

            <div class="libro-temporada">
                <span>TOMO I</span>
                <i class="bi bi-book-half"></i>
                <h3>EL COMIENZO DE LA HUMANIDAD</h3>
                <p>Primera temporada</p>
                <button class="btn-abrir-libro" data-libro="1">
                    ABRIR LIBRO
                </button>
            </div>

            <div class="libro-temporada">
                <span>TOMO II</span>
                <i class="bi bi-book-half"></i>
                <h3>LOS SECRETOS DE LAS MURALLAS</h3>
                <p>Segunda temporada</p>
                <button class="btn-abrir-libro" data-libro="2">
                    ABRIR LIBRO
                </button>
            </div>

            <div class="libro-temporada">
                <span>TOMO III</span>
                <i class="bi bi-book-half"></i>
                <h3>LA VERDAD DEL MUNDO</h3>
                <p>Tercera temporada</p>
                <button class="btn-abrir-libro" data-libro="3">
                    ABRIR LIBRO
                </button>
            </div>

            <div class="libro-temporada">
                <span>TOMO IV</span>
                <i class="bi bi-book-half"></i>
                <h3>EL DESTINO DE LA HUMANIDAD</h3>
                <p>Cuarta temporada</p>
                <button class="btn-abrir-libro" data-libro="4">
                    ABRIR LIBRO
                </button>
            </div>

        </div>

    </section>
`,
    };

    // ABRIR UNA SECCIÓN
    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener("click", () => {

            const seccion = tarjeta.dataset.seccion;

            if (!secciones[seccion]) {
                return;
            }

            contenidoSeccion.innerHTML = secciones[seccion];

            inicio.classList.add("d-none");
            explorar.classList.add("d-none");
            acerca.classList.add("d-none");

            contenidoInterno.classList.remove("d-none");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

    // ============================================
// BEYOND THE WALLS - ARCHIVO DE LOS NUEVE TITANES
// ============================================

contenidoSeccion.addEventListener("click", async (evento) => {

    const boton = evento.target.closest("#abrirArchivoTitanes");

    if (!boton) return;

    const portada = contenidoSeccion.querySelector(".portada-titanes");

    portada.innerHTML = `
        <span class="etiqueta-titanes">ARCHIVO CLASIFICADO</span>
        <h2>CONSULTANDO ARCHIVOS...</h2>
        <p>Recuperando información de los nueve titanes.</p>
    `;

    try {

        const { data, error } = await supabaseClient
            .from("titanes")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            throw error;
        }

        if (!data || data.length === 0) {

            portada.innerHTML = `
                <h2>ARCHIVO VACÍO</h2>
                <p>No se encontraron registros en la base de datos.</p>
            `;

            return;
        }

        contenidoSeccion.innerHTML = `
            <div class="encabezado-archivo-titanes">
                <span class="etiqueta-titanes">ARCHIVO CLASIFICADO</span>
                <h2>LOS NUEVE TITANES</h2>
                <p>Registro de los poderes que marcaron la historia.</p>
                <span>${data.length} TITANES REGISTRADOS</span>
            </div>

            <div class="row g-4 mt-3">

                ${data.map(titan => `
                    <div class="col-md-6 col-lg-4">

                        <div class="tarjeta-titan">

                            <div class="imagen-titan">
                                ${
                                    titan.imagen
                                    ? `<img src="${titan.imagen}" alt="${titan.nombre}">`
                                    : `<i class="bi bi-shield-shaded"></i>`
                                }
                            </div>

                            <div class="informacion-titan">
                                <span>ARCHIVO N.º ${titan.id}</span>

                                <h3>${titan.nombre}</h3>

                                <p>
                                    ${titan.descripcion || "Información pendiente de completar."}
                                </p>

                            </div>

                        </div>

                    </div>
                `).join("")}

            </div>
        `;

    } catch (error) {

        console.error("Error al consultar los titanes:", error);

        portada.innerHTML = `
            <h2>ERROR AL ABRIR EL ARCHIVO</h2>
            <p>No fue posible recuperar la información de Supabase.</p>
            <p>${error.message}</p>
        `;

    }

});

    // VOLVER AL INICIO
    btnVolver.addEventListener("click", () => {

        contenidoInterno.classList.add("d-none");

        inicio.classList.remove("d-none");
        explorar.classList.remove("d-none");
        acerca.classList.remove("d-none");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});