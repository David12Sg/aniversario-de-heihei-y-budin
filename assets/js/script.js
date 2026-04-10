// Fecha de inicio: 6 de Octubre de 2024 a las 00:00:00
// Nota: Para que el 6 de abril de 2026 se cumpla 1 año y 6 meses, 
// la fecha de inicio correcta es 6 de Octubre de 2024.
const fechaAniversario = new Date("2024-10-06T00:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const transcurrido = ahora - fechaAniversario;

    // Cálculos de tiempo
    const dias = Math.floor(transcurrido / (1000 * 60 * 60 * 24));
    const horas = Math.floor((transcurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((transcurrido % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((transcurrido % (1000 * 60)) / 1000);

    // Escribir en el HTML con el formato que pediste
    document.getElementById("contador").innerHTML = `
        <div style="font-size: 1.5rem; margin-bottom: 5px;">1 Año y 6 Meses</div>
        <div style="font-size: 0.9rem; opacity: 0.9;">
            ${dias} días, ${horas}h, ${minutos}m y ${segundos}s juntos ❤️
        </div>
    `;
}

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();