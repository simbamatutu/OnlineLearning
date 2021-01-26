import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Homescreen from './Screens/Homescreen';
import Coursescreen from './Screens/Coursescreen';
import Courseware from './Screens/Courseware';
function App() {
  return (
    <Router>
      <Switch>
        <main style={{ minHeight: '80vh' }}>
          <Route path='/' component={Homescreen} exact />
          <Route path='/Signup' component={Signup} />
          <Route path='/Login' component={Login} />
          <Route path='/course/:id' component={Coursescreen} />
          <Route path='/course/:id/:name' component={Courseware} />
        </main>
      </Switch>
    </Router>
  );
}

export default App;
