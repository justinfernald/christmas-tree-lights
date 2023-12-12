import { useState } from 'react';
import { useAppModel } from '../models/AppModel';
import { flex, flexBetween, flexCenterVertical } from '../styles';
import { Button } from './Button';
import { observer } from 'mobx-react-lite';
import {
  InfoRounded,
  PauseRounded,
  PlayArrowRounded,
  RestartAltRounded,
  SkipNextRounded,
} from '@mui/icons-material';

export const ControlBar = observer(() => {
  const appModel = useAppModel();

  return (
    <div css={[flex('row'), flexBetween, { height: 50, background: '#333', padding: 5 }]}>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        <Button>
          <InfoRounded />
        </Button>
      </div>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        {appModel.playing ? (
          <Button onClick={appModel.pause}>
            <PauseRounded />
          </Button>
        ) : (
          <Button onClick={appModel.play}>
            <PlayArrowRounded />
          </Button>
        )}
        <Button disabled={appModel.playing} onClick={appModel.step}>
          <SkipNextRounded />
        </Button>
        <Button onClick={appModel.reset}>
          <RestartAltRounded />
        </Button>
      </div>
    </div>
  );
});
