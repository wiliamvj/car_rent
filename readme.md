# Rent Car API

Simple api for car rental

Technologies used:
- Node
- Typescript
- PostgreSQL
- Prisma ORM
- Swagger
- Jest


## How to run?

- Git clone this repo
- Execute command ```yarn``` or ```npm install```, ff using npm, I recommend deleting the **yarn.lock** file
- Create an **.env** file for the postgresql environment variable see an example [here](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Execute ```yarn prisma migrate dev``` or ```npm prisma migrate dev``` to run the migrations

## Available commands

- ```yarn dev``` start the server
-  ```yarn test``` start the tests with jest

These commands can be changed in **package.json**



 ###  View the documentation
- access the base url /docs

## About the tests
Simple unit tests in the business rules

- I hope the user created is with these values </br >
**Creating a new user**

- I hope the user is deleted </br >
**Delete user by id**

- I hope you get at least 1 user </br >
**List a one user**

- I hope the user updated is with these values </br >
**Update a user by id**

- I hope the user receives a token </br >
**Login user and received new token**

- I hope a vehicle is created for rent </br >
**Creating a new car for rent**

- I hope you have a vehicle </br >
**List all cars**

- I hope a vehicle is updated </br >
**Update car by id**

- I hope the car is deleted </br >
**Delete car by id**

- I hope a success message to rent car </br >
**Creating a reservation for the user**

- I hope a success message to cancel rent </br >
**Cancel a reservation for the user**
