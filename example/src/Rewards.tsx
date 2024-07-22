import { useState, useEffect } from 'react'
import Flourish from 'flourish-web-sdk-react'
import Box from '@mui/material/Box';
import api from './api';

const Rewards = () => {
  const [ accessToken, setAccessToken ] = useState('')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          setAccessToken(response.data.access_token)
      })
  }, [])

  const genericEventCallback = (eventData: string): void => {
    console.log('Generic event data', eventData);
  };
  return (

    <Box height="100vh" display="flex" flexDirection="column" >
      <Flourish token={accessToken}
        environment='staging'
        language='en'
        genericEventCallback={genericEventCallback}/>
    </Box>
  );
}

export default Rewards;
