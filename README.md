# AlgoWiz 

## Product description
Algowiz is a highly interactive web-based application aimed at spreading the love and knowledge we have for computer science. Initially, it will act as primarily an academic aid to students and teachers alike. It will cover a wide array of topics ranging from sorting and searching algorithms to exploring graphs. The experience will include a separate section for each of the various topics. Each of these sections will have a study guide, a quiz, and a visualizer to help visualize the concepts.

## [Developer Guide](/documentation) and [User Guide](/documentation) 

## Latest Deployment
The latest AlgoWiz version is live at
[aadijain725.github.io/AlgoWiz/](https://aadijain725.github.io/AlgoWiz/)

## Local Setup:

### Run the React Frontend
**Note:** [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) is required to run algowiz-app
1. Make sure you have Node and npm installed
```
node -v
```
```
npm -v
```
We need npm to build the app, so that we can run and test it.

2. From the AlgoWiz root directory navigate into algowiz-app:
```
cd algowiz-app
```
3. Install the dependencies from the project directory:
```
npm install
```

This readies the system to be ran and tested by installing all dependencies.

3. Start the Development Server:
```
npm start
```

The above command runs the app locally on the user's computer.

If it does not load automatically open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Other Relevant Scripts**

```
npm test
```

This runs all the test suites available for the app.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm test -- --coverage
```
Runs the tests and generates coverage reports

```
npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### Setting up backend Spring boot
- Set up PostgreSQL Database
- Install latest Java
- cd into AlgoWiz/api/algorithms
- Run Spring Boot `./mvnw spring-boot:run` on a bash based shell. 

### Configuring the PostgreSQL Database

#### 1. Install PostgreSQL
- Go to the website below and download the appropriate installer. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads?quicktabs_postgres_plus_dwnlds=1 
- During installation, set a password for the default superuser “postgres”.

#### 2. Update application.properties file in the /api/algorithms/src/main/resources
- Change the value for spring.datasource.username to `postgres`(default value) and  spring.datasource.password to the one you set up during installation.
- If you changed the port number during installation, update it in spring.datasource.url, else leave it as it is.
- When pushing to public repo, remove the username and password for security purpose. 

#### 3. Creating the database
- Open SQL shell from the start menu and login as “postgres” user.
- Type in `CREATE DATABASE algowiz;`
- Then `GRANT ALL PRIVILEGES ON DATABASE "algowiz" TO postgres;`
We have now configured the database!  

### Install Java 11 or latest Java and latest version of Maven

### Run Spring Boot in command line
1.  cd into AlgoWiz/api/algorithms

2. Run the following command in a terminal  
     `./mvnw spring-boot:run` on a bash based shell.
   
   For Mac user might encounter permission denied when running maven command  
        do `chmod a+x mvnmw` to grant permission
    
3. Open the browser  
   For homepage, type  
   ```localhost:8080/api/v1/home```  
   
   For lesson page, type    
   ```localhost:8080/api/v1/lesson```  
   
   For quiz page, type  
   ```localhost:8080/api/v1/quiz```  
   
   You can choose to run the service with curl  
   
   ```$ curl localhost:8080/api/v1/home```  
   
   ```$ curl localhost:8080/api/v1/lesson```  
   
   ```$ curl localhost:8080/api/v1/quiz```  

## Working Use Case:

The current version of our app can handle the events in the following use case. Both the front and backend work perfectly well for this case.

**Actors:** Jeff is an undergraduate student who is joining as a research assistant over the summer. 

**Triggers**: He will work under the map routing system team and wants to test his knowledge on various graph algorithms before joining.

**Preconditions:** Jeff has already taken a data structures and algorithms course last quarter. He wants to test his knowledge by taking quizzes on the algorithms. 

**Postconditions:** He is now confident about all the graph algorithms listed on AlgoWiz.


**Steps:**

Jeff follows the steps listed below in his interaction with the web app.

1. Jeff visits: https://aadijain725.github.io/AlgoWiz/


2. Jeff explores the AlgoWiz website and goes to the graph algorithms topic.

3. Jeff then selects the desired algorithm.


4. Jeff clicked on the quiz button next to the lesson which takes him to the quiz directly.

5. He gets an answer wrong, and goes to the lesson page for that subject to learn more about the topic. Then, he aces the quiz.

**Extensions:**

Visualizer in Lesson Page: 

Jeff does not have access to a visualizer to interact and learn more about graphs currently. He does have access to a nice visual GIF. In a future version he will have access to a visualizer.

Other Quiz Pagse:

Currently, Jeff only has a quiz section that has a Dijkstra's quiz. As we expand the backend database, he will have access to more quizes.


### Other Use Cases:

[Other Use Cases can be found here](/documentation/Requirements.md#Use-Cases) 

## Major Goals
The following is a list of the Major Goals we have achieved till now, and also ones that we have to complete.

- [X]  **Lessons** - Organize lessons by topic/category (Sorting Algorithms, Graphs, etc.
At least one lesson per topic with three topics planned for initial release.
Users can visit lessons in any order (there is no locked progession system).
Each lesson contains: 
    - [X]   A reading section outlining th concepts.
    - [ ]   A visual interactive demo.
    - [X] A quiz section with feedback.

- [X]  **Quiz System** - Each lesson contains a quiz section to test or review a users
understanding of the particular concept. Users recieve feedback on both correct 
and incorrect answers as each answer is submitted. Correct answers display encouraging visuals while wrong answers provide hints. Users are not required to 
pass quizzes to procede to other lessons. 

- [ ]  **Interactive Demo** - Each lesson contains at least one visual aid to help illustrate concepts. 
Interactive Demos have a simple to understand UI that allows the user to procede or review at their own pace.


- [X]  **Interactive Web Platform** - All these features will be organized and hosted
on a single easy to navigate web based platform designed to be easy to scale and
integrate more content and features.

## Stretch Goals
1. **User Database** - User profiles will allow users to keep track of their progress.
2. **Gamified Point System** - A reward system to motivate studying. 
3. **Online Leaderboard** - Public competition to encourage students to explore the site and attempt more lessons and quizes. 

## Directory Map

**[.github/workflows](/.github/workflows):** CI/Workflows

**[algowiz-app](/algowiz-app):** Frontend code

**[api](/api):** Backend Code 

**[documentation](/documentation):** Living document and Team Policy documentation

**[layouts](/layouts):** Wireframes, UI mockups, and project planning

**[status-reports](/status-reports):** Weekly status reports

## Git Workflow / Guide
[Read our Git Guide](/documentation/gitguide.md) if you want to start 
contributing to the repo but feel lost!

## Important Frontend Dependencies

* [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) - 
for responsive css
* [Framer Motion](https://github.com/framer/motion) - 
for Visualizer Animation
