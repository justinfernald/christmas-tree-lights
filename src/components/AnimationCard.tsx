import { PlayArrow, OpenInBrowser, Delete, Edit } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  LinearProgress,
  Tooltip,
  IconButton,
} from '@mui/material';
import { authStore, controlPanelModel } from '../App';
import {
  fullWidth,
  fullSize,
  flex1,
  absolute,
  relative,
  absoluteFromDirections,
} from '../styles';
import { FlexColumn, FlexRow } from './Flex';
import { Animation } from '../firebase';
import { DeleteButton } from './DeleteButton';
import { observer } from 'mobx-react-lite';

export const AnimationCard = observer(
  ({
    animation,
    onPlayOnTree,
    onViewInEditor,
    allowEdit,
    selected,
  }: {
    animation: Animation;
    onPlayOnTree: () => void;
    onViewInEditor: (edit: boolean) => void;
    allowEdit?: boolean;
    selected: boolean;
  }) => (
    <Card variant="outlined" sx={[fullWidth, { height: 167, maxWidth: 400 }]}>
      <FlexColumn css={[fullSize, relative()]}>
        {selected && (
          <div css={[absoluteFromDirections({ top: 0, left: 0, right: 0 })]}>
            <LinearProgress />
          </div>
        )}
        <CardContent sx={[flex1]}>
          <div css={[fullSize, relative()]}>
            {allowEdit && (
              <FlexRow
                css={[
                  absoluteFromDirections({
                    top: 0,
                    right: 0,
                  }),
                  { zIndex: 1 },
                ]}
              >
                <Tooltip title="Edit Animation">
                  <IconButton onClick={() => onViewInEditor(true)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Animation">
                  <div>
                    <DeleteButton
                      onDelete={() => {
                        controlPanelModel.deleteAnimation(animation.id);
                      }}
                    />
                  </div>
                </Tooltip>
              </FlexRow>
            )}
            <div css={[absolute(0, 0, 0, 0)]}>
              <FlexColumn css={[fullSize]}>
                <Typography variant="h6" sx={{ color: '#333', marginBottom: '8px' }}>
                  {animation.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={[flex1, { color: '#555', overflow: 'auto' }]}
                >
                  {animation.description}
                </Typography>
              </FlexColumn>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Tooltip
            placement="top"
            title={
              authStore.isLoggedIn
                ? 'Clicking here will play on the actual tree'
                : 'Login to play on tree'
            }
          >
            <div>
              <Button
                disabled={!authStore.isLoggedIn}
                startIcon={<PlayArrow />}
                color="secondary"
                onClick={onPlayOnTree}
              >
                Play on Tree
              </Button>
            </div>
          </Tooltip>
          <Button onClick={() => onViewInEditor(false)} startIcon={<OpenInBrowser />}>
            View in Editor
          </Button>
        </CardActions>
      </FlexColumn>
    </Card>
  ),
);
