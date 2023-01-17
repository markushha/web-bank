export const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.replace("/");
};