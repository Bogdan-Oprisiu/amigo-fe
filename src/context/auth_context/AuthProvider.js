import React, { createContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
              ...state,
              isAuthenticated: true,
              user: action.payload.user,
            };
        case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
        case 'SIGN UP':
            return {
              ...state,
              isAuthenticated: true,
              user: action.payload.user,
            };
        default:
            return state;
    }
  };

  const [auth, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
