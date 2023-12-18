import { observer } from 'mobx-react-lite';
import { useAppModel } from '../models/AppModel';
import { useEffect } from 'react';
import { relative, absolute, fullSize } from '../styles';
import { MainApp } from '../visualizer/display';
import { Button } from './Button';
import { ViewInArRounded } from '@mui/icons-material';

export const Display = observer(() => {
  const appModel = useAppModel();
  const flare = appModel.flare;

  useEffect(() => {
    if (!appModel) return;

    appModel.displayApp = new MainApp(appModel, flare);

    () => {
      appModel.displayApp?.destructor();
    };
  }, [appModel, flare]);

  return (
    <div css={[fullSize, relative(), { background: 'black' }]}>
      <div css={[absolute(0, 0, 0, 0), { overflow: 'hidden' }]}>
        <canvas id="mainCanvas" />
      </div>

      <div css={[absolute(undefined, 5, 5)]}>
        <Button
          icon
          title="Reset Camera"
          onClick={() => appModel.displayApp?.resetCamera()}
          css={{ borderRadius: 20 }}
        >
          <ViewInArRounded />
        </Button>
      </div>
    </div>
  );
});
