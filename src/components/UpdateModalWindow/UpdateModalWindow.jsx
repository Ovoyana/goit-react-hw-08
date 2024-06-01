import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from '@mui/material';
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  
  const UpdateModalWindow = ({
    open,
    handleClose,
    handleUpdate,
    phoneNumber,
    setPhoneNumber,
    name,
    setName,
  }) => {
    const handleChangeNumber = event => {
      setPhoneNumber(event.target.value);
    };
    const handleChangeName = event => {
      setName(event.target.value);
    };
    const clearFields = () => {
      setName('');
      setPhoneNumber('');
    };
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter changes
          </DialogContentText>
        </DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-number"
              label="Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={handleChangeName}
              helperText="Please enter new name"
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={phoneNumber}
              onChange={handleChangeNumber}
              inputProps={{
                pattern: '^\\d{3}-\\d{2}-\\d{2}$',
              }}
              helperText="Please enter new number in the format xxx-xx-xx"
            />
          </div>
        </Box>
  
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleUpdate();
              clearFields();
            }}
            color="primary"
            autoFocus
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default UpdateModalWindow;