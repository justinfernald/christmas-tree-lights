import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { FlexColumn, FlexRow } from '../components/Flex';
import { authStore, controlPanelModel } from '../App';
import { fullWidth, flex1 } from '../styles';

import { AppBarWithAuth } from '../components/AppBarWithAuth';
import { AnimationsList } from '../components/AnimationsList';
import { BrightnessControl } from '../components/BrightnessControl';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { Create } from '@mui/icons-material';

export const Profile = observer(() => {
  const navigate = useNavigate();

  const navigateToControlPanel = () => {
    navigate('/');
  };

  const navigateToEditor = () => {
    navigate('/editor');
  };

  return (
    <FlexColumn css={flex1}>
      <AppBarWithAuth onViewControlPanel={navigateToControlPanel} />
      <FlexColumn css={[flex1, fullWidth]}>
        <BrightnessControl />
        <FlexRow center css={{ padding: 10 }}>
          <Button variant="contained" startIcon={<Create />} onClick={navigateToEditor}>
            Create New Animation
          </Button>
        </FlexRow>
        <AnimationsList
          allowDelete
          onSelectAnimation={controlPanelModel.playAnimation}
          animations={controlPanelModel.animations}
        />
      </FlexColumn>
    </FlexColumn>
  );
});
