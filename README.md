Twitter Clone Backend
---------------------
Assignment Overview
--------------------
This project is a simplified Twitter-like backend system built using Node.js and MongoDB. The backend provides functionalities for user registration, login, tweet posting, and fetching user timelines. The application uses JWT for authentication and follows basic Domain-Driven Design principles.

How to Run the Application
Clone the Repository:
[git clone https://github.com/yourusername/twitter-clone.git](https://github.com/aNOnYMouS123478/Twitter-backend.git)
cd twitter-clone

Install Dependencies:
Ensure you have Node.js installed. Then, install the required dependencies using:
npm install
Set Up Environment Variables:

Create a .env file in the root directory of the project with the following content:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/twitter-backend
JWT_SECRET=your_jwt_secret
Replace your_jwt_secret with a strong secret key for JWT.

Start the Application:
npm start
The server will run on http://localhost:3000.

Dependencies
bcryptjs: For hashing passwords.
body-parser: For parsing incoming request bodies.
dotenv: For managing environment variables.
express: Web framework for Node.js.
jsonwebtoken: For generating and verifying JWT tokens.
mongoose: For interacting with MongoDB.
Installation Instructions
Clone the Repository:
git clone https://github.com/yourusername/twitter-clone.git
Navigate to the Project Directory:

cd twitter-clone
Install Node.js and npm:

Follow the installation instructions for Node.js to get npm (Node Package Manager) installed.

Install Project Dependencies:
npm install
Configuration
MongoDB Setup:

Ensure MongoDB is running on your local machine. If not, you need to install and start MongoDB. The connection string is defined in the .env file under MONGODB_URI.

Environment Variables:

Set up your .env file with the appropriate values:

env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/twitter-backend
JWT_SECRET=your_jwt_secret
Testing
Run Tests:

If you have test scripts, you can run them using:

npm test
Make sure you have tests defined in your package.json under the scripts section.

Issues and Troubleshooting
MongoDB Connection Error:

Ensure MongoDB is running and the connection string in .env is correct. You can check the status of MongoDB using:

bash
mongod
If you see connection errors, verify that MongoDB is properly installed and running.

JWT Authentication Issues:

Make sure your JWT_SECRET in the .env file is correctly set and matches the secret used in your JWT functions.

Dependency Issues:

If you encounter issues with dependencies, try deleting node_modules and package-lock.json, then run:

bash
npm install





API Documentation
------------------

API Documentation
Base URL
http://localhost:3000/api
Endpoints
1. User Registration
Endpoint: POST /api/users/register
Description: Register a new user.
Request Body:
{
  "username": "string",
  "password": "string"
}
Responses:
201 Created:


{
  "message": "User registered successfully"
}
400 Bad Request:


{
  "error": "Error message"
}
500 Internal Server Error:
json

{
  "error": "Error message"
}

2. User Login
Endpoint: POST /api/users/login
Description: Authenticate a user and return a JWT token.
Request Body:
json

{
  "username": "string",
  "password": "string"
}
Responses:
200 OK:
json

{
  "token": "your_jwt_token"
}
400 Bad Request:
json
Copy code
{
  "error": "Invalid credentials"
}
500 Internal Server Error:
json

{
  "error": "Error message"
}


3. Post a Tweet
Endpoint: POST /api/tweets
Description: Post a new tweet. Requires authentication.
Request Headers:
Authorization: Bearer <your_jwt_token>
Request Body:
json

{
  "text": "string"
}
Responses:
201 Created:
json

{
  "message": "Tweet posted successfully"
}
401 Unauthorized:
json

{
  "error": "Access denied. No token provided."
}
500 Internal Server Error:
json

{
  "error": "Error message"
}


4. Fetch User Timeline
Endpoint: GET /api/users/:userId/timeline
Description: Fetch the timeline of tweets for a specific user. Requires authentication.
Request Headers:
Authorization: Bearer <your_jwt_token>
URL Parameters:
userId: The ID of the user whose timeline is being fetched.
Responses:
200 OK:

[
  {
    "_id": "tweet_id",
    "userId": "user_id",
    "text": "string",
    "createdAt": "date"
  }
]
401 Unauthorized:
json

{
  "error": "Access denied. No token provided."
}
500 Internal Server Error:
json

{
  "error": "Error message"
}


Authentication
To interact with protected endpoints (like posting a tweet or fetching a timeline), you need to include a JWT token in the Authorization header:

Authorization: Bearer <your_jwt_token>
Error Handling
400 Bad Request: Invalid input or missing parameters.
401 Unauthorized: No token provided or invalid token.
500 Internal Server Error: Server-side issues.

   Contact Information:
------------------------------
Name:Mahendher Pokala
mobile:+917993572344
mail:mahendherrangari@gmail.com
-------------------------------
