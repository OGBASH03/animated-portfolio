import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return <>
    <div>
      <Sidebar />
      <div className="App">
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        <span

      </div>
    </div>
    </>
}

export default Layout
