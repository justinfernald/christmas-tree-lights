import { Button, Dialog } from '@mui/material';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { authStore } from '../../App';
import { FlexColumn } from '../Flex';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export const LoginDialog = observer(
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
