import React, { useState, useEffect } from 'react'
import api from './api';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rewards from './Rewards';
import { signIn } from 'flourish-web-sdk-react'

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, value: any) => {
    setTabIndex(value);
  };

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          signIn(response.data.flourishAccessToken, 'staging')
      })
  }, [])

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Home" />
          <Tab label="Payment" />
          <Tab label="Rewards" />
        </Tabs>
      </Box>
      <Box>
        {tabIndex === 0 && (
          <Box>
            <Typography>Home Screen</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>Payment Screen</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Rewards />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
