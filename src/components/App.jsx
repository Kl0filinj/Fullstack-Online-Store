// import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Signin from './Auth/Signin';
import SelectRoom from './SelectRoom/SelectRoom';
import Chat from './Chat/Chat';

export const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="/registration" element={<Signin />} />
      <Route path="select-room" element={<SelectRoom />} />
      <Route path="chat" element={<Chat />} />
      <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
    </Routes>
  );
};
