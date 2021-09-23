
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import AdminGs from './components/admin/AdminGs';
import AdminMoh from './components/admin/AdminMoh';
import Hero from './components/Hero';
import AdminHome from './components/admin/AdminHome';

function App() {
  return (
    <div className="App">
   
<Router>
<Navbar />
 <Switch>
 <Route exact path='/admin' component={AdminHome}/>
   <Route exact path='/assign-gs' component={AdminGs}/>
   <Route exact path='/assign-moh' component={AdminMoh}/>
 </Switch>
</Router>
    </div>
  );
}

export default App;
