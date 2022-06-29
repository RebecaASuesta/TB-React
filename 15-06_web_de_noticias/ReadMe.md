# Página de noticias

## Índice

* Sobre el proyecto
    * Instalación y despliegue
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración

* Retos presentados

* Autores

## Sobre el proyecto

### Instalación y despliegue

Para descargarte el repositorio, en Visual Studio, abre una terminal y ejecuta este comando:

```PowerShell
git clone https://github.com/RebecaASuesta/TB-React/15-06_web_de_noticias
```

Posteriormente tendrás que descargar los módulos externos con Node:
- React
- Axios
- Sass

### Tecnologías usadas

* React
* Sass
* Axios
* React Routing Dom

### Origen

Este proyecto se propuso como un ejercicio en el [bootcamp de FullStack Development de The Bridge](https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer) para poner en práctica los conocimientos adquiridos sobre FrontEnd. Consiste en crear una Página de Noticias.

### Objetivos

- Vamos a englobar todo lo visto estos días con un miniproyecto con React utilizando News API vista principal de la página
- Implementa React Router en tu página
    - [X] /home. Home de la app
    - [X] /form. Formulario para crear noticia
    - [X] /list. Lista detallada de noticias

- Componentes mínimos
    - [X] Header
    - [X] Home.
    - [X] Form.
        - [X] Formulario de alta de nueva noticia. 
        - [X] Guardar formulario en el local storage
        - [X] Tras dar de alta debes redirigir a ListNews
    - [X] ListNews. Pinta las noticias
    - [X] Footer

- Importante el diseño
- Utilizar context
- Utilizar SASS
- Readme Excelente!!!

- EXTRA
    - [X] Que sea responsive

### Concepto e inspiración

Parodia a OK-Diario.

## Retos presentados

- Link "Ve a la noticia" en List.

Al intentar implementar el Link de cada noticia, vi que no podía hacerlo con 'a' ni con 'Link to', así que acabé decantándome por poner un 'button' y, luego, en el documento .sass modificarlo para que parezca un enlace.
Gracias a [Ger](https://github.com/GeerDev) por darme la idea.

- Tamaño background image.

Cuando fui a añadir una imagen como background del Home, no me aclaraba para indicar qué tamaños quería, entonces, con la ayuda de [Mike](https://github.com/MrSetOne), insertamos el siguiente código:
```
background: url(../../assets/Research-Team.jpg);
background-position: center;
background-size: cover;
height: calc(100vh - 260px);
```
en el documento de Home.sass y ahora ya se ve como había pensado.

- Input heigth (ahora textarea) en Form.

El input del Form para escribir una noticia tampoco me dejaba ponerle el tamaño que me hubiera gustado, así que seguí la sugerencia de [Iván](https://github.com/ivanpuebla10) y lo cambié a textarea de forma que ya se puede modificar cómodamente al tamaño deseado.

## Autores

[Rebeca](https://github.com/RebecaASuesta) 🤹‍♀️