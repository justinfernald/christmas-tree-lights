import { useEffect, useState } from 'react';
import './App.css';
import { inject } from './example';

import { absolute, flex, flex1, fullHeight, fullSize } from './styles';
import Editor, { useMonaco } from '@monaco-editor/react';

function App() {
  const monaco = useMonaco();
  const [declarationLib, setDeclarationLib] = useState<string | null>(null);
  const [example, setExample] = useState<string | null>(null);

  useEffect(() => {
    if (monaco && declarationLib) {
      console.log('here is the monaco instance:', monaco);

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        typeRoots: ['node_modules/@types'],
      });

      const libUri = 'global.d.ts';

      const stub = `declare module 'christmas-tree' {${declarationLib}}`;

      monaco.languages.typescript.typescriptDefaults.addExtraLib(stub, libUri);

      console.log(declarationLib);
    }
  }, [monaco, declarationLib]);

  useEffect(() => {
    const controller = new AbortController();

    try {
      fetch('/initialCode.ts', { signal: controller.signal })
        .then((res) => res.text())
        .then((text) => setExample(text));
    } catch (e) {}

    return () => {
      controller.abort();
    };
  });

  useEffect(() => {
    const controller = new AbortController();

    try {
      fetch('/lib.d.ts', { signal: controller.signal })
        .then((res) => res.text())
        .then((text) => setDeclarationLib(text));
    } catch (e) {}

    return () => {
      controller.abort();
    };
  });

  return (
    <div css={[absolute(0, 0, 0, 0)]}>
      <div css={[flex(), fullSize]}>
        <div css={[flex1, fullHeight]}>
          {example && (
            <Editor
              theme="vs-dark"
              options={{ minimap: { enabled: false } }}
              defaultLanguage="typescript"
              defaultValue={example}
            />
          )}
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
