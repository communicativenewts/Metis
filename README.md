# Project Name

> Metis, the new way to plan your day!

## Team

  - __Product Owner__: Elizabeth Akerman
  - __Scrum Master__: Alex Autem
  - __Lead Software Engineer__: Bruce Graham

## Table of Contents

1. [Files](#Files)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Files
The roles of our files/folders are included below:

/client/index.html
  -this file contains the usual CDN's, link, meta and script tags however the important thing to know is that the script tag starting on approx line 90 is what contains all the nuts and bolts for our Google Calendar API login.

/client/app/app.js
  -this file contains the AngularJS $routeProviders.

/client/app/calendar
  -this folder contains the AngularJS calendar view template and controller.

/client/app/confirm
  -this folder contains the AngularJS confirm view template and controller.

/client/app/login
  -this folder contains the AngularJS login view template and controller.

/client/app/schedule
  -this folder contains the AngularJS schedule view template and controller.

/client/app/services
  -this folder has two files which contain all the functions for converting a list of tasks into a usable schedule.  It also converts the schedule into the formats required for displaying the new tasks on the AngularJS confirm view and for sending the new tasks to the Google API.

/client/css
  -this folder is one of several dependancy folders needed to propertly run our Responsee 4 CSS template/framework, www.myresponsee.com.

/client/font
  -this folder is one of several dependancy folders needed to propertly run our Responsee 4 CSS template/framework, www.myresponsee.com.

/client/img/metis.png
  -this file is our main logo which shows up on our index.html page.

/client/owl-carousel
  -this folder is one of several dependancy folders needed to propertly run our Responsee 4 CSS template/framework, www.myresponsee.com.

/client/js
  -this folder is one of several dependancy folders needed to propertly run our Responsee 4 CSS template/framework, www.myresponsee.com.

/client/lib
  -this folder contains our AngularJS library files that were necessary for the proper function of the Karma test suite.

/server/server.js
  -this file contains our node/express server.

/server/config
  -this folder contains our server routes file, the skeleton is there but this file is currently not being used, please see the comments in this file for further details.

/server/tasks
  -this folder contains our database controller and model files for tasks, the skeleton is there but these files are currently not being used, please see the comments in these files for further details.

/server/users
  -this folder contains our database controller and model files for users, the skeleton is there but these files are currently not being used, please see the comments in these files for further details.

/specs/tests
  -this folder contains our test file, please see the Running Tests section below in this ReadMe for further details.


## Requirements

- AngularJS 1.6.x
- Angular-Route 1.6.x
- Angular-Sanitize 1.6.x
- Node 6.9.x
- Express 4.13.x
- Body-Parser 1.15.x
- MongoDB 3.2.x
- Mongoose 4.8.x
- Responsee 4

## Development

### Installing Dependencies

From within the root directory:

npm install
*all other dependencies are connected via CDN


### Project Issues Link

View the project issues [here](https://waffle.io/communicativetech/metis)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.


## Running Tests

Intiate the test sequence by running 'gulp karma' from the command line.  More testing files can be added to specs/tests and karma.config.js
