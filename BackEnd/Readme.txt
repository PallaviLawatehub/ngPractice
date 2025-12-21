
Backend Setup Instructions
Prerequisites

Node.js installed on your system

npm (comes with Node.js)

Step 1: Initialize the Node.js project

Run the following command to create a package.json file with default values:

npm init -y

Step 2: Install required dependencies

Install Express and CORS for creating REST APIs:

npm install express cors

Step 3: Install Nodemon (global)

Install nodemon globally to automatically restart the server on file changes:

npm install -g nodemon

Step 4: Create the server file

Create a file named server.js in the root directory of the backend project.

BackEnd/
 ├── server.js
 ├── package.json
 └── node_modules/

Step 5: Add basic server logic

Write the basic Express server logic inside server.js
(example: creating routes, enabling CORS, starting the server).

Step 6: Start the server using Nodemon

Run the following command to start the backend server:

nodemon server.js


The server will start and automatically restart whenever code changes are detected.

Server URL

By default, the backend server runs on:

http://localhost:3000
