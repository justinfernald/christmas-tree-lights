import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';
import './App.css';

import {
  absolute,
  flex,
  flex1,
  flexBetween,
  flexCenter,
  flexCenterVertical,
  flexColumn,
  fullHeight,
  fullWidth,
} from './styles';
import { MainApp } from './visualizer/display';
import { AppContext, AppModel, useAppModel } from './models/AppModel';
import { CodeEditor, CodeEditorRef } from './components/CodeEditor';
import { observer } from 'mobx-react-lite';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useViewModelConstructor } from './utils/ViewModel';

const queryClient = new QueryClient();

const App = observer(() => {
  const codeEditorRef = useRef<CodeEditorRef | null>(null);
  const appModel = useViewModelConstructor(AppModel, {
    codeEditor: codeEditorRef.current,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appModel}>
        <div css={[absolute(0, 0, 0, 0), flexColumn, { overflow: 'hidden' }]}>
          <ControlBar />
          <div css={[flex(), fullWidth, flex1]}>
            <div css={[flex1, fullHeight, flexColumn]}>
              <CodeEditor ref={codeEditorRef} />
            </div>
            <Display />
          </div>
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
});

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      css={[
        {
          background: '#777',
          cursor: 'pointer',
          borderRadius: 5,
          height: 30,
          padding: 10,
          textAlign: 'center',
          border: '1px solid #00000050',
        },
        flexCenter,
      ]}
    />
  );
};

const ControlBar = () => {
  const appModel = useAppModel();
  const [hasCode, setHasCode] = useState(false);

  return (
    <div css={[flex('row'), flexBetween, { height: 50, background: '#333', padding: 5 }]}>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        <Button
          onClick={() => {
            appModel.setupCode();
            setHasCode(true);
          }}
        >
          Load
        </Button>
      </div>
      <div css={[flex('row'), flexCenterVertical, { gap: 5 }]}>
        <Button disabled={!hasCode} onClick={appModel.play}>
          Play
        </Button>
        <Button disabled={!hasCode} onClick={appModel.pause}>
          Pause
        </Button>
        <Button disabled={!hasCode} onClick={appModel.step}>
          Step
        </Button>
        <Button disabled={!hasCode} onClick={appModel.reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

function Display() {
  const appModel = useAppModel();

  const [app, setApp] = useState<MainApp | null>(null);

  useEffect(() => {
    if (!appModel) return;

    setApp(new MainApp(appModel));
  }, [appModel]);
  // add iframe lister for messages from the parent

  return (
    <div css={flex1}>
      <canvas id="mainCanvas" />
    </div>
  );
}

export default App;
