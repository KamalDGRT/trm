const isLoggedIn = () => {
  try {
    localStorage.getItem("taskToken");
  }
  catch(e) {
    console.log(e);
  }
}

export default isLoggedIn;
