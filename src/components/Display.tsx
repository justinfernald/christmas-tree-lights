import { observer } from 'mobx-react-lite';
import { useAppModel } from '../models/AppModel';
import { useEffect } from 'react';
import { flex1, relative, absolute } from '../styles';
import { MainApp } from '../visualizer/display';

export const Display = observer(() => {
  const appModel = useAppModel();

  useEffect(() => {
    if (!appModel) return;

    const app = new MainApp(appModel);

    () => {
      app.destructor();
    };
  }, [appModel]);
  // add iframe lister for messages from the parent

  return (
    <div css={[flex1, relative()]}>
      <div css={[absolute(0, 0, 0, 0), { overflow: 'hidden' }]}>
        <canvas id="mainCanvas" />
      </div>
    </div>
  );
});
