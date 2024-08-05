API Documentation

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
