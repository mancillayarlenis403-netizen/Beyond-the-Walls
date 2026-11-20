// ============================================
// BEYOND THE WALLS - MI PERFIL
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const botonPerfil = document.getElementById("btnAcceso");
    const contenidoInterno = document.getElementById("contenidoInterno");
    const contenidoSeccion = document.getElementById("contenidoSeccion");

    const inicio = document.getElementById("inicio");
    const explorar = document.getElementById("explorar");
    const acerca = document.getElementById("acerca");

    if (!botonPerfil || !contenidoSeccion) return;

    let perfil = JSON.parse(
        localStorage.getItem("perfil-beyond")
    ) || { nombre: "" };


    // ============================================
    // MOSTRAR PERFIL
    // ============================================

    function mostrarPerfil() {

        const favoritos = JSON.parse(
            localStorage.getItem("titan-favoritos")
        ) || [];

        contenidoSeccion.innerHTML = `

            <section class="seccion-perfil py-5">

                <div class="text-center mb-5">

                    <span class="etiqueta">ARCHIVO PERSONAL</span>

                    <h2 class="titulo-interno">MI PERFIL</h2>

                    <p>Tu espacio personal dentro de Beyond the Walls.</p>

                </div>

                <div class="tarjeta-perfil mx-auto">

                    <div class="text-center mb-4">

                        <div class="avatar-perfil">
                            <i class="bi bi-person-circle"></i>
                        </div>

                        <h3 id="nombreMostrado"></h3>

                        <p>EXPLORADOR DE ARCHIVOS</p>

                    </div>

                    <div class="bienvenida-perfil" id="bienvenidaPerfil">
                        ¡Bienvenido a Beyond the Walls!
                    </div>

                    <form id="formularioPerfil">

                        <label for="nombrePerfil">
                            Nombre o apodo
                        </label>

                        <input
                            type="text"
                            id="nombrePerfil"
                            class="form-control mb-3"
                            placeholder="Escribe tu nombre"
                            maxlength="40"
                            required
                        >

                        <button type="submit"
                            class="btn btn-guardar-perfil w-100">

                            <i class="bi bi-save"></i>
                            GUARDAR INFORMACIÓN

                        </button>

                    </form>

                    <p id="mensajePerfil" class="text-center mt-3"></p>

                    <hr>

                    <h4 class="text-center mb-4">MI ACTIVIDAD</h4>

                    <div class="estadisticas-perfil">

                        <div class="dato-perfil">
                            <i class="bi bi-star-fill"></i>
                            <h4>${favoritos.length}</h4>
                            <p>Personajes favoritos</p>
                        </div>

                        <div class="dato-perfil">
                            <i class="bi bi-book-half"></i>
                            <h4>4</h4>
                            <p>Tomos disponibles</p>
                        </div>

                    </div>

                </div>

                <div class="mt-5">

                    <h3 class="titulo-interno text-center mb-4">
                        EXPLORAR ARCHIVOS
                    </h3>

                    <div class="row g-4">

                        <div class="col-md-6 col-lg-3">
                            <button class="opcion-perfil w-100"
                                data-destino="personajes">
                                <i class="bi bi-people-fill"></i>
                                <h4>Personajes</h4>
                                <p>Descubre sus historias.</p>
                            </button>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <button class="opcion-perfil w-100"
                                data-destino="titanes">
                                <i class="bi bi-shield-fill"></i>
                                <h4>Titanes</h4>
                                <p>Consulta sus archivos.</p>
                            </button>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <button class="opcion-perfil w-100"
                                data-destino="mundo">
                                <i class="bi bi-globe-americas"></i>
                                <h4>El mundo</h4>
                                <p>Explora los territorios.</p>
                            </button>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <button class="opcion-perfil w-100"
                                data-destino="interactivo">
                                <i class="bi bi-book-half"></i>
                                <h4>Biblioteca</h4>
                                <p>Continúa explorando los tomos.</p>
                            </button>
                        </div>

                    </div>

                </div>

            </section>

        `;

        const nombreMostrado = document.getElementById("nombreMostrado");
        const campoNombre = document.getElementById("nombrePerfil");

        nombreMostrado.textContent =
            perfil.nombre || "Explorador anónimo";

        campoNombre.value = perfil.nombre;

        if (perfil.nombre) {
            document.getElementById("bienvenidaPerfil").textContent =
                `¡Bienvenido nuevamente, ${perfil.nombre}!`;
        }

        // GUARDAR INFORMACIÓN
        document.getElementById("formularioPerfil")
            .addEventListener("submit", (evento) => {

                evento.preventDefault();

                const nombre = campoNombre.value.trim();

                if (!nombre) return;

                perfil.nombre = nombre;

                localStorage.setItem(
                    "perfil-beyond",
                    JSON.stringify(perfil)
                );

                nombreMostrado.textContent = nombre;

                document.getElementById("bienvenidaPerfil").textContent =
                    `¡Bienvenido a Beyond the Walls, ${nombre}!`;

                document.getElementById("mensajePerfil").textContent =
                    "¡Tu información se guardó correctamente!";

            });

        // BOTONES PARA EXPLORAR
        contenidoSeccion.querySelectorAll("[data-destino]")
            .forEach((boton) => {

                boton.addEventListener("click", () => {

                    const destino = boton.dataset.destino;

                    const tarjeta = document.querySelector(
                        `.tarjeta-opcion[data-seccion="${destino}"]`
                    );

                    if (tarjeta) {
                        tarjeta.click();
                    }

                });

            });

        // OCULTAR PORTADA Y MOSTRAR PERFIL
        inicio.classList.add("d-none");
        explorar.classList.add("d-none");
        acerca.classList.add("d-none");

        contenidoInterno.classList.remove("d-none");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // BOTÓN MI PERFIL
    botonPerfil.addEventListener("click", (evento) => {

        evento.preventDefault();

        mostrarPerfil();

    });

});