import img1 from '../images/tile4.png';

function Tile4 (){
    return(
        <div className='row Tile4'>
            <div className="col-md-6 image" >
            <img src={img1} className="img-fluid"/>
        </div>
        <div className="col-md-6 Tile4info" >
            
            <h1 className='tileh1'>Create profiles for kids.</h1>
            <p className='tilep'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
    
        </div>
        
     </div>
    );
}

export default Tile4;