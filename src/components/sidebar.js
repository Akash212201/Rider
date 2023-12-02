import {Link} from 'react-router-dom'
import './style/sidebar.css';
const Sidebar =({links,hideSidebar}) =>{
  return (
    <div className='sidebar pt-[12vw]'>
        {
            links.map(link =>( 
              <Link to={link.path} className="sidebarLinks" onClick={hideSidebar} key={link.name}>
                {link.name}
              </Link>
          ))
        }
        <div className='ml-5'>
          <Link to="/login"><button className="nav-btn">Login</button></Link>
        </div>
    </div>
  )
}

export default Sidebar;