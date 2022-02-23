require(["esri/Map", "esri/views/SceneView"], (Map, SceneView) => {
        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation"      
        });

        const view = new SceneView({
          container: "viewDiv",
          map: map,
          scale: 50000000,
          center: [-104.99, 39.74] // longitude, latitude
        });
      });
