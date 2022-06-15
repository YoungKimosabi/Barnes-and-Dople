import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconLabelButtons({children, variant, icon, ...props}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant={variant ?? "outlined"}{...props}>{children}={icon}
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Delete from reading list
      </Button>
    </Stack>
  );
}