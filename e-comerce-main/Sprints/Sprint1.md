INICIO DE SPRINT 1 - E-COMERCE

Ya la lógica base está : data.js, login.js` y main.js. Ahora empezamos con el diseño y la estructura.

ASIGNACIÓN DE TAREAS

Marcela (Tarea 1: Paleta de colores, fuentes, Variables y Reset de pagina)
En el archivo "css/estilos.css", crea el ":root" con la paleta de colores del proyecto, importa las fuentes de Google Fonts y haz el reseteo de CSS (`margin: 0; padding: 0; box-sizing: border-box`).
Puedes Usar Coolors o adobe colors para buscar paletas de colores estilo . Usa Google Fonts para tipografías.

Juan (Tarea 2: Layout Principal del Index)
En "css/estilos.css" (debajo de lo de Marcela), darle el estilo a la estructura principal de "index.html". Enfocarse en acomodar la ."barra-lateral" y el "contenedor-principal" usando Flexbox o CSS Grid. (Importante:) Usa las variables que creó Marcela (ej. `var(--color-fondo)`).
Puede usar la guía visual de [CSS Tricks para Flexbox] o [CSS Grid].

Esteban (Tarea 3: Diseño del Login)
Darle un estilo de tarjeta moderna al formulario en (login.html). Usa Flexbox para centrar todo en la pantalla, ponle bordes redondeados, sombras suaves y estiliza los inputs. Recuerda usar los colores del ":root" de Marcela.
Para guiarte en diseños de formularios, mira ejemplos en [Dribbble] o [CodePen].

---

REGLAS DE GIT
Como somos 4 tocando el mismo repositorio, si no seguimos estas reglas, vamos a borrar el código del otro.

0.Comando para descargar la carpeta del proyecto por primera vez (Solo se hace una vez)

git clone https://github.com/Davidhernandez006/e-comerce

---

Si ya lo tienes:

1. Abre la terminal en VSC.
2. Descarga los últimos cambios que hicieron los demás:

   git pull origin main

**CUANDO TERMINES TU TAREA (Para subir tus cambios):**

1. Guarda tus archivos en Visual Studio Code (`Ctrl + S`).
2. Agrega los archivos al "carrito" de Git:

   git add .

3. Ponle un mensaje CLARO de lo que hiciste (NO pongas "cambios"):

   git commit -m "Agrega variables de colores en estilos.css"

4. Sube los cambios a la nube:

   git push origin main
