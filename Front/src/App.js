import styles from './App.module.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Sidebar from './components/Bar/Sidebar/Sidebar';
import AuthProvider from './providers/AuthProvider';
import './i18n/i18n';

function App() {
  if(localStorage.getItem('mode') === "dark"){
    document.documentElement.setAttribute("data-theme", "dark");
  }else{
    document.documentElement.setAttribute("data-theme", "");
  }

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
