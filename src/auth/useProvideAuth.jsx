import { useState } from "react";
const useProvideAuth = () => {
  const [user, setUser] = useState(
    localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null
  );

  const login = (userData) => {
    localStorage.setItem("auth", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};

export default useProvideAuth;
