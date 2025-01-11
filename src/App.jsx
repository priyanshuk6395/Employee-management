import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employee from './components/dashboard/Employee'
import Admin from './components/dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useState([])
  const [userData,setUserData]=useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const userData=JSON.parse(storedUser)
      setUser(userData.role);
      setLoggedInUser(userData.role);
    }
  }, []);
  

  const handleLogin=(email,password)=>{
    if(userData && userData.admin.find((e)=>email==e.email && password==e.password)){
      setUser({role:'Admin'});
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }else if(userData){
      const employee=userData.employees.find((e)=>email==e.email && password==e.password);
      if(employee){
        localStorage.setItem('loggedInUser',JSON.stringify({role:'Employee'}));
        setLoggedInUser(employee);
      setUser({role:"Employee"});
      }
    }else{
      alert("Invalid Credentials");
    }
  }

  
  return (
    <>
    {!user.role ? <Login handleLogin={handleLogin} /> : null}
    {user.role === "Admin" ? (
  <Admin changeUser={setUser} />
) : user.role === "Employee" ? (
  <Employee changeUser={setUser} data={loggedInUser} />
) : null}

    </>
  )
}

export default App