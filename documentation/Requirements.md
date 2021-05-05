# AlgoWiz Requirements
  * [Git Repo](#git-repo)
  * [Team Info & policies](#team-info---policies)
    + [Roles](#roles)
      - [UI Designers/Frontend Engineers](#ui-designers-frontend-engineers)
      - [Backend Engineers](#backend-engineers)
    + [Communication Tools](#communication-tools)
    + [Team Policies](#team-policies)
  * [Product Description](#product-description)
    + [Major Goals](#major-goals)
    + [Stretch Goals](#stretch-goals)
  * [Use Cases](#use-cases)
  * [Non-functional Requirements](#non-functional-requirements)
    + [Scalability](#scalability)
    + [Security and Privacy](#security-and-privacy)
    + [Usability](#usability)
    + [Portability and Compatibility](#portability-and-compatibility)
  * [External Requirements](#external-requirements)
  * [Schedule:](#schedule-)
    + [Other Important Team Meetings](#other-important-team-meetings)
    + [Beta Release Goals](#beta-release-goals)
  * [Major Risks](#major-risks)
  * [External Feedback](#external-feedback)
  * [Software Architecture](#software-architecture)
    + [Major Components and Functionality](#major-components-and-functionality)
    + [Frontend Structure:](#frontend-structure-)
    + [Backend Structure:](#backend-structure-)
      - [Major components for the backend:](#major-components-for-the-backend-)
    + [Architecture Assumptions](#architecture-assumptions)
    + [Architecture Alternatives](#architecture-alternatives)
  * [Software Design](#software-design)
    + [Toolset](#toolset)
    + [Frontend](#frontend)
    + [Backend](#backend)
  * [Software Design (Frontend)](#software-design--frontend-)
  * [Software Design (Backend)](#software-design--backend-)
  * [Coding Guidelines](#coding-guidelines)
  * [Test Plan & Bugs](#test-plan---bugs)
    + [Continuous Integration & Deployment](#continuous-integration---deployment)
    + [Front End Tests](#front-end-tests)
    + [Backend Tests](#backend-tests)
    + [System Tests:](#system-tests-)
  * [Documentation Plan](#documentation-plan)

 
 ## Git Repo
[https://github.com/aadijain725/AlgoWiz](https://github.com/aadijain725/AlgoWiz)

## Team Info & policies

### Roles
Team members are evenly distributed between the three main roles, there is a 
possibility that team members may change roles as features near completion.  

#### UI Designers/Frontend Engineers
As a web based application with heavy emphasis on an interactive visual 
component, the UI will be critical to the success of this project. 
Since we have a small team our UI Designers will also act as Frontend 
Engineers, responsible for implementing and testing the functionality of the App.

* **Aadi Jain:** I have experience and a keen interest in using React and loves 
developing websites. Further, wants to develop an interactive and user-friendly UI.

* **Shivam Drishti Bhatia:** I have experience in React and always loved how 
the frontend works. I also have experience in developing interactive and 
user friendly applications on React. 

* **Estevan Seyfried:** Holds a certificate in, and has worked as a TA for 
UW’s Full Stack Javascript Certificate program. 

#### Backend Engineers 
Responsible for designing and implementing the server and database required 
for the app to function and scale once launched.

* **Wendy Jiang:** I chose backend because I’m interested in creating contents 
for the web page and adding functionality such as the quiz section and visuals 
to the webpage. I’m familiar with Java and am able to create these components.

* **Michael Wen:** I chose backend because I have more experience with 
programming in that area and minimal experience with frontend design.

* **Pranesh Reddy Jambula:** Previously worked with frontend technologies 
in other courses, but never worked on backend development before and wanted to 
learn something new.

### Communication Tools
* Source Code Repository - Github 
* Meetings - [Zoom Meeting](https://washington.zoom.us/j/5910630886)
* Discussion platforms:
    * Slack - for higher-level detail discussions and specific interaction with the PM.
    * Discord for more urgent communication and discussions.  
    We split into sub-teams here.
* Keeping track of progress-  Trello (scrum)

### Team Policies
1. Every pull request must have at least two passing reviews before merging 
with the main branch.
2. Bugs must be documented and categorized when they are first encountered. 
3. Major bugs (App crashing) must be resolved before continuing development 
on any related features.
4. At least 2 members per sub team.
5. Whenever possible develop in pairs, one tester, and one coder to have more 
refined code.
6. Frontend code should follow Airbnb Style Guide: 
https://github.com/airbnb/javascript/tree/master/react
Frontend-- React, Backend -- Java API, possibly Node Express Server 
7. Read the [Git Guide](gitguide.md) for more information regarding 
the AlgoWiz repository policies and best practices.
 
## Product Description

Algowiz is a highly interactive web-based application aimed at spreading the 
love and knowledge we have for computer science. Initially, it will act as 
primarily an academic aid to students and teachers alike. It will cover a wide 
array of topics ranging from sorting and searching algorithms to exploring 
graphs. The experience will include a separate section for each of the 
various topics. Each of these sections will have a study guide, a quiz, and 
a visualizer to help visualize the concepts.

### Major Goals
1. Feature three algorithm topics; Sorting algorithm, Graph algorithm, and Searching algorithm.  
    * Each topic will feature algorithms. Ex. Sorting algorithm features 
    merge sort, insertion sort. Graph algorithm features pathfinding(Dijkstra’s), 
    Depth First search, Breadth First search. Searching algorithm features binary search.
    * Each algorithm has its own page which will contain introductory material 
    and a list of prerequisite skills. 

2. Quiz system 
    * There will exist an optional quiz section under each algorithm that tests 
    understanding of the particular algorithms. This quiz will act as a 
    stress-free test to the topics learned in the section.  
    * User Interaction:
        * On getting the answers correct, we give some positive feedback 
        (great work) and recommended the next steps
        * On wrong answers, we give some feedback and give hints

3. Interactive visualization of the Algorithms
    * There will be a section with a visualizer which will visualize the 
    internal workings of each algorithm. 
    * The visualizer would have some sort of array/ graphical representation 
    of the algorithm in work.

4. An interactive web-based platform
The app is going to be a web application accessible by anyone using the internet.

### Stretch Goals
1. User Database (Profiles) to keep track of user progress in quizzes and the 
different sections they have covered.
    * We plan on using a Google API to set up a user database system to 
    store and update user progress, 
2. Gamified Point system (reward points) -
    * A reward system to help motivate studying. 
    * Something like a leaderboard to make the experience more rewarding is 
    one possible idea.
    * Further, animations may be added to make the UI experience more fun.
3. Data Structures (to learn basics):
    * We may add a new section on Data structures and some of the more 
    introductory topics. 
    * Topics such as arrays linked lists etc. to cater to an even larger audience. 
 
## Use Cases
(Functional Requirements)

(Wendy)  
> **Actors:** Jane, a sophomore in College, is applying for an internship in the summer.  
**Triggers:** Need to refresh on her algorithm concepts so she can ace that interview.  
**Preconditions:** Jane browses through AlgoWiz site, there are different  
algorithm concepts under each topic.
**Postconditions:** She has a better understanding of algorithm concepts  
after reviewing and taking the quiz.
>**Steps:**
>1. She clicks on one of the algorithm lessons and it takes her to a new 
page that contains explanations and visuals of that algorithm. She can read 
through each explanation and watch the interactive visualization of that algorithm.
>2. There is an optional quiz section at the end of the algorithm to check 
for understanding.
>3. Jane clicked on the quiz, it takes her to a quiz page, starting with the 
first question.
>4. She receives immediate feedback on her answer. She can click on next to 
move to the next question.
>5. She has the option to exit the quiz and click the back button that will 
take her back to the algorithm page.
> 
> **Extensions:**  
> * Jane can continue using the website anytime
> * She can view any algorithms without having to take the quiz
> **Exceptions:**  
> * The contents are missing some algorithm concepts

(Estevan) 
>**Actors:** Ben is a college tutor assisting intro to programming students remotely. 
**Triggers:** Ben is looking for a way to help students better understand 
sorting algorithms for an upcoming exam.  
**Preconditions:** Ben is already familiar with AlgoWiz and searches for the 
correct sorting algorithm.  
**Postconditions:** Ben is able to help the student better understand the concept. 
**Steps:** 
>1. Ben searches for and finds the correct algorithm.
>2. He skips the quiz section.
>3. He shares his screen as he use the visualizer to walk the student through 
the algorithm.   
>
>**Extensions:** 
>* Be may choose to have the student use the tool on their own.
>* Ben may use the quiz to help the student in addition to the visualizer.  
>
>**Exceptions:** 
>* The site is down.
>* Ben has trouble navigating the site.

(Michael)  
> **Actors:** Jason is a high school student who learned fundamental 
programming concepts at school.  
**Triggers:** Jason is curious and wants to get an idea of what other, more 
complex programming concepts like algorithms without having to go through 
overly in-depth resources.   
**Preconditions:** Jason is already familiar with programming fundamentals, 
such as loops, methods/functions, syntax. etc.  
**Postconditions:** Jason will get a general idea of what some of the algorithms are. 
**Steps:** 
>1. Jason looks at the algorithm topics that AlgoWiz offers and considers 
which one he is interested in learning
>2. Upon selecting one of the algorithm topics, Jason can click on the lesson 
or take the quiz
>3. Jason clicks on the lesson button and it takes him to a new page that 
covers that algorithm along with a visual and quiz section.
>
>**Extensions:** 
>* Jason can view other algorithms at any time.
>
>**Exceptions:** 
>* AlgoWiz does not provide Jason with a satisfactory summary, which leads him to search elsewhere.
>* Jason is unable to access the lesson, or there is a problem with the
lesson's page.

(Shivam) 
> **Actors:** Elizabeth is a college professor who wants to teach her students 
different graph algorithms and hence uses the app as a teaching tool in her lecture.  
**Triggers:**. Elizabeth wants to give her students a good idea about how  
different graph algorithms work and better their understanding of these concepts.
**Preconditions:** These students know computer science fundamentals like 
syntax, loops, methods, and data structures like array, queue, stacks, priority queue.
Postconditions: These students better grasp the idea of these algorithms and 
their working because of the visual demonstrations.  
**Steps** 
>1. Elizabeth explores the AlgoWiz website.
>2. Elizabeth finds the lesson for one of the graph algorithms and
navigates to that lesson page.
>3. Upon selecting the algorithm, Elizabeth views the lesson and gets the 
option to expand the interactive visual element.
>4. By expanding the visual element, she shows students how algorithms work.
>
> **Extensions:** 
>* More high level algorithms can be learned visually.
>* The quiz section of the application can be used to test students .
>
>**Exceptions:** 
>* Website is down.
>* Not all graph algorithms he requires are covered. 
>* The demonstrations sometimes lag.

(Aadi)  
> **Actors:** Arihant is a freshman in College, is preparing for his CSE 14X exam.  
**Triggers:** He needs to learn and also review some algorithm concepts so he 
can do well in his exam.  
**Preconditions:** Arihant browses through the AlgoWiz website using a stable 
internet connection on his computer. He selects a lesson to study.  
**Postconditions:** He has a clearer understanding of the various  
algorithms he studied and the quizzes he did.
(And hopefully, he now goes and aces his exam)
**Steps**  
>1. He chooses one of the algorithms that he wants to review prior to his exam.
>2. He clicks on that algorithm lesson button and it redirects him to a 
new page with that lesson summary.
>3. In that lesson, he sees interactive visuals which help him more deeply 
understand the underlying concepts.
 >4. He then clicks on the quiz button on the bottom which takes him to a new 
 quiz page. He sees the first question, clicks submit after he picks his answer 
 but got it wrong.
 >5. He gets a few hints on how to approach the problem and some other resource 
 links for further his understanding.
>7. He finishes his lesson and moves back to the course webpage.
>
>**Extensions:** 
>* Arihant was successfully and easily able to navigate through the website.
>* He was able to view and review other algorithms and sections successfully.
>
>**Exceptions:**  
>* Some of contents are missing some algorithm concepts and the quiz section 
gives an incorrect output (false positive)
>* He is unable to interact with the visuals.

(Pranesh)
> **Actors:** Jeff is an undergraduate student who is joining as a research 
assistant over the summer.
**Triggers:** He will work under the map routing system team and wants to test 
his knowledge on various graph algorithms before joining.
**Preconditions:** Jeff has already taken a data structures and algorithms 
course last quarter. He only wants to test his knowledge by taking quizzes 
on the algorithms.
**Postconditions:** He is now confident about all the graph algorithms 
listed on AlgoWiz.  
**Steps** 
>1. Jeff explores the AlgoWiz website and goes to the graph algorithms topic.
>2. Jeff then selects the desired algorithm.
>3. Jeff clicked on the quiz button next to the lesson which takes him to 
the quiz directly.
>4. He gets all of the answers right and then moves on to the next algorithm.
>
>**Extensions:** 
>* Jeff may choose to go back to lessons and visualizations to relearn the 
concepts if he gets questions incorrect on the quiz.
>
>**Exceptions:** 
>* AlgoWiz does not have all the graph algorithms that Jeff requires.
>* The questions are not correctly displayed in the quiz.
>* The website is down.
>* He encounters some glitches while selecting the answers in the quiz.

## Non-functional Requirements

### Scalability
* Since our app is a web based app we expect it to  have lots of users. We expect high user actviity which we plan to support.
* This depends on how server heavy our app is and where we are hosting it.
* We’ll start out with a small backend like NoSQL (Google Firebase) that can 
easily be scaled as required in the future. 

### Security and Privacy
* No user data will be gathered.
* Stretch goals will utilize OAuth to avoid storing passwords.

### Usability
* Targeting people with basic computer science background knowledge 
(will not be explaining basic structures such as for loops, conditionals etc). 
* People who have any experience with some basic CS concepts will easily be 
able to access and utilize our website. 
* Heavy emphasis on user friendly UI. 
* Follow W3C Accessibility Standards wherever possible. 

### Portability and Compatibility
As a React Web App, all popular browsers including Internet Explorer 9 
and above are supported. Older IE versions require some polyfills, 
which we do not plan on implementing at this time. As a Web based 
application anyone with a stable internet connection and modern browser 
will be able to access.
 
## External Requirements
* AlgoWiz is a web based application, therefore the latest version must be 
hosted on a public url. We plan to use Heroku  which will allow us to publish 
the latest version of our app. We plan to implement this service as soon as we 
have a deployable product so that we may begin user testing throughout the 
development process. 
* There are two main components to this application, the REACT Frontend and 
Java Spring Boot backend server. Both must include documentation so they can 
be built and deployed by other contributors and reviewers.
* In addition to the REACT documentation to deploy via NPM, a one step 
build system should be implemented to allow local deployment of both the frontend 
and backend components from the root directory of the repository in one step. 

## Schedule:
* Meeting twice each week: Tuesday/Thursday 1:30 pm PST. 
Here we check in and discuss all progress and set goals according to backlogs 
/ current progress.
* Frontend team: Separate coding  meets on Saturdays/Sundays/Mondays  
    * Tuesdays:  The entire team will meet up for a quick update. 
    Then each subgroup (frontend and backend) meets separately and discusses 
    their respective team progress and updates the reports.
    * Thursdays: The entire team meets up, discusses progress and goals for 
    next week and finally also reports to the PM.
* Individually meet outside of meetings to collaborate and program alongside 
another member of the same role. 

### Other Important Team Meetings
* Meeting to decide the visualizer, its logic and its visuals to be able to 
get setup done for some rudimentary testing -  05/02 
* Hosting the code onto website 05/10-11 (Beta Release)
* Before the Beta Release (05/11), there will be 2 subgroups that work 
separately on the front and backend of our product. 

### Beta Release Goals
* Frontend
    * :white_check_mark: Designing the layouts for homepage, quiz section, 
    and the lesson algorithms section.  - 04/22
    * In progress: Implementing the layouts for homepage, quiz section, 
    and the algorithms section. Currently, developing the various components 
    for each of the pages. 05/04
    * Getting the visualizer setup for at least 1 algorithm and adding 
    the quiz questions from database- 05/8

* Backend
    * :white_check_mark: Research MVC models, how to design class structures 
    for different algorithms in Java and report by 4/20 and meet as a whole 
    group to discuss by 4/22
    * Gathering contents home page description and contents for different 
    Algorithms by 4/30
        * Wendy: Introduction to AlgoWiz descriptions and Graph: Dijkstra
        * Michael: Sorting: selection sort algorithm  
        * Pranesh Reddy Jambula: Search; Binary search
    * Quizzes: create a layout and contents for the quiz for each algorithm by by 5/4 
        * Each backend team will create a rough sketch of 3 quiz questions for 
        each algorithm
	
* Get UI feedback by 5/13
* Post Beta Release
    * The entire team will be working together on Usability testing, 
    removing bugs and making the app more interactive and user friendly. 
    Also, any main components left to develop will be updated here. 
    If time permits, some stretch goals will also be achieved. 
    * Documentation of most recent state of project with some solved bugs - 05/18
    * Modified and most updated project after peer review - 05/29
    * Final Release - 06/01

## Major Risks

* Insufficient user feedback
    * We are looking to make a highly interactive app and hence upon beta release are looking to get and leverage large amounts of user feeback to increase app usability. Insufficient user feedback means not getting enough quality user feeback that allows us to maximise usability and user satisfaction.  
	* This has medium risk, depending on the kind and quality of 
    user feedbacks we get.
    * This can have a high impact on our apps usability and UI experience 
    which is the main incentive for the app. Since, the app is a study tool 
    for a variety of users we need feedback from different groups  of people 
    to successfully develop a user friendly app.
    * We plan on mitigating this by having a separate feedback from our TAs.  
    Secondly, during the beta release of our app we plan on spreading our app not  
    only amongst our peers within the class but within our network. 
    Since the app will be hosted online and be accessible to everyone we plan 
    on getting a lot of feedback and fixing any bugs and making improvements to the UI. 
    In case we don’t get enough user feedback, we plan on working and thoroughly testing the app ourselves to 
    identify issues.
* Failure to complete visualization tool
    * Medium risk of occurring - since no team members has experience working 
    on a similar concept it is likely we will change implementation details or 
    structure. Also we may require more time to research libraries and learn new tools. 
    * High Impact - This is a core feature and failure to complete a working 
    version means we will not hit our MVP goals.
    * We will mitigate the chance of this happening by spending more time in 
    the early development process discussing and documenting implementation 
    details as a team. Also we will make sure multiple team members are 
    assigned to research relevant tools and technologies.  
* Failure interfacing between the backend and the frontend 
    * High risk of occurring. Reasons involve: slow server, slow internet 
    connection, or inefficient implementations that can cause this error.
    * High Impact - many components of our application depend on the successful 
    interaction between the frontend and the backend. Components like the quiz 
    section, lesson summary, and the visualizer depend highly on the backend 
    and hence the interaction failure would be highly impactful.
    * We will mitigate this by implementing efficient algorithms, picking 
    a good server, and  having a good separation between different components. 
    This way if any one part of the system crashes we have a fail safe system 
    that doesn’t completely crash the entire  app.
	
## External Feedback
Intuitive UI is one of our highest priorities, the core feature of this app is 
a visualization tool that will help users better understand algorithms. 
Extensive user testing of the UI and visualization tool will begin as soon 
as we have a working demo. As the target demographic is individuals with 
previous computer science exposure, we will be recruiting classmates and 
instructors/TA’s to test the app and fill out surveys throughout the development process.  


## Software Architecture
### Major Components and Functionality
Our web-based application consists of three main components, a frontend 
React Application, a backend Java Spring Boot server, and PostgreSQL database.

### Frontend Structure:

**React App** - The React Application provides the frontend User interface 
for AlgoWiz. All routing is handled by the React application on the client side. 
JSON data is sent to and from the server via asynchronous http requests. 
A react application is made up of individual components, which can be reused 
throughout the application. Each react component has its own modifiable state, 
and static props. We will have 3 main pages, the HomePage, the LessonPage and the QuizPage, more details. on this can be found in the  [Software Design(Frontend)](#software-design) section later in this document.




**UI Wireframe**
<img src="./images/algowiz_wireframe.png" alt="Algowiz wireframe diagram">



### Backend Structure:

**Java Spring Server**   
We will use the Spring Boot framework in Java to handle the backend portion 
of the application. In combination with this we use  Spring Web  (for building RESTful web apps) and PostgreSQL driver (driver to connect to our database). The backend API serves 2 main functions:
1. To handle client HTTP requests to server
2. To allow access to database information. 

Check out [Software Design(Backend)](#software-design) section for more details for these two functions.

#### Major components for the backend: 

Controller layer, Service layer and the data access layer. 

The requests will be processed by the controller and sent to the service layer to handle the logic. 
The data access layer talks to PostgreSQL database using calls from the JPA API.

<img src="./images/api_diagram.png" alt="server API diagram">


### Architecture Assumptions
* We do not assume any requirements in terms of using the app from the user. 
In case they want to have a local copy of our app they would need to have JAVA. 
* To avoid manual configurations and build dependencies, we decided to go with 
Spring Boot as it bundles all these dependencies into one for us, making it 
easier for others to build from our code without additional installation.
* We are assuming that our user base is small and hence are not setting up a 
large user database for now. 
* We are using a SQL database as opposed to a JSON file for web content so that 
if we do want to scale and create user login, we have a database that can 
handle large data. 
* We are assuming that users are at least novice programmers with basic 
programming experience. 
* We assume users have knowledge of loops, recursion and basic arrays.
 
### Architecture Alternatives
**React Alternatives:**
We considered using another UI Framework such as Angular or Vue. Angular is 
well established and highly customizable, but has a very steep learning curve 
and no one on our team was familiar with it. React is very well established, 
with many online resources and our team already had some experience developing 
with it. Vue is very popular and would have been a fine choice, but our team 
stayed with React since we had the most experience. 

**Spring Boot Alternatives**  
For backend servers, an alternative for Spring Boot would be to use Netlify. 
Netlify offers hosting and serverless backend services for web applications. 
The pros are: It can build web applications directly on Github, makes 
it easier for developers to see web application results after they push to 
Github, and it provides hosting as well. The cons: it does not work for Java 
such as Spring Boot. 

**PostgreSQL Alternatives**  
We choose Postgres database because it is one of the databases that work 
with Spring Boot. Alternative would be to use MongoDB. The pros are MongoDB 
has a change friendly design that enables you to  make changes to the database 
without disrupting webpage operation. The cons is MongoDB uses high memory 
for data storage.

## Software Design

### Toolset
* Version Control: Git - well documented standard for version control
* REACT Build System: NPM - standard solution for Node Development

### Frontend
* React - widely used, well documented, scalable library for frontend web development.
* Javascript, CSS - standard web development languages
* Team members are free to develop using whichever code editor they are most familiar.

### Backend 
* Java Spring Boot framework
* Algorithms like sorting and pathfinding will be implemented in the 
backend of our program with Java.

## Software Design (Frontend)


**React Components:**  
Each React component has its own modifiable state, and static props.  
 
* HomePage : The home page is the index page of the website from which the 
user can navigate to any other section of our website. It describes the various 
topics we have to study from and the type of content we offer.
	* SiteSummary: A general summary of our website and how it works. Also, has 
    a cool visual image (website logo)
	* Topic: The content offered by Algo Wiz is broken down into 3 main 
    sections, Graph algorithms section, Sorting algorithms section and Search Algorithms section.  
    So the home page contains these 3 sections with each section contains sub-topics under 
    them that redirect users to the lesson content/ quiz content. For example: Graph algorithms section  
    will have Breadth First Search (BFS), Dijkstra algorithm, and etc.  
		* LessonSummary: Each of the sub topics in this section will have a 
        small lesson summary which describes what that particular sub topic 
        is teaching. Eg.  Under Graphs as the main topic, BFS may be a subtopic 
        which would contain a small summary of what BFS is.
* LessonPage: This is the page displayed to the user once they decide on a 
particular topic they want to study. This page contains all study material 
to teach the given topic to the user. 
	* Visualizer: An interactive visual tool (separate react component) 
    that allows the user to interact and understand how the algorithm at hand 
    is working.  
	* Text: This is the main lesson content. This will be curated information 
    about the topic tailor made to aid user understanding and learning.
	*Image: Extra images that might be helpful visual aids to the users.
* QuizPage: This will be an interactive quiz section with a format similar to 
Duilingo, Where we give immediate feedback when a user answers a question. 
We believe this will help provide a stress free and low stakes testing 
environment which will aid user experience.
	* Question: The quiz page will display 1 question at a time to the user. 
    This will be in multiple choice question format and could possibly have an visual 
    element to help visualise the situation presented to the user
    * Result: 2 outputs 
    * Correct Answer: A green colored screen will be displayed to the user 
    for each question that is correctly answered by the user. This will have 
    some positive reinforcement such as a positive message or some feedback.
    * Incorrect Answer: A red colored screen will be displayed to the user for 
    each question that is incorrectly answered by the user. 
    This will have some feedback and some hints to guide them to the correct 
    answer and more importantly the correct way of thinking in the given situation.

## Software Design (Backend)
**Responsibilities**  
The Spring Boot Server is responsible for handling the backend business logic 
of the application(explained below) and connect/access information from our database. 
The design of the spring boot application has the following layers:

First, the requests like GET and POST, received from the client will be 
processed by the controller component(API layer) of our application. 
The data from these requests will then be sent to the service component by 
the controller. The service layer handles the business logic. The business logic
is the part of the application that stores a certain set of rules on how the data 
should be created, stored or changed. It may involve performing any of the 
CRUD(Create, Read, Update, Delete) actions or simple validation of user data. 
For the most part, the main logic in our application is to read relevant information 
from the database and output to the client. The service layer also has access to the 
information sent by the data access layer. The data access layer is implemented using 
Spring JPA. The purpose of this layer is to connect to the PostgreSQL database. 
Once connected, we can query the desired information from the entities in 
the database and send it back to the service layer. The output from the service 
layer will be passed back to the controller and from there, the response 
will be returned to the client.

**Database and Schema** 
In our database we mainly have 2 entities:
* Quiz Questions: This entity in the database stores the information for 
the quizzes. “QID” is the primary key that assigns an ID to each question, 
“Category” represents what topic the question belongs to, “Question” 
attribute stores the question and “Answer” stores the answer to the question. 
“Options” stores the multiple choices for the question.

<img src="./images/quizSchema.png" alt="quiz schema">

* Topic content/Description: This entity in the database stores the topic 
summaries for each topic that will be displayed on the homepage. 
“TID” is the primary key that assigns an ID to each topic. 
“Topic Category” represents the topic that the description belongs to. 
“Description” stores the summaries for each topic on the homepage.

<img src="./images/topicSchema.png" alt="topic schema">




**Component Abstractions (Backend)**  
* We will create two packages. One package called topic, will contain algorithm.java 
class that describes what algorithm should have, such as an Id, the type of algorithm, 
body content, and algorithm. Within the same package, we’ll have AlgorithmController, 
AlgorithmService, AlgorithmRepository or data access class that deal with CRUD 
(create, read, update, and delete) from the database. 
* Second package, we will have a quiz package, inside the quiz package, we’ll create a quiz class 
that defines what the quiz should have such as a qid that references the algorithm, 
questions, options for the questions, and answer key. Also within the quiz 
package is the QuizController, QuizService, and QuizRepository classes that 
deal with CRUD from the database. 

## Coding Guidelines

**Javascript and React:**  
* We will be using Airbnb’s javascript and react guidelines for our project. 
Airbnb has a very exhaustive set of guidelines that will help us ensure that 
our application code is as per the industry standards. All the style guidelines 
are accompanied with examples. These examples will be helpful when we would be 
implementing the application.
* Enforcing the guidelines: Once a member of the frontend team makes a pull request, 
the other 2 team members will review and make sure that proper Airbnb guidelines 
and conventions were followed. They will review the code individually so that 
there is higher chance of error detection.
* Links :  
    * https://airbnb.io/javascript/    (For Javascript)
    * https://airbnb.io/javascript/react/  (For React)

**Java:**  
* We are using Google’s coding standards for Java programming language. 
It provides detailed descriptions of the guidelines to follow as per Google standards. 
Our backend team will have a copy of the guideline and reference it as we 
implement the code.

* Links: 
    * https://google.github.io/styleguide/javaguide.html

## Test Plan & Bugs

### Continuous Integration & Deployment
* We will be using [GitHub Actions](https://docs.github.com/en/actions) 
to incorporate Continuous Integration (CI) workflows for both frontend and 
backend. The CI workflow can be modified by editing the `.yml` files 
that live in the AlgoWiz repo at [.github/workflows](../.github/workflows)
* To view CI runs or add a new CI workflow using GitHub Actions click 
on the [Actions tab](https://github.com/aadijain725/AlgoWiz/actions) 
at the top of the AlgoWiz Repo.
* CI Runs are triggered by `push` or `pull requests` to the main branch
and dev branch.
* In addition to building and deploying, the CI workflow will run the entire
test suite outlined in [Frontend Tests](#frontend-tests) and
[Backend Tests](#back-end-tests) (with the exception of usability testing)
including unit tests, integration tests, End-to-End (E2E) tests, and storing
code coverage reports at [Codecov](https://about.codecov.io/).
* We chose to use GitHub Actions as our CI platform to try and consolidate 
our development tools. Github Actions has been gaining popularity recently 
and there are many reusable open source workflows/plugins available to 
help customize your CI. We are already using github to host our code so it 
makes sense to keep the CI development tools in the same spot. 

    <table>
        <tr>
            <th colspan="2"> GitHub Actions </th>
        </tr>
        <tr>
            <td>Pros</td><td>Cons</td>
        </tr>
        <tr>
            <td>
                <p>No need for an outside CI vendor</p>
                <p>Store and edit CI config in the repo</p>
                <p>Comunity workflows</p>
                <p>Caching Dependencies</p>
                <p>Free for public Repos</p>
            </td>
            <td>
                <p>Not as established as other CI solutions</p>
                <p>Documentation not as extensive</p>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="2">Travis CI</th>
        </tr>
        <tr>
            <td>Pros</td><td>Cons</td>
        </tr>
        <tr>
            <td>
                <p>Good Documentation</p>
                <p>Integrates with Slack and VS Code</p>
            </td>
            <td>
                <p>Can be slow</p>
                <p>No concurent jobs on free tier</p>
            </td>
        </tr>
    </table>
    <table>
        <tr>
            <th colspan="2">CircleCI</th>
        </tr>
        <tr>
            <td>Pros</td><td>Cons</td>
        </tr>
        <tr>
            <td>
                <p>Intigrates with Github</p>
                <p>Highly Configurable</p>
            </td>
            <td>
                <p>Steep learning curve</p>
                <p>No caching on free tier</p>
                <p>Weekly limits on free tier</p>
            </td>
        </tr>
    </table>




### Front End Tests 
* We will be using the [Jest Testing Framework](https://jestjs.io/) for the 
frontend portion of our app. Jest is the most popular React testing
framwork with great documentation and is already incorporated into new 
React projects at set up.
* To add a new unit test simply create a new js file inside the 
[algowiz-app/src/tests](../algowiz-app/src/tests) 
directory with the `.test.js` extension. 
(Though tests can be located at any depth under the src top level folder.)
See the [Jest documentation](https://jestjs.io/docs/snapshot-testing)
for more information on writing snapshot tests. 
    * Jest unit tests can render React components in a simplified test 
environment and assert their output. This allows for quick one step 
testing throughout the development process.
    * Jest integration tests can check that different components 
are interacting properly with the backend via http requests. Integration tests 
will also ensure the correct API calls are being made.
    * Jest can generate code coverage reports over an entire node project,
    including untested files with no additional setup. 
* Useability Testing: User feedback will be collected using Google Form Surveys.
We will begin collecting feedback as soon as a version of the App is available via
public URL. This should lead to a more intuitive UI by the end of the 
development process.

### Backend Tests

* We will be using JUnit test (https://junit.org/junit4/) for Java Spring Boot Framework.

* Junit is an open source Unit testing framework for Java and there are good documentation
available on how to write JUnit tests for Java code. 

* For Spring Boot Framework, JUnit is a part of test package. The test is in algorithms/src/test folder.  
    * Junit tests can test different part of Java classes within API package where all the algorithms code are located  
    * We will be creating separate tests in a separate file within the test folder for Java classes we implemented  
    * write tests such as get method to fetch data from the database and compare expected output using assert equals  

* Unit tests as well as output tests to the localhost port 8080, to check 
expected output of methods, proper data retrieval from the database, and 
testing if the port works.  We’ll test for both algorithm class and quiz class. 
Once the backend logic works, we’ll connect with the frontend.  

### System Tests:  
1. We will use system tests to validate end to end system specifications. We will write exhaustive tests for testing functionality of our software. Validation for different buttons on an homepage, quiz page, lesson page, visualizer components will be done through system tests

2. End-To-End Tests (E2E) : These test are usally done after system tests and are considered subset of System tests. 

    * [Puppeteer](https://developers.google.com/web/tools/puppeteer) is a automated test environment
that simulates user interaction inside a chrome browser environment. We will use Puppeteer tests to validate the flow of our applications UI for frontend side.
    * Finally we use End to End test to the behavioral flow of our whole application. This includes testing all software interfaces and connected systems
    * We are using puppeteer because of its good control over chrome which is better than many other testing tools like selenium.
    * To add a new unit test simply create a new js file inside the 
[algowiz-app/src/tests](../algowiz-app/src/tests)



## Documentation Plan
* Root directory of the repository must contain a Readme<area>.md kept up to 
date with all the relevant information to build and test the system, as well 
as information about AlgoWiz and guide to navigating the repository. 
* Sub directories containing source code should also contain a Readme<area>.md 
outlining information such as contents, installation and configuration guides. 
ie Frontend developers must maintain the [algowiz-app]() Readme<area>.md and 
Backend developers must maintain the [api]() Readme<area>.md
* Use [React Docgen](https://github.com/reactjs/react-docgen) to extract 
information and create documentation from React components. 
* Use [JavaDoc](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html) 
to generate documentation for Java Spring Backend code. 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA5OTYzNDI1M119
-->