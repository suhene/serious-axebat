import './style.css'

export const Navbar = () =>{
    return(
            <nav className='container'>
                <div className='logo'>
                    <h2 className='logo-primary-color'>DEMO <span style={{color:'blue'}}>MOVIE</span></h2>
                </div>
                <ul>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Coming Soon</a></li>
                    <li><a href='/'>News</a></li>
                    <li><a href='/'>Contact us</a></li>
                </ul>
            </nav>
    )
}