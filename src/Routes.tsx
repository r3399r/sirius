import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  NewRecord: loadable(() => import('./pages/newRecord/NewRecord')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={route.Home} />
      <Route exact={true} path="/new-record" component={route.NewRecord} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
