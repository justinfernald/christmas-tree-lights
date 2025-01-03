import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { FlexColumn } from '../components/Flex';
import { authStore, controlPanelModel } from '../App';
import { fullWidth, flex1 } from '../styles';

import { useNavigate } from 'react-router';
import { AppBarWithAuth } from '../components/AppBarWithAuth';
import { BrightnessControl } from '../components/BrightnessControl';
import { AnimationsList } from '../components/AnimationsList';
import { LoginDialog } from '../components/dialogs/LoginDialog';

export const ControlPanel = observer(() => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <FlexColumn css={flex1}>
      <AppBarWithAuth onViewMyAnimations={navigateToProfile} />
      <FlexColumn css={[flex1, fullWidth]}>
        <BrightnessControl />
        <AnimationsList
          onSelectAnimation={controlPanelModel.playAnimation}
          animations={controlPanelModel.animations}
        />
      </FlexColumn>
    </FlexColumn>
  );
});
