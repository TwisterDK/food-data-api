# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

Steps to create new entity:

1. Add entity file in entity folder
2. Add entity to data-source.ts file
3. Run `npm generate` command (generates migration file in migration folder)
4. Run `npm migration` command (updates db)