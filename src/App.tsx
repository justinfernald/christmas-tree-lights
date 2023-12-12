import { useRef } from 'react';
import './App.css';

import { absolute, flex, flex1, flexColumn, fullWidth } from './styles';
import { AppContext, AppModel, useAppModel } from './models/AppModel';
import { CodeEditor, CodeEditorRef } from './components/CodeEditor';
import { observer } from 'mobx-react-lite';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useViewModelConstructor } from './utils/ViewModel';
import { ControlBar } from './components/ControlBar';
import { Display } from './components/Display';
import { Alert, Snackbar } from '@mui/material';

const queryClient = new QueryClient();

const App = observer(() => {
  const codeEditorRef = useRef<CodeEditorRef | null>(null);
  const appModel = useViewModelConstructor(AppModel, {
    codeEditorRef,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appModel}>
        <div css={[absolute(0, 0, 0, 0), { height: '100vh' }, flexColumn]}>
          <ControlBar />
          <div css={[flex(), fullWidth, flex1]}>
            <CodeEditor ref={codeEditorRef} />
            <Display />
          </div>
        </div>
        <div>
          <SnackbarHandler />
        </div>
      </AppContext.Provider>
    </QueryClientProvider>
  );
});

const SnackbarHandler = observer(() => {
  const appModel = useAppModel();

  return (
    <Snackbar
      open={appModel.snackbar.showing}
      autoHideDuration={appModel.snackbar.timeout}
      onClose={appModel.closeSnackbar}
    >
      <Alert onClose={appModel.closeSnackbar} severity={appModel.snackbar.severity}>
        {appModel.snackbar.message}
      </Alert>
    </Snackbar>
  );
});

export default App;
