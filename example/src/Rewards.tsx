import { useState, useEffect } from 'react'
import Flourish from 'flourish-web-sdk-react'
import Box from '@mui/material/Box';
import api from './api';
import { MissionActionEvent } from '../../dist/esm/events/eventTypes';

const Rewards = () => {
  const [ accessToken, setAccessToken ] = useState('')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          setAccessToken(response.data.access_token)
      })
  }, [])

  const missionActionEventCallback = (missionActionEvent: MissionActionEvent): void => {
    console.log('Mission event type', missionActionEvent.missionType);
    console.log('Mission event name', missionActionEvent.missionEvent);
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
