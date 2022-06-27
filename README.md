# Netflix prototype

This is a project that aims to create a Netflix prototype. It was developed during a full-stack Bootcamp offered by Ethos/Mcfayden with a duration of 4 weeks.

![netflix logo](https://user-images.githubusercontent.com/43677448/175781157-36494538-6b3e-4c0c-b6cb-4961103f0d31.png)

## About The Project
The goal is to build a web application's front-end and back-end using mainly the technologies: **React and Node.js and TypeScript**.

The first page is the Login page, where the user can perform necessary authentication to be able to use the application. To be authenticated the user must provide the correct email and password combination. If any one of them is incorrect, an error message will be displayed to the user.

![Untitled (6)](https://user-images.githubusercontent.com/43677448/175781286-6111f521-b61d-41f1-9799-ade1a31b3646.png)

Once the user is authenticated he will be redirected to a page with the three lists: 
- Movie list
- Series list 
- My list (personal movie and series selection)
 
![movies-list](https://user-images.githubusercontent.com/43677448/175781240-5fa228ec-9a22-4995-8677-b2017838a987.png)

## Built With
To build this application, it were chosen technologies that helped to develop a clean and performatic code. 
- Front-end side:
    - To validate the data provided by the user it was used **Yup schema** to match if the email and password provided are in accordance with the application's business rules.
    - **Redux-Saga** was used to manage, control and map the side effects of the application, such as the asynchronous calls to fetch data from the backend API

- Back-end side:
    - **TypeORM** was used to configure Entity objects and store data in a **MySql** database and establish relationships between Entity instances
    - **Docker** was used to create a container and make possible to generate an environment where we could install and use the MySql database

## Special Thanks
- Ethos Soluções and McFayden
- Instructors [Diego Oliveira](https://github.com/diegooliveira21) and [Bruno Benício](https://github.com/BrunoBNascimento)
