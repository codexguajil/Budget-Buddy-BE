## Backend Server

This is a simple Node.js backend server built with Express.js.

**Endpoints:**

* **GET /:** Returns "Hello World".
* **POST /signup:** 
    * Accepts user signup data (name, email, password, age, salary, rent, goals) in the request body.
    * Logs the received data to the console.
    * Returns a JSON response with `success: true`.
* **GET /home:** Returns "Welcome to home page".

**Dependencies:**

* express
* cors

**Running the Server:**

1. Install dependencies: `npm install express cors`
2. Start the server: `node index.js` (or your server file name)

**Notes:**

* This server is intended for development purposes and does not include any database integration or authentication.
* CORS is enabled to allow requests from different origins.