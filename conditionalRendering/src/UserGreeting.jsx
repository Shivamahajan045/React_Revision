const UserGreeting = ({ isLoggedIn, userName }) => {
  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         <h1>User: {`Welcome ${userName}`}</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Please Login!</h1>
  //       </div>
  //     );
  //   }

  return isLoggedIn ? (
    <h1 className="welcome-message">User: {`Welcome ${userName}`}</h1>
  ) : (
    <h1>Please Login!</h1>
  );
};

export default UserGreeting;
