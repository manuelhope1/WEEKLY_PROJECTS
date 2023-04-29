

function Email(){
    return(
        <form className="emailbox">
            <input type="text" className="email" placeholder="Email address"></input>
            <button id="start">Get Started<i className='bx bx-chevron-right' style={{margin:0,padding:0,}}></i></button>
        </form>
    );
}


export default Email;