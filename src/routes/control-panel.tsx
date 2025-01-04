import LZString from 'lz-string';

import { observer } from 'mobx-react-lite';
import { FlexColumn } from '../components/Flex';
import { controlPanelModel } from '../App';
import { fullWidth, flex1 } from '../styles';

import { useNavigate } from 'react-router';
import { AppBarWithAuth } from '../components/AppBarWithAuth';
import { BrightnessControl } from '../components/BrightnessControl';
import { AnimationsList } from '../components/AnimationsList';

export const ControlPanel = observer(() => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const navigateToEditor = (code?: string, editAnimationId?: string) => {
    if (!code) {
      navigate('/editor');
      return;
    }

    const urlEncoded = LZString.compressToEncodedURIComponent(code);

    if (editAnimationId) {
      navigate(`/editor?edit=${editAnimationId}#${urlEncoded}`);
      return;
    }

    navigate(`/editor#${urlEncoded}`);
  };

  return (
    <FlexColumn css={flex1}>
      <AppBarWithAuth
        onViewMyAnimations={navigateToProfile}
        onViewEditor={navigateToEditor}
      />
      <FlexColumn css={[flex1, fullWidth]}>
        <BrightnessControl />
        <AnimationsList
          onSelectAnimation={controlPanelModel.playAnimation}
          onViewInEditor={(animationId, edit) =>
            navigateToEditor(
              controlPanelModel.animationsMap.get(animationId)?.code,
              edit ? animationId : undefined,
            )
          }
          currentAnimationId={controlPanelModel.playerData?.animationId ?? null}
          animations={controlPanelModel.animations}
        />
      </FlexColumn>
    </FlexColumn>
  );
});
