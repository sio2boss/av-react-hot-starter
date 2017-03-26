# react-starter

A drop dead simple react starter (ES2017). The philosophy is a no-abstraction configuration to favor code deletion over reusability.

## Getting started
### Running a server
Included is a simple node server that will serve static resources. This is conceptually separated and code isolated to allow you to drop in your own server.
```
yarn run server
```

### Webpacking the JS
Run the webpack. There is no hot-loading due to a non-clean separation of hot-loading with asset serving.
```
yarn run webpack
```

### Testing
Uses jest as the test runner with enzyme as the renderer.
```
yarn test
```

### License
MIT