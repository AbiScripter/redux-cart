// utils/auth.js
const isAuthenticated = () => {
  // Check if the user is authenticated
  // For example, you could check if there's a valid token in local storage
  const token = localStorage.getItem("token");
  return !!token; // Return true if token exists, false otherwise
};
