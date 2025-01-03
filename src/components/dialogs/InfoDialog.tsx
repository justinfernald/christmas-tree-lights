import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { flexBetween } from '../../styles';

export interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
}

export const InfoDialog = observer((props: InfoDialogProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} maxWidth={'lg'}>
      <DialogTitle>
        <div css={[flexBetween]}>
          <div>✨Info✨</div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/justinfernald/christmas-tree-lights/blob/main/docs/modules.md"
            >
              Library Documentation
            </a>
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          css={{
            '& > p': {
              marginBottom: 5,
            },
          }}
        >
          <p>
            Justin made this very quickly so give him some slack. It&apos;s not perfect.
          </p>
          <p>
            These points on this tree reflect the points on my actual Christmas tree at
            home. So all the code created in this editor can be sent to me, then I can run
            it on my tree If you sent me a program for the tree, I&apos;ll try to send you
            a video of me running it on the tree.
          </p>
          <p>
            Alternatively, you can go the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/justinfernald/christmas-tree-lights/tree/main/src/animations"
            >
              animations folder
            </a>{' '}
            and add your animation then make a pull request. Try give your filename a name
            that makes sense.
          </p>
          <p>
            The code editor uses the TypeScript compiler to compile your code. You can use
            any TypeScript code you want, but you can only use the following imports:
            <i>Color, Light, Utils, Vector3, Shapes, colors, runner</i>
          </p>
          <p>
            Note that Light have different properties for it&apos;s location to fit your
            need.
          </p>
          <p>
            The runner runs at a constant 30 fps. And it will stop running if it detects
            poor performance.
          </p>
          <p>
            Note that runner.setup will run at the beginning and runner.update will run
            every frame. light.update will also run every frame
          </p>
          <p>
            If you return a value in light.update, it will also set that value to
            it&apos;s color.
          </p>
          <p>You can also set a light&apos;s color by doing light.color = [some color]</p>
          <p>I&apos;m sorry 10x&apos;ers, I will not add a VI mode.</p>
          <p>
            The code in the editor is saved in the URL. I&apos;m sorry that it gets really
            really long. If you do Ctrl + S, it will copy the URL to your clipboard.
          </p>
          <p>
            I&apos;m also sorry that this is a word dump and doesn&apos;t have a specific
            order to what I mention about the editor. Regardless, enjoy!
          </p>
          <p>
            Credit to{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sirxemic/xmastree-app"
            >
              sirxemic
            </a>{' '}
            on GitHub for inspiration of the editor. Some code for the 3D view is taken
            from his version.
          </p>
          <p>
            Credit to{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=TvlpIojusBE"
            >
              Matt Parker
            </a>{' '}
            for inspiration of the Christmas Tree
          </p>
          <p>
            <a href="https://github.com/justinfernald/christmas-tree-lights">
              Source Code
            </a>
          </p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
});
