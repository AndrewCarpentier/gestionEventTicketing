import styles from './App.module.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Sidebar from './components/Bar/Sidebar/Sidebar';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header/>
            <div className='d-flex justify-content-center'>
            <Sidebar/>
            <Suspense>
              <Outlet/>
            </Suspense>
            </div>
        </div>
    </AuthProvider>
  );
}

export default App;
