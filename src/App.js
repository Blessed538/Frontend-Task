import './App.css';
import { React, useState } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navigation/Navbar';
import Dashboard from './Components/Dashboard.jsx/Main';
import SideNav from './Components/SideNav/SideNav';
import { Switch, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/Store/index';
import Main from './Components/Dashboard.jsx/Main.jsx';

function App() {
  const [collapse, setCollapse] = useState({ value: true });

  return (
    <Provider store={store}>
    <div className="h-100">
      <Header collapse={collapse} setCollapse={setCollapse} />

      <main class="h-100">
        <div className="container- bg-white h-100">
          <div className="d-flex pt-2 pl-3 pr-4 h-100">
            <SideNav setCollapse={setCollapse} collapse={collapse} />

            <Switch>
              <Route exact path="/" />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </main>
    </div>
    </Provider>
  );
}

export default App;
