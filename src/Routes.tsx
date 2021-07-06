import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  NewRecord: loadable(() => import('./pages/newRecord/NewRecord')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/home" component={route.Home} />
      <Route exact={true} path="/new-record" component={route.NewRecord} />
      {/* 上面的Route都不符合才到下面的Redirect */}
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRoutes;
