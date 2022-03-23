import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Menu />
    <h1>Hello world</h1>
    
    <Button variant="outline-danger">Primary</Button>
    </div>
    );
}

export default App;
