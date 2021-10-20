import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/Home/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import ContextProvider from './context/ContextProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';
import Appointment from './Pages/Appointment/Appointment';
import PrivateLoginRoute from './Pages/Login/PrivateLoginRoute/PrivateLoginRoute';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateLoginRoute path="/register">
              <Register></Register>
            </PrivateLoginRoute>
            <PrivateLoginRoute path="/login">
              <Login></Login>
            </PrivateLoginRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </ContextProvider>
    </div>
  );
}

export default App;
