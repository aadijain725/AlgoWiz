# AlgoWiz Requirements
 
## Team Info & policies

### Roles
Team members are evenly distributed between the three main roles, there is a possibility that team members may change roles as features near completion.  

#### **UI Designers/Front End Engineers** - as a web based application with heavy emphasis on an interactive visual component, the UI will be critical to the success of this project. Since we have a small team our UI Designers will also act as Front End Engineers, responsible for implementing and testing the functionality of the App.

* **Aadi Jain:** Has experience and a keen interest in using React and loves developing websites. Further, wants to develop an interactive and user-friendly UI.

* **Shivam Drishti Bhatia:** I have experience in React and always loved how the front end works. I also have experience in developing interactive and user friendly applications on React. 

* **Estevan Seyfried:** Holds a certificate in, and has worked as a TA for UW’s Full Stack Javascript Certificate program. 

#### **Back End Engineers** - responsible for designing and implementing the server and database required for the app to function and scale once launched.

* **Wendy Jiang:** I choose backend because I’m interested in creating contents for the web page and adding functionality such as the quiz section and visuals to the webpage. I’m familiar with Java and am able to create these components.

* **Michael Wen:** I chose backend because I have more experience with programming in that area and minimal experience with front end design.

* **Pranesh Reddy Jambula:** Previously worked with frontend technologies in other courses, but never worked on backend development before and wanted to learn something new.

### Communication Tools
* Source Code Repository - Github 
* Meetings - [Zoom Meeting](https://washington.zoom.us/j/5910630886)
* Discussion platforms:
    * Slack - for higher-level detail discussions and specific interaction with the PM.
    * Discord for more urgent communication and discussions.  
    We split into sub-teams here.
* Keeping track of progress-  Trello (scrum)

### Team Policies
1. Every pull request must have at least two passing reviews before merging with the main branch.
2. Bugs must be documented and categorized when they are first encountered. 
3. Major bugs (App crashing) must be resolved before continuing development on any related features.
4. At least 2 members per sub team.
5. Whenever possible develop in pairs, one tester, and one coder to have more refined code.
6. Front End code should follow Airbnb Style Guide: https://github.com/airbnb/javascript/tree/master/react
Front End-- React, Back End -- Java API, possibly Node Express Server 
 
## Product Description

Algowiz is a highly interactive web-based application aimed at spreading the love and knowledge we have for computer science. Initially, it will act as primarily an academic aid to students and teachers alike. It will cover a wide array of topics ranging from sorting and searching algorithms to exploring graphs. The experience will include a separate section for each of the various topics. Each of these sections will have a study guide, a quiz, and a visualizer to help visualize the concepts.

### Major Goals
1. Feature three algorithm topics; Sorting algorithm, Graph algorithm, and Searching algorithm.
    * Each topic will feature algorithms. Ex. Sorting algorithm features merge sort, insertion sort. Graph algorithm features pathfinding(Dijkstra’s), Depth First search, Breadth First search. Searching algorithm features binary search.
    * Each algorithm has its own page which will contain introductory material and a list of prerequisite skills. 

2. Quiz system 
    * There will exist an optional quiz section under each algorithm tests understanding of the particular algorithms. This quiz will act as a stress-free test to the topics learned in the section.  
    * User Interaction:
        * On getting the answers correct, we give some positive feedback (great work) and recommended the next steps
        * On wrong answers, we give some feedback and give hints

3. Interactive visualization of the Algorithms
    * There will be a section with a visualizer which will visualize the internal workings of each algorithm. 
    * The visualizer would have some sort of array/ graphical representation of the algorithm in work.

4. An interactive web-based platform
The app is going to be a web application accessible by anyone using the internet.

### Stretch Goals
1. User Database (Profiles) to keep track of user progress in quizzes and the different sections they have covered.
    * We plan on using a Google API to set up a user database system to store and update user progress, 
2. Gamified Point system (reward points) -
    * A reward system to help motivate studying. 
    * Something like a leaderboard to make the experience more rewarding is one possible idea.
    * Further, animations may be added to make the UI experience more fun.
3. Data Structures (to learn basics):
    * We may add a new section on Data structures and some of the more introductory topics. 
    * Topics such as arrays linked lists etc. to cater to an even larger audience. 
 
## Use Cases
(Functional Requirements)

(Wendy)  
> **Actors:** Jane, a sophomore in College, is applying for an internship in the summer.
**Triggers:** Need to refresh on her algorithm concepts so she can ace that interview. 
**Preconditions:** Jane browses through AlgoWiz site, there are different algorithm concepts under each topic. 
Postconditions: She has a better understanding of algorithm concepts after reviewing and taking the quiz.  
>**Steps:**
>1. She clicks on one of the algorithm buttons and it takes her to a new page that contains explanations and visuals of that algorithm. She can read through each explanation and watch the interactive visualization of that algorithm.
>2. There is an optional quiz section at the end of the algorithm to check for understanding.
>3. Jane clicked on the quiz, there are several multiple choice questions. If she answered questions correctly, she received feedback that she answered them correctly. 
> 4. She has the option to exit the quiz and click the back button that will take her back to the home page.  
> 
> **Extensions:**
> * Jane can continue using the website anytime
> * She can view any algorithms without having to take the quiz
> **Exceptions:**
> * The contents are missing some algorithm concepts

(Estevan) 
>**Actors:** Ben is a college tutor assisting intro to programming students remotely. 
**Triggers:** They are looking for a way to help students better understand sorting algorithms for an upcoming exam.  
**Preconditions:** Ben is already familiar with AlgoWiz and searches for the correct sorting algorithm.
Postconditions: They are able to help the student better understand the concept. 
**Steps:** 
>1. Ben searches for and finds the correct algorithm.
>2. They skip the quiz section.
>3. They share their screen as they use the visualizer to walk the student through the algorithm.   
>
>**Extensions:** 
>* They may choose to have the student use the tool on their own.
>* Ben may use the quiz to help the student in addition to the visualizer.  
>
>**Exceptions:** 
>* The site is down.
>* Ben has trouble navigating the site.

(Michael)  
> **Actors:** Jason is a high school student who learned fundamental programming concepts at school
**Triggers:** Jason is curious and wants to get an idea of what other, more complex programming concepts there are without having to go through overly in-depth resources
**Preconditions:** Jason is already familiar with programming fundamentals, such as loops, methods/functions, syntax. etc.
Postconditions: Jason will get a general idea of what other programming concepts exist
**Steps** 
> 1. Jason looks at the topics that AlgoWiz offers and considers which one he is interested in learning
> 2. Upon selecting the topic, Jason is given the option to view a summarized version of the lesson or to proceed with the actual lesson
>3. By selecting the summary, Jason is provided an overview of the concept(s) covered in the section
>
>**Extensions:** 
>* Jason can view other, higher-level summaries regardless of whether he has seen summaries of or worked through previous lessons
>* Jason can download the summary to read offline
>
>**Exceptions:** 
>* AlgoWiz does not provide Jason with a satisfactory summary, which leads him to search elsewhere
>* Jason is unable to access the summary, or there is a problem with the summary page


(Shivam) 
> **Actors:** Elizabeth is a college professor who wants to teach her students different pathfinding algorithms and hence uses the app as a teaching tool in her lecture.
**Triggers:**. Elizabeth wants to give her students a good idea about how these pathfinding algorithms work and better their understanding of these concepts.
**Preconditions:** These students know computer science fundamentals like syntax, loops, methods, and data structures like array, queue, stacks, priority queue.
Postconditions: These students better grasp the idea of these algorithms and their working because of the visual demonstrations.
**Steps** 
>1. Elizabeth explores the AlgoWiz website.
>2. Elizabeth finds the section for Pathfinding algorithms and navigates to that section.
>3. Elizabeth looks at different pathfinding algorithms available.
>4. Upon selecting the algorithm, Elizabeth gets the option to learn the topics visually.
>5. By selecting the visual demonstration section, she shows students how algorithms work.
>
> **Extensions:** 
>* More high level algorithms like stable matching can also be learned visually.
>* The quiz section of the application can be used to test students .
>
>**Exceptions:** 
>* Website is down.
>* Not all the pathfinding algorithms are covered. 
>* The demonstrations sometimes lag.

(Aadi)  
> **Actors:** Arihant is a freshman in College, is preparing for his CSE 14X exam.  
**Triggers:** He needs to learn and also review some algorithm concepts so he can do well in his exam.  
**Preconditions:** Arihant browses through the AlgoWiz website a stable internet connection on his computer. He selects a particular section to study.  
**Postconditions:** He has a clearer understanding of the various sections he studied from and the various quizzes he did. (And hopefully, he now goes and aces his exam)
**Steps** 
>1. He explores the various sections choosing the beginner algorithm sections since the summary is most closely related to his exam.
>2. He gets redirected to a new page with various algorithms he can study.
>3. He chooses the sorting algorithms section and studies the Bubble sort.
>4. He sees interactive visuals which help him more deeply understand the underlying concepts.
 >5. He then takes the quiz on bubble sort, but he gets the answer wrong
 >6. He gets a few hints on how to approach the problem and some other resource links for further his understanding.
>7. He finishes his study session and moves back to the course webpage.
 >
>**Extensions:** 
>* Arihant was successfully and easily able to navigate through the website.
>* He was able to view and review other algorithms and sections successfully.
>
>**Exceptions:**
>* Some of contents are missing some algorithm concepts and the quiz section gives an incorrect output (false positive)
>* He is unable to interact with the bubble sort algorithm well.

(Pranesh)
> **Actors:** Jeff is an undergraduate student who is joining as a research assistant over the summer.
**Triggers:** He will work under the map routing system team and wants to test his knowledge on various pathfinding algorithms before joining.
**Preconditions:** Jeff has already taken a data structures and algorithms course last quarter. He only wants to test his knowledge by taking quizzes on the algorithms.
Postconditions: He is now confident about all the pathfinding algorithms.
**Steps** 
>1. Jeff explores the AlgoWiz website and goes to the pathfinding algorithms section.
>2. Jeff then selects the desired algorithm.
 >3. Jeff skips the lessons and visualization and directly goes to the quiz.
 >4. He gets all of the answers right and then moves on to the next algorithm.
>
>**Extensions:** 
>* Jeff may choose to go back to lessons and visualizations to relearn the concepts if he gets questions incorrect on the quiz.
>
>**Exceptions:** 
> * AlgoWiz does not have all the pathfinding algorithms that Jeff requires.
>* The questions are not correctly displayed in the quiz.
>* The website is down.
>* He encounters some glitches while selecting the answers in the quiz.

## Non-functional Requirements

### Scalability
* How to handle millions of users?
* UI heavy instead  -- lot of users can access the website at once 
* This depends on how server heavy our app is and where we are hosting it.
* We’ll start out with a small backend like NoSQL (Google Firebase) that can easily be scaled as required in the future. 

### Security and Privacy
* No user data will be gathered.
* Stretch goals will utilize OAuth to avoid storing passwords.

### Usability
* Targeting people with basic computer science background knowledge (will not be explaining basic structures such as for loops, conditionals etc). 
* People who have any experience with some basic CS concepts will easily be able to access and utilize our website. 
* Heavy emphasis on user friendly UI. 
* Follow W3C Accessibility Standards wherever possible. 

### Portability and compatibility
* Web app (some computer + stable wifi)
 
## External Requirements
1. The application will be hosted on the internet, users will not need
to download anything. 
2. We will provide details on hosting on Filezilla or other hosting services
3. We will provide details on downloading and setting up packages related to our app.

### Toolset
* Version Control: Git - well documented standard for version control

### Front End
* React - widely used, well documented, scalable library for front end web development.
* Javascript, CSS - standard web development languages
* Team members are free to develop using whichever code editor they are most familiar.

### Back End 
* Java API (Platform independent)
* Algorithms like sorting and pathfinding will be implemented in the backend of our program with Java.



## Schedule:
* Meeting twice each week: Tuesday/Thursday 1:30 pm PST. Here we check in and discuss all progress and set goals according to backlogs/ current progres.

    * Tuesdays:  The entire team will meet up for a quick update. Then each subgroup (frontend and backend) meets separately and discusses their respective team progress and updates the reports.

    * Thursdays: The entire team meets up, discusses progress and goals for next week and finally also reports to the PM.
* Individually meet outside of meetings to collaborate and program alongside another member of the same role. 

### Other Important Team Meets
* Meeting to decide the visualizer, its logic and its visuals to be able to get setup done for some rudimentary testing -  04/02 
* Hosting the code onto website 05/10-11 (Beta Release)
* Before the Beta Release (05/11), there will be 2 subgroups that work separately on the front and back end of our product. 

### Goals till Beta Release
* Front End
    * Designing the layouts for homepage, quiz section, and the algorithms section.  - 04/22
    * Implementing the layouts for homepage, quiz section, and the algorithms section.  - 04/27
    * Getting the visualizer setup for at least 1 algorithm and adding the quiz questions from database- 05/8

* Back End
    * Research MVC models, how to design class structures for different algorithms in Java and report by 4/20 and meet as a whole group to discuss by 4/22
    * Gathering contents home page description and contents for different Algorithms by 4/30 
        * Wendy: Introduction to AlgoWiz descriptions and Merge sort
        * Michael: Graph algorithm(Dijkstra’s algorithm)
        * Pranesh Reddy Jambula: Search algorithm (Binary search)
    * Quizzes: create a layout and contents for the quiz for each algorithm by by 5/4 
        * Each backend team will create a rough sketch of 3 quiz questions for each algorithm
	
* Get UI feedback by 5/13
* Post Beta Release
    * The entire team will be working together on Usability testing, removing bugs and making the app more interactive and user friendly. Also, any main components left to develop will be updated here. If time permits, some stretch goals will also be achieved. 
    * Documentation of most recent state of project with some solved bugs - 05/18
    * Modified and most updated project after peer review - 05/29
    * Final Release - 06/01

## Major Risks
* Failure to complete visualization tool because we have not created one before and might require more time to research on how to do it. 
* Failure to complete tasks due to poor planning/scheduling
* Failure to set up the server properly causing an error in hosting the website online.

## External Feedback
Intuitive UI is one of our highest priorities, the core feature of this app is a visualization tool that will help users better understand algorithms. Extensive user testing of the UI and visualization tool will begin as soon as we have a working demo. As the target demographic is individuals with previous computer science exposure, we will be recruiting classmates and instructors/TA’s to test the app and fill out surveys throughout the development process. 
