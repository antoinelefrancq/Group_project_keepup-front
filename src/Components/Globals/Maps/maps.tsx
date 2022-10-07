/* eslint-disable prefer-const */
import React, { useState } from 'react';
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps';
import {AuthenticationType, data} from 'azure-maps-control';
import {
  AzureMapDataSourceProvider,
  AzureMapLayerProvider,
  AzureMapFeature,
  AzureMapHtmlMarker,
  IAzureMapHtmlMarkerEvent,
} from 'react-azure-maps';
import EventsExample from '../EventsExample';


const azureHtmlMapMarkerOptions = {
  position: [2.2944991, 48.8582602],
};

function getCoordinates(e: any) {
  console.log('Clicked on:', e.position);
}

const onClick = () => {
  console.log('ASD');
};
const eventToMarker: Array<IAzureMapHtmlMarkerEvent> = [{ eventName: 'click', callback: onClick }];
const point = new data.Position(2.2944991, 48.8582602);
const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: 'rrzYqci8U6Z6WXTQ7eiHCCP5Z7a3z_0xiVayIAsTd7I',
  },
  center: [2.2944991, 48.8582602],
  zoom: 16,
  view: 'Auto',
  showBuildingModels: true,
  
};
// const [isVisible, setIsVisible] = useState(false);
const onPopupCLick = (): void => {	
  console.log('Je clique');
};

const DefaultMap: React.FC = () => (
  
  <div style={{height: '300px'}}>
    <AzureMapsProvider>
      <AzureMap options={option} events={{ click: onPopupCLick}}>
        <AzureMapHtmlMarker
          markerContent={<div className="pulseIcon"></div>}
          options={azureHtmlMapMarkerOptions}
          events={eventToMarker}
        />
        <AzureMapDataSourceProvider id={'LayerExample1 DataSource2 '}>
          <AzureMapLayerProvider
            id={'LayerExample1 Layer2'}
            options={{
              opacity: 0.8,
              iconOptions: {
                image: 'pin-round-red',
              },
            }}
            type={'SymbolLayer'}
          />
          
          <AzureMapFeature
            id={'LayerExample1'}
            type="Point"
            coordinate={point}
            properties={{
              title: 'My Title',
            }}
          />
        </AzureMapDataSourceProvider>
      </AzureMap>
    </AzureMapsProvider>
  </div>
  
);
export default DefaultMap;
