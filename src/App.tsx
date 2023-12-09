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
import Editor, { useMonaco } from '@monaco-editor/react';
import { Uri, editor } from 'monaco-editor';

function App() {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monaco = useMonaco();
  const [declarationLib, setDeclarationLib] = useState<string | null>(null);
  const [example, setExample] = useState<string | null>(null);
  const [rerender, setRerender] = useState(0);

  const [tsProxy, setTsProxy] = useState<ts.IMonacoTypeScriptServiceProxy | null>(null);

  async function compile() {
    if (!editorRef.current || !tsProxy || !monaco) {
      console.log('not running compile');
      return;
    }

    const editor = editorRef.current;

    // tsProxy.getEmitOutput(editor.getModel()!.uri.toString()).then((r) => {
    //   console.log(r);
    // });

    const uri = editor.getModel()!.uri.toString();
    const monacoUri = Uri.parse(uri);

    const worker = await monaco.languages.typescript.getTypeScriptWorker();
    const client = await worker(monacoUri);
    const result = await client.getEmitOutput(uri.toString());

    const code = result.outputFiles[0].text;
    const newCode = code.replace(`require("christmas-tree");`, 'exports');

    const lib = await fetch('/lib.js').then((res) => res.text());

    const codeStub = `
    const exports = {};

    ${lib}

    ${newCode}`;

    eval(codeStub);
  }

  useEffect(() => {
    if (monaco && declarationLib && editorRef.current) {
      const editor = editorRef.current;

      monaco.languages.typescript.getTypeScriptWorker().then(function (
        worker: (...v: Uri[]) => Promise<any>,
      ) {
        worker(editor.getModel()!.uri).then(function (proxy) {
          setTsProxy(proxy);
        });
      });

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2016,
        allowNonTsExtensions: true,

        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.Classic,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: false,
        typeRoots: ['node_modules/@types'],
      });

      const libUri = 'global.d.ts';

      const stub = `declare module 'christmas-tree' {${declarationLib}}`;

      monaco.languages.typescript.typescriptDefaults.addExtraLib(stub, libUri);
    }
  }, [monaco, declarationLib, editorRef.current, rerender]);

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
        <div css={[flex1, fullHeight, flexColumn]}>
          <div>
            <button onClick={compile}>Compile</button>
          </div>
          <div css={[fullWidth, flex1]}>
            {example && (
              <Editor
                onMount={(editor) => {
                  editorRef.current = editor;
                  setRerender((r) => r + 1);
                }}
                theme="vs-dark"
                options={{ minimap: { enabled: false } }}
                defaultLanguage="typescript"
                defaultValue={example}
              />
            )}
          </div>
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
