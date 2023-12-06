import { useEffect } from 'react';
import './App.css';
import { example } from './example';

import { absolute, flex, flex1, fullHeight, fullSize } from './styles';
import Editor, { useMonaco } from '@monaco-editor/react';

function App() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `
      // import { Color } from "./utils/Color";
      declare const runner: any;
      `,
        'global.d.ts',
      );
      // monaco.languages.
    }
  }, [monaco]);

  return (
    <div css={[absolute(0, 0, 0, 0)]}>
      <div css={[flex(), fullSize]}>
        <div css={[flex1, fullHeight]}>
          <Editor
            theme="vs-dark"
            options={{ minimap: { enabled: false } }}
            defaultLanguage="typescript"
            defaultValue={example}
          />
        </div>
        <Display />
      </div>
    </div>
  );
}

function Display() {
  return <div css={flex1}>HI</div>;
}

export default App;
