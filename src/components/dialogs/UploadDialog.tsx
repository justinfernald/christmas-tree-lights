import LZString from 'lz-string';

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
import { Animation, createAnimation, updateAnimation } from '../../firebase';
import { authStore, controlPanelModel } from '../../App';
import { FlexColumn } from '../Flex';
import { UploadRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { action, reaction } from 'mobx';
import { useEffect } from 'react';

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
      code: '',
      ownerId: user.uid,
      title: '',
      description: '',
    };
  }

  setupReaction() {
    return reaction(
      () => this.animation,
      (animation) => {
        console.log({ animation });

        if (!animation) {
          return;
        }

        this.animationData = {
          code: animation.code,
          ownerId: animation.ownerId,
          title: animation.title,
          description: animation.description,
        };
      },
      {
        fireImmediately: true,
      },
    );
  }

  get animation() {
    const url = new URL(window.location.href);

    const animationId = url.searchParams.get('edit');

    if (!animationId) {
      return null;
    }

    const animation = controlPanelModel.animationsMap.get(animationId);

    return animation ?? null;
  }

  get isValid() {
    return this.animationData.title.length > 4;
  }

  upload() {
    // This is a dumb way of doing this, but I'm too lazy to do it correctly rn.
    this.animationData.code = LZString.decompressFromEncodedURIComponent(
      location.hash.substring(1),
    );

    if (this.animation) {
      updateAnimation(this.animation.id, this.animationData);

      return;
    }

    createAnimation(this.animationData);
  }
}

export interface UploadDialogProps {
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

  useEffect(() => {
    return vm.setupReaction();
  }, [vm]);

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
      <DialogTitle>{vm.animation ? 'Update' : 'Upload'} Animation</DialogTitle>
      <DialogContent>
        {!vm.animation && (
          <DialogContentText>
            To upload this animation, please provide a title and a description.
          </DialogContentText>
        )}
        <FlexColumn gap={10}>
          <TextField
            autoFocus
            required
            name="title"
            label="Title"
            variant="standard"
            value={vm.animationData.title}
            onChange={action((e) => (vm.animationData.title = e.target.value))}
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            variant="standard"
            value={vm.animationData.description}
            onChange={action((e) => (vm.animationData.description = e.target.value))}
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
              {vm.animation ? 'Update' : 'Upload'}
            </Button>
          </div>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
});
