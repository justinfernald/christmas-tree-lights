import { Slider, FormLabel } from '@mui/material';
import { fullWidth, paddingVertical, paddingHorizontal } from '../styles';
import { FlexRow, FlexColumn } from './Flex';
import { authStore, controlPanelModel } from '../App';
import { useEffect, useState } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';

const useDebouncedBrightness = () => {
  const [brightness, setBrightness] = useState(
    () => (controlPanelModel.playerData?.brightness ?? 0) * 100,
  );

  useEffect(() => {
    return reaction(
      () => controlPanelModel.playerData?.brightness,
      (brightness) => {
        if (brightness === undefined) {
          return;
        }

        setBrightness(brightness * 100);
      },
    );
  }, [controlPanelModel.playerData?.brightness]);

  return {
    brightness,
    setBrightness,
    uploadBrightness: (value: number) => {
      controlPanelModel.updateBrightness(value / 100);
    },
  };
};

export const BrightnessControl = observer(() => {
  const { brightness, setBrightness, uploadBrightness } = useDebouncedBrightness();

  return (
    <FlexRow
      justifyContent="flex-end"
      css={[fullWidth, paddingVertical(10), paddingHorizontal(25)]}
    >
      <FlexColumn>
        <FormLabel>Brightness</FormLabel>
        <Slider
          disabled={!authStore.isLoggedIn}
          value={brightness}
          step={10}
          valueLabelDisplay="auto"
          sx={[{ width: 200 }]}
          onChange={(_, value) => {
            setBrightness(value as number);
          }}
          onChangeCommitted={(_, value) => {
            uploadBrightness(value as number);
          }}
        />
      </FlexColumn>
    </FlexRow>
  );
});
