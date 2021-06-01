# Developer Guide  
This guide is meant to help potential contributors to
this open source project get started!

## How To Get Started  
All the source code is located in this repo:
```
git clone https://github.com/aadijain725/AlgoWiz.git
```
**Note:** [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm), and PostgreSQL are required to run algowiz-app locally. More information 
in the [How to Build AlgoWiz](#How-to-Build-AlgoWiz) section.

## Directory Layout  

📦 AlgoWiz<br/>
┣ 📂 [.github/workflows](/.github/workflows) - Github Actions CI .yml code<br/>
┣ 📂 [algowiz-app](/algowiz-app) - Frontend source code<br/>
┃ ┣ 📂 [public](/algowiz-app/public) - Static files served during frontend build<br/>
┃ ┗ 📂 [src](/algowiz-app/src) - React code<br/>
┃ &nbsp; &nbsp; ┣ 📂 [components](/algowiz-app/src/components) - React Components<br/>
┃ &nbsp; &nbsp; ┗  📂 [tests](/algowiz-app/src/tests) - Frontend Tests<br/>
┣ 📂 [api](/api) - Backend source code<br/>
┃ ┗ 📂 [algorithms](/api/algorithms) - Spring server root directory<br/>
┃ &nbsp; &nbsp; ┗ 📂 [src](/api/algorithms/src) - Spring server source code<br/>
┃ &nbsp; &nbsp; &nbsp; &nbsp; ┣ 📂 [main](/api/algorithms/src/main) - Spring server source code<br/>
┃ &nbsp; &nbsp; &nbsp; &nbsp; ┃ ┣ 📂 [java/com/example/algorithms](/api/algorithms/src/main/java/com/example/algorithms) - Spring server routes and components<br/>
┃ &nbsp; &nbsp; &nbsp; &nbsp; ┃ ┗ 📂 [resources](/api/algorithms/src/main/resources) - Spring server resources and properties<br/>
┃ &nbsp; &nbsp; &nbsp; &nbsp; ┗ 📂 [test/java/com/example/algorithms](/api/algorithms/src/test/java/com/example/algorithms) - Spring server tests<br/>
┣ 📂 [documentation](/documentation) - Living documentation, policies and guides<br/>
┃ ┗ 📂 [images](/documentation/images) - Documentation related images<br/>
┗ 📂 [status-reports](/status-reports) - Weekly team status reports<br/>




## How to Run AlgoWiz  

### Frontend Steps  
**Note:** [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) is required to run algowiz-app
1. Make sure you have Node and npm installed
```
node -v
```
```
npm -v
```

2. From the AlgoWiz root directory navigate into algowiz-app:
```
cd algowiz-app
```
3. Install the dependencies from the project directory:
```
npm install
```
```
npm install react-bootstrap
```
```
npm install react-dom
```

3. Start the Development Server:
```
npm start
```

### Backend Steps  
#### Installation and configuration of postgreSQL database:  

1. Go to the website below and download the appropriate installer. https://www.enterprisedb.com/downloads/postgres-postgresql-downloads?quicktabs_postgres_plus_dwnlds=1
2. During installation, set a password for the superuser "postgres". Keep other settings as default.
3. In the "application.properties" file, Change the value for spring.datasource.username to `postgres`(default superuser) and spring.datasource.password to the one you set up during installation. If you decided to change the default `5432` port during the installation, update the spring.datasource.url accordingly.
4. To create the database, open up psql server and login with the `postgres` superuser.
5. Then type in the following commands `CREATE DATABASE algowiz;` and then `GRANT ALL PRIVILEGES ON DATABASE "algowiz" TO postgres;`

We are done configuring the database! Let's now build the project using maven.



#### Building the project using maven  
We will use Maven Wrapper included in the project to build the backend.

1. cd into AlgoWiz/api/algorithms
2. Run `./mvnw spring-boot:run` on a bash based shell. 
3. In some systems like Mac, you might encounter a permission denied error. In that case run `chmod a+x mvnw`. Then again run the command in step 2 to build the project.


## How to Run Tests

### Run Frontend Tests  

To run tests 
1. Tets are inside the `algowiz-app/src/tests` directory. To run the test simply type npm test from `algowiz-app/src/` or any of its subdirectory
3. to run a specific test type `npm test TestName.js`


### Run Backend Tests  
To run Spring Boot tests
1. cd into AlgoWiz/api/algorithms
2. Run `./mvnw test` on a bash shell

## How to Add New Tests  

### Add Frontend Tests  
1. To add a new unit test simply create a new js file inside the `algowiz-app/src/tests` directory with the `.test.js` extension. (Though tests can be located at any depth under the src top level folder.) 
2.  cd into `algowiz-app/src` or any of its subdirectory and to run the test simply type `npm test`
 
### Add Backend Tests  
1. cd into ```AlgoWiz/api/algorithms/src/test/java/com/example/algorithms```  
2. Open AlgorithmsApplicationTests.java to add new tests
3. For any new instance of Controller, Repository, or Service class, add
    `@AutoWired` above the initialized variable
4. add `@Test` above any test method


## How to build a release of the software  

### Frontend Build  
1. From the AlgoWiz root directory navigate into algowiz-app:
```
cd algowiz-app
```
2. Bundle the App into a production ready, optimized build.
```
npm run build
```
The production version of the app is now located in the build folder. The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

### Backend Build  
To build a release of the software, select the Build Project button at the top right (or under Build in the top left menu).

If you receive an error: `By default, the Java language level is set to 5 which is not supported by the current Java version. Update the language level to 6+.`, click `Update source level in algorithms` at the end and wait for IntelliJ to make the necessary changes.

When IntelliJ finishes, you should see "AlgorithmsApplication" in the top right Configurations Box.

Then, click the run button to the right of the Configurations box. If everything is set up correctly, the project should now be deployed on the localhost (http://localhost:8080/).

Describe any tasks that are not automated. For example, should a developer update a version number (in code and documentation) prior to invoking the build system? Are there any sanity checks a developer should perform after building a release?

### How to deploy Algowiz application  

Package React and Spring Boot into a single jar file. Set up server using Digital 
Ocean. To move the jar file to the server, have to set up SSH File Transfer Protocol(SFTP) client.
We'll be using FileZilla to do that. Once that is set up, we can deploy our application by running
`java -jar your_jar_file.jar` in the command line. To test if the app is running, copy the server's
IP address and append the port number at the end to open the website. 
