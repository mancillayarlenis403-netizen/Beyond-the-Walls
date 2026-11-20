// ============================================
// TITAN ARCHIVES - CATÁLOGO DE PERSONAJES
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("contenidoSeccion");

    if (!contenedor) return;

    // BASE DE DATOS DE LOS 31 PERSONAJES
    const personajes = [

        { nombre: "Eren Yeager", imagen: "eren.jpeg", grupo: "Exploradores" },
        { nombre: "Mikasa Ackerman", imagen: "mikasa.jpeg", grupo: "Exploradores" },
        { nombre: "Armin Arlert", imagen: "armin.jpeg", grupo: "Exploradores" },
        { nombre: "Levi Ackerman", imagen: "levi.jpeg", grupo: "Exploradores" },
        { nombre: "Erwin Smith", imagen: "erwin.jpeg", grupo: "Exploradores" },
        { nombre: "Hange Zoe", imagen: "hange.jpeg", grupo: "Exploradores" },
        { nombre: "Jean Kirstein", imagen: "jean.jpeg", grupo: "Exploradores" },
        { nombre: "Connie Springer", imagen: "conie.jpeg", grupo: "Exploradores" },
        { nombre: "Sasha Blouse", imagen: "sasha.jpeg", grupo: "Exploradores" },
        { nombre: "Historia Reiss", imagen: "historia.jpeg", grupo: "Realeza" },
        { nombre: "Reiner Braun", imagen: "reiner.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Bertholdt Hoover", imagen: "bertholdt.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Annie Leonhart", imagen: "annie.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Ymir", imagen: "ymir.jpeg", grupo: "Exploradores" },
        { nombre: "Marco Bott", imagen: "marco.jpeg", grupo: "Exploradores" },
        { nombre: "Floch Forster", imagen: "floch.jpeg", grupo: "Exploradores" },
        { nombre: "Keith Shadis", imagen: "keith.jpeg", grupo: "Instructores" },
        { nombre: "Dot Pixis", imagen: "pixis.jpeg", grupo: "Guarnición" },
        { nombre: "Petra Ral", imagen: "petra.jpeg", grupo: "Exploradores" },
        { nombre: "Oluo Bozado", imagen: "oluo.jpeg", grupo: "Exploradores" },
        { nombre: "Zeke Yeager", imagen: "zeke.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Grisha Yeager", imagen: "grisha.jpeg", grupo: "Civiles" },
        { nombre: "Carla Yeager", imagen: "carla.jpeg", grupo: "Civiles" },
        { nombre: "Kenny Ackerman", imagen: "kenny.jpeg", grupo: "Policía Militar" },
        { nombre: "Pieck Finger", imagen: "pieck.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Porco Galliard", imagen: "porco.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Falco Grice", imagen: "falco.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Gabi Braun", imagen: "gabi.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Colt Grice", imagen: "colt.jpeg", grupo: "Guerreros de Marley" },
        { nombre: "Willy Tybur", imagen: "willy.jpeg", grupo: "Familia Tybur" },
        { nombre: "Yelena", imagen: "yelena.jpeg", grupo: "Voluntarios antimarleyanos" }

    ];

    const historiasPersonajes = {

    "Eren Yeager": "Eren comenzó como un joven decidido a conocer el mundo exterior y acabar con los titanes después de perder su hogar. Al descubrir los secretos de su familia y el origen de los titanes, su lucha por la libertad tomó un rumbo que cambiaría el destino de toda la humanidad.",

    "Mikasa Ackerman": "Mikasa encontró en Eren y Armin una nueva familia después de una infancia marcada por la pérdida. Se convirtió en una de las combatientes más destacadas del Cuerpo de Exploración. Su historia representa el amor, la lealtad y la difícil decisión entre los sentimientos personales y el destino del mundo.",

    "Armin Arlert": "Desde pequeño, Armin soñaba con conocer el mundo exterior. Aunque no destacaba por su fuerza física, su inteligencia y capacidad para encontrar soluciones lo convirtieron en una pieza fundamental. Su destino cambió cuando heredó el poder del Titán Colosal.",

    "Levi Ackerman": "Conocido como el soldado más fuerte de la humanidad, Levi tuvo una infancia difícil en los barrios subterráneos. Su encuentro con Erwin Smith lo llevó al Cuerpo de Exploración, donde se convirtió en una figura fundamental en la lucha por descubrir la verdad.",

    "Erwin Smith": "Erwin fue el comandante del Cuerpo de Exploración y dedicó su vida a descubrir qué existía más allá de las murallas. Su liderazgo y sus decisiones marcaron algunas de las expediciones más importantes de la historia, especialmente la recuperación de Shiganshina.",

    "Hange Zoe": "Hange fue una investigadora apasionada por comprender a los titanes. Sus experimentos permitieron descubrir información importante sobre ellos. Más adelante asumió el liderazgo del Cuerpo de Exploración y buscó una solución al conflicto entre los pueblos.",

    "Jean Kirstein": "Jean comenzó siendo un joven que buscaba una vida tranquila dentro de las murallas. Sin embargo, los acontecimientos que vivió durante su entrenamiento y sus misiones transformaron su manera de pensar. Con el tiempo se convirtió en un líder responsable y comprometido.",

    "Connie Springer": "Connie fue uno de los compañeros de entrenamiento de Eren y sus amigos. Su historia estuvo marcada por el misterio de su pueblo natal, Ragako, y por las difíciles decisiones que tuvo que enfrentar durante la guerra.",

    "Sasha Blouse": "Sasha, conocida por su gran amor por la comida, provenía de una familia de cazadores. Su carácter alegre y su habilidad para sobrevivir la hicieron una integrante especial del grupo. Su historia también refleja el valor de proteger a quienes considera su familia.",

    "Historia Reiss": "Historia creció ocultando su verdadera identidad bajo el nombre de Christa Lenz. Con el tiempo descubrió que era la heredera legítima de la familia real de las murallas. Su decisión de aceptar quién era cambió el rumbo político de la isla Paradis.",

    "Reiner Braun": "Reiner llegó a la isla Paradis como parte de una misión de Marley, ocultando su identidad de guerrero. Su doble vida como soldado y enemigo provocó un profundo conflicto personal. Su historia muestra las consecuencias de crecer en medio de una guerra y la manipulación de las generaciones jóvenes.",

    "Bertholdt Hoover": "Bertholdt era uno de los guerreros enviados desde Marley y poseía el poder del Titán Colosal. Durante años ocultó su verdadera misión mientras convivía con sus compañeros de entrenamiento. Su identidad fue revelada durante el enfrentamiento por Shiganshina.",

    "Annie Leonhart": "Annie fue una guerrera de Marley que se infiltró en la isla Paradis. Su habilidad en el combate y su personalidad reservada la convirtieron en una adversaria difícil de enfrentar. Su historia revela el peso de las misiones que recibió desde niña.",

    "Ymir": "Ymir, la compañera de Historia, ocultaba un pasado relacionado con Marley y con el poder de los titanes. Después de recuperar su forma humana, tuvo que enfrentarse a las consecuencias de su pasado y tomar decisiones que marcarían su relación con Historia.",

    "Marco Bott": "Marco fue uno de los compañeros de entrenamiento de Eren y Jean. Se caracterizaba por su capacidad para comprender a los demás y por su deseo de convertirse en un buen soldado. Su destino tuvo una influencia profunda en Jean y en los acontecimientos posteriores.",

    "Floch Forster": "Floch apareció durante la batalla de Shiganshina y fue uno de los pocos supervivientes de una misión decisiva. Su experiencia transformó sus ideas sobre el futuro de Paradis y posteriormente se convirtió en una figura importante dentro de los Jaegeristas.",

    "Keith Shadis": "Keith fue instructor de la promoción de cadetes a la que pertenecían Eren, Mikasa y Armin. Antes había sido comandante del Cuerpo de Exploración y conocía secretos relacionados con Grisha Yeager. Su historia muestra el lado humano de quienes forman a los soldados.",

    "Dot Pixis": "Dot Pixis fue un alto comandante de la Guarnición, reconocido por su inteligencia y capacidad estratégica. Participó en momentos decisivos para proteger a la población dentro de las murallas y fue una figura importante durante las crisis militares de Paradis.",

    "Petra Ral": "Petra pertenecía al escuadrón de operaciones especiales de Levi. Era una soldado experimentada y confiable que participó en misiones importantes del Cuerpo de Exploración. Su historia dejó una huella en sus compañeros y en quienes conocieron a su escuadrón.",

    "Oluo Bozado": "Oluo formaba parte del escuadrón especial de Levi. Era un soldado experimentado que admiraba profundamente a su capitán y participó en la misión de proteger a Eren durante la expedición fuera de las murallas.",

    "Zeke Yeager": "Zeke era el medio hermano de Eren y uno de los guerreros más importantes de Marley. Poseía el Titán Bestia y desarrolló un plan relacionado con el futuro de los eldianos. Su pasado familiar explica muchas de las decisiones que tomó durante la guerra.",

    "Grisha Yeager": "Grisha fue el padre de Eren y un personaje fundamental para descubrir la verdad sobre los titanes. Su vida estuvo relacionada con Marley, los restauracionistas eldianos y los secretos del sótano de la familia Yeager. Sus decisiones cambiaron la historia de Paradis.",

    "Carla Yeager": "Carla fue la madre de Eren y una figura fundamental durante su infancia. Vivía con su familia en el distrito de Shiganshina y deseaba que sus hijos pudieran tener una vida tranquila. Los acontecimientos de la caída de la muralla María marcaron profundamente el camino de Eren.",

    "Kenny Ackerman": "Kenny fue conocido como el Destripador y perteneció a la familia Ackerman. Su relación con Uri Reiss y su participación en la Policía Militar Interior lo convirtieron en una figura importante durante el conflicto político de la tercera temporada.",

    "Pieck Finger": "Pieck fue una guerrera de Marley que heredó el poder del Titán Carguero. Se destacó por su inteligencia, capacidad estratégica y habilidad para apoyar a sus compañeros. Su participación fue importante durante los enfrentamientos de la guerra.",

    "Porco Galliard": "Porco fue un guerrero de Marley que heredó el poder del Titán Mandíbula. Su rivalidad con Reiner y su relación con Marcel influyeron en su manera de actuar. Participó en los enfrentamientos que definieron el futuro de Marley y Paradis.",

    "Falco Grice": "Falco era un joven candidato a guerrero de Marley que deseaba proteger a sus seres queridos. Su encuentro con Eren cambió su perspectiva sobre la guerra. Más adelante heredó el poder del Titán Mandíbula y se convirtió en una figura importante para el desenlace de la historia.",

    "Gabi Braun": "Gabi era una candidata a guerrera de Marley que creció creyendo firmemente en las ideas que le enseñaron sobre la isla Paradis. Sus experiencias fuera de su entorno la llevaron a cuestionar sus prejuicios y a comprender que el conflicto tenía muchas más perspectivas.",

    "Colt Grice": "Colt era el hermano mayor de Falco y uno de los candidatos a guerrero de Marley. Su principal motivación era proteger a su hermano y conseguir un futuro para su familia. Su historia refleja los sacrificios que muchas familias enfrentaron durante la guerra.",

    "Willy Tybur": "Willy Tybur pertenecía a una de las familias más influyentes de Marley. Durante una ceremonia pública reveló información sobre la historia de los titanes y declaró sus intenciones frente a Paradis. Su discurso se convirtió en un momento decisivo para el comienzo de una nueva etapa de la guerra.",

    "Yelena": "Yelena fue una de las voluntarias antimarleyanas que colaboraron con Zeke Yeager. Su admiración por él y su participación en los planes para cambiar el futuro de los eldianos la convirtieron en una figura importante durante la temporada final."
};


    // FAVORITOS GUARDADOS EN EL NAVEGADOR
    let favoritos = JSON.parse(localStorage.getItem("titan-favoritos")) || [];

    // MOSTRAR EL CATÁLOGO
    function mostrarCatalogo(
    lista = personajes,
    titulo = "ARCHIVO DE PERSONAJES",
    descripcion = "Explora los expedientes de los personajes del universo de Attack on Titan."
)


{
        contenedor.innerHTML = `
            <div class="catalogo-personajes">

                <h2 class="titulo-interno">${titulo}</h2>

                 <p class="texto-catalogo">
                    ${descripcion}
                 </p>

                <div class="controles-catalogo">

                    <input
                        type="search"
                        id="buscarPersonaje"
                        class="form-control"
                        placeholder="Buscar personaje..."
                        aria-label="Buscar personaje"
                    >

                    <select id="filtrarGrupo" class="form-select">
                        <option value="todos">Todos los grupos</option>
                        <option value="Exploradores">Cuerpo de Exploración</option>
                        <option value="Guerreros de Marley">Guerreros de Marley</option>
                        <option value="Realeza">Familia real</option>
                        <option value="Policía Militar">Policía Militar</option>
                        <option value="Guarnición">Guarnición</option>
                        <option value="Instructores">Instructores</option>
                        <option value="Civiles">Civiles</option>
                        <option value="Familia Tybur">Familia Tybur</option>
                        <option value="Voluntarios antimarleyanos">Voluntarios antimarleyanos</option>
                    </select>

                    <button id="verFavoritos" class="btn btn-favoritos">
                        <i class="bi bi-star-fill"></i> Mis favoritos
                    </button>

                    <button id="verTodos" class="btn btn-todos">
                        Ver todos
                    </button>

                </div>

                <p id="contadorPersonajes" class="contador-catalogo"></p>

                <div class="row g-4" id="listaPersonajes"></div>

            </div>
        `;

        dibujarTarjetas(lista);
    }

    // DIBUJAR LAS TARJETAS
    function dibujarTarjetas(lista) {

        const listaHTML = document.getElementById("listaPersonajes");
        const contador = document.getElementById("contadorPersonajes");

        if (!listaHTML || !contador) return;

        contador.textContent = `${lista.length} personajes encontrados`;

        if (lista.length === 0) {
            listaHTML.innerHTML = `
                <div class="col-12">
                    <p class="mensaje-vacio">
                        No se encontraron personajes.
                    </p>
                </div>
            `;
            return;
        }

        listaHTML.innerHTML = lista.map((personaje) => {

            const esFavorito = favoritos.includes(personaje.nombre);

            return `
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

                    <article class="tarjeta-personaje">

                        <div class="imagen-personaje">
                            <img
                                src="img/personajes/${personaje.imagen}"
                                alt="${personaje.nombre}"
                                loading="lazy"
                            >

                            <button
                                class="btn-favorito ${esFavorito ? "activo" : ""}"
                                data-nombre="${personaje.nombre}"
                                aria-label="Agregar o quitar de favoritos"
                                title="Agregar o quitar de favoritos"
                            >
                                <i class="bi ${esFavorito ? "bi-star-fill" : "bi-star"}"></i>
                            </button>
                        </div>

                        <div class="datos-personaje">
                            <span class="grupo-personaje">${personaje.grupo}</span>

                            <h3>${personaje.nombre}</h3>

                            <button
                                class="btn-expediente"
                                data-expediente="${personaje.nombre}"
                            >
                                Ver expediente
                                <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>

                    </article>

                </div>
            `;

        }).join("");
    }

    // DETECTAR CLICS EN EL CATÁLOGO Y EN LAS TARJETAS
    contenedor.addEventListener("click", (evento) => {

        // ABRIR EL CATÁLOGO AL PULSAR LA PRIMERA TARJETA
       const tarjeta = evento.target.closest(".tarjeta-interna");

if (tarjeta && !contenedor.querySelector(".catalogo-personajes")) {

    const tarjetas = [...contenedor.querySelectorAll(".tarjeta-interna")];

    const posicion = tarjetas.indexOf(tarjeta);

    // PRIMERA TARJETA: EXPLORAR PERSONAJES
    if (posicion === 0) {
        mostrarCatalogo();
    }

    // SEGUNDA TARJETA: FAVORITOS
    else if (posicion === 1) {

        const listaFavoritos = personajes.filter(
            (personaje) => favoritos.includes(personaje.nombre)
        );

        mostrarCatalogo(
            listaFavoritos,
            "MIS PERSONAJES FAVORITOS",
            "Aquí encontrarás los personajes que has guardado en tu colección."
        );
    }

    return;
}

        // AGREGAR O QUITAR FAVORITOS
        const botonFavorito = evento.target.closest(".btn-favorito");

        if (botonFavorito) {

            const nombre = botonFavorito.dataset.nombre;

            if (favoritos.includes(nombre)) {
                favoritos = favoritos.filter((item) => item !== nombre);
            } else {
                favoritos.push(nombre);
            }

            localStorage.setItem("titan-favoritos", JSON.stringify(favoritos));

            aplicarFiltros();
            return;
        }

        // VER EXPEDIENTE
        const botonExpediente = evento.target.closest(".btn-expediente");

        if (botonExpediente) {

            const personaje = personajes.find(
                (item) => item.nombre === botonExpediente.dataset.expediente
            );

            if (personaje) {

    // Crear la ventana del expediente
    let modal = document.getElementById("modalExpediente");

    if (!modal) {

        document.body.insertAdjacentHTML("beforeend", `
            <div class="modal fade" id="modalExpediente" tabindex="-1">

                <div class="modal-dialog modal-lg modal-dialog-centered">

                    <div class="modal-content expediente-modal">

                        <div class="modal-header">
                            <h2 class="modal-title">
                                ARCHIVO CONFIDENCIAL
                            </h2>

                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal">
                            </button>
                        </div>

                        <div class="modal-body">

                            <div class="row align-items-center g-4">

                                <div class="col-md-5">
                                    <img
                                        id="expedienteImagen"
                                        class="imagen-expediente"
                                        src=""
                                        alt="">
                                </div>

                                <div class="col-md-7">

                                    <span class="etiqueta-expediente">
                                        REGISTRO DE PERSONAJE
                                    </span>

                                    <h3 id="expedienteNombre"></h3>

                                    <p class="titulo-dato">
                                        AFILIACIÓN
                                    </p>

                                    <p id="expedienteGrupo"></p>

                                    <hr>
                                    <p class="descripcion-expediente" id="expedienteDescripcion"></p>

                                </div>

                            </div>

                        </div>

                        <div class="modal-footer">

                            <button
                                type="button"
                                class="btn btn-cerrar-expediente"
                                data-bs-dismiss="modal">
                                Cerrar expediente
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `);

        modal = document.getElementById("modalExpediente");
    }

    // Mostrar los datos del personaje
    modal.querySelector("#expedienteImagen").src =
        `img/personajes/${personaje.imagen}`;

    modal.querySelector("#expedienteImagen").alt =
        personaje.nombre;

    modal.querySelector("#expedienteNombre").textContent =
        personaje.nombre;

    modal.querySelector("#expedienteGrupo").textContent =
        personaje.grupo;

    modal.querySelector("#expedienteDescripcion").textContent =
    historiasPersonajes[personaje.nombre] ||
    "No hay información histórica disponible para este personaje.";

    // Abrir ventana
    bootstrap.Modal.getOrCreateInstance(modal).show();

}
        }


        // MOSTRAR SOLO FAVORITOS
        if (evento.target.closest("#verFavoritos")) {

            const listaFavoritos = personajes.filter(
                (personaje) => favoritos.includes(personaje.nombre)
            );

            dibujarTarjetas(listaFavoritos);
            return;
        }

        // MOSTRAR TODOS
        if (evento.target.closest("#verTodos")) {
            dibujarTarjetas(personajes);
        }

    });

    // BUSCADOR Y FILTRO
    function aplicarFiltros() {

        const buscador = document.getElementById("buscarPersonaje");
        const selector = document.getElementById("filtrarGrupo");

        if (!buscador || !selector) return;

        const texto = buscador.value.toLowerCase();
        const grupo = selector.value;

        const resultado = personajes.filter((personaje) => {

            const coincideNombre = personaje.nombre.toLowerCase().includes(texto);
            const coincideGrupo = grupo === "todos" || personaje.grupo === grupo;

            return coincideNombre && coincideGrupo;
        });

        dibujarTarjetas(resultado);
    }

    contenedor.addEventListener("input", (evento) => {
        if (evento.target.id === "buscarPersonaje") {
            aplicarFiltros();
        }
    });

    contenedor.addEventListener("change", (evento) => {
        if (evento.target.id === "filtrarGrupo") {
            aplicarFiltros();
        }
    });

});