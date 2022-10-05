import React from 'react';
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps';
import {AuthenticationType} from 'azure-maps-control';

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: 'rrzYqci8U6Z6WXTQ7eiHCCP5Z7a3z_0xiVayIAsTd7I',
  },
  center: [2.3387, 48.8582],
  zoom: 14,
  view: 'Auto',
  showBuildingModels: true,
  
};



const DefaultMap: React.FC = () => (
  <div style={{height: '300px'}}>
    <AzureMapsProvider>
      <AzureMap options={option}>
      </AzureMap>
    </AzureMapsProvider>
  </div>
);
export default DefaultMap;