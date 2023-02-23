import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import ContextProvider from './components/context/GlobalContext';
import Movies from './components/Movies';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className='main-page container'>
        <Sidebar />
        <div className='col-lg-10 col-md-12 col-sm-12'>
          <ContextProvider>
            <Routes>
              <Route path='/' element={<Movies />} />
              <Route path='/add' element={<Add />} />
              <Route path='/watchlist' element={<WatchList />} />
              <Route path='/watched' element={<Watched />} />
            </Routes>
          </ContextProvider>

        </div>
      </div>
    </>
  );
}

export default App;
