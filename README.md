# Asesor de Viajes

![Asesor de Viajes](https://i.ibb.co/qph2cZn/image.pngg)

## Introducción

Construye e implementa una aplicación avanzada de compañero de viaje utilizando Google Maps. Con geolocalización, la API de Google Maps, búsqueda de lugares, obtención de restaurantes, hoteles y atracciones basadas en la ubicación mediante las API especializadas de RapidAPI, filtrado de datos y mucho más, esta aplicación de Asesor de Viajes es la mejor aplicación de mapas que puedes encontrar actualmente en YouTube y en todo Internet.

En este video, aprenderás:

- Prácticas avanzadas de React, como la estructura de carpetas y archivos, hooks y refs.
- Creación de una interfaz de usuario utilizando Material UI.
- Trabajo con la API de Google Maps.
- Y lo más importante, obtener datos de fuentes ilimitadas utilizando RapidAPI.
- Básicamente, te convertirás en un experto en el trabajo con APIs.

[RapidAPI](https://rapidapi.com/hub?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
[API de Asesor de Viajes](https://rapidapi.com/apidojo/api/travel-advisor?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
[API de Open Weather Map](https://rapidapi.com/community/api/open-weather-map?utm_source=youtube.com/JavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)

## Mantente al día con nuevos proyectos

Próximamente habrá nuevos proyectos importantes. Suscríbete a la lista de correo para mantenerte al día: https://javascriptmastery.eo.page/mailing-list.

Configuración: ejecuta `npm i && npm start` para iniciar el servidor de desarrollo asegurate de utilizar la versión 9.7.1 de npm y la versión 16.6.0 de node.

## Funcionalidades añadidas

1. Descripción de la Feature: Weather API Check:

- Detalles para añadir Feature:

  - Eliminar todo lo relacionado a la API Weather utilizada anteriormente, debido a que esta deprecado
    y no se pudo ocupar otro que se asimilara al que utilizaba.
  - Buscar una API con respecto al Clima que fuera de forma gratuita y completa en cuanto al uso de la misma.
  - Crear la Card o el Contenedor donde se mostraria la información del Clima y la solicitud de la Ciudad o Lugar
    que se desea conocer el clima.
  - Darle el mejor diseño adaptándose al proyecto ya utilizado.
  - Hacer las pruebas pertinentes del código y funcionamiento de la Feature.
  - Agregar el Error que "no se encuentra la ciudad solicitada", esto es debido a que no
    se le ha proporcionado una indicación certera del lugar.

- Pasos para reproducir la Feature:
  - Clonar el repositorio desde el enlace proporcionado
  - Ejecutar el comando npm i && npm start con la versión 16.6.0 de node
  - En el header de la aplicación, se ha colocado una indicación para poder verificar el clima
    , es ahi donde se procede a presionar el botón con forma de nube.
  - Tras realizar el paso anterior, aparecerá un modal donde debemos digitar la ciudad que deseamos saber el clima, luego presionar buscar
    y listo, ya nos aparecerá la información solicitada.

2.  Descripción de la Feature: Improve Designs

- Detalles para añadir Feature:

  - Agregar en el Header un Toggle Button para controlar el Modo Nocturno o Claro de la Aplicación.
  - Añadir el control de los colores y funcionalidad del botón, con ayuda de CreateTheme de Material UI
    para poder agregar los colores primarios y secundarios de ambos estilos.
  - Agregar Footer de la Aplicación.
  - Craer y añadir un Logo asociado al Trip and Weather Advisor.

- Pasos para reproducir la Feature:
  - Clonar el repositorio desde el enlace proporcionado
  - Ejecutar el comando npm i && npm start con la versión 16.6.0 de node
  - En el header de la aplicación se ha colocado un botón en forma de sol, donde solo se necesita presionarlo para cambiar
    el tema de la aplicación.
