// ============================================
// TITAN ARCHIVES - SECCIÓN DE TITANES
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("contenidoSeccion");

    if (!contenedor) return;

    // ========================================
    // INFORMACIÓN DE LOS TITANES
    // ========================================

    const titanes = [

        {
            nombre: "Titán de Ataque",
            imagen: "img/titanes/ataque.jpeg",
            descripcion: "Uno de los nueve titanes, conocido por su búsqueda constante de libertad.",
            habilidades: "Gran fuerza física, resistencia y capacidad de combate. También puede acceder a recuerdos de futuros portadores.",
            portadores: "Eren Kruger, Grisha Yeager y Eren Yeager.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Colosal",
            imagen: "img/titanes/colosal.jpeg",
            descripcion: "El titán más destacado por su enorme tamaño y su gran poder destructivo.",
            habilidades: "Puede liberar grandes cantidades de vapor y generar una explosión al transformarse.",
            portadores: "Bertholdt Hoover y Armin Arlert.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Hembra",
            imagen: "img/titanes/hembra.jpeg",
            descripcion: "Un titán reconocido por su velocidad, agilidad y capacidad de adaptación.",
            habilidades: "Puede endurecer partes de su cuerpo y atraer titanes puros mediante su grito.",
            portadores: "Annie Leonhart.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Acorazado",
            imagen: "img/titanes/acorazado.jpeg",
            descripcion: "Un titán protegido por placas de endurecimiento que cubren gran parte de su cuerpo.",
            habilidades: "Posee una gran resistencia y puede utilizar su fuerza para atravesar estructuras.",
            portadores: "Reiner Braun.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Bestia",
            imagen: "img/titanes/bestia.jpeg",
            descripcion: "Un titán cuya apariencia puede presentar características de diferentes animales.",
            habilidades: "Sus capacidades dependen de su portador. Zeke destaca por su habilidad para lanzar objetos con gran precisión.",
            portadores: "Tom Ksaver y Zeke Yeager.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Mandíbula",
            imagen: "img/titanes/mandibula.jpeg",
            descripcion: "Un titán pequeño en comparación con otros, pero extremadamente rápido y ágil.",
            habilidades: "Posee mandíbulas y garras con una gran capacidad de trituración.",
            portadores: "Marcel Galliard, Ymir, Porco Galliard y Falco Grice.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Carguero",
            imagen: "img/titanes/carguero.jpeg",
            descripcion: "Un titán especializado en resistencia y transporte.",
            habilidades: "Puede permanecer transformado durante largos periodos y transportar equipamiento.",
            portadores: "Pieck Finger.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Martillo de Guerra",
            imagen: "img/titanes/martillo.jpeg",
            descripcion: "Un titán conocido por su capacidad de crear estructuras y armas mediante el endurecimiento.",
            habilidades: "Puede fabricar armas y controlar su cuerpo titán mediante un vínculo especial.",
            portadores: "Lara Tybur y Eren Yeager.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Titán Fundador",
            imagen: "img/titanes/fundador.jpeg",
            descripcion: "Uno de los poderes más importantes, relacionado con el origen y control de los titanes.",
            habilidades: "Puede controlar titanes y alterar los recuerdos de los Sujetos de Ymir bajo determinadas condiciones.",
            portadores: "Ymir Fritz, Karl Fritz, Uri Reiss, Frieda Reiss, Grisha Yeager y Eren Yeager.",
            categoria: "Los nueve titanes"
        },

        {
            nombre: "Forma original de Ymir Fritz",
            imagen: "img/titanes/ymir.jpeg",
            descripcion: "La forma ancestral del poder titánico. Ymir Fritz fue la primera persona en obtener este poder.",
            habilidades: "Su poder dio origen a los nueve titanes y a la capacidad de transformación de los Sujetos de Ymir.",
            portadores: "Ymir Fritz, la primera portadora del poder de los titanes.",
            categoria: "Archivo especial"
        }

    ];

    // ========================================
    // MOSTRAR TARJETAS
    // ========================================

    function mostrarTitanes() {

        contenedor.innerHTML = `

            <div class="archivo-titanes">

                <div class="encabezado-titanes">

                    <span class="etiqueta-titanes">
                        BASE DE DATOS CLASIFICADA
                    </span>

                    <h2>LOS NUEVE TITANES</h2>

                    <p>
                        Diez expedientes que revelan el origen,
                        las habilidades y los portadores del poder titánico.
                    </p>

                    <div class="linea-titanes"></div>

                </div>

                <div class="row g-4">

                    ${titanes.map((titan, indice) => `

                        <div class="col-12 col-sm-6 col-lg-4">

                            <article class="tarjeta-titan">

                                <div class="imagen-titan">

                                    <img
                                        src="${titan.imagen}"
                                        alt="${titan.nombre}"
                                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                                    >

                                    <div class="imagen-no-disponible">
                                        <i class="bi bi-image"></i>
                                        <span>IMAGEN NO DISPONIBLE</span>
                                    </div>

                                    <span class="numero-titan">
                                        ARCHIVO 0${indice + 1}
                                    </span>

                                </div>

                                <div class="informacion-titan">

                                    <span class="categoria-titan">
                                        ${titan.categoria}
                                    </span>

                                    <h3>${titan.nombre}</h3>

                                    <p>${titan.descripcion}</p>

                                    <button
                                        class="btn-expediente-titan"
                                        data-titan="${indice}">

                                        CONSULTAR EXPEDIENTE
                                        <i class="bi bi-arrow-right"></i>

                                    </button>

                                </div>

                            </article>

                        </div>

                    `).join("")}

                </div>

                <div class="archivo-ymir">

                    <span>REGISTRO HISTÓRICO ESPECIAL</span>

                    <p>
                        El origen de todos los poderes se encuentra
                        en la primera portadora.
                    </p>

                </div>

            </div>

            <div id="modalTitan"></div>

        `;
    }

    // ========================================
    // MOSTRAR EXPEDIENTE
    // ========================================

    function abrirExpediente(indice) {

        const titan = titanes[indice];

        const modal = document.getElementById("modalTitan");

        modal.innerHTML = `

            <div class="fondo-modal-titan">

                <div class="contenido-modal-titan">

                    <button
                        class="cerrar-modal-titan"
                        id="cerrarModalTitan"
                        aria-label="Cerrar expediente">

                        <i class="bi bi-x-lg"></i>

                    </button>

                    <div class="modal-imagen-titan">

                        <img
                            src="${titan.imagen}"
                            alt="${titan.nombre}"
                        >

                    </div>

                    <div class="modal-informacion-titan">

                        <span class="etiqueta-titanes">
                            ${titan.categoria}
                        </span>

                        <h2>${titan.nombre}</h2>

                        <div class="linea-titanes"></div>

                        <h3>DESCRIPCIÓN</h3>

                        <p>${titan.descripcion}</p>

                        <h3>HABILIDADES</h3>

                        <p>${titan.habilidades}</p>

                        <h3>PORTADORES CONOCIDOS</h3>

                        <p>${titan.portadores}</p>

                        <span class="estado-expediente">
                            <i class="bi bi-shield-check"></i>
                            EXPEDIENTE CONSULTADO
                        </span>

                    </div>

                </div>

            </div>

        `;

    }

    // ========================================
    // DETECTAR CLICS
    // ========================================

    contenedor.addEventListener("click", (evento) => {

        // Abrir archivo de titanes
        if (evento.target.closest("#abrirArchivoTitanes")) {

            mostrarTitanes();
            return;

        }

        // Abrir expediente
        const botonExpediente = evento.target.closest("[data-titan]");

        if (botonExpediente) {

            abrirExpediente(Number(botonExpediente.dataset.titan));
            return;

        }

        // Cerrar expediente
        if (evento.target.closest("#cerrarModalTitan")) {

            document.getElementById("modalTitan").innerHTML = "";
            return;

        }

        // Cerrar al pulsar fuera del expediente
        if (evento.target.classList.contains("fondo-modal-titan")) {

            document.getElementById("modalTitan").innerHTML = "";

        }

    });

});