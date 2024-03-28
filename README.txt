Resolving CORS errors for your Simple API Project with a Proxy Back-End

For a clearer guide check out the google doc I shared with the class.

If you are trying to fetch some data from a third party API into your webpage or project, you may be encountering a cors error.

Maybe the error looks something like this:

Access to fetch at 'https://zenquotes.io/api/quotes/' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

You will probably see this error message if you attempted to fetch data from certain APIs (like in this example zenquotes.io) from your HTML page that you simply have opened in your web browser.  If you have hosted the webpage on liveserver you will probably get a message like this:

Access to fetch at 'https://zenquotes.io/api/quotes/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Explanation:
The error you're encountering is a CORS (Cross-Origin Resource Sharing) policy enforcement by browsers, which prevents a web page from making requests to a different domain, protocol, or port from its own. Basically it prevents web pages from making requests to a domain different from the one that served the web page.  This policy is a security measure to avoid unwanted cross-site scripting attacks.

You can consider several approaches to overcome this issue:
1. Using a CORS Proxy service
2. Create a simple Back-End and use it as a Backend Proxy

I have created a solution for you to use option 2.

Hosting the Server
Clone the repo
First clone this repository from github.com:


I have created a simple back end API that you can host locally on your computer, and communicate with from your front-end.

It has limited functionality, and I will add more features with some time, but you can also add on to the code yourself with some googling on how to create a simple api with express.js

We also go over how to do this more in depth in Module 4 of the Code Academy

Installing Dependencies
Once you clone the repository, you will need to install the required dependencies so the back-end server can work.  Please note the package.json file

{
  "name": "simple-api-project",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "node-fetch": "^3.3.2"
  }
}

You will be installing cors, express, and node-fetch.

Install the dependencies with the npm install command in your terminal.  
MAKE SURE YOU ARE IN YOUR CORRECT PROJECT FOLDER 

Optional Step
You may also want to globally install the nodemon library on your computer if you want your server to automatically reload when it detects changes to the backend-server.js file.
To do this you just type:  npm install -g nodemon 
Then, when you want to start your server you can use the command:
nodemon backend-server.js

Start your Back-End server
Note: If you want to read the code first for the back-end, read the backend-server.js file

Inside VS code open up a NEW bash terminal instance

By default the back-end server file is in a file called backend-server.js
Obviously, if you change this file name, you will need to appropriately run this file with the commands below.

Start your back-end server with Node.js or Nodemon
With Node.js:
node backend-server.js

With Nodemon:
nodemon backend-server.js

Your server should be running on port 3000 by default at the url: http://localhost:3000
KEEP VS CODE OPEN, and KEEP THIS BASH TERMINAL RUNNING

If you close VS code, or this bash instance you will need to restart it.
Start your front-end
Note: if you want to read the code for the fetch requests to the local proxy server, read the main.js file.

I have provided a simple HTML front-end for this example app.  You can run it on a local server by right clicking the zenquotes.html file and selecting “Open with Live Server”

If you select this option, then it will probably load your HTML page into your browser at 

http://127.0.0.1:5500/zenquotes.html

Or whatever your default port is for local server on your computer.



If you want to use a different front-end, like say, a react app created with Vite, you will need to open a new bash terminal to your front-end project folder and run the:
 
npm run dev

command (or whatever you have set up as your command to start your development server for your react application)

Your front-end application should now be able to communicate with your proxy back-end server and successfully obtain the resources from the API that you wish to use.

Note, you will need to modify this code to suit your project and add additional functionality

General Disclaimer
Security Warning
Remember, when you are running a server on your computer, it's accessible on your network. Ensure you're aware of the security implications, especially if you configure your server to be accessible from the internet.
Keep your local network secure, and or further configure the cors permissions in your back-end to avoid unwanted access of your back-end proxy server.
I take no responsibility for any unwise usage of this example application, you have been warned.

