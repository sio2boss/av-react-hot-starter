# av-react-hot-starter

A drop dead simple react starter (ES2017). With react-hot-loader and webpack-dev-server.

## Getting started

### Install av

npm install -g av-shell

This allows us to work from the root director or from within a custom shell for this project.  You can start the shell with 'av' or just prefix your command as show below.

### Running the server
Prepping the build environment
```
av yarn install
```

Included is a simple node server that will serve static resources. This is conceptually separated and code isolated to allow you to drop in your own server.
```
av yarn server
```

Run the webpack-dev-server with hot-loading
```
av webpack-server
```

