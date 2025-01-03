import { Delete, DeleteForever } from '@mui/icons-material';
import { Button, IconButton, Popover, Typography } from '@mui/material';
import React from 'react';
import { FlexColumn } from './Flex';

export interface DeleteButtonProps {
  onDelete: () => void;
}

export const DeleteButton = (props: DeleteButtonProps) => {
  const { onDelete } = props;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'delete-popover' : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <Delete />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <FlexColumn center css={[{ padding: 10 }]} gap={5}>
          <Typography sx={{ fontStyle: 'italic' }} color="text.secondary">
            You sure bout' that?
          </Typography>
          <Button
            startIcon={<DeleteForever />}
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            Confirm Deletion
          </Button>
        </FlexColumn>
      </Popover>
    </>
  );
};
