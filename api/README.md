# API Readme

# Set up for Spring Boot backend API for web application

- Clone from AlgoWiz repository    
```git clone https://github.com/aadijain725/AlgoWiz.git```  
- Set up the PostgresSQL Database account with provided instructions below  

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

### How to run Spring Boot in command line
1. - cd into AlgoWiz/api/algorithms 

2. Run the following command in the terminal  
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
        
 
### Resource of Spring Boot framework can be found [here](https://start.spring.io/)
