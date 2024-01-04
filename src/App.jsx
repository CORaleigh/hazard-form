import { useEffect, useRef, useState } from 'react'
import FeatureForm from '@arcgis/core/widgets/FeatureForm';
import Graphic from '@arcgis/core/Graphic';
import WebMap from '@arcgis/core/WebMap';
import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";
import './App.css'

function App() {
  const formDiv = useRef(null);
  const mapDiv = useRef(null);
  const searchDiv = useRef(null);
  const [error, setError] = useState("");
  const loaded = useRef(false);
  const setFeature = async (feature, editor) => {
    await editor.startUpdateWorkflowAtFeatureEdit(feature);    
    editor.container.setAttribute('hidden', '');     
    setTimeout(() => {
      const items = document.querySelectorAll('calcite-flow-item');
      items.forEach(item => item.shadowRoot.querySelector('calcite-panel').shadowRoot.querySelector('.header').setAttribute('hidden',''))
      document.querySelector('.esri-editor').setAttribute('style', 'visibility: visible')   
    },100);  
  }
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      const map = new WebMap({
        portalItem: {
          portal: 'https://maps.raleighnc.gov/portal',
          id: 'aeac0d28b8ec4caaa41e78d5cda300e0'
        }
      });
      const loadMap = async () => {
        const mapView = new MapView({
          map: map,
          container: mapDiv.current
        });        
        await mapView.when();
        const layer = map.layers.getItemAt(0);
        const editor = new Editor({
          view: mapView,
          container: formDiv.current,
          allowedWorkflows: 'update',
          visibleElements: {
            createFeaturesSection: false,
            snappingControls: false,
            snappingControlsElements: {
              enabledToggle: false,
              featureEnabledToggle: false,
              header: false,
              layerList: false,
              selfEnabledToggle: false
            },
            editFeaturesSection: false
          }
        });
        const search = new Search({
          container: searchDiv.current,
          includeDefaultSources: false,
          sources: [
            {  layer: layer,
              placeholder: "Search by workorder ID",
              maxResults: 5,
              searchFields: ["workorderid"],
              displayField: "workorderid"
            }
          ]
        });

        search.on('search-complete', e => {
          if (e.numResults > 0) {
            console.log(e.results[0].results[0]);
            setFeature(e.results[0].results[0].feature, editor);    
          }
        });
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
       // if (id) {
          const results = await layer.queryFeatures({where: `workorderid = '${id}'`, outFields: ['*']});
          if (results.features.length) {
            const feature = results.features[0];
            setFeature(feature, editor);

          } else {
            //setError(`No workorder with an ID of ${id} found, search for a different workorder ID`)
          }
        // } else {
        //   setError(`No workorder ID provided in the URL`)
        // }
      }
      loadMap();
    }

  },[]);
  return (
    <>
      {error.length > 0 && error}
      <div className='header'>
        <div ref={searchDiv}></div>
      </div>
      <div ref={formDiv}></div>
      <div ref={mapDiv}></div>

    </>
  )
}

export default App
