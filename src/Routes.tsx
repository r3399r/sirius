import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={route.Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
