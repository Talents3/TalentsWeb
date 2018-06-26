# Project Title

Talens3 Website (http://talents3.com)

## Description

A single-page web application with Angular6 frontend framework, NodeJs and Express backend server and online MongoDB database

### Built With

* [Angular](https://angular.io/) - The web framework used
* [MongoDB](https://mlab.com/) - Online MongoDB
* [NodeJS](https://nodejs.org/en/) - The web backend server
* [ExpressJS](https://expressjs.com/) - The backend routing and middleware web framework

### Prerequisites

You will need node and npm installed globally on your machine.


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



## Project Structure

![Optional Text](./demoImages/FRONTEND_STRUCTURE.png)

![Optional Text](. /demoImages/BACKEND_STRUCTURE.png)

### MVC model

A Model–view–controller design pattern decouples major components

### Connecting Angular client and NodeJS server

Angular Build the modules to public folder including index.html.

NodeJS server use express.static to serve static files. If the url does not handled by router on the server side, then the server send index.html from the public folder
```
app.use(express.static(path.join(__dirname, '../public')));
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});
```

## Routing

NodeJS server express to create http application and set "/api/v1" as the server main prefix. (in ./server/server.js) 

```
const app = express();
const restRouter = require('./routes/rest');
app.use('/api/v1',restRouter);
```

Then use express router to handle http request, set up the backend router in ./server/routes/rest.js

```
const router = express.Router();
```

Angular client router set up the path to different components(views), details in ./client/src/app/app.routes.ts
```
 const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserInfoListComponent
    },
    .
    .
    .
    .
```

## Data flowing

Follow is an example for the user detail page. 

When user click the user card, client redierct to /user/:id. Based on Angular router, userDetailComponent will be rendered.
```
{
        path: 'users/:id',
        component: UserDetailComponent
}
```
userDetailComponent will trigger the frontend service(controller) to get the user infomation

```
this.route.params.subscribe(params => {
      this.dataService.getUser(+params['id']).then(.......)
          
```

The frontend service dataService uses httpClient module to send a get request to backend server.
```
getUser(id: number): Promise<User> {
    return this.httpClient.get(`api/v1/users/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }
```

In server side, express router handle the get request
```
//Get User By Id
router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    userService.getUser(+id)
      .then(user => res.json(user));
});
```

The backend service userService will get the result from database and return it 
```
const getUser = function(id) {
    return new Promise((resolve, reject) => {
        User.findOne({id: id}).populate('educations').populate('experiences').populate('projects')
        .exec((err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
}

```

Finally, frontend view will get the info and display it.  


