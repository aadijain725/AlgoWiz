# Getting Started with AlgoWiz-App

## Available Scripts

In the project directory, you can run:

### npm install

To setup the initial package manager, run this command first.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in 
the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about 
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) 
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build 
for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about 
[deployment](https://facebook.github.io/create-react-app/docs/deployment) 
for more information.

## Environment Variables and Custom API calls

By default this application makes API calls to `http://localhost:8080`
when running locally, and `https://algowiz-springboot-heroku.herokuapp.com`
when deployed. To test different API endpoints you will need to edit the
[.env.development](./.env.development) and [.env](./.env)  files respectively. 

Note that the environment variables are embedded during build time, 
and changing any environment variables will require you to restart 
the development server if it is running.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
