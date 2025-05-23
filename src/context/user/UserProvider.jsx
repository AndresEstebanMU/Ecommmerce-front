import axiosClient from "../../config/axiosClient"
import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducer from "./userReducer"
import { useNavigate } from "react-router-dom"


const UserProvider = ({children}) => {

  const navigate = useNavigate()
  //initialState
  const initialState = {
    infoUser: {},
    authStatus: false,
    loadingUser: true
  }

  const [userState, dispatch] = useReducer(userReducer, initialState)

  

  //useReducer ---> estados

  //Funciones

  const loginUser = async(user) => {
    try {
      const userLogin = await axiosClient.post("/login", user)
      const userOn = userLogin.data
     /*  console.log(userOn)
      console.log(userOn.token) */

      if(userOn.success){
        localStorage.setItem("token", userOn.token);
        dispatch({
          type: "REGISTER/LOGIN",
          payload: userOn.token
        })
      }

    } catch (error) {
      console.log(error)
    }
  }

  const registerUser = async(user) => {
    try {
      const userRegister = await axiosClient.post("/user", user)
      const userOn = userRegister.data
     /*  console.log(userOn)
      console.log(userOn.token) */

      if(userOn.success){
        localStorage.setItem("token", userOn.token);
        dispatch({
          type: "REGISTER/LOGIN",
          payload: userOn.token
        })
      }
      console.log(userOn.message)

    } catch (error) {
      console.log(error)
    }
  }

  const verifyToken = async() => {
    const token = localStorage.getItem("token")

    if(token){
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
      delete axiosClient.defaults.headers.common["Authorization"]
    }

    dispatch({ type: "LOADING_USER" });

    try {
      const infoUserVerify = await axiosClient.get("/verifyUser")
      
      dispatch({
        type: "INFO_USER",
        payload: infoUserVerify.data.info
      })

    } catch (error) {
      console.log(error)
      dispatch({ type: "SIGN_OUT" });
    }
  }

  const signOut = async() => {
    try {
      localStorage.removeItem("token");
      dispatch({type: "SIGN_OUT"})
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{
      loginUser, 
      registerUser, 
      verifyToken, 
      signOut, 
      infoUser: userState.infoUser, 
      authStatus: userState.authStatus,
      loadingUser: userState.loadingUser
    }}>{children}</UserContext.Provider>
  )
}

export default UserProvider