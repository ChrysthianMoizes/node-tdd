# GoBarber

Essa é uma aplicação para gerenciamento de barbeiros e clientes que foi desenvolvida durante o **Módulo 2** do Bootcamp **GoStack** da **RocketSeat**.

Para subir o banco de dados com o docker utilize o seguinte comando:

**sudo docker run --name database -p 5432:5432 -d -t -e POSTGRES_DBNAME= kartoza/postgis**

Depois, execute as migrations: **npx sequelize db:migrate**


