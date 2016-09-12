# Todo List

## Setup

### Clone and NPM Install

Replace `<project name>` with whatever want to call your project

``` bash
git clone https://github.com/cklanac/starter-template.git <project name>
cd <project name>
npm install
```

### Build and Dev

Build: run a single build

``` bash
npm run build
```

Watch: watches directory and automatically rebuilds

``` bash
npm run watch
```

Serve: starts node server on port 3000

``` bash
npm run serve
```

Dev: runs watch and serve simultaneously

``` bash
npm run dev
```

## Goals and Steps

### Goal 1:  Walking Skeleton Node/Express + React/Redux/Thunk

Create express app to serve an item

-   Clone To-Do starter from organization
-   Create team branch
-   Create basic express app
-   Add GET route ‘/api/hello’ that returns a ‘hello world’ message with status 200 OK
-   Test using Postman.

Create React/Redux/Thunk app to display item from server

-   Update React starter app to display a prop message 'hello from react'
-   NPM install react-redux and redux-thunk
-   Add Redux (store, actions and reducers) and update the display
-   Integrate Thunk featch 'hello world' from the server

### Goal 2: Add feature to display List of tasks

Update server (express) app to serve a list of tasks

-   Change ‘hello world’ to an array of ‘task’ objects
-   Add a GET route that returns the array with status 200 OK
-   Test with Postman

Update client (react/redux) app to retrieve and display list of Tasks

-   Update action to fetch list of tasks
-   Update component to display list of ‘tasks’

### Goal 3: Add feature to create new Tasks

On the server
-   Require and use body-parser.json
-   Create a POST route that accepts a new Task
-   Generate new ID and add new item to array
-   Return new item and status 201 Create
-   Test with Postman, remember to set Content-Type: application/json

On the client
-   Create input to add new tasks
-   Handle submit event and capture the text from the input
-   POST new task to the server, then clear the input
-   Handle the server response and update the display with new item

### Goal 4: Add feature to update title of a task

Consider
The server file is probably getting long, time to break  it into modules?

On the server
-   Create a PUT route with ID param that accepts an updated Task 
-   Find the correct task in the array and update the item
-   Bonus: If ID does not exist, return status 404 Not found
-   Test with Postman

On the client
-   Update task list to allow existing tasks
-   Handle change or submit event and capture updated task
-   Use Thunk to PUT changes to the correct route
-   Handle the server response and update the display

### Goal 5: Add new feature to track 'completed' status of tasks

On the server
-   Update the array of task objects with a 'completed : true|false' property
-   Ensure the GET routes respond properly
-   Update the POST or new Task process to add 'completed:false' by default
-   Update the PUT route to accept and update the 'completed' status
-   Test all routes with Postman

On the client
-   Update display to show the current completed status
-   Update display to toggle the completed status
-   Handle the change event and PUT the update to the server
-   Handle the server response and update the display

### Goal 6: Add new feature to delete tasks

On the server
-   Create a DELETE route which accepts an ID to delete
-   Delete the item from the array and return 204 No Content
-   Test with Postman

On the client
-   Add display feature (an "X") to delete an item
-   Handle click event and send DELETE request to the server
-   Handle the server response and update the display

### Goal 7: (Client side update): Add new features filter completed tasks

-   Create 3 filters: 'show open tasks', 'show closed tasks', 'show all'
-   Update React to filter tasks and update display
-   Ensure new, completed-toggle and delete functionality still works

### Goal 8: (Server side update): Add Persistence with MongoDB

-   Install Mongo
-   NPM install and then require mongoose
-   Create a mongoose schema for a task
-   Replace CRUD functions with mongoose find, findById, save and remove
   
### Next Steps

-   Implement PATCH to update just the title or completed status
-   The number of routes is increasing, time to use express.Router?
-   Add testing with Mocha/Chai

