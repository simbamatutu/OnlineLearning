import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Homescreen from './Screens/Homescreen';
import Coursescreen from './Screens/Coursescreen';

function App() {
  return (
    <Router>
      <main style={{ minHeight: '80vh' }}>
        <Route path='/' component={Homescreen} exact />
        <Route path='/Signup' component={Signup} />
        <Route path='/Login' component={Login} />
        <Route path='/course/:id' component={Coursescreen} />
      </main>
    </Router>
  );
}

export default App;
