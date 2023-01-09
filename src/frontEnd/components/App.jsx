import Basket from 'frontEnd/pages/Basket';
import Collection from 'frontEnd/pages/Collection';
import Device from 'frontEnd/pages/Device';
import { Route, Routes } from 'react-router-dom';
import Brand from 'server/services/brandSchema';
import Type from 'server/services/typeSchema';
import Login from '../pages/Auth/Login';
import Signin from '../pages/Auth/Signin';
import Home from '../pages/Home';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Signin />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:brand" element={<Brand />} />
        <Route path="/collection/:type" element={<Type />} />
        <Route path="/collection/:deviceId" element={<Device />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
      </Route>
    </Routes>
  );
};
