import { useState, useEffect } from 'react'
import Flourish from 'flourish-web-sdk-react'
import Box from '@mui/material/Box';
import api from './api';
import { MissionActionEvent } from 'flourish-web-sdk-react';

const Rewards = () => {
  const [ accessToken, setAccessToken ] = useState('eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOjUsInVzZXJfaWQiOjcyNSwiZXhwIjoxNzE5MzUxMTYyfQ.wzpbtFLtJa3qLLc9i4YBUFWc65P6dmKZWmvcZg5BCjQ')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          setAccessToken(response.data.access_token)
      })
  }, [])

  const missionActionEventCallback = (missionActionEvent: MissionActionEvent): void => {
    console.log('1 Mission event type', missionActionEvent.missionType);
    console.log('2 Mission event name', missionActionEvent.missionEvent);
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column" >
      <Flourish token={accessToken}
        environment='staging'
        language='en'
        missionActionEventCallback={missionActionEventCallback} />
    </Box>
  );
}

export default Rewards;
