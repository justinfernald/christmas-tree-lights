import { Animation } from '../firebase';
import { flex1, fullWidth, absolute, relative } from '../styles';
import { AnimationCard } from './AnimationCard';

export const AnimationsList = ({
  animations,
  onSelectAnimation,
  allowDelete,
}: {
  animations: Animation[];
  onSelectAnimation: (id: string) => void;
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
            key={animation.id}
            animation={animation}
            onSelect={() => onSelectAnimation(animation.id)}
            allowDelete={allowDelete}
          />
        ))}
      </div>
    </div>
  </div>
);
