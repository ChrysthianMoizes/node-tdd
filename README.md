# NODE TDD

Para subir o banco de dados com o docker utilize o seguinte comando:

**sudo docker run --name database -p 5432:5432 -d -t -e POSTGRES_DBNAME=nodetdd kartoza/postgis**

Depois, execute as migrations: **npx sequelize db:migrate**


