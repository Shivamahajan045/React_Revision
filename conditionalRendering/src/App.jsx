import UserGreeting from "./UserGreeting";
import Fruits from "./Fruits";
function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} userName="BroCode" />
      <Fruits />
    </div>
  );
}

export default App;
