# Pruebas-de-Software 
 
 INFRAESTRUCTURA DEL PROYECTO
 
 Frontend fue desarrollado con React.js, un framework.
 
 Backend fue desarrollado con Express.js, una libreria de Node.js.
 
 Servicios de bases de datos no relacional (MongoDb) levantado con Docker.
 
 
 SERVICIO BD MONGO

     docker-compose up -d


FRONTEND & BACKEND

Instalar dependencias: 
     
     npm install

Correr aplicación: 
     
     npm run start


HERRAMIENTAS UTILIZADAS

Docker Desktop: https://www.docker.com/products/docker-desktop

Insomnia: https://insomnia.rest/download


NoSqlBooster: https://nosqlbooster.com

Link para conectarse a la Base de Datos: 

     mongodb://localhost:27017


GitHub Desktop: https://desktop.github.com (Iniciar sesión con cuenta de GitHub)


¿COMO INSTALAR Y CORRER DESDE 0?

Descargar todas las aplicaciones descritas arriba en la sección de HERRAMIENTAS

Verificar que tengamos Node.Js instalado usando el sig. comando:

     node -v
 
 De no tenerla instalada entonces descargar aqui: https://nodejs.org/es/download/
 
 Tener una copia del proyecto en tu computadora.
 
 Abrir la aplicación de Docker Desktop
 
 Entrar a la carpeta services, crear una subcarpeta llamada 'mongodb' y ejecutar el comando descrito arriba para levantar el sevicio de MongoDB
 
 Entrar a la carpeta del backend y frontend y ejecutar el comando descrito arriba para levantar correspondientes aplicaciones.


Requerimiento:
● Un módulo para control de acceso, en el que se deberá solicitar un usuario y
contraseña para poder realizar acciones específicas.
● Opción para poder realizar un nuevo registro.
● Solicitar datos de registro como nombre, usuario, edad, dirección, etc.
● La contraseña deberá tener una longitud mínima de 6 caracteres, mayúscula y
número.
● Mostrar una pagina de inicio dónde se muestren algunas ofertas de artículos.
● Barra de opciones y búsqueda donde aparezcan los diferentes tipos de
artículos,categoría o de tema.
Tipos de artículos:
-Ropa
-Figuras
-Coleccionables
Categorías:
Películas
Series
Anime
Videojuegos
● Al seleccionar un artículo desde cualquiera de las secciones deberá abrirse la
información detallada de ese artículo.
● Dependiendo del artículo se podrá o no seleccionar talla, color.
● Un módulo de transacciones que sean guardadas en una base de datos para su
posterior consulta.
● Al comprar solicitar método de pago, información de pago y dirección de entrega.
● Métodos de pago: tarjeta de crédito, débito, paypal.
● Enviar correo electrónico a manera de recibo por la compra con datos de transacción
e información correspondiente.
● Tener pagina de pedidos realizados donde se muestran las compras hechas y fecha
de compra.
● Tener en cuenta cantidad de artículos disponibles en almacén (5 por artículo)
● Si se agotan bloquear opción de compra o mostrar mensaje correspondiente de
producto agotado


[TBD:
     Jorge:
 - Store purchases in database (rest qty in purchased product, include date)
 - Make checkout update paymentMethodDetails (just grabbing first char)
 - Create Purchases view and show data of all purchases 

     Pau:
 - If qty is 0 disable purchase and show message
 - Implement in Home show products filtered by categories
 
     Fer:
 - Request all payment methdos data and delivery adress
 - Fix checkout submit button
 - Send email with purchase data
]
