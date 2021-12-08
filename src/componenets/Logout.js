const Logout = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <button type="submit" onClick={handleClick}>
      LogOut
    </button>
  );
};

export default Logout;
