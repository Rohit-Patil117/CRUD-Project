import './App.css';
import Insert from './components/Insert';
import Fetch from './components/Fetch';
import Delete from './components/Delete';
import Update from './components/Update';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="App-add">
        <BrowserRouter>
          <Link to=""><Button color="primary">Insert</Button></Link>
          <Link to="/update"><Button>Update</Button></Link>
          <Link to="/delete"><Button color="secondary">Delete</Button></Link>

          <Route exact path="/" component={Insert}/>
          <Route path="/update" component={Update}/>
          <Route path="/delete" component={Delete}/>
          
        </BrowserRouter>
      </div>
      <div className="App-header">
        <Fetch />  
      </div>
    </div>
  );
}

export default App;
