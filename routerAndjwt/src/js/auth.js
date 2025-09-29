const isAuthenticated = () => {
  return !!localStorage.getItem("token");
  //참에가까운값 not->false->not->true
};

export default isAuthenticated;
