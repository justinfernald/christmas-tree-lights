import { useEffect, useRef, useState } from 'react';
import './App.css';

import {
  absolute,
  flex,
  flex1,
  flexColumn,
  fullHeight,
  fullSize,
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

  const [hasCode, setHasCode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appModel}>
        <div css={[absolute(0, 0, 0, 0), flexColumn]}>
          <div css={[flex('row')]}>
            <button
              onClick={() => {
                appModel.compile();
                setHasCode(true);
              }}
            >
              Run
            </button>
            <button disabled={!hasCode} onClick={appModel.play}>
              Play
            </button>
            <button disabled={!hasCode} onClick={appModel.pause}>
              Pause
            </button>
            <button disabled={!hasCode} onClick={appModel.step}>
              Step
            </button>
            <button disabled={!hasCode} onClick={appModel.reset}>
              Reset
            </button>
          </div>
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

function Display() {
  const appModel = useAppModel();

  const [app, setApp] = useState<MainApp | null>(null);

  useEffect(() => {
    console.log('hi');

    const listener = (event: MessageEvent) => {
      const { data } = event;
      console.log(data);

      // if (data.type === 'code') {
      //   console.log(data.data);
      //   app.updateCode(data.data);
      // }
    };

    appModel.worker.addEventListener('message', listener, false);

    // window.updateLights = (lights: any) => {
    //   // console.log(lights);
    //   app.setLights(lights);
    // };

    return () => {
      appModel.worker.removeEventListener('message', listener);
    };
  }, []);

  useEffect(() => {
    if (!appModel) return;

    setApp(new MainApp(appModel));
  }, [appModel]);
  // add iframe lister for messages from the parent

  return (
    <div css={flex1}>
      <canvas id="mainCanvas"></canvas>
    </div>
  );
}

export default App;
