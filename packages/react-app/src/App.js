import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout'
import UserDashboard from './Views/UserDashboard';

function App() {
  const [page, setPage] = useState(0)
  const pageHandler = (index) => {
    setPage(index)
  }
  const NotCreated = ()=> <div>Not Created yet</div>
  return (
    <Layout pageHandler={pageHandler}>

      {page === 2 ? <UserDashboard /> : <NotCreated/>}
    </Layout>
  );
}

export default App;
