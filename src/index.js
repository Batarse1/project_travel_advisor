import React from 'react';
import ReactDOM from 'react-dom';
import { useLoadScript } from '@react-google-maps/api';

import App from './App';

const libraries = ['geometry', 'drawing', 'places'];

const Page = () => {
  const reactMapKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: reactMapKey,
    version: '3.exp',
    libraries,
  });

  if (!isLoaded) return 'Loading...';

  return <App />;
};

ReactDOM.render(<Page />, document.getElementById('root'));
