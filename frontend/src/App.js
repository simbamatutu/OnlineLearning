import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './auth/Login';

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
