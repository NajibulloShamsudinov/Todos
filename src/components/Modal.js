import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Modal(props) {
  const { open, handleClose, title, send, user, handleChange, addEdit } = props;
  const { name, age, course, phone } = user;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={name}
          onChange={handleChange}
          name="name"
          label="Name"
          fullWidth
          variant="standard"
        />

        <TextField
          value={age}
          onChange={handleChange}
          name="age"
          type="number"
          label="Age"
          fullWidth
          variant="standard"
        />
        <TextField
          value={course}
          onChange={handleChange}
          name="course"
          label="Course"
          fullWidth
          variant="standard"
        />
        <TextField
          value={phone}
          onChange={handleChange}
          name="phone"
          label="Phone"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={addEdit}>{send}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
