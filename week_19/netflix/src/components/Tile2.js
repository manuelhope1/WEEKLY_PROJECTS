import img1 from '../images/tile2.gif';

function Tile2 () {
    return(
       
         <div className='row Tile2'>
            <div className="col-md-6 image">
                <img src={img1} className="img-fluid"/>
            </div>
            <div className="col-md-6 Tile2info" >
                
                <h1 className='tileh1'>Download your shows to watch offline.</h1>
                <p className='tilep'>Save your favorites easily and always have something to watch.</p>
        
            </div>
            
         </div>
       
    );
}

export default Tile2; 