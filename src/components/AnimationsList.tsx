import { Animation } from '../firebase';
import { flex1, fullWidth, absolute, relative } from '../styles';
import { AnimationCard } from './AnimationCard';

export const AnimationsList = ({
  animations,
  currentAnimationId,
  onSelectAnimation,
  onViewInEditor,
  allowDelete,
}: {
  animations: Animation[];
  currentAnimationId: string | null;
  onSelectAnimation: (id: string) => void;
  onViewInEditor: (id: string, edit: boolean) => void;
  allowDelete?: boolean;
}) => (
  <div css={[flex1, fullWidth, relative()]}>
    <div css={[absolute(0, 0, 0, 0)]}>
      <div
        css={[
          {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            padding: 16,
            gap: 16,
            overflow: 'auto',
            justifyItems: 'center',
          },
        ]}
      >
        {animations.map((animation) => (
          <AnimationCard
            selected={currentAnimationId === animation.id}
            key={animation.id}
            animation={animation}
            onPlayOnTree={() => onSelectAnimation(animation.id)}
            onViewInEditor={(edit) => onViewInEditor(animation.id, edit)}
            allowEdit={allowDelete}
          />
        ))}
      </div>
    </div>
  </div>
);
