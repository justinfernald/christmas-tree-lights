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

  const navigateToEditor = (code?: string) => {
    console.log({ code });

    if (!code) {
      navigate('/editor');
      return;
    }

    const urlEncoded = LZString.compressToEncodedURIComponent(code);

    navigate(`/editor#${urlEncoded}`);
  };

  return (
    <FlexColumn css={flex1}>
      <AppBarWithAuth onViewMyAnimations={navigateToProfile} />
      <FlexColumn css={[flex1, fullWidth]}>
        <BrightnessControl />
        <AnimationsList
          onSelectAnimation={controlPanelModel.playAnimation}
          onViewInEditor={(animationId) =>
            navigateToEditor(controlPanelModel.animationsMap.get(animationId)?.code)
          }
          currentAnimationId={controlPanelModel.playerData?.animationId ?? null}
          animations={controlPanelModel.animations}
        />
      </FlexColumn>
    </FlexColumn>
  );
});
