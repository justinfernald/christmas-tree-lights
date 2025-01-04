import LZString from 'lz-string';

import { observer } from 'mobx-react-lite';
import { FlexColumn, FlexRow } from '../components/Flex';
import { authStore, controlPanelModel } from '../App';
import { fullWidth, flex1 } from '../styles';

import { AppBarWithAuth } from '../components/AppBarWithAuth';
import { AnimationsList } from '../components/AnimationsList';
import { BrightnessControl } from '../components/BrightnessControl';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { Create } from '@mui/icons-material';
import { useEffect } from 'react';

export const Profile = observer(() => {
  const navigate = useNavigate();

  const navigateToControlPanel = () => {
    navigate('/');
  };

  const navigateToEditor = (code?: string, editAnimationId?: string) => {
    if (!code) {
      navigate('/editor');
      return;
    }

    const urlEncoded = LZString.compressToEncodedURIComponent(code);

    navigate(`/editor?edit=${editAnimationId}#${urlEncoded}`);
  };

  useEffect(() => {
    if (!authStore.isLoggedIn) {
      navigateToControlPanel();
    }
  }, [authStore.isLoggedIn]);

  return (
    <FlexColumn css={flex1}>
      <AppBarWithAuth
        onViewControlPanel={navigateToControlPanel}
        onViewEditor={navigateToEditor}
      />
      <FlexColumn css={[flex1, fullWidth]}>
        <BrightnessControl />
        <FlexRow center css={{ padding: 10 }}>
          <Button
            variant="contained"
            startIcon={<Create />}
            onClick={() => navigateToEditor()}
          >
            Create New Animation
          </Button>
        </FlexRow>
        <AnimationsList
          allowDelete
          onSelectAnimation={controlPanelModel.playAnimation}
          onViewInEditor={(animationId, edit) =>
            navigateToEditor(
              controlPanelModel.animationsMap.get(animationId)?.code,
              edit ? animationId : undefined,
            )
          }
          currentAnimationId={controlPanelModel.playerData?.animationId ?? null}
          animations={controlPanelModel.userAnimations}
        />
      </FlexColumn>
    </FlexColumn>
  );
});
