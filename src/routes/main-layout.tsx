import { observer } from 'mobx-react-lite';
import { absolute, flexColumn } from '../styles';
import { Outlet } from 'react-router';
import { CssBaseline } from '@mui/material';

export const MainLayout = observer(() => {
  return (
    <>
      <CssBaseline />
      <div css={[absolute(0, 0, 0, 0), { height: '100vh' }, flexColumn]}>
        <Outlet />
      </div>
    </>
  );
});
