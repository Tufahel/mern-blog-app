import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<div>Login</div>} />
      </Route>
    </Routes>
  );
}

export default App;
