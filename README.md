
# Alejandría

## Configuración de la Base de Datos

1. **Crear la Base de Datos:**
   - Utilice PostgreSQL localmente (a través de pgAdmin) o con Docker.
   - Cree una base de datos llamada "Alejandría".

2. **Ejecutar Scripts SQL:**
   - Ejecute el script `alejandriaCreateBD.sql`.
   - Luego, ejecute el script `triggers.sql`.
   - Finalmente, ejecute el script `llenado.sql`.

## Configuración del Backend

1. **Configuración del Entorno:**
   - Abra la carpeta `alejandria-backend`, de preferencia en IntelliJ IDEA para la construcción automática del proyecto.

2. **Configurar `application.properties`:**
   - En el archivo `application.properties`, establezca la configuración según los datos de su base de datos. La ruta es: `alejandria-backend > target > classes > alejandriaFH > application.properties`.

3. **Ejecutar el Backend:**
   - Ejecute la aplicación desde `alejandria-backend > src > main > java > alejandriaBackendAplication`.

## Configuración del Frontend

1. **Instalación de Dependencias:**
   - Posiciónese en la carpeta `alejandria-frontend`.
   - Ejecute el comando `npm install`.

2. **Ejecutar el Frontend:**
   - Ejecute el comando `npm run dev`.

## Configuración Fronted Cliente (vue)

   - Posiciónese en la carpeta `Alejandria/frontend-cliente/`.
   - Ejecute el comando `npm install`.
   - Instalar dependencias: `npm install`.
   - Formatear el código: `npm run format`.
   - Iniciar el servidor de desarrollo: `npm run dev`.