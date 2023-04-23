import styles from './App.module.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header/>
        <div className='d-flex'>
        <Sidebar/>
        <Suspense>
          <Outlet/>
        </Suspense>
        </div>
    </div>
  );
}

export default App;
