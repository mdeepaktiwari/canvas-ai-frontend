import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return !!storedToken;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [name, setName] = useState(() => localStorage.getItem("name"));
  const [credits, setCredits] = useState(() => {
    const storedCredits = localStorage.getItem("credits");
    return storedCredits ? parseInt(storedCredits, 10) : 0;
  });

  const login = (token, name = "John", credits = 0) => {
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("credits", credits.toString());
    setToken(token);
    setIsAuthenticated(true);
    setName(name);
    setCredits(credits);
  };

  const updateCredits = (newCredits) => {
    localStorage.setItem("credits", newCredits.toString());
    setCredits(newCredits);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("credits");
    setToken(null);
    setIsAuthenticated(false);
    setName(null);
    setCredits(0);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        name,
        credits,
        login,
        logout,
        updateCredits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
