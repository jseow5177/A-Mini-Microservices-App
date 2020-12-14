# A Mini Microservices Application

### This is a minimalistic React, Node and Express application that demonstrates the basic concepts of event-based microservices.

<br />

## Monolithic Server vs Microservices

### A monolith contains routes, middlewares, business logic and database access to implement **all features** of an application.

![monolith](./assets/monolith.png)

<br />

### On the other hand, a single microservice contains routes, middlewares, business logic and database access to implement **one feature** of an application.

![monolith](./assets/microservices.png)

<br />

## Why Microservices?

<br />

## Benefits of Database-Per-Service

### In microservices design, each service gets its own database (if it needs one) and services will never reach into another service's database. This is because

1. ### We want each service to run independently of other services.
    1. ### If a centralised database is used, all services will fail if the database fails to work correctly.
    2. ### At the same time, scaling the database will be a challenge as different services might have different requirements.
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

