import { PlayArrow, OpenInBrowser, Delete } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Popover,
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
import { FlexColumn } from './Flex';
import { Animation } from '../firebase';
import { DeleteButton } from './DeleteButton';

export const AnimationCard = ({
  animation,
  onSelect,
  allowDelete,
}: {
  animation: Animation;
  onSelect: () => void;
  allowDelete?: boolean;
}) => (
  <Card variant="outlined" sx={[fullWidth, { height: 167, maxWidth: 400 }]}>
    <FlexColumn css={[fullSize]}>
      <CardContent sx={[flex1]}>
        <div css={[fullSize, relative()]}>
          {allowDelete && (
            <div
              css={[
                absoluteFromDirections({
                  top: 0,
                  right: 0,
                }),
                { zIndex: 1 },
              ]}
            >
              <DeleteButton
                onDelete={() => {
                  controlPanelModel.deleteAnimation(animation.id);
                }}
              />
            </div>
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
        <Button
          disabled={!authStore.isLoggedIn}
          startIcon={<PlayArrow />}
          color="secondary"
          onClick={onSelect}
        >
          Play on Tree
        </Button>
        <Button startIcon={<OpenInBrowser />}>View in Editor</Button>
      </CardActions>
    </FlexColumn>
  </Card>
);
