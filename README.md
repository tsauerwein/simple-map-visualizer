# simple-map-visualizer

A very basic map visualizer library prototype, which provides an
abstraction around different mapping engines (e.g. Leaflet, Google
Maps, OpenLayers, ...).

## Usage

### Using as ES 6 module

Example: [src/examples/app.js](src/examples/app.js)
Demo: [https://tsauerwein.github.io/simple-map-visualizer/](https://tsauerwein.github.io/simple-map-visualizer/)

    import {init} from '{yet-to-publish-npm-package}/map';
    const element = document.getElementById('map');

    init('map-config.json', element).then((map) => {
      console.log(map.getZoom());
      ...
    });

### Using included through script tag

Example: [static/global-example.html](static/global-example.html)
Demo: [https://tsauerwein.github.io/simple-map-visualizer/global-example.html](https://tsauerwein.github.io/simple-map-visualizer/global-example.html)

    <script type="text/javascript" src="lib.min.js"></script>
    <script type="text/javascript">
        var element = document.getElementById('map');

        simplemaplib.init('map-config.json', element).then(function(map) {
          console.log(map.getZoom());
          ...
        });
    </script>

## Development

Install the dependencies:

    npm install

And then run the development server:

    npm start

To build for production, use:

    npm run build

### Flow static type checking

The library is using [Flow](https://flow.org/) to add static typing. To
run the type checker, use:

    npm run flow

### Adding a new mapping engine

To add a new mapping engine, the interfaces [Engine](src/map/engines/engine.js),
[MapProxy](src/map/engines/mapproxy.js) and [LayerProxy](src/map/engines/layerproxy.js) have to be implemented. Then, the new engine has to be activated
in [getEngine()](src/map/engines/index.js).

## Remarks

The webpack configuration would need some love. While it has been fiddled
together to *kind of* demonstrate the idea, it should not be used like that.

## Credits

Project setup based on [es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## License

MIT
