import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res);
      setUserData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Axios in React</h1>
      <ul>
        {userData.map((data) => (
          <li style={{ listStyle: "none" }} key={data.id}>
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
