# Netflix prototype

This is a project that aims to create a Netflix prototype. It was developed during a full-stack Bootcamp offered by Ethos/Mcfayden with a duration of 4 weeks.

![netflix logo](https://user-images.githubusercontent.com/43677448/175781157-36494538-6b3e-4c0c-b6cb-4961103f0d31.png)

## About The Project
This is a project that aims to develop a Netflix prototype. It was developed during a full-stack Bootcamp offered by Ethos/Mcfayden with a duration of 4 weeks.
The goal is to create two pages,with front-end and back-end interfaces, the main technologies used in the project are **React and Node.js and TypeScript**.

The first page is the Login page, where the user can enter into the application. To be authenticated the user must provide the correct email and password correct, if any one of them is incorrect an error message will be displayed.

![Untitled (6)](https://user-images.githubusercontent.com/43677448/175781286-6111f521-b61d-41f1-9799-ade1a31b3646.png)

Once the user is authenticated he will be redirect to a show list page, where there are a a banner of shows and a carrousel of the list of shows added to user’s list, a list of movies and list of series available to user choose.

![movies-list](https://user-images.githubusercontent.com/43677448/175781240-5fa228ec-9a22-4995-8677-b2017838a987.png)

## Built With
It was used some techologies to create funcionatilies of the application: 
- Into the front-end side:
    - to validate the data provided by the user it was used **Yup schema** to match if the data are in accordance with the application's business rules.
    - we also used **Redux-Saga** to manage, control and map the side effects of our application, such as the asynchronous calls to fetch data from the backend API
- Into the back-end side:
- we used **TypeORM** to configure Entity objects and store data in a **MySql** database and establish relationships between Entity instances
- We also used **Docker** to create a container and make possible to generate an environment where we could install  and use the MySql database

## My Gratitude
- Bootcamp offered by Ethos Soluções and McFayden
- instructors [Diego Oliveira](https://github.com/diegooliveira21) and [Bruno Benício](https://github.com/BrunoBNascimento)
