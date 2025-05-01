# Movie Explorer App

## Objetivo

Construir una pequeña aplicación web en React que consuma una API y permita explorar una lista de películas. Queremos que trates este mini proyecto como si lo fueses a poner en producción.

## Requisitos

El único requisito es el siguiente: de usarse alguna librería para gestión de estado, cosa totalmente opcional, por favor usar `@preact/signals-react`

## Instrucciones

Listado de películas:

- Muestra el título, imagen y resumen de cada show.
- Paginación o scroll infinito (mínimo 20 elementos visibles).

Detalle:

- Al hacer clic en una película, muestra una vista de detalle con más información.

Favoritos:

- El usuario puede marcar películas como favoritas (almacenado en localStorage).

Usa esta API pública de ejemplo `GET https://api.tvmaze.com/shows`.

Incluye un README explicando brevemente qué harías diferente con más tiempo.

## Entrega

Sube tu código a un repo de GitHub. Si es privado trendrás que darnos acceso (usuarios ograu y lonamiaec de github)

## MEJORAS ADICIONALES

Testing:

- Agregaría pruebas unitarias para asegurar la estabilidad del comportamiento principal (renderizado de películas, favoritos, detalles, etc).
- Implementaría pruebas e2e usando Cypress o Playwright para simular la interacción real del usuario verificando cuando hace click en una película para ver los detalles o incluso al añadir y eliminar favoritos.

State Management - Gestión de estados

- Con mas tiempo habría integrado un metodo de gestión de usuarios global como lo indica el enunciado. En este mini proyecto gestioné los estados principalmente con hooks locales como el useState y algunos custom hooks como el useFavourites y el useMovies para encapsular la lógica del proyecto manteniendo el codigo reutilizable y organizado.

Mejoras UI/UX

- Agregaría animaciones y mejor estilo para que se vea mas agradable al usurio, también mejoraría la forma como se muestran los favoritos
