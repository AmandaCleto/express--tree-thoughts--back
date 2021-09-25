# Tree-Thoughts (Back-end) 🌲
## A study project on ***NodeJS with Express***

<br>
<p float="left">
 <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
 <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
 <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
 <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
</p>
<br>

## Idea 💡:
Here will be concentrated the API from Tree-Thoughts (Front-end) project. In it will be the integration between the thoughts card and the database.\
This project will be using NodeJs with the library Express.js following REST Design Pattern.<br>
![Logo Tree Thoughts Dark Version](https://amandacleto.github.io/images-for-projects/public/images/tree-thoughts/tree-thoughts-logo-bg-dark.svg)

## Functionalities:
- Register, get and update user data;
- User authentication (JWT Token);
- Register, delete, get and update thoughts cards;

## Running the project: 🚀
To run and view the project in **development mode**, you will need to follow the next steps.

### Prerequisites:
The tools necessary for the project to work will be listed below.
- **NodeJS versão 14** <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/nodejs.svg" height="20" /><br>
  [<ins>NodeJS installation Guide</ins>](https://nodejs.org/en/).
  
### Installing dependencies:
Run the command to install the project dependencies.
   ```sh
   npm install
   ```

### Configuring env file:
To configure the project's environment variable file, follow the steps below:
- Step 1- Create an ```.env``` file at the root of the project;
- Step 2- Copy the contents of the ```.env.example``` file to your new .env file;
- Step 3- Change the content informing your **database connection data** and **TCP port** for project execution
#### After env setup, proceed with the steps below ✌

### Running database structure:
##### ⚠ Database structure commands should only be executed at the initial project setup or when its structure is changed ⚠
The scripts below build the database structure
   ```sh
   npx sequelize db:migrate
   ```
   ###### Command to create structure
   
   <br>
   
   ```sh
   npm sequelize db:seed:all
   ```
   ###### Command to upload standard data in defined tables
  
### Running the project:
The scripts below run the project build.
   ```sh
   npm run server
   ```
   ###### Command to run the project in development mode
   
   <br>
   
   ```sh
   npm run watch
   ```
   ###### Command to run the project in watch development mode

---
## Links: 🌐
***Sequelize:***<br>
[<ins>Sequelize docs</ins>](https://sequelize.org/master/)<br>
[<ins>Datatypes</ins>](https://sequelize.org/v5/manual/data-types.html)

***Express:***<br>
[<ins>Express docs</ins>](https://expressjs.com/pt-br/)<br>
[<ins>Rest API</ins>](https://rockcontent.com/br/blog/rest-api/)

***JWT:***<br>
[<ins>JSON Web Tokens docs</ins>](https://jwt.io/)<br>
[<ins>JWT NodeJS</ins>](https://github.com/auth0/node-jsonwebtoken)

---
## Licença
This project is licensed under the [MIT] license - see the LICENSE.md file for details
