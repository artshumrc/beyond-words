# Beyond Words Exhibition 2016

This is the Meteor application for the Beyond Words 2016 exhibition.


### Building
In the application directory, run the following command:
```
meteor build .
```
(or if you like storing your build files in named directories, something like "meteor build ../builds/1.0.1/")

### Deploying
The server hosting this application will need Node 0.10.40 (nvm recommended), MongoDB, and NGINX.

First, rsync the generated tar.gz file to the server. Extract the build archive in a directory of your choice (ideally one that makes sense with the build version--1.0.1, 1.1.0, etc.).

Ensure you are using the correct version of Node for your build and cd to ./bundle/programs/server of your extracted application and run
```
npm install
```

Configure a Upstart service file as described in the tutorial linked at the start of this section. Ensure all parameters included in the file are set appropriately.

Configure and enable an NGINX virtual host to proxy requests to the port the application is listening on.

Start the Upstart service with whatever you named your service file.  Something such as this:
```
sudo start beyondwords
```
If you named your Upstart service file beyondwords.conf

## Building and Deploying with Docker

From the meteor-starter application, here's a good workflow for interacting with docker:


for Dev

```
docker build -t myrepo/meteordev -f Dockerfile-dev .
```

Run

```
docker run -it -p 3000:3000 --rm myrepo/meteordev
```


for Prod

```
docker build -t myrepo/mymeteorapp .
```

Run it
```
docker run --name mongodb -d mongo
docker run -it --rm -p 3000:3000 --link mongodb:db -e "MONGO_URL=mongodb://db" -e "ROOT_URL=http://localhost:3000" myrepo/mymeteorapp
```
