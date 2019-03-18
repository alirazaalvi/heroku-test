# Nitrogen backend api
Nitrogen api backend built on the top of express js.

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
git clone https://github.com/alirazaalvi/nitrogen-api.git myproject

# Change directory
cd myproject

#Install knex for migrations
npm install -g knex

# Install NPM dependencies
npm install

# Start the application
npm start

#Run knex migrations
knex migrate:latest --env development

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
