import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const SortingDropdown = ({ onSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (sortOption) => {
    onSort(sortOption); // Call the passed sorting function with the selected option
    handleClose();
  };

  return (
    <div>
      <Button
        id="sorting-button"
        aria-controls={open ? 'sorting-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sort
      </Button>
      <Menu
        id="sorting-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSort('A-Z')}>A-Z</MenuItem>
        <MenuItem onClick={() => handleSort('Z-A')}>Z-A</MenuItem>
        <MenuItem onClick={() => handleSort('Date')}>Date Posted</MenuItem>
      </Menu>
    </div>
  );
};

export default SortingDropdown;
