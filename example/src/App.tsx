import React, { useState, useEffect } from 'react'
import api from './api';
import { Flourish } from 'flourish-web-sdk-react';

function App() {

  const [ accessToken, setAccessToken ] = useState('')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          setAccessToken(response.data.flourishAccessToken)
      })
  }, [])

  return (
    <Flourish token={accessToken}
              environment='staging'
              language='en'
              eventCallback={printEventData} />
  );
}

const printEventData = (data: string): void => {
  console.log('Event Client side', data);
};

export default App;
