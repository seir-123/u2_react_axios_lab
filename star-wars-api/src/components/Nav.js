import { Link, withRouter } from 'react-router-dom'


//learned about NavLinks via this stack Overflow thread: https://stackoverflow.com/questions/68635957/changing-the-color-of-the-active-nav-item-in-reactjs
//used them in order to use ActiveClassNames and change the link colors when selected

const Nav = () => {
    return (
        <div className='navBar'>
            <Link exact to="/" className='navLinks'>
                <h2>Home</h2>
            </Link>
            <Link exact to="/starships" className='navLinks' >
                <h2>Starships</h2>
            </Link>
            <Link to="/planets" className='navLinks' >
                <h2>Planets</h2>
            </Link>
            <Link to="/characters" className='navLinks' >
                <h2>Characters</h2>
            </Link>
        </div>

    )    
}
    
    export default Nav