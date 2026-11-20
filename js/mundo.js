// ============================================
// TITAN ARCHIVES - EXPLORAR EL TERRITORIO
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const contenidoSeccion = document.getElementById("contenidoSeccion");

    let contenidoOriginalMundo = null;

    const territorios = {

        paradis: {
            titulo: "ISLA PARADIS",
            archivo: "ARCHIVO GEOGRÁFICO 01",
            imagen: "img/mundo/paradis.jpeg",
            descripcion: "La isla Paradis es el territorio donde se encuentra la humanidad protegida por las tres grandes murallas. Durante mucho tiempo, sus habitantes creyeron que eran los últimos seres humanos que quedaban en el mundo.",
            datos: [
                "Ubicación: una isla rodeada por el océano.",
                "Territorio: hogar de las tres grandes murallas.",
                "Importancia: escenario principal de gran parte de la historia."
            ]
        },

        murallas: {
            titulo: "LAS TRES MURALLAS",
            archivo: "ARCHIVO GEOGRÁFICO 02",
            imagen: "img/mundo/murallas.jpeg",
            descripcion: "Las murallas fueron construidas para proteger a la humanidad de los titanes. Cada una representa una línea de defensa y divide el territorio habitado.",
            datos: [
                "Muralla María: la más exterior.",
                "Muralla Rose: la muralla intermedia.",
                "Muralla Sina: la más interior."
            ]
        },

        marley: {
            titulo: "MARLEY",
            archivo: "ARCHIVO GEOGRÁFICO 03",
            imagen: "img/mundo/marley.jpeg",
            descripcion: "Marley es una de las principales potencias del mundo. Su ejército utiliza el poder de los titanes como parte de su estrategia militar y mantiene una larga rivalidad con el pueblo eldiano.",
            datos: [
                "Gobierno: nación con gran poder militar.",
                "Sociedad: mantiene una fuerte división entre sus habitantes.",
                "Importancia: tiene un papel central en el conflicto mundial."
            ]
        },

        naciones: {
            titulo: "NACIONES DEL MUNDO",
            archivo: "ARCHIVO GEOGRÁFICO 04",
            imagen: "img/mundo/naciones.jpeg",
            descripcion: "Más allá de la isla Paradis existen diferentes países, culturas y civilizaciones. Sus relaciones políticas y militares forman parte de un mundo lleno de tensiones.",
            datos: [
                "Existen diferentes territorios y gobiernos.",
                "Cada nación posee sus propias costumbres.",
                "Los conflictos entre países influyen en la historia."
            ]
        },

        eldianos: {
            titulo: "EL PUEBLO ELDIANO",
            archivo: "ARCHIVO GEOGRÁFICO 05",
            imagen: "img/mundo/eldianos.jpeg",
            descripcion: "Los eldianos son un pueblo relacionado directamente con el origen y el poder de los titanes. Su historia está marcada por conflictos, discriminación y acontecimientos que transformaron el mundo.",
            datos: [
                "Origen: descendientes de Ymir Fritz.",
                "Historia: relacionada con el antiguo Imperio Eldiano.",
                "Importancia: poseen una conexión especial con los titanes."
            ]
        },

        conflicto: {
            titulo: "EL GRAN CONFLICTO",
            archivo: "ARCHIVO HISTÓRICO 06",
            imagen: "img/mundo/historia.jpeg",
            descripcion: "La historia del mundo está marcada por guerras, enfrentamientos y disputas entre diferentes pueblos. Estos acontecimientos explican las tensiones que existen entre Paradis y las naciones del exterior.",
            datos: [
                "Origen: antiguas disputas entre pueblos.",
                "Consecuencias: divisiones políticas y sociales.",
                "Importancia: determina el rumbo de la historia."
            ]
        }

    };

    // DETECTAR LOS CLICS
    document.addEventListener("click", (evento) => {

        // ABRIR EXPEDIENTE
        const botonTerritorio = evento.target.closest("[data-lugar]");

        if (botonTerritorio) {

            const lugar = botonTerritorio.dataset.lugar;
            const territorio = territorios[lugar];

            if (!territorio) return;

            if (contenidoOriginalMundo === null) {
                contenidoOriginalMundo = contenidoSeccion.innerHTML;
            }

            contenidoSeccion.innerHTML = `

                <div class="expediente-mundo">

                    <button class="volver-mundo" id="volverTerritorios">
                        <i class="bi bi-arrow-left"></i>
                        VOLVER A LOS TERRITORIOS
                    </button>

                    <div class="encabezado-expediente-mundo">
                        <span>${territorio.archivo}</span>
                        <h2>${territorio.titulo}</h2>
                    </div>

                    <div class="contenido-expediente-mundo">

                        <div class="imagen-expediente-mundo">
                            <img src="${territorio.imagen}" alt="${territorio.titulo}">
                        </div>

                        <div class="texto-expediente-mundo">

                            <h3>INFORMACIÓN DEL TERRITORIO</h3>

                            <p>${territorio.descripcion}</p>

                            <h3>DATOS IMPORTANTES</h3>

                            <ul>
                                ${territorio.datos.map(dato => `<li>${dato}</li>`).join("")}
                            </ul>

                        </div>

                    </div>

                </div>

            `;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            return;
        }

        // VOLVER A LOS TERRITORIOS
        const botonVolver = evento.target.closest("#volverTerritorios");

        if (botonVolver) {

            contenidoSeccion.innerHTML = contenidoOriginalMundo;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

});