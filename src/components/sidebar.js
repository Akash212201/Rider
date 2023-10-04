import { Link } from 'react-router-dom';
import './style/sidebar.css';
const Sidebar =({links,hideSidebar}) =>{
  return (
    <div className='sidebar'>
        {
            links.map(link =>( 
              <a href={link.path} className="sidebarLinks" onClick={hideSidebar} key={link.name}>
                {link.name}
              </a>
            ))
        }
    </div>
  )
}

export default Sidebar;