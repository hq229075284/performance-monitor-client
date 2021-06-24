import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../home';
const staticRotuers = ()=><HashRouter>
  {/* https://reactrouter.com/web/api/Route/component */}
  {/* 优先级 children > component > render */}
  <Switch>
    <Redirect  from="/" to="/home" exact />
    <Route path="/home" component={Home} />
  </Switch>
  
</HashRouter>;

export default staticRotuers;