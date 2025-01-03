import { AppBar, Button, Toolbar, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { observer } from 'mobx-react-lite';
import { authStore } from '../App';
import { FlexRow } from './Flex';
import { useState } from 'react';
import { LoginDialog } from './dialogs/LoginDialog';
import { Code } from '@mui/icons-material';

export const AppBarWithAuth = observer(
  ({
    onViewEditor,
    onViewControlPanel,
    onViewMyAnimations,
  }: {
    onViewEditor: () => void;
    onViewControlPanel?: () => void;
    onViewMyAnimations?: () => void;
  }) => {
    const [authDialogOpen, setAuthDialogOpen] = useState(false);

    const onLogin = () => setAuthDialogOpen(true);
    const onLogout = () => authStore.logout();
    const closeAuthDialog = () => setAuthDialogOpen(false);

    return (
      <>
        <LoginDialog show={authDialogOpen} onClose={closeAuthDialog} />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Control Panel
            </Typography>
            {authStore.isLoggedIn ? (
              <FlexRow gap={5}>
                <Button color="inherit" onClick={onViewEditor} startIcon={<Code />}>
                  Editor
                </Button>
                {onViewControlPanel && (
                  <Button color="inherit" onClick={onViewControlPanel}>
                    Control Panel
                  </Button>
                )}
                {onViewMyAnimations && (
                  <Button color="inherit" onClick={onViewMyAnimations}>
                    My Animations
                  </Button>
                )}
                <IconButton color="inherit" onClick={onLogout}>
                  <LogoutIcon />
                </IconButton>
              </FlexRow>
            ) : (
              <FlexRow gap={5}>
                <Button color="inherit" onClick={onViewEditor} startIcon={<Code />}>
                  Editor
                </Button>
                <Button color="inherit" onClick={onLogin} startIcon={<LoginIcon />}>
                  Login
                </Button>
              </FlexRow>
            )}
          </Toolbar>
        </AppBar>
      </>
    );
  },
);
