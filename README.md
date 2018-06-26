# Project Title

Talens3 Website (http://talents3.com)

## Description

A single-page web application with Angular6 frontend framework, NodeJs and Express backend server and online MongoDB database

### Prerequisites

You will need node and npm installed globally on your machine.

```
Give examples
```

### Installing

Install latest Angular

```
sudo npm install -g @angular/cli@latest

```

Build frontend Angular module

```
cd client
ng build

```

Install backend Libraries

```
cd server
npm install

```

Setup the port you want to use, change ./server/server.js like this,

```
app.listen(3000, () => console.log('Example app listening !'));
```
Setup the configuaration at ./server/config/database.js like this, 

```
module.exports = {
  'secret':'yourSecret',
  'database': 'your mongo db setup', (mongodb:/***:***@****.mlab.com:51210/talents-web-user-db)
  'numsPerPage': 30,
  'initialNumOfUsers': 30,
  'emailAccount': 'email', 
  'emailPassword': 'password'
};

```

Start the server and 

```
npm start
```



## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Angular](https://angular.io/) - The web framework used
* [MongoDB](https://mlab.com/) - Online MongoDB
* [NodeJS](https://nodejs.org/en/) - The web backend server
* [ExpressJS](https://expressjs.com/) - The web backend server api


