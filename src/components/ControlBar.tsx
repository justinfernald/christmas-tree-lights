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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { BaseViewModel, useViewModelConstructor } from '../utils/ViewModel';
import { makeSimpleAutoObservable } from '../utils/mobx';

export class ControlBarViewModel extends BaseViewModel {
  constructor() {
    super();
    makeSimpleAutoObservable(this, {}, { autoBind: true });
  }

  showingInfo = false;

  showInfo() {
    this.showingInfo = true;
  }

  hideInfo() {
    this.showingInfo = false;
  }
}

export const ControlBar = observer(() => {
  const appModel = useAppModel();
  const viewModel = useViewModelConstructor(ControlBarViewModel);

  return (
    <div css={[flex('row'), flexBetween, { height: 50, background: '#333', padding: 5 }]}>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        <Button onClick={viewModel.showInfo}>
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
      <InfoDialog open={viewModel.showingInfo} onClose={viewModel.hideInfo} />
    </div>
  );
});

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
}

const InfoDialog = observer((props: InfoDialogProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} maxWidth={'lg'}>
      <DialogTitle>✨Info✨</DialogTitle>
      <DialogContent>
        <DialogContentText
          css={{
            '& > p': {
              marginBottom: 5,
            },
          }}
        >
          <p>Justin made this very quickly so give him some slack. It's not perfect.</p>
          <p>
            These points on this tree reflect the points on my actual Christmas tree at
            home. So all the code created in this editor can be sent to me, then I can run
            it on my tree If you sent me a program for the tree, I'll try to send you a
            video of me running it on the tree.
          </p>
          <p>
            The code editor uses the TypeScript compiler to compile your code. You can use
            any TypeScript code you want, but you can only use the following imports:
            <i>Vector3, Color, colors, Light, MathUtils, Time, runner</i>
          </p>
          <p>
            Note all x, y, z values range from 0 to 1. To scale z proportionally with
            tree, multiple value by 1.74. Also z=0 the top of the tree and z=1 is the
            bottom of the tree.
          </p>
          <p>
            The runner runs at a constant 30 fps. And it will stop running if it detects
            poor performance.
          </p>
          <p>
            Note that runner.setup will run at the beginning and runner.update will run
            every frame. light.update will also run every frame
          </p>
          <p>
            If you return a value in light.update, it will also set that value to it's
            color.
          </p>
          <p>You can also set a light's color by doing light.color = [some color]</p>
          <p>I'm sorry 10x'ers, I will not add a VI mode.</p>
          <p>
            The code in the editor is saved in the URL. I'm sorry that it gets really
            really long. If you do Ctrl + S, it will copy the URL to your clipboard.
          </p>
          <p>
            I'm also sorry that this is a word dump and doesn't have a specific order to
            what I mention about the editor. Regardless, enjoy!
          </p>
          <p>
            Credit to <a href="https://github.com/sirxemic/xmastree-app">sirxemic</a> on
            GitHub for inspiration of the editor
          </p>
          <p>
            Credit to{' '}
            <a href="https://www.youtube.com/watch?v=TvlpIojusBE">Matt Parker</a> for
            inspiration of the Christmas Tree
          </p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});
