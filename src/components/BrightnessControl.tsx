import { Slider, FormLabel } from '@mui/material';
import { fullWidth, paddingVertical, paddingHorizontal } from '../styles';
import { FlexRow, FlexColumn } from './Flex';

export const BrightnessControl = () => (
  <FlexRow
    justifyContent="flex-end"
    css={[fullWidth, paddingVertical(10), paddingHorizontal(25)]}
  >
    <FlexColumn>
      <FormLabel>Brightness</FormLabel>
      <Slider step={10} valueLabelDisplay="auto" sx={[{ width: 200 }]} />
    </FlexColumn>
  </FlexRow>
);
