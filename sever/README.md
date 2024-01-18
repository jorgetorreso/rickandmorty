# rick-and-morty-backend

Proyecto muy simple, creado para el challeng rick-and-morty aplicando conceptos de SOLID en la construcción de una API Rest con nodejs y typescript.

## Tecnologías utilizadas
- Javascript
- Typescript
- Node.js
- npm (gestor de paquetes de Node.js)
- Prisma ORM (para mapear objetos al paradigma de la base de datos relacional)
- @prisma/client (cliente para ejecutar comandos de prisma localmente en el proyecto a través de la terminal)
- mysql

## Pasos a seguir
**Aviso:** Para probar la aplicación, es necesario tener conocimientos en: prisma ORM, mysql, comandos de terminal.

### Clonar y configurar el proyecto
**1er paso: clonar el repositorio en tu máquina desde github.**

**2do paso: entrar en la carpeta del proyecto.**

**3er paso: crea un archivo .env fuera de la carpeta src e inserta la conexión a la base de datos.**

DATABASE_URL="mysql://crabsdev_rickandmorty:rickandmorty@31.22.7.241/crabsdev_rickandmorty?schema=public"

**Enlace a la documentación de referencia:** [Documentación de Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-msql)

**4to paso: instalar las dependencias.**

### Iniciar la base de datos mysql usando NPX prisma generate

Después de seguir estos pasos, la base de datos ya está creada y ahora puedes ejecutar la aplicación utilizando el siguiente comando.

ahora si 
npm run start:dev