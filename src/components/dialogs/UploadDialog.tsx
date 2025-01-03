import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  Tooltip,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { makeSimpleAutoObservable } from '../../utils/mobx';
import { BaseViewModel, useViewModelConstructor } from '../../utils/ViewModel';
import { Animation, createAnimation } from '../../firebase';
import { authStore } from '../../App';
import { FlexColumn } from '../Flex';
import { UploadRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router';

class UploadDialogViewModel extends BaseViewModel<UploadDialogProps> {
  animationData: Omit<Animation, 'id' | 'createdAt' | 'updatedAt'>;

  constructor(props: UploadDialogProps) {
    super(props);
    makeSimpleAutoObservable(this, {}, { autoBind: true });

    const user = authStore.user;

    if (!user) {
      throw new Error('User not logged in');
    }

    this.animationData = {
      code: props.code,
      ownerId: user.uid,
      title: '',
      description: '',
    };
  }

  get isValid() {
    return this.animationData.title.length > 4;
  }

  upload() {
    createAnimation(this.animationData);
  }
}

export interface UploadDialogProps {
  code: string;
  open: boolean;
  onClose: () => void;
}

export const UploadDialog = observer((props: UploadDialogProps) => {
  const { open, onClose } = props;

  const vm = useViewModelConstructor(UploadDialogViewModel, props);
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          vm.upload();
          navigateToProfile();
          onClose();
        },
      }}
    >
      <DialogTitle>Upload Animation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To upload this animation, please provide a title and a description.
        </DialogContentText>
        <FlexColumn gap={10}>
          <TextField
            autoFocus
            required
            name="title"
            label="Title"
            variant="standard"
            value={vm.animationData.title}
            onChange={(e) => (vm.animationData.title = e.target.value)}
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            variant="standard"
            value={vm.animationData.description}
            onChange={(e) => (vm.animationData.description = e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </FlexColumn>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Tooltip
          placement="top"
          title={vm.isValid ? null : 'You must provide a title to upload the animation'}
        >
          <div>
            <Button type="submit" disabled={!vm.isValid} startIcon={<UploadRounded />}>
              Upload
            </Button>
          </div>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
});
