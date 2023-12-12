import { observer } from 'mobx-react-lite';
import { useAppModel } from '../models/AppModel';
import { useEffect } from 'react';
import { flex1, relative, absolute } from '../styles';
import { MainApp } from '../visualizer/display';
import { Button } from './Button';
import { ViewInArRounded } from '@mui/icons-material';

export const Display = observer(() => {
  const appModel = useAppModel();

  useEffect(() => {
    if (!appModel) return;

    appModel.displayApp = new MainApp(appModel);

    () => {
      appModel.displayApp?.destructor();
    };
  }, [appModel]);
  // add iframe lister for messages from the parent

  return (
    <div css={[flex1, relative()]}>
      <div css={[absolute(0, 0, 0, 0), { overflow: 'hidden' }]}>
        <canvas id="mainCanvas" />
      </div>

      <div css={[absolute(undefined, 3, 3)]}>
        <Button
          title="Reset Camera"
          onClick={() => appModel.displayApp?.resetCamera()}
          css={{ width: 40, height: 40, borderRadius: 20 }}
        >
          <ViewInArRounded />
        </Button>
      </div>
    </div>
  );
});
