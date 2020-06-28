import React from 'react';
import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Statistics from '../components/Statistics';
import NewData from '../components/NewData';
import AdminMembers from '../components/AdminMembers';

function App() {
  return (
    <div className="App">
      <header>
        <h1>IMPERIAL BORKS</h1>
        <nav>
          <Link to="/statistics">
            <p className='menu statistics'>Estadísticas</p>
          </Link>
          <Link to="/new_Data">
            <p className='menu data'>Añadir datos</p>
          </Link>
          <Link to="/admin_members">
            <p className='menu members'>Gestión miembros</p>
          </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/statistics" component={Statistics} />
        <Route path="/new_Data" component={NewData} />
        <Route path="/admin_members" component={AdminMembers} />
      </Switch>
    </div>
  );
}

export default App;