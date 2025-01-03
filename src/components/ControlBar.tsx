import { useAppModel } from '../models/AppModel';
import { flex, flexBetween, flexCenterVertical } from '../styles';
import { Button } from './Button';
import { observer } from 'mobx-react-lite';
import {
  DisplaySettingsRounded,
  InfoRounded,
  LoginRounded,
  PauseRounded,
  PlayArrowRounded,
  RestartAltRounded,
  SaveRounded,
  SkipNextRounded,
} from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { BaseViewModel, useViewModelConstructor } from '../utils/ViewModel';
import { makeSimpleAutoObservable } from '../utils/mobx';
import { FlexRow } from './Flex';
import { authStore } from '../App';
import { LoginDialog } from './dialogs/LoginDialog';
import { useNavigate } from 'react-router';
import { InfoDialog } from './dialogs/InfoDialog';
import { UploadDialog } from './dialogs/UploadDialog';

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

  showingLogin = false;

  showLogin() {
    this.showingLogin = true;
  }

  hideLogin() {
    this.showingLogin = false;
  }

  showingUpload = false;

  showUpload() {
    this.showingUpload = true;
  }

  hideUpload() {
    this.showingUpload = false;
  }
}

export const ControlBar = observer(() => {
  const appModel = useAppModel();
  const viewModel = useViewModelConstructor(ControlBarViewModel);

  const isLoggedIn = authStore.isLoggedIn;

  const navigate = useNavigate();

  const navigateToControlPanel = () => {
    navigate('/');
  };

  return (
    <div css={[flex('row'), flexBetween, { height: 50, background: '#333', padding: 5 }]}>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        <Button
          disabled={!isLoggedIn}
          icon
          title="Navigate to Control Panel"
          onClick={navigateToControlPanel}
        >
          <DisplaySettingsRounded />
        </Button>
        <Button icon title="Show Info" onClick={viewModel.showInfo}>
          <InfoRounded />
        </Button>
      </div>
      <FlexRow gap={20}>
        <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
          {appModel.playing ? (
            <Button icon title="Pause" onClick={appModel.pause}>
              <PauseRounded />
            </Button>
          ) : (
            <Button icon title="Play" onClick={appModel.play}>
              <PlayArrowRounded />
            </Button>
          )}
          <Button
            icon
            title="Step forward"
            disabled={appModel.playing}
            onClick={appModel.step}
          >
            <SkipNextRounded />
          </Button>
          <Button icon title="Restart" onClick={appModel.reset}>
            <RestartAltRounded />
          </Button>
        </div>
        <div>
          {isLoggedIn ? (
            <Button icon title="Save" onClick={viewModel.showUpload}>
              <SaveRounded />
            </Button>
          ) : (
            <Button icon title="Login" onClick={viewModel.showLogin}>
              <LoginRounded />
            </Button>
          )}
        </div>
      </FlexRow>
      <InfoDialog open={viewModel.showingInfo} onClose={viewModel.hideInfo} />
      <LoginDialog show={viewModel.showingLogin} onClose={viewModel.hideLogin} />
      {isLoggedIn && (
        <UploadDialog
          code={appModel.code}
          open={viewModel.showingUpload}
          onClose={viewModel.hideUpload}
        />
      )}
    </div>
  );
});
