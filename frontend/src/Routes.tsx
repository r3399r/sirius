import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './constant/Page';
import Home from './page/home/Home';

const AppRoutes = () => (
  <Routes>
    <Route path={Page.Home} element={<Home />} />
    <Route path="/*" element={<Navigate to={Page.Home} />} />
  </Routes>
);

export default AppRoutes;
