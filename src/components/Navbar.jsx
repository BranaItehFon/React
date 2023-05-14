import { Link } from 'react-router-dom';

const Navbar = ({ price }) => {
    return ( 
        <div className="navbar">
            <h1 style={{color: 'white'}}>{price}</h1>
            <Link to='/main'><button className='nav-btn'>Popular now</button></Link>
        </div>
     );
}
 
export default Navbar;