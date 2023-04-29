import img1 from '../images/tile1.gif';

function Tile1 () {
    return(
       
         <div className='row Tile1'>
            <div className="col-md-6 Tile1info" >
                
                <h1 className='tileh1'>Enjoy on your TV.</h1>
                <p className='tilep'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        
            </div>
            <div className="col-md-6 image" >
                <img src={img1} className="img-fluid"/>
            </div>
         </div>
       
    );
}

export default Tile1; 