import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { FlexColumn, FlexRow } from '../components/Flex';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { authStore, controlPanelModel } from '../App';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Dialog,
  FormLabel,
  Slider,
} from '@mui/material';
import {
  fullWidth,
  flex1,
  paddingHorizontal,
  paddingVertical,
  relative,
  absolute,
  fullSize,
} from '../styles';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { reaction } from 'mobx';
import { OpenInBrowser, PlayArrow } from '@mui/icons-material';
import { Animation } from '../firebase';

export const ControlPanel = observer(() => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const handleLogin = () => setAuthDialogOpen(true);
  const handleLogout = () => authStore.logout();
  const closeAuthDialog = () => setAuthDialogOpen(false);

  return (
    <FlexColumn css={flex1}>
      <LoginDialog show={authDialogOpen} onClose={closeAuthDialog} />
      <AppBarWithAuth
        onLogin={handleLogin}
        onLogout={handleLogout}
        onViewMyAnimations={() => console.log('View My Animations clicked')}
      />
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

const AppBarWithAuth = observer(
  ({
    onLogin,
    onLogout,
    onViewMyAnimations,
  }: {
    onLogin: () => void;
    onLogout: () => void;
    onViewMyAnimations: () => void;
  }) => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Control Panel
        </Typography>
        {authStore.isLoggedIn ? (
          <FlexRow>
            <Button color="inherit" onClick={onViewMyAnimations}>
              My Animations
            </Button>
            <IconButton color="inherit" onClick={onLogout}>
              <LogoutIcon />
            </IconButton>
          </FlexRow>
        ) : (
          <FlexRow>
            <IconButton color="inherit" onClick={onLogin}>
              <LoginIcon />
            </IconButton>
          </FlexRow>
        )}
      </Toolbar>
    </AppBar>
  ),
);

const BrightnessControl = () => (
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

const AnimationsList = ({
  animations,
  onSelectAnimation,
}: {
  animations: Animation[];
  onSelectAnimation: (id: string) => void;
}) => (
  <div css={[flex1, fullWidth, relative()]}>
    <div css={[absolute(0, 0, 0, 0)]}>
      <div
        css={[
          {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            padding: 16,
            gap: 16,
            overflow: 'auto',
            justifyItems: 'center',
          },
        ]}
      >
        {animations.map((animation) => (
          <AnimationCard
            key={animation.id}
            animation={animation}
            onSelect={() => onSelectAnimation(animation.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

const AnimationCard = ({
  animation,
  onSelect,
}: {
  animation: Animation;
  onSelect: () => void;
}) => (
  <Card variant="outlined" sx={[fullWidth, { height: 167, maxWidth: 400 }]}>
    <FlexColumn css={[fullSize]}>
      <CardContent sx={[flex1]}>
        <div css={[fullSize, relative()]}>
          <div css={[absolute(0, 0, 0, 0)]}>
            <FlexColumn css={[fullSize]}>
              <Typography variant="h6" sx={{ color: '#333', marginBottom: '8px' }}>
                {animation.title}
              </Typography>
              <Typography
                variant="body2"
                sx={[flex1, { color: '#555', overflow: 'auto' }]}
              >
                {animation.description}
              </Typography>
            </FlexColumn>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button
          disabled={!authStore.isLoggedIn}
          startIcon={<PlayArrow />}
          color="secondary"
          onClick={onSelect}
        >
          Play on Tree
        </Button>
        <Button startIcon={<OpenInBrowser />}>View in Editor</Button>
      </CardActions>
    </FlexColumn>
  </Card>
);

const LoginDialog = observer(
  ({ show, onClose }: { show: boolean; onClose: () => void }) => {
    useEffect(
      () =>
        reaction(
          () => authStore.isLoggedIn,
          (isLoggedIn) => {
            if (isLoggedIn) {
              onClose?.();
            }
          },
        ),
      [onClose],
    );

    return (
      <Dialog open={show} onClose={onClose}>
        <FlexColumn css={[{ padding: 10 }]} gap={10}>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={authStore.loginWithGoogle}
            sx={{
              backgroundColor: '#DB4437',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#C33D2E',
              },
            }}
          >
            Login with Google
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            onClick={authStore.loginWithGitHub}
            sx={{
              backgroundColor: '#000000',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            Login with GitHub
          </Button>
        </FlexColumn>
      </Dialog>
    );
  },
);
