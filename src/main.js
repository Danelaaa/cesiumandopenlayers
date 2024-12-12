window.CESIUM_BASE_URL = '/cesium'; // Ensure this is the first line in your script

import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './style.css';
import * as Cesium from 'cesium';

const viewer = new Cesium.Viewer('cesiumContainer');


// Initialize the OpenLayers map
const openLayersMap = new Map({
    target: 'openlayersContainer',
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
    ],
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});

// Initialize the CesiumJS Viewer
const cesiumViewer = new Viewer('cesiumContainer', {
    imageryProvider: new Cesium.OpenStreetMapImageryProvider(),
    sceneModePicker: false,
});

