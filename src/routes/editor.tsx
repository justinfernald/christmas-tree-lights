import { useRef } from 'react';
import '../App.css';

import { flex, flex1, flexCenter, flexColumn, fullSize, fullWidth } from '../styles';
import { AppContext, EditorModel, useAppModel } from '../models/EditorModel';
import { CodeEditor, CodeEditorRef } from '../components/CodeEditor';
import { observer } from 'mobx-react-lite';

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useViewModelConstructor } from '../utils/ViewModel';
import { ControlBar } from '../components/ControlBar';
import { Display } from '../components/Display';
import { Alert, Snackbar } from '@mui/material';
import { DragHandleRounded } from '@mui/icons-material';

const queryClient = new QueryClient();

export const Editor = observer(() => {
  const codeEditorRef = useRef<CodeEditorRef | null>(null);
  const appModel = useViewModelConstructor(EditorModel, {
    codeEditorRef,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appModel}>
        <div css={[flexColumn, fullWidth, flex1]}>
          <ControlBar />
          <div css={[flex(), fullWidth, flex1, { background: 'black' }]}>
            <PanelGroup direction="horizontal">
              <Panel collapsible defaultSize={50} minSize={20}>
                <CodeEditor ref={codeEditorRef} />
              </Panel>
              <ResizeHandle />
              <Panel collapsible defaultSize={50} minSize={20}>
                <Display />
              </Panel>
            </PanelGroup>
          </div>
        </div>
        <SnackbarHandler />
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

export function ResizeHandle({
  className = '',
  collapsed = false,
  id,
}: {
  className?: string;
  collapsed?: boolean;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      className={className}
      css={{
        margin: 4,
        borderRadius: 4,
        width: 8,
        backgroundColor: '#111',
        transition: '0.3s ease-in-out',
        '&:hover': {
          backgroundColor: '#222',
        },
        '&:active': {
          backgroundColor: '#333',
        },
      }}
      id={id}
    >
      <div
        css={[
          flexCenter,
          fullSize,
          { transform: 'perspective(1px) scale(0.8) rotate(90deg)' },
        ]}
        data-collapsed={collapsed || undefined}
      >
        <DragHandleRounded css={{ color: '#444' }} />
      </div>
    </PanelResizeHandle>
  );
}
