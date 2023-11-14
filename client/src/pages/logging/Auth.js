import React, {useState, useContext} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useNavigate} from "react-router-dom";
import { MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/Consts";
import { login } from '../../http/userAPI';
import { Context } from '../../index';
import MainNavBar from '../../components/Bar/MainNavBar';
import './auth.css'

const Auth = () => {

  const navigate = useNavigate()
  const {user} = useContext(Context)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      data = await login(login, password);
      
      user.setUser(data.user)
      user.setIsAuth(true)
      navigate(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div id="bg">

      <MainNavBar/>

        <Container
          className="d-flex justify-content-center align-items-center"
          style={{height: window.innerHeight - 54}}
      >
          <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto" style={{fontFamily: 'Playfair Display'}}>Авторизация</h2>
              <Form className="d-flex flex-column">
                  <Form.Control
                      className="mt-3"
                      placeholder="Введите ваш логин..."
                      value={login}
                      style={{fontFamily: 'Playfair Display'}}
                      onChange={e => setLogin(e.target.value)}
                  />
                  <Form.Control
                      className="mt-3"
                      placeholder="Введите ваш пароль..."
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      style={{fontFamily: 'Playfair Display'}}
                  />
                  <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <div style={{fontFamily: 'Playfair Display'}}>
                        Ещё не пользуетесь нашими трекерами? <NavLink to={REGISTRATION_ROUTE} style={{color:'black'}} >Присоединяйся!</NavLink>
                    </div>
                      <Button
                        variant={"outline-dark"}
                        className="mt-3"
                        onClick={click}
                        style={{fontFamily: 'Playfair Display'}}
                      >
                        Войти
                      </Button>
                  </Row>
              </Form>
          </Card>
      </Container>
    </div>
  )
}

export default Auth;
