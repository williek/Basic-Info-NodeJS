Basic Info - NodeJS
======

pre-requisites:
--------
* npm
* node

How to execute it for the first time:
--------
Before anything, it is necessary to install the node modules, therefore, after to be in the project folder, it is necessary to run the following command:
```
npm install
```

Run application:
--------
To run this application, all you need to do is use the following command:
```
npm start
```

\
\
\
Docker:
======
Create docker image:
--------
To create a docker image, all you need to do is use the following command:
```
docker build --tag basic-info-node .
```

Run app on docker container:
--------
To run the app, all you need to do is use the following command:
```
docker run -d -p 80:8080 basic-info-node
```
After to run the command, the app will be accessible on http://localhost/

\
\
\
Podman:
======

In order to run this app on podman, you can use the same docker instructions, and just change `docker` command to `podman`