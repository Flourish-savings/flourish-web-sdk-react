import { useState, useEffect } from 'react'
import Flourish from 'flourish-web-sdk-react'
import Box from '@mui/material/Box';
import api from './api';

const Rewards = () => {
  const [ accessToken, setAccessToken ] = useState('')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          console.log('ACCESS_TOKEN', response.data.flourishAccessToken);
          setAccessToken(response.data.flourishAccessToken)
      })
  }, [])

  const printEventData = (data: string): void => {
    console.log('Event Client side', data);
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column" >
      <Flourish token={accessToken}
        environment='staging'
        language='en'
        eventCallback={printEventData} />
    </Box>
  );
}

export default Rewards;
