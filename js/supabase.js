// ============================================
// BEYOND THE WALLS - CONEXIÓN CON SUPABASE
// ============================================

// Datos de conexión
const SUPABASE_URL = "https://nmdodertwjdylxyevesr.supabase.co";
const SUPABASE_KEY = "sb_publishable_PRdbgN6T1xcm9_Iu-y0Jcw_7bGgK1ax";

// Crear cliente de Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("BEYOND THE WALLS: Supabase inicializado correctamente");

// Comprobar conexión
async function probarConexion() {

    const { data, error } = await supabaseClient
        .from("titanes")
        .select("*")
        .limit(5);

    if (error) {
        console.error("ERROR DE SUPABASE:", error.message);
        return;
    }

    console.log("¡CONEXIÓN EXITOSA CON SUPABASE!");
    console.log("Datos encontrados:", data);
}

probarConexion();
