import logo from '../images/logo.png'; 

function Navi (){
    return(

            <nav className="navbar" id='Nav'>
            <div className="container-fluid">
                <img src={logo} className='img-fluid logo'/>
                <form className="d-flex" role="search">
               
                <button className='Sign'>Sign In</button>
                </form>
            </div>
            </nav>
    )
}

export default Navi;