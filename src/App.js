import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import User from './User/User.js';
function App() {

  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState([]);

  useEffect(()=>{
    fetch(`https://api.mocki.io/v1/50a92f35`)
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      setUsers(data);

    })
    .catch(error=>error)
  },[])


  const handleAddFriend = (user)=> {
    // console.log("object", user)
    const newUserCount= [...userCount, user];
    setUserCount(newUserCount);
  };

  const totalSalary = userCount.reduce((sum,user)=>sum+user.salary, 0);

  return (

    <div className="App">

      <Header></Header>

      <div className="main-container">

        <div className="user-area">
          {
            users.map(user => <User user={user} key ={user.id} handleAddFriend={handleAddFriend}></User>)
          }
            
        </div>
        
        <Cart userCount={userCount} totalSalary = {totalSalary} > </Cart>

      </div>

    </div>
  );
}

export default App;
