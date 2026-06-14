// import { Children, createContext, useReducer } from "react";

// const AuthContext = createContext()

// const initialState = {
//     accessToken: null
// }

// function reducer(state, action){
//     if (action.type === "setToken") {
//         state = {...state, accessToken: action.payload}
//     }

//     return state
// }

// export const AuthProvider = ({Children, defaultState = initialState})=>{
//     const [state, dispatch] = useReducer(reducer, defaultState)

//     return <AuthContext.Provider value={[state, dispatch]}>
//         {Children}
//     </AuthContext.Provider>
// }

// export default AuthContext



import { createContext, useReducer } from "react";

// Create context
const AuthContext = createContext(null);

// Initial state
const initialState = {
    accessToken: null
};

// Reducer
function reducer(state, action) {
    switch (action.type) {
        case "setToken":
            return { ...state, accessToken: action.payload };
        default:
            return state;
    }
}

// AuthProvider
export const AuthProvider = ({ children, defaultState = initialState }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
