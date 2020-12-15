# A Mini Microservices Application

This is a minimalistic React, Node and Express application that demonstrates the basic concepts of event-based microservices.

<br />

## Monolithic Server vs Microservices

A monolith contains routes, middlewares, business logic and database access to implement **all features** of an application.

![monolith](./assets/monolith.png)
<br />

On the other hand, a single microservice contains routes, middlewares, business logic and database access to implement **one feature** of an application.

![monolith](./assets/microservices.png)

<br />

## Why Microservices?
1. Increased resilience.
    - With microservices, the entire application is decentralized and decoupled into services that act as separate entities.
    - Failure of one service has minimal impact on other services.
2. Improved scalability.
    - Since each service is a separate component, you can easily scale up a single service without having to scale the entire application.
    - This saves costs and simplify scalability requirements.

<br />

## Benefits of Database-Per-Service

In microservices design, each service gets its own database (if it needs one) and services will never reach into another service's database.

1. We want each service to run independently of other services.
    - If a centralised database is used, all services will fail if the database fails to work correctly.
    - At the same time, scaling the database will be a challenge as different services might have different requirements.
2. Some services might function more efficiently with different types of DBs (SQL vs No-SQL).

<br />

## Data Management in Microservices

There are different communication strategies between services in a microservice architecture. They can be distinguished into **sync** and **async** communications.



### Sync Communication

In Sync Communication, services communicate with each other using **direct requests**.

![sync](./assets/sync-communication.png)
#### Pros
1. Conceptually easy to understand.
2. As observed in Service D above, it doesn't need a database!
#### Cons
1. Introduces a dependency between services.
2. If any inter-service request fails, the overall request fails.
3. The entire request is only as fast as the slowest request.
4. Can easily introduce nested requests.

<br />

### Async Communication with Events
All services will communicate through an event bus. The services will communicate by emitting events.

![sync](./assets/async-1.png)

For example, for Service D to function, it will need user information from Service A. First, it emits an event to event bus requesting for user information. The event can have a type and a payload.

The event bus will know how to route and handle events accordingly. In this case, the event bus will pass the event of type UserQuery to Service A.

![sync](./assets/async-2.png)

Once Service A processes the event, it will emit a new event with the data requested by Service D to the event bus. The event bus then routes the new event back to Service D.

![sync](./assets/async-3.png)

This process repeats for the rest of the information Service D requires from other services.

The pros and cons of the async communication mentioned above is the same as sync communication!