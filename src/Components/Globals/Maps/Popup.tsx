import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import {
  AzureMap,
  AzureMapsProvider,
  IAzureMapOptions,
  AzureMapPopup,
  AzureMapHtmlMarker,
  useCreatePopup,
} from 'react-azure-maps';
import { AuthenticationType, data } from 'azure-maps-control';
import HtmlMarker from 'azure-maps-control';

const popupOptions = {
  position: new data.Position(2.2944991, 48.8582602),
};

const PopupExample: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHtmlMarkerPopupVisible, setIsHtmlMarkerPopupVisible] = useState(true);
  const [someHtmlMarkerPopupState, setSomeHtmlMarkerPopupState] = useState(0);
  const htmlMarkerOptions = {
    popup: useCreatePopup({
      options: {},
      popupContent: (
        <div style={wrapperStyles.popupStyles}>
          Hello World Html marker popup with some random value click Change Number to see actual value <br />{' '}
          {someHtmlMarkerPopupState}
        </div>
      ),
    }),
  };
  const option: IAzureMapOptions = useMemo(() => {
    return {
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: 'rrzYqci8U6Z6WXTQ7eiHCCP5Z7a3z_0xiVayIAsTd7I',
      },
      center: [2.2944991, 48.8582602],
      zoom: 16,
      view: 'Auto',
    };
  }, []);

  const memoizedMapPopup = useMemo(
    () => (
      <AzureMapPopup
        isVisible={isVisible}
        options={popupOptions}
        popupContent={<div style={wrapperStyles.popupStyles}><div className="bg-white rounded-lg w-full p-0.5 flex items-center">
          <div className="bg-red rounded-l-lg flex items-center pr-[6px] h-[110px]">
            <div className="flex flex-col align-center justify-center w-[66px] px-2">
              <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
                <p>Mar</p><p>20</p>
              </div>
              <div className="flex flex-col justify-center items-center pt-2">
                <img src="./img/marche.svg" alt="profile_picture" className="w-10 h-10"/>
              </div>
            </div>
            <div className="text-white text-center w-[66px]">
              <img src="./img/photo2.svg" alt="image_profil" className="" />
            </div>
          </div>
          <div className="text-blue">
            <h3 className="px-1 text-[15px]">Course à pied !</h3>
            <p className="px-1 text-[12px]">Keeper: Benoît</p>
            <p className="px-1 text-[12px]">Activité: course à pied<span className="bg-orange rounded-full text-white text-[11px] p-1">Intermédiaire</span></p>
            <p className="flex justify-start items-end gap-4 py-2 pr-3">
              <span className="bg-red rounded-r-full text-white text-[12px] p-1">Complet</span>
              <span className="bg-red rounded-full text-white text-[11px] px-2 py-0.5">16:00</span>
            </p>
          </div>
        </div></div>}
      />
    ),
    [isVisible],
  );

  const memoizedHtmlMarker = useMemo(
    () => (
      <AzureMapHtmlMarker
        isPopupVisible={isHtmlMarkerPopupVisible}
        markerContent={<div className="pulseIcon"></div>}
        options={htmlMarkerOptions}
      />
    ),
    [isHtmlMarkerPopupVisible],
  );

  const toggleHtmlMarkerPopup = useCallback(() => {
    setIsHtmlMarkerPopupVisible((prevState) => !prevState);
  }, [isHtmlMarkerPopupVisible]);

  return (
    <div style={wrapperStyles.map}>
      <div style={wrapperStyles.buttonContainer}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {
            toggleHtmlMarkerPopup();
          }}
        >
          Toggle ____
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Open Popup
        </Button>
        <Button size="small" variant="contained" color="secondary" onClick={() => setIsVisible(false)}>
          Close Popup
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => setSomeHtmlMarkerPopupState(Math.random() * 100)}
        >
          Change ___
        </Button>
      </div>
      <AzureMapsProvider>
        <div style={wrapperStyles.map}>
          <AzureMap options={option}>
            {memoizedMapPopup}
            {memoizedHtmlMarker}
          </AzureMap>
        </div>
      </AzureMapsProvider>
    </div>
  );
};

export const wrapperStyles = {
  map: {
    height: '400px',
    weight: '400px'
  },
  wrapper: {
    padding: '1px',
    marginTop: '1px',
  },
  buttonContainer: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: '1px',
    gridAutoColumns: 'max-content',
    padding: '1px 0',
  },
  buttons: {
    padding: '1px',
    flex: 1,
  },
  popupStyles: {
    padding: '1px',
    color: 'black',
  },
};

export default PopupExample;