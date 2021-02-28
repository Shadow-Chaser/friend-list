import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import User from './User/User.js';
function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch(`https://api.mocki.io/v1/50a92f35`)
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      setUsers(data);

    })
    .catch(error=>error)
  },[])

  return (

    <div className="App">

      <Header></Header>

      <div className="main-container">

        <div className="user-area">
          {
            users.map(user => <User user={user} key ={user.id}></User>)
          }
            
        </div>

      </div>

    </div>
  );
}

export default App;
