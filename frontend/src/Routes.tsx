import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './constant/Page';
import Home from './page/home/Home';
import Record1 from './page/record1/Record1';
import Record2 from './page/record2/Record2';

const AppRoutes = () => (
  <Routes>
    <Route path={Page.Home} element={<Home />} />
    <Route path={Page.Record1} element={<Record1 />} />
    <Route path={Page.Record2} element={<Record2 />} />
    <Route path="/*" element={<Navigate to={Page.Home} />} />
  </Routes>
);

export default AppRoutes;
