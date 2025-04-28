const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER/LOGIN":
            localStorage.setItem("token", payload) // Bearer header.payload.firma
            return {
                ...state,
                authStatus: true,
                loadingUser: false
            }
        case "INFO_USER":
            return {
                ...state,
                infoUser: payload,
                authStatus: true,
                loadingUser: false
            }
        case "LOADING_USER":
            return {
                ...state,
                loadingUser: true
            };
        case "SIGN_OUT":
            localStorage.removeItem("token")
            return {
                ...state,
                infoUser: {},
                authStatus: false,
                loadingUser: false
            }     
        default:
            return state;
    }
}

export default userReducer;