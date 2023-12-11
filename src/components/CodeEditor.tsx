import { Editor, useMonaco } from '@monaco-editor/react';
import { flex1, fullWidth } from '../styles';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { editor, Uri } from 'monaco-editor';
import { observer } from 'mobx-react-lite';
import { BaseViewModel, useViewModelConstructor } from '../utils/ViewModel';
import { useQuery } from 'react-query';
import { makeSimpleAutoObservable } from '../utils/mobx';
import LZString from 'lz-string';

export interface CodeEditorViewModelProps {
  editor: editor.IStandaloneCodeEditor | null;
  monaco: typeof import('monaco-editor') | null;
}

export class CodeEditorViewModel extends BaseViewModel<CodeEditorViewModelProps> {
  constructor(props: CodeEditorViewModelProps) {
    super(props);
    makeSimpleAutoObservable(this, {}, { autoBind: true });
  }

  async compile() {
    if (!this.props.editor || !this.props.monaco) {
      console.log('not running compile');
      return;
    }

    const editor = this.props.editor;

    const uri = editor.getModel()!.uri.toString();
    const monacoUri = Uri.parse(uri);

    const worker = await this.props.monaco.languages.typescript.getTypeScriptWorker();
    const client = await worker(monacoUri);
    const result = await client.getEmitOutput(uri.toString());

    const code = result.outputFiles[0].text;
    const newCode = code.replace(`require("christmas-tree");`, 'exports;');

    const lib = await fetch('./lib.js').then((res) => res.text());

    const codeStub = `
    const exports = {};

    ${lib}

    ${newCode}
    `;

    return { code, newCode, codeStub };
  }
}

export interface CodeEditorRef {
  editor: editor.IStandaloneCodeEditor | null;
  compile: () => Promise<
    | {
        code: string;
        newCode: string;
        codeStub: string;
      }
    | undefined
  >;
}

export const CodeEditor = observer(
  forwardRef<CodeEditorRef>(function CodeEditor(props, ref) {
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const monaco = useMonaco();
    const [rerender, setRerender] = useState(0);

    const [hashCode] = useState(() => {
      return LZString.decompressFromEncodedURIComponent(location.hash.substring(1));
    });

    const viewModel = useViewModelConstructor(CodeEditorViewModel, {
      editor: editorRef.current,
      monaco,
    });

    const { data: example } = useQuery('initialCode.ts', async () => {
      const res = await fetch('./initialCode.ts');
      const text = await res.text();
      return text;
    });

    const { data: declarationLib } = useQuery('lib.d.ts', async () => {
      const res = await fetch('./lib.d.ts');
      const text = await res.text();
      return text;
    });

    useEffect(() => {
      if (monaco && declarationLib && editorRef.current) {
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

    useImperativeHandle(ref, () => ({
      editor: editorRef.current,
      compile: viewModel.compile,
    }));

    return (
      <div css={[fullWidth, flex1]}>
        {example && (
          <Editor
            onMount={(editor) => {
              editorRef.current = editor;
              setRerender((r) => r + 1);
            }}
            onChange={(code) => {
              if (code) {
                location.hash = LZString.compressToEncodedURIComponent(code);
              }
            }}
            theme="vs-dark"
            options={{ minimap: { enabled: false } }}
            defaultLanguage="typescript"
            defaultValue={hashCode || example}
          />
        )}
      </div>
    );
  }),
);
