import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import Button from "@mui/material/Button";
import Modal from "./components/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const initialState = {
  id: null,
  name: "",
  age: null,
  course: "",
  phone: "",
};

function App(props) {
  //list Users
  const [users, setUsers] = useState([]);
  //User
  const [user, setUser] = useState(initialState);
  //Add Modal STATE
  const [addOpen, setAddOpen] = useState(false);
  // Edit Modal Satete
  const [editOpen, setEditOpen] = useState(false);
  // Id for ADD User
  const [id, setId] = useState(0);
  //Edited for change User
  const [editId, setEditId] = useState(0);

  // Open aDD Modal
  const handleOpenAdd = () => {
    setAddOpen(true);
    setUser(initialState);
  };
  // Close Add Modal
  const handleCloseAdd = () => {
    setAddOpen(false);
  };
  // Edit MODAL EDIT
  const handleOpenEdit = (id) => {
    setEditOpen(true);
    setEditId(id);
    setUser(users.filter((item) => item.id === id)[0]);
  };
  //
  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  // HandlChange of Inputs
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Add User
  const addUser = () => {
    let addUser = { ...user };
    addUser.id = id + 1;
    setId(id + 1);
    setUsers((prev) => {
      return [...prev, addUser];
    });
    setAddOpen(false);
  };
  //Delete User
  const deleteUser = (id) => {
    const copy = [...users].filter((item) => item.id !== id);
    setUsers(copy);
  };

  // Edit User
  const editUser = () => {
    const editUsers = [...users].map((elem) => {
      if (elem.id === editId) {
        elem.name = user.name;
        elem.age = user.age;
        elem.course = user.course;
        elem.phone = user.phone;
        return elem;
      }
      return elem;
    });
    setUsers(editUsers);
    setEditOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ margin: 10 }}
        onClick={handleOpenAdd}
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{
              backgroundColor: "darkcyan",
            }}
          >
            <TableRow className="head">
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>DeleteIcon</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.course}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => deleteUser(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenEdit(id)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal Add */}
      <Modal
        open={addOpen}
        handleClose={handleCloseAdd}
        title="Add User"
        handleChange={handleChange}
        send="add"
        addEdit={addUser}
        user={user}
      />
      {/*  */}
      <Modal
        open={editOpen}
        handleClose={handleCloseEdit}
        title="Edit User"
        handleChange={handleChange}
        send="Edit"
        addEdit={editUser}
        user={user}
      />
    </>
  );
}

export default App;
