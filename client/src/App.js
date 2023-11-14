import React, {useEffect, useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter"
import {Context} from "./index"
import {check} from "./http/userAPI"


const App = () => {

  const {user} = useContext(Context)

  useEffect(() => {
    check().then(data => {
        user.setUser(data.user)
        user.setIsAuth(true)   
    }).catch((reason) => {
      if(reason.response.status === 401)
      {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
      }else{
        alert(reason.response.data.message)
      }
    })
}, [])

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
