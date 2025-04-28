import UserContext from "../../context/user/UserContext";
import { useContext, useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Container,/*  Modal, */ TextField, CircularProgress } from "@mui/material";


const Profile = () => {

    const { infoUser, userEdit, loadingUser, verifyToken } = useContext(UserContext)

    const {name, email/* , age */} = infoUser

    const [open, setOpen] = useState(false);

    useEffect(() => {
      verifyToken();
    }, []);

    const [userForm, setUserForm] = useState({
      name: "",
      age: "",
      email: ""
    })

    useEffect(() => {
      if (infoUser && Object.keys(infoUser).length > 0) {
        setUserForm({
          name: infoUser.name || "",
          email: infoUser.email || "",
          age: infoUser.age || ""
        });
      }
    }, [infoUser]);

  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault();
    userEdit(userForm)
  }

 

  

  


  const handleOpen = () => {
    setOpen(!open)
  }

  if (loadingUser) {
    return (
      <Container sx={{ marginTop: "140px", textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6">Cargando perfil...</Typography>
      </Container>
    );
  }

  return (
    <div>
       <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "140px"
      }}>
        <Card sx={{ maxWidth: 500}}>
          <CardMedia sx={{ height: 250, width: 500}} image="https://source.unsplash.com/random" title="Hombre con cigarro" />
          <CardContent>
          <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {`${name}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {email}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleOpen}>{open ? "Close Edit" : "Edit User"}</Button>
            <Button size="small">Advanced Config</Button>
          </CardActions>
        </Card>
      </Container>
      <div>
        {open && (
          <Box
            component="form"
            onSubmit={sendData}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "20px",
              marginBottom: "40px"
            }}
            noValidate
            autoComplete="off"
          >


            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              Edita tu usuario!
            </Typography>
            <TextField
              id="outlined-name"
              label="Name"
              value={userForm.name}
              name="name"
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="outlined-age"
              label="Age"
              value={userForm.age}
              type="number"
              onChange={handleChange}
              name="age"
            />
            <TextField
              id="outlined-email"
              label="Email"
              value={userForm.email}
              type="email"
              onChange={handleChange}
              name="email"
            />
            <Button type="submit">Send</Button>

          </Box>
        )}
      </div>
    </div>
  )
}

export default Profile