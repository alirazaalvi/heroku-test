[![Build Status](https://travis-ci.org/alirazaalvi/BackendChallenge.svg?branch=master)](https://travis-ci.org/alirazaalvi/BackendChallenge)
[![Coverage Status](https://coveralls.io/repos/github/alirazaalvi/BackendChallenge/badge.svg?branch=master)](https://coveralls.io/github/alirazaalvi/BackendChallenge?branch=master)
[![Dependencies Status](https://david-dm.org/alirazaalvi/BackendChallenge.svg)](https://david-dm.org/alirazaalvi/BackendChallenge)
[![DevDependencies Status](https://david-dm.org/alirazaalvi/BackendChallenge/dev-status.svg)](https://david-dm.org/alirazaalvi/BackendChallenge#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/alirazaalvi/backendchallenge/badge.svg)](https://snyk.io/test/github/alirazaalvi/backendchallenge)

# Code Challenge Backend
Node api backend built on the top of express js.

Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

Prerequisites
-------------
- [Node.js 8.0+](http://nodejs.org)

Getting Started`
---------------

The easiest way to get started is to clone the repository:
```bash
# Get the latest snapshot
git clone https://github.com/alirazaalvi/BackendChallenge.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Start the application
npm start

# Access the application
http://localhost:8000

# Test
npm test

# Lint
npm run lint

# Coverage
npm run coverage
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **controllers**/hotel.js             | Controller for hotels api routes.              |
| **helpers**/index.js         | Helper methods for sorting and filtering of hotel list.                                 |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continue integration.                |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

Api Endpoints
-----------------
 **Get Hotels**
----
  Returns json list of hotels.

* **URL**

  /hotels

* **Method:**

  `GET`

*  **URL Query Params**

   **Optional:**

   `name=[string]`
   `city=[string]`
   `price_from=[string]`
   `price_to=[string]`
   `date_from=[string]`
   `date_to=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"name":"Concorde Hotel","price":79.4,"city":"Manila","availability":[{"from":"10-10-2020","to":"19-10-2020"},{"from":"22-10-2020","to":"22-11-2020"},{"from":"03-12-2020","to":"20-12-2020"}]}]`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Failed to fetch data." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/hotels?name=concorde&city=manila&price_from=50&price_to=100&date_from=10-10-2019&date_to=10-10-2022",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });

   ```postman or browser
   http://localhost:3000/hotels?name=concorde&city=manila&price_from=50&price_to=100&date_from=10-10-2019&date_to=10-10-2022